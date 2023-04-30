import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class={css.profile}>
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{`@${tag}`}</p>
        <p class="location">{location}</p>
      </div>

      <ul class={css.stats}>
        <li className={css.stats}>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
