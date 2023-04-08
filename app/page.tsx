import LeisComponent from "./leis/LeisComponent"
import Link from "next/link"
import Navbar from "@/components/ui/navbar"

export default async function Home() {

  return (
    <div>
      <div className="px-5 sm:px-20 md:px-64 lg:px-96 space-y-4">
        <Navbar className="h-12 mt-4"/>
        <LeisComponent />
      </div>
    </div>
  )
}
