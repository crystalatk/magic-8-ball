import GetAnswer from './GetAnswer';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LinkHome from "./LinkHome";



const SendToFetch = (props) => {
    const { question } = useParams();
    console.log("QUESTION: ", question)
    return(
        <>
            <GetAnswer question={question}/>
            <Link to='/'>
                <LinkHome className="link">Have another question? Click here</LinkHome>
            </Link>
        </>
    )
}

export default SendToFetch;