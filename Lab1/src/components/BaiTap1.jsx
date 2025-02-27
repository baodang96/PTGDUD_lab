
import { useState } from "react";
import './BaiTap1.css'

export default function BaiTap1() {

    var [a, setA] = useState(0);
    var [b, setB] = useState(0);
    var [result, setResult] = useState(0);
    var [op, setOp] = useState('')

    const handleChangeA = (e) => {
        setA(parseInt(e.target.value))
    }

    const handleChangeB = (e) => {
        setB(parseInt(e.target.value))
    }

    const handleClick = (e) => {
        if(op == "+") {
            setResult(a+b)
        } else if(op == "-") {
            setResult(a-b)
        } else if(op == "*") {
            setResult(a*b)
        } else if (op == "/"){
            setResult(a/b)
        } else {
            alert("Chua chon phep tinh!")
        }
    }

    const handleOp = (e) => {
        setOp(e.target.value);
    }

    return (
        <>
            <div>
                <input onChange={handleChangeA} type="text" placeholder="a"/>
                <br />
                <input onChange={handleChangeB} type="text" placeholder="b"/>
                <br />
                <input value="+" onChange={handleOp} name="group" type="radio" /> <span>+</span>
                <input value="-" onChange={handleOp} name="group" type="radio" /> <span>-</span>
                <input value="*" onChange={handleOp} name="group" type="radio" /> <span>*</span>
                <input value="/" onChange={handleOp} name="group" type="radio" /> <span>/</span>
                <br />
                <button onClick={handleClick}>Enter</button>
                <br />
                <p>Result is: <span id="r">{result}</span></p>
            </div>
        </>
    )
}