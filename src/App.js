import { useState } from 'react';
import './App.css';
import TweetCard from './components/TweetCard';
import storage from 'utils/storage';
import users from 'assets/users.json'

function App() {
  const [subscriptions, setSubscriptions] = useState(storage.load('subscriptions') || [])

  const onFollow = (id) => {
    const actualSubscriptions = [...subscriptions] || []

    if (actualSubscriptions.includes(id)) {
      const index = actualSubscriptions.indexOf(id)
      actualSubscriptions.splice(index, 1)
      setSubscriptions(actualSubscriptions)
      storage.save('subscriptions', actualSubscriptions)
      return
    }
    
    actualSubscriptions.push(id)
    setSubscriptions(actualSubscriptions)
    storage.save('subscriptions', actualSubscriptions)
  }

  return (
    <div className="App">

      <div style={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {
          users.map(user => {
            return <TweetCard
              key={user.id}
              id={user.id}
              onFollow={onFollow}
              tweets={user.tweets}
              followers={user.followers}
              isFollowing={subscriptions.includes(user.id)}
              avatar={user.avatar}
            ></TweetCard>
          })
        }
      </div>
    </div>
  );
}

export default App;
