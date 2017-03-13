//We will ned to require express here and a few other things

//set up 3 objects for 3 different quizzes
var quiz1 = {
	questions: [
	
	//THIS IS FAKE NEWS
	question1 {
		question:'President Obama issues a full pardon for convicted rapper C-Murder, for killing a teenager outside nightclub in louisiana',
		fake: true 
	},
	question2 = {
		question:'John Andrew Boehner, former speaker of the House, suffered 3rd-degree burns after an e-cigarette explodes in his pocket while riding in a transport',
		fake: true
	}, 
	question3 = {
		question:'President Obama stormed out of the White House because of a move by Trump to cancel all "Islamic prayers" in the building.',
		fake: true
	}, 
	question4 = {
		question:'President Obama canceled plans to attend the funeral of Fidel Castro due to the intervention of Donald Trump',
		fake: true
	},
	question5 = {
		question:'Several outbreaks of Ebola in the United States, including Texas State, caused the town of Purdon to be quarantined',
		fake: true
	},

	//THIS IS REAL NEWS
	question6 = {
		question: 'Tom Hanks sends The White House Press Corps A Caffeine Infusion For the third time, hoping to encouraging journalists by making the 24-hour cycle of news a bit more pleasant',
		fake: false
	},
	question7 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	},
	question8 = {
		question: 'A young man, identified as Kelvin Rafael Mejía, died after chugging a bottle of tequila during a friendly wager at a Dominican nightclub. He won $630 but just minutes later he lost his life',
		fake: false 
	},
	question9 = {
		question: 'A former British MI6 intelligence agent, after working as a private consultant for anti-Trump Republicans and later for Democrats, became convinced that Russian President Vladimir Putin was actively attempting to manipulate the American presidential campaign in Trumps favor',
		fake: false 
	},
	question10 = {
		question: 'Donald Trump Owns Over 3000 Domains, including TrumpRussia.com, TrumpFraud.com, TrumpNetworkPyramidScheme.com, and DonaldTrumpSucks.com',
		fake: false 
	},
	]};


var quiz2 = {
	questions: [
	
	//THIS IS FAKE NEWS
	question1 = {
		question:'Trump Reports World Record 39 Under Par, 12 Holes-in-One, during Golf Outing with Japanese Prime Minister Shinzo Abe',
		fake: true 
	},
	question2 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	},
	question3 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	}, 
	question4 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	}, 
	question5 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	},

	//THIS IS REAL NEWS
	question6 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	},
	question7 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question8 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question9 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question10 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	},
	]};
   

var quiz3 = {
	questions: [
	
	//THIS IS FAKE NEWS
	question1 = {
		questionA:'Trump Reports World Record 39 Under Par, 12 Holes-in-One, during Golf Outing with Japanese Prime Minister Shinzo Abe',
		fake: true
	},
	question2 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	},
	question3 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	}, 
	question4 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	}, 
	question5 = {
		question:'Rite Greens, a shop in Denver, Colorado has taken the steps needed to accept food stamps for the purposes of purchasing marijuana effectively leading to taxpayer funded marijuana for welfare recipients'
		fake: true
	},

	//THIS IS REAL NEWS
	question6 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	},
	question7 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question8 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question9 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	}, 
	question10 = {
		question: 'A decade ago after shaving her head, a bald Brittany Spears attacked a photographer’s car with an umbrella while at a gas station before speeding away',
		fake: false 
	},
	]};

//Create a start button for the Questions page

//First let the computer choose quiz #1


//create a schema for a Mysql table

//once the use is back then allow the user to choose start
//Let the computer pull up quiz 1
//Let the computer choose randlomly if FAKE NEWS goe son top or bottom
//Start the countdown
//Allow the user to choose a fake news
//RUn the appropriate animation
//after animation let it automatically go to the next question without user interaction
//Disply the stats
//Display a message in headline.
//When the game ends allow the user to tweet their results
//After the tweet go back to the beginning to allow user to play again
//If the user logs out, end the session


//Let the user choose login or sign up
//Create a modal for both of those screen
//create a schema for a Mysql table
//once the use is back then allow the user to choose start
//Let the computer pull up quiz 1
//Let the computer choose randlomly if FAKE NEWS goe son top or bottom
//Start the countdown
//Allow the user to choose a fake news
//RUn the appropriate animation
//after animation let it automatically go to the next question without user interaction
//Disply the stats
//Display a message in headline.
//When the game ends allow the user to tweet their results
//After the tweet go back to the beginning to allow user to play again
//If the user logs out, end the session





