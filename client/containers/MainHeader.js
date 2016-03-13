import { composeWithTracker } from 'react-komposer';
import MainHeader from '../components/MainHeader.jsx';

function composer( props, onData ) {
  const currentUser = Meteor.user();
  onData( null, currentUser );
};

export default composeWithTracker(composer)(MainHeader);