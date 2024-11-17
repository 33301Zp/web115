document.addEventListener("DOMContentLoaded", function() {

    function greetUser(event) {
        const firstName = document.getElementById("fname").value;
        const middleInitial = document.getElementById("mname").value;
        const lastName = document.getElementById("lname").value;

        let fullName = `${firstName} `;
        if (middleInitial) {
            fullName += `${middleInitial}. `;
        }
        fullName += `${lastName}`;

        document.getElementById("greeting").textContent = `Welcome to Made By, ${fullName}!`;
        
        const outputDiv2 = document.getElementById("output1");
        outputDiv2.innerHTML = "";
        
        const words = {
            three: "Yarn",
            five: "Crochet",
            default: "Create"
        };
        for (let i = 1; i <= 140; i++) {
            let fullLine = `${i}. `;
            let wordOutput = "";

            if (i % 3 === 0) {
                wordOutput += words["three"];
            } 
            if (i % 5 === 0) {
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

    function resetFormAndJS() {
        document.getElementById("greeting").textContent = "";
        document.getElementById("output1").innerHTML ="";
    }
    document.getElementById("name-form").addEventListener("submit", greetUser);
    document.getElementById("resetbutton").onclick = resetFormAndJS;
});
