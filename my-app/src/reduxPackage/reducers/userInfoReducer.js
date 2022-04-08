const userInfoReducer = (state = {
    userInfo: {
        firstName:'',
        lastName:'',
        Address: {
            city:'',
            state:'',
            zipCode:'',
        },
    },
}, action) => {
    switch(action.type){
        case 'setUserInfo':
            return {
                ...state,
                userInfo: action.payload
            };
        default:
            return state;
    }
};

export default userInfoReducer;