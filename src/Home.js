import { useState } from "react"
import Menu from "./Menu"
import Header from "./Header"
import Footer from "./Footer"
export default function Home(){
    const [screen, setScreen] = useState(false)
    const [answeredQuestion, setAnsweredQuestion] = useState(0)
    return(
        <>
            <div className={screen ? "hide" : null}>
                <div className="home">
                    <div className="logo">
                        <img src="sources/logo.png" alt="logo" />
                        <p className="home-title">ZapRecall</p>
                    </div>
                    <button onClick={() => setScreen(!screen)} className="start-button">Iniciar Recall!</button>
                </div> 
            </div>
            {screen ? <Header /> : null}
            {screen ? <Menu answeredQuestion={answeredQuestion} setAnsweredQuestion={setAnsweredQuestion}/> : null}
            {screen ? <Footer answeredQuestion={answeredQuestion}/> : null}
        </>
    )
}
