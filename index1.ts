type Address= {
    street:string
    city:string
    country:string
}
type person = {
    name: string,
    age: number,
    isStudent:boolean
    address?: Address
}

let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address:{
        street:"456 Elm St",
        city:"Los Angeles",
        country:"USA"
    }
}

function displayinfo(person: person) {
    console.log(`${person.name} lives in ${person.address?.street}`)
}

displayinfo(person2)