// auth.js
import router from '@/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, watchEffect } from 'vue';

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAdpc4JEvxEvHaDJ63bFl8E6FJo-RVS_Zo',
  authDomain: 'sandbox-for-testers.firebaseapp.com',
  projectId: 'sandbox-for-testers',
  storageBucket: 'gs://sandbox-for-testers.appspot.com',
  messagingSenderId: '771218868941',
  appId: '771218868941',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const user = ref<any>(null);

// Listen for changes in the user's authentication state
watchEffect((onInvalidate) => {
  const unsubscribe = onAuthStateChanged(auth, (u) => {
    user.value = u;
  });

  // Unsubscribe the watcher when the component is unmounted
  onInvalidate(() => unsubscribe());
});

// Custom hook for authentication
export function useAuth() {
  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("formData", '');
        localStorage.setItem("blockEdit", 'false');
        const user = userCredential.user;
        console.log('Logged in successfully:', user);
        router.push('/');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        localStorage.setItem("formData", '');
        localStorage.setItem("blockEdit", 'false');
        console.log('Logged out successfully');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }

  return {
    user,
    login,
    logout,
  };
}
