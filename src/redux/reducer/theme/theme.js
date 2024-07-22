const initialState = {
    data:'white',
    menucolor: '#47a54b',
    display: 'block'
};

const Themereducer = (state = initialState , action) => {
    switch(action.type){
        // Show Loader
        case 'CHANGE_MODE':
            return {...state , data: action.Mode }   
        case 'CHANGE_MENU_ITEM_COLOR' :
            return {...state , menucolor: action.Color }  
        case 'CHANGE_MENU_SIZE' :
            return {...state , display:action.Size}
        default : 
        return state;
    }
}
export default Themereducer;
