/**
 * Copying and Cloning Objects
 */

let user_profile = {
    name: 'Mary',
    sex: 'Female',
    age: 25,
    img_link: 'https://some-image-link.png',

}

let new_user_profile = user_profile
delete new_user_profile.age

console.log("new_user_profile", new_user_profile)
console.log("user_profile", user_profile)

//output:
// "new_user_profile" Object {
//     img_link: "https://some-image-link.png",
//     name: "Mary",
//     sex: "Female"
// }

// "user_profile" Object {
//     img_link: "https://some-image-link.png",
//     name: "Mary",
//     sex: "Female"
// } 


let education = { graduated: true, degree: 'BSc' } 
let permissions = { isAdmin: true } 

Object.assign(user_profile, education, permissions); 

console.log(user_profile) 
//output:
// {
//     name: 'Mary',
//     sex: 'Female',
//     img_link: 'https://some-image-link.png',
//     graduated: true,
//     degree: 'BSc',
//     isAdmin: true
//   }