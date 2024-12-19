# Clothing Ecommerce Website 👑

A modern, full-featured e-commerce platform built with React and Firebase, showcasing best practices in front-end development and state management.

## 🌟 Features

- **User Authentication**
  - Email/Password sign-up and login
  - Google OAuth integration
  - Persistent user sessions
  - Secure authentication flow using Firebase Auth

- **Shopping Experience**
  - Browse products by categories
  - Dynamic product filtering
  - Shopping cart functionality
  - Seamless checkout process
  - Real-time cart updates

- **State Management**
  - Redux Toolkit implementation
  - Optimized performance with Redux selectors
  - Persistent cart state
  - Centralized store management

- **Styling & UI**
  - Styled-components for component-level styling
  - Responsive design
  - Custom button components
  - Dynamic navigation
  - Cart dropdown preview

## 🛠️ Technical Stack

- **Frontend Framework**: React.js
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Styling**: Styled Components
- **Type Checking**: JavaScript
- **Build Tool**: Create React App

## 🏗️ Architecture

The project follows a modern React application architecture with:

- Component-based structure
- Container/Presentational pattern
- Redux slice pattern for state management
- Firebase integration for backend services
- Reusable styled components
- React Hooks for state and lifecycle management

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
├── routes/            # Route components and layouts
├── store/             # Redux store configuration and slices
├── utils/             # Helper functions and Firebase config
├── assets/            # Static assets and images
└── styles/            # Global styles and theme
```

## 🚀 Key Components

- **Navigation**: Responsive header with cart preview
- **Directory**: Dynamic category navigation
- **Shop**: Product listing with category filtering
- **Cart**: Real-time cart management with dropdown
- **Checkout**: Order summary and payment flow
- **Authentication**: User sign-in and registration forms

## 💡 State Management Highlights

- **Redux Toolkit Integration**
  - Simplified Redux setup with createSlice
  - Efficient state updates with ImmerJS
  - Type-safe action creators
  - Memoized selectors for performance

- **Firebase Integration**
  - Real-time database listeners
  - Batch write operations
  - Secure user authentication
  - Document/Collection management

## 🔧 Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/crown-clothing.git
```

2. Install dependencies
```bash
cd crown-clothing
npm install
```

3. Set up Firebase
   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Set up Firestore database
   - Add Firebase config to environment variables

4. Start the development server
```bash
npm start
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Create React App documentation
- Redux Toolkit documentation
- Firebase documentation
- Styled Components documentation
- React Router documentation

---
