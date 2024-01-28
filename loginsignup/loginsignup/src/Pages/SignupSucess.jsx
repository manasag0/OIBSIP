import LogoutButton from "../components/Logout";

const SuccessfulSignup = () => {
    return (
        <div className=" flex items-center justify-center bg-blue-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-blue-800">Signup Successful!</h2>
                <p className="text-gray-700 mb-4">You have successfully signed up.</p>
                <LogoutButton />
            </div>
        </div>
    );
};

export default SuccessfulSignup;
