import LogoutButton from "../components/Logout";

const SuccessfulLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-green-800">Login Successful!</h2>
                <p className="text-gray-700 mb-4">You have successfully logged in.</p>
                <LogoutButton />
            </div>
        </div>
    );
};

export default SuccessfulLogin;
