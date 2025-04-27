// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const CheckoutSection = styled.section`
  padding: 2rem 9%;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const FormLabel = styled.label`
  font-size: 1.8rem;
  margin-bottom: .5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: .5rem;
  border: var(--border);
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: .5rem;
  border: var(--border);
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: .5rem;
  border: var(--border);
`;

const SubmitBtn = styled.button`
  font-size: 2rem;
  padding: .8rem 3rem;
  background: var(--orange);
  color: #fff;
  border-radius: .5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: #e76f00;
  }
`;

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted', formData);
  };

  return (
    <CheckoutSection>
      <h1 className="heading">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="address">Shipping Address</FormLabel>
          <FormTextarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></FormTextarea>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="paymentMethod">Payment Method</FormLabel>
          <FormSelect
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </FormSelect>
        </FormGroup>

        <SubmitBtn type="submit">Confirm Order</SubmitBtn>
      </form>
    </CheckoutSection>
  );
};

export default CheckoutPage;
