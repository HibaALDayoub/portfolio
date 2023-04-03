import './App.css'
import Portfolio from './componant/Portfolio/Portfolio'
import Testimonials from './componant/testimonials/Testimonials.js'
import Topbar from './componant/topbar/Topbar'
import Works from './componant/works/Works'
import Intro from './componant/intro/Intro'
import Concat from './componant/concat/Concat'
import Menu from './componant/menu/Menu'
import {useState} from 'react'

const App = () => {
    const[menuOpen,setMenuOpen] = useState(false)
    return (
            <div className="app" basename={'/portfolio'}>
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div className="sections">
                    <Intro />
                    <Portfolio />
                    <Works />
                    <Testimonials />
                    <Concat />
                </div>
            </div>
    )
}

export default App