function greetUser(event) {
    
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const middleInitial = document.getElementById("mname").value;
    const lastName = document.getElementById("lname").value;

    let fullName = `${firstName} `;
    if (middleInitial) {
        fullName += `${middleInitial}. `;
    }
    fullName += `${lastName}`;

    document.getElementById("greeting").textContent = `Welcome to Made By, ${fullName}!`;

    setTimeout(() => {
        const userNumber = parseInt(prompt(`How high do you want to count, ${firstName}?`), 10);

        const outputDiv2 = document.getElementById("output1");
        outputDiv2.innerHTML = "";
        for (let i = 1; i <= userNumber; i++) {
            let textLine = `${i}. Bibbidi-Bobbidi-Boo: the number is `;
            if (i % 2 === 0) {
                textLine += "even";
            } else {
                textLine += "odd";
            }
            outputDiv2.innerHTML += `<p>${textLine}</p>`;
        }
    }, 100);
}

function resetFormAndJS() {
    document.getElementById("greeting").textContent = "";
    document.getElementById("output1").innerHTML ="";
}

document.getElementById("name-form").addEventListener("submit", greetUser);
document.getElementById("resetbutton").onclick = resetFormAndJS;
   