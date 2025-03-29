function updateFields() {
  const shape = document.getElementById('shape').value;
  const inputs = document.getElementById('inputs');
  inputs.innerHTML = '';

  if (shape === 'rectangle') {
    inputs.innerHTML = `
      <input type="number" id="length" placeholder="Length" required />
      <input type="number" id="width" placeholder="Width" required />
    `;
  } else if (shape === 'triangle') {
    inputs.innerHTML = `
      <input type="number" id="base" placeholder="Base" required />
      <input type="number" id="height" placeholder="Height" required />
    `;
  } else if (shape === 'circle') {
    inputs.innerHTML = `
      <input type="number" id="radius" placeholder="Radius" required />
    `;
  }
}

function calculateArea() {
  const shape = document.getElementById('shape').value;
  let area = 0;

  if (shape === 'rectangle') {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    area = length * width;
  } else if (shape === 'triangle') {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    area = 0.5 * base * height;
  } else if (shape === 'circle') {
    const radius = parseFloat(document.getElementById('radius').value);
    area = Math.PI * radius * radius;
  }

  document.getElementById('result').innerHTML = `<h3>Area: ${area.toFixed(2)}</h3>`;
}

// Initialize with default shape
updateFields();

