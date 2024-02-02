document.addEventListener("DOMContentLoaded", function() {
    fetchForexRates();
});

function fetchForexRates() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        displayForexRates(data.rates);
    })
    .catch(error => console.error('Error fetching forex rates:', error));
}

function displayForexRates(rates) {
    const rateDisplay = document.getElementById('rate-display');
    rateDisplay.innerHTML = ''; // Clear previous content

    for (const currency in rates) {
        const rate = rates[currency];
        const rateElement = document.createElement('p');
        rateElement.textContent = `${currency}: ${rate}`;
        rateDisplay.appendChild(rateElement);
    }
}
