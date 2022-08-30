import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  SAVE_INFO

} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const saveResumeData = (formData) => {
  return {
    type: SAVE_INFO,
    payload: formData
  }
};
