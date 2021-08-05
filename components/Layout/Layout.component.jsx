import Navbar from "../Navbar/Navbar.component";

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <Navbar />
            { children }
        </div>    
    )
}

export default Layout