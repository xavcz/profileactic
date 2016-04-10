import { Meteor }           from 'meteor/meteor';
import { ValidatedMethod }  from 'meteor/mdg:validated-method';
import { UserProfiles }     from './collections';

export const createProfile = new ValidatedMethod({
  name: 'UserProfiles.createProfile',
  validate: UserProfiles.Schema.validator(),
  run({ userId, name, description = '', pictureUrl = '' }) {
    if (Meteor.isServer) {
      const profile = {
          userId,
          name,
          description,
          pictureUrl
        };

      console.log('profile', profile);

      return UserProfiles.insert( profile );
    }
  }
});
