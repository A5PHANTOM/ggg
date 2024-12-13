document.getElementById('calculate-btn').addEventListener('click', calculateBMR);

function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    let bmr;

    // Use the Harris-Benedict equation
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const caloricNeeds = bmr * activityLevel;

    // Display results
    document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)} calories/day`;
    document.getElementById('caloric-needs').textContent = `Daily Caloric Needs (with activity): ${caloricNeeds.toFixed(2)} calories/day`;
}
