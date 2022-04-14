import React from 'react';

function SocialListItem(props) {
  return (
    <li><img src={props.URL} alt={props.alt} /></li>
  );
}

export default SocialListItem;
