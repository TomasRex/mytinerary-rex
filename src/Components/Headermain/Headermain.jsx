import { Link, NavLink } from "react-router-dom"


function Headermain() {
  return (
    <header className="h-16 w-full text-black md:grid md:grid-cols-12 flex antialiased bg-[#f9f2ff]">
        <div className="md:col-start-2 md:col-span-10 flex md:justify-between items-center font-bold w-full px-6 justify-center">
          <p className="text-2xl title-main">My Tinerary</p>
          <div className="divide-x-4 divide-red-700">
            <Link className="text-xl px-4" to="/">
              Home
            </Link>
            <Link className="text-xl px-4" to="/cities">
              Cities
            </Link>
            <Link
              className="text-xl text-white bg-blue-500 py-2 px-4 rounded inline-flex items-center login-main"
              to=""
            >
              <img
                src="../public/icons8-persona-de-sexo-masculino-64.png"
                width={20}
                height={20}
                alt="login-icon"
              />
              Login
            </Link>
          </div>
        </div>
      </header>
  )
}

export default Headermain