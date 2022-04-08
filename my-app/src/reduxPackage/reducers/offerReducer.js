const offerReducer = (state = {
    offer:{
        offerText:'',
    }
}, action) => {
    switch(action.type){
        case 'setOffer':
            return {
                ...state,
                offer: action.payload
            };
        default:
            return state;
    }
}

export default offerReducer;