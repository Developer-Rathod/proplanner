import { getFirestore } from "redux-firestore";

export const createProject = (project) => {
    /* //what we usually do which just return actions
        return{
            type: 'CREATE_PROJECT',
            project: project
        } */
    return (dispatch, getState,) => {        
        //make async call to database firestore
        const firestore = getFirestore();
        firestore.collection('projects').add({
          ...project,
          authorFirstName: 'Kalpana',
          authorLastName: 'Rathod',
          authorId: 12345,
          createdAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_PROJECT_SUCCESS' }); //posing dispatch here
        }).catch(err => {
          dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
      }
    };

 export const deleteProject = (id) =>{
     return (dispatch, getState) => {

     }
 };