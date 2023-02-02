import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <h1>Phonebook</h1>
      <GlobalStyle />
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        'Your phonebook is empty. Add first contact!'
      )}

      {contacts.length > 0 && <Contacts />}
    </div>
  );
}
