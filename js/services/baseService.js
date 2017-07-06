App.service('IO', ['$http', '$rootScope', function ($http, $rootScope) {
	return{
		getUsers: function(){
			var data = [
				  {
				    "uid": 1,
				    "username": "sampleuser1",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User One",
				    "twubric": {
				      "total": 3.5,
				      "friends": 1,
				      "influence": 1,
				      "chirpiness": 1.5
				    },
				    "join_date": 1358899200
				  },
				  {
				    "uid": 2,
				    "username": "sampleuser2",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Two",
				    "twubric": {
				      "total": 5,
				      "friends": 1,
				      "influence": 1,
				      "chirpiness": 1.5
				    },
				    "join_date": 1355270400
				  },
				  {
				    "fullname": "Sample User Three",
				    "twubric": {
				      "friends": 1,
				      "influence": 1,
				      "chirpiness": 1.5,
				      "total": 7
				    },
				    "join_date": 1289433600,
				    "uid": 3,
				    "username": "sampleuser3",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg"
				  },
				  {
				    "join_date": 1300838400,
				    "uid": 4,
				    "username": "sampleuser4",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Four",
				    "twubric": {
				      "influence": 3,
				      "chirpiness": 4,
				      "total": 9,
				      "friends": 2
				    }
				  },
				  {
				    "twubric": {
				      "total": 9,
				      "friends": 1,
				      "influence": 4,
				      "chirpiness": 4
				    },
				    "join_date": 1230768000,
				    "uid": 5,
				    "username": "sampleuser5",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Five"
				  },
				  {
				    "username": "sampleuser6",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Six",
				    "twubric": {
				      "total": 6,
				      "friends": 2,
				      "influence": 3,
				      "chirpiness": 1
				    },
				    "join_date": 1252454400,
				    "uid": 6
				  },
				  {
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Seven",
				    "twubric": {
				      "total": 8,
				      "friends": 2,
				      "influence": 4,
				      "chirpiness": 2
				    },
				    "join_date": 1278201600,
				    "uid": 7,
				    "username": "sampleuser7"
				  },
				  {
				    "uid": 8,
				    "username": "sampleuser8",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Eight",
				    "twubric": {
				      "friends": 2,
				      "influence": 3,
				      "chirpiness": 2,
				      "total": 7
				    },
				    "join_date": 1331510400
				  },
				  {
				    "join_date": 1367971200,
				    "uid": 9,
				    "username": "sampleuser9",
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Nine",
				    "twubric": {
				      "total": 8,
				      "friends": 1,
				      "influence": 4,
				      "chirpiness": 3
				    }
				  },
				  {
				    "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
				    "fullname": "Sample User Ten",
				    "twubric": {
				      "chirpiness": 3,
				      "total": 5,
				      "friends": 1,
				      "influence": 1
				    },
				    "join_date": 1228953600,
				    "uid": 10,
				    "username": "sampleuser10"
				  }
				];
			return data;
		}

	}
}]);
