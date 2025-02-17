import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCog, Users, UserCheck, User } from 'lucide-react';

function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: 'Faculty Head',
      icon: UserCog,
      description: 'Manage events and oversee all activities',
      path: '/login/faculty',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Student Head',
      icon: Users,
      description: 'Coordinate events and manage volunteers',
      path: '/login/student-head',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Volunteer',
      icon: UserCheck,
      description: 'Help organize and manage events',
      path: '/login/volunteer',
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Participant',
      icon: User,
      description: 'Register and participate in events',
      path: '/login/participant',
      color: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Select Your Role
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <button
                onClick={() => navigate(role.path)}
                className="w-full h-full"
              >
                <div className={`bg-gradient-to-br ${role.color} rounded-lg p-6 text-white h-full`}>
                  <role.icon className="w-12 h-12 mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
                  <p className="text-white text-opacity-90">
                    {role.description}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;