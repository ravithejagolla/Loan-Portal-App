import EligibilityCards from '../components/Eligibility';
import EMICalculator from './Emicalculater';

const WorkingProfessionals = () => {


    

  return (
    <>

    <div className="bg-blue-50 py-12 px-6 md:px-12 rounded-lg shadow-lg mt-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    LoanPortal: Instant Loan for Working Students
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Swiftly get through expenses with LoanPortal’s instant loan service — built for busy students balancing studies and work.
                </p>


                {/* Features */}
                <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                        ✅ <span className="ml-2">100% Online Process</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Loan Approval in 7 Minutes</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Direct Bank Transfer</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Flexible Tenure Options</span>
                    </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <a
                        href="/apply"
                        className="bg-blue-600 text-white px-5 py-2 ml-10 mt-15 rounded hover:bg-blue-700 text-center"
                    >
                        Apply for Loan
                    </a>
                </div>
            </div>


            {/* Image */}
            <div>
                <img
                    src="https://img.freepik.com/free-vector/student-loan-concept-illustration_114360-7960.jpg"
                    alt="Woking Profetional"
                    className="w-full rounded-lg shadow-md"
                />
            </div>
        </div>
    </div>
    <div className="bg-white p-6 rounded-lg w-screen h-screen ml-10 shadow-md   mt-5 space-y-4 text-gray-800 text-base leading-relaxed">
        <h1 className="text-center text-2xl font-bold text-blue-700 mb-15">
        Personal Loan for Working Salaried
        </h1>

        <p>
        As a working professional, you don’t have to wait for your next paycheck to handle life’s financial demands. Whether you’re investing in a skill growth course, managing medical bills, planning a vacation, or renovating your home, LoanPortal is here to help you achieve your goals without compromise. At LoanPortal, we understand that financial stability should empower you to grow, not hold you back.
        </p>

        <p>
        With LoanPortal’s instant personal loans for working professionals, you can borrow up to ₹50,000 effortlessly. Designed to offer convenience and flexibility, our loans make it easier for you to tackle everyday challenges or unexpected expenses.
        </p>

        <h1 className="text-center text-2xl font-bold text-blue-700 mb-5 mt-5">
        Why Choose LoanPortal’s Personal Loan for Working Profetionals?
        </h1>

        <p>✅ <strong>Unsecured Borrowing</strong> –  Personal loans typically don’t require you to pledge assets as collateral, making them an ideal choice for those who want to preserve their resources.</p>
        <p>✅ <strong>Flexible Repayment Options</strong> – Repayment plans can be designed to align with your cash flow, ensuring convenience and affordability.</p>
        <p>✅ <strong>Quick Disbursal</strong> – Emergencies demand swift action, and personal loans are structured to provide funds in minimal time, helping you address financial needs without delays.</p>
    </div>
    <EligibilityCards/>
    <EMICalculator/>
</>
  );
};

export default WorkingProfessionals;
