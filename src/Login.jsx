// import React, { useState } from 'react';
// import { User, Mail, Lock, Truck, Package, MapPin, Trophy, Settings, LogOut } from 'lucide-react';

// const DeliveryGameApp = () => {
//   const [currentView, setCurrentView] = useState('auth'); // 'auth' or 'main'
//   const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   // Mock user data storage (in a real app, this would be handled by backend)
//   const [users, setUsers] = useState([
//     { id: 1, username: 'demo', email: 'demo@example.com', password: 'demo123', level: 5, deliveries: 47 }
//   ]);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const foundUser = users.find(u => 
//       u.username === formData.username && u.password === formData.password
//     );
    
//     if (foundUser) {
//       setUser(foundUser);
//       setCurrentView('main');
//       setFormData({ username: '', email: '', password: '', confirmPassword: '' });
//     } else {
//       alert('Invalid credentials! Try demo/demo123');
//     }
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
    
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
    
//     if (users.find(u => u.username === formData.username)) {
//       alert('Username already exists!');
//       return;
//     }
    
//     const newUser = {
//       id: users.length + 1,
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//       level: 1,
//       deliveries: 0
//     };
    
//     setUsers([...users, newUser]);
//     setUser(newUser);
//     setCurrentView('main');
//     setFormData({ username: '', email: '', password: '', confirmPassword: '' });
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setCurrentView('auth');
//     setFormData({ username: '', email: '', password: '', confirmPassword: '' });
//   };

//   const startGame = () => {
//     alert('Starting delivery simulator... (Game logic would go here)');
//   };

//   if (currentView === 'auth') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
//                 <Truck className="w-8 h-8 text-white" />
//               </div>
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">Delivery Simulator</h1>
//             <p className="text-white/70">Master the art of delivery</p>
//           </div>

//           <div className="flex mb-6 bg-white/10 rounded-lg p-1">
//             <button
//               onClick={() => setAuthMode('login')}
//               className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
//                 authMode === 'login'
//                   ? 'bg-white text-gray-900 shadow-lg'
//                   : 'text-white hover:bg-white/10'
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setAuthMode('register')}
//               className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
//                 authMode === 'register'
//                   ? 'bg-white text-gray-900 shadow-lg'
//                   : 'text-white hover:bg-white/10'
//               }`}
//             >
//               Register
//             </button>
//           </div>

//           <div className="space-y-4">
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 required
//               />
//             </div>

//             {authMode === 'register' && (
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             )}

//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 required
//               />
//             </div>

//             {authMode === 'register' && (
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             )}

//             <button
//               onClick={authMode === 'login' ? handleLogin : handleRegister}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
//             >
//               {authMode === 'login' ? 'Login' : 'Create Account'}
//             </button>
//           </div>

//           {authMode === 'login' && (
//             <div className="mt-4 text-center">
//               <p className="text-white/70 text-sm">
//                 Demo account: <span className="text-orange-400">demo / demo123</span>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
//       {/* Header */}
//       <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
//               <Truck className="w-6 h-6 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold text-white">Delivery Central</h1>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <p className="text-white font-semibold">{user.username}</p>
//               <p className="text-white/70 text-sm">Level {user.level} • {user.deliveries} deliveries</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500/20 hover:bg-red-500/30 text-white p-2 rounded-lg transition-colors"
//             >
//               <LogOut className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Game Actions */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
//               <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <button
//                   onClick={startGame}
//                   className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-200 shadow-lg"
//                 >
//                   <Package className="w-6 h-6" />
//                   <span>Start New Delivery</span>
//                 </button>
                
//                 <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-200 shadow-lg">
//                   <MapPin className="w-6 h-6" />
//                   <span>View Map</span>
//                 </button>
                
//                 <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-200 shadow-lg">
//                   <Trophy className="w-6 h-6" />
//                   <span>Achievements</span>
//                 </button>
                
//                 <button className="bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white p-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-200 shadow-lg">
//                   <Settings className="w-6 h-6" />
//                   <span>Settings</span>
//                 </button>
//               </div>
//             </div>

//             {/* Game Stats */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
//               <h2 className="text-2xl font-bold text-white mb-6">Your Stats</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="text-center">
//                   <div className="bg-orange-500/20 rounded-lg p-4 mb-2">
//                     <Package className="w-8 h-8 text-orange-400 mx-auto" />
//                   </div>
//                   <p className="text-2xl font-bold text-white">{user.deliveries}</p>
//                   <p className="text-white/70 text-sm">Total Deliveries</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="bg-green-500/20 rounded-lg p-4 mb-2">
//                     <Trophy className="w-8 h-8 text-green-400 mx-auto" />
//                   </div>
//                   <p className="text-2xl font-bold text-white">{user.level}</p>
//                   <p className="text-white/70 text-sm">Current Level</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="bg-blue-500/20 rounded-lg p-4 mb-2">
//                     <MapPin className="w-8 h-8 text-blue-400 mx-auto" />
//                   </div>
//                   <p className="text-2xl font-bold text-white">12</p>
//                   <p className="text-white/70 text-sm">Cities Unlocked</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="bg-purple-500/20 rounded-lg p-4 mb-2">
//                     <Truck className="w-8 h-8 text-purple-400 mx-auto" />
//                   </div>
//                   <p className="text-2xl font-bold text-white">3</p>
//                   <p className="text-white/70 text-sm">Vehicles Owned</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Recent Activity */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
//               <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                   <div>
//                     <p className="text-white text-sm">Delivered package to Downtown</p>
//                     <p className="text-white/50 text-xs">2 hours ago</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                   <div>
//                     <p className="text-white text-sm">Unlocked new vehicle</p>
//                     <p className="text-white/50 text-xs">1 day ago</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//                   <div>
//                     <p className="text-white text-sm">Reached Level {user.level}</p>
//                     <p className="text-white/50 text-xs">3 days ago</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Daily Challenges */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
//               <h3 className="text-xl font-bold text-white mb-4">Daily Challenges</h3>
//               <div className="space-y-3">
//                 <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
//                   <p className="text-yellow-400 font-medium text-sm">Speed Demon</p>
//                   <p className="text-white/70 text-xs">Complete 5 deliveries in under 30 minutes</p>
//                   <div className="mt-2 bg-white/10 rounded-full h-2">
//                     <div className="bg-yellow-400 h-2 rounded-full w-3/5"></div>
//                   </div>
//                 </div>
//                 <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
//                   <p className="text-blue-400 font-medium text-sm">Distance Master</p>
//                   <p className="text-white/70 text-xs">Travel 100km in total today</p>
//                   <div className="mt-2 bg-white/10 rounded-full h-2">
//                     <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DeliveryGameApp;