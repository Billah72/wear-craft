import logo from '../../../assets/Image/logo.png'
import { CiUser } from 'react-icons/ci'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

const MinHeader = () => {
  return (
    <div>
      <div className='flex items-center py-2 justify-between container mx-auto px-24'>
        {/* Logo */}
        <img className='w-22' src={logo} alt="logo" />

        {/* Search Bar */}
        <div className='flex-1 flex justify-center'>
          <div className="relative w-[600px]">
            {/* Input Field */}
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-4 pr-12 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-gray-400 outline-none text-sm"
            />

            {/* Right Icon */}
            <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Account + Cart */}
        <div className='flex gap-6 items-center'>
          <div className='flex items-center gap-1'>
            <CiUser className='text-3xl' />
            <div>
              <p className='color-text text-xs'>Account</p>
              <p>Login</p>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <IoCartOutline className='text-3xl' />
            <div>
              <p className='color-text text-xs'>Cart</p>
              <p>0 Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinHeader
