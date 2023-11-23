import { useForm, SubmitHandler } from "react-hook-form"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {SERVER_URL} from "../utils/constans";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}
interface IFormInput {
    login: string
    password: string
    confirmPassword: string
    gender: GenderEnum
    inputValueEmail: string
    inputValuePassword: string
}

interface InputObject {
    [key: string]: any;
}



export default function RegisterPage() {
    const { register,
        handleSubmit,
        reset,
        getValues,
        formState:{errors, isSubmitting}
    } = useForm<IFormInput>()

    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<IFormInput> = async (data) =>  {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const filteredData = {
            username: data.login,
            password: data.password,
            gender: data.gender,
        }

        await axios.post(`${SERVER_URL}/users`, filteredData)



        reset()
    }


    return (

        <form className={'flex  flex-col items-center gap-3  mt-[200px]'}
              onSubmit={handleSubmit(onSubmit)}>
            <Link to={'/'}> go back</Link>
            <h2 className='font-bold'>Register page</h2>
            <label className={'font-bold'}>Email: </label>
            <input className={'border-4 w-[400px]'}
                   placeholder='Email'
                   {...register("login",
                {required: true, minLength: 6})}
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
                {required:true, minLength: 6})}/>
            {errors.password && <span className='text-red-700'>{errors.password.message}</span>
            }
            <label className={'font-bold'}>Password Confirm: </label>
            <input className={'border-4 w-[400px]'}
                   placeholder='confirm passworld'
                   type='password'
                   {...register("confirmPassword",
                       {required:true, minLength: 6,
                           validate: (value)=> value === getValues("password") || "password match"})}/>
            {errors.confirmPassword && <span className='text-red-700'>password not match</span>}
            <label className={'font-bold'}>Gender Selection</label>
            <select className={'text-center max-w-[140px] '} {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <button type="submit"
                    disabled={isSubmitting}
                    className='bg-green-500 disabled:bg-gray-700
            text-white p-1 pt-2 border-8 mt-2 min-w-[300px]'>
              Submit
            </button>
            <Link className={'hover:text-green-500 font-bold'}
                to={'/login'}>Login</Link>
        </form>
    )
}