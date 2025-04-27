const handleBuyNow = () => {
    axios
      .post('http://localhost:5000/api/checkout/create-order', {
        amount: totalAmount,  // total amount in INR
      })
      .then((response) => {
        const { id, amount, currency } = response.data;
        const options = {
          key: 'rzp_test_2QDKgT0q0ieVqG',
          amount: amount,
          currency: currency,
          name: 'Grocery Store',
          order_id: id,
          handler: function (response) {
            alert('Payment successful');
            // Handle order confirmation here
          },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch((error) => console.error('Error creating order', error));
  };
  