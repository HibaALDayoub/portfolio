import './Topbar.css'
import { FaEnvelope ,FaUserAlt } from "react-icons/fa";


const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className='left'>
          <a href='#intro' className="logo">genius.</a>
          <div className="itemContainer">
            <FaUserAlt className="icon"/>
            {/* <FaBeer /> */}
            <span>+44 995 59 68</span>
          </div>
          <div className="itemContainer">
            <FaEnvelope className="icon"/>
            <span>hiba@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className="hamburgar" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar