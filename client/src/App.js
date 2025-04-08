import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handles the form submission
  const handleReceiptSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('date', date);
    formData.append('amount', amount);
    formData.append('description', description);
    formData.append('receipt', receipt);

    try {
      const response = await axios.post('http://localhost:5000/api/receipts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Success handling
      if (response.status === 200) {
        alert('Receipt submitted successfully!');
        setDate('');
        setAmount('');
        setDescription('');
        setReceipt(null);
      } else {
        setErrorMessage('Failed to submit the receipt.');
      }
    } catch (error) {
      console.error('Error submitting receipt:', error);
      setErrorMessage('Error submitting receipt. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Submit a Receipt</h1>
      <form onSubmit={handleReceiptSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="receipt">Receipt (File Upload):</label>
          <input
            type="file"
            id="receipt"
            onChange={(e) => setReceipt(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Submit Receipt</button>
      </form>

      {/* Display error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default App;
