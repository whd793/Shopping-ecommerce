// components/search-box/search-box.component.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, SearchInput } from './search-box.styles';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        placeholder='Search products...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleSearch}
      />
    </SearchContainer>
  );
};

export default SearchBox;
