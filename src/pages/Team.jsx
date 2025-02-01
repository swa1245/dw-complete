// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Team = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: 'John Anderson',
//       role: 'CEO & Founder',
//       bio: 'Visionary leader with 15+ years of experience in technology innovation and business strategy.',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//     {
//       name: 'Sarah Mitchell',
//       role: 'CTO',
//       bio: 'Tech expert specializing in AI and machine learning, leading our technical innovations.',
//       image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//     {
//       name: 'David Chen',
//       role: 'Lead Developer',
//       bio: 'Full-stack developer with expertise in React and Node.js, driving our technical excellence.',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Design Director',
//       bio: 'Creative director with a passion for user-centered design and brand innovation.',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//     {
//       name: 'Michael Kim',
//       role: 'Product Manager',
//       bio: 'Strategic product leader focusing on user experience and market-driven solutions.',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//     {
//       name: 'Lisa Thompson',
//       role: 'Marketing Director',
//       bio: 'Digital marketing strategist with expertise in growth and brand development.',
//       image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&h=800&fit=crop',
//       social: {
//         linkedin: '#',
//         twitter: '#',
//       },
//     },
//   ];

//   return (
//     <div className="min-h-screen w-screen  bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10" />
//         <div className="container-custom pt-32 pb-20">
//           <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
//               Meet Our Team
//             </h1>
//             <p className="text-dark-100 text-lg">
//               A diverse group of passionate individuals dedicated to innovation and excellence.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Team Grid */}
//       <div className="container-custom py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.name}
//               className="group relative"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-dark-800/80 via-dark-800/40 to-dark-800/80 backdrop-blur-sm border border-dark-700/50 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="aspect-w-3 aspect-h-4">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                 </div>
//                 <div className="relative p-6 z-10">
//                   <h3 className="text-2xl font-semibold text-white mb-1 transform transition-all duration-300 group-hover:translate-y-[-8px] group-hover:text-primary-400 line-clamp-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-primary-400 mb-4 transform transition-all duration-300 group-hover:translate-y-[-8px]">
//                     {member.role}
//                   </p>
//                   <p className="text-dark-100 mb-6 transform transition-all duration-300 group-hover:translate-y-[-8px] group-hover:text-dark-50 line-clamp-3">
//                     {member.bio}
//                   </p>
//                   <div className="flex gap-4 transform transition-all duration-300 group-hover:translate-y-[-8px]">
//                     <a
//                       href={member.social.linkedin}
//                       className="p-2 rounded-full bg-dark-900/80 text-primary-400 hover:bg-dark-950 hover:text-primary-300 transition-all duration-300 border border-primary-500/20 backdrop-blur-sm"
//                       aria-label="LinkedIn Profile"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                       </svg>
//                     </a>
//                     <a
//                       href={member.social.twitter}
//                       className="p-2 rounded-full bg-dark-900/80 text-primary-400 hover:bg-dark-950 hover:text-primary-300 transition-all duration-300 border border-primary-500/20 backdrop-blur-sm"
//                       aria-label="Twitter Profile"
//                     >
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
