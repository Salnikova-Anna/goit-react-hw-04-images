import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FiSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
