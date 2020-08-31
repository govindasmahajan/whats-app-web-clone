import React, { useState, useEffect } from 'react';
import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, AddNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a room name for chat");

        if (roomName) {
            db.collection('rooms').add({ name: roomName })
        }
    };

    return !AddNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>New message...</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat}
                className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
        );
}

export default SidebarChat
