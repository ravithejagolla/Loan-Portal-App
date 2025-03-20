import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white shadow-xl p-8 rounded-2xl text-center space-y-4 max-w-md">
        <h2 className="text-2xl font-bold text-green-700">🎉 Application Submitted!</h2>
        <p className="text-gray-600">
          Thank you for submitting your loan application. We will reach out to you once it's confirmed via email.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
