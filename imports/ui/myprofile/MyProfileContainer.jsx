import { Meteor }             from 'meteor/meteor';
import React                  from 'react';
import { composeWithTracker } from 'react-komposer';

import MyProfile              from './MyProfile.jsx';
import UserProfiles           from '/imports/api/myprofile/collections';

function composeMyProfile( props, onData ) {
  const { name, description, pictureUrl } = props;

  const myProfileSub = Meteor.subscribe( 'userProfiles' );

  if ( myProfileSub.ready() ) {
    const profile = UserProfiles.findOne({ userId: Meteor.userId() });
    onData( null, { profile } )
  }
};

export default composeWithTracker( composeMyProfile )( MyProfile );
