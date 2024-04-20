// Definir las unidades disponibles para cada categoría
const units = {
    length: ['Metro', 'Centímetro', 'Kilómetro'],
    weight: ['Kilogramo', 'Gramo', 'Libra'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
    volume: ['Litro', 'Mililitro', 'Galón']
};

// Función para actualizar las unidades según la categoría seleccionada
function updateUnits() {
    const category = document.getElementById('category').value;
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');
    
    // Limpiar las opciones existentes
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    // Agregar las nuevas opciones según la categoría seleccionada
    units[category].forEach(unit => {
        const option = document.createElement('option');
        option.text = unit;
        inputUnitSelect.add(option);
        
        const option2 = document.createElement('option');
        option2.text = unit;
        outputUnitSelect.add(option2);
    });
}

// Función para realizar la conversión
function convertir() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    // Realizar las conversiones según las unidades seleccionadas
    if (inputUnit === outputUnit) {
        outputValue = inputValue;
    } else if (inputUnit === 'Metro' && outputUnit === 'Centímetro') {
        outputValue = inputValue * 100;
    } else if (inputUnit === 'Metro' && outputUnit === 'Kilómetro') {
        outputValue = inputValue / 1000;
    } else if (inputUnit === 'Centímetro' && outputUnit === 'Metro') {
        outputValue = inputValue / 100;
    } else if (inputUnit === 'Centímetro' && outputUnit === 'Kilómetro') {
        outputValue = inputValue / 100000;
    } else if (inputUnit === 'Kilómetro' && outputUnit === 'Metro') {
        outputValue = inputValue * 1000;
    } else if (inputUnit === 'Kilómetro' && outputUnit === 'Centímetro') {
        outputValue = inputValue * 100000;
    } else if (inputUnit === 'Kilogramo' && outputUnit === 'Gramo') {
        outputValue = inputValue * 1000;
    } else if (inputUnit === 'Kilogramo' && outputUnit === 'Libra') {
        outputValue = inputValue * 2.20462;
    } else if (inputUnit === 'Gramo' && outputUnit === 'Kilogramo') {
        outputValue = inputValue / 1000;
    } else if (inputUnit === 'Gramo' && outputUnit === 'Libra') {
        outputValue = inputValue * 0.00220462;
    } else if (inputUnit === 'Libra' && outputUnit === 'Kilogramo') {
        outputValue = inputValue * 0.453592;
    } else if (inputUnit === 'Libra' && outputUnit === 'Gramo') {
        outputValue = inputValue / 0.00220462;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
        outputValue = (inputValue * 9/5) + 32;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Kelvin') {
        outputValue = inputValue + 273.15;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
        outputValue = (inputValue - 32) * 5/9;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Kelvin') {
        outputValue = (inputValue - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Celsius') {
        outputValue = inputValue - 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Fahrenheit') {
        outputValue = (inputValue - 273.15) * 9/5 + 32;
    } else if (inputUnit === 'Litro' && outputUnit === 'Mililitro') {
        outputValue = inputValue * 1000;
    } else if (inputUnit === 'Litro' && outputUnit === 'Galón') {
        outputValue = inputValue * 0.264172;
    } else if (inputUnit === 'Mililitro' && outputUnit === 'Litro') {
        outputValue = inputValue / 1000;
    } else if (inputUnit === 'Mililitro' && outputUnit === 'Galón') {
        outputValue = inputValue * 0.000264172;
    } else if (inputUnit === 'Galón' && outputUnit === 'Litro') {
        outputValue = inputValue * 3.78541;
    } else if (inputUnit === 'Galón' && outputUnit === 'Mililitro') {
        outputValue = inputValue / 0.000264172;
    }

    // Mostrar el resultado en el campo de salida
    document.getElementById('outputValue').value = outputValue.toFixed(2);
}

// Al cargar la página, actualizar las unidades basadas en la categoría seleccionada
updateUnits();

// Función para actualizar las unidades según la categoría seleccionada
function updateUnits() {
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');
    
    // Limpiar las opciones existentes
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    // Agregar las nuevas opciones según la categoría seleccionada
    const category = document.getElementById('category').value;
    units[category].forEach(unit => {
        const option = document.createElement('option');
        option.text = unit;
        inputUnitSelect.add(option);
        
        const option2 = document.createElement('option');
        option2.text = unit;
        outputUnitSelect.add(option2);
    });

    // Limpiar los campos de entrada y salida
    document.getElementById('inputValue').value = '';
    document.getElementById('outputValue').value = '';
}
