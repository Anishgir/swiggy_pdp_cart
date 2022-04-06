import React,{useState,useEffect,createContext} from "react";

export const UserInfoContext = createContext();

export const UserInfoProvider  = (props) =>{
    const [userInfo,setUserInfo] = useState(
        {
            firstName: '',
            lastName: '',
            id: '',
            primaryAddress: {city: '', state: '', zipCode: ''},
        }
    );
    useEffect(() =>{
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/user');
                const data = await response.json();
                setUserInfo(data);
            } catch (error) {
                console.log("error", error);
                
            }
        }
        fetchUserInfo();
    },[]);
    return(
        <UserInfoContext.Provider value = {[userInfo]}>
                {props.children}
        </UserInfoContext.Provider>
    );
}