import React, { useState } from 'react';
import Tweet from './Tweet';

function Feed() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  const handleTweetSubmit = () => {
    if (newTweet) {
      const tweet = {
        id: Date.now(),
        text: newTweet,
      };
      setTweets([...tweets, tweet]);
      setNewTweet('');
    }
  };

  const handleTweetDelete = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
  };

  const handleTweetEdit = (tweetId, editedText) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === tweetId ? { ...tweet, text: editedText } : tweet
    );
    setTweets(updatedTweets);
  };

  return (
    <div className="feed">
      <div>
        <input
          type="text"
          placeholder="tweet"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button onClick={handleTweetSubmit}>Tweet</button>
      </div>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onDelete={handleTweetDelete}
          onEdit={handleTweetEdit}
        />
      ))}
    </div>
  );
}

export default Feed;
