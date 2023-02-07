import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// import { GlobalStyle } from './GlobalStyle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
// import { selectContacts } from 'redux/selectors';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { useEffect } from 'react';

// export function App() {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <GlobalStyle />
//       <ContactForm />

//       <h2>Contacts</h2>
//       {contacts.length > 0 ? (
//         <Filter />
//       ) : (
//         'Your phonebook is empty. Add first contact!'
//       )}

//       {contacts.length > 0 && <Contacts />}
//     </div>
//   );
// }
