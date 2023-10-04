// get all references for DOM

const gameContainer = document.querySelector(".container"),
playerOneResult = document.querySelector(".user_result img"),
playerTwoResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// looping throught all image options
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        playerOneResult.src = playerTwoResult.src = "images/rock.png";
        result.textContent = "Wait..."

        //loop through each option again to check their indexes
        // and remove active 

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //set a time to delay result like an animation

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

        //get the source of the clicked option
        let imgSrc = e.target.querySelector("img").src;
        //set the user to the clicked image option 
        playerOneResult.src = imgSrc; 

        //generate random indexes upto 3 for all elements
        let randomImg = Math.floor(Math.random() * 3);

        //create an array for all images for player two
        let playerTwoImg = ["images/rock.png", "images/paper.png", "images/scissors.png"];

        //set playerTwo images to all random indexes from an array
        playerTwoResult.src = playerTwoImg[randomImg];

        //assign initial letter values for all 3 options 
        let playerTwoValue = ["R", "P", "S"][randomImg];

        //assign that letter value to the user's clicked option
        let playerOneValue = ["R", "P", "S"][index];

        //create an object for all outcomes 
        let outcomes = {
            RR:"Draw",
            RP:"Player Two",
            RS:"Player One",
            PP:"Draw",
            PR:"Player Two",
            PS:"Player One",
            SS:"Draw",
            SR:"Player Two",
            SP:"Player One"
        };

        //generates result for both the players
        let outcomevalue = outcomes[playerOneValue + playerTwoValue];
        
        //display the result
        result.textContent = playerOneValue === playerTwoValue ?
        "Match Draw!":`${outcomevalue} Won!!!`;

        }, 1500);
    });
});