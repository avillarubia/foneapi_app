import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { getAllMessages } from "../services/message";
import Contacts from './contacts';
import { getCurrentUser, getToken } from '../utils/user';

const ENDPOINT = "http://localhost:3001";
let socket
const faviconElem = document.getElementById("favicon");

const Message = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetchAllMessages()

        socket = io(ENDPOINT, {
            query: { token: getToken() }
        });

        socket.on("chat message", message => {
            setMessages(messages => [...messages, message])
        })

        socket.on("has message", message => {
            faviconElem.href = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Red_Circle_full.png"
        })

        window.addEventListener("focus", onTabFocus)

    }, []);

    async function fetchAllMessages() {
        const { data } = await getAllMessages()
        setMessages(data)
    }

    function onTabFocus() {
        faviconElem.href = process.env.PUBLIC_URL + 'favicon.ico'
    }

    const handleMessageOnChange = e => {
        setMessage(e.target.value)
    }

    const handleSendClick = e => {
        e.preventDefault();
        const user = getCurrentUser();
        const payload = {
            account_id: user.account, message
        }
        socket.emit('chat message', payload);
    }

    const renderChatBox = () => (
        <div className='container'>
            <h3>Chat Box</h3>

            {
                messages.length ?
                    <h1>You need to login to see messages</h1> :
                    messages.map(message =>
                        <p>
                            <span>{message.account_id} : </span>
                            <span>{message.message}</span>
                        </p>
                    )
            }

            <form id="form" action="">
                <input id="input" autoComplete="off" onChange={handleMessageOnChange} />
                <button onClick={handleSendClick}>Send</button>
            </form>
        </div>
    )

    return <div className='mt-5'>
        <div className='d-flex justify-content-center'>
            <Contacts />
            <div style={{ borderRight: '3px solid rgba(0, 0, 0, 0.15)' }} />
            {renderChatBox()}
        </div>
    </div>
}

export default Message;