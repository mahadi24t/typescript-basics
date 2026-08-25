type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}
type UserUpdate = Partial<User>

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: any) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign
    const foundUser = users.find(user => user.id === id)
    if (foundUser) {
        Object.assign(foundUser, updates)
    }
    else{
        console.error(`User with ID ${id} not found`)
        return
    }
}
function updatedUser(id: number, updates: UserUpdate) {
    const foundUser = users.find(user => user.id === id)
    if (foundUser) {
        Object.assign(foundUser, updates)
    }
    else{
        console.error(`User with ID ${id} not found`)
        return
    }
}
updatedUser(2, { username: "bro_smith" });
updatedUser(3, { role: "member" });
// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)