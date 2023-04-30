import {
  StyledItem,
  StyledSpan,
  StyledImg,
  StyledName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => (
  <StyledItem>
    <StyledSpan isOnline={friend.isOnline}>{friend.isOnline}</StyledSpan>
    <StyledImg src={friend.avatar} alt={friend.name} />
    <StyledName>{friend.name}</StyledName>
  </StyledItem>
);
