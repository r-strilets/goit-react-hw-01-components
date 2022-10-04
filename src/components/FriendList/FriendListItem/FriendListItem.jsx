import css from './FriendListItem.module.css';
import PropType from 'prop-types';
export function FriendListItem({ status, avatarUrl, name }) {
  return (
    <li className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatarUrl}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  status: PropType.bool.isRequired,
  avatarUrl: PropType.string.isRequired,
  name: PropType.string.isRequired,
};
