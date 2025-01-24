'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ClipLoader } from 'react-spinners'
// import { CheckCircleIcon } from '@heroicons/react/outline'
import useBasketStore from '@/app/(store)/store'

export default function CheckoutPage() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentDetails, setPaymentDetails] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const router = useRouter()

  const groupedItems = useBasketStore.getState().getGroupedItems()

  const handlePayment = async () => {
    if (!userDetails.name || !userDetails.phone || !userDetails.address || !userDetails.email) {
      alert('Please fill in all your personal details.')
      return
    }

    if (!paymentMethod) {
      alert('Please select a payment method.')
      return
    }

    if (paymentMethod !== 'COD' && !paymentDetails) {
      alert(`Please enter your ${paymentMethod} details.`)
      return
    }

    setIsLoading(true)

    // Simulating payment processing
    setTimeout(() => {
      setPaymentSuccess(true)
      setIsLoading(false)

      setTimeout(() => {
        router.push('/order-confirmation')
      }, 2000) // Redirect after 2 seconds
    }, 3000) // Simulate payment processing delay
  }

  return (
    <div className="container mx-auto p-8 max-w-5xl bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-white">Checkout</h1>

      {/* Progress Bar */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">1</span>
          <span className="text-white font-semibold">User Details</span>
        </div>
        <div className="w-16 h-1 bg-blue-300"></div>
        <div className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">2</span>
          <span className="text-white font-semibold">Payment Method</span>
        </div>
        <div className="w-16 h-1 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">3</span>
          <span className="text-white font-semibold">Confirmation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Details */}
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Full Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Delivery Address"
            value={userDetails.address}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        {/* Payment Method */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Select Payment Method</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('EasyPaisa')}
              className={`p-4 border rounded-lg ${paymentMethod === 'EasyPaisa' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              EasyPaisa
            </button>
            <button
              onClick={() => setPaymentMethod('JazzCash')}
              className={`p-4 border rounded-lg ${paymentMethod === 'JazzCash' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              JazzCash
            </button>
            <button
              onClick={() => setPaymentMethod('Bank Account')}
              className={`p-4 border rounded-lg ${paymentMethod === 'Bank Account' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              Bank Account
            </button>
            <button
              onClick={() => setPaymentMethod('COD')}
              className={`p-4 border rounded-lg ${paymentMethod === 'COD' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              COD
            </button>
          </div>

          {/* Dynamic Payment Details Input */}
          {paymentMethod && paymentMethod !== 'COD' && (
            <input
              type="text"
              placeholder={`Enter your ${paymentMethod} details`}
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      </div>

      {/* Payment Button */}
      <div className="mt-8">
        {isLoading ? (
          <div className="flex flex-col items-center">
            <ClipLoader color="#1d4ed8" loading={isLoading} size={50} />
            <p className="mt-4 text-gray-600">Processing Payment...</p>
          </div>
        ) : (
          <button
            onClick={handlePayment}
            className="w-full bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition ease-in-out duration-300"
          >
            Complete Order
          </button>
        )}
      </div>

      {/* Success Message */}
      {paymentSuccess && !isLoading && (
        <div className="mt-6 flex items-center justify-center">
          {/* <CheckCircleIcon className="w-12 h-12 text-green-500" /> */}
          <div className="ml-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">Payment Successful!</h2>
            <p className="text-gray-600">Redirecting to order confirmation...</p>
          </div>
        </div>
      )}
    </div>
  )
}
