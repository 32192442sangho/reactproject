import { useState } from "react"
import { fashionapi, postfashionapi } from "fashion/api"

const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {testNum} = inputs
        
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    
    const getonClick = e =>{
        e.preventDefault()
        alert(`정보 : ${JSON.stringify(testNum)}`)
        fashionapi(testNum)
        .then((res)=>{
            alert(`Response is ${res.data.result}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시')
        })
        }

    const postonClick = e => {
        e.preventDefault()
        alert(`정보 : ${JSON.stringify(testNum)}`)
        postfashionapi(testNum)
        .then((res)=>{
            alert(`Response is ${res.data.result}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시')
        })
    }

    return (
    <>
    get숫자 : <input type="text" name="testNum" onChange={onChange} />
    <button onClick={getonClick}> get실행 </button>
    
    <br/>

    post숫자 : <input type="text" name="testNum" onChange={onChange} />
    <button onClick={postonClick}> post실행 </button>
    </>
    )}

export default Fashion