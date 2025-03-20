const eligibilityCriteria = [
    {
      title: "Age: 18+ years",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", 
    },
    {
      title: "Nationality: Indian",
      icon: "https://cdn-icons-png.flaticon.com/512/197/197419.png", 
    },
    {
      title: "KYC Documents",
      icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png", // KYC document
    },
    {
      title: "Proof of Education/Occupation",
      icon: "https://cdn-icons-png.flaticon.com/512/3075/3075923.png", // education/career
    },
  ];
  
  const EligibilityCards = () => {
    return (
      <div className="bg-white py-12 px-6 md:px-12 max-w-6xl mx-auto mt-10 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Eligibility Criteria
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {eligibilityCriteria.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4"
              />
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default EligibilityCards;
  