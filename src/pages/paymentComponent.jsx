import React from 'react';
import axios from 'axios';

function PaymentComponent({amount,transactionId,userId}) {
    const initiatePayment = async () => {
        
        // const transactionId = 'unique_transaction_id';
        // const userId = 'user_id';

        try {
            const response = await axios.post('/api/phonepe/pay', {
                amount,
                transactionId,
                userId
            });

            if (response.data.success) {
                window.location.href = response.data.redirectUrl; 
            } else {
                alert('Payment initiation failed');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('An error occurred while processing payment');
        }
    };

    return (
        <button onClick={initiatePayment}>
            Pay with PhonePe
        </button>
    );
}

export default PaymentComponent;
