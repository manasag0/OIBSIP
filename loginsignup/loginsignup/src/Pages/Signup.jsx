// Signup.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessfulSignup from './SignupSucess'; // Corrected import statement

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignupSuccess, setIsSignupSuccess] = useState(false); // New state for signup success

    const isPasswordValid = () => {
        // Password validation logic if needed
        return true; // You can modify this according to your requirements
    };

    const isFormValid = () => {
        return isPasswordValid() && password === confirmPassword;
    };

    const handleSignup = async () => {
        if (!isFormValid()) {
            // Handle invalid form submission
            console.error('Invalid form submission');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3020/signup', {
                username,
                email,
                password,
                // ... (other user details)
            });

            console.log('User registered successfully:', response.data);
            setIsSignupSuccess(true); // Set signup success state to true
        } catch (error) {

            console.error('Error registering user:', error.response ? error.response.data : error.message);
            //alert the message
            alert("Mail id has used already, go to login!!");
        }
    };

    useEffect(() => {
        // Optionally, you can redirect the user to the login page after successful registration
        // history.push('/login');
    }, [isSignupSuccess]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {isSignupSuccess ? (
                // If signup is successful, render SuccessfulSignup component
                <SuccessfulSignup />
            ) : (
                // If signup is not successful, render the signup form
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6">Signup</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${isPasswordValid() ? 'border-green-500' : 'border-red-500'}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {!isPasswordValid() && (
                                <p className="text-sm text-red-500">Password must be at least 6 characters, include one symbol, and one number.</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Re-enter Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${password === confirmPassword ? 'border-green-500' : 'border-red-500'}`}
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {password !== confirmPassword && <p className="text-sm text-red-500">Passwords do not match.</p>}
                        </div>
                        <button
                            type="button"
                            className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${isFormValid() ? '' : 'cursor-not-allowed'}`}
                            onClick={handleSignup}
                            disabled={!isFormValid()}
                        >
                            Signup
                        </button>
                        <div className='flex justify-between'>
                            <Link to="/login" className="flex mt-4 w-full">
                                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600">
                                    Login
                                </button>
                            </Link>
                            <Link to="/" className="flex w-full mt-4">
                                <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray">
                                    Back to Home
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Signup;
