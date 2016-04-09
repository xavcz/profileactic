import { Meteor }   from 'meteor/meteor';
import UserProfiles from '../collections';

Meteor.publish('userProfiles', function() {
  if( this.userId ) {
    return UserProfiles.findOne({ userId: this.userId });
  } else {
    this.ready();
  }
});
