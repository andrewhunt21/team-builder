import React, { useState } from 'react';

const initialTeamMembers = [
    {
        id: 0,
        name: 'Andrew',
        email: 'youngandy@gmail.com',
        role: 'frontend engineer',
    },
    {
        id: 1,
        name: 'Ivanelle',
        email: 'lilivy@icloud.com',
        role: 'designer',
    },
    {
        id: 2,
        name: 'Koba',
        email: 'bigyeet@yahoo.com',
        role: 'backend engineer',
    },
]

export default function TeamMember() {
    const [details, setDetails] = useState(initialTeamMembers);

    if (!details) {
        return <h3>Locating the deets</h3>
    }

    return (
        <div>
            {details.map((detail, idx) => (
                <div key={idx}>
                    <h3>{detail.name}</h3>
                    <p>Email: {detail.email}</p>
                    <p>Role: {detail.role}</p>
                </div>
            ))}
        </div>
    )
}