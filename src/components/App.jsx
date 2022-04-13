import { Profile } from 'components/socialProfile/Profile';
import { Statistics } from 'components/statistics/StatisticsList';
import user from 'components/socialProfile/user.json';
import styled from 'components/socialProfile/Profile.module.css';
import data from 'components/statistics/data.json';

export const App = () => {
  return (
    <>
      <div className={styled.App}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
    </>
  );
};
