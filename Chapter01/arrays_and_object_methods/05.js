/**
 * Deleting properties
 */


let user_profile = {
    name: 'Mary',
    sex: 'Female',
    age: 25,
    img_link: 'https://some-image-link.png',

}

delete user_profile.age
console.log(user_profile)
//output:
// {
//     img_link: "https://some-image-link.png",
//     name: "Mary",
//     sex: "Female"
// } 