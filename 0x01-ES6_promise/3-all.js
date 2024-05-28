import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${user.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
