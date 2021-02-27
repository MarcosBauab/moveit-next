import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox(){

    const contextData = useContext(ChallengesContext)

    const hasChallenge = true


    return(
        <div className={styles.challengeContainer}>
            { hasChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 300xp</header>
                    <main>
                        <img src="icons/body.svg" alt="exercício"/>
                        <strong>New Challenge!</strong>
                        <p>Levante e caminhe por longos 3 minutos.</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeCompleted}>Completei</button>
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