import { useState } from 'react';
import './App.css';
import TweetCard from './components/TweetCard';
import storage from './utils/storage'

const tweetsQuantity = 777
const followersQuantity = 100500

function App() {
  const [isFollowing] = useState(storage.load('isFollowing') || false)
  
  return (
    <div className="App">
      <TweetCard
      tweetsQuantity={tweetsQuantity}
      followersQuantity={followersQuantity}
      isFollowing={isFollowing}
      ></TweetCard>
    </div>
  );
}

export default App;
