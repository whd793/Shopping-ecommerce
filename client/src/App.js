import React, { useState, useEffect, useRef } from 'react';

import CategoryItem from './components/CategoryItem/CategoryItem';

// import './App.css';

const categories = [
  {
    id: 1,
    title: 'Hats',
    items: [
      {
        id: 101,
        name: 'Baseball Cap',
        price: 19.99,
        imageUrl: 'https://example.com/baseball-cap.jpg',
      },
      {
        id: 102,
        name: 'Beanie',
        price: 14.99,
        imageUrl: 'https://example.com/beanie.jpg',
      },
      {
        id: 103,
        name: 'Fedora',
        price: 29.99,
        imageUrl: 'https://example.com/fedora.jpg',
      },
      {
        id: 104,
        name: 'Sun Hat',
        price: 24.99,
        imageUrl: 'https://example.com/sun-hat.jpg',
      },
      {
        id: 105,
        name: 'Bucket Hat',
        price: 22.99,
        imageUrl: 'https://example.com/bucket-hat.jpg',
      },
      {
        id: 105,
        name: 'Bucket Hat',
        price: 22.99,
        imageUrl: 'https://example.com/bucket-hat.jpg',
      },
      {
        id: 105,
        name: 'Bucket Hat',
        price: 22.99,
        imageUrl: 'https://example.com/bucket-hat.jpg',
      },
      {
        id: 105,
        name: 'Bucket Hat',
        price: 22.99,
        imageUrl: 'https://example.com/bucket-hat.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Jackets',
    items: [
      {
        id: 201,
        name: 'Leather Jacket',
        price: 89.99,
        imageUrl: 'https://example.com/leather-jacket.jpg',
      },
      {
        id: 202,
        name: 'Denim Jacket',
        price: 59.99,
        imageUrl: 'https://example.com/denim-jacket.jpg',
      },
      {
        id: 203,
        name: 'Bomber Jacket',
        price: 79.99,
        imageUrl: 'https://example.com/bomber-jacket.jpg',
      },
      {
        id: 204,
        name: 'Windbreaker',
        price: 49.99,
        imageUrl: 'https://example.com/windbreaker.jpg',
      },
      {
        id: 205,
        name: 'Puffer Jacket',
        price: 69.99,
        imageUrl: 'https://example.com/puffer-jacket.jpg',
      },
      {
        id: 205,
        name: 'Puffer Jacket',
        price: 69.99,
        imageUrl: 'https://example.com/puffer-jacket.jpg',
      },
      {
        id: 205,
        name: 'Puffer Jacket',
        price: 69.99,
        imageUrl: 'https://example.com/puffer-jacket.jpg',
      },
      {
        id: 205,
        name: 'Puffer Jacket',
        price: 69.99,
        imageUrl: 'https://example.com/puffer-jacket.jpg',
      },
    ],
  },
  // Add more categories as needed
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='homepage'>
      <header className='header'>
        <h1>Fashion Emporium</h1>
        <button className='hamburger-menu' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav ref={navRef} className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <button className='close-menu' onClick={closeMenu}>
            &times;
          </button>
          <ul>
            <li>
              <a href='#new-arrivals' onClick={closeMenu}>
                New Arrivals
              </a>
            </li>
            <li>
              <a href='#categories' onClick={closeMenu}>
                Categories
              </a>
            </li>
            <li>
              <a href='#sale' onClick={closeMenu}>
                Sale
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {isMenuOpen && <div className='overlay' onClick={closeMenu}></div>}

      <section className='hero'>
        <div className='hero-content'>
          <h2>Summer Collection 2024</h2>
          <p>Discover the latest trends in fashion</p>
          <button className='cta-button'>Shop Now</button>
        </div>
      </section>

      <section id='categories' className='categories-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </section>

      <footer>
        <p>&copy; 2024 Fashion Emporium. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
