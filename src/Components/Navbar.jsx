export default function Navbar() {
  return (
    <nav className="fixed to⁻0 w-full z-50 transition-all duration-300 b-slate-950/20 backdrop-blur-sm border-b">
      <div className="max-w-7x mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 ">
            <img 
              src="./public/logo.png"
              alt="codeFlow"
              className="w-6 h-6 sm:w-8 sm:h8"
            />
          </div>

          <span className="text-lg sm:text:xl md:text-2xl font-medium ">
            <span className="text-white">Code</span>
            <span className="text-blue-400">Flow</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          <a href="#features">Features</a>
        </div>
      </div>
    </nav>
  )
}