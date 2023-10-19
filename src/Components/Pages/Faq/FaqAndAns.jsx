import { useState } from "react";

const FaqAndAns = () => {
  const [nFaq, setNFaq] = useState([
    {
      ques: " What is your return policy for electronic devices?",
      ans: "We offer a 30-day return policy for all electronic devices. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
      isOpen: false,
    },
    {
      ques: "Do you provide warranties for your products?",
      ans: "Yes, we offer warranties for most of our electronic products. The duration of the warranty varies by product, and it covers manufacturing defects. Be sure to check the product details for warranty information.",
      isOpen: false,
    },
    {
      ques: "Can I track the delivery of my order?",
      ans: "Absolutely! We provide order tracking services. Once your order is processed, you'll receive a tracking number to monitor the status and estimated delivery date.",
      isOpen: false,
    },
    {
      ques: "What payment methods do you accept?",
      ans: "We accept various payment methods, including credit cards, debit cards, PayPal, and other secure online payment options. You can choose the one that suits you best during checkout.",
      isOpen: false,
    },
    {
      ques: "Do you offer technical support for your products?",
      ans: "Yes, we provide technical support for our products. If you encounter any issues or have questions about setup, operation, or troubleshooting, our dedicated support team is here to assist you. You can reach out via phone, email, or our online support portal.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaq = [...nFaq];
    updatedFaq[index].isOpen = !updatedFaq[index].isOpen;
    setNFaq(updatedFaq);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-8">
          {nFaq.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
            >
              <button
                className="flex items-center justify-between w-full p-8 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.ques}
                </h1>
                <span
                  className={`text-white bg-[#77aa51] rounded-full transform ${
                    faq.isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              {faq.isOpen && (
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  {faq.ans}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAndAns;
