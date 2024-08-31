import {useState} from "react";


function useFlip (initialFlip = true){
    const [cardFlip, setCardFlip] = useState(initialFlip)
    const flip = ()=>{
        setCardFlip(cardFlip => !cardFlip)
    } 

    return [cardFlip, flip]
}


export default useFlip 