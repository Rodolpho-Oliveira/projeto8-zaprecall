export default function Footer(props){
    const {answeredQuestion} = props
    return(
        <>
            <div className="finished-questions">
                {answeredQuestion === 8 ? <><p>Parabéns!</p> <img src="./sources/party.png" /> <p>Você não esqueceu de<br/> nenhum flashcard!</p></>: null}
                <p>{answeredQuestion}/8 CONCLUÍDOS</p>
            </div>
        </>
    )
}



