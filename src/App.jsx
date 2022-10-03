import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends';
import transactions from './data/transactions';
import { Profile } from './components/Profile/Profile';
import Section from 'components/Section/Section';
import StatisticsList from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        userAvatar={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userStats={user.stats}
      />

      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}
