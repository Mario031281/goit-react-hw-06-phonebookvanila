import { useDispatch, useSelector } from 'react-redux';
import { InputFilter, Title, FilterContainer } from './Filter.styled';
import { setSearchQuery } from 'redux/filtersSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.filter.search);
  const handleSearchChange = e => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <FilterContainer>
      <Title>Find contacts by name</Title>
      <InputFilter
        type="text"
        onChange={handleSearchChange}
        value={searchQuery}
      />
    </FilterContainer>
  );
};
