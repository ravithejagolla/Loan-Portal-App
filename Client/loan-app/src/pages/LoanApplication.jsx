import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoanApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    purpose: '',
    income: '',
    employmentType: '',
    dob: '',
    panNumber: '',
    aadhaarNumber: '',
    address: '',
  });

  const [panImage, setPanImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setPanImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    if (panImage) {
      formPayload.append('panImage', panImage);
    }

    try {
      const res = await axios.post('https://b43-web-172-web-project-167-1.onrender.com/api/apply-loan', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Application submitted successfully!');
      console.log(res.data);
      setTimeout(()=>{
        navigate('/');
      },1000)
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit application.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg space-y-5"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">Loan Application</h2>
        <p className="text-center text-gray-500 text-sm mb-4">Please fill in your details carefully.</p>

        <div className="grid grid-cols-1 gap-4">
          <input name="fullName" type="text" placeholder="Full Name" className="input-style" value={formData.fullName} onChange={handleChange} />
          <input name="dob" type="date" className="input-style" value={formData.dob} onChange={handleChange} />
          <input name="amount" type="number" placeholder="Loan Amount" className="input-style" value={formData.amount} onChange={handleChange} />
          <input name="purpose" type="text" placeholder="Purpose of Loan" className="input-style" value={formData.purpose} onChange={handleChange} />
          <input name="income" type="number" placeholder="Monthly Income" className="input-style" value={formData.income} onChange={handleChange} />
          <select name="employmentType" className="input-style" value={formData.employmentType} onChange={handleChange}>
            <option value="">Select Employment Type</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
            <option value="student">Student</option>
          </select>
          <input name="panNumber" type="text" placeholder="PAN Card Number" className="input-style" value={formData.panNumber} onChange={handleChange} />
          <input name="aadhaarNumber" type="text" placeholder="Aadhaar Number (Optional)" className="input-style" value={formData.aadhaarNumber} onChange={handleChange} />
          <input name="address" type="text" placeholder="Address" className="input-style" value={formData.address} onChange={handleChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition duration-200 shadow-sm"
        >
          Submit Application
        </button>

        {message && (
          <p className="text-center text-sm text-green-600 mt-2">{message}</p>
        )}
      </form>
    </div>
  );
};

export default LoanApplicationForm;
