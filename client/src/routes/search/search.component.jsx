// routes/search/search.component.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { SearchResults, SearchTitle } from './search.styles';

const Search = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const categoriesMap = useSelector(selectCategoriesMap);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = [];
    Object.values(categoriesMap).forEach((category) => {
      const filteredProducts = category.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      results.push(...filteredProducts);
    });
    setSearchResults(results);
  }, [searchQuery, categoriesMap]);

  return (
    <div>
      <SearchTitle>Search Results for "{searchQuery}"</SearchTitle>
      <SearchResults>
        {searchResults.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SearchResults>
    </div>
  );
};

export default Search;
