let syncarray = ["1", "2", "3", "4", "5"]

function addA(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            syncarray.forEach((value, index) => {
                syncarray[index] = value + "+A";
            })
            resolve()
        }, 1000);
    })
}

addA().then(() => console.log(syncarray)); // [ '1+A', '2+A', '2+A', '4+A', '5+A' ] 