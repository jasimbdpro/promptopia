"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json();

            setPosts(data)
        }
        if (session?.user.id) fetchPosts();

    }, [])

    const handleEdit = async () => {
        console.log("edit")
    }
    const handleDelete = async () => {
        console.log("delete")
    }

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile