let syncarray = ["1", "2", "3", "4", "5"]

function addA(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            syncarray.forEach((value, index) => {
                syncarray[index] = value + "+A";
            })
            let error = true;
            if (error) {
                reject("just testing promise rejection")
            }
        }, 1000);
    })
}

addA().catch(e => console.log(e)) // just testing promise rejection 