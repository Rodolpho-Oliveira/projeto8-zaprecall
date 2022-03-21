import Questions from "./Questions"
export default function Footer(props){
    return(
        <>
            <div className="finished-questions">
                <p>{props.completed}/4 CONCLUÍDOS</p>
            </div>
        </>
    )
}



