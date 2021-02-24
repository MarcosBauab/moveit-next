import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/MarcosBauab.png" alt="Marcos Bauab"/>
            <div>
                <strong>Marcos Bauab</strong>
                <p>
                  <img src="icons/level.svg" alt="Nível"/>
                  Level 1
                </p>
            </div>
        </div>
    )
}