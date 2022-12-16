import { Route, Routes } from "react-router-dom"
import {Navigation, Counter, Footer, Navigation2} from "cmm"
import {Schedule} from "cop"
import {LoginForm, SignupForm} from "uat"
import fashion from '../images/fashion.png'
import Iris from "iris/components/Iris"
import { Fashion } from "fashion"
const Home = () => {
    return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}>
                    <Navigation2></Navigation2>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Routes>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/todos" element={<Schedule/>}></Route>
                <Route path="/login" element={<LoginForm/>}></Route>
                <Route path="/signup" element={<SignupForm/>}></Route>
                <Route path="/fashion" element={<Fashion/>}></Route>
                <Route path="/iris" element={<Iris/>}></Route>
            </Routes>
            </td>
        </tr>
        <tr>
            <td>
                <img src={fashion} alt='f'/>
            </td>
        </tr>
        <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
                <Footer/>
            </td>
        </tr>
        </tbody>
    </table>
    </>)
}
export default Home