function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your Promise Is A Resolved");
                resolve();
            }
            else {
                console.log("Your promise is not Been Resolved");
                reject('Sorry not Fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Rahul Thanks for Resolving.");
}).catch(function(){
    console.log('Very Bad..Sorry :(..')
})