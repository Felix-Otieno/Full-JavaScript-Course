let myPromise = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num < 5) {
        resolve("You've get correctly!!!");
    }
    else {
        reject("Better luck next time................");
    }
});

function handleSuccess(goodNews) {
    console.log(goodNews);
}
function handleFailure(badNews) {
    console.log(badNews);
}

myPromise.then(handleSuccess, handleFailure);