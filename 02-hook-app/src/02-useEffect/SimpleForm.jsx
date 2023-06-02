import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username:'strider',
        email:'wgcampos15@gmail.com'
    })

    const{username,email} = formState;

    const onInputChange = ({target}) =>{
        const {name ,value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
      console.log("hola")
    }, [])
    

  return (
    <>
    <h1>Formulario Simple</h1>
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
    </>
  )
}
