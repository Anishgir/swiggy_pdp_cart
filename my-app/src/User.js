import React,{useContext} from 'react';
import { UserInfoContext } from './UserInfoContext';
function User() {
    const [userInfo] = useContext(UserInfoContext);
    return (
        <div className='user-profile'>
            <p className='user-name'>{userInfo.firstName + " "+ userInfo.lastName}</p>
            <p className='user-address'>Address: {userInfo.primaryAddress.city+", "+userInfo.primaryAddress.state+", PIN "+userInfo.primaryAddress.zipCode}</p>
        </div>
    );
}

export default User;
