
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="text-center  w-screen h-screen bg-[url('https://hips.hearstapps.com/hmg-prod/images/how-to-get-a-personal-loan-1584033069.jpg')] bg-cover bg-center">
        <h1 className="text-3xl font-bold  mb-3">Welcome to LoanPortal</h1>
        <p className="text-gray-600">Apply for loans, track applications, and manage repayments with ease.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-lg shadow-md mt-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">LoanPortal: Your Instant Loan App for Hassle-Free Loans</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ready to invest in your future, but concerned about the financial hurdles along the way?
            <br /><br />
            <strong>LoanPortal</strong> is your Instant Loan App for quick financial solutions in India. As a trusted credit loan app, we are here to help you navigate the world of personal loans with confidence and clarity.
            <br /><br />
            With LoanPortal's small credit loan app in India, you can access fast and convenient loans whenever you need them.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2cec41f9ef836a6dc39e_Hero.svg"
            alt="LoanPortal App"
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
      <div className="bg-gray-50 py-12 px-6 md:px-12 mt-10 rounded-lg shadow-inner max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Why Choose LoanPortal Credit Loan App?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Loan In 7 Mins</h3>
            <p className="text-gray-700">Get funds fast with our 7-minute loan approval process.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">100% Online Process</h3>
            <p className="text-gray-700">Streamline your finances with our 100% online loan application process.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Direct Bank Transfer</h3>
            <p className="text-gray-700">
              Seamless funds delivery through secure direct bank transfer, ensuring your convenience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Flexible & Hassle Free</h3>
            <p className="text-gray-700">
              Take bullet loans or choose from easy EMI payment options.
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Home;


