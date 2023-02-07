import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const { user } = useAuth;
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome to Phonebook {user.name} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
