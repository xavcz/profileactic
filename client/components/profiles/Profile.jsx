import React from 'react';

const Profile = ({ profile }) => (

  <div className="container">
    <div className="col-xs-12">
      <img src={ profile.pictureUrl } alt=""/>
    </div>
    <div className="col-xs-12">
      <h1>{ profile.name }</h1>
      <p>{ profile.description }</p>
    </div>
  </div>
);


export default Profile;
