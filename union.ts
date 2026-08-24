type User = {
    username: string,
    role: "admin" | "member" | "guest"
}

type UserRole = User["role"]

let userRole: UserRole ="admin" // valid


