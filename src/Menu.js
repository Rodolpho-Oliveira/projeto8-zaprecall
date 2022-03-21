import Questions from "./Questions"
export default function Menu(props){
    const {answeredQuestion, setAnsweredQuestion} = props
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
        },
        {
            number: "pergunta 5",
            question: "O ReactDOM nos ajuda __ ",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            number: "pergunta 6",
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },{
            number: "pergunta 7",
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes "
        },
        {
            number: "pergunta 8",
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]
    return (
        <div className="menu">
            <div className="questions">
                {questions.map(question => <Questions answeredQuestion={answeredQuestion} setAnsweredQuestion={setAnsweredQuestion} number={question.number} question={question.question} answer={question.answer}  />)}
            </div>
        </div>
    )
}