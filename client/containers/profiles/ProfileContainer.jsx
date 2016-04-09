import React                  from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor }             from 'meteor/meteor';
import Profile                from '/client/components/profiles/Profile.jsx';

function composeProfile( props, onData ) {
  const { userId } = props;
  const userDataSub = Meteor.subscribe( 'userData', userId );

  if ( userDataSub.ready() ) {
    const profile = Meteor.users.find({ _id: userId }).fetch().profile;
    onData( null, { profile } )
  }
};

export default composeWithTracker( composeProfile )( Profile );
