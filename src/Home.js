import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  return (
    <div className='home'>
      { error && <div>{ error }</div> }
      { isLoading && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title='all blogs!'/>}
     {/* <BlogList blogs={blogs.filter(blog => blog.author === 'yoshi')} title="yoshi's blogs"/> */}
    </div>
  )
}

export default Home;
