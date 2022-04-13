import PropTypes from 'prop-types';
import styled from './Statistics.module.css';

export default function StatisticsListItem({ label, percentage }) {
  return (
    <div className={styled.statItem}>
      <span className={styled.label}>{label}</span>
      <span className={styled.percentage}>{percentage}%</span>
    </div>
  );
}
StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
