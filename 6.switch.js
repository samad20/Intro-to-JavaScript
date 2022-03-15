switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default: console.log("Unknown weather type!");
        break;
}

// Excerpt From
// Eloquent JavaScript: A Modern Introduction to Programming
// Marijn Haverbeke
// This material may be protected by copyright.