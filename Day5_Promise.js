/* ES5, using Bluebird 
   EXAMPLE from https://coligo.io/javascript-promises-plain-simple/ */
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy.typeOf === String) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);


// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
        })
        .catch(function (error) {
            // ops, mom don't buy it
            console.log(error.message);
        });
}

askMom();


DA
/* ES5 
   PDARACTICE PROMISE*/
var bruceIsBetter = false;

//Promise
var willIGetSleep = new Promise (
	function (resolve, reject) {
		if (bruceIsBetter) {
			var better = "Bruce is better and I will sleep hours!";
			resolve(better);
		} else {
			var notBetter = new Error("He is sick, wake up x 5");
			reject(notBetter);
		}
	}
);

//call promise
var bruceHealth = function () {
	willIGetSleep
		.then(function (fulfilled) {
			//Sleep!
			console.log(fulfilled);
		})
		.catch(function (error) {
			//No sleep
			console.log(error.message); 
		});
}

bruceHealth();
