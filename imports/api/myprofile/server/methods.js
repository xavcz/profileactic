import { Meteor }     from 'meteor/meteor';
import UserProfiles   from '../collections';

export const userProfilesCreate = {
  name: 'userProfiles.create',
  run() {
    const userId = Meteor.userId();
    console.log("creating profile ");

    UserProfiles.insert({
      name: '',
      description: '',
      pictureUrl: ''
    });
  },
  call( args, callback ) {
    const options = {};
    Meteor.apply( this.name, [args], options, callback );
  }
};

// Register the method with Meteor's DDP system
Meteor.methods({
  [userProfiles.create]: function( args ) {
    userProfilesCreate.run.call( this, args );
  }
});
