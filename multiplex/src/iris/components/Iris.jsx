import { useState } from "react"
import { irisapi } from "iris/api"

const Iris = () => {
    const [inputs, setInputs] = useState({})
    const {SepalLengthCm, SepalWidthCm,
        PetalLengthCm, PetalWidthCm} = inputs
        
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    
    const onClick = e =>{
    e.preventDefault()
    const request = {SepalLengthCm, SepalWidthCm,
        PetalLengthCm, PetalWidthCm}
    alert(`정보 : ${JSON.stringify(request)}`)
    irisapi(request)
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
    꽃받침 길이: <input type="text" name="SepalLengthCm" onChange={onChange} /><br/>
    꽃받침 폭: <input type="text" name="SepalWidthCm" onChange={onChange} /><br/>

    꽃잎 길이 : <input type="text" name="PetalLengthCm" onChange={onChange} /><br/>
    꽃잎 폭: <input type="text" name="PetalWidthCm" onChange={onChange} /><br/>
    
    <button onClick={onClick}> 실행 </button>
    </>
    )}

export default Iris