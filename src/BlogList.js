
const BlogList = ({ blogs, title}) => {
  // const { blogs } = props;
  return (
    <div className='blog_list'>
      <h2>{ title }</h2>
       {
        blogs.map(blog => (
          <div className='blog_preview' key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>written by { blog.author }</p>
          </div>
        ))
      }
    </div>
  );
}

export default BlogList;
