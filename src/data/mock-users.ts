import { AuthUser } from '../interfaces/auth.interface'
import ProfilePic from '../images/profile.jpg'

export const MOCK_USER: AuthUser = {
  id: 'user1',
  profile: {
    name: 'Lindell Carter',
    image: ProfilePic,
    email: 'email@email.com',
    password: 'password123',
    phone: '1-(555)-555-5555',
    bio: `I'm an opera singer who also loves to code!`
  }
}