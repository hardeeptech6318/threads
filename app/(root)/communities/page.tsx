

import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"



async  function page() {

  const user= await currentUser();
    if(!user) return null;
    const userInfo=await fetchUser(user.id)

    if(!userInfo.onboarded) redirect('/onboarding')



    return (
      <h1 className="head-text mb-10">Communities</h1>
      // search bar


    )
  }
  
  export default page