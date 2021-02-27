import { createContext, ReactNode, useState } from 'react';
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
}


export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExeperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const[activeChallenge, setActiveChallenge] = useState(null)
    
    function levelUp(){
        setLevel(level + 1)
    }
    //Como RPGs calculam a xp pro próximo nível
    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
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