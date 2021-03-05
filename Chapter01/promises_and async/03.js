let syncarray = ["1", "2", "3", "4", "5"]

function addB(callback) {
    setTimeout(() => {
        syncarray.forEach((value, index) => {
            syncarray[index] = value + "+B"
        })
        callback() //call the callback function here
    }, 1000)
}

addB(() => {
    setTimeout(() => {
        syncarray.forEach((value, index) => {
            syncarray[index] = value + "+A";
        })
        console.log(syncarray);
    }, 1000)
})
// output
// [ '1+B+A', '2+B+A', '3+B+A', '4+B+A', '5+B+A' ]