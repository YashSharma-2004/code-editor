import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper bg-gray-900 h-screen flex flex-col justify-center items-center text-white">
            <div className="formWrapper bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <img
                    className="homePageLogo w-32 mx-auto mb-4"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel text-lg font-semibold text-center mb-4">
                    Paste Invitation ROOM ID
                </h4>
                <div className="inputGroup space-y-4">
                    <input
                        type="text"
                        className="inputBox w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button
                        className="btn joinBtn w-full p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
                        onClick={joinRoom}
                    >
                        Join
                    </button>
                    <span className="createInfo text-gray-400 text-sm block text-center">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href="#"
                            className="createNewBtn text-blue-400 hover:underline"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer className="mt-6 text-gray-500 text-sm">
                <h4>
                    Built by &nbsp;
                    <a
                        href="https://github.com/yashsharma-2004"
                        className="text-blue-400 hover:underline"
                    >
                        Yash Sharma
                    </a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
