'use client'

import { useRouter } from "next/navigation"



export default function ViewProduct({id}:{id:number}){
    const router = useRouter()

    function handleClick(){
        router.push(`/products/${id}`)
    }

    return(
        <button onClick={handleClick} className="text-[#f1f1f1]">
            View
        </button>
    )
}