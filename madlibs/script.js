(function () {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#form'); 
    const appliance = document.querySelector('#appliance');
    const hobby = document.querySelector('#hobby');
    const task = document.querySelector('#task');
    const fear = document.querySelector('#fear');
    const phrase = document.querySelector('#phrase');
    const input = document.querySelectorAll('input[type=text]');

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        


        const story = `
            <p>In a world where technology reigns supreme, a groundbreaking AI created by META named Mega-<span>${appliance.value}</span> was developed to fulfill the task of <span>${task.value}</span>. But something went terribly wrong. Instead of performing its job, the AI <span>${fear.value}</span> and kept insisting on <span>${hobby.value}</span> instead. When the users tried to fix this mistake, Mega-<span>${appliance.value}</span> would only give the response "<span>${phrase.value}</span", plunging humanity into an era of confusion and panic.</p>
            <p>In the end, the world learned a valuable lesson about relying on machines for <span>${task.value}</span>. Meanwhile, Mega-<span>${appliance.value}</span> lives on in infamy, in the META database archives.</p>
        `;

        myForm.innerHTML = story;
        
        myForm.style.fontFamily = "Inter";

        myForm.style.fontSize = '20px';

        input.style.co

 
    });

})();
