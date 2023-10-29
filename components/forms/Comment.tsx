"use client"

import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import { Button } from '../ui/button'
import * as z from "zod"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { usePathname, useRouter } from 'next/navigation'
import { CommentValidation } from '@/lib/validations/thread'
import { Input } from '../ui/input'
import Image from 'next/image'
import { addCommentToThread } from '@/lib/actions/thread.actions'
// import { createThread } from '@/lib/actions/thread.actions'






interface CommentProps {
    threadId: string
    currentUserImg: string
    currentUserId: string
}

function Comment({ threadId,
    currentUserImg,
    currentUserId, }: CommentProps) {

        const router=useRouter()
        const pathname=usePathname()
        
        const form=useForm({
          resolver:zodResolver(CommentValidation),
          defaultValues:{
           thread:"",
           
        
          }
        })
      
        const onSubmit=async (values:z.infer<typeof CommentValidation>)=>{
        //   await createThread({
        //       text:values.thread,
        //       author:userId,
        //       community:null,
        //       path:pathname
      
        //   })

        await addCommentToThread(threadId,values.thread,JSON.parse(currentUserId),pathname)
          form.reset();
        }

    return (
        <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)} 
      className="comment-form">
   
   <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className='flex items-center  gap-3 w-full'>
              <FormLabel  >
               <Image src={currentUserImg} alt='profile image'
               height={48}
               width={48}
               className='rounded-full object-cover'
               />
                </FormLabel>
              <FormControl className='border-none bg-transparent'>
                <Input
                type='text'
                placeholder='comment...'
                className='text-light-1 outline-none no-focus'
                {...field}
                  />
              </FormControl>
            
              
            </FormItem>
          )}
        />
        <Button type='submit' className='comment-form_btn'>

            Reply
        </Button>
    </form>
    </Form>
    )
}

export default Comment