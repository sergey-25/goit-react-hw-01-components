import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={s.table}>
            <thead>
                <tr className={s.headRow}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr className={s.bodyRow} key={item.id}>
                <td className={s.data}>{item.type}</td>
                <td className={s.data}>{item.amount}</td>
                <td className={s.data}>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}