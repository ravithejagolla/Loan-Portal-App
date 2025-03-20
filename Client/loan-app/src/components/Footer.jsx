import React from "react";

const Footer = () => {
  return (
    <div >
      <footer className="bg-[#111133] text-white p-5 flex flex-wrap w-screen  justify-evenly">
        {/* Company Info */}
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="mb-2 text-lg uppercase">LoanPortal</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-sm cursor-pointer hover:underline">About Us</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Careers</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Contact</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Support</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Blog</li>
          </ul>
        </div>

        {/* For Borrowers */}
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="mb-2 text-lg uppercase">For Borrowers</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-sm cursor-pointer hover:underline">Apply for Loan</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Check Loan Status</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">EMI Calculator</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Repayment Schedule</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Loan Comparison</li>
          </ul>
        </div>

        {/* For Lenders */}
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="mb-2 text-lg uppercase">For Lenders</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-sm cursor-pointer hover:underline">Partner With Us</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Lender Dashboard</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Credit Risk Analysis</li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="mb-2 text-lg uppercase">Tools & Resources</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-sm cursor-pointer hover:underline">Loan Types</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">FAQs</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Credit Score Info</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Documentation Guide</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Interest Rates</li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="mb-2 text-lg uppercase">Legal</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 text-sm cursor-pointer hover:underline">Privacy Policy</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Terms of Service</li>
            <li className="mb-2 text-sm cursor-pointer hover:underline">Compliance</li>
          </ul>
          <h4 className="mb-2 text-lg uppercase mt-4">Follow Us</h4>
          <ul className="list-none p-0 m-0 flex gap-4 text-sm">
            <li className="cursor-pointer hover:underline">Facebook</li>
            <li className="cursor-pointer hover:underline">LinkedIn</li>
            <li className="cursor-pointer hover:underline">Twitter</li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="w-full text-center mt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()}, LoanPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
