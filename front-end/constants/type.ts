export type UserPost = {
  id: number
  User: User
  content: string
  Images: Images[]
  Comments: Comments
  created_at: string
}

export type User = {
  id: number
  username: string
}
export type Images = {
  src: string
}
export type Comments = {
  User: User
  content: string
}
