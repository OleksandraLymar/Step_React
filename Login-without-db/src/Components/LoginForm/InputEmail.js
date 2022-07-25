import {useState} from 'react';
import "./styles/styles.css"

export default function InputEmail() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    //функция валидности
    function isValidEmail(email) {
        //используем метод test - тестируем по этому правилу /\S+@\S+\.\S+/
        return /\S+@\S+\.\S+/.test(email);
    }
    //изменение в инпуте
    const handleChange = event => {
        //если имейл не валидный то присылает ошибку
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        //значение
        setMessage(event.target.value);
    };

    return (
        <div>
            <input
                id="message"
                name="message newName"
                value={message}
                onChange={handleChange}
            />
            {error && <p>{error}</p>}
        </div>
    );
}
