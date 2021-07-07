import StatisticsItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title !== undefined && (<h2 className={s.title}>{title}</h2>)}
            <ul className={s.list}>
                {stats.map(element => (
                    <li className={s.item}
                        key={element.id}
                        style={{backgroundColor: ` rgba( ${random()} , ${random()} , ${random()} )`}}>
                        <StatisticsItem
                            label={element.label}
                            percentage={element.percentage}
                            />
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    key: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

function random() {
    return Math.floor(Math.random() * 256);
}