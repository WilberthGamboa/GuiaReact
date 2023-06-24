import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWIthCustomHook = () => {
  const {formState, onInputChange,onResetForm,username,email,password} = useForm({
    username:'',
        email:'',
        password:'',
  })
 // const {username,email,password} = formState;
  /*

  {
        username:'',
        email:'',
        password:'',

    }
    /*

    useEffect(() => {
      console.log("hola")
    }, [])

      useEffect(() => {
      console.log("soy el username")
    }, [username])


        useEffect(() => {
      console.log("soy el email")
    }, [email])
    
*/



  return (
    <>
    <h1>Formulario con custom Hook</h1>
    <hr />
    <input type="text"
    className='form-control'
    placeholder="username"
    name='username'
    value={username}
    onChange={onInputChange}
    />

    <input type="email"
    className='form-control mt-2'
    placeholder="wilberthgamboa@gmail.com"
    name='email'
    value={email}
    onChange={onInputChange}
    />

<input type="password"
    className='form-control mt-2'
    placeholder="contraseña"
    name='password'
    value={password}
    onChange={onInputChange}
    />
  <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
