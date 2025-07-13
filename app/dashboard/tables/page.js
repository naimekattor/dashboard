'use client'
import React from 'react';

// Dashboard component containing the Authors Table and Projects Table
export  const Tables = () => {
  const authors = [
    {
      id: 1,
      name: 'Esthera Jackson',
      email: 'esthera@simmmple.com',
      avatar: 'https://placehold.co/40x40/007bff/ffffff?text=EJ', // Placeholder avatar
      function: 'Manager',
      organization: 'Organization',
      status: 'Online',
      employed: '14/06/21',
    },
    {
      id: 2,
      name: 'Alexa Liras',
      email: 'alexa@simmmple.com',
      avatar: 'https://placehold.co/40x40/6a0dad/ffffff?text=AL', // Placeholder avatar
      function: 'Programmer',
      organization: 'Developer',
      status: 'Offline',
      employed: '14/06/21',
    },
    {
      id: 3,
      name: 'Laurent Michael',
      email: 'laurent@simmmple.com',
      avatar: 'https://placehold.co/40x40/ff6347/ffffff?text=LM', // Placeholder avatar
      function: 'Executive',
      organization: 'Projects',
      status: 'Online',
      employed: '14/06/21',
    },
    {
      id: 4,
      name: 'Freduardo Hill',
      email: 'freduardo@simmmple.com',
      avatar: 'https://placehold.co/40x40/3cb371/ffffff?text=FH', // Placeholder avatar
      function: 'Manager',
      organization: 'Organization',
      status: 'Online',
      employed: '14/06/21',
    },
    {
      id: 5,
      name: 'Daniel Thomas',
      email: 'daniel@simmmple.com',
      avatar: 'https://placehold.co/40x40/8a2be2/ffffff?text=DT', // Placeholder avatar
      function: 'Programmer',
      organization: 'Developer',
      status: 'Offline',
      employed: '14/06/21',
    },
    {
      id: 6,
      name: 'Mark Wilson',
      email: 'mark@simmmple.com',
      avatar: 'https://placehold.co/40x40/ff8c00/ffffff?text=MW', // Placeholder avatar
      function: 'Designer',
      organization: 'UI/UX Design',
      status: 'Offline',
      employed: '14/06/21',
    },
  ];

  const projects = [
    {
      id: 1,
      company: 'Chakra Soft UI Version',
      budget: '$14,000',
      status: 'Working',
      completion: 60,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4FD1C5"/>
        </svg>
      ),
    },
    {
      id: 2,
      company: 'Add Progress Track',
      budget: '$3,000',
      status: 'Canceled',
      completion: 10,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V7H13V17ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z" fill="#F56565"/>
        </svg>
      ),
    },
    {
      id: 3,
      company: 'Fix Platform Errors',
      budget: 'Not set',
      status: 'Done',
      completion: 100,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4FD1C5"/>
        </svg>
      ),
    },
    {
      id: 4,
      company: 'Launch our Mobile App',
      budget: '$32,000',
      status: 'Done',
      completion: 100,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4FD1C5"/>
        </svg>
      ),
    },
    {
      id: 5,
      company: 'Add the New Pricing Page',
      budget: '$400',
      status: 'Working',
      completion: 25,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4FD1C5"/>
        </svg>
      ),
    },
  ];


  return (
    <div className="container mx-auto">
      {/* Authors Table Section */}
      <div className="bg-gradient-to-br from-[#051434] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-4 sm:p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Authors Table</h2>
          {/* Optional: Add search/filter or other actions here */}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className=" bg-opacity-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tl-lg">
                  Author
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Function
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tr-lg">
                  Employed
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"></th> {/* For the delete icon */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {authors.map((author) => (
                <tr key={author.id} className="hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={author.avatar} alt={`${author.name} avatar`}
                             onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x40/000000/FFFFFF?text=${author.name.split(' ').map(n => n[0]).join('')}`; }} // Fallback for broken images
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{author.name}</div>
                        <div className="text-sm text-gray-400">{author.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{author.function}</div>
                    <div className="text-sm text-gray-400">{author.organization}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      author.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {author.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {author.employed}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full p-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gradient-to-br from-[#051434] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Projects</h2>
          <span className="text-sm text-gray-400">30 done this month</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-opacity-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tl-lg">
                  Companies
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tr-lg">
                  Completion
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"></th> {/* For the three-dot icon */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 mr-3">
                        {project.icon}
                      </div>
                      <div className="text-sm font-medium text-white">{project.company}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {project.budget}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {project.status}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm text-gray-300 mr-2">{project.completion}%</div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full p-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables