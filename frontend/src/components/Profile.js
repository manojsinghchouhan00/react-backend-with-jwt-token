import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../auth';

function Profile() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/profile', {
            headers: { Authorization: `Bearer ${getToken()}` }
        }).then(res => setMessage(res.data.message))
          .catch(() => setMessage('Unauthorized'));
    }, []);

    return <h3>{message}</h3>;
}

export default Profile;