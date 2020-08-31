import React, { useState, useEffect } from 'react';
import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, AddNewChat }) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data())))
        }
    }, [id])

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
                    <p>{messages[0]?.message}</p>
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
