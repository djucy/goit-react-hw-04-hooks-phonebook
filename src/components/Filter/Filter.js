import React from 'react';

import style from '../CommonStyle/CommoneStyle.module.css';
import s from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={s.container__filter}>
    <label className={ style.label}>
      Find contacts by name
      <input
        className={ style.input}
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </label>
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
}
export default Filter;
