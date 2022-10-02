import StatisticsItem from './StatisticsItem';
import { PropTypes } from 'prop-types';
export default function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <StatisticsItem
            //   id={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        </li>
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