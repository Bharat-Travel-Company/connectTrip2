import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import kashmir_7 from "../assets/kashmir/kashmir_7-min.jpg";

function PaymentComponent({ amount, transactionId, userId }) {
    const initiatePayment = async () => {
        // Validate required fields
        if (!amount || !transactionId || !userId) {
            alert('Missing required payment details. Please try again.');
            return;
        }

        try {
            // Display a loading message
            alert('Initiating payment. Please wait...');

            // Send payment request to the backend
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/phonepe/pay`, {
                amount,
                transactionId,
                userId,
            });

            // Handle the response
            if (response.data.success) {
                // Redirect user to PhonePe payment URL
                window.location.href = response.data.redirectUrl;
            } else {
                // Show a user-friendly error message if payment initiation fails
                alert(response.data.message || 'Payment initiation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);

            // Check if the error is a network issue or server-side issue
            if (error.response) {
                alert(`Payment failed: ${error.response.data.message || 'Unknown server error'}`);
            } else if (error.request) {
                alert('Payment failed: Unable to connect to the server. Please check your internet connection.');
            } else {
                alert('Payment failed: An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full">
            {/* Background image */}
            <img src={kashmir_7} alt="Kashmir" className="w-full h-full object-cover opacity:10" />

            {/* Half Circle on the Right */}
            <div className="absolute top-0 right-0 w-1/ h-full bg-orange-400 rounded-l-full"></div>

            {/* Floating Payment Card */}
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden p-6">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 bg-orange-500 text-white p-6">
                    <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                    <ul className="space-y-4">
                        <li className="font-medium">
                            <strong>Amount:</strong> <span className="text-xl">${amount}</span>
                        </li>
                        <li>
                            <strong>Transaction ID:</strong>
                            <p>{transactionId}</p>
                        </li>
                        <li>
                            <strong>User ID:</strong>
                            <p>{userId}</p>
                        </li>
                    </ul>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-2/3 p-6">
                    <h2 className="text-xl font-bold mb-4">PhonePe Payment</h2>
                    <p className="text-gray-600 mb-6">
                        You are about to pay <strong>${amount}</strong>. Please proceed with the payment to complete the transaction.
                    </p>
                    <div className="text-center">
                        <button
                            onClick={initiatePayment}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Pay with PhonePe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Prop type validation for better debugging
PaymentComponent.propTypes = {
    amount: PropTypes.number.isRequired,
    transactionId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
};

export default PaymentComponent;