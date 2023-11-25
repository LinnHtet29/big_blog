import { NavLink, Outlet } from "react-router-dom"

export default function Help() {
    return (
    <div>    
        <header>
            <nav className="px-20 my-5">
                    <h1 className="text-2xl text-white text-start font-bold">Website Help Center</h1>
                    <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni praesentium dolore officiis
                        perspiciatis illum inventore, quas alias temporibus sed aspernatur.</p>
                <div className="flex justify-center gap-5 mt-5">
                    <NavLink to="faq" className="px-2 py-1 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:border-white hover:text-white">FAQ</NavLink>
                    <NavLink to="contact" className="px-2 py-1 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:border-white hover:text-white">Contact Us</NavLink>
                </div>
            </nav>
        </header>
        
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
