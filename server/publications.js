import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function( userId ) {
  check( userId, String );
  if ( userId ) {
    return Meteor.users.find({ _id: userId });
  } else {
    this.ready();
  }
});
