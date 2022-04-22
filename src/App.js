import { useState,useEffect, useReducer } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import initialTodos from './todos.json';
import s from './components/CommonStyle/CommoneStyle.module.css';


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
      <div className={s.container}>
        <div className={s.conatiner__position }>
          <h1 className={s.title}>Phonebook</h1>
        <Phonebook onSubmit={addContact}></Phonebook>
        <h2 className={ s.title__secondary}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactList> </div>
        
      </div>
    );
  
}



