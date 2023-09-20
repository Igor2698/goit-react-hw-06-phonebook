import PropTypes from 'prop-types';
import {
  CenterContainer,
  FilterTitile,
  ContFilter,
  FilterInput,
  FilterPlaceholder,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <CenterContainer>
      <FilterTitile>Contacts</FilterTitile>
      <ContFilter>
        <FilterInput
          placeholder=" "
          type="text"
          name="filter"
          value={filter}
          onChange={handeChangeFilter}
        />
        <FilterPlaceholder htmlFor="filter">Find contact</FilterPlaceholder>
      </ContFilter>
    </CenterContainer>
  );
};

export default Filter;
