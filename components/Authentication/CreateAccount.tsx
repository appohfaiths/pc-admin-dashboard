import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../utilities/firebase/firebaseconfig'
import { login } from '../../store/features/user/authSlice'
import { RootState } from '../../store'

type CreateAccountProps = {
    username: string
    email: string
    password: string
}

type errorCProps = {
    errorMessage: String,
}

const ErrorC = (props: errorCProps) => { return <span className='text-red-500'>{props.errorMessage}</span> }

function CreateAccount(props: CreateAccountProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateAccountProps>()
      const {loading, userInfo, error, success} = useSelector((state: RootState) => state.auth)
    
    const dispatch = useDispatch()
    const router = useRouter()

    const onSubmit: SubmitHandler<CreateAccountProps> = async data => {
        const { username, email, password } = data
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: username
                })
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
                router.push('/admin/dashboard')
            })
            .catch((error) => {
            alert(error)
            })
        
        reset()
   }
    
    return (
             /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto'>
            <div className='flex flex-col mx-auto bg-blue-200'>
                
                     <div className='flex flex-col'>
          <label htmlFor='username' className='text-left'>Username</label>
          {/* include validation with required or other standard HTML validation rules */}
            <input type='text' placeholder='username' {...register("username", { required: true })} />
            {/* errors will return when field validation fails */}
       </div>
        
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
            {/* errors will return when field validation fails */}
       </div>
      

      <input type="submit" value="Register"/>
      </div>
    </form>
    )
}

export default CreateAccount