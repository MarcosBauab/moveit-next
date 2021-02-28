import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeCompleted(){
        completeChallenge()
        resetCountdown()
    }
    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challengeContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="exercício"/>
                        <strong>New Challenge!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailed} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeCompleted} onClick={handleChallengeCompleted}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.noChallenges}>
                    <strong>Finalize um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Avance de nível completando desafios.
                    </p>
                </div>
            ) }
        </div>
    )
}