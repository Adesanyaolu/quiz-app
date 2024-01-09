const question = document.querySelector('.question')
const optionsText = Array.from(document.querySelectorAll('.options-text'));
console.log(optionsText);
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the process of preserving food by heating it to destroy harmful microorganisms?",
        choice1: "Pasteurization",
        choice2: "Fermentation",
        choice3: "Dehydration",
        choice4: "Freezing",
        answer: 1
      },
      {
        question: "Which enzyme is responsible for breaking down proteins into amino acids during digestion?",
        choice1: "Amylase",
        choice2: "Lipase",
        choice3: "Protease",
        choice4: "Cellulase",
        answer: 3
      },
      {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        choice1: "Tofu",
        choice2: "Seaweed",
        choice3: "Soy Sauce",
        choice4: "Miso Paste",
        answer: 4
      },
      {
        question: "What is the primary purpose of pasteurization in the food industry?",
        choice1: "Increase sweetness",
        choice2: "Extend shelf life",
        choice3: "Enhance color",
        choice4: "Reduce acidity",
        answer: 2
      },
      {
        question: "Which vitamin is commonly found in citrus fruits such as oranges and lemons?",
        choice1: "Vitamin A",
        choice2: "Vitamin C",
        choice3: "Vitamin D",
        choice4: "Vitamin K",
        answer: 2
      },
      {
        question: "What is the role of sodium chloride (salt) in food preservation?",
        choice1: "Enhance flavor",
        choice2: "Reduce sweetness",
        choice3: "Inhibit microbial growth",
        choice4: "Increase acidity",
        answer: 3
      },
      {
        question: "Which food additive is used as a thickening agent in various food products?",
        choice1: "Ascorbic acid",
        choice2: "Xanthan gum",
        choice3: "Sodium benzoate",
        choice4: "Monosodium glutamate",
        answer: 2
      },
      {
        question: "What is the main ingredient in traditional Italian risotto?",
        choice1: "Barley",
        choice2: "Rice",
        choice3: "Quinoa",
        choice4: "Couscous",
        answer: 2
      },
      {
        question: "Which process involves the conversion of sugars to alcohol and carbon dioxide by yeast?",
        choice1: "Fermentation",
        choice2: "Distillation",
        choice3: "Pasteurization",
        choice4: "Hydrogenation",
        answer: 1
      },
      {
        question: "What is the purpose of blanching vegetables before freezing?",
        choice1: "Enhance flavor",
        choice2: "Destroy pathogens",
        choice3: "Remove pesticides",
        choice4: "Inactivate enzymes",
        answer: 4
      },
      {
        question: "Which food preservation method involves the removal of moisture?",
        choice1: "Freezing",
        choice2: "Canning",
        choice3: "Dehydration",
        choice4: "Pickling",
        answer: 3
      },
      {
        question: "What type of fat is found in olive oil and avocados?",
        choice1: "Saturated fat",
        choice2: "Trans fat",
        choice3: "Monounsaturated fat",
        choice4: "Polyunsaturated fat",
        answer: 3
      },
      {
        question: "Which foodborne pathogen is commonly associated with undercooked poultry?",
        choice1: "E. coli",
        choice2: "Salmonella",
        choice3: "Listeria",
        choice4: "Norovirus",
        answer: 2
      },
      {
        question: "Which type of food preservation involves the use of high temperatures to kill bacteria and enzymes?",
        choice1: "Dehydration",
        choice2: "Freezing",
        choice3: "Canning",
        choice4: "Pickling",
        answer: 3
      },
      {
        question: "What is the primary function of antioxidants in food?",
        choice1: "Enhance color",
        choice2: "Extend shelf life",
        choice3: "Increase sweetness",
        choice4: "Inhibit oxidation",
        answer: 4
      },
      {
        question: "Which food is a rich source of omega-3 fatty acids?",
        choice1: "Beef",
        choice2: "Salmon",
        choice3: "Chicken",
        choice4: "Pork",
        answer: 2
      },
      {
        question: "What is the primary role of emulsifiers in food products?",
        choice1: "Increase sweetness",
        choice2: "Enhance color",
        choice3: "Improve texture",
        choice4: "Reduce acidity",
        answer: 3
      },
      {
        question: "Which cooking method involves submerging food in hot oil to cook quickly?",
        choice1: "Roasting",
        choice2: "Grilling",
        choice3: "Frying",
        choice4: "Steaming",
        answer: 3
      },
      {
        question: "What is the primary function of leavening agents in baking?",
        choice1: "Add flavor",
        choice2: "Increase sweetness",
        choice3: "Create volume",
        choice4: "Enhance color",
        answer: 3
      },
      {
        question: "Which food preservation method involves treating food with ionizing radiation?",
        choice1: "Dehydration",
        choice2: "Irradiation",
        choice3: "Fermentation",
        choice4: "Pickling",
        answer: 2
      },
      {
        question: "What is the purpose of brining in food preparation?",
        choice1: "Enhance flavor",
        choice2: "Remove moisture",
        choice3: "Add sweetness",
        choice4: "Inhibit microbial growth",
        answer: 1
      },
      {
        question: "Which food additive is commonly used as a stabilizer in ice cream?",
        choice1: "Carrageenan",
        choice2: "Ascorbic acid",
        choice3: "Sodium benzoate",
        choice4: "Xanthan gum",
        answer: 4
      },
      {
        question: "What is the key ingredient in traditional Japanese soy sauce?",
        choice1: "Sesame oil",
        choice2: "Fish sauce",
        choice3: "Soybeans",
        choice4: "Rice vinegar",
        answer: 3
      },
      {
        question: "Which enzyme is responsible for breaking down carbohydrates into simple sugars during digestion?",
        choice1: "Amylase",
        choice2: "Lipase",
        choice3: "Protease",
        choice4: "Cellulase",
        answer: 1
      },
      {
        question: "What is the primary function of food color additives?",
        choice1: "Enhance flavor",
        choice2: "Improve texture",
        choice3: "Add sweetness",
        choice4: "Enhance color",
        answer: 4
      },
      {
        question: "Which food preservation method involves the use of salt and nitrates to inhibit bacterial growth?",
        choice1: "Canning",
        choice2: "Pickling",
        choice3: "Salting",
        choice4: "Freezing",
        answer: 3
      },
      {
        question: "What is the primary component of baking powder that reacts to produce carbon dioxide gas?",
        choice1: "Baking soda",
        choice2: "Cream of tartar",
        choice3: "Yeast",
        choice4: "Citric acid",
        answer: 2
      },

]



// constants 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question;

    optionsText.forEach(option => {
      const number = option.dataset['number'];
      option.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1)
    
    acceptingAnswers = true;
}

optionsText.forEach(option => {
  option.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    console.log(selectedAnswer);

    if (selectedAnswer === currentQuestion.answer) {
      console.log("correct");
    } else {
      console.log("wrong answer");
    }

    getNewQuestion();

    
  })
})

startGame ();





