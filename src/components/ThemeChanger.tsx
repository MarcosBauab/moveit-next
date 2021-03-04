import styles from '../styles/components/ThemeChanger.module.css'

export function ThemeChanger(){
    
    
    const initialProperties = {
        white: "#fff",
        background : "#f2f3f5",
        text : "#666666",
        title: "#2E384d",
    }
    const darkProperties = {
        white: "#242222",
        text : "#d4d4d4",
        title: "#7285ab",
        background : "#696b6e",
    }

    const transformKey = key => "--" + key.replace(/[(A-Z)]/, "-$1").toLowerCase()

    /*function changeTheme(colors){
        Object.keys(colors).map((key) => {
            root.style.setProperty(transformKey(key), colors[key])
        })
    }*/

    return(
        <div className={styles.container}>
            <button type="button">botão teste</button>
        </div>
    )
}