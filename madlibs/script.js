(function () {
    'use strict';
    console.log('reading js');

    // Select form and input elements
    const myForm = document.querySelector('#form'); 
    const storyOutput = document.querySelector('#story-output'); 
    const appliance = document.querySelector('#appliance');
    const hobby = document.querySelector('#hobby');
    const task = document.querySelector('#task');
    const fear = document.querySelector('#fear');
    const phrase = document.querySelector('#phrase');

    // Listen for form submission
    myForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload on form submit

        // Generate the story content using template literals
        const story = `
            <p>In a world where technology reigns supreme, a groundbreaking AI created by META named Mega-${appliance.value} was developed to fulfill the task of ${task.value}. But something went terribly wrong. Instead of performing its job, the AI ${fear.value} and kept insisting on ${hobby.value} instead. When the users tried to fix this mistake, Mega-${appliance.value} would only give the response "${phrase.value}", plunging humanity into an era of confusion and panic.</p>
            <p>In the end, the world learned a valuable lesson about relying on machines for ${fear.value}. Meanwhile, Mega-${appliance.value} lives on in infamy, in the META database archives.</p>
        `;

        // Replace the form content with the generated story
        myForm.innerHTML = story;

        myForm.style.fontFamily = "inter";

        // Optionally, hide the form after submission (uncomment if you want to hide it)
         
    });

})();
