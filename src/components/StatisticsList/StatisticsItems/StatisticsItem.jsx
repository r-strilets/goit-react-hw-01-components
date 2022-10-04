import { PropTypes } from 'prop-types';
import css from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percentage }) {
  const bgColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  return (
    <>
      <li className={css.item} style={{ backgroundColor: bgColor() }}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </>
  );
}
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
