"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"


interface UserCardProps{
    id:string
name:string
username:string
imageUrl:string
personType:string
}

function UserCard({id,
    name,
    username,
    imageUrl,
    personType}:UserCardProps) {

        const router=useRouter()

  return (
    <article className="user-card">
        <div className="user-card_avatar">
            <Image src={imageUrl}  alt="profile image" className="rounded-full" width={48} height={48}/>
        
        <div className="flex-1 text-ellipsis">
            <h4 className="text-base-semibold text-light-1">{name}</h4>
                <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
        </div>

        <Button className="user-card_btn" onClick={()=>router.push(`/profile/${id}`)}>
            View
        </Button>

    </article>
  )
}

export default UserCard