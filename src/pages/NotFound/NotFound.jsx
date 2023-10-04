import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    const myInterval = setInterval(() => {
        setCount(count-1);
    }, 1000)

    setTimeout(() => {
        clearInterval(myInterval)
        navigate('/home');
    }, 5000)

    return (
        <div className="not-found">
            <h1>Página não encontrada!</h1>
            <p>Você será redirecionado em {count} s</p>
            <img src="../images/page_not_found2.svg" alt="imagem de not-found" />
        </div>
    )
}

export default NotFound
