import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { Button, Container, InputAdornment, IconButton, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { AccountContext } from '../auth/Account'
import * as Utils from '../utils/constants'

const styles = {
  container: {
    ...flexCenter,
    flexDirection: 'column',
    height: '100vh'
  },
  title: {
    color: '#fff',
    mb: 2
  }, 
  button1: {
    background: '#9f8561',
    '&:hover': {
      background: '#9f8561'
    }
  },
  button2: {
    background: '#fff',
    color: '#000',
    '&:hover': {
      background: '#fff'
    }
  }
};

const Login = () => {

  const navigate = useNavigate()
  const { authenticate } = useContext(AccountContext)

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (data) => {
    const email = data.email
    const password = data.password

    authenticate(email, password)
      .then((data) => {
        console.log('Login', data) 
        if (data.accessToken){
          navigate(Utils.ROUTES.ACCOUNT)
        }
      })
      .catch((e) => {
        console.error(e)
      })
  };

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
      <div style={{ background: '#000' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth='xl' sx={styles.container}>
            <Typography variant='h4' align='center' gutterBottom sx={styles.title}>LOGIN</Typography>
              <Controller
                name='email'
                control={control}
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <TextField 
                    {...field}
                    fullWidth 
                    label='Email'
                    margin='normal'
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={styles.text}
                  />
                )}
              />

              <Controller
                name='password'
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <TextField 
                    {...field}
                    fullWidth
                    label='Password'
                    margin='normal'
                    type={showPassword ? 'text' : 'password'}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={styles.text}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleShowPassword}
                              onMouseDown={handleMouseDown}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                )}
              />

              <Button fullWidth type='submit' size='large' sx={styles.button1}>
                SIGN IN
              </Button>

              <Button fullWidth size='large' href={ROUTES.REGISTER} sx={styles.button2}>
                Create Account
              </Button>
          </Container>
        </form>
      </div>
  )
}

export default Login