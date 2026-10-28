// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { AboutData } from './AboutData';

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => {
//         console.log('API response:', res.data);
//         setAbout(res.data);
//       })
//       .catch((err) => {
//         console.error('API error:', err);
//       });
//   }, []);

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-gray-600 text-xl">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-start items-start p-10">
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex items-center space-x-6">
//         <img
//           src={`http://localhost:8000${about.photo}`}
//           alt={about.name}
//           className="w-20 h-20 rounded-full object-cover flex-shrink-0"
//         />
//         <div className="text-left">
//           <h1 className="text-2xl font-bold mb-1">{about.name}</h1>
//           <p className="text-gray-700 mb-4">{about.bio}</p>

//           <a
//             href={`http://localhost:8000${about.cv}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-6"
//           >
//             📄 Скачать CV
//           </a>

//           <div className="space-y-2 text-gray-700 text-sm">
//             <p>Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-600 hover:underline">{about.contacts.email}</a></p>
//             <p>Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{about.contacts.telegram}</a></p>
//             <p>GitHub: <a href={about.contacts.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{about.contacts.github}</a></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { AboutData } from './AboutData';


// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   const projects = [
//     {
//       title: 'VK Chatbot API',
//       description: 'Бэкенд-сервер для викторины во ВКонтакте с логикой и админкой.',
//       link: 'https://github.com/ahmedkashima/vk-quiz-api',
//     },
//     {
//       title: 'Викинги-экспедиции',
//       description: 'Django-приложение для историков с маршрутами и городами.',
//       link: 'https://github.com/ahmedkashima/vikings-expeditions',
//     },
//     {
//       title: 'Личный сайт',
//       description: 'React + Tailwind + Django API — то, что ты сейчас смотришь 👀',
//       link: 'https://github.com/ahmedkashima/deeppersonal',
//     },
//   ];
  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-10">
//       <header className="mb-12">
//         <h1 className="text-4xl font-bold">Привет, я {about.name} 👋</h1>
//         <p className="text-lg text-gray-300 mt-2">Full-stack разработчик | Python, Django, React, Flutter, Swift</p>
//       </header>

//       <main className="flex flex-col md:flex-row items-start md:items-center gap-10">
//         <img
//           src={`http://localhost:8000${about.photo}`}
//           alt="Профиль"
//           className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Обо мне</h2>
//           <p className="text-gray-300 mb-4 max-w-lg">{about.bio}</p>

//           <a
//             href={`http://localhost:8000${about.cv}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
//           >
//             📄 Скачать резюме
//           </a>

//           <div className="mt-6 space-y-2 text-sm">
//             <p>📧 Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-400 hover:underline">{about.contacts.email}</a></p>
//             <p>💬 Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} className="text-blue-400 hover:underline">{about.contacts.telegram}</a></p>
//             <p>💻 GitHub: <a href={about.contacts.github} className="text-blue-400 hover:underline">{about.contacts.github}</a></p>
//           </div>
//         </div>
//         <section className="mt-16">
//   <h2 className="text-2xl font-semibold mb-6">Проекты</h2>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {projects.map((project, index) => (
//       <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <p className="text-gray-300 mb-3">{project.description}</p>
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-400 hover:underline text-sm"
//         >
//           🔗 Открыть на GitHub
//         </a>
//       </div>
//     ))}
//   </div>
// </section>

//       </main>

//       <footer className="mt-20 text-gray-500 text-sm text-center">
//         &copy; {new Date().getFullYear()} {about.name}. Все права защищены.
//       </footer>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const sections = ['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Contact'];

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {sections.map((section) => (
//                 <a
//                   key={section}
//                   href={`#${section.toLowerCase()}`}
//                   className="text-gray-300 hover:text-white transition"
//                 >
//                   {section}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10">
//         {/* Home (заглушка) */}
//         <section id="home" className="mb-16">
//           <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
//           <p className="text-gray-300 max-w-2xl">
//             Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.
//           </p>
//         </section>

//         {/* About Me */}
//         <section id="about" className="mb-16">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>

//               <a
//                 href={`http://localhost:8000${about.cv}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
//               >
//                 📄 Скачать резюме
//               </a>

//               <div className="mt-6 space-y-2 text-sm">
//                 <p>📧 Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-400 hover:underline">{about.contacts.email}</a></p>
//                 <p>💬 Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} className="text-blue-400 hover:underline">{about.contacts.telegram}</a></p>
//                 <p>💻 GitHub: <a href={about.contacts.github} className="text-blue-400 hover:underline">{about.contacts.github}</a></p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* другие секции появятся позже */}
//       </div>
//     </>
//   );
// }

// export default App;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string; // новая строка для текста CV
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const sections = ['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Resume', 'Contact'];

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {sections.map((section) => (
//                 <a
//                   key={section}
//                   href={`#${section.toLowerCase()}`}
//                   className="text-gray-300 hover:text-white transition"
//                 >
//                   {section}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10 space-y-24">

//         <section id="home">
//           <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
//           <p className="text-gray-300 max-w-2xl">
//             Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.
//           </p>
//         </section>

// <section id="about" data-aos="fade-up" className="mb-16">
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>

//               <div className="mt-6 space-y-2 text-sm">
//                 <p>📧 Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-400 hover:underline">{about.contacts.email}</a></p>
//                 <p>💬 Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} className="text-blue-400 hover:underline">{about.contacts.telegram}</a></p>
//                 <p>💻 GitHub: <a href={about.contacts.github} className="text-blue-400 hover:underline">{about.contacts.github}</a></p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="experience" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Опыт работы</h2>
//           <ul className="space-y-4 text-gray-300 list-disc list-inside">
//             <li>2024 — Летняя стажировка по Django + React</li>
//             <li>2023 — Разработка Telegram-бота на Python + AIOHTTP</li>
//             <li>2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas</li>
//           </ul>
//         </section>

//         <section id="services" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Услуги</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             <li>🌐 Веб-разработка (React, Django)</li>
//             <li>📱 Мобильные приложения (Flutter, Swift)</li>
//             <li>🛠️ Интеграция API, VK-боты</li>
//             <li>📊 SQL-запросы, аналитика данных</li>
//           </ul>
//         </section>

//         <section id="portfolio" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Портфолио</h2>
//           <p className="text-gray-300 mb-4">Скоро здесь появятся мои лучшие проекты 👨‍💻</p>
//         </section>

//         <section id="resume" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Резюме</h2>
//           <p className="text-gray-300 whitespace-pre-line max-w-3xl">{about.cv_text}</p>
//         </section>

//         <section id="contact" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
//           <form className="space-y-4 max-w-xl">
//             <input type="text" placeholder="Ваше имя" className="w-full p-2 rounded bg-gray-700 text-white" />
//             <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
//             <textarea placeholder="Сообщение" className="w-full p-2 rounded bg-gray-700 text-white h-32" />
//             <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">Отправить</button>
//           </form>
//         </section>

//       </div>
//     </>
//   );
// }

// export default App;




// ru-en


// import Header from './components/Header';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);
// // ...внутри App()

//   const experienceItems = [
//     {
//       ru: '2024 — Летняя стажировка по Django + React',
//       en: '2024 — Summer internship: Django + React',
//     },
//     {
//       ru: '2023 — Разработка Telegram-бота на Python + AIOHTTP',
//       en: '2023 — Telegram bot development using Python + AIOHTTP',
//     },
//     {
//       ru: '2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas',
//       en: '2022 — Course project on reporting analysis with PostgreSQL and Pandas',
//     },
//   ];

//   const servicesItems = [
//     {
//       ru: '🌐 Веб-разработка (React, Django)',
//       en: '🌐 Web Development (React, Django)',
//     },
//     {
//       ru: '📱 Мобильные приложения (Flutter, Swift)',
//       en: '📱 Mobile Applications (Flutter, Swift)',
//     },
//     {
//       ru: '🛠️ Интеграция API, VK-боты',
//       en: '🛠️ API Integration, VK bots',
//     },
//     {
//       ru: '📊 SQL-запросы, аналитика данных',
//       en: '📊 SQL Queries, Data Analytics',
//     },
//   ];

//   const t = {
//     home: lang === 'ru' ? 'Домой' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About',
//     experience: lang === 'ru' ? 'Опыт работы' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Связаться со мной' : 'Contact',
//     welcome: lang === 'ru' ? 'Добро пожаловать!' : 'Welcome!',
//     intro: lang === 'ru' ? 'Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.' : 'This is my personal website. I am a full-stack developer experienced in Python, Django, React, Flutter, and more.',
//     soon: lang === 'ru' ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻' : 'Soon my best projects will appear here 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {Object.entries(t).slice(0, 7).map(([id, label]) => (
//                 <a
//                   key={id}
//                   href={`#${id}`}
//                   className="text-gray-300 hover:text-white transition"
//                 >
//                   {label}
//                 </a>
//               ))}
//               <button
//                 onClick={toggleLang}
//                 className="ml-4 px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
//               >
//                 {lang === 'ru' ? 'EN' : 'RU'}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10 space-y-24">

//         <section id="home">
//           <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
//           <p className="text-gray-300 max-w-2xl">{t.intro}</p>
//         </section>

//         <section id="about" data-aos="fade-up" className="mb-16">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>
//               <div className="mt-6 space-y-2 text-sm">
//                 <p>📧 Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-400 hover:underline">{about.contacts.email}</a></p>
//                 <p>💬 Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} className="text-blue-400 hover:underline">{about.contacts.telegram}</a></p>
//                 <p>💻 GitHub: <a href={about.contacts.github} className="text-blue-400 hover:underline">{about.contacts.github}</a></p>
//               </div>
//             </div>
//           </div>
//         </section>

//           <section id="experience" data-aos="fade-up">
//             <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
//             <ul className="space-y-4 text-gray-300 list-disc list-inside">
//               {experienceItems.map((item, idx) => (
//                 <li key={idx}>{item[lang]}</li>
//               ))}
//             </ul>
//         </section>


//           <section id="services" data-aos="fade-up">
//               <h2 className="text-3xl font-bold mb-4">{t.services}</h2>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//                 {servicesItems.map((item, idx) => (
//                   <li key={idx}>{item[lang]}</li>
//                 ))}
//               </ul>
//         </section>


//         <section id="portfolio" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.portfolio}</h2>
//           <p className="text-gray-300 mb-4">{t.soon}</p>
//         </section>

//         <section id="resume" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.resume}</h2>
//           <p className="text-gray-300 whitespace-pre-line max-w-3xl">{about.cv_text}</p>
//         </section>

//         <section id="contact" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
//           <form className="space-y-4 max-w-xl">
//             <input type="text" placeholder={t.name} className="w-full p-2 rounded bg-gray-700 text-white" />
//             <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
//             <textarea placeholder={t.message} className="w-full p-2 rounded bg-gray-700 text-white h-32" />
//             <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">{t.send}</button>
//           </form>
//         </section>

//       </div>
//     </>
//   );
// }

// export default App;



// import Header from './components/Header';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaTelegram, FaGithub, FaInstagram, FaVk, FaEnvelope } from 'react-icons/fa';


// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios.get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const experienceItems = [
//     {
//       ru: '2024 — Летняя стажировка по Django + React',
//       en: '2024 — Summer internship: Django + React',
//     },
//     {
//       ru: '2023 — Разработка Telegram-бота на Python + AIOHTTP',
//       en: '2023 — Telegram bot development using Python + AIOHTTP',
//     },
//     {
//       ru: '2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas',
//       en: '2022 — Course project on reporting analysis with PostgreSQL and Pandas',
//     },
//   ];

//   const servicesItems = [
//     {
//       ru: '🌐 Веб-разработка (React, Django)',
//       en: '🌐 Web Development (React, Django)',
//     },
//     {
//       ru: '📱 Мобильные приложения (Flutter, Swift)',
//       en: '📱 Mobile Applications (Flutter, Swift)',
//     },
//     {
//       ru: '🛠️ Интеграция API, VK-боты',
//       en: '🛠️ API Integration, VK bots',
//     },
//     {
//       ru: '📊 SQL-запросы, аналитика данных',
//       en: '📊 SQL Queries, Data Analytics',
//     },
//   ];

//   const t = {
//     home: lang === 'ru' ? 'Домой' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About me',
//     experience: lang === 'ru' ? 'Опыт работы' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Связаться со мной' : 'Contact',
//     welcome: lang === 'ru' ? 'Добро пожаловать!' : 'Welcome!',
//     intro: lang === 'ru'
//       ? 'Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.'
//       : 'This is my personal website. I am a full-stack developer experienced in Python, Django, React, Flutter, and more.',
//     soon: lang === 'ru' ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻' : 'Soon my best projects will appear here 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     resumeText: lang === 'ru'
//       ? `Я студент технического вуза, изучаю программирование и активно развиваюсь как full-stack разработчик. Мой опыт включает создание веб- и мобильных приложений, разработку Telegram-ботов, взаимодействие с API и базами данных. Я использую Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах.`
//       : `I am a technical university student and an aspiring full-stack developer. My experience includes building web and mobile applications, developing Telegram bots, working with APIs and databases. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects.`
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {Object.entries(t).slice(0, 7).map(([id, label]) => (
//                 <a
//                   key={id}
//                   href={`#${id}`}
//                   className="text-gray-300 hover:text-white transition"
//                 >
//                   {label}
//                 </a>
//               ))}
//               <button
//                 onClick={toggleLang}
//                 className="ml-4 px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
//               >
//                 {lang === 'ru' ? 'EN' : 'RU'}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10 space-y-24">

//         <section id="home">
//           <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
//           <p className="text-gray-300 max-w-2xl">{t.intro}</p>
//         </section>

//         <section id="about" data-aos="fade-up" className="mb-16">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>
//               <div className="mt-6 space-y-2 text-sm">
//                 <p>📧 Email: <a href={`mailto:${about.contacts.email}`} className="text-blue-400 hover:underline">{about.contacts.email}</a></p>
//                 <p>💬 Telegram: <a href={`https://t.me/${about.contacts.telegram.slice(1)}`} className="text-blue-400 hover:underline">{about.contacts.telegram}</a></p>
//                 <p>💻 GitHub: <a href={about.contacts.github} className="text-blue-400 hover:underline">{about.contacts.github}</a></p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="experience" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
//           <ul className="space-y-4 text-gray-300 list-disc list-inside">
//             {experienceItems.map((item, idx) => (
//               <li key={idx}>{item[lang]}</li>
//             ))}
//           </ul>
//         </section>

//         <section id="services" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.services}</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             {servicesItems.map((item, idx) => (
//               <li key={idx}>{item[lang]}</li>
//             ))}
//           </ul>
//         </section>

//         <section id="portfolio" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.portfolio}</h2>
//           <p className="text-gray-300 mb-4">{t.soon}</p>
//         </section>

//         <section id="resume" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.resume}</h2>
//           <p className="text-gray-300 whitespace-pre-line max-w-3xl">{t.resumeText}</p>
//         </section>

//         <section id="contact" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
//           <form className="space-y-4 max-w-xl">
//             <input type="text" placeholder={t.name} className="w-full p-2 rounded bg-gray-700 text-white" />
//             <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
//             <textarea placeholder={t.message} className="w-full p-2 rounded bg-gray-700 text-white h-32" />
//             <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">{t.send}</button>
//           </form>
//         </section>

//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useEffect, useState, createElement } from 'react';
// import axios from 'axios';
// import type { IconType } from 'react-icons';

// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
// } from 'react-icons/fa';

// // Компонент иконки соцсети
// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     title={title}
//     className="hover:text-blue-600 transition-colors"
//   >
//     <Icon className="text-2xl" />
//   </a>
// );

// // Интерфейс для About API
// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//     vk: string;
//     instagram: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios
//       .get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);
  

//   const experienceItems = [
//     // --- 2021 ---
//     {
//       ru: '2021 — Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: '2021 — Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       ru: '2021 — Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: '2021 — First steps with Django: routing, templates, and models',
//     },
//     {
//       ru: '2021 — Работа с базами данных: SQL-запросы и структура таблиц',
//       en: '2021 — Introduction to databases: SQL queries and table design',
//     },
//     {
//       ru: '2021 — Основы Linux и командной строки в учебной среде',
//       en: '2021 — Basic Linux and terminal usage in academic environment',
//     },
//     {
//       ru: '2021 — Учебные проекты на Django, PostgreSQL и Pandas',
//       en: '2021 — Academic projects with Django, PostgreSQL and Pandas',
//     },
  
//     // --- 2022 ---
//     {
//       ru: '2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas',
//       en: '2022 — Course project on reporting analysis with PostgreSQL and Pandas',
//     },
//     {
//       ru: '2022 — Фильтрация и построение SQL-запросов в рамках проекта по нечёткой логике',
//       en: '2022 — Fuzzy logic SQL querying and reporting system',
//     },
//     {
//       ru: '2022 — Изучение GIMP и написание скриптов на Script-Fu',
//       en: '2022 — GIMP scripting using Script-Fu for image editing',
//     },
//     {
//       ru: '2022 — Разработка визуальных скриптов SVG в Inkscape (многоуровневый дизайн)',
//       en: '2022 — SVG scripting in Inkscape: multi-layered vector design',
//     },
//     {
//       ru: '2022 — Django: формы, модели и административная панель в учебных проектах',
//       en: '2022 — Django: forms, models, and admin panel in academic projects',
//     },
  
//     // --- 2023 ---
//     {
//       ru: '2023 — Разработка Telegram-бота на Python + AIOHTTP',
//       en: '2023 — Telegram bot development using Python + AIOHTTP',
//     },
//     {
//       ru: '2023 — Интеграция с VK API и реализация чат-бота для викторин',
//       en: '2023 — VK API integration and quiz chatbot implementation',
//     },
//     {
//       ru: '2023 — Разработка мобильного приложения на Flutter и Swift',
//       en: '2023 — Mobile app development using Flutter and Swift',
//     },
//     {
//       ru: '2023 — Анализ использования диска и управление файлами в Linux',
//       en: '2023 — Disk usage analysis and file system management in Linux',
//     },
//     {
//       ru: '2023 — Работа с ACL, chmod, setgid и sticky-битами на Ubuntu/ALT Linux',
//       en: '2023 — Filesystem permissions and ACLs (chmod, setgid, sticky bits) on Ubuntu/ALT Linux',
//     },
  
//     // --- 2024 ---
//     {
//       ru: '2024 — Летняя стажировка по Django + React',
//       en: '2024 — Summer internship: Django + React',
//     },
//     {
//       ru: '2024 — Создание личного сайта-портфолио на React + Django',
//       en: '2024 — Built personal portfolio website using React + Django',
//     },
//     {
//       ru: '2024 — Разработка и деплой проекта с Docker Compose (frontend + backend)',
//       en: '2024 — Project development and deployment using Docker Compose (frontend + backend)',
//     },
//     {
//       ru: '2024 — Работа с виртуальными машинами и настройкой ALT Linux в VirtualBox',
//       en: '2024 — Virtual machine setup and ALT Linux configuration in VirtualBox',
//     },
//     {
//       ru: '2024 — Конфигурация Ubuntu серверов и SSH-доступа',
//       en: '2024 — Ubuntu server configuration and SSH access setup',
//     },
//     {
//       ru: '2024 — Обработка изображений с использованием GIMP (Script-Fu) и Inkscape (слои, SVG)',
//       en: '2024 — Image processing using GIMP (Script-Fu) and Inkscape (layers, SVG scripting)',
//     },
//     {
//       ru: '2024 — Создание видео с AI-озвучкой и генерацией изображений',
//       en: '2024 — Video creation using AI voice and image generation tools',
//     },
//     {
//       ru: '2024 — Работа с 3D-текстом и рендерингом в Blender',
//       en: '2024 — 3D text creation and rendering in Blender',
//     },
//     {
//       ru: '2024 — Настройка pgAdmin и взаимодействие с PostgreSQL в контейнерах',
//       en: '2024 — pgAdmin configuration and PostgreSQL container interaction',
//     },
//     {
//       ru: '2024 — Создание REST API и его тестирование в Postman и через curl',
//       en: '2024 — REST API development and testing using Postman and curl',
//     },
//     {
//       ru: '2024 — Работа с виртуальными окружениями Python (venv)',
//       en: '2024 — Managing Python environments using venv',
//     },
  
//     // --- 2025 ---
//     {
//       ru: '2025 — Разработка мобильного приложения на React Native с backend на Django',
//       en: '2025 — React Native mobile app development with Django backend',
//     },
    
//   ];
  

//   const servicesItems = [
//     {
//       ru: '🌐 Веб-разработка (React, Django)',
//       en: '🌐 Web Development (React, Django)',
//     },
//     {
//       ru: '📱 Мобильные приложения (Flutter, Swift)',
//       en: '📱 Mobile Applications (Flutter, Swift)',
//     },
//     {
//       ru: '🛠️ Интеграция API, VK-боты',
//       en: '🛠️ API Integration, VK bots',
//     },
//     {
//       ru: '📊 SQL-запросы, аналитика данных',
//       en: '📊 SQL Queries, Data Analytics',
//     },
//   ];

//   const skillsItems = [
//     { ru: '🐍 Python', en: '🐍 Python' },
//     { ru: '🌐 Django', en: '🌐 Django' },
//     { ru: '⚛️ React / React Native', en: '⚛️ React / React Native' },
//     { ru: '📱 Flutter, Swift', en: '📱 Flutter, Swift' },
//     { ru: '🗃️ PostgreSQL, SQL', en: '🗃️ PostgreSQL, SQL' },
//     { ru: '🐳 Docker, Docker Compose', en: '🐳 Docker, Docker Compose' },
//     { ru: '📊 Pandas, NumPy, Matplotlib', en: '📊 Pandas, NumPy, Matplotlib' },
//     { ru: '🧪 Jupyter Notebook', en: '🧪 Jupyter Notebook' },
//     { ru: '🔐 ACL, Linux CLI', en: '🔐 ACL, Linux CLI' },
//     { ru: '🧠 Git, GitHub, GitLab', en: '🧠 Git, GitHub, GitLab' },
//   ];
  

//   const t = {
//     home: lang === 'ru' ? 'Домой' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About me',
//     experience: lang === 'ru' ? 'Опыт работы' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     skillsItems: lang === 'ru' ? 'Навыки' : 'Skills',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Связаться со мной' : 'Contact',
//     welcome: lang === 'ru' ? 'Добро пожаловать!' : 'Welcome!',
//     intro:
//       lang === 'ru'
//         ? 'Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.'
//         : 'This is my personal website. I am a full-stack developer experienced in Python, Django, React, Flutter, and more.',
//     soon:
//       lang === 'ru'
//         ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻'
//         : 'Soon my best projects will appear here 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     resumeText:
//       lang === 'ru'
//         ? `Я студент технического вуза, изучаю программирование и активно развиваюсь как full-stack разработчик. Мой опыт включает создание веб- и мобильных приложений, разработку Telegram-ботов, взаимодействие с API и базами данных. Я использую Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах.`
//         : `I am a technical university student and an aspiring full-stack developer. My experience includes building web and mobile applications, developing Telegram bots, working with APIs and databases. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects.`,
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {Object.entries(t)
//                 .slice(0, 7)
//                 .map(([id, label]) => (
//                   <a
//                     key={id}
//                     href={`#${id}`}
//                     className="text-gray-300 hover:text-white transition"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               <button
//                 onClick={toggleLang}
//                 className="ml-4 px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
//               >
//                 {lang === 'ru' ? 'EN' : 'RU'}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10 space-y-24">
//         <section id="home">
//           <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
//           <p className="text-gray-300 max-w-2xl">{t.intro}</p>
//         </section>

//         <section id="about" data-aos="fade-up" className="mb-16">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>
//               <div className="mt-6 flex gap-4 text-2xl text-blue-400">
//                 <ContactIcon
//                   href={`mailto:${about.contacts.email}`}
//                   Icon={EmailIcon}
//                   title="Email"
//                 />
//                 <ContactIcon
//                   href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//                   Icon={TelegramIcon}
//                   title="Telegram"
//                 />
//                 <ContactIcon
//                   href={about.contacts.github}
//                   Icon={GithubIcon}
//                   title="GitHub"
//                 />
//                 <ContactIcon
//                   href={about.contacts.vk}
//                   Icon={VkIcon}
//                   title="VK"
//                 />
//                 <ContactIcon
//                   href={about.contacts.instagram}
//                   Icon={InstagramIcon}
//                   title="Instagram"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

       
//         <section id="services" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.services}</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             {servicesItems.map((item, idx) => (
//               <li key={idx}>{item[lang]}</li>
//             ))}
//           </ul>
//         </section>
//         <section id="skills" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">
//             {lang === 'ru' ? 'Профессиональные навыки' : 'Professional Skills'}
//           </h2>
//           <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
//             {skillsItems.map((item, index) => (
//               <li key={index}>{lang === 'ru' ? item.ru : item.en}</li>
//             ))}
//           </ul>
//         </section>


//         <section id="portfolio" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.portfolio}</h2>
//           <p className="text-gray-300 mb-4">{t.soon}</p>
//         </section>

//         <section id="resume" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.resume}</h2>
//           <p className="text-gray-300 whitespace-pre-line max-w-3xl">
//             {t.resumeText}
//           </p>
//         </section>
//         <section id="experience" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             {experienceItems.map((item, idx) => (
//               <div key={idx} className="bg-gray-800 p-4 rounded shadow">
//                 {lang === 'ru' ? item.ru : item.en}
//               </div>
//             ))}
//           </div>
//         </section>


//         <section id="contact" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
//           <form className="space-y-4 max-w-xl">
//             <input
//               type="text"
//               placeholder={t.name}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//             <textarea
//               placeholder={t.message}
//               className="w-full p-2 rounded bg-gray-700 text-white h-32"
//             />
//             <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
//               {t.send}
//             </button>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import type { IconType } from 'react-icons';
// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
//   FaStar,
//   FaWrench,
//   FaGraduationCap
// } from 'react-icons/fa';

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text?: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github?: string;
//     vk?: string;
//     instagram?: string;
//   };
// }

// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer" title={title}
//      className="hover:text-blue-500 transition-colors">
//     <Icon className="text-2xl" />
//   </a>
// );

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru'|'en'>('ru');
//   const toggleLang = () => setLang(prev => prev === 'ru' ? 'en' : 'ru');

//   useEffect(() => {
//     axios.get<AboutData>('/api/about/')
//       .then(res => setAbout(res.data))
//       .catch(console.error);
//   }, []);

//   const experienceItems = [
//     {
//       ru: '2021 — Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: '2021 — Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       ru: '2021 — Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: '2021 — First steps with Django: routing, templates, and models',
//     },
//     {
//       ru: '2021 — Работа с базами данных: SQL-запросы и структура таблиц',
//       en: '2021 — Introduction to databases: SQL queries and table design',
//     },
//     {
//       ru: '2021 — Основы Linux и командной строки в учебной среде',
//       en: '2021 — Basic Linux and terminal usage in academic environment',
//     },
//     {
//       ru: '2021 — Учебные проекты на Django, PostgreSQL и Pandas',
//       en: '2021 — Academic projects with Django, PostgreSQL and Pandas',
//     },
  
//     // --- 2022 ---
//     {
//       ru: '2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas',
//       en: '2022 — Course project on reporting analysis with PostgreSQL and Pandas',
//     },
//     {
//       ru: '2022 — Фильтрация и построение SQL-запросов в рамках проекта по нечёткой логике',
//       en: '2022 — Fuzzy logic SQL querying and reporting system',
//     },
//     {
//       ru: '2022 — Изучение GIMP и написание скриптов на Script-Fu',
//       en: '2022 — GIMP scripting using Script-Fu for image editing',
//     },
//     {
//       ru: '2022 — Разработка визуальных скриптов SVG в Inkscape (многоуровневый дизайн)',
//       en: '2022 — SVG scripting in Inkscape: multi-layered vector design',
//     },
//     {
//       ru: '2022 — Django: формы, модели и административная панель в учебных проектах',
//       en: '2022 — Django: forms, models, and admin panel in academic projects',
//     },
  
//     // --- 2023 ---
//     {
//       ru: '2023 — Разработка Telegram-бота на Python + AIOHTTP',
//       en: '2023 — Telegram bot development using Python + AIOHTTP',
//     },
//     {
//       ru: '2023 — Интеграция с VK API и реализация чат-бота для викторин',
//       en: '2023 — VK API integration and quiz chatbot implementation',
//     },
//     {
//       ru: '2023 — Разработка мобильного приложения на Flutter и Swift',
//       en: '2023 — Mobile app development using Flutter and Swift',
//     },
//     {
//       ru: '2023 — Анализ использования диска и управление файлами в Linux',
//       en: '2023 — Disk usage analysis and file system management in Linux',
//     },
//     {
//       ru: '2023 — Работа с ACL, chmod, setgid и sticky-битами на Ubuntu/ALT Linux',
//       en: '2023 — Filesystem permissions and ACLs (chmod, setgid, sticky bits) on Ubuntu/ALT Linux',
//     },
  
//     // --- 2024 ---
//     {
//       ru: '2024 — Летняя стажировка по Django + React',
//       en: '2024 — Summer internship: Django + React',
//     },
//     {
//       ru: '2024 — Создание личного сайта-портфолио на React + Django',
//       en: '2024 — Built personal portfolio website using React + Django',
//     },
//     {
//       ru: '2024 — Разработка и деплой проекта с Docker Compose (frontend + backend)',
//       en: '2024 — Project development and deployment using Docker Compose (frontend + backend)',
//     },
//     {
//       ru: '2024 — Работа с виртуальными машинами и настройкой ALT Linux в VirtualBox',
//       en: '2024 — Virtual machine setup and ALT Linux configuration in VirtualBox',
//     },
//     {
//       ru: '2024 — Конфигурация Ubuntu серверов и SSH-доступа',
//       en: '2024 — Ubuntu server configuration and SSH access setup',
//     },
//     {
//       ru: '2024 — Обработка изображений с использованием GIMP (Script-Fu) и Inkscape (слои, SVG)',
//       en: '2024 — Image processing using GIMP (Script-Fu) and Inkscape (layers, SVG scripting)',
//     },
//     {
//       ru: '2024 — Создание видео с AI-озвучкой и генерацией изображений',
//       en: '2024 — Video creation using AI voice and image generation tools',
//     },
//     {
//       ru: '2024 — Работа с 3D-текстом и рендерингом в Blender',
//       en: '2024 — 3D text creation and rendering in Blender',
//     },
//     {
//       ru: '2024 — Настройка pgAdmin и взаимодействие с PostgreSQL в контейнерах',
//       en: '2024 — pgAdmin configuration and PostgreSQL container interaction',
//     },
//     {
//       ru: '2024 — Создание REST API и его тестирование в Postman и через curl',
//       en: '2024 — REST API development and testing using Postman and curl',
//     },
//     {
//       ru: '2024 — Работа с виртуальными окружениями Python (venv)',
//       en: '2024 — Managing Python environments using venv',
//     },
  
//     // --- 2025 ---
//     {
//       ru: '2025 — Разработка мобильного приложения на React Native с backend на Django',
//       en: '2025 — React Native mobile app development with Django backend',
//     },
// ];

//   const servicesItems = [
//     { ru: '🌐 Веб‑разработка: React, Next.js, Django REST API', en: '🌐 Web development: React, Next.js, Django REST API' },
//     { ru: '📱 Мобильные приложения на Flutter, React Native и Swift', en: '📱 Mobile apps: Flutter, React Native, Swift' },
//     { ru: '🤖 Разработка Telegram/VK ботов с Python', en: '🤖 Telegram/VK bots development with Python' },
//     { ru: '🐳 Контейнеризация Docker/Docker Compose и деплой', en: '🐳 Docker/Docker Compose containerization & deployment' },
//     { ru: '🧩 Интеграция API, автоматизация и cron-задачи', en: '🧩 API integration, automation scripts & cron jobs' },
//     { ru: '📊 SQL‑аналитика: PostgreSQL, Pandas, Matplotlib', en: '📊 SQL analytics: PostgreSQL, Pandas, Matplotlib' },
//   ];

//   const skillsItems = [
//     '🐍 Python', '🌐 Django', '🗃️ PostgreSQL/SQL', '🧪 Pandas/Numpy',
//     '⚛️ React / React Native', '📱 Flutter / Swift', '🐳 Docker',
//     '🔐 Linux CLI & ACL', '🎨 GIMP/Ink​scape', '📈 REST / GraphQL'
//   ];

//   const t = {
//     home: lang==='ru'?'Главная':'Home',
//     about: lang==='ru'?'Обо мне':'About me',
//     experience: lang==='ru'?'Опыт':'Experience',
//     services: lang==='ru'?'Услуги':'Services',
//     skills: lang==='ru'?'Навыки':'Skills',
//     portfolio: lang==='ru'?'Портфолио':'Portfolio',
//     resume: lang==='ru'?'Резюме':'Resume',
//     contact: lang==='ru'?'Связаться':'Contact',
//     welcome: lang==='ru'?'Привет!':'Hello!',
//     intro: lang==='ru'
//       ? 'Я full‑stack разработчик с опытом в Python, Django, React, мобильных технологиях и автоматизации.'
//       : 'I’m a full‑stack developer experienced in Python, Django, React, mobile tech & automation.',
//     soon: lang==='ru'?'Скоро здесь будут проекты 👨‍💻':'Soon, my projects will appear 👨‍💻',
//     send: lang==='ru'?'Отправить':'Send',
//     name: lang==='ru'?'Введите имя':'Your name',
//     message: lang==='ru'?'Ваше сообщение':'Your message',
//     resumeText: lang==='ru'
//       ? 'Я студент, создаю веб‑ и мобильные приложения, ботов с Python и Django, работаю с контейнерами и базами данных. Стек: Python, Django, React, Flutter, Swift, PostgreSQL, Docker.'
//       : 'I’m a university student building web & mobile apps, bots with Python & Django, and working with containers & DBs. Stack: Python, Django, React, Flutter, Swift, PostgreSQL, Docker.'
//   };

//   if (!about) {
//     return <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//       <p className="text-white">Загрузка...</p></div>;
//   }

//   return <>
//     <header className="fixed top-0 w-full bg-gray-900 shadow z-50">
//       <nav className="max-w-5xl mx-auto p-4 flex justify-between items-center">
//         <div className="text-white font-bold text-xl">Ahmed Kashima</div>
//         <div className="space-x-4">
//           {[t.home,t.about,t.experience,t.services,t.skills,t.portfolio,t.resume,t.contact].map((nav,i)=>
//             <a key={i} href={`#${nav.toLowerCase()}`} className="text-gray-300 hover:text-white">{nav}</a>
//           )}
//           <button onClick={toggleLang} className="ml-4 px-2 py-1 bg-gray-700 rounded">{lang==='ru'?'EN':'RU'}</button>
//         </div>
//       </nav>
//     </header>

//     <main className="pt-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white space-y-32">
//       {/* Home */}
//       <section id="home" className="text-center pt-16">
//         <h1 className="text-5xl font-bold mb-4">{t.welcome}</h1>
//         <p className="text-gray-300 max-w-xl mx-auto">{t.intro}</p>
//       </section>

//       {/* About */}
//       <section id="about" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
//         <img src={`http://localhost:8000${about.photo}`} alt="Avatar"
//              className="w-36 h-36 rounded-full border-4 border-white"/>
//         <div>
//           <h2 className="text-3xl font-bold mb-2">{t.about}</h2>
//           <p className="text-gray-300">{about.bio}</p>
//           <div className="flex space-x-4 mt-4 text-blue-400">
//             <ContactIcon href={`mailto:${about.contacts.email}`} Icon={EmailIcon} title="Email"/>
//             <ContactIcon href={`https://t.me/${about.contacts.telegram.slice(1)}`} Icon={TelegramIcon} title="Telegram"/>
//             {about.contacts.github && <ContactIcon href={about.contacts.github} Icon={GithubIcon} title="GitHub"/>}
//             {about.contacts.vk && <ContactIcon href={about.contacts.vk} Icon={VkIcon} title="VK"/>}
//             {about.contacts.instagram && <ContactIcon href={about.contacts.instagram} Icon={InstagramIcon} title="Instagram"/>}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.services}</h2>
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {servicesItems.map((s,i)=>(
//             <li key={i} className="bg-gray-700 p-4 rounded shadow flex items-center gap-3 hover:bg-gray-600 transition">
//               <span className="text-xl">{lang==='ru'?s.ru:s.en}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Skills */}
//       <section id="skills" className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.skills}</h2>
//         <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
//           {skillsItems.map((skill,i)=><li key={i} className="bg-gray-700 p-3 rounded text-center">{skill}</li>)}
//         </ul>
//       </section>

//       {/* Portfolio */}
//       <section id="portfolio" className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.portfolio}</h2>
//         <p className="text-gray-300 mb-4">{t.intro}</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-gray-700 p-4 rounded shadow">
//             <h3 className="font-semibold mb-2">Full-stack portfolio site</h3>
//             <p>Пайтон и React, развернут на Docker, показывает мои проекты и резюме онлайн.</p>
//           </div>
//           <div className="bg-gray-700 p-4 rounded shadow">
//             <h3 className="font-semibold mb-2">Telegram/VK Chatbots</h3>
//             <p>Бот‑викторина на AIOHTTP + интеграция с VK API — демонстрация автоматизации и API‑интеграции.</p>
//           </div>
//           <div className="bg-gray-700 p-4 rounded shadow">
//             <h3 className="font-semibold mb-2">Mobile apps</h3>
//             <p>Разработка на Flutter, React Native и Swift — простые приложения для Android/iOS.</p>
//           </div>
//         </div>
//       </section>

//       {/* Resume */}
//       <section id="resume" className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.resume}</h2>
//         <p className="text-gray-300 whitespace-pre-line">{t.resumeText}</p>
//       </section>
//       {/* Experience */}
//       <section id="experience" className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.experience}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {experienceItems.map((e,i)=>{
//             const important = /интерн|бот|портфол|React|Docker/i.test(e.ru);
//             const academic = /курс|учеб|Linux|Script-Fu/i.test(e.ru);
//             const Icon = important ? FaStar : academic ? FaGraduationCap : FaWrench;
//             const color = important ? 'text-yellow-400' : academic ? 'text-green-400' : 'text-blue-400';
//             return <div key={i} className="bg-gray-700 p-4 rounded shadow flex items-start gap-3">
//               <Icon className={`mt-1 ${color}`} />
//               <p>{lang==='ru'?e.ru:e.en}</p>
//             </div>;
//           })}
//         </div>
//       </section>
      
//       {/* Contact */}
//       <section id="contact" className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder={t.name}
//                  className="w-full bg-gray-700 p-2 rounded"/>
//           <input type="email" placeholder="Email"
//                  className="w-full bg-gray-700 p-2 rounded"/>
//           <textarea placeholder={t.message}
//                     className="w-full bg-gray-700 p-2 h-32 rounded"/>
//           <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">{t.send}</button>
//         </form>
//       </section>
//     </main>
//   </>;
// }

// export default App;




/// workprfectly

// import React, { useEffect, useState, createElement } from 'react';
// import axios from 'axios';
// import type { IconType } from 'react-icons';

// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
// } from 'react-icons/fa';

// // Компонент иконки соцсети
// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     title={title}
//     className="hover:text-blue-600 transition-colors"
//   >
//     <Icon className="text-2xl" />
//   </a>
// );

// // Интерфейс для About API
// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//     vk: string;
//     instagram: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios
//       .get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
//   }, []);
  

//   const experienceItems = [
//     // --- 2021 ---
//     {
//       ru: '2021 — Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: '2021 — Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       ru: '2021 — Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: '2021 — First steps with Django: routing, templates, and models',
//     },
//     {
//       ru: '2021 — Работа с базами данных: SQL-запросы и структура таблиц',
//       en: '2021 — Introduction to databases: SQL queries and table design',
//     },
//     {
//       ru: '2021 — Основы Linux и командной строки в учебной среде',
//       en: '2021 — Basic Linux and terminal usage in academic environment',
//     },
//     {
//       ru: '2021 — Учебные проекты на Django, PostgreSQL и Pandas',
//       en: '2021 — Academic projects with Django, PostgreSQL and Pandas',
//     },
  
//     // --- 2022 ---
//     {
//       ru: '2022 — Курсовой проект по анализу отчетности с PostgreSQL и Pandas',
//       en: '2022 — Course project on reporting analysis with PostgreSQL and Pandas',
//     },
//     {
//       ru: '2022 — Фильтрация и построение SQL-запросов в рамках проекта по нечёткой логике',
//       en: '2022 — Fuzzy logic SQL querying and reporting system',
//     },
//     {
//       ru: '2022 — Изучение GIMP и написание скриптов на Script-Fu',
//       en: '2022 — GIMP scripting using Script-Fu for image editing',
//     },
//     {
//       ru: '2022 — Разработка визуальных скриптов SVG в Inkscape (многоуровневый дизайн)',
//       en: '2022 — SVG scripting in Inkscape: multi-layered vector design',
//     },
//     {
//       ru: '2022 — Django: формы, модели и административная панель в учебных проектах',
//       en: '2022 — Django: forms, models, and admin panel in academic projects',
//     },
  
//     // --- 2023 ---
//     {
//       ru: '2023 — Разработка Telegram-бота на Python + AIOHTTP',
//       en: '2023 — Telegram bot development using Python + AIOHTTP',
//     },
//     {
//       ru: '2023 — Интеграция с VK API и реализация чат-бота для викторин',
//       en: '2023 — VK API integration and quiz chatbot implementation',
//     },
//     {
//       ru: '2023 — Разработка мобильного приложения на Flutter и Swift',
//       en: '2023 — Mobile app development using Flutter and Swift',
//     },
//     {
//       ru: '2023 — Анализ использования диска и управление файлами в Linux',
//       en: '2023 — Disk usage analysis and file system management in Linux',
//     },
//     {
//       ru: '2023 — Работа с ACL, chmod, setgid и sticky-битами на Ubuntu/ALT Linux',
//       en: '2023 — Filesystem permissions and ACLs (chmod, setgid, sticky bits) on Ubuntu/ALT Linux',
//     },
  
//     // --- 2024 ---
//     {
//       ru: '2024 — Летняя стажировка по Django + React',
//       en: '2024 — Summer internship: Django + React',
//     },
//     {
//       ru: '2024 — Создание личного сайта-портфолио на React + Django',
//       en: '2024 — Built personal portfolio website using React + Django',
//     },
//     {
//       ru: '2024 — Разработка и деплой проекта с Docker Compose (frontend + backend)',
//       en: '2024 — Project development and deployment using Docker Compose (frontend + backend)',
//     },
//     {
//       ru: '2024 — Работа с виртуальными машинами и настройкой ALT Linux в VirtualBox',
//       en: '2024 — Virtual machine setup and ALT Linux configuration in VirtualBox',
//     },
//     {
//       ru: '2024 — Конфигурация Ubuntu серверов и SSH-доступа',
//       en: '2024 — Ubuntu server configuration and SSH access setup',
//     },
//     {
//       ru: '2024 — Обработка изображений с использованием GIMP (Script-Fu) и Inkscape (слои, SVG)',
//       en: '2024 — Image processing using GIMP (Script-Fu) and Inkscape (layers, SVG scripting)',
//     },
//     {
//       ru: '2024 — Создание видео с AI-озвучкой и генерацией изображений',
//       en: '2024 — Video creation using AI voice and image generation tools',
//     },
//     {
//       ru: '2024 — Работа с 3D-текстом и рендерингом в Blender',
//       en: '2024 — 3D text creation and rendering in Blender',
//     },
//     {
//       ru: '2024 — Настройка pgAdmin и взаимодействие с PostgreSQL в контейнерах',
//       en: '2024 — pgAdmin configuration and PostgreSQL container interaction',
//     },
//     {
//       ru: '2024 — Создание REST API и его тестирование в Postman и через curl',
//       en: '2024 — REST API development and testing using Postman and curl',
//     },
//     {
//       ru: '2024 — Работа с виртуальными окружениями Python (venv)',
//       en: '2024 — Managing Python environments using venv',
//     },
  
//     // --- 2025 ---
//     {
//       ru: '2025 — Разработка мобильного приложения на React Native с backend на Django',
//       en: '2025 — React Native mobile app development with Django backend',
//     },
    
//   ];
  

//   const servicesItems = [
//     {
//       ru: '🌐 Веб-разработка (React, Django)',
//       en: '🌐 Web Development (React, Django)',
//     },
//     {
//       ru: '📱 Мобильные приложения (Flutter, Swift)',
//       en: '📱 Mobile Applications (Flutter, Swift)',
//     },
//     {
//       ru: '🛠️ Интеграция API, VK-боты',
//       en: '🛠️ API Integration, VK bots',
//     },
//     {
//       ru: '📊 SQL-запросы, аналитика данных',
//       en: '📊 SQL Queries, Data Analytics',
//     },
//   ];

//   const skillsItems = [
//     { ru: '🐍 Python', en: '🐍 Python' },
//     { ru: '🌐 Django', en: '🌐 Django' },
//     { ru: '⚛️ React / React Native', en: '⚛️ React / React Native' },
//     { ru: '📱 Flutter, Swift', en: '📱 Flutter, Swift' },
//     { ru: '🗃️ PostgreSQL, SQL', en: '🗃️ PostgreSQL, SQL' },
//     { ru: '🐳 Docker, Docker Compose', en: '🐳 Docker, Docker Compose' },
//     { ru: '📊 Pandas, NumPy, Matplotlib', en: '📊 Pandas, NumPy, Matplotlib' },
//     { ru: '🧪 Jupyter Notebook', en: '🧪 Jupyter Notebook' },
//     { ru: '🔐 ACL, Linux CLI', en: '🔐 ACL, Linux CLI' },
//     { ru: '🧠 Git, GitHub, GitLab', en: '🧠 Git, GitHub, GitLab' },
//   ];
  

//   const t = {
//     home: lang === 'ru' ? 'Домой' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About me',
//     experience: lang === 'ru' ? 'Опыт работы' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     skillsItems: lang === 'ru' ? 'Навыки' : 'Skills',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Связаться со мной' : 'Contact',
//     welcome: lang === 'ru' ? 'Добро пожаловать!' : 'Welcome!',
//     intro:
//       lang === 'ru'
//         ? 'Это мой личный сайт. Я full-stack разработчик с опытом в Python, Django, React, Flutter и других технологиях.'
//         : 'This is my personal website. I am a full-stack developer experienced in Python, Django, React, Flutter, and more.',
//     soon:
//       lang === 'ru'
//         ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻'
//         : 'Soon my best projects will appear here 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     resumeText:
//       lang === 'ru'
//         ? `Я студент технического вуза, изучаю программирование и активно развиваюсь как full-stack разработчик. Мой опыт включает создание веб- и мобильных приложений, разработку Telegram-ботов, взаимодействие с API и базами данных. Я использую Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах.`
//         : `I am a technical university student and an aspiring full-stack developer. My experience includes building web and mobile applications, developing Telegram bots, working with APIs and databases. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects.`,
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <p className="text-white text-xl">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full bg-gray-900 shadow z-50">
//         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//             <div className="flex space-x-6">
//               {Object.entries(t)
//                 .slice(0, 7)
//                 .map(([id, label]) => (
//                   <a
//                     key={id}
//                     href={`#${id}`}
//                     className="text-gray-300 hover:text-white transition"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               <button
//                 onClick={toggleLang}
//                 className="ml-4 px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
//               >
//                 {lang === 'ru' ? 'EN' : 'RU'}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white pt-24 p-10 space-y-24">
//         <section id="home">
//           <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
//           <p className="text-gray-300 max-w-2xl">{t.intro}</p>
//         </section>

//         <section id="about" data-aos="fade-up" className="mb-16">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
//             <img
//               src={`http://localhost:8000${about.photo}`}
//               alt="Профиль"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
//               <p className="text-gray-300 mb-4 max-w-xl">{about.bio}</p>
//               <div className="mt-6 flex gap-4 text-2xl text-blue-400">
//                 <ContactIcon
//                   href={`mailto:${about.contacts.email}`}
//                   Icon={EmailIcon}
//                   title="Email"
//                 />
//                 <ContactIcon
//                   href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//                   Icon={TelegramIcon}
//                   title="Telegram"
//                 />
//                 <ContactIcon
//                   href={about.contacts.github}
//                   Icon={GithubIcon}
//                   title="GitHub"
//                 />
//                 <ContactIcon
//                   href={about.contacts.vk}
//                   Icon={VkIcon}
//                   title="VK"
//                 />
//                 <ContactIcon
//                   href={about.contacts.instagram}
//                   Icon={InstagramIcon}
//                   title="Instagram"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

       
//         <section id="services" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.services}</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             {servicesItems.map((item, idx) => (
//               <li key={idx}>{item[lang]}</li>
//             ))}
//           </ul>
//         </section>
//         <section id="skills" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">
//             {lang === 'ru' ? 'Профессиональные навыки' : 'Professional Skills'}
//           </h2>
//           <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
//             {skillsItems.map((item, index) => (
//               <li key={index}>{lang === 'ru' ? item.ru : item.en}</li>
//             ))}
//           </ul>
//         </section>


//         <section id="portfolio" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.portfolio}</h2>
//           <p className="text-gray-300 mb-4">{t.soon}</p>
//         </section>

//         <section id="resume" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.resume}</h2>
//           <p className="text-gray-300 whitespace-pre-line max-w-3xl">
//             {t.resumeText}
//           </p>
//         </section>
//         <section id="experience" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
//             {experienceItems.map((item, idx) => (
//               <div key={idx} className="bg-gray-800 p-4 rounded shadow">
//                 {lang === 'ru' ? item.ru : item.en}
//               </div>
//             ))}
//           </div>
//         </section>


//         <section id="contact" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
//           <form className="space-y-4 max-w-xl">
//             <input
//               type="text"
//               placeholder={t.name}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//             <textarea
//               placeholder={t.message}
//               className="w-full p-2 rounded bg-gray-700 text-white h-32"
//             />
//             <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
//               {t.send}
//             </button>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// }

// export default App;


// deepseek


//fullywork

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { IconType } from 'react-icons';
// import { motion } from 'framer-motion';
// import { FiDownload } from 'react-icons/fi';
// import { FaAward, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
// import { FiChevronRight } from 'react-icons/fi';

// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
//   FaLinkedin as LinkedinIcon,
// } from 'react-icons/fa';

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// // Component for social icons
// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <motion.a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     title={title}
//     className="hover:text-blue-400 transition-colors"
//     whileHover={{ y: -3 }}
//   >
//     <Icon className="text-2xl" />
//   </motion.a>
// );

// // Service card component
// const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
//   <motion.div 
//     className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all"
//     whileHover={{ y: -5 }}
//   >
//     <div className="text-blue-400 text-3xl mb-4">{icon}</div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-400">{description}</p>
//   </motion.div>
// );

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//     vk: string;
//     instagram: string;
//     linkedin?: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const [activeSection, setActiveSection] = useState('home');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios
//       .get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
    
//     // Intersection observer for active section
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     document.querySelectorAll('section').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const experienceItems = [
//     {
//       year: '2021',
//       ru: 'Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: 'Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       year: '2021',
//       ru: 'Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: 'First steps with Django: routing, templates, and models',
//     },
//     {
//       year: '2022',
//       ru: 'Создание API на Django REST Framework, тестирование Postman, реализация авторизации и обработки ошибок',
//       en: 'Built REST APIs using Django REST Framework, tested with Postman, implemented authentication and error handling',
//     },
//     {
//       year: '2022',
//       ru: 'Разработка интерфейсов с React, управление состоянием, интеграция с бэкендом через Axios',
//       en: 'Developed UI using React, state management, integrated backend via Axios',
//     },
//     {
//       year: '2022',
//       ru: 'Мобильная разработка с Flutter и Swift: создание интерфейсов и взаимодействие с API',
//       en: 'Mobile development using Flutter and Swift: UI building and API integration',
//     },
//     {
//       year: '2023',
//       ru: 'Развёртывание приложений в Docker, настройка docker-compose, работа с volume и сетью',
//       en: 'Deployed apps with Docker, configured docker-compose, handled volumes and networking',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с PostgreSQL и pgAdmin: проектирование схем, миграции, SQL-запросы',
//       en: 'Used PostgreSQL and pgAdmin: schema design, migrations, SQL queries',
//     },
//     {
//       year: '2023',
//       ru: 'Использование MinIO для хранения и доступа к медиафайлам, работа с AWS-совместимым API',
//       en: 'Used MinIO for media storage and access, integrated AWS-compatible API',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с Linux (Ubuntu, ALT), настройка прав доступа, ACL, sticky bit и setgid',
//       en: 'Worked with Linux (Ubuntu, ALT), configured permissions, ACLs, sticky bit, and setgid',
//     },
//     {
//       year: '2023',
//       ru: 'Создание Telegram-бота на Python с использованием AIOHTTP, поддержка вебхуков и асинхронной логики',
//       en: 'Built a Telegram bot using Python and AIOHTTP, supported webhooks and async logic',
//     },
//     {
//       year: '2023',
//       ru: 'Администрирование серверов на Ubuntu и ALT Linux: SSH, настройка служб, виртуализация в VirtualBox',
//       en: 'Managed servers on Ubuntu and ALT Linux: SSH, service configuration, VirtualBox virtualization',
//     },
//     {
//       year: '2024',
//       ru: 'Создание и администрирование сложных Django-приложений с разделением по ролям (пользователь, модератор, админ)',
//       en: 'Built and managed complex Django apps with role-based access (user, moderator, admin)',
//     },
//     {
//       year: '2024',
//       ru: 'Организация Viking-экспедиций: REST API, административная панель, защита маршрутов, фильтрация и поиск',
//       en: 'Organized Viking expeditions system: REST API, admin panel, route protection, filtering and search',
//     },
//     {
//       year: '2024',
//       ru: 'Интеграция с VK API, реализация бота-викторины, управление токенами и сессиями, cookie-защита',
//       en: 'Integrated with VK API, developed quiz bot, managed tokens and sessions with cookie protection',
//     },

//     {
//       year: '2024',
//       ru: 'Интеграция Django backend с Expo и React Native, получение QR-кода для запуска мобильного клиента',
//       en: 'Integrated Django backend with Expo and React Native, enabled QR-code generation for mobile launch',
//     },
//     {
//       year: '2024',
//       ru: 'Работа с графическими инструментами: создание визиток в Inkscape, использование Script-Fu в GIMP',
//       en: 'Worked with design tools: created business cards in Inkscape, used Script-Fu in GIMP',
//     },
//     {
//       year: '2025',
//       ru: 'Разработка веб-сайта-портфолио: анимации, адаптивная верстка, иконки, отображение опыта и навыков',
//       en: 'Built personal portfolio website: animations, responsive layout, icons, experience and skills display',
//     },
//     {
//       year: '2025',
//       ru: 'Анимации и пользовательские компоненты в React Native: кастомные переключатели языка, навигация, стилизация',
//       en: 'Implemented animations and custom components in React Native: language switchers, navigation, styling',
//     },
//     {
//       year: '2025',
//       ru: 'Исследование и создание AI-контента: работа с генерацией изображений и видео, управление визуальным стилем',
//       en: 'Explored AI content creation: worked with image and video generation, style control',
//     }
//   ];
  
  

//   const servicesItems = [
//     {
//       icon: <FaCode />,
//       title: lang === 'ru' ? 'Веб-разработка' : 'Web Development',
//       description: lang === 'ru' ? 'Современные веб-приложения на React и Django' : 'Modern web apps with React and Django',
//     },
//     {
//       icon: <FaMobileAlt />,
//       title: lang === 'ru' ? 'Мобильные приложения' : 'Mobile Apps',
//       description: lang === 'ru' ? 'Кроссплатформенные приложения на Flutter' : 'Cross-platform apps with Flutter',
//     },
//     {
//       icon: <FaServer />,
//       title: lang === 'ru' ? 'Бэкенд разработка' : 'Backend Development',
//       description: lang === 'ru' ? 'API, базы данных, микросервисы' : 'APIs, databases, microservices',
//     },
//     {
//       icon: <FaAward />,
//       title: lang === 'ru' ? 'Технические решения' : 'Technical Solutions',
//       description: lang === 'ru' ? 'Интеграции и автоматизация процессов' : 'Integrations and process automation',
//     },
//   ];

//   const skillsItems = [
//     { name: 'Python', level: 90 },
//     { name: 'Django', level: 85 },
//     { name: 'React', level: 80 },
//     { name: 'Flutter', level: 75 },
//     { name: 'Swift', level: 65 },
//     { name: 'JavaScript (JS)', level: 80 },
//     { name: 'TypeScript (TS)', level: 75 },
//     { name: 'PostgreSQL', level: 80 },
//     { name: 'pgAdmin', level: 70 },
//     { name: 'Docker', level: 70 },
//     { name: 'Git', level: 100 },
//     { name: 'Git', level: 100 },
//     { name: 'MinIO', level: 65 },
//     { name: 'Linux (ALT, Ubuntu)', level: 100 },
//     { name: 'ACL (Access Control Lists)', level: 70 },
//     { name: 'Jupyter Notebook', level: 85 },
//     { name: 'REST API / VK API', level: 80 },
//     { name: 'HTML/CSS', level: 70 },
//     { name: 'Virtual Environments (venv)', level: 85 },
//     { name: 'Nginx', level: 60 },
//     { name: 'Qlik Sense', level: 55 },
//   ];
  

//   const t = {
//     home: lang === 'ru' ? 'Главная' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About',
//     experience: lang === 'ru' ? 'Опыт' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     skills: lang === 'ru' ? 'Навыки' : 'Skills',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Контакты' : 'Contact',
//     welcome: lang === 'ru' ? 'Привет, я Ahmed Kashima' : 'Hi, I\'m Ahmed Kashima',
//     subtitle: lang === 'ru' ? 'Full-stack разработчик' : 'Full-stack Developer',
//     intro:
//       lang === 'ru'
//         ? 'Я создаю современные веб и мобильные приложения с акцентом на качество и производительность.'
//         : 'I build modern web and mobile applications with focus on quality and performance.',
//     soon:
//       lang === 'ru'
//         ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻'
//         : 'My best projects will appear here soon 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     downloadCv: lang === 'ru' ? 'Скачать CV' : 'Download CV',
//     resumeText:
//       lang === 'ru'
//         ? `Я студент технического вуза, изучаю программирование и активно развиваюсь как full-stack разработчик. Мой опыт включает создание веб- и мобильных приложений, разработку Telegram-ботов, взаимодействие с API и базами данных. Я использую Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах.`
//         : `I am a technical university student and an aspiring full-stack developer. My experience includes building web and mobile applications, developing Telegram bots, working with APIs and databases. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects.`,
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="animate-pulse flex space-x-4">
//           <div className="rounded-full bg-blue-400 h-12 w-12"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       {/* Floating language switcher */}
//       <motion.button
//         onClick={toggleLang}
//         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {lang === 'ru' ? 'EN' : 'RU'}
//       </motion.button>

//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
//   <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//       <div className="hidden md:flex space-x-6">
//         {/* Navigation links */}
//         {['home', 'about', 'skills', 'experience', 'services', 'portfolio', 'contact'].map((section) => (
//           <a
//             key={section}
//             href={`#${section}`}
//             className={`transition ${activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
//           >
//             {t[section as keyof typeof t]}
//           </a>
//         ))}
        
//         {/* Add the language switcher button here */}
//         <motion.button
//           onClick={toggleLang}
//           className="text-gray-300 hover:text-white transition"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {lang === 'ru' ? 'EN' : 'RU'}
//         </motion.button>
//       </div>
//     </div>
//   </nav>
// </header>

//       <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//               {t.welcome}
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">{t.subtitle}</h2>
//             <p className="text-xl text-gray-300 max-w-2xl mb-8">{t.intro}</p>
            
//             <div className="flex flex-wrap gap-4">
//               <motion.a
//                 href="#contact"
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.contact}
//                 <FiChevronRight className="ml-2" />
//               </motion.a>
              
//               <motion.a
//                 href="#"
//                 className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.downloadCv}
//                 <FiDownload className="ml-2" />
//               </motion.a>
//             </div>
//           </motion.div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-16">
//           <motion.div 
//             className="flex flex-col md:flex-row items-start gap-12"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             <motion.div variants={item} className="flex-shrink-0">
//               <div className="relative">
//                 <img
//                   src={`http://localhost:8000${about.photo}`}
//                   alt="Profile"
//                   className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-lg"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
//                   {lang === 'ru' ? 'Full-stack' : 'Full-stack'}
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div variants={item} className="flex-grow">
//               <h2 className="text-3xl font-bold mb-6">{t.about}</h2>
//               <p className="text-gray-300 mb-6 text-lg leading-relaxed">{about.bio}</p>
              
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Имя:' : 'Name:'}</h3>
//                   <p>Ahmed Kashima</p>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">Email:</h3>
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Телеграм:' : 'Telegram:'}</h3>
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">GitHub:</h3>
//                   <a 
//                     href={about.contacts.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.github.split('/').pop()}
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex gap-6 text-2xl">
//                 <ContactIcon
//                   href={`mailto:${about.contacts.email}`}
//                   Icon={EmailIcon}
//                   title="Email"
//                 />
//                 <ContactIcon
//                   href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//                   Icon={TelegramIcon}
//                   title="Telegram"
//                 />
//                 <ContactIcon
//                   href={about.contacts.github}
//                   Icon={GithubIcon}
//                   title="GitHub"
//                 />
//                 <ContactIcon
//                   href={about.contacts.vk}
//                   Icon={VkIcon}
//                   title="VK"
//                 />
//                 <ContactIcon
//                   href={about.contacts.instagram}
//                   Icon={InstagramIcon}
//                   title="Instagram"
//                 />
//                 {about.contacts.linkedin && (
//                   <ContactIcon
//                     href={about.contacts.linkedin}
//                     Icon={LinkedinIcon}
//                     title="LinkedIn"
//                   />
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">
//             {lang === 'ru' ? 'Мои навыки' : 'My Skills'}
//           </h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {skillsItems.map((skill, index) => (
//               <motion.div key={index} variants={item} className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="font-medium">{skill.name}</span>
//                   <span className="text-blue-400">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="bg-blue-600 h-2.5 rounded-full" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.experience}</h2>
          
//           <motion.div 
//             className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {experienceItems.map((exp, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={item}
//                 className="relative pl-8 md:pl-0"
//               >
//                 <div className="md:flex items-center mb-1">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md md:order-1 md:mx-auto">
//                     {exp.year}
//                   </div>
//                   <div className="md:flex-1 md:ml-4 md:mr-8 lg:mx-8">
//                     <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
//                       <p>{lang === 'ru' ? exp.ru : exp.en}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.services}</h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {servicesItems.map((service, idx) => (
//               <motion.div key={idx} variants={item}>
//                 <ServiceCard 
//                   icon={service.icon} 
//                   title={service.title} 
//                   description={service.description} 
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Portfolio Section */}
//         <section id="portfolio" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.portfolio}</h2>
//           <p className="text-center text-gray-400 text-xl">{t.soon}</p>
//         </section>

//         {/* Resume Section */}
//         <section id="resume" className="py-16">
//           <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
//             <h2 className="text-3xl font-bold mb-6">{t.resume}</h2>
//             <p className="text-gray-300 mb-6 leading-relaxed">{t.resumeText}</p>
//             <motion.a
//               href="#"
//               className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {t.downloadCv}
//               <FiDownload className="ml-2" />
//             </motion.a>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-4">
//                 {lang === 'ru' ? 'Свяжитесь со мной' : 'Get in Touch'}
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 {lang === 'ru' 
//                   ? 'Готов обсудить ваш проект или ответить на вопросы.' 
//                   : 'Ready to discuss your project or answer any questions.'}
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <EmailIcon className="text-blue-400 text-xl mr-4" />
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <TelegramIcon className="text-blue-400 text-xl mr-4" />
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.form
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium">
//                   {t.name}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.name}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2 text-sm font-medium">
//                   {t.message}
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.message}
//                 ></textarea>
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {t.send}
//               </motion.button>
//             </motion.form>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900/80 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center space-x-6 mb-6">
//             <ContactIcon
//               href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//               Icon={TelegramIcon}
//               title="Telegram"
//             />
//             <ContactIcon
//               href={about.contacts.github}
//               Icon={GithubIcon}
//               title="GitHub"
//             />
//             <ContactIcon
//               href={about.contacts.vk}
//               Icon={VkIcon}
//               title="VK"
//             />
//             <ContactIcon
//               href={about.contacts.instagram}
//               Icon={InstagramIcon}
//               title="Instagram"
//             />
//             {about.contacts.linkedin && (
//               <ContactIcon
//                 href={about.contacts.linkedin}
//                 Icon={LinkedinIcon}
//                 title="LinkedIn"
//               />
//             )}
//           </div>
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Ahmed Kashima. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;




// deepseek work 
// fullywork good

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { IconType } from 'react-icons';
// import { motion } from 'framer-motion';
// import { FiDownload } from 'react-icons/fi';
// import { FaAward, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
// import { FiChevronRight } from 'react-icons/fi';

// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
//   FaLinkedin as LinkedinIcon,
// } from 'react-icons/fa';

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// // Component for social icons
// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <motion.a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     title={title}
//     className="hover:text-blue-400 transition-colors"
//     whileHover={{ y: -3 }}
//   >
//     <Icon className="text-2xl" />
//   </motion.a>
// );

// // Service card component
// const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
//   <motion.div 
//     className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all"
//     whileHover={{ y: -5 }}
//   >
//     <div className="text-blue-400 text-3xl mb-4">{icon}</div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-400">{description}</p>
//   </motion.div>
// );

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//     vk: string;
//     instagram: string;
//     linkedin?: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const [activeSection, setActiveSection] = useState('home');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios
//       .get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
    
//     // Intersection observer for active section
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     document.querySelectorAll('section').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const experienceItems = [
//     {
//       year: '2021',
//       ru: 'Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: 'Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       year: '2021',
//       ru: 'Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: 'First steps with Django: routing, templates, and models',
//     },
//     {
//       year: '2022',
//       ru: 'Создание API на Django REST Framework, тестирование Postman, реализация авторизации и обработки ошибок',
//       en: 'Built REST APIs using Django REST Framework, tested with Postman, implemented authentication and error handling',
//     },
//     {
//       year: '2022',
//       ru: 'Разработка интерфейсов с React, управление состоянием, интеграция с бэкендом через Axios',
//       en: 'Developed UI using React, state management, integrated backend via Axios',
//     },
//     {
//       year: '2022',
//       ru: 'Мобильная разработка с Flutter и Swift: создание интерфейсов и взаимодействие с API',
//       en: 'Mobile development using Flutter and Swift: UI building and API integration',
//     },
//     {
//       year: '2023',
//       ru: 'Развёртывание приложений в Docker, настройка docker-compose, работа с volume и сетью',
//       en: 'Deployed apps with Docker, configured docker-compose, handled volumes and networking',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с PostgreSQL и pgAdmin: проектирование схем, миграции, SQL-запросы',
//       en: 'Used PostgreSQL and pgAdmin: schema design, migrations, SQL queries',
//     },
//     {
//       year: '2023',
//       ru: 'Использование MinIO для хранения и доступа к медиафайлам, работа с AWS-совместимым API',
//       en: 'Used MinIO for media storage and access, integrated AWS-compatible API',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с Linux (Ubuntu, ALT), настройка прав доступа, ACL, sticky bit и setgid',
//       en: 'Worked with Linux (Ubuntu, ALT), configured permissions, ACLs, sticky bit, and setgid',
//     },
//     {
//       year: '2023',
//       ru: 'Создание Telegram-бота на Python с использованием AIOHTTP, поддержка вебхуков и асинхронной логики',
//       en: 'Built a Telegram bot using Python and AIOHTTP, supported webhooks and async logic',
//     },
//     {
//       year: '2023',
//       ru: 'Администрирование серверов на Ubuntu и ALT Linux: SSH, настройка служб, виртуализация в VirtualBox',
//       en: 'Managed servers on Ubuntu and ALT Linux: SSH, service configuration, VirtualBox virtualization',
//     },
//     {
//       year: '2024',
//       ru: 'Создание и администрирование сложных Django-приложений с разделением по ролям (пользователь, модератор, админ)',
//       en: 'Built and managed complex Django apps with role-based access (user, moderator, admin)',
//     },
//     {
//       year: '2024',
//       ru: 'Организация Viking-экспедиций: REST API, административная панель, защита маршрутов, фильтрация и поиск',
//       en: 'Organized Viking expeditions system: REST API, admin panel, route protection, filtering and search',
//     },
//     {
//       year: '2024',
//       ru: 'Интеграция с VK API, реализация бота-викторины, управление токенами и сессиями, cookie-защита',
//       en: 'Integrated with VK API, developed quiz bot, managed tokens and sessions with cookie protection',
//     },

//     {
//       year: '2024',
//       ru: 'Интеграция Django backend с Expo и React Native, получение QR-кода для запуска мобильного клиента',
//       en: 'Integrated Django backend with Expo and React Native, enabled QR-code generation for mobile launch',
//     },
//     {
//       year: '2024',
//       ru: 'Работа с графическими инструментами: создание визиток в Inkscape, использование Script-Fu в GIMP',
//       en: 'Worked with design tools: created business cards in Inkscape, used Script-Fu in GIMP',
//     },
//     {
//       year: '2025',
//       ru: 'Разработка веб-сайта-портфолио: анимации, адаптивная верстка, иконки, отображение опыта и навыков',
//       en: 'Built personal portfolio website: animations, responsive layout, icons, experience and skills display',
//     },
//     {
//       year: '2025',
//       ru: 'Анимации и пользовательские компоненты в React Native: кастомные переключатели языка, навигация, стилизация',
//       en: 'Implemented animations and custom components in React Native: language switchers, navigation, styling',
//     },
//     {
//       year: '2025',
//       ru: 'Исследование и создание AI-контента: работа с генерацией изображений и видео, управление визуальным стилем',
//       en: 'Explored AI content creation: worked with image and video generation, style control',
//     }
//   ];
  
  

//   const servicesItems = [
//     {
//       icon: <FaCode />,
//       title: lang === 'ru' ? 'Веб-разработка' : 'Web Development',
//       description: lang === 'ru' ? 'Современные веб-приложения на React и Django' : 'Modern web apps with React and Django',
//     },
//     {
//       icon: <FaMobileAlt />,
//       title: lang === 'ru' ? 'Мобильные приложения' : 'Mobile Apps',
//       description: lang === 'ru' ? 'Кроссплатформенные приложения на Flutter' : 'Cross-platform apps with Flutter',
//     },
//     {
//       icon: <FaServer />,
//       title: lang === 'ru' ? 'Бэкенд разработка' : 'Backend Development',
//       description: lang === 'ru' ? 'API, базы данных, микросервисы' : 'APIs, databases, microservices',
//     },
//     {
//       icon: <FaAward />,
//       title: lang === 'ru' ? 'Технические решения' : 'Technical Solutions',
//       description: lang === 'ru' ? 'Интеграции и автоматизация процессов' : 'Integrations and process automation',
//     },
//   ];

//   const skillsItems = [
//     { name: 'Python', level: 90 },
//     { name: 'Django', level: 85 },
//     { name: 'React', level: 80 },
//     { name: 'Flutter', level: 75 },
//     { name: 'Swift', level: 65 },
//     { name: 'JavaScript (JS)', level: 80 },
//     { name: 'TypeScript (TS)', level: 75 },
//     { name: 'PostgreSQL', level: 80 },
//     { name: 'pgAdmin', level: 70 },
//     { name: 'Docker', level: 70 },
//     { name: 'Git', level: 100 },
//     { name: 'Git', level: 100 },
//     { name: 'MinIO', level: 65 },
//     { name: 'Linux (ALT, Ubuntu)', level: 100 },
//     { name: 'ACL (Access Control Lists)', level: 70 },
//     { name: 'Jupyter Notebook', level: 85 },
//     { name: 'REST API / VK API', level: 80 },
//     { name: 'HTML/CSS', level: 70 },
//     { name: 'Virtual Environments (venv)', level: 85 },
//     { name: 'Nginx', level: 60 },
//     { name: 'Qlik Sense', level: 55 },
//   ];
  

//   const t = {
//     home: lang === 'ru' ? 'Главная' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About',
//     experience: lang === 'ru' ? 'Опыт' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     skills: lang === 'ru' ? 'Навыки' : 'Skills',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Контакты' : 'Contact',
//     welcome: lang === 'ru' ? 'Привет, я Ahmed Kashima' : 'Hi, I\'m Ahmed Kashima',
//     subtitle: lang === 'ru' ? 'Full-stack разработчик' : 'Full-stack Developer',
//     intro:
//       lang === 'ru'
//         ? 'Я создаю современные веб и мобильные приложения с акцентом на качество и производительность.'
//         : 'I build modern web and mobile applications with focus on quality and performance.',
//     soon:
//       lang === 'ru'
//         ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻'
//         : 'My best projects will appear here soon 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     // downloadCv: lang === 'ru' ? 'Скачать CV' : 'Download CV',
//     resumeText:
//       lang === 'ru'
//         ?  `Я студент технического вуза и активно развиваюсь как full-stack разработчик. Мой опыт охватывает создание веб- и мобильных приложений, разработку Telegram- и VK-ботов, работу с REST API, авторизацией через cookie и защитой маршрутов. Я применяю Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах. Также имею опыт работы с ACL, MinIO, pgAdmin, Qlik Sense, настройкой прав доступа в Linux (setgid, sticky bit), тестированием API через Postman, использованием виртуальных окружений (venv) и деплоем с помощью Docker Compose. 

//         , интегрирую React Native с Expo и Django, работаю с QR-кодами для запуска мобильных приложений. Визуальный дизайн я реализую через Inkscape и GIMP (Script-Fu), а документацию перевожу с русского на арабский с транслитерацией. Также занимаюсь генерацией контента с использованием ИИ — создаю изображения, аватары и видео с управлением стилем. Уверенно работаю с виртуализацией (VirtualBox), SSH, и конфигурацией серверов Ubuntu и ALT Linux.`
        
//             : `I am a technical university student and a growing full-stack developer. My experience includes building web and mobile applications, creating Telegram and VK bots, working with REST APIs, cookie-based authentication, and route protection. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects. I also have experience with ACLs, MinIO, pgAdmin, Qlik Sense, Linux permissions configuration (setgid, sticky bit), API testing with Postman, managing virtual environments (venv), and deploying apps with Docker Compose. 
        
//         In addition, I build multilingual applications (Russian, Chinese), integrate React Native with Expo and Django, and generate QR codes for mobile client launch. I work with design tools like Inkscape and GIMP (Script-Fu), and translate documentation from Russian to Arabic with transliteration. I also explore AI content generation — creating images, avatars, and videos with visual style control. I am confident in virtualization (VirtualBox), SSH usage, and server configuration on Ubuntu and ALT Linux.`,
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="animate-pulse flex space-x-4">
//           <div className="rounded-full bg-blue-400 h-12 w-12"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       {/* Floating language switcher */}
//       <motion.button
//         onClick={toggleLang}
//         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {lang === 'ru' ? 'EN' : 'RU'}
//       </motion.button>

//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
//   <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//       <div className="hidden md:flex space-x-6">
//         {/* Navigation links */}
//         {['home', 'about', 'skills', 'experience', 'services', 'portfolio', 'contact'].map((section) => (
//           <a
//             key={section}
//             href={`#${section}`}
//             className={`transition ${activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
//           >
//             {t[section as keyof typeof t]}
//           </a>
//         ))}
        
//         {/* Add the language switcher button here */}
//         <motion.button
//           onClick={toggleLang}
//           className="text-gray-300 hover:text-white transition"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {lang === 'ru' ? 'EN' : 'RU'}
//         </motion.button>
//       </div>
//     </div>
//   </nav>
// </header>

//       <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//               {t.welcome}
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">{t.subtitle}</h2>
//             <p className="text-xl text-gray-300 max-w-2xl mb-8">{t.intro}</p>
            
//             <div className="flex flex-wrap gap-4">
//               <motion.a
//                 href="#contact"
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.contact}
//                 <FiChevronRight className="ml-2" />
//               </motion.a>
              
//               {/* <motion.a
//                 href="#"
//                 className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.downloadCv}
//                 <FiDownload className="ml-2" /> */}
//               {/* </motion.a> */}
//             </div>
//           </motion.div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-16">
//           <motion.div 
//             className="flex flex-col md:flex-row items-start gap-12"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             <motion.div variants={item} className="flex-shrink-0">
//               <div className="relative">
//                 <img
//                   src={`http://localhost:8000${about.photo}`}
//                   alt="Profile"
//                   className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-lg"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
//                   {lang === 'ru' ? 'Full-stack' : 'Full-stack'}
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div variants={item} className="flex-grow">
//               <h2 className="text-3xl font-bold mb-6">{t.about}</h2>
//               <p className="text-gray-300 mb-6 text-lg leading-relaxed">{about.bio}</p>
              
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Имя:' : 'Name:'}</h3>
//                   <p>Ahmed Kashima</p>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">Email:</h3>
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Телеграм:' : 'Telegram:'}</h3>
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">GitHub:</h3>
//                   <a 
//                     href={about.contacts.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.github.split('/').pop()}
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex gap-6 text-2xl">
//                 <ContactIcon
//                   href={`mailto:${about.contacts.email}`}
//                   Icon={EmailIcon}
//                   title="Email"
//                 />
//                 <ContactIcon
//                   href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//                   Icon={TelegramIcon}
//                   title="Telegram"
//                 />
//                 <ContactIcon
//                   href={about.contacts.github}
//                   Icon={GithubIcon}
//                   title="GitHub"
//                 />
//                 <ContactIcon
//                   href={about.contacts.vk}
//                   Icon={VkIcon}
//                   title="VK"
//                 />
//                 <ContactIcon
//                   href={about.contacts.instagram}
//                   Icon={InstagramIcon}
//                   title="Instagram"
//                 />
//                 {about.contacts.linkedin && (
//                   <ContactIcon
//                     href={about.contacts.linkedin}
//                     Icon={LinkedinIcon}
//                     title="LinkedIn"
//                   />
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">
//             {lang === 'ru' ? 'Мои навыки' : 'My Skills'}
//           </h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {skillsItems.map((skill, index) => (
//               <motion.div key={index} variants={item} className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="font-medium">{skill.name}</span>
//                   <span className="text-blue-400">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="bg-blue-600 h-2.5 rounded-full" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.experience}</h2>
          
//           <motion.div 
//             className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {experienceItems.map((exp, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={item}
//                 className="relative pl-8 md:pl-0"
//               >
//                 <div className="md:flex items-center mb-1">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md md:order-1 md:mx-auto">
//                     {exp.year}
//                   </div>
//                   <div className="md:flex-1 md:ml-4 md:mr-8 lg:mx-8">
//                     <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
//                       <p>{lang === 'ru' ? exp.ru : exp.en}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.services}</h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {servicesItems.map((service, idx) => (
//               <motion.div key={idx} variants={item}>
//                 <ServiceCard 
//                   icon={service.icon} 
//                   title={service.title} 
//                   description={service.description} 
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Portfolio Section */}
//         <section id="portfolio" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.portfolio}</h2>
//           <p className="text-center text-gray-400 text-xl">{t.soon}</p>
//         </section>

//         {/* Resume Section */}
//         <section id="resume" className="py-16">
//           <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
//             <h2 className="text-3xl font-bold mb-6">{t.resume}</h2>
//             <p className="text-gray-300 mb-6 leading-relaxed">{t.resumeText}</p>
//             {/* <motion.a
//               href="#"
//               className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {t.downloadCv}
//               <FiDownload className="ml-2" />
//             </motion.a> */}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-4">
//                 {lang === 'ru' ? 'Свяжитесь со мной' : 'Get in Touch'}
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 {lang === 'ru' 
//                   ? 'Готов обсудить ваш проект или ответить на вопросы.' 
//                   : 'Ready to discuss your project or answer any questions.'}
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <EmailIcon className="text-blue-400 text-xl mr-4" />
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <TelegramIcon className="text-blue-400 text-xl mr-4" />
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.form
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium">
//                   {t.name}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.name}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2 text-sm font-medium">
//                   {t.message}
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.message}
//                 ></textarea>
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {t.send}
//               </motion.button>
//             </motion.form>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900/80 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center space-x-6 mb-6">
//             <ContactIcon
//               href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//               Icon={TelegramIcon}
//               title="Telegram"
//             />
//             <ContactIcon
//               href={about.contacts.github}
//               Icon={GithubIcon}
//               title="GitHub"
//             />
//             <ContactIcon
//               href={about.contacts.vk}
//               Icon={VkIcon}
//               title="VK"
//             />
//             <ContactIcon
//               href={about.contacts.instagram}
//               Icon={InstagramIcon}
//               title="Instagram"
//             />
//             {about.contacts.linkedin && (
//               <ContactIcon
//                 href={about.contacts.linkedin}
//                 Icon={LinkedinIcon}
//                 title="LinkedIn"
//               />
//             )}
//           </div>
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Ahmed Kashima. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState, createElement} from 'react';
// import axios from 'axios';
// import { IconType } from 'react-icons';
// import { motion } from 'framer-motion';
// import { FiDownload } from 'react-icons/fi';
// import { FaAward, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
// import { FiChevronRight } from 'react-icons/fi';

// import {
//   FaTelegramPlane as TelegramIcon,
//   FaGithub as GithubIcon,
//   FaInstagram as InstagramIcon,
//   FaVk as VkIcon,
//   FaEnvelope as EmailIcon,
//   FaLinkedin as LinkedinIcon,
// } from 'react-icons/fa';

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// // Component for social icons
// const ContactIcon = ({
//   href,
//   Icon,
//   title,
// }: {
//   href: string;
//   Icon: IconType;
//   title: string;
// }) => (
//   <motion.a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     title={title}
//     className="hover:text-blue-400 transition-colors"
//     whileHover={{ y: -3 }}
//   >
//     <Icon className="text-2xl" />
//   </motion.a>
// );
// // Service card component
// const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
//   <motion.div 
//     className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all"
//     whileHover={{ y: -5 }}
//   >
//     <div className="text-blue-400 text-3xl mb-4">{icon}</div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-400">{description}</p>
//   </motion.div>
// );

// interface AboutData {
//   name: string;
//   bio: string;
//   photo: string;
//   cv_text: string;
//   contacts: {
//     email: string;
//     telegram: string;
//     github: string;
//     vk: string;
//     instagram: string;
//     linkedin?: string;
//   };
// }

// function App() {
//   const [about, setAbout] = useState<AboutData | null>(null);
//   const [lang, setLang] = useState<'ru' | 'en'>('ru');
//   const [activeSection, setActiveSection] = useState('home');
//   const toggleLang = () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));

//   useEffect(() => {
//     axios
//       .get('/api/about/')
//       .then((res) => setAbout(res.data))
//       .catch((err) => console.error(err));
    
//     // Intersection observer for active section
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     document.querySelectorAll('section').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const experienceItems = [
//     {
//       year: '2021',
//       ru: 'Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
//       en: 'Learned Python basics through mini-projects (CLI tools, parsing)',
//     },
//     {
//       year: '2021',
//       ru: 'Первые шаги с Django: маршрутизация, шаблоны и модели',
//       en: 'First steps with Django: routing, templates, and models',
//     },
//     {
//       year: '2022',
//       ru: 'Создание API на Django REST Framework, тестирование Postman, реализация авторизации и обработки ошибок',
//       en: 'Built REST APIs using Django REST Framework, tested with Postman, implemented authentication and error handling',
//     },
//     {
//       year: '2022',
//       ru: 'Разработка интерфейсов с React, управление состоянием, интеграция с бэкендом через Axios',
//       en: 'Developed UI using React, state management, integrated backend via Axios',
//     },
//     {
//       year: '2022',
//       ru: 'Мобильная разработка с Flutter и Swift: создание интерфейсов и взаимодействие с API',
//       en: 'Mobile development using Flutter and Swift: UI building and API integration',
//     },
//     {
//       year: '2023',
//       ru: 'Развёртывание приложений в Docker, настройка docker-compose, работа с volume и сетью',
//       en: 'Deployed apps with Docker, configured docker-compose, handled volumes and networking',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с PostgreSQL и pgAdmin: проектирование схем, миграции, SQL-запросы',
//       en: 'Used PostgreSQL and pgAdmin: schema design, migrations, SQL queries',
//     },
//     {
//       year: '2023',
//       ru: 'Использование MinIO для хранения и доступа к медиафайлам, работа с AWS-совместимым API',
//       en: 'Used MinIO for media storage and access, integrated AWS-compatible API',
//     },
//     {
//       year: '2023',
//       ru: 'Работа с Linux (Ubuntu, ALT), настройка прав доступа, ACL, sticky bit и setgid',
//       en: 'Worked with Linux (Ubuntu, ALT), configured permissions, ACLs, sticky bit, and setgid',
//     },
//     {
//       year: '2023',
//       ru: 'Создание Telegram-бота на Python с использованием AIOHTTP, поддержка вебхуков и асинхронной логики',
//       en: 'Built a Telegram bot using Python and AIOHTTP, supported webhooks and async logic',
//     },
//     {
//       year: '2023',
//       ru: 'Администрирование серверов на Ubuntu и ALT Linux: SSH, настройка служб, виртуализация в VirtualBox',
//       en: 'Managed servers on Ubuntu and ALT Linux: SSH, service configuration, VirtualBox virtualization',
//     },
//     {
//       year: '2024',
//       ru: 'Создание и администрирование сложных Django-приложений с разделением по ролям (пользователь, модератор, админ)',
//       en: 'Built and managed complex Django apps with role-based access (user, moderator, admin)',
//     },
//     {
//       year: '2024',
//       ru: 'Организация Viking-экспедиций: REST API, административная панель, защита маршрутов, фильтрация и поиск',
//       en: 'Organized Viking expeditions system: REST API, admin panel, route protection, filtering and search',
//     },
//     {
//       year: '2024',
//       ru: 'Интеграция с VK API, реализация бота-викторины, управление токенами и сессиями, cookie-защита',
//       en: 'Integrated with VK API, developed quiz bot, managed tokens and sessions with cookie protection',
//     },

//     {
//       year: '2024',
//       ru: 'Интеграция Django backend с Expo и React Native, получение QR-кода для запуска мобильного клиента',
//       en: 'Integrated Django backend with Expo and React Native, enabled QR-code generation for mobile launch',
//     },
//     {
//       year: '2024',
//       ru: 'Работа с графическими инструментами: создание визиток в Inkscape, использование Script-Fu в GIMP',
//       en: 'Worked with design tools: created business cards in Inkscape, used Script-Fu in GIMP',
//     },
//     {
//       year: '2025',
//       ru: 'Разработка веб-сайта-портфолио: анимации, адаптивная верстка, иконки, отображение опыта и навыков',
//       en: 'Built personal portfolio website: animations, responsive layout, icons, experience and skills display',
//     },
//     {
//       year: '2025',
//       ru: 'Анимации и пользовательские компоненты в React Native: кастомные переключатели языка, навигация, стилизация',
//       en: 'Implemented animations and custom components in React Native: language switchers, navigation, styling',
//     },
//     {
//       year: '2025',
//       ru: 'Исследование и создание AI-контента: работа с генерацией изображений и видео, управление визуальным стилем',
//       en: 'Explored AI content creation: worked with image and video generation, style control',
//     }
//   ];
  
  

//   const servicesItems = [
//     {
//       icon: <FaCode />,
//       title: lang === 'ru' ? 'Веб-разработка' : 'Web Development',
//       description: lang === 'ru' ? 'Современные веб-приложения на React и Django' : 'Modern web apps with React and Django',
//     },
//     {
//       icon: <FaMobileAlt />,
//       title: lang === 'ru' ? 'Мобильные приложения' : 'Mobile Apps',
//       description: lang === 'ru' ? 'Кроссплатформенные приложения на Flutter' : 'Cross-platform apps with Flutter',
//     },
//     {
//       icon: <FaServer />,
//       title: lang === 'ru' ? 'Бэкенд разработка' : 'Backend Development',
//       description: lang === 'ru' ? 'API, базы данных, микросервисы' : 'APIs, databases, microservices',
//     },
//     {
//       icon: <FaAward />,
//       title: lang === 'ru' ? 'Технические решения' : 'Technical Solutions',
//       description: lang === 'ru' ? 'Интеграции и автоматизация процессов' : 'Integrations and process automation',
//     },
//   ];

//   const skillsItems = [
//     { name: 'Python', level: 90 },
//     { name: 'Django', level: 85 },
//     { name: 'React', level: 80 },
//     { name: 'Flutter', level: 75 },
//     { name: 'Swift', level: 65 },
//     { name: 'JavaScript (JS)', level: 80 },
//     { name: 'TypeScript (TS)', level: 75 },
//     { name: 'PostgreSQL', level: 80 },
//     { name: 'pgAdmin', level: 70 },
//     { name: 'Docker', level: 70 },
//     { name: 'Git', level: 100 },
//     { name: 'GitHub', level: 100 },
//     { name: 'GitLab', level: 100 },
//     { name: 'MinIO', level: 65 },
//     { name: 'Linux (ALT, Ubuntu)', level: 100 },
//     { name: 'ACL (Access Control Lists)', level: 70 },
//     { name: 'Jupyter Notebook', level: 85 },
//     { name: 'REST API / VK API', level: 80 },
//     { name: 'HTML/CSS', level: 70 },
//     { name: 'Virtual Environments (venv)', level: 85 },
//     { name: 'Nginx', level: 60 },
//     { name: 'Qlik Sense', level: 55 },
//   ];
  

//   const t = {
//     home: lang === 'ru' ? 'Главная' : 'Home',
//     about: lang === 'ru' ? 'Обо мне' : 'About',
//     experience: lang === 'ru' ? 'Опыт' : 'Experience',
//     services: lang === 'ru' ? 'Услуги' : 'Services',
//     skills: lang === 'ru' ? 'Навыки' : 'Skills',
//     portfolio: lang === 'ru' ? 'Портфолио' : 'Portfolio',
//     resume: lang === 'ru' ? 'Резюме' : 'Resume',
//     contact: lang === 'ru' ? 'Контакты' : 'Contact',
//     welcome: lang === 'ru' ? 'Привет, я Ahmed Kashima' : 'Hi, I\'m Ahmed Kashima',
//     subtitle: lang === 'ru' ? 'Full-stack разработчик' : 'Full-stack Developer',
//     intro:
//       lang === 'ru'
//         ? 'Я создаю современные веб и мобильные приложения с акцентом на качество и производительность.'
//         : 'I build modern web and mobile applications with focus on quality and performance.',
//     soon:
//       lang === 'ru'
//         ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻'
//         : 'My best projects will appear here soon 👨‍💻',
//     send: lang === 'ru' ? 'Отправить' : 'Send',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     // downloadCv: lang === 'ru' ? 'Скачать CV' : 'Download CV',
//     resumeText:
//       lang === 'ru'
        // ?  `Я студент технического вуза и активно развиваюсь как full-stack разработчик. Мой опыт охватывает создание веб- и мобильных приложений, разработку Telegram- и VK-ботов, работу с REST API, авторизацией через cookie и защитой маршрутов. Я применяю Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах. Также имею опыт работы с ACL, MinIO, pgAdmin, Qlik Sense, настройкой прав доступа в Linux (setgid, sticky bit), тестированием API через Postman, использованием виртуальных окружений (venv) и деплоем с помощью Docker Compose. 

        // , интегрирую React Native с Expo и Django, работаю с QR-кодами для запуска мобильных приложений. Визуальный дизайн я реализую через Inkscape и GIMP (Script-Fu), а документацию перевожу с русского на арабский с транслитерацией. Также занимаюсь генерацией контента с использованием ИИ — создаю изображения, аватары и видео с управлением стилем. Уверенно работаю с виртуализацией (VirtualBox), SSH, и конфигурацией серверов Ubuntu и ALT Linux.`
        
        //     : `I am a technical university student and a growing full-stack developer. My experience includes building web and mobile applications, creating Telegram and VK bots, working with REST APIs, cookie-based authentication, and route protection. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects. I also have experience with ACLs, MinIO, pgAdmin, Qlik Sense, Linux permissions configuration (setgid, sticky bit), API testing with Postman, managing virtual environments (venv), and deploying apps with Docker Compose. 
        
        // In addition, I build multilingual applications (Russian, Chinese), integrate React Native with Expo and Django, and generate QR codes for mobile client launch. I work with design tools like Inkscape and GIMP (Script-Fu), and translate documentation from Russian to Arabic with transliteration. I also explore AI content generation — creating images, avatars, and videos with visual style control. I am confident in virtualization (VirtualBox), SSH usage, and server configuration on Ubuntu and ALT Linux.`,
//   };

//   if (!about) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="animate-pulse flex space-x-4">
//           <div className="rounded-full bg-blue-400 h-12 w-12"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       {/* Floating language switcher */}
//       <motion.button
//         onClick={toggleLang}
//         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {lang === 'ru' ? 'EN' : 'RU'}
//       </motion.button>

//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
//   <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="text-white text-xl font-bold">Ahmed Kashima</div>
//       <div className="hidden md:flex space-x-6">
//         {/* Navigation links */}
//         {['home', 'about', 'skills', 'experience', 'services', 'portfolio', 'contact'].map((section) => (
//           <a
//             key={section}
//             href={`#${section}`}
//             className={`transition ${activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
//           >
//             {t[section as keyof typeof t]}
//           </a>
//         ))}
        
//         {/* Add the language switcher button here */}
//         <motion.button
//           onClick={toggleLang}
//           className="text-gray-300 hover:text-white transition"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {lang === 'ru' ? 'EN' : 'RU'}
//         </motion.button>
//       </div>
//     </div>
//   </nav>
// </header>

//       <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//               {t.welcome}
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">{t.subtitle}</h2>
//             <p className="text-xl text-gray-300 max-w-2xl mb-8">{t.intro}</p>
            
//             <div className="flex flex-wrap gap-4">
//               <motion.a
//                 href="#contact"
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.contact}
//                 <FiChevronRight className="ml-2" />
//               </motion.a>
              
//               {/* <motion.a
//                 href="#"
//                 className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {t.downloadCv}
//                 <FiDownload className="ml-2" /> */}
//               {/* </motion.a> */}
//             </div>
//           </motion.div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-16">
//           <motion.div 
//             className="flex flex-col md:flex-row items-start gap-12"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             <motion.div variants={item} className="flex-shrink-0">
//               <div className="relative">
//                 <img
//                   src={`http://localhost:8000${about.photo}`}
//                   alt="Profile"
//                   className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-lg"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
//                   {lang === 'ru' ? 'Full-stack' : 'Full-stack'}
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div variants={item} className="flex-grow">
//               <h2 className="text-3xl font-bold mb-6">{t.about}</h2>
//               <p className="text-gray-300 mb-6 text-lg leading-relaxed">{about.bio}</p>
              
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Имя:' : 'Name:'}</h3>
//                   <p>Ahmed Kashima</p>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">Email:</h3>
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Телеграм:' : 'Telegram:'}</h3>
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="text-blue-400 font-medium">GitHub:</h3>
//                   <a 
//                     href={about.contacts.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.github.split('/').pop()}
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex gap-6 text-2xl">
//                 <ContactIcon
//                   href={`mailto:${about.contacts.email}`}
//                   Icon={EmailIcon}
//                   title="Email"
//                 />
//                 <ContactIcon
//                   href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//                   Icon={TelegramIcon}
//                   title="Telegram"
//                 />
//                 <ContactIcon
//                   href={about.contacts.github}
//                   Icon={GithubIcon}
//                   title="GitHub"
//                 />
//                 <ContactIcon
//                   href={about.contacts.vk}
//                   Icon={VkIcon}
//                   title="VK"
//                 />
//                 <ContactIcon
//                   href={about.contacts.instagram}
//                   Icon={InstagramIcon}
//                   title="Instagram"
//                 />
//                 {about.contacts.linkedin && (
//                   <ContactIcon
//                     href={about.contacts.linkedin}
//                     Icon={LinkedinIcon}
//                     title="LinkedIn"
//                   />
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">
//             {lang === 'ru' ? 'Мои навыки' : 'My Skills'}
//           </h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {skillsItems.map((skill, index) => (
//               <motion.div key={index} variants={item} className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="font-medium">{skill.name}</span>
//                   <span className="text-blue-400">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="bg-blue-600 h-2.5 rounded-full" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.experience}</h2>
          
//           <motion.div 
//             className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {experienceItems.map((exp, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={item}
//                 className="relative pl-8 md:pl-0"
//               >
//                 <div className="md:flex items-center mb-1">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md md:order-1 md:mx-auto">
//                     {exp.year}
//                   </div>
//                   <div className="md:flex-1 md:ml-4 md:mr-8 lg:mx-8">
//                     <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
//                       <p>{lang === 'ru' ? exp.ru : exp.en}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.services}</h2>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//           >
//             {servicesItems.map((service, idx) => (
//               <motion.div key={idx} variants={item}>
//                 <ServiceCard 
//                   icon={service.icon} 
//                   title={service.title} 
//                   description={service.description} 
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Portfolio Section */}
//         <section id="portfolio" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.portfolio}</h2>
//           <p className="text-center text-gray-400 text-xl">{t.soon}</p>
//         </section>

//         {/* Resume Section */}
//         <section id="resume" className="py-16">
//           <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
//             <h2 className="text-3xl font-bold mb-6">{t.resume}</h2>
//             <p className="text-gray-300 mb-6 leading-relaxed">{t.resumeText}</p>
//             {/* <motion.a
//               href="#"
//               className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {t.downloadCv}
//               <FiDownload className="ml-2" />
//             </motion.a> */}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16">
//           <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-4">
//                 {lang === 'ru' ? 'Свяжитесь со мной' : 'Get in Touch'}
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 {lang === 'ru' 
//                   ? 'Готов обсудить ваш проект или ответить на вопросы.' 
//                   : 'Ready to discuss your project or answer any questions.'}
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <EmailIcon className="text-blue-400 text-xl mr-4" />
//                   <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                     {about.contacts.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <TelegramIcon className="text-blue-400 text-xl mr-4" />
//                   <a 
//                     href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                   >
//                     {about.contacts.telegram}
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.form
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium">
//                   {t.name}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.name}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2 text-sm font-medium">
//                   {t.message}
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder={t.message}
//                 ></textarea>
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {t.send}
//               </motion.button>
//             </motion.form>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900/80 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center space-x-6 mb-6">
//             <ContactIcon
//               href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
//               Icon={TelegramIcon}
//               title="Telegram"
//             />
//             <ContactIcon
//               href={about.contacts.github}
//               Icon={GithubIcon}
//               title="GitHub"
//             />
//             <ContactIcon
//               href={about.contacts.vk}
//               Icon={VkIcon}
//               title="VK"
//             />
//             <ContactIcon
//               href={about.contacts.instagram}
//               Icon={InstagramIcon}
//               title="Instagram"
//             />
//             {about.contacts.linkedin && (
//               <ContactIcon
//                 href={about.contacts.linkedin}
//                 Icon={LinkedinIcon}
//                 title="LinkedIn"
//               />
//             )}
//           </div>
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Ahmed Kashima. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education/Education';



interface AboutData {
  name: string;
  bio: string;
  photo: string;
  contacts: {
    email: string;
    telegram: string;
    github: string;
    vk: string;
    instagram: string;
    linkedin?: string;
  };
}

function App() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/about/`)
    // const apiUrl = process.env.REACT_APP_API_URL || ''; // Fallback to proxy in dev
    // axios.get(`${apiUrl}/api/about/`)
    axios.get(`${process.env.PUBLIC_URL}/about.json`)
      .then((res) => setAbout(res.data))
      .catch((err) => {
        console.error(err);
        setAbout({
          name: "Ahmed Kashima",
          bio: "Full-Stack Developer passionate about Python, Django, React, and creating modern web & mobile applications.",
          photo: "/media/profile.png",
          contacts: {
            email: "kashimaahmed@gmail.com",
            telegram: "@kashimaahmed",
            github: "https://github.com/ahmedkashima",
            vk: "https://vk.com/kashimaa",
            instagram: "https://www.instagram.com/ahmed.kashima.3o2/"
          }
        });
      });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (!about) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-blue-400 h-12 w-12"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
<Header 
  lang={lang} 
  activeSection={activeSection} 
  setLang={setLang} 
/>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
        <Hero lang={lang} />
        <About about={about} lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <Resume lang={lang} />
        <Education lang={lang} />

        <Contact about={about} lang={lang} />
      </main>

      <Footer about={about} lang={lang} />
    </div>
  );
}

export default App;