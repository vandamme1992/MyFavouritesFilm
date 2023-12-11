import { useForm, SubmitHandler } from "react-hook-form"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authAction, authSelector} from "../store/auth/authSlice";

interface IFormInput {
    login: string
    password: string
}

export default function LoginPage() {
    const { register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitting}
    } = useForm<IFormInput>()

    const dispatch = useDispatch()

   const inLogin = useSelector(authSelector)

    const handleLogout = () => {
        dispatch(authAction.logoutUser());
    };

    const {loginUser, logoutUser} = authAction;

    const onSubmit: SubmitHandler<IFormInput> = async (data) =>  {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const filteredData = {
            username: data.login,
            password: data.password,
        }
        dispatch(loginUser({user: filteredData.username}))
        reset()
    }

    return (
        <form className={'flex flex-col items-center gap-3 mt-[200px]'}
              onSubmit={handleSubmit(onSubmit)}>

            {!inLogin ? (
                <div className='flex flex-col items-center gap-3 '>
            <h2 className='font-bold'>Login page</h2>
            <label className={'font-bold'}>Email: </label>
            <input className={'border-4 w-[400px]'}
                   placeholder='Email'
                   {...register("login",
                       {required: true, minLength: 4})}
                   autoFocus={true}
                   type="email"
            />
            {errors.login && <span className='text-red-700'>{errors.login.message}</span>
            }
            <label className={'font-bold'}>Password: </label>
            <input className={'border-4 w-[400px]'}
                   placeholder='password'
                   type='password'
                   {...register("password",
                       {required:true, minLength: 4})}/>
            {errors.password && <span className='text-red-700'>{errors.password.message}</span>
            }
            <button type="submit"
                    disabled={isSubmitting}
                    className='bg-green-500 disabled:bg-gray-700
            text-white p-1 pt-2 border-8 mt-2 min-w-[300px]'>
                Submit
            </button>
                    <Link className={'hover:text-green-500 font-bold'}
                          to={'/register'}>Don't have an account? Register here</Link>
                </div>
) :
    ( <div className=' flex justify-center flex-col items-center flex-wrap'>Hello {inLogin}

        <button className='hover:text-green-500 font-bold mt-3' onClick={()=>handleLogout}>logout</button>
    </div> )
}
            <Link className={'hover:text-green-500 font-bold '}
                  to={'/'}>Go main</Link>
        </form>
    )
}