import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookie from 'js-cookie'
import challenges from '../../challenges.json'

interface Challenge{
    type : 'body' | 'eye';
    description: string;
    amount : number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted:number; 
    activeChallenge: Challenge;
    completeChallenge: () => void;
    //Função que não retorna nada
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
    level: number,
    currentExperience: number,
    challengesCompleted: number
}


export const ChallengesContext = createContext({} as ChallengesContextData)
                                            //tudo que não é o children
export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
                                    //se não tiver, usa 1
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExeperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const[activeChallenge, setActiveChallenge] = useState(null)
    

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookie.set('level', String(level))
        Cookie.set('currentExperience', String(currentExperience))
        Cookie.set('challengesCompleted', String(challengesCompleted))
    }, [level,currentExperience, challengesCompleted])


    function levelUp(){
        setLevel(level + 1)
    }
    //Como RPGs calculam a xp pro próximo nível
    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio!', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if (!activeChallenge)
            return;
        
        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setCurrentExeperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return(
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                activeChallenge,
                completeChallenge, 
                levelUp,
                startNewChallenge,
                resetChallenge
                }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}