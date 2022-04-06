import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import userIcon from './images/user_icon.png';
import { UserInfoContext } from './UserInfoContext';

export default function List() {
  const [userInfo] = useContext(UserInfoContext);
  return (
    <ul>
       <Link to='offer'>
        <li>Offers</li>
      </Link>
      <Link to='user'>
        <li><img src = {userIcon} alt = "user Icon logo" className='user-icon'/>{userInfo.firstName + " "+ userInfo.lastName}</li>
      </Link>
    </ul>
  );
}
