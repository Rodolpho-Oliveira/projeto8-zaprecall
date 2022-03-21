import { useState } from "react";
import Menu from "./Menu"
export default function Home(){
    const [screen, setScreen] = useState(false)
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
           {screen ? <Menu /> : null}
        </>
    )
}
