import React from "react"
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from '../components/form/PostForm'
import PostCard from '../components/PostCard'
const Home = () => {
  const { user } = useSelector((state) => state.user)
  const { mainPosts } = useSelector((state) => state.post)

  return <AppLayout>
    {user && <PostForm />}
    {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
  </AppLayout>
}
export default Home;