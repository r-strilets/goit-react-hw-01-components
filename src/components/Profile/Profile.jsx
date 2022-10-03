import { PropTypes } from 'prop-types';
import css from './Profile.module.css';
export const Profile = ({
  userAvatar,
  userName,
  userTag,
  userLocation,
  userStats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={userAvatar}
          alt="User avatar"
          className={css.avatar}
          width="100px"
          height="100px"
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{userTag}</p>
        <p className={css.location}>{userLocation}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{userStats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{userStats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{userStats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userStats: PropTypes.object.isRequired,
};
