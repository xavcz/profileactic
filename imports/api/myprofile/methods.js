import { Meteor }           from 'meteor/meteor';
import { ValidatedMethod }  from 'meteor/mdg:validated-method';
import { UserProfiles }     from './collections';

export const createProfile = new ValidatedMethod({
  name: 'UserProfiles.createProfile',
  validate: UserProfiles.Schema.validator(),
  run({ userId, name, description = '', pictureUrl = '' }) {
      const profile = {
        userId,
        name,
        description,
        pictureUrl
      };
      console.log(profile);
      
      if (Meteor.isServer) {
        return UserProfiles.insert( profile );
        console.log("server!");
      } else {
        console.log('client!');
      }
  }
});
