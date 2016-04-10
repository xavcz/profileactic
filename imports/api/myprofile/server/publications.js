import { Meteor }       from 'meteor/meteor';
import { UserProfiles } from '../collections';

Meteor.publish('userProfiles', function() {
  if( this.userId ) {
    return UserProfiles.findOne({
      userId: this.userId }, {
        fields: UserProfiles.publicFields
      }
    );
  } else {
    this.ready();
  }
});
