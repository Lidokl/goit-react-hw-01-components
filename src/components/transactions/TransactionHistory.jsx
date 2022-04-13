import PropTypes from 'prop-types';
import styled from './Transaction.module.css';

import TransactionHistoryItem from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styled.table}>
        <thead className={styled.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {items.map(({ id, type, amount, currency }) => (
          <tbody key={id} className={styled.tbody}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </tbody>
        ))}
      </table>
    </div>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
};
