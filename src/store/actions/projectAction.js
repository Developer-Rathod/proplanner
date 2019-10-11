
export const createProject = (project) => {
    /* //what we usually do which just return actions
        return{
            type: 'CREATE_PROJECT',
            project: project
        } */
    return (dispatch, getState) => {
        
        //make async call to databse firestore
        dispatch({ type: 'CREATE_PROJECT', project }); //posing the dispatch
    }
};
 export const deleteProject = (id) =>{
     return (dispathc, getState) => {

     }
 };