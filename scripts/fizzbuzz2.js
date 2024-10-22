document.addEventListener("DOMContentLoaded", function() {
    
    function greetUser(event) {
        const firstDivisor = 3;
        const secondDivisor = 5;
        const firstName = document.getElementById("fname").value;
        const middleInitial = document.getElementById("mname").value;
        const lastName = document.getElementById("lname").value;

        let fullName = `${firstName} `;
        if (middleInitial) {
            fullName += `${middleInitial}. `;
        }
        fullName += `${lastName}`;

        document.getElementById("greeting").textContent = `Welcome to Made By, ${fullName}!`;
        
        const outputDiv2 = document.getElementById("output2");
        outputDiv2.innerHTML = "";
        
        const words = {
            three: "Yarn",
            five: "Crochet",
            default: "Create"
        };
        for (let i = 1; i <= 140; i++) {
            let fullLine = `${i}. `;
            let wordOutput = "";

            if (i % firstDivisor === 0) {
                wordOutput += words["three"];
            } 
            if (i % secondDivisor === 0) {
                if (wordOutput) {
                    wordOutput += " ";
                }
                wordOutput += words["five"];
            }

            if (!wordOutput) {
                wordOutput = words.default;
            }
            
            fullLine += wordOutput;

            outputDiv2.innerHTML += `<p>${fullLine}</p>`;
        }
    }
    
    document.getElementById("name-form").addEventListener("submit", function(event) {
        event.preventDefault();
        greetUser(event);
    });
});