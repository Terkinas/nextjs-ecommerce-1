import LoginButton from '@/components/LoginButton'
import AuthButton from '@/components/ui/AuthButton'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { Github } from 'lucide-react'
import Image from 'next/image'
import GoogleSVG from '@/assets/img/google.svg'

type Props = {}

const Login = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)

    async function loginWithGoogle() {
        setIsLoading(true)
        try {
          await signIn('google')
        } catch (error) {
          // display error message to user
        } finally {
          setIsLoading(false)
        }
      }
    
      async function loginWithGithub() {
        setIsLoading(true)
        try {
          await signIn('github')
        } catch (error) {
          // display error message to user
        } finally {
          setIsLoading(false)
        }
      }
    
  return (
    <main className='w-full h-screen flex items-center'>
        <AuthButton 
            type='button'
            isLoading={isLoading} 
            className={`flex items-center h-fit justify-center w-10/12 mx-auto px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700
            max-w-xl`}
            onClick={loginWithGoogle}
            >
            {isLoading ? null : (
              <Image src={GoogleSVG} alt="google svg" width={20} height={20} className='mr-2' />
            )}
            Google
            </AuthButton>

            <AuthButton 
            type='button'
            isLoading={isLoading} 
            className={`flex items-center h-fit justify-center w-10/12 mx-auto px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700
            max-w-xl`}
            onClick={loginWithGithub}
            >
            {isLoading ? null : (
              <Github />
            )}
            Github
            </AuthButton>
    </main>
  )
}

export default Login