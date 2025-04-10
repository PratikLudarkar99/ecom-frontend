import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaymentForm from './PaymentForm'
import { loadStripe } from '@stripe/stripe-js'
import { createStripePaymentSecret } from '../../store/action'
import { Elements } from '@stripe/react-stripe-js'
import { Skeleton } from '@mui/material'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const StripPayment = () => {
  const dispatch = useDispatch()
  const { clientSecret } = useSelector((state) => state.auth)
  const { totalPrice } = useSelector((state) => state.carts)
  const { isLoading, errorMessage } = useSelector((state) => state.errors)

  useEffect(() => {
    if (!clientSecret) {
      dispatch(createStripePaymentSecret(totalPrice));
    }
  }, [clientSecret])

  if (isLoading) {
    return(
      <div className='max-w-lg mx-auto'>
        <Skeleton />
      </div>
    )
  }

  return (
    <>
      {clientSecret && (
        <Elements stripe = {stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} totalPrice={totalPrice}/>
        </Elements>
      )}
    </>
  )
}

export default StripPayment