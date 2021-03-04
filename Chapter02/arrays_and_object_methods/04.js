/**
 * Testing property existence
 */

let user_profile = {
    name: 'Mary',
    sex: 'Female',
    age: 25,
    img_link: 'https://some-image-link.png',

}

console.log("age" in user_profile)
//outputs: true 

if ("rank" in user_profile) {
    console.log("Your rank is", user_profile.rank)
} else {
    console.log("rank is not a key")
}

//outputs: rank is not a key 