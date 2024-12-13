document.getElementById('calculate-btn').addEventListener('click', calculateMacros);

function calculateMacros() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    // Calculate Basal Metabolic Rate (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    const tdee = bmr * activity;

    // Adjust calories based on goal
    let calories;
    if (goal === 'maintain') {
        calories = tdee;
    } else if (goal === 'lose') {
        calories = tdee - 500;
    } else if (goal === 'gain') {
        calories = tdee + 500;
    }

    // Macronutrient Breakdown
    const protein = Math.round((calories * 0.3) / 4); // 30% of calories to protein
    const carbs = Math.round((calories * 0.4) / 4);   // 40% of calories to carbs
    const fats = Math.round((calories * 0.3) / 9);    // 30% of calories to fats

    // Display Results
    document.getElementById('calories').textContent = `Calories: ${Math.round(calories)} kcal/day`;
    document.getElementById('protein').textContent = `Protein: ${protein} grams/day`;
    document.getElementById('carbs').textContent = `Carbs: ${carbs} grams/day`;
    document.getElementById('fats').textContent = `Fats: ${fats} grams/day`;
}
