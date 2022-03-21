import { useState } from "react"
export default function Questions(props){
    const [color, setColor] = useState(false)
    const [answers, setAnswers] = useState(false)
    const [questions, setQuestions] = useState(false)
    const {number, question, answer, setAnsweredQuestion, answeredQuestion} = props
    return(
        <>
        <div>
            <div className={color ? "stop-click" : ""}></div>
            <div onClick={() => setQuestions(!questions)} className={questions ? "hide" : "question-number" ? `${color} question-number` : "hide"}>
                <p>{number}</p>
                {color === false ? <ion-icon name="play-outline"></ion-icon> : null}
                {color === "green-line" ? <ion-icon name="checkmark-circle"></ion-icon> : null}
                {color === "yellow-line" ? <ion-icon name="help-circle"></ion-icon> : null}
                {color === "red-line" ? <ion-icon name="close-circle"></ion-icon> : null}
            </div>
            <div className={answers === false && questions ? "question" : "hide"}>
                <p className="question-p">{question}</p>
                <div>
                    <img alt="seta" onClick={() => setAnswers(!answers)} className={answers ? "hide" : "arrow"} src="./sources/setinha.png" />
                </div>
            </div>
            <div className={answers && questions ? "question answer" : "hide"}>
                <p className="answer-p">{answer}</p>
                <div className="answers">
                    <p onClick={() => ShowAnswer("red-line")}  className={questions ?" answer-box red" : "hide"} >Não lembrei</p>
                    <p onClick={() => ShowAnswer("yellow-line")} className={questions ?" answer-box yellow" : "hide"}>Quase não lembrei</p>
                    <p onClick={() => ShowAnswer("green-line")} className={questions ?" answer-box green" : "hide"}>Zap!</p>
                </div>
            </div>
        </div>
        </>
    )
    function ShowAnswer(colors){
        setQuestions(false)
        setColor(colors)
        setAnsweredQuestion(answeredQuestion+1)
    }
}