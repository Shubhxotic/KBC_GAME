const questions = [
    {
        question: "Which 2009 Bollywood movie was adapted from Chetan Bhagat’s novel 'Five Point Someone?'",
        answers: ["Kai Po Che!",
        "3 Idiots",
        "2 States",
        "Half Girlfriend"],
        correct: 1,
        flipQuestion: {
            question: "Who invented the telephone?",
            answers: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Galileo Galilei"],
            correct: 1
        }
    },
    {
        question: "Which is the longest river in the world?",
        answers: ["Amazon",
        "Nile",
        "Yangtze",
        "Mississippi"],
        correct: 1,
        flipQuestion: {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Diamond", "Silver", "Platinum"],
            correct: 1
        }
    },
    {
        question: "What does 'OOP' stand for in programming?",
        answers: [ "Online Object Protocol",        
        "Object-Oriented Process",
        "Object-Oriented Programming",
        "Operating Object Program"],
        correct: 2,
        flipQuestion: {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen" ],
            correct: 2
        }
    },
    {
        question: "The Partition of Bengal was reversed in which year?",
        answers: ["1905",
        "1911",
        "1915", 
        "1920" ],
        correct: 0,
        flipQuestion: {
            question: "Who invented the telephone?",
            answers: ["Alexander Graham Bell","Albert Einstein", "Isaac Newton", "Galileo Galilei"],
            correct: 0
        }
    },
    {
        question: "What is the classical dance form that originated in the state of Uttar Pradesh?",
        answers: ["Kathak",
            "Bharatanatyam",
            "Kuchipudi", 
            "Odissi"],
        correct: 0,
        flipQuestion: {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Diamond", "Gold", "Silver", "Platinum"],
            correct: 0
        }
    },
    {
        question: "In which Veda would you find the Gayatri Mantra?",
        answers: [
        "Samaveda",
        "Yajurveda",
        "Atharvaveda","Rigveda"],
        correct: 3,
        flipQuestion: {
            question: "Ashoka is known for promoting a philosophy called Dhamma. What does 'Dhamma' emphasize?",
            answers: ["Military conquests",
            "Religious orthodoxy",
            "Moral and ethical conduct", "Agricultural reforms"],
            correct: 3
        }
    },
    {
        question: "In the context of Indian politics, what does the acronym 'NDA' stand for?",
        answers: ["National Democratic Alliance",
        "National Development Agenda",
         "National Defence Association",
         "New Democratic Alliance"],
        correct: 0,
        flipQuestion: {
            question: "Who invented the telephone?",
            answers: ["Alexander Graham Bell", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
            correct: 0
        }
    },
    {
        question: "According to Hindu mythology, which mountain was used as a churning rod during the Samudra Manthan (churning of the ocean) to obtain amrita (the nectar of immortality)?",
        answers: ["Mount Kailash",
        "Mount Mandara",
        "Mount Meru",
        "Mount Himavat"],
        correct: 1,
        flipQuestion: {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Diamond", "Silver", "Platinum"],
            correct: 1
        }
    },
    {
        question: "What is the name of the military alliance formed in 1949 as a collective defense against the Soviet Union?",
        answers: ["Warsaw Pact",
        "United Nations",
        "NATO",
        "European Union"],
        correct: 2,
        flipQuestion: {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
            correct: 2
        }
    },
    {
        question: "Which of the following is the smallest state in India by area?",
        answers: [ "Sikkim",
        "Goa",
        "Tripura",
        "Manipur"],
        correct: 1,
        flipQuestion: {
            question: "Who invented the telephone?",
            answers: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Galileo Galilei"],
            correct: 1
        }
    },
    {
        question: "Which Bollywood movie was India’s first submission for the Oscars in the Best Foreign Language Film category?",
        answers: ["Mother India",
        "Pather Panchali",
        "Lagaan",
        "Salaam Bombay"],
        correct: 0,
        flipQuestion: {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
            correct: 0
        }
    },
    {
        question: "Which of the following stupas is considered the oldest surviving brick stupa in India?",
        answers: ["Sanchi Stupa",
        "Dhamek Stupa",
        "Amaravati Stupa",
        "Borobudur Stupa"],
        correct: 0,
        flipQuestion: {
            question: "What is the hardest natural substance on Earth?",
            answers: [ "Diamond","Gold", "Silver", "Platinum"],
            correct: 0
        }
    },
    {
        question: "Which Indian political party was founded by Dr. B.R. Ambedkar in 1956?",
        answers: ["Indian Dalit Congress",
        "Bahujan Morcha Party",
        "Republican Party of India",
        "Samajwadi Party"],
        correct: 2,
        flipQuestion: {
            question: "Who invented the telephone?",
            answers: ["Albert Einstein", "Isaac Newton", "Alexander Graham Bell", "Galileo Galilei"],
            correct: 2
        }
    },
    {
        question: "What is the significance of the 73rd Amendment to the Indian Constitution?",
        answers: ["It provided for the establishment of the Central Vigilance Commission.",
        "It introduced the concept of Panchayati Raj.",
        "It abolished the Privy Purse.",
        "It established the National Commission for Scheduled Castes."],
        correct: 1,
        flipQuestion: {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Diamond", "Silver", "Platinum"],
            correct: 1
        }
    },
    {
        question: "Who was the sage that cursed King Parikshit to die from a snake bite, leading to the narration of the Bhagavata Purana?",
        answers: ["Vashistha",
        "Suka",
        "Kashyapa",
        "Shringi"],
        correct: 3,
        flipQuestion: {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Carbon", "Nitrogen", "Hydrogen", "Oxygen"],
            correct: 3
        }
    }
];

// Function to update the highlighted prize
// const updateHighlight = () => {
//     const steps = document.querySelectorAll('.money-ladder .step');
//     steps.forEach(step => {
//         const marginPrizeSpan = step.querySelector('.marginprize');
//         const fingerIcon = steps.querySelector('.fa-hand-point-right');

//         // Check if the step has the highlight class
//         if (step.classList.contains('highlight')) {
//             // Ensure the icon is visible
//             fingerIcon.style.display = 'inline';
//         } else {
//             // Hide the icon for non-highlighted steps
//             fingerIcon.style.display = 'none';
//         }
//     });
// };

  // Load the question dynamically
  function loadQuestion(index, flip) {
    const currentQuestion = questions[index];
    if (flip) {
        document.getElementById('question').textContent = currentQuestion.flipQuestion.question;
        document.getElementById('answer-1').textContent = `A. ${currentQuestion.flipQuestion.answers[0]}`;
        document.getElementById('answer-2').textContent = `B. ${currentQuestion.flipQuestion.answers[1]}`;
        document.getElementById('answer-3').textContent = `C. ${currentQuestion.flipQuestion.answers[2]}`;
        document.getElementById('answer-4').textContent = `D. ${currentQuestion.flipQuestion.answers[3]}`;
    } else {
        document.getElementById('question').textContent = currentQuestion.question;
        document.getElementById('answer-1').textContent = `A. ${currentQuestion.answers[0]}`;
        document.getElementById('answer-2').textContent = `B. ${currentQuestion.answers[1]}`;
        document.getElementById('answer-3').textContent = `C. ${currentQuestion.answers[2]}`;
        document.getElementById('answer-4').textContent = `D. ${currentQuestion.answers[3]}`;    
    }

    const answerBoxes = document.querySelectorAll('.answer-box');
    answerBoxes[0].style.display = '';
    answerBoxes[1].style.display = '';
    answerBoxes[2].style.display = '';
    answerBoxes[3].style.display = '';
    
    // moveHandIcon();
    console.log("RESETTING TIMER");
    if(index > 4) {
        document.getElementById('timer').remove();
    } else {
        startTimer();
    }
  }
  

  function startTimer() {
    // Reset the time left to 60 seconds
    timeLeft = 60; 
    const timerDisplay = document.getElementById('timer'); // Get your timer display element

    // Clear any existing timer to avoid overlaps
    clearInterval(timer);

    // Start a new timer
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            // alert("Time's up!"); // Alert when time's up
            // Handle logic when time runs out, e.g., load next question
            // clearQuestionAndAnswers(); // Example function to handle this
        } else {
            // Update the timer display
            timerDisplay.innerText = timeLeft; // Update the displayed time
            timeLeft--; // Decrease the time left by 1 second
        }
    }, 1000); // Run the function every second
}

// Select elements for modal handling
const askModal = document.getElementById('askModal');
const closeAskModal = document.getElementById('closeAskModal');
const audienceModal = document.getElementById('audienceModal');
const closeAudienceModal = document.getElementById('closeAudienceModal');
const expertAnswer = document.getElementById('expertAnswer');
const audiencePollResults = document.getElementById('audiencePollResults');

// Lifeline buttons
document.getElementById('lifeline-50-50').addEventListener('click', () => {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    const answerBoxes = document.querySelectorAll('.answer-box');
    let wrongAnswers = [];

    // Collect wrong answers
    answerBoxes.forEach((box, index) => {
        if (index !== correctAnswerIndex) {
            wrongAnswers.push(index);
        }
    });

    // Randomly remove 2 wrong answers
    while (wrongAnswers.length > 1) {
        const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const answerToRemove = wrongAnswers.splice(randomIndex, 1)[0];
        answerBoxes[answerToRemove].style.display = 'none'; // Hide the wrong answer
    }

    document.getElementById('lifeline-50-50').classList.add('crossed');
});

document.getElementById('lifeline-flip').addEventListener('click', () => {
    document.getElementById('lifeline-flip').classList.add('crossed');
    loadQuestion(currentQuestionIndex, true); // Load the next question
});

document.getElementById('lifeline-ask').addEventListener('click', () => {
    const possibleAnswers = questions[currentQuestionIndex].answers;
    const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    expertAnswer.textContent = randomAnswer; // Set expert answer
    askModal.style.display = "block"; // Show modal
    document.getElementById('lifeline-ask').classList.add('crossed');
});

document.getElementById('lifeline-audience').addEventListener('click', () => {
    const audienceVotes = [0, 0, 0, 0]; // Votes for each answer
    const correctIndex = questions[currentQuestionIndex].correct;

    // Simulate audience votes
    audienceVotes[correctIndex] += Math.floor(Math.random() * 50) + 50; // Majority for correct answer
    audienceVotes[Math.floor(Math.random() * 3)] += Math.floor(Math.random() * 30); // Random wrong answer

    audiencePollResults.innerHTML = audienceVotes.map((votes, index) => `<li>Option ${String.fromCharCode(65 + index)}: ${votes} votes</li>`).join('');
    audienceModal.style.display = "block"; // Show modal
    document.getElementById('lifeline-audience').classList.add('crossed');
});

// Close modals
closeAskModal.onclick = function() {
    askModal.style.display = "none";
};

closeAudienceModal.onclick = function() {
    audienceModal.style.display = "none";
};

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === askModal) {
        askModal.style.display = "none";
    }
    if (event.target === audienceModal) {
        audienceModal.style.display = "none";
    }
};

let score = 0; // Initialize score to keep track of correct answers
let isQuestionLoading = false; // Flag to prevent multiple question loads

// Function to handle answer selection
function selectAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    const answerBoxes = document.querySelectorAll('.answer-box');

    // Check if the selected answer is correct
    if (selectedIndex === correctAnswerIndex) {
        // Turn the correct answer box green
        answerBoxes[selectedIndex].style.backgroundColor = 'green';
        answerBoxes[selectedIndex].style.color = 'white'; // Change text color to white

        // Get the current prize from the money ladder's data-value attribute
        const prizeValue = document.querySelector(`#prize-${currentQuestionIndex+1}`).getAttribute('data-value');

        console.log("POP WIN MODAL");

        // Display the modal with the prize information
        document.getElementById('winMessage').textContent = `You've won ${prizeValue} rupees!`;
        document.getElementById('winModal').style.display = "block";

        // Close the modal when the user clicks on the close button
        document.getElementById('closeWinModal').onclick = function() {
            document.getElementById('winModal').style.display = "none";
            // Load the next question after closing the modal
            clearQuestionAndAnswers();
        };

        // Increment score
        score++;
        markMoneyLadder(score); // Mark the money ladder based on score
        
    } else {
        // Show feedback for incorrect answer if needed
        answerBoxes[selectedIndex].style.backgroundColor = 'red'; // Highlight incorrect answer
    }
}

// Function to clear question and answers
function clearQuestionAndAnswers() {
    document.getElementById('question').textContent = '.'; // Clear question text
    const answerBoxes = document.querySelectorAll('.answer-box');
    answerBoxes.forEach(box => {
        box.textContent = '.'; // Clear answer text
        box.style.backgroundColor = ''; // Reset background color
        box.style.color = ''; // Reset text color
    });

    // Load the next question after modal closes
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex, false); // Load next question
    } else {
        alert("AAP ISS KHEL MEI VIJAYI HUI!"); // End of questions
    }
}
// Function to load the next question when clicked
function loadNextQuestion() {
    if (isQuestionLoading) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex, false); // Load next question
            resetAnswerBoxes(); // Reset answer boxes for the next question
            isQuestionLoading = false; // Reset the loading flag
            document.body.removeEventListener('click', loadNextQuestion); // Remove click listener after loading the next question
        } else {
            alert("AAP ISS KHEL MEI VIJAYI HUI!"); // End of questions
        }
    }
}

// Function to reset answer boxes
function resetAnswerBoxes() {
    const answerBoxes = document.querySelectorAll('.answer-box');
    answerBoxes.forEach(box => {
        box.style.backgroundColor = ''; // Reset background color
        box.style.color = ''; // Reset text color
        box.style.display = 'inline';
    });
}

// Function to mark the money ladder
function markMoneyLadder(correctAnswers) {
    const ladderSteps = document.querySelectorAll('.money-ladder .step');
    if (correctAnswers > 0 && correctAnswers <= ladderSteps.length) {
        ladderSteps[ladderSteps.length - correctAnswers].classList.add('highlight');
    }
}

function moveHandIcon() {
    // Reverse index logic since the list is now upside down
    const currentPrizeId = `prize-${15 - currentQuestionIndex}`;
    const nextPrizeId = `prize-${15 - (currentQuestionIndex + 1)}`;

    // Remove the hand icon from the current prize
    const currentHandPosition = document.getElementById("hand-icon");
    document.getElementById(currentPrizeId).removeChild(currentHandPosition);

    // Append the hand icon to the next prize
    if (currentQuestionIndex < 14) {
        document.getElementById(nextPrizeId).appendChild(currentHandPosition);
    }
}


// Example of attaching selectAnswer to answer boxes
const answerBoxes = document.querySelectorAll('.answer-box');
answerBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        selectAnswer(index); // Call the selectAnswer function with the index of the clicked box
    });
});

const moneyLadder = document.querySelectorAll("#money-ladder li");
const pointer = document.getElementById("pointer");

function movePointer(questionNumber) {
    // Calculate the position based on the question number
    // For example: 1st question corresponds to last item, 2nd question to second last, and so on
    const targetIndex = moneyLadder.length - questionNumber;
    const targetLi = moneyLadder[targetIndex];

    // Get the position of the target list item
    const targetTop = targetLi.offsetTop;
    
    // Move the pointer
    pointer.style.top = `${targetTop}px`;
}

// Call `movePointer(n)` whenever the question changes, passing the current question number.

let currentQuestionIndex = 0; // Initialize the question index
// Load the first question on start
window.onload = () => {
    document.getElementById('winModal').style.display = "none";

    // Get the audio element
    const gameStartSound = document.getElementById('gameStartSound');

    // Play the sound
    gameStartSound.play();

    document.getElementById('question').textContent = ".";
    document.getElementById('answer-1').textContent = ".";
    document.getElementById('answer-2').textContent = ".";
    document.getElementById('answer-3').textContent = ".";
    document.getElementById('answer-4').textContent = ".";
    
    // When the sound ends, load the question
    
        setTimeout(function() {
            document.getElementById("kbc-logo").onclick = function() {
                loadQuestion(loadQuestion(0, false));
            };
        }, 10000);          
};
