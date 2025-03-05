import { useEffect, useState } from 'react'
import './Menu.css'

export default function Menu() {
    const [arr, setArr] = useState([])
    
    const data = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']

    useEffect(() => {
        setArr(data)
    }, [])

    return (
        <>
            {arr.map((item, index) => {
               return (
                <a href='#' key={index}><li>{item}</li></a>
               ) 
            })}
        </>
    )
}