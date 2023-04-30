import { FriendListItem } from './FriendListItem/FriendListItem';
import { StyledList } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </StyledList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      friend: PropTypes.object,
      id: PropTypes.number,
    })
  ),
};
