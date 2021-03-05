let syncarray = ["1", "2", "3", "4", "5"]

function addB(callback) {
    setTimeout(() => {
        syncarray.forEach((value, index)=>{
            syncarray[index] = value + "+B"
        })
        callback() //call the callback function here
    }, 1000)
}

addB(()=>{
  // here we can do anything with the updated syncarray 
  console.log(syncarray);  
})

// output 
// [ '1+B', '2+B', '2+B', '4+B', '5+B' ] 