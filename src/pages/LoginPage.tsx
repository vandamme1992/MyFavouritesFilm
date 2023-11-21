import React, {memo} from 'react';
import {useForm} from "react-hook-form";

interface ILogin {
    login: string;
    password: string | number
}

const Login :React.FC = memo(() => {
    const {register,
        handleSubmit,
        watch,
        formState
    } = useForm<ILogin>({

    })
    return (
        <form>
            Login
        </form>
    );
});

export default Login;
