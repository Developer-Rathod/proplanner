
const initState = {
    // dummy data for initial setup
    /* projects:[
        {id: '1', title: 'First projectdummy title', content: 'love it'},
        {id: '2', title: 'Second projectdummy title', content: 'love it'},
        {id: '3', title: 'Third projectdummy title', content: 'love it'}
    ] */

    
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('proj created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create proj Error', action.err);
            return state;
        default:
            return state;
    }
    
}

export default projectReducer
