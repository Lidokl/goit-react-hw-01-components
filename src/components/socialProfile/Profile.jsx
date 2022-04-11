import PropTypes from 'prop-types';
import styled from 'components/socialProfile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styled.profile}>
      <div className={styled.description}>
        <img src={avatar} alt={username} className={styled.avatar} />
        <p className={styled.name}>{username}</p>
        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>

      <ul className={styled.statsList}>
        <li className={styled.statsListItem}>
          <span className={styled.label}>Followers</span>
          <span className={styled.quantity}>{stats.followers}</span>
        </li>
        <li className={styled.statsListItem}>
          <span className={styled.label}>Views</span>
          <span className={styled.quantity}>{stats.views}</span>
        </li>
        <li className={styled.statsListItem}>
          <span className={styled.label}>Likes</span>
          <span className={styled.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
  }).isRequired,
};
