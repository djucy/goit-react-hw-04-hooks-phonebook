import { useState} from 'react';
import { PhonebookForm, Label, Input, Button } from './style/Common.styled';
import s from './style/Phonebook.module.css';

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
      <PhonebookForm onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            className={s.Input__name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onNameInput}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onNumberInput}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </PhonebookForm>
    );
  }

