import { getServerSession } from "next-auth"
import { LoginButton, LogoutButton } from "./auth"
import LeisComponent from "./leis/LeisComponent"
import Link from "next/link"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Home() {

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Link href='/register'>Register</Link>
      <main>
        MAIN PAGE
      </main>
      <LeisComponent />
    </>
  )
}
