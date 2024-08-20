import React, { useState } from "react";

const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order has shipped, you will receive an email with tracking information."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 100 countries worldwide. Shipping costs will apply, and will be added at checkout."
    },
    {
        question: "Can I return or exchange my purchase?",
        answer: "Yes, we accept returns and exchanges within 30 days of purchase. Please visit our return policy page for more details."
    },
    {
        question: "How can I contact customer service?",
        answer: "Our customer service team can be reached via email at support@luxeboutique.com or by phone at 1-800-123-4567."
    },
    // Add more FAQs here
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold cursor-pointer" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </h2>
                        <p className={`mt-2 text-gray-700 ${activeIndex === index ? "block" : "hidden"}`}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;