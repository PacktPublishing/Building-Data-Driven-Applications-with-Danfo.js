/**
 * Accessing object elements
 */

let user_profile = {
    name: 'Mary',
    sex: 'Female',
    age: 25,
    img_link: 'https://some-image-link.png',
}

for (key in user_profile) {
    console.log(key, user_profile[key]);
}

//output:
// name Mary
// sex Female
// age 25
// img_link https://some-image-link.png