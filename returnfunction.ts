

type User1 = {
    username: string
    role: UserRole
}
type UserRole1 = "guest" | "member" | "admin"

const users: User1[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string): User1 {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}