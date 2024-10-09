const idealAnswers = [9, 10, 7, 5, 8, 7, 6, 10, 3, 5]; // Ideal answers

function updateValue(id, value) {
    document.getElementById(id + '-value').textContent = value;
}

function calculateCompatibility() {
    let totalScore = 0;
    
    for (let i = 1; i <= 10; i++) {
        const userAnswer = parseInt(document.getElementById('q' + i).value);
        const diff = Math.abs(userAnswer - idealAnswers[i - 1]);
        
        // Calculate score for each question based on how close the user's answer is
        const score = 10 - diff; // 10 points if the answer is exact, fewer points the further away it is
        totalScore += score;
    }

    const compatibilityPercentage = Math.round((totalScore / 100) * 100); // Convert total score to percentage
    let message = getCompatibilityMessage(compatibilityPercentage);

    document.getElementById('result').innerHTML = `You are ${compatibilityPercentage}% compatible! ${message}`;
}

function getCompatibilityMessage(percentage) {
    if (percentage === 100) {
        return "You're a perfect match! 💖";
    } else if (percentage >= 80) {
        return "You're a great match! 😊";
    } else if (percentage >= 60) {
        return "There's potential! 🤔";
    } else if (percentage >= 40) {
        return "Hmm, not quite. 😕";
    } else {
        return "Sorry, not much compatibility here! 😢";
    }
}

