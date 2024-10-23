document.addEventListener('DOMContentLoaded', () => {
  const orderButton = document.getElementById('btn');
  
  // Create the popup overlay
  const popupOverlay = document.createElement('div');
  popupOverlay.style.position = 'fixed';
  popupOverlay.style.top = '0';
  popupOverlay.style.left = '0';
  popupOverlay.style.width = '100%';
  popupOverlay.style.height = '100%';
  popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popupOverlay.style.display = 'flex';
  popupOverlay.style.justifyContent = 'center';
  popupOverlay.style.alignItems = 'center';
  popupOverlay.style.visibility = 'hidden'; // Initially hidden
  popupOverlay.style.zIndex = '1000';

  // Create the popup box
  const popupBox = document.createElement('div');
  popupBox.style.width = '400px';
  popupBox.style.backgroundColor = '#fff';
  popupBox.style.padding = '20px';
  popupBox.style.borderRadius = '10px';
  popupBox.style.textAlign = 'center';

  // Content for the coffee selection
  popupBox.innerHTML = `
    <h2>Select a Coffee Product</h2>
    <select id="coffeeSelect" style="padding: 10px; margin-bottom: 20px; width: 100%;">
      <option value="" disabled selected>Select a coffee</option>
      <option value="Espresso">Espresso</option>
      <option value="Latte">Latte</option>
      <option value="Cappuccino">Cappuccino</option>
      <option value="Mocha">Mocha</option>
    </select>
    <input type="text" id="name" placeholder="Your Name" style="padding: 10px; width: 100%; margin-bottom: 10px;">
    <input type="text" id="address" placeholder="Your Address" style="padding: 10px; width: 100%; margin-bottom: 10px;">
    <input type="tel" id="phone" placeholder="Your Phone Number" style="padding: 10px; width: 100%; margin-bottom: 10px;">
    <button id="confirmOrder" style="padding: 10px 20px; background-color: #6F4E37; color: white; border: none; border-radius: 10px; cursor: pointer;">Confirm Order</button>
  `;

  // Append the popup box to the overlay
  popupOverlay.appendChild(popupBox);
  document.body.appendChild(popupOverlay);

  // Event to open the popup
  orderButton.addEventListener('click', () => {
    popupOverlay.style.visibility = 'visible';
  });

  // Event for confirming the order
  const confirmOrderBtn = document.getElementById('confirmOrder');
  confirmOrderBtn.addEventListener('click', () => {
    const coffeeSelected = document.getElementById('coffeeSelect').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (coffeeSelected && name && address && phone) {
      // Change popup content to Thank You message
      popupBox.innerHTML = `
        <h2>Thank You for Your Order!</h2>
        <p>You ordered: ${coffeeSelected}</p>
        <p>We will deliver to: ${address}</p>
        <button id="closePopup" style="padding: 10px 20px; background-color: #6F4E37; color: white; border: none; border-radius: 10px; cursor: pointer;">Close</button>
      `;
      document.getElementById('closePopup').addEventListener('click', () => {
        popupOverlay.style.visibility = 'hidden';
      });
    } else {
      alert('Please fill in all details before confirming.');
    }
  });
});
