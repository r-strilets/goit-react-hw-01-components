import StatisticsItem from './StatisticsItems/StatisticsItem';
import { PropTypes } from 'prop-types';
import css from './StatisticsList.module.css';

export default function StatisticsList({ items }) {
  return (
    <ul className={css['stat-list']}>
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
