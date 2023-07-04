type UserProps = {
    email: string,
    password: string
}

export function authenticate(props: UserProps) {

    const {email, password} = props

  if (email === 'me@gmail.com' && password === 'password') {
    localStorage.setItem('user', JSON.stringify({ email }));
    return true;
  }
  return false;
}