import React from 'react'
import './contact.css'
import Navbar from '../../Components/Navbar/navbar'

const contact = () => {
  return (
    <div className='contact'>
      {/* <Navbar/> */}
      Contact
    </div>
  )
}

export default contact






//--------------------npm install or uninstall framer-motion--------------

// import React from 'react';
// import { motion } from 'framer-motion';
// import './contact.css';

// const App = () => {
//   return (
//     <div className="container">
//       {/* Hero Section */}
//       <motion.section
//         className="hero"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Welcome to Scoops & Smiles
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Your favorite ice cream shop with a twist of joy!
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           Explore Menu
//         </motion.button>
//       </motion.section>

//       {/* Menu Section */}
//       <motion.section
//         className="menu"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>Our Menu</h2>
//         <div className="menu-items">
//           {['Vanilla Dream', 'Chocolate Bliss', 'Strawberry Swirl', 'Mint Magic'].map((item, index) => (
//             <motion.div
//               key={index}
//               className="menu-item"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3>{item}</h3>
//               <p>Delicious {item.toLowerCase()} ice  cream made with love.</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* About Section */}
//       <motion.section
//         className="about"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>About Us</h2>
//         <motion.p
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           At Scoops & Smiles, we believe in creating happiness one scoop at a time. Our ice cream is made from the finest ingredients, ensuring every bite is a moment of joy.
//         </motion.p>
//       </motion.section>

//       {/* Contact Section */}
//       <motion.section
//         className="contact"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>Contact Us</h2>
//         <motion.form
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </motion.section>
//     </div>
//   );
// };

// export default App;