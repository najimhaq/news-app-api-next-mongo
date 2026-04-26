// pages/dashboard.js
import { FaHome, FaChartBar, FaUsers, FaCog } from 'react-icons/fa';

export default function DashboardBoard() {
  return (
    <div className='flex h-screen bg-gradient-to-r from-violet-600/50 via-blue-600/50 to-violet-600/50'>
      {/* Sidebar */}
      <aside className='w-64 bg-white/80 backdrop-blur-md shadow-md'>
        <div className='p-6 text-xl font-bold border-b'>My Dashboard</div>
        <nav className='p-4 space-y-4'>
          <a
            href='#'
            className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'
          >
            <FaHome /> <span>Home</span>
          </a>
          <a
            href='#'
            className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'
          >
            <FaChartBar /> <span>Analytics</span>
          </a>
          <a
            href='#'
            className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'
          >
            <FaUsers /> <span>Users</span>
          </a>
          <a
            href='#'
            className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'
          >
            <FaCog /> <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 overflow-y-auto'>
        <h1 className='text-2xl font-semibold text-white mb-6'>Overview</h1>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md'>
            <h2 className='text-lg font-medium'>Users</h2>
            <p className='text-3xl font-bold mt-2'>1,245</p>
          </div>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md'>
            <h2 className='text-lg font-medium'>Revenue</h2>
            <p className='text-3xl font-bold mt-2'>$12,340</p>
          </div>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md'>
            <h2 className='text-lg font-medium'>Growth</h2>
            <p className='text-3xl font-bold mt-2'>+15%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
