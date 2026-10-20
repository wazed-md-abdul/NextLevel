interface CreateUser {
  name: string
  email: string
  password: string
  age: number
  role: "agent" | "admin" | "user"
}
type UpdateUser = Partial<CreateUser>
export type { CreateUser, UpdateUser }
