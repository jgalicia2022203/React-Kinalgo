/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../services/axios";

const PaymentPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails } = location.state;

  useEffect(() => {
    if (!bookingDetails) {
      navigate("/");
    }
  }, [bookingDetails, navigate]);

  const handlePayment = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token not found. Please log in again.");
        navigate("/login");
        return;
      }

      const headers = {
        headers: {
          "x-token": token,
        },
      };

      // Send booking details to backend
      const bookingResponse = await axios.post(
        "/bookings/",
        {
          user: bookingDetails.user,
          hotel: bookingDetails.hotelId,
          room: bookingDetails.roomId,
          startDate: bookingDetails.startDate,
          endDate: bookingDetails.endDate,
        },
        headers
      );

      const booking = bookingResponse.data.booking;

      // Calculate total (assuming you have logic to calculate total)
      const total = 131.76; // Replace this with the actual calculation

      // Create invoice
      const invoiceResponse = await axios.post(
        "/invoices/",
        {
          guest: booking.user,
          hotel: booking.hotel,
          room: booking.room,
          total: total,
        },
        headers
      );

      const invoice = invoiceResponse.data.invoice;

      // Download invoice as PDF
      const pdfResponse = await axios.post(
        "/invoices/download",
        { invoiceId: invoice._id },
        { headers: { "x-token": token }, responseType: "blob" }
      );
      const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Invoice-${invoice.invoice_number}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      toast.success("Booking and payment successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="w-full bg-stone-800 text-white flex justify-center items-center h-screen">
      <div className="max-w-4xl w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Who’s Checking in?</h2>
          <img
            src="../../../public/logotipo.png"
            alt="Kinalgo Logo"
            className="h-16"
          />
        </div>
        <div className="flex gap-8">
          <div className="flex-grow">
            <div className="mb-4">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              onClick={handlePayment}
              className="bg-orange-400 text-white py-2 px-4 rounded-md font-bold w-full mt-4"
            >
              Complete Booking
            </button>
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Price Details</h3>
            <div className="mb-4">
              <img
                src="/path/to/hotel-image.jpg"
                alt="Hotel"
                className="w-full rounded-md"
              />
            </div>
            <div className="text-lg">
              <p className="flex justify-between">
                <span>1 room x 1 night</span>
                <span>$108</span>
              </p>
              <p className="flex justify-between">
                <span>Taxes</span>
                <span>$23.76</span>
              </p>
              <hr className="my-4 border-gray-500" />
              <p className="flex justify-between font-bold">
                <span>Total</span>
                <span>$131.76</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
