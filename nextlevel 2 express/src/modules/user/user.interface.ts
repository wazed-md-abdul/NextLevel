interface CreateUser {
  name: string
  email: string
  password: string
  age: number
}
type UpdateUser = Partial<CreateUser>
export type { CreateUser, UpdateUser }
