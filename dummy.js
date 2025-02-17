document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("input[name='display']");
    const buttons = document.querySelectorAll(".calculator form input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "AC") {
                display.value = ""; // Clear the display
            } else if (value === "DE") {
                display.value = display.value.slice(0, -1); // Remove last character
            } else if (value === "=") {
                calculateResult();
            } else {
                display.value += value; // Append button value to display
            }
        });
    });

    function calculateResult() {
        try {
            display.value = eval(display.value); // Evaluate the expression
        } catch (error) {
            display.value = "Error"; // Handle invalid input
        }
    }
});
