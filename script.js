function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp;
    let convertedUnit;

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unit) {
        case 'fahrenheit':
            convertedTemp = (temperature - 32) * 5 / 9;
            convertedUnit = 'Celsius';
            break;
        case 'celsius':
            convertedTemp = (temperature * 9 / 5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'kelvin':
            convertedTemp = temperature - 273.15;
            convertedUnit = 'Celsius';
            break;
    }

    document.getElementById('result').innerText = `${convertedTemp.toFixed(4)} °${convertedUnit}`;
}
