// Function to calculate BMR
document.getElementById('bmr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;

    if (!gender || !weight || !height || !age) {
        alert("Please fill in all the fields.");
        return;
    }

    let bmr;

    // BMR Calculation based on Harris-Benedict Equation
    if (gender === 'male') {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    } else {
        bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }

    document.getElementById('result').innerText = `Your BMR is ${bmr.toFixed(2)} kcal/day.`;
});

