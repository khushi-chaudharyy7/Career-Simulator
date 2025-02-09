// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Engineering page loaded successfully!");
// });
document.addEventListener("DOMContentLoaded", function () {
    console.log("Engineering page loaded successfully!");

    // Add click event listeners for each engineering field
    const fields = document.querySelectorAll(".field");

    fields.forEach(field => {
        field.addEventListener("click", function () {
            const career = this.querySelector("h2").textContent;

            if (career === "Software Engineering") {
                window.location.href = "index.html"; // Redirect to Flexbox game (Make sure index.html is in the correct location)
            } else {
                alert("Page for " + career + " is not yet available!");
            }
        });
    });
});

