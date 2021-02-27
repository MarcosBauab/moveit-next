import { useContext } from 'react';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/MarcosBauab.png" alt="Marcos Bauab"/>
            <div>
                <strong>Marcos Bauab</strong>
                <p>
                  <img src="icons/level.svg" alt="Nível"/>
                  Level {level}
                </p>
            </div>
        </div>
    )
}