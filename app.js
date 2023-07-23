const input = document.querySelector("#numinput");
const unit = document.querySelector("#dropdown");
const resultTxt = document.querySelector("#result");

/* A fade in fade out function that swaps out the word earth from the h1 text with the words in the array, in this case, the next planet in the dropdown list.  */

    (function() {
      const words = ["Jupiter", "Mars", "Mercury", "our Moon", "Neptune", "Pluto", "Saturn", "our Sun", "Venus", "Uranus"];
      let i = 0;
      const element = document.getElementById("words");
  
      setInterval(function() {
        element.classList.remove("show");
  
        setTimeout(function() {
          element.textContent = words[i];
          element.classList.add("show");
          i = (i + 1) % words.length;
        }, 500);
      }, 2000);
    })();


/* Added two event listeners for the purpose of allowing the enter key to convert the weight.
So if the user has the input field or the drop down menu selected after changing the input value or swapping to a different plannet, 
they will be able to convert the weight by pressing enter. */

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn").click();
    }
  });

  unit.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn").click();
    }
  });

/* Switch conditional statement where each select option value has been made into a case. 
    And when called upon the switch will go through each case until it finds a case matching the option value selected in the dropdown menu. 
    It will multiply the input value with the weight value of the chosen planet and push the result into the result paragraph.*/

const convertUnit = () => {
    let result = "";
    switch (unit.value) {
        case "earth": result = `You would weigh ${(input.value * 1).toFixed(2)} kilos on Earth.`;
        break;
        case "jupiter": result = `You would weigh ${(input.value * 2.34).toFixed(2)} kilos on Jupter.`;
        break;
        case "mars": result = `You would weigh ${(input.value * 0.38).toFixed(2)} kilos on Mars.`;
        break;
        case "mercury": result = `You would weigh ${(input.value * 0.38).toFixed(2)} kilos on Mercury.`;
        break;
        case "moon": result = `You would weigh ${(input.value * 0.166).toFixed(2)} kilos on Earth's Moon.`;
        break;
        case "neptune": result = `You would weigh ${(input.value * 1.19).toFixed(2)} kilos on Neptune.`;
        break;
        case "pluto": result = `You would weigh ${(input.value * 0.06).toFixed(2)} kilos on Pluto.`;
        break;
        case "saturn": result = `You would weigh ${(input.value * 1.06).toFixed(2)} kilos on Saturn.`;
        break;
        case "sun": result = `You would weigh ${(input.value * 27.01).toFixed(2)} kilos on our Sun.`;
        break;
        case "venus": result = `You would weigh ${(input.value * 0.91).toFixed(2)} kilos on Venus.`;
        break;
        case "uranus": result = `You would weigh ${(input.value * 0.92).toFixed(2)} kilos on Uranus.`;
        break;
        default: result = "The input field is empty."
    }

    resultTxt.textContent = result;
}