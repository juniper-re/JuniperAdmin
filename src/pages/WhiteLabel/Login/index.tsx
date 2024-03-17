import React from 'react'
import { LoginForm } from './LoginForm'
import { LoginScreenMockup } from './LoginScreenMockup'

export const Login: React.FC = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='relative col-span-4 flex flex-col '>
        <h2>Login Screen</h2>
        <LoginForm />
      </div>
      <div className='col-span-7 col-start-6'>
        <LoginScreenMockup tagLine="Providing home and homeowner wellness" />
      </div>
    </div>
  )
}
