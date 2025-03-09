import React from "react";

const PaymentButtons = ({ amount }) => {
  const handleSadapayPayment = () => {
    const sadapayPaymentLink = `https://www.sadapay.pk/pay?amount=${amount}`; // Replace with actual link
    window.location.href = sadapayPaymentLink;
  };

  const handleDebitCardPayment = () => {
    alert("Redirecting to debit card payment... (Integrate your payment gateway here)");
    // Example: Redirect to a Stripe/PayPal checkout page
    // window.location.href = "https://your-payment-gateway.com/checkout";
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleSadapayPayment}
        className="w-full bg-orange-500 text-white text-lg font-semibold py-4 rounded-md shadow-md transition duration-300 hover:bg-orange-700"
      >
        Pay with SadaPay - ${amount}
      </button>

      <button
        onClick={handleDebitCardPayment}
        className="w-full bg-green-600 text-white text-lg font-semibold py-4 rounded-md shadow-md transition duration-300 hover:bg-green-800"
      >
        Pay with Debit Card - ${amount}
      </button>
    </div>
  );
};

export default PaymentButtons;
