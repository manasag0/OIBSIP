import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessfulLogin from './SuccessLogin';
const Login = () => {
    // State variables for email, password, and login status
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

    // Function to handle login
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3020/login', {
                email,
                password,
            });

            console.log('Login successful:', response.data);
            setIsLoggedIn(true); // Set login status to true
        } catch (error) {
            console.error('Error logging in:', error.response ? error.response.data : error.message);
        }
    };

    // If user is logged in, render the SuccessfulLogin component
    if (isLoggedIn) {
        return <SuccessfulLogin />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
                        onClick={(e) => handleLogin(e)}
                    >
                        Login
                    </button>
                    <Link to="/" className="block mt-4">
                        <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray">
                            Back to Home
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
