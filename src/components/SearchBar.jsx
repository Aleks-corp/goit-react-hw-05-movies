import { useState } from 'react';
import { Input, Icon, Form, Button } from './SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit, query }) => {
  const [value, setValue] = useState(query ?? '');
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form onSubmit={e => onSubmit(e)}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          value={value}
          onChange={e => onChange(e)}
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Form>
    </>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
