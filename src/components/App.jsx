import { Profile } from 'components/socialProfile/Profile';
import user from 'components/socialProfile/user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
