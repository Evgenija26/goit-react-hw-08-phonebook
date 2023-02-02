import React from 'react';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.ContactsList}>
      {contacts.map(contact => (
        <li className={css.ContactsList__item} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={css.ContactsList__button}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
