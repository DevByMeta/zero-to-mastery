var database = [
	{
		username: "devbymeta", 
		password: "123456"
	},

	{
		username: "jayjay", 
		password: "hi12"
	},

	{
		username: "yoBoy", 
		password: "Ilikecake0"
	},
];

var newsFeed = [
	{
		user: "Andrew", 
		timeline: "I love to code!"
	}, 
	
	{
		user: "Kate", 
		timeline: "I want to learn how to code."
	}, 
				
	{
		user: "Azi", 
		timeline: "Personally I don't like coding..."
	}
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}

	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);