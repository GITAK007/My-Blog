//------ Default UI blog

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import logo from './assets/images/logo'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// ---> 2nd UI blog home 
//  My modification code 
// import React from 'react';
// import home from './pages/home';
// import Header from './components/Header';

// const BlogLayout = () => {
//   const samplePosts = [
//     {
//       id: 1,
//       title: "Getting Started with React",
//       excerpt: "Learn the basics of React and how to create your first component.",
//       date: "2024-12-30",
//       author: "AK"
//     },
//     {
//       id: 2,
//       title: "Understanding Hooks",
//       excerpt: "Deep dive into React Hooks and their practical applications.",
//       date: "2024-12-30",
//       author: "Deep"
//     }
//   ];

//   return (
//     <div className="w-screen min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-6xl mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>
//             <h2 className="text-2xl font-plain text-gray-700 items-right px-6" >Home</h2>

//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//               New Post
//             </button>

//           </div>
//         </div>
//       </nav>

//       <main className="max-w-6xl mx-auto px-4 py-8">
//         <div className="grid gap-6">
//           {samplePosts.map((post) => (
//             <article 
//               key={post.id} 
//               className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {post.title}
//               </h2>
//               <p className="text-gray-600 mb-4">{post.excerpt}</p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span>{post.author}</span>
//                 <span>{new Date(post.date).toLocaleDateString()}</span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BlogLayout;


// 3rd UI Blog Home

