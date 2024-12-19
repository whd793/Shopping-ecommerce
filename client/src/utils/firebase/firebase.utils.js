import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  orderBy,
  addDoc, // Add this import
} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDLzZsLdMP1kIu7woLo9TxsqHp861qp63Q',
  authDomain: 'shopping-ecom-640d8.firebaseapp.com',
  projectId: 'shopping-ecom-640d8',
  storageBucket: 'shopping-ecom-640d8.firebasestorage.app',
  messagingSenderId: '24881389789',
  appId: '1:24881389789:web:5ea2191148686641003b34',
  measurementId: 'G-GL0B6EZWWD',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// export const addReviewToProduct = async (productId, reviewData) => {
//   const reviewRef = doc(
//     db,
//     'products',
//     productId,
//     'reviews',
//     reviewData.userId
//   );

//   try {
//     await setDoc(reviewRef, {
//       ...reviewData,
//       createdAt: new Date(),
//     });
//   } catch (error) {
//     console.error('Error adding review:', error);
//     throw error;
//   }
// };

// export const getProductReviews = async (productId) => {
//   const reviewsRef = collection(db, 'products', productId, 'reviews');
//   const q = query(reviewsRef, orderBy('createdAt', 'desc'));

//   try {
//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   } catch (error) {
//     console.error('Error getting reviews:', error);
//     throw error;
//   }
// };

// export const addReviewToProduct = async (productId, reviewData) => {
//   // Convert productId to string to ensure consistency
//   const productDocRef = doc(db, 'products', String(productId));
//   const reviewsCollectionRef = collection(productDocRef, 'reviews');
//   const reviewRef = doc(reviewsCollectionRef, reviewData.userId);

//   try {
//     await setDoc(reviewRef, {
//       ...reviewData,
//       createdAt: new Date(),
//     });
//   } catch (error) {
//     console.error('Error adding review:', error);
//     throw error;
//   }
// };

// export const getProductReviews = async (productId) => {
//   // Convert productId to string to ensure consistency
//   const productDocRef = doc(db, 'products', String(productId));
//   const reviewsCollectionRef = collection(productDocRef, 'reviews');
//   const q = query(reviewsCollectionRef, orderBy('createdAt', 'desc'));

//   try {
//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   } catch (error) {
//     console.error('Error getting reviews:', error);
//     throw error;
//   }
// };
// firebase.utils.js

// Add a review to a specific product
export const addReviewToProduct = async (productId, reviewData) => {
  if (!productId || !reviewData) {
    throw new Error('Product ID and review data are required.');
  }

  try {
    const reviewsRef = collection(db, 'reviews');

    // Add a review with an auto-generated document ID
    await addDoc(reviewsRef, {
      productId: String(productId), // Ensure productId is stored as a string for consistency
      userId: reviewData.userId,
      userName: reviewData.userName,
      rating: Number(reviewData.rating), // Ensure rating is stored as a number
      comment: reviewData.comment,
      createdAt: new Date(),
    });

    console.log('Review added successfully');
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

// Get all reviews for a specific product
export const getProductReviews = async (productId) => {
  if (!productId) {
    throw new Error('Product ID is required.');
  }

  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));

    // Fetch reviews from Firestore
    const querySnapshot = await getDocs(q);

    // Filter reviews to return only those matching the productId
    return querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((review) => review.productId === String(productId));
  } catch (error) {
    console.error('Error getting reviews:', error);
    throw error;
  }
};
