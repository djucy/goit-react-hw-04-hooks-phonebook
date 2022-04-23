import React from 'react';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';
// import {
//   ContactsList,
//   Contact,
//   NameContact,
//   ButtonDelete,
// } from './style/Common.styled';

import PropTypes, { arrayOf } from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  // <ul className={ s.list}>
  //   {contacts.map(({ name, number, id }) => (
  //     <li key={id} className ={s.item}>
  //       <span className={s.name }>{name}:</span>
  //       <span>{number}</span>
  //       <button type="button" className={ s.button__delete} onClick={() => onDeleteContact(id)}>
  //         Delete contact
  //       </button>
  //     </li>
  //   ))}
  // </ul>
  <table className={s.table}>
   <thead>
    <tr>
      <th className={s.item }>Name</th>
      <th className={s.item }>Number</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
    {contacts.map(({ name, number, id }) => (
      <tr key={id} className={s.item }>
        <td className ={s.table__date}>{ name}</td>
        <td className ={s.table__date}>{number}</td>
        <td className ={s.table__date}><button type="button" className={ s.button__delete} onClick={() => onDeleteContact(id)}>
           Delete contact
        </button></td>
        
    </tr>
    )
    )}</tbody>
  </table>
);
export default ContactList;
ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id:PropTypes.string.isRequired,
    }),
  )

}