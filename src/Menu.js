import Questions from "./Questions"
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