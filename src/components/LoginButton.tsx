import { useSession, signIn, signOut } from "next-auth/react"

type DefaultSession = {
    name?: string | undefined,
    email?: string | undefined,
    image?: string | undefined,
} | undefined

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  )
}