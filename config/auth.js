// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '00000', // your App ID
		'clientSecret' 	: '00000', // your App Secret
		'callbackURL' 	: 'http://localhost:8000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'TTTTTTT',
		'consumerSecret' 	: 'TTTTTTT',
		'callbackURL' 		: 'http://localhost:8000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '555555',
		'clientSecret' 	: '555555',
		'callbackURL' 	: 'http://localhost:8000/auth/google/callback'
	}

};