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

let person1:person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2:person = {
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

// displayinfo(person2)

// let ages: number[] =[100,101,102,103,104,105]
// ages.push(106)

let people: person[] = [person1, person2]

