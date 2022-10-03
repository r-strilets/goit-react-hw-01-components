import PropType from 'prop-types';
export function FriendListItem({ status, avatarUrl, name }) {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={avatarUrl} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  status: PropType.bool.isRequired,
  avatarUrl: PropType.string.isRequired,
  name: PropType.string.isRequired,
};
