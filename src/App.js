import { useState,useEffect, useReducer } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import initialTodos from './todos.json';
import {
  Container,
  Title,
  SecondaryTitle,
} from './components/style/Common.styled';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

export default function App () {
  
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts'))??  initialTodos,) ;
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
   
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  

  //  Добавляет контакт
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const userName = contacts.find(
      user => user.name === contact.name,
    );

    if (userName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts( contacts  => 
       [contact, ...contacts],
    );
   
  };

  //  Удаляет контакт

   const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId),
    );
  };

// Используется для ввода в инпут фильтра
  const changeFilter = e => {
   setFilter( e.currentTarget.value );
  };

  // Фильтрует контакты при вводе в инпут фильтра
  const findContact = () => {
 
    const normalizedFilter = filter.toLowerCase();
     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 
  
 
    const visibleContacts = findContact();
    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook onSubmit={addContact}></Phonebook>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={filter} onChange={changeFilter}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactList>
      </Container>
    );
  
}







// class App extends Component {
//   state = {
//     contacts: initialTodos,
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//    }
  
//   componentDidUpdate(prevState, prevProps) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
 
//   };
//   addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const userName = this.state.contacts.find(
//       user => user.name === contact.name,
//     );

//     if (userName) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   findContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.findContact();
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <Phonebook onSubmit={this.addContact}></Phonebook>
//         <SecondaryTitle>Contacts</SecondaryTitle>
//         <Filter value={filter} onChange={this.changeFilter}></Filter>
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         ></ContactList>
//       </Container>
//     );
//   }
// }

// export default App;

