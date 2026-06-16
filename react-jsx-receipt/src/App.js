import './App.css';

function App() {
  return (
    <div className="receipt">
      <h1>My Store</h1>
      <p>123 Main Street</p>
      <p>Phone: 555-1234</p>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>2</td>
            <td>$1.00</td>
          </tr>
          <tr>
            <td>Bread</td>
            <td>1</td>
            <td>$2.50</td>
          </tr>
          <tr>
            <td>Milk</td>
            <td>1</td>
            <td>$3.00</td>
          </tr>
          <tr>
            <td>Eggs</td>
            <td>1</td>
            <td>$4.00</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="totals">
        <p>Subtotal: $10.50</p>
        <p>Tax (8%): $0.84</p>
        <p><strong>Total: $11.34</strong></p>
      </div>
      <hr />
      <p>Thank you for shopping!</p>
    </div>
  );
}

export default App;
