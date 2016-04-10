import { Accounts } from 'meteor/accounts-base'
import { createProfile } from '/imports/api/myprofile/methods';

Accounts.onCreateUser((options, user) => {
  createProfile.call({
    userId: user._id,
    name: "Maciej"
  }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Profile for user created successfully.');
    }
  });

  return user;
});