import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
// this package is needed for syncing our data firestore to state
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //sync data and store in firestore state
    firebase: firebaseReducer // sync auth data

});

export default rootReducer;