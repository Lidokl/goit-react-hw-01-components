import PropTypes from 'prop-types';
import styled from 'components/statistics/Statistics.module.css';
import StatisticsListItem from './StatisticsListItem';

export const Statistics = ({ stats }) => {
  return (
    <div>
      <section className="statistics">
        {/* <h2 className={styled.title}>{title}</h2> */}

        <ul className={styled.statList}>
          {stats.map(({ label, id, percentage }) => (
            <li className={styled.statListItem} key={id}>
              <StatisticsListItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
};
