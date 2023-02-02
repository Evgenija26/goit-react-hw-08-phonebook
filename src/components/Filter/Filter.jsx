import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const normalizedValue = e.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div className={css.Filter}>
      Find contacts by name
      <input
        className={css.Filter__input}
        type="text"
        value={value}
        onChange={onChange}
        // id={filterInputId}
      />
    </div>
  );
};
