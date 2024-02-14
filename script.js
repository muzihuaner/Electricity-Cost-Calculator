function calculateCost() {
    let wattage = parseFloat(document.getElementById('wattage').value);
    let hours = parseFloat(document.getElementById('hours').value || 0);
    let minutes = parseFloat(document.getElementById('minutes').value || 0);
    let days = parseFloat(document.getElementById('days').value || 0);
    let weeks = parseFloat(document.getElementById('weeks').value || 0);
    let months = parseFloat(document.getElementById('months').value || 0);
    let unitPrice = parseFloat(document.getElementById('unitPrice').value);

    let totalHours = hours + (minutes / 60);
    let totalDays = days + (weeks * 7) + (months * 30);
    let kW = wattage / 1000; // Convert watts to kilowatts
    let totalCost = (kW * totalHours * totalDays * unitPrice).toFixed(2);

    document.getElementById('result').innerText = `Total Cost: ₹${totalCost}`;
}

function clearInputs() {
    document.getElementById('wattage').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('days').value = '';
    document.getElementById('weeks').value = '';
    document.getElementById('months').value = '';
    document.getElementById('unitPrice').value = '';
    document.getElementById('result').innerText = '';
}

