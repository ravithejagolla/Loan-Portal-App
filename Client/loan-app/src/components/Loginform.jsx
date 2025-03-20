import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailOtpLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
 

  const sendOtp = async () => {
    try {
      const res = await axios.post('https://b43-web-172-web-project-167-1.onrender.com/api/send-email-otp', {
        email,
      });
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      console.error('Error:', err.response?.data);
      setMessage(err.response?.data?.error || 'Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
   
    try {
      const res = await axios.post('https://b43-web-172-web-project-167-1.onrender.com/api/verify-email-otp', {
        email,
        otp,
      });
      setMessage(res.data.message);
      setTimeout(() => {
        navigate('/loan-application');
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 sm:p-8">
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
          alt="LoanPortal Logo"
          className="w-12 h-12"
        />
        <div className="ml-3">
          <h1 className="text-2xl font-extrabold text-blue-700">LoanPortal</h1>
          <p className="text-xs text-gray-500 font-medium">Fast Approval • Instant Loan</p>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-4">
        <img
          src="https://cdn-icons-png.freepik.com/256/9384/9384872.png?ga=GA1.1.979019997.1742365171&semt=ais_hybrid"
          alt="Loan Illustration"
          className="w-32 h-32"
        />
      </div>

      {/* Highlight Text */}
      <p className="text-center text-sm text-gray-700 mb-4">
        100% <span className="font-semibold">Paperless</span> &{" "}
        <span className="text-orange-500 font-semibold">Collateral-free</span>
      </p>

      {/* Step 1: Email */}
      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-xs text-gray-600 mb-4">
            <input type="checkbox" className="accent-blue-600 mr-2" defaultChecked />
            I agree to the{" "}
            <a href="#" className="text-blue-600 font-medium underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-blue-600 font-medium underline">T&C</a>.
          </div>
          <button
            onClick={sendOtp}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Send OTP
          </button>
        </>
      )}

      {/* Step 2: OTP */}
      {step === 2 && (
        <>
          <label className="block mb-2 text-sm text-gray-700">Enter OTP</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-green-400 outline-none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP received"
          />
          <button
            onClick={verifyOtp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Verify OTP
          </button>
        </>
      )}

      {/* Message */}
      {message && (
        <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
      )}
    </div>
  </div>
  );
};

export default EmailOtpLogin;
