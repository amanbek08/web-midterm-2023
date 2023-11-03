import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [savedName, setSavedName] = useState('');
    const [savedAge, setSavedAge] = useState('');
    const [savedGender, setSavedGender] = useState('');

    const handleSaveProfile = () => {
        if (name !== '') {
            setSavedName(name);
        }
        if (age !== '') {
            setSavedAge(age);
        }
        if (gender !== '') {
            setSavedGender(gender);
        }
    };

    return (
        <div className="profile">
            <h2>Profile</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label>Gender:</label>
                <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <button onClick={handleSaveProfile}>Save Profile</button>

            {savedName && savedAge && savedGender && (
                <div>
                    <p>Name: {savedName}</p>
                    <p>Age: {savedAge}</p>
                    <p>Gender: {savedGender}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
