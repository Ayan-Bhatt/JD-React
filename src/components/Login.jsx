import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); // Control OTP modal visibility
  const [otp, setOtp] = useState(''); // State for OTP
  //const [generatedOtp, setGeneratedOtp] = useState(''); // Store generated OTP//
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 6 characters long, include one uppercase letter and one special character.'
      );
      return;
    }

    setError('');
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
    // setGeneratedOtp(otp.toString());
    setShowModal(true); // Show OTP modal after successful validation

    // Simulate sending OTP (replace with actual email service)
    console.log(`OTP sent to ${email}: ${otp}`);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '1234') {
      navigate('/update-jd');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const closeOtpModal = () => {
    setShowModal(false); // Close the OTP modal
  };

  return (
    <div className="flex items-center justify-center h-full">
      {showModal ? (
        // OTP Modal
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Enter the 4-digit OTP</h2>
            <p className="mb-4 text-sm text-gray-600">
              sent to <span className="font-bold">{email}</span>.
            </p>
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mb-2"
              >
                Verify
              </button>
            </form>
            <button
              className="text-red-500 hover:underline"
              onClick={closeOtpModal}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Login Form
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-black w-80">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="text-red-600 text-xs italic mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
