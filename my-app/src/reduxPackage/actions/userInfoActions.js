const fetchUserInfo = () =>{
    return async function (dispatch){
        const res = await fetch('http://localhost:8080/user');
        const userInfo = await res.json();
        console.log(userInfo);
        dispatch(setUserInfo(userInfo));
    };
};
const setUserInfo = (userInfo = null) =>{
    if(userInfo){
        return {
            type: 'setUserInfo',
            payload: userInfo,
        };
    }
}



export {fetchUserInfo,setUserInfo}