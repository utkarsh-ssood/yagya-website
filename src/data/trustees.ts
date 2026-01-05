export interface Trustee {
  name: string
  role: string
  image: string
  bio?: string
  phone?: string
  facebook?: string
  instagram?: string
  linkedin?: string
}

export const trustees: Trustee[] = [
  {
    name: "Name1",
    role: "Member",
    image: new URL("../assets/person.png", import.meta.url).href,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    phone: "XXXXXXXXXX",
    facebook: "XXXXXXXXXX",
    instagram: "XXXXXXXXXX",
  },
  {
    name: "Name2",
    role: "Member",    
    image: new URL("../assets/person.png", import.meta.url).href,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    phone: "XXXXXXXXXX",
    instagram: "XXXXXXXXXX",
    linkedin: "XXXXXXXXXX"
  },
  {
    name: "Name3",
    role: "Member",
    image: new URL("../assets/person.png", import.meta.url).href,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    phone: "XXXXXXXXXX",
    facebook: "XXXXXXXXXX",
    instagram: "XXXXXXXXXX"
  },
  {
    name: "Name4",
    role: "Member",
    image: new URL("../assets/person.png", import.meta.url).href,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    phone: "XXXXXXXXXX",
    facebook: "XXXXXXXXXX",
    instagram: "XXXXXXXXXX"
  }
  
]
