import { FriendListItem } from './FriendListItem/FriendListItem';
import { StyledList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledList class="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </StyledList>
  );
};
