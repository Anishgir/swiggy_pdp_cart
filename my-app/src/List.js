import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from './images/user_icon.png';
import { connect } from 'react-redux';
function List(props) {
  return (
    <ul>
      <Link to='offer'>
        <li>Offers</li>
      </Link>
      <Link to='user'>
        <li><img src = {userIcon} alt = "user Icon logo" className='user-icon'/>{props.userInfo.firstName + " "+ props.userInfo.lastName}</li>
      </Link>
    </ul>
  );
}

const mapStateToProps = state =>{
  return{
    userInfo: state.userInfoReducer.userInfo
  }
}

export default connect(mapStateToProps)(List);