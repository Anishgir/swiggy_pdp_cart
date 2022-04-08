import React from 'react';
import { connect } from 'react-redux';
function User(props) {
    return (
        <div className='user-profile'>
            <p className='user-name'>{props.userInfo.firstName + " "+ props.userInfo.lastName}</p>
            <p className='user-address'>Address: {props.userInfo.primaryAddress.city+", "+props.userInfo.primaryAddress.state+", PIN "+props.userInfo.primaryAddress.zipCode}</p>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
      userInfo: state.userInfoReducer.userInfo
    }
}

export default connect(mapStateToProps)(User);
