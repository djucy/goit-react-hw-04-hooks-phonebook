import { useState} from 'react';
// import { PhonebookForm, Label, Input, Button } from './style/Common.styled';
import style from '../CommonStyle/CommoneStyle.module.css';
import s from '../Phonebook/Phonebook.module.css';

export default function Phonebook({ onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  
  
  const onNameInput = e => {
    setName(e.target.value);
  };
  const onNumberInput = e => {
    setNumber(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

 
    return (
      <form onSubmit={onFormSubmit} className={s.form }>
        <label className={ style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onNameInput}
          />
        </label>
        <label className={style.label }>
          Number
          <input className={ style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onNumberInput}
          />
        </label>

        <button type="submit" className={ s.button}>Add contact</button>
      </form>
    );
  }

