import React from "react"
import Contact from "./Contact";
import AddContact from "./AddContact";
import './PhoneBook.css';

class PhoneBook extends React.Component {
    //Настройка моего компонента
    constructor(props) {//запускается каждый раз в момент создания
        super(props);
        this.state = {
            contacts: [] //collection of phonebook
        }
    }
//сохранение а книгу контактов
    saveToLS() {
        localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts))
    }
//загрузка из книги контактов
    loadFromLS() {
        const oldState = this.state//получаю состояние хранилища компонентов
        if (localStorage.getItem("phoneBook"))//если в локальном хранилище есть данные
            oldState.contacts = JSON.parse(localStorage.getItem("phoneBook"));//получаю их
        else
            oldState.contacts = []//если нет данных - оставляю пустым
                this.setState(oldState)//обновляю хранилище компонентов

    }

    //Создание нового контакта
    create(newContact) {
        let newEl = {
            id: Date.now() + "_" + Math.random(),
            name: newContact.name,
            subName: newContact.subName,
            number: newContact.number
        }
        const oldState = this.state
        oldState.contacts.push(newEl)
        this.setState(oldState)
    }
    update(id, newData){
        const oldState = this.state
        oldState.contacts[oldState.contacts.findIndex(el => el.id === id)]={
            id: id,
            name:newData.name,
            subName:newData.subName,
            number:newData.number
        }
        this.setState(oldState)
    }
    deleteById(contactId){
        const oldState = this.state
        let index = oldState.contacts.findIndex(c=> c.id === contactId)
        console.log(index)
        oldState.contacts.splice( index, 1)
        this.setState(oldState)
    }

    deleteByEl(el){
        let id = el.target.getAttribute('data-id')
        console.log(id)
        this.deleteById(id)
    }
    //загрузка в коллекцию демо данные
    loadSimpleData() {
        //Создание контакта с полями
        let contact = {
            id: Date.now()  + "_" +  Math.random(),
            name: "Имя",//поля для хранения имени контакта
            subName: "Фамилия",//фамилия
            number: "Номер телефона"//номер
        }
        const oldState = this.state//берем старый стейт (Мы не знаем что там хранится, но хотим оставить)
        oldState.contacts = [contact]//поместим контакты в массив с 1 контактом
        this.setState(oldState)//поместим стейт обратно
    }

    //построение компонента
    render() {
        return (
            <>
                <div class="form">
                    <div>
                        <button class="btn btnMain" onClick={this.loadFromLS.bind(this)}> Load </button>
                        <button class="btn btnMain" onClick={this.saveToLS.bind(this)}> Save </button>
                        <button class="btn btnMain" onClick={this.loadSimpleData.bind(this)}> Simple </button>
                        <AddContact save = {this.create.bind(this)}> </AddContact>
                    </div>
                    <table className="table" id="tblPhoneBook">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subname</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.contacts.map(contact => (
                                <>
                                    <Contact  key={contact.id} contact={contact}
                                              update={this.update.bind(this)}
                                              delete={this.deleteByEl.bind(this)}> </Contact>
                                </>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }


}
export default PhoneBook