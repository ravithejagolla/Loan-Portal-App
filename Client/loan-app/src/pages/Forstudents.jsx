
import EligibilityCards from '../components/Eligibility';
import EMICalculator from './Emicalculater';

const ForStudents = () => {
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
                    Personal Loan for Working Students
                </h1>

                <p>
                    As a part-time professional, managing finances can sometimes be overwhelming.

                    Whether it’s your monthly wage, your parent’s pocket money, or juggling expenses as a working student, you're always walking a tightrope.

                    Any sudden expense can throw you off balance.

                    When an emergency arises, like an unexpected repair bill or an opportunity you can’t afford to miss, finding instant cash isn’t always easy.

                    Borrowing from friends or family? That can be uncomfortable and isn’t always an option.
                </p>

                <p>
                    In such emergencies, having an instant personal loan gives you the flexibility to manage month-end blues and navigate sudden cash crunches.
                    With instant loans for working students, you can take a personal loan up to ₹50,000 to cover your regular expenses and support your aspirations.
                </p>
                <p>
                    With LoanPortal, no credit history or collateral is needed to get a loan!

                    Just provide your age proof, employment details, PAN, and Aadhar, and you’re all set.

                    Additionally, we help you build a strong credit score, making future borrowing even easier.

                    So, why wait? Get your personal loans for working students directly into your bank account today!
                </p>

                <h1 className="text-center text-2xl font-bold text-blue-700 mb-10 mt-5">
                    Why choose LoanPortal’s Loan for Working Students Over Traditional Banks?
                </h1>

                <p>✅ <strong>Approval Within Minutes</strong> – Submit your documents and get approval within minutes.</p>
                <p>✅ <strong>Flexible Repayment</strong> – Get an instant loan and repay as per your convenience. Get an EMI payment option to repay your loan with ease.</p>
                <p>✅ <strong>100% Digital Process</strong> – Skip the paperwork and queues of traditional banks. Enjoy instant disbursal directly to your bank account through a completely digital process.</p>
            </div>
            <EligibilityCards/>
            <EMICalculator/>
        </>
        
    );
};

export default ForStudents;
