// import React, { useState } from 'react';
// import axios from 'axios'; // Don't forget to import axios
// import { Form } from './components/Form'; // Ensure the Form component is used if needed
// import { data } from 'autoprefixer';

// export default function Login() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const loginFetch = axios.create({
//     baseURL: 'https://sonil-dev.void.co.mz/api/v4/users',  // Replace with the actual API URL
//   });

//   const handleLogin = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await loginFetch.post('/login', {
//         username: 'alexandre.coelho@ubi.co.mz',
//         password: 'ubidev987',
//       });

//       // Handle successful response
//       console.log(response.data);
//       localStorage.setItem(response.data.)
//       // Redirect or update state after login success
//     } catch (err) {
//       // Handle error
//       setError('Login failed. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-zinc-900 w-full h-screen flex justify-center items-center">
//       <div className="text-white">
//         {/* You can place the Form component here if you need it */}
//         <Form />
        
//         {/* Login Button */}
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
        
//         {/* Error message */}
//         {error && (
//           <p className="text-red-500 mt-2">{error}</p>
//         )}
//       </div>
//     </div>
//   );
// }
