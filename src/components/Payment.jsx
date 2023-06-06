import { useState } from 'react';

export default function Payment() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      fullName,
      email,
      address,
      city,
      cardNumber,
    };

    fetch('', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  function onFullNameChange(event) {
    setFullName(event.target.value);
  }
  function onAddressChange(event) {
    setAddress(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onCityChange(event) {
    setCity(event.target.value);
  }
  function onCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={fullName}
          placeholder="Full name"
          onChange={onFullNameChange}
        />
        <input
          value={address}
          placeholder="Address"
          onChange={onAddressChange}
        />
        <input
          value={email}
          placeholder="Email"
          onChange={onEmailChange}
        />
        <input 
        value={city} 
        placeholder="City" 
        onChange={onCityChange} 
        />
        <input
          value={cardNumber}
          placeholder="Card number"
          onChange={onCardNumberChange}
        />
      </form>
    </div>
  );
}