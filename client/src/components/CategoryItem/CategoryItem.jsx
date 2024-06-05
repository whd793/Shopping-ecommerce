import './CategoryItem.styles.scss';

const CategoryItem = ({ category }) => (
  <div className='category-section'>
    <div className='category-header'>
      <h2>{category.title}</h2>
      <button className='view-more-btn'>View More</button>
    </div>
    <div className='items-scroll-container'>
      {category.items.map((item) => (
        <div key={item.id} className='item-card'>
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryItem;
