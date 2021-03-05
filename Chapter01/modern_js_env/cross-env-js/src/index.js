import { names, getSubject } from "./utils";

names.forEach((name) => {
    console.log(`Teacher Name: ${name}, Teacher Subject: ${getSubject(name)}`)
})
