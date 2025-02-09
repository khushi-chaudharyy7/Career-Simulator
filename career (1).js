// document.addEventListener("DOMContentLoaded", function () {
//     const careerCards = document.querySelectorAll(".career-card");

//     careerCards.forEach(card => {
//         card.addEventListener("click", function () {
//             const career = this.querySelector("h2").innerText;
//             alert(`You selected ${career}! Simulation will begin soon.`);
//             window.location.href = 'simulation.html'; // Redirect to the simulation page
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    function startSimulation(career) {
        if (career === 'Engineering') {
            window.location.href = 'engineering.html'; // Redirects to Engineering page
        } else {
            alert('You selected ' + career + '! Simulation will begin soon.');
            window.location.href = 'simulation.html'; // Redirect for other careers
        }
    }

    function startSimulation(career) {
        if (career === 'Engineering') {
            window.location.href = 'engineering.html'; 
        } else if (career === 'Psychology') {
            window.location.href = 'psych.html'; 
        } else if (career === 'Fashion Designing') {
            window.location.href = 'fd.html'; 
        }
    }
    

    // Attach event listeners dynamically
    const careerCards = document.querySelectorAll(".career-card");
    careerCards.forEach(card => {
        card.addEventListener("click", function () {
            const careerName = this.querySelector("h2").textContent; // Get career name
            startSimulation(careerName);
        });
    });
});
