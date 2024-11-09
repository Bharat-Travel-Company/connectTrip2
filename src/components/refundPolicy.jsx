import React from 'react';

const PaymentPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Package Payment Policy</h2>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">1. Advance Deposit</h3>
        <p>A 50% deposit of the total package cost is required to confirm the booking. This deposit must be made to our company’s account. The remaining 50% balance is due upon arrival on the first day of the tour.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">2. Non-Payment</h3>
        <p>In the event of non-payment of either the advance or balance, Connect Trip reserves the right to withhold services.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">3. Confirmation Requirement</h3>
        <p>Guests are required to carry their confirmation letter throughout the trip, as it contains essential information, including confirmed hotel details, cab information, and service contact numbers.</p>
      </section>

      <h2 className="text-xl font-semibold mb-4">Advance Payment Process</h2>
      <p>Advance payments can be made conveniently through our website <a href="http://www.connecttrip.in" className="text-blue-500">www.connecttrip.in</a> using various options like net banking, credit/debit cards, and digital wallets through EBS, CC-Avenue, Paytm, Atom, and more.</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">EMI Options Available</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>Cash deposits can be made directly at Connect Trip offices.</li>
        <li>Alternatively, cash can be deposited in any of our associated banks: HDFC, PNB, ICICI, Axis, SBI, BOI, and Yes Bank.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Service Note</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Customization:</strong> The package can be customized according to customer preferences.</li>
        <li><strong>Air Conditioning:</strong> AC usage is not available in vehicles for hill stations (mainly in North India and the North East regions).</li>
        <li><strong>Check-In/Check-Out Times:</strong> Standard hotel policies apply with a check-in time of 12:00 noon and check-out time of 10:00 AM.</li>
        <li><strong>Meal Timing:</strong> Guests must adhere to hotel-specified meal times.</li>
        <li><strong>Hotel Standards:</strong> Hotel facilities may vary across tourist destinations.</li>
        <li><strong>Sightseeing Adjustments:</strong> Sightseeing schedules may be adjusted if certain sites are closed on the scheduled day.</li>
        <li><strong>Extra Costs:</strong> Unforeseen events may incur additional costs payable by the guest on-site.</li>
        <li><strong>Service Charges:</strong> Service charges and taxes are separate.</li>
        <li><strong>Documentation:</strong> Guests must carry valid government-issued photo ID proof.</li>
        <li><strong>Unforeseen Delays:</strong> Connect Trip is not responsible for delays due to heavy traffic, strikes, etc.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Cancellation & Refund Policy</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Booking Confirmation:</strong> The contract is valid once Connect Trip receives the initial deposit.</li>
        <li><strong>Cancellation Policy:</strong> Cancellations made more than 15 days before travel date may incur charges.</li>
        <li><strong>Non-Refundable Advance:</strong> For cancellations within 15 days, the 50% advance is non-refundable.</li>
        <li><strong>Exceptional Circumstances:</strong> Refunds may be issued for family emergencies upon presentation of a death certificate.</li>
        <li><strong>Price Changes:</strong> Connect Trip reserves the right to adjust package prices based on economic or policy changes.</li>
        <li><strong>Complimentary Services:</strong> Complimentary services cannot be exchanged if not provided.</li>
        <li><strong>Non-Sufficient Funds:</strong> Connect Trip may cancel the invoice if the advance payment is insufficient.</li>
        <li><strong>Refund Timeline:</strong> Refunds will be processed within 5-7 working days.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Amendment Policy (Prepone & Postpone)</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Amendment Request:</strong> Contact us via email at least 15 days before departure for changes.</li>
        <li><strong>Single Amendment Without Charge:</strong> One change is allowed without additional charges if notified in advance.</li>
        <li><strong>Provider Fees:</strong> Additional fees may apply from service providers for date changes.</li>
        <li><strong>Availability & Rates:</strong> Amendments depend on availability and seasonal rate changes.</li>
        <li><strong>Limitations on Changes:</strong> No changes are accepted within 15 days of travel, with rare exceptions.</li>
        <li><strong>Advance Validity & Transferability:</strong> Advance payments are valid for 1 year and can be transferred if terms are met.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Jurisdiction</h2>
      <p>All disputes fall under the jurisdiction of courts and tribunals at Huzur, District Rewa, M.P., India.</p>
    </div>
  );
};

export default PaymentPolicy;
