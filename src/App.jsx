import user from './data/user.json';
import data from './data/data.json';
import { Profile } from './components/Profile/Profile';
import Section from 'components/Profile/Section/Section';
import StatisticsList from 'components/Statistics/StatisticsList';
export default function App() {
  return (
    <div>
      <Profile
        userAvatar={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userStats={user.stats}
      />
      <Section title="Заголовок">
        <StatisticsList items={data} />
      </Section>
    </div>
  );
}
