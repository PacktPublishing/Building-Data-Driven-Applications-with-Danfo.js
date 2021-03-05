let syncarray = ["1", "2", "3", "4", "5"]

function addB() {
    setTimeout(() => {
        syncarray.forEach((value, index)=>{
            syncarray[index] = value + "+B"
        })
        console.log("done running")
    }, 1000)

}

addB()
console.log(syncarray);

// output 
// ["1", "2", "3", "4", "5"]
// "done running" 