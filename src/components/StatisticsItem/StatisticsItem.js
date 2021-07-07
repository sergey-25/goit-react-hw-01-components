import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
    return (
        <>
            <span>{label}</span>
            <span>{percentage}%</span>
        </>
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}