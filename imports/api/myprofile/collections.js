import { Meteor }         from 'meteor/meteor';
import { SimpleSchema }   from 'meteor/aldeed:simple-schema';

const UserProfiles = new Meteor.Collection( 'userProfiles' );

UserProfiles.Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 70
  },
  description: {
    type: String,
    label: 'About',
    optional: true,
    max: 500
  },
  pictureUrl: {
    type: String,
    label: 'Profile photo URL',
    optional: true,
    max: 500
  }
});

UserProfiles.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

UserProfiles.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

export default UserProfiles;
