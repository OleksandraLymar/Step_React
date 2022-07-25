import React from "react";
import "./styles/styles.css"

class InputPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }

    onChange(ev){
        this.checkValid(ev) // Внутренняя проверка
        if(this.props.onChange) {    // Если родитель назначил еще свою обработку onChange
            this.props.onChange(ev)  // то передать управление и ему
        }
    }
    //Creation of validation
    checkValid(ev){
        let pass = ev.target.value
        console.log(pass)
        let err = []

        // Переменная на наличие цифр
        let isNum = /\d{1,}/
        // Переменная на наличие больших букв
        let isUpper = /.*[A-Z].*/
        // Переменная на наличие маленьких букв
        let isLower = /.*[a-z].*/

        //если длинна пароля меньше 8 символов
        if(pass.length < 8) {
            err.push('Password must be longer than 8 characters')
        }
        //если нет цифр
        if(!isNum.test(pass)){
            err.push('Password must contain numbers')
        }
        //если нет больших букв
        if(!isUpper.test(pass)){
            err.push('Password must contain capital letters')
        }
        //если нет маленьких букв
        if(!isLower.test(pass)){
            err.push('Password must contain small letters')
        }
        //присвоение старой переменной данной переменной
        let oldState = this.state;
        //если ошибка - не работает
        if(err.length > 0) {
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        //вывод ошибки
        console.log(err)
    }

    render(){
        let err = ''
        if(!this.state.isValid) {
            err = (
                <ul>
                    { this.state.err.map( e => {
                        return (
                            <li> {e} </li>
                        )
                    })}
                </ul>
            )
        }

        let label = ''
        if (this.props.label){
            label = (<label>{this.props.label}</label>)
        }

        return (
            <div>
                <p>Enter password</p>
                {label}
                <input type="password" name="newAge" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}

export default InputPassword;