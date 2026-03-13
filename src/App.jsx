// export default function CyberHiveWebsite() {
//   return (
//     <div className="w-full min-h-screen text-white bg-gradient-to-br from-[#05071a] via-[#0b0f35] to-[#200a3a] font-sans scroll-smooth">

//       {/* NAVBAR */}
//       <div className="w-full flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur sticky top-0 bg-[#05071a]/80 z-50">
//         <div className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
//           CYBER HIVE
//         </div>

//         <div className="hidden md:flex gap-8 text-sm opacity-90 font-semibold">
//           <a href="#home" className="hover:text-pink-400">Home</a>
//           <a href="#services" className="hover:text-pink-400">Courses</a>
//           <a href="#bootcamp" className="hover:text-pink-400">Bootcamp</a>
//           <a href="#contact" className="hover:text-pink-400">Contact</a>
//         </div>
//       </div>

//       {/* HERO SECTION */}
//       <section id="home" className="px-8 md:px-20 py-24 text-center">

//         <h1 className="text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
//           Build Your Digital Future
//         </h1>

//         <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-80">
//           CYBER HIVE provides professional website development, modern
//           digital design services and practical computer training
//           programs for students, entrepreneurs and businesses.
//         </p>

//         <div className="flex justify-center gap-6 mt-10 flex-wrap">
//           <a href="#services" className="px-8 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg">
//             Explore Courses
//           </a>

//           <a href="#bootcamp" className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg">
//             View Bootcamp
//           </a>
//         </div>

//         <div className="mt-16 flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//             className="rounded-2xl shadow-2xl w-full max-w-4xl"
//             alt="coding workspace"
//           />
//         </div>

//       </section>

//       {/* COURSES SECTION */}
//       <section id="services" className="px-8 md:px-20 py-20">

//         <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//           Technology Courses & Training
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
//             <h3 className="text-xl font-bold mb-4">💻 Programming Courses</h3>
//             <ul className="space-y-2 opacity-90">
//               <li>🟨 JavaScript (2 Months)</li>
//               <li>🐍 Python (2 Months)</li>
//               <li>☕ Java (2 Months)</li>
//               <li>🔷 .NET C# (2 Months)</li>
//             </ul>

//             <div className="mt-4 pt-4 border-t border-white/20">
//               <p className="font-semibold mb-2">📦 Bundled Program</p>
//               <p className="text-sm opacity-90">JavaScript + Python + Java</p>
//               <p className="text-sm opacity-80">Duration: 3 Months</p>
//             </div>
//           </div>

//           <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
//             <h3 className="text-xl font-bold mb-4">🚀 Advanced Specialized Programs</h3>
//             <ul className="space-y-2 opacity-90">
//               <li>☁️ Cloud Computing – AWS (2 Months)</li>
//               <li>🐧 Linux Operating System (2 Months)</li>
//               <li>🤖 Fundamentals of Artificial Intelligence</li>
//               <li>🌐 Web Development (3 Months)</li>
//               <li>⚙️ DevOps (2 Months)</li>
//               <li>📱 Android App Developer – Kotlin</li>
//             </ul>
//           </div>

//           <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
//             <h3 className="text-xl font-bold mb-4">🎨 Design & Media</h3>
//             <ul className="space-y-2 opacity-90">
//               <li>🎨 Graphic Design</li>
//               <li>🖌 Photoshop Basics</li>
//               <li>📰 Poster & Banner Design</li>
//               <li>📱 Social Media Graphics</li>
//             </ul>
//           </div>

//           <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
//             <h3 className="text-xl font-bold mb-4">🖥 Computer Fundamentals</h3>
//             <ul className="space-y-2 opacity-90">
//               <li>🧠 Computer Basics</li>
//               <li>🌐 Internet & Email Skills</li>
//               <li>📊 Office Applications</li>
//               <li>⚡ Digital Productivity</li>
//             </ul>
//           </div>

//         </div>

//         <div className="flex justify-center mt-16">
//           <img
//             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
//             className="rounded-2xl shadow-2xl max-w-4xl w-full"
//             alt="students learning computers"
//           />
//         </div>

//       </section>

//       {/* 8 WEEK BOOTCAMP */}
//       <section id="bootcamp" className="px-8 md:px-20 py-24">

//         <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//           8-Week Technology Explorer Bootcamp
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">🚀 Week 1 — Fundamentals of Computer Science</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Computer science overview and applications</li>
//               <li>CPU, memory, storage and I/O devices</li>
//               <li>Binary numbers, bits, bytes and encoding</li>
//               <li>Operating systems fundamentals</li>
//               <li>Programming concepts: variables, loops, conditions</li>
//               <li>Basics of computer networking & internet</li>
//               <li>Hardware vs software</li>
//               <li>Fields: AI, cybersecurity, data science, web development</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">🌐 Week 2 — Web Foundations & JavaScript</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Internet basics: DNS, HTTP/HTTPS, servers</li>
//               <li>HTML document structure & semantic elements</li>
//               <li>Modern CSS: Flexbox, Grid, responsive design</li>
//               <li>JavaScript fundamentals</li>
//               <li>DOM manipulation & dynamic UI</li>
//               <li>Overview of modern frameworks like React</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">🐍 Week 3 — Python Programming</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Python syntax and readability principles</li>
//               <li>Variables, data types and operators</li>
//               <li>Control flow: if statements and loops</li>
//               <li>Functions and modular programming</li>
//               <li>Python ecosystems: AI, Data Science, Web</li>
//               <li>Example automation script</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">☕ Week 4 — Java & Software Engineering</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Java architecture and JVM</li>
//               <li>Object-Oriented Programming concepts</li>
//               <li>Classes, objects and methods</li>
//               <li>Backend frameworks like Spring Boot</li>
//               <li>Building scalable enterprise apps</li>
//               <li>Java in fintech, enterprise and Android</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">🐧 Week 5 — Linux & Development Environment</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Linux architecture & open-source ecosystem</li>
//               <li>Terminal navigation & shell basics</li>
//               <li>File system hierarchy & permissions</li>
//               <li>Developer commands: grep, ssh, curl</li>
//               <li>Package managers and tooling</li>
//               <li>Linux in cloud infrastructure</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">☁️ Week 6 — Cloud Computing</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>Cloud architecture & virtualization</li>
//               <li>Compute, storage and networking</li>
//               <li>AWS, Azure and Google Cloud overview</li>
//               <li>Containers and scalable infrastructure</li>
//               <li>Global application deployment</li>
//               <li>Serverless and microservices</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">⚙️ Week 7 — DevOps & Modern Software Delivery</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>DevOps culture</li>
//               <li>CI/CD pipelines & automated testing</li>
//               <li>Version control with Git & GitHub</li>
//               <li>Containerization with Docker</li>
//               <li>Infrastructure as Code</li>
//               <li>Continuous deployment strategies</li>
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl">
//             <h3 className="font-bold text-lg mb-4">🤖 Week 8 — Artificial Intelligence</h3>
//             <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
//               <li>AI vs Machine Learning vs Deep Learning</li>
//               <li>Training data and models</li>
//               <li>Neural networks fundamentals</li>
//               <li>Natural Language Processing and computer vision</li>
//               <li>Real-world AI systems</li>
//               <li>Careers in AI engineering</li>
//             </ul>
//           </div>

//         </div>

//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="px-8 md:px-20 py-24 bg-black/40 text-center">

//         <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
//           Contact CYBER HIVE
//         </h2>

//         <p className="opacity-80 mb-10">
//           For website development, design services and training programs contact us.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

//           <div className="bg-white/10 p-6 rounded-xl shadow-xl">
//             <h3 className="font-bold mb-2">📞 Phone</h3>
//             <p>+91 90000 00000</p>
//           </div>

//           <div className="bg-white/10 p-6 rounded-xl shadow-xl">
//             <h3 className="font-bold mb-2">📧 Email</h3>
//             <p>info@cyberhive.in</p>
//           </div>

//           <div className="bg-white/10 p-6 rounded-xl shadow-xl">
//             <h3 className="font-bold mb-2">📍 Address</h3>
//             <p>Cyber Hive Training Center<br />Tech Street, Digital City</p>
//           </div>

//         </div>

//       </section>

//       {/* FOOTER */}
//       <footer className="text-center py-10 border-t border-white/10 text-sm opacity-70">
//         © 2026 CYBER HIVE – Web Development & Computer Training Institute
//       </footer>

//     </div>
//   );
// }





export default function CyberHiveWebsite() {
  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-br from-[#05071a] via-[#0b0f35] to-[#200a3a] font-sans scroll-smooth">

      {/* NAVBAR */}
      <div className="w-full flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur sticky top-0 bg-[#05071a]/80 z-50">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative flex items-center gap-3">



            <div className="flex flex-col leading-tight">
              <span className="text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent group-hover:brightness-125 transition">
                CYBER HIVE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-white/60 uppercase">
                Digital Training & Web Solutions
              </span>
            </div>

          </div>
        </div>

        <div className="hidden md:flex gap-8 text-xl opacity-90 font-semibold">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#courses" className="hover:text-pink-400">Courses</a>
          <a href="#services" className="hover:text-pink-400">Services</a>
          <a href="#bootcamp" className="hover:text-pink-400">Bootcamp</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>
      </div>

      {/* HERO SECTION old with no graphics/animation */}
      {/* <section id="home" className="px-8 md:px-20 py-24 text-center">

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          BUILD YOUR DIGITAL FUTURE
        </h1> */}

      {/* HERO SECTION new one with graphics/animation */}
      <section id="home" className="px-8 md:px-20 py-24 text-center">

        <div className="relative inline-block">

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
            BUILD YOUR DIGITAL FUTURE
          </h1>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 blur-md animate-[shine_4s_linear_infinite]" />
        </div>

        {/* Subtle description box */}
        <div className="relative mt-10 max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl px-8 py-6 border border-white/20 shadow-xl border-dashed animate-fade-in">
          <p className="text-md md:text-lg opacity-90 tracking-wide text-center">
            CYBER HIVE provides <span className="font-bold text-pink-400">professional website development</span>, <span className="font-bold text-purple-400">modern digital design services</span>, and <span className="font-bold text-indigo-400">practical computer training programs</span> for students, entrepreneurs, and businesses.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
        </div>

        {/* <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          CYBER HIVE provides professional website development, modern
          digital design services and practical computer training
          programs for students, entrepreneurs and businesses.
        </p> */}

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <a href="#courses" className="px-8 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg">
            Explore Courses
          </a>

          <a href="#bootcamp" className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg">
            View Bootcamp
          </a>
        </div>

        {/* <div className="mt-16 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-2xl shadow-2xl w-full max-w-4xl"
            alt="coding workspace"
          />
        </div> */}

        {/* IMAGE STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            loading="lazy"
            className="rounded-xl shadow-lg w-full max-h-40 object-cover"
            alt="coding"
          />

          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            loading="lazy"
            className="rounded-xl shadow-lg w-full max-h-40 object-cover"
            alt="development"
          />

          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            loading="lazy"
            className="rounded-xl shadow-lg w-full max-h-40 object-cover"
            alt="web design"
          />

        </div>

      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="px-8 md:px-20 py-20">

        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technology Courses & Training
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4">💻 Programming Courses</h3>
            <ul className="space-y-2 opacity-90">
              <li>⚡ JavaScript (2 Months)</li>
              <li>🐍 Python (2 Months)</li>
              <li>☕ Java (2 Months)</li>
              <li>🔷 .NET C# (2 Months)</li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="font-semibold mb-2">📦 Bundled Program</p>
              <p className="text-sm opacity-90">JavaScript + Python + Java</p>
              <p className="text-sm opacity-80">Duration: 3 Months</p>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4">🚀 Advanced Specialized Programs</h3>
            <ul className="space-y-2 opacity-90">
              <li>☁️ Cloud Computing – AWS (2 Months)</li>
              <li>🐧 Linux Operating System (2 Months)</li>
              <li>🤖 Fundamentals of Artificial Intelligence (2 Months)</li>
              <li>🌐 Web Development (3 Months)</li>
              <li>⚙️ DevOps (2 Months)</li>
              <li>📱 Android App Developer – Kotlin (3 Months)</li>
              <li>🎤 Spoken English – Advanced Skills (2 Months)</li>
            </ul>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4">🎨 Design & Media</h3>
            <ul className="space-y-2 opacity-90">
              <li>🎨 Graphic Design</li>
              <li>🖌 Photoshop & Canva Basics</li>
              <li>📰 Poster & Banner Design</li>
              <li>📱 Social Media Graphics</li>
              <li>🎬 Video Editing</li>
            </ul>
          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-8 md:px-20 py-24">

        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Website Design & Development Services
        </h2>



        {/* HERO IMAGE */}
        <div className="mb-12 relative">

          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166"
              alt="website design"
              loading="lazy"
              className="w-full h-56 md:h-72 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">

              <div className="flex items-center gap-3 mb-3 text-pink-300 font-semibold">
                💻 Professional Web Solutions
              </div>

              <div className="text-2xl md:text-3xl font-bold max-w-xl">
                Modern Responsive Websites for Businesses & Online Stores
              </div>

              <div className="flex gap-6 mt-4 text-white/90">
                <div>📱 Responsive</div>
                <div>🌍 Global Reach</div>
                <div>⚡ Modern Code</div>
              </div>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">🌐 Website Development</h3>
            <ul className="space-y-2 opacity-90 list-disc list-inside">
              <li>Business Websites</li>
              <li>Company Profile Websites</li>
              <li>Portfolio Websites</li>
              <li>Blog & News Websites</li>
              <li>Landing Page Websites</li>
              <li>Website Redesign</li>
            </ul>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">🛒 E‑Commerce Solutions</h3>
            <ul className="space-y-2 opacity-90 list-disc list-inside">
              <li>Online Store Development</li>
              <li>Shopping Cart Integration</li>
              <li>Payment Gateway Setup</li>
              <li>Product Showcase Websites</li>
              <li>Online Booking Systems</li>
            </ul>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">🎨 Website Design</h3>
            <ul className="space-y-2 opacity-90 list-disc list-inside">
              <li>Modern UI / UX Design</li>
              <li>Responsive Mobile Layout</li>
              <li>Creative Landing Page Design</li>
              <li>Custom Website Layouts</li>
              <li>Brand Focused Design</li>
            </ul>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">🖼 Banner & Graphic Design</h3>
            <ul className="space-y-2 opacity-90 list-disc list-inside">
              <li>Website Banners</li>
              <li>Advertising Posters</li>
              <li>Social Media Banners</li>
              <li>Logo Design</li>
              <li>Marketing Graphics</li>
            </ul>
          </div>

        </div>

      </section>

      {/* 8 WEEK BOOTCAMP */}
      <section id="bootcamp" className="px-8 md:px-20 py-24">

        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          8‑Week Technology Explorer Bootcamp
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-red-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">🚀 Week 1 — Fundamentals of Computer Science</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Computer science overview</li>
              <li>CPU, memory, storage & I/O devices</li>
              <li>Binary numbers & data representation</li>
              <li>Operating systems fundamentals</li>
              <li>Programming concepts</li>
              <li>Internet & networking basics</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-green-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">🌐 Week 2 — Web Foundations</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>How the Internet works: DNS, HTTP/HTTPS, browsers and servers</li>
              <li>HTML document structure and semantic elements</li>
              <li>Modern CSS layout: Flexbox, Grid and responsive design</li>
              <li>JavaScript fundamentals: variables, functions, events</li>
              <li>DOM manipulation and dynamic UI updates</li>
              <li>Overview of modern frontend frameworks like React</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-blue-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">🐍 Week 3 — Python Programming</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Python syntax, indentation model and readability principles</li>
              <li>Variables, data types and operators</li>
              <li>Control ﬂow: if statements, loops and conditions</li>
              <li>Functions and modular code design</li>
              <li>Introduction to popular Python ecosystems (AI, Data Science, Web Development)</li>
              <li>Automation using python scripts</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-yellow-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">☕ Week 4 — Java & Software Engineering</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Java architecture and JVM fundamentals</li>
              <li>Object‑Oriented Programming: encapsulation, inheritance, polymorphism</li>
              <li>Classes, objects and method design</li>
              <li>Introduction to backend frameworks such as Spring Boot</li>
              <li>Building scalable enterprise applications</li>
              <li>Where Java is used: ﬁntech, enterprise systems, Android</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-gray-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">🐧 Week 5 — Linux</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Linux architecture and open‑source ecosystem</li>
              <li>Terminal fundamentals and shell navigation</li>
              <li>File system hierarchy and permissions model</li>
              <li>Essential developer commands (grep, ssh, curl)</li>
              <li>Package managers and development tooling</li>
              <li>Why Linux dominates cloud infrastructure</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-purple-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">☁️ Week 6 — Cloud Computing</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Introduction to cloud architecture and virtualization</li>
              <li>Core concepts: compute, storage and networking</li>
              <li>Overview of major platforms (AWS, Azure, Google Cloud)</li>
              <li>Containers and scalable infrastructure</li>
              <li>How modern startups deploy applications globally</li>
              <li>Serverless and microservices overview</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-pink-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">⚙️ Week 7 — DevOps</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>DevOps culture and collaboration between dev & ops</li>
              <li>CI/CD pipelines and automated testing</li>
              <li>Containerization with Docker</li>
              <li>Infrastructure as Code concepts</li>
              <li>Continuous deployment and release strategies</li>
              <li>Version control with Git and GitHub workﬂows</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur border border-indigo-400/20 p-7 rounded-2xl shadow-xl hover:border-pink-400/40 hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-4">🤖 Week 8 — Artificial Intelligence</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
              <li>Artiﬁcial Intelligence vs Machine Learning vs Deep Learning</li>
              <li>Training data, models and inference</li>
              <li>Neural networks and modern AI breakthroughs</li>
              <li>Real‑world AI systems powering modern applications</li>
              <li>Natural Language Processing and computer vision</li>
              <li>Future careers in AI and machine learning engineering</li>
            </ul>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-20 py-24 bg-black/40 text-center">

        <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Contact CYBER HIVE
        </h2>

        <p className="opacity-80 mb-10 font-bold">
          For website development, design services and training programs contact us.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <div className="bg-white/10 p-6 rounded-xl shadow-xl">
            <h3 className="font-bold mb-2">📞 Phone</h3>
            <p>+91 90000 00000</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-xl">
            <h3 className="font-bold mb-2">📧 Email</h3>
            <p>info@cyberhive.in</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-xl">
            <h3 className="font-bold mb-2">📍 Address</h3>
            <p>Cyber Hive Training Center<br />Tech Street, Digital City</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-sm opacity-80">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com/yourpage" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-blue-600/70 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z" />
            </svg>
          </a>

          <a href="https://instagram.com/yourpage" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-pink-500/70 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.01 4 20 5.99 20 7.75v8.5c0 1.76-1.99 3.75-3.75 3.75h-8.5C5.99 20 4 18.01 4 16.25v-8.5C4 5.99 5.99 4 7.75 4zm9.5 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>

        <div className="font-bold text-lg tracking-wide">© 2026 CYBER HIVE</div>
        <p className="opacity-70 text-base mt-1">
          Web Development • Digital Design • Technology Training
        </p>
      </footer>

    </div>
  );
}
