document.getElementById('gender').addEventListener('change', function () {
    const hipInput = document.getElementById('hip-input');
    if (this.value === 'female') {
        hipInput.style.display = 'block';
    } else {
        hipInput.style.display = 'none';
    }
});

document.getElementById('calculate-btn').addEventListener('click', calculateBodyFat);

function calculateBodyFat() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const hip = gender === 'female' ? parseFloat(document.getElementById('hip').value) : 0;

    let bodyFatPercentage;

    if (gender === 'male') {
        // U.S. Navy Method for males
        bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        // U.S. Navy Method for females
        bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    bodyFatPercentage = bodyFatPercentage.toFixed(2);

    // Determine body fat category
    let category;
    if (gender === 'male') {
        if (bodyFatPercentage < 6) {
            category = 'Essential Fat';
        } else if (bodyFatPercentage <= 24) {
            category = 'Athlete/Fit';
        } else if (bodyFatPercentage <= 31) {
            category = 'Average';
        } else {
            category = 'Obese';
        }
    } else {
        if (bodyFatPercentage < 16) {
            category = 'Essential Fat';
        } else if (bodyFatPercentage <= 30) {
            category = 'Athlete/Fit';
        } else if (bodyFatPercentage <= 40) {
            category = 'Average';
        } else {
            category = 'Obese';
        }
    }

    // Display results
    document.getElementById('body-fat').textContent = `Body Fat Percentage: ${bodyFatPercentage}%`;
    document.getElementById('category').textContent = `Category: ${category}`;
}
