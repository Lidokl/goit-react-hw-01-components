import PropTypes from 'prop-types';
import styled from './FriendList.module.css';
import FriendListItem from '../frendsList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styled.friendList}>
        {friends.map(({ isOnline, avatar, name, id }) => (
          <li className={styled.friendListItem} key={id}>
            <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
