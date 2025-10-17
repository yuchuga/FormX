import * as Utils from '../utils/constants'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Container, Grid, InputAdornment, IconButton, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { AccountContext } from '../auth/Account'

const styles = {
  grid: {
    mt: -10,
    minHeight: '100vh',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: '2.25rem',
    fontWeight: 500,
    textAlign: 'center',
    mb: 2
  }, 
  text: {
    '& .MuiInputLabel-root': {
      color: '#fff',
      '&.Mui-focused': {
        color: '#fff'
      }
    },
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& > fieldset': {
        border: '1px solid #fff'
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #fff'
      },
      '&:hover fieldset': {
        border: '1px solid #fff'
      }
    },
    '& .MuiFormHelperText-root': {
      ml: 0
    }
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
  },
  icon: {
    color: 'lightgray'
  }
};

const routes = {
  account: '/account',
  register: '/account/register'
};

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const navigate = useNavigate();
  const { authenticate } = useContext(AccountContext); //destructure

  const [state] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick= () => {
    setShowPassword((show) => !show)
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (data) => {
    console.log('data', data)
    const email = data.email
    const password = data.password
    console.log('email', email)
    authenticate(email, password)
      .then((data) => {
        console.log('Login', data) 
        if (data.accessToken){
          navigate(routes.account)
        }
      })
      .catch((error) => {
        console.error('Login Failure', error)
      })
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: state
  });

  return (
      <div style={{ background: '#000' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth='sm'>
            <Grid container direction='column' spacing={2} sx={styles.grid}>
              <Typography sx={styles.title}>LOGIN</Typography>

              <Grid item >
                <TextField 
                  fullWidth 
                  label='Email' 
                  placeholder='Enter your email'
                  variant='outlined' 
                  sx={styles.text}
                  {...register('email', {
                    required: 'Required',
                    pattern: {
                      value: Utils.EMAIL_REGEX,
                      message: Utils.EMAIL_ERROR
                    }
                  })}
                  error={!!errors?.email} //converts to boolean
                  helperText={errors?.email && errors.email.message}
                />
              </Grid>

              <Grid item>
                <TextField 
                  fullWidth
                  label='Password' 
                  placeholder='Enter your password'
                  variant='outlined'
                  sx={styles.text}
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Required',
                    pattern: {
                      value: Utils.PASSWORD_REGEX,
                      message: Utils.PASSWORD_ERROR
                    }
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password && errors.password.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={handleClick}
                          onMouseDown={handleMouseDown}
                          edge='end'
                        >
                          {showPassword 
                            ? <VisibilityIcon sx={{color: styles.icon}} /> 
                            : <VisibilityOffIcon sx={{color: styles.icon}} />
                          }
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item>
                <Button 
                  fullWidth
                  type='submit' 
                  size='large' 
                  variant='contained'
                  sx={styles.button1}
                >
                  SIGN IN
                </Button>
              </Grid>
              
              <Grid item>
                <Button 
                  fullWidth 
                  size='large' 
                  variant='contained' 
                  href={routes.register} 
                  sx={styles.button2}
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </div>
  )
}

export default Login