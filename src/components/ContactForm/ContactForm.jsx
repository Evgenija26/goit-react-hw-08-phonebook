import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from 'components/Filter/Filter';

import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit} className={css.ContactForm}>
        <label htmlFor={nameInputId} className={css.ContactForm__label}>
          Name
          <input
            className={css.ContactForm__input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={numberInputId} className={css.ContactForm__label}>
          Number
          <input
            className={css.ContactForm__input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.ContactForm__button}>
          Add contact{' '}
        </button>
      </form>
      <Filter />
    </>
  );
};
