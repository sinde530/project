import firebaseApp from './firebase';

import firebase from 'firebase';
import { GoogleAuthProvider } from 'firebase/auth';

class AuthService {
  login(providerName) {
    const authProvider = new GoogleAuthProvider();
  }
}

export default AuthService;
