import { useState } from 'react';

//Tipagem
interface ButtonProps{
    color: string;
    children: string;
}



//                     tipo das props
export function Button(props: ButtonProps){
    const [counter, setCounter] = useState(1)

    function increment(){
     //Criar um novo valor para a constante
     setCounter(counter + 1)   
    }

    return (
        <button type="button" style={{ backgroundColor : props.color }} onClick={increment}>
            {props.children} <strong>{counter}</strong>
        </button>
    )
}