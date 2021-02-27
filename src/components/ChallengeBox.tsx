import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)

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
                        <button type="button" className={styles.challengeFailed} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.challengeCompleted} onClick={completeChallenge}>Completei</button>
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