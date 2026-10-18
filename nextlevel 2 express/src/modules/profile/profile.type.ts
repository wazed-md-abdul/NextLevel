interface Profile {
  id: number
  user_id: number
  bio: string | null
  address: string | null
  phone: string | null
  gender: string | null
  created_at: Date
  updated_at: Date
}

interface CreateProfile {
  user_id: number
  bio?: string | null
  address?: string | null
  phone?: string | null
  gender?: string | null
}

type UpdateProfile = Partial<Omit<CreateProfile, "user_id">>

export type { Profile, CreateProfile, UpdateProfile }