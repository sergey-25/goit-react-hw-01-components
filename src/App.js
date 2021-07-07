import './App.css';
import SocialProfile from './components/SocialProfile';
import user from './components/SocialProfile/user.json';
import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendsList';
import friends from './components/FriendsList/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions} />
    </>
  )
}