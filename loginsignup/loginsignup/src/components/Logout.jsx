const LogoutButton = () => {
    const handleLogout = () => {
        // Clear the authentication token from local storage
        localStorage.removeItem('authToken');
        // Redirect or perform any other actions after logout
        // Example: Redirect to the home page
        window.location.href = '/';
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
