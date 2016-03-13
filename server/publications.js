Meteor.publish('usersUrls', function() {
  const userId = this.userId;
  const selector = { userId: userId };
  return UsersUrls.find(selector);
});