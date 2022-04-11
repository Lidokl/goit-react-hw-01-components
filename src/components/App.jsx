import { Profile } from 'components/socialProfile/Profile';
import user from 'components/socialProfile/user.json';
import styled from 'components/socialProfile/Profile.module.css';

export const App = () => {
  return (
    <div className={styled.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
