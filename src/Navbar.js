
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>the dojo blog</h1>
      <div className='links'>
        <a href='/'>home</a>
        <a href='/create' style={{
          backgroundColor: '#f1356d',
          color: 'white',
          borderRadius: '8px'
        }}>new blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
