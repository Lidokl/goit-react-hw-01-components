import PropTypes from 'prop-types';
import styled from './Transaction.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={styled.string}>
      <td className={styled.type}>{type}</td>
      <td className={styled.amount}>{amount}</td>
      <td className={styled.currency}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
