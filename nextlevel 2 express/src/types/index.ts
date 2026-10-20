export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  AGENT: "agent",
} as const
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]
