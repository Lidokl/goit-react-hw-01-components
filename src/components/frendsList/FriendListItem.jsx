import PropTypes from 'prop-types';
import styled from '../frendsList/FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styled.itemContainer}>
      <span
        className={styled.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img
        className={styled.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styled.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
