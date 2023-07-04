import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/features/user/authSlice'
import { authenticate } from '../../utilities/authentication/auth'
import { RootState } from '../../store'

type LoginProps = {
  email: string,
  password: string,
}

type errorCProps = {
  errorMessage: string
}

const ErrorC = (props: errorCProps) => {return <span className='text-red-500'>{props.errorMessage}</span>}

function Login(props: LoginProps) {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<LoginProps>()
  const {loading, userInfo, error, success} = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginProps> = async data => {
    const { email, password } = data
    
    console.log(email, password)
    
    try {
      dispatch(registerUser({ email, password }))
     reset()
   
    if (authenticate({email, password})) {
      router.push('/admin/dashboard')
    } else {
      alert('Please enter valid credentials')
    }
    } catch (error) {
      
   }
  }
  
  console.log(watch('email', 'password'))
  
  return (
     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto'>
      <div className='flex flex-col mx-auto bg-blue-200'>
        
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-left'>Email</label>
          {/* register your input into the hook by invoking the "register" function */}
          <input type='email' placeholder='email address' {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} aria-invalid={errors.email ? "true" : "false"}/>
          {errors.email?.type === 'required' && <ErrorC errorMessage='email is required' />}
       </div>

        <div className='flex flex-col'>
          <label htmlFor='password' className='text-left'>Password</label>
          {/* include validation with required or other standard HTML validation rules */}
            <input type='password' placeholder='password' {...register("password", { required: true, minLength: 8 })} />
            {/* errors will return when field validation fails  */}
       </div>
      

      <input type="submit" value="Login"/>
      </div>
    </form>
  )
}

export default Login

