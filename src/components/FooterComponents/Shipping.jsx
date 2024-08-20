import React from 'react';

const Shipping = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Shipping Information</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Domestic Shipping</h2>
                    <p className="text-lg text-gray-700">
                        We offer free standard shipping on all orders within the United States. Most orders are shipped within 1-2 business days. Standard shipping typically takes 3-5 business days.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
                    <p className="text-lg text-gray-700">
                        International shipping is available to various countries. Shipping costs and delivery times vary depending on the destination. Please note that additional customs fees or taxes may apply.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Expedited Shipping</h2>
                    <p className="text-lg text-gray-700">
                        Expedited shipping options are available at an additional cost. Please select your preferred shipping method at checkout.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Shipping FAQs</h2>
                    <ul className="list-disc pl-5 text-lg text-gray-700">
                        <li>Can I change my shipping address after placing an order? Please contact us as soon as possible to update your shipping address. Changes cannot be made once the order has shipped.</li>
                        <li>How can I track my order? A tracking number will be provided via email once your order has shipped.</li>
                        <li>What happens if my order is lost in transit? Contact us for assistance with lost orders. We will work with the carrier to resolve the issue.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Shipping;