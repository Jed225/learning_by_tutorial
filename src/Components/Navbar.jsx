import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed to⁻0 w-full z-50 transition-all duration-300 b-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7x mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 ">
            <img 
              src="./public/logo.png"
              alt="codeFlow"
              className="w-6 h-6 sm:w-8 sm:h8"
            />

            <span className="text-lg sm:text:xl md:text-2xl font-medium ">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>

            <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">princing</a>

            <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">testimonials</a>

            <button className='md:hidden  '>
              <Menu className='w-5 h-5 sm:w-6 sm:h-6 '/>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}