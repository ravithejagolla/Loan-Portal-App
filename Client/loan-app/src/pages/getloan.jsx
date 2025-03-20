import MobileOtpLogin from "../components/Loginform";




const features = [
    {
      title: "Approval in 10 mins",
      icon: "https://cdn-icons-png.flaticon.com/512/4201/4201973.png", // stopwatch
    },
    {
      title: "No collaterals & 100% digital process",
      icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png", // document
    },
    {
      title: "Minimum documents & no paperwork",
      icon: "https://cdn-icons-png.flaticon.com/512/3721/3721848.png", // checklist
    },
    {
      title: "Instant cash in your bank account",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png", // bank transfer
    },
    {
      title: "Options for loan extension",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828805.png", // calendar or extend
    },
    {
      title: "Rewards for timely repayments",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // reward
    },
    {
      title: "Flexible repayment options",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png", // emi
    },
  ];
  
  const InstantLoanInfo = () => {
    return (
      <div className="bg-blue-50 py-12 px-6 md:px-12 max-w-6xl mx-auto mt-10 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Text and Feature Cards */}
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              Instant Personal Loans up to ₹50,000
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              For Students and Salaried Individuals
            </p>
  
            {/* Features as Cards with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded shadow hover:shadow-md transition"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-gray-800 text-sm">{feature.title}</p>
                </div>
              ))}
            </div>
  
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-2xl font-bold text-blue-700">45M+</p>
                <p className="text-sm text-gray-600">Downloads</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-2xl font-bold text-blue-700">35M+</p>
                <p className="text-sm text-gray-600">Customers</p>
              </div>
            </div>
          </div>
  
          {/* Right Section - Image */}
          <div className="flex justify-center">
           <MobileOtpLogin/>
          </div>
        </div>
      </div>
    );
  };
  
  export default InstantLoanInfo;
  