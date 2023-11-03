import React, { useState } from 'react';

function Tweet({ tweet, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(tweet.id, editedTweet);
    setIsEditing(false);
  };

  return (
    <div className="tweet">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTweet}
            onChange={(e) => setEditedTweet(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{tweet.text}</p>
      )}

      <button onClick={() => onDelete(tweet.id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Tweet;
