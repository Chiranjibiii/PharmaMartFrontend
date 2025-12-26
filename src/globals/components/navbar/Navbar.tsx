import { data, Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/hook"
import { useEffect, useState } from "react"
import { fetchCartItems } from "../../../store/cartSlice"

const Navbar=()=>{
  const navigate=useNavigate() 
  const dispatch = useAppDispatch()
    const{user}=useAppSelector((state)=>state.auth)
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const {items} = useAppSelector((state)=>state.carts)  
    console.log(items);
    

    useEffect(()=>{
      const token = localStorage.getItem('token')
      setIsLoggedIn(!!token || !!user.token)
      dispatch(fetchCartItems())
    },[user.token])

    const handleLogout=()=>{
      localStorage.removeItem('token')
      setIsLoggedIn(false)
      navigate('/login')
    }
    return(
        <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
            <div>
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="lucide lucide-bolt inline-block size-6 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <circle cx={12} cy={12} r={4} />
                </svg>
                <span>Flow</span>
              </Link>
            </div>
   <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
  {!isLoggedIn ? (
    <>
      <Link
        to="/register"
        className="text-sm font-bold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 shadow-md hover:from-blue-700 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
      >
        Register
      </Link>
      <Link
        to="/login"
        className="text-sm font-bold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-400 shadow-md hover:from-green-700 hover:to-green-500 transform hover:scale-105 transition-all duration-300"
      >
        Login
      </Link>
    </>
  ) : (
    <>
      <Link
        to="/cart"
        className="text-sm font-bold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 shadow-md hover:from-purple-700 hover:to-purple-500 transform hover:scale-105 transition-all duration-300"
      >
        Cart <sub className="text-xs">{items.length}</sub>
      </Link>
      <Link
        to="#"
        onClick={handleLogout}
        className="text-sm font-bold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-400 shadow-md hover:from-red-700 hover:to-red-500 transform hover:scale-105 transition-all duration-300"
      >
        Logout
      </Link>
    </>
  )}
</nav>


          </div>
          {/* END Main Header Content */}
        </header>
    )
}

export default Navbar 