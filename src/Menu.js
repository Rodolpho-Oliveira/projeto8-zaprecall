import { useState } from "react";
export default function Menu(){
    const questions = [
        {
            number: "pergunta 1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            number: "pergunta 2",
            question: "O React é __ ",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            number: "pergunta 3",
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            number: "pergunta 4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        }
    ]
    return (
        <div className="menu">
            <div className="questions">
                {questions.map(question => <Questions number={question.number} question={question.question} answer={question.answer}  />)}
            </div>
        </div>
    )
}

function Questions(props){
    const [color, setColor] = useState(false)
    const [answers, setAnswers] = useState(false)
    const [questions, setQuestions] = useState(false)
    const {number, question, answer} = props
    return(
        <div>
            <div onClick={() => setQuestions(!questions)} className={questions ? "hide" : "question-number" ? `${color} question-number` : "hide"}>
                <p>{number}</p>
            </div>
            <div className={answers === false && questions ? "question" : "hide"}>
                <p onClick={() => setQuestions(!questions)}>{question}</p>
                <div>
                    <img onClick={() => setAnswers(!answers)} className={answers ? "hide" : "arrow"} src="./sources/setinha.png" />
                </div>
            </div>
            <div className={answers && questions ? "question answer" : "hide"}>
                <p>{answer}</p>
                <div className="answers">
                    <p onClick={() => ShowAnswer("red")}  className={questions ?" answer-box red" : "hide"} >Não lembrei</p>
                    <p onClick={() => ShowAnswer("yellow")} className={questions ?" answer-box yellow" : "hide"}>Quase não lembrei</p>
                    <p onClick={() => ShowAnswer("green")} className={questions ?" answer-box green" : "hide"}>Zap!</p>
                </div>
            </div>
        </div>
    )
    function ShowAnswer(colors){
        setQuestions(!questions)
        setColor(colors)
    }
}

