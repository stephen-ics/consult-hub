import React from 'react';
import { Button } from '@chakra-ui/react';

const Checkout = () => {
  // Function to handle the checkout process
  const handleCheckout = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      // Data to be sent to the server
      const itemData = {
        title: "Vintage Camera",
        image_url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        price: 15000 // $150.00
      };

      // Making the API call to your backend
      const response = await fetch('http://127.0.0.1:8000/checkout/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData)
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the Stripe checkout page
        window.location.href = data.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout Error:', error);
    }
  };

  return (
    <div>
      <Button colorScheme="blue" onClick={handleCheckout}>
        Start Checkout
      </Button>
    </div>
  );
};

export default Checkout;
