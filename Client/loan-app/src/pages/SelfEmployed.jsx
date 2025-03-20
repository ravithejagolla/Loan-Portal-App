
import EligibilityCards from '../components/Eligibility';
import EMICalculator from './Emicalculater';

const SelfEmployed = () => {

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
                            alt="Student Loan"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg w-screen h-screen ml-10 shadow-md   mt-5 space-y-4 text-gray-800 text-base leading-relaxed">
                <h1 className="text-center text-2xl font-bold text-blue-700 mb-15">
                Personal Loan for Self-Employed
                </h1>

                <p>
                Being self-employed offers unmatched flexibility but also brings financial challenges, especially when managing working capital or sudden expenses. Whether you’re a gig worker, freelancer, or small business owner, unexpected costs can disrupt your plans and operations. That’s where mPokket steps in as your reliable financial partner.
                </p>

                <p>
                To manage financial hurdles, get an instant personal loan for self-employed individuals of up to ₹50,000 in less than 10 minutes. These loans act as a financial safety net. Unlike traditional loans requiring extensive documentation or collateral, mPokket’s personal loans for self-employed professionals are tailored to provide quick, easy access to funds without lengthy approval processes.
                </p>

                <h1 className="text-center text-2xl font-bold text-blue-700 mb-5 mt-5">
                Why Choose mPokket’s Personal Loan for Self-Employed Individuals?
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

export default SelfEmployed;
