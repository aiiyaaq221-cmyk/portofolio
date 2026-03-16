"use client";

import TextType from "../components/TextType";
import Lanyard from "../components/Lanyard";
import BlurText from "../components/BlurText";
import PixelTransition from "./PixelTransition";
import CircularGallery from "./CircularGallery";
import GooeyNav from "./GooeyNav";

export default function HomeClient() {

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Kontak", href: "#contact" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <GooeyNav items={navItems} />
      </div>


      {/* HERO */}
      <section id="home" className="container mx-auto min-h-screen flex items-center">

  <div className="grid grid-cols-1 md:grid-cols-12 w-full">

    {/* TEXT */}
    <div className="md:col-span-6 flex items-center justify-center md:justify-start">
      <div className="pt-20 text-center md:text-left">

        <div className="text-[#FF9FFC] text-3xl md:text-5xl font-bold mb-4">
          <TextType
            text={[
              "Halo, saya S. Aulia Maruapey",
              "UI/UX Designer",
              "Selamat datang di Portofolio Saya"
            ]}
            typingSpeed={80}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <BlurText
          text="Saya merancang tampilan antarmuka digital yang modern, intuitif, dan responsif menggunakan Figma."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-lg md:text-2xl text-white"
        />

      </div>
    </div>

    {/* LANYARD */}
    <div className="md:col-span-6 flex justify-center mt-10 md:mt-0">
      <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
    </div>

  </div>

</section>

      {/* ABOUT + SKILLS */}
      <section id="about" className="py-32 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-center">


          {/* FOTO */}
          <div className="relative">

            <img
              src="/me.jpg"
              alt="profile"
              className="rounded-2xl object-cover w-full"
            />

          </div>



          {/* CONTENT */}
          <div>

            <h2 className="text-5xl font-bold text-[#FF9FFC] mb-6">
              About Me
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Saya adalah seorang <span className="text-[#FF9FFC] font-semibold">UI/UX Designer</span>
              yang memiliki minat dalam merancang tampilan antarmuka digital yang modern,
              intuitif, dan berfokus pada pengalaman pengguna. Saya terbiasa menggunakan
              Figma untuk membuat wireframe, prototype, serta desain UI yang responsif.
            </p>



           {/* SOFTWARE SKILLS */}
<h3 className="text-2xl font-bold mb-6">
  Software Skills
</h3>

<div className="flex gap-6 mb-12">

  <div className="bg-[#141414] w-16 h-16 rounded-xl overflow-hidden hover:scale-110 transition flex items-center justify-center">
    <img src="/figma.png" className="w-full h-full object-contain p-2" />
  </div>

  <div className="bg-[#141414] w-16 h-16 rounded-xl overflow-hidden hover:scale-110 transition flex items-center justify-center">
    <img src="/ps.png" className="w-full h-full object-contain p-2" />
  </div>

  <div className="bg-[#141414] w-16 h-16 rounded-xl overflow-hidden hover:scale-110 transition flex items-center justify-center">
    <img src="/cv.png" className="w-full h-full object-contain p-2" />
  </div>

  <div className="bg-[#141414] w-16 h-16 rounded-xl overflow-hidden hover:scale-110 transition flex items-center justify-center">
    <img src="/asli.png" className="w-full h-full object-contain p-2" />
  </div>

</div>



            {/* GRID INFO */}
            <div className="grid grid-cols-2 gap-10">


              {/* EDUCATION */}
              <div>

                <h4 className="text-xl font-semibold mb-4">
                  Education
                </h4>

                <p className="text-white/70">
                  2022 - Sekarang
                </p>

                <p className="text-white/80">
                  ITB STIKOM Ambon
                </p>

                <p className="text-white/60">
                  Sistem Informasi
                </p>

              </div>



              {/* EXPERIENCE */}
              <div>

                <h4 className="text-xl font-semibold mb-4">
                  Experience
                </h4>

                <p className="text-white/80">
                  UI/UX Design Project
                </p>

                <p className="text-white/60">
                  Mengerjakan beberapa desain aplikasi dan website
                  menggunakan Figma sebagai bagian dari portofolio.
                </p>

              </div>



              {/* LANGUAGE */}
              <div>

                <h4 className="text-xl font-semibold mb-4">
                  Language
                </h4>

                <p className="text-white/70">
                  Indonesia – 100%
                </p>

                <p className="text-white/70">
                  English – 70%
                </p>

              </div>



              {/* SOFT SKILL */}
              <div>

                <h4 className="text-xl font-semibold mb-4">
                  Soft Skills
                </h4>

                <p className="text-white/70">
                  • Communication
                </p>

                <p className="text-white/70">
                  • Teamwork
                </p>

                <p className="text-white/70">
                  • Problem Solving
                </p>

                <p className="text-white/70">
                  • Creativity
                </p>

              </div>


            </div>


          </div>

        </div>

      </section>

      {/* EXPERIENCE TIMELINE */}
<div className="mt-32 relative">

  {/* Gradient Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1a2e] via-black to-[#2b0a3d] blur-3xl opacity-40"></div>

  <h3 className="text-4xl font-bold text-[#FF9FFC] mb-14">
    Pengalaman & Kontribusi
  </h3>

  <div className="relative border-l border-white/20 pl-10 space-y-14">

    {/* SEMESTER 5 */}
    <div className="group relative">

      <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#FF9FFC] rounded-full shadow-lg shadow-pink-500/50 group-hover:scale-125 transition"></div>

      <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 
      hover:border-[#FF9FFC] hover:shadow-xl hover:shadow-pink-500/20 
      transition duration-500 hover:-translate-y-2">

        <p className="text-[#FF9FFC] text-sm mb-1">
          Semester 5
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Aplikasi Pembelian Tiket Kapal
        </h4>

        <p className="text-white/60 mb-3">
          Project Perkuliahan
        </p>

        <ul className="text-white/70 text-sm space-y-1">
          <li>• Mengembangkan sistem pemesanan tiket kapal</li>
          <li>• Membuat fitur pemesanan, data penumpang, dan jadwal kapal</li>
          <li>• Menggunakan database untuk manajemen data tiket</li>
        </ul>

      </div>
    </div>


    {/* SEMESTER 6 */}
    <div className="group relative">

      <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#FF9FFC] rounded-full shadow-lg shadow-pink-500/50 group-hover:scale-125 transition"></div>

      <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 
      hover:border-[#FF9FFC] hover:shadow-xl hover:shadow-pink-500/20 
      transition duration-500 hover:-translate-y-2">

        <p className="text-[#FF9FFC] text-sm mb-1">
          Semester 6
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Aplikasi Arsip Surat Digital
        </h4>

        <p className="text-white/60 mb-3">
          Project Perkuliahan
        </p>

        <ul className="text-white/70 text-sm space-y-1">
          <li>• Mengembangkan sistem manajemen arsip surat</li>
          <li>• Membuat fitur upload, pencarian, dan pengelolaan dokumen</li>
          <li>• Mengimplementasikan sistem role admin dan pengguna</li>
        </ul>

      </div>
    </div>


    {/* SEMESTER 7 */}
    <div className="group relative">

      <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#FF9FFC] rounded-full shadow-lg shadow-pink-500/50 group-hover:scale-125 transition"></div>

      <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 
      hover:border-[#FF9FFC] hover:shadow-xl hover:shadow-pink-500/20 
      transition duration-500 hover:-translate-y-2">

        <p className="text-[#FF9FFC] text-sm mb-1">
          Semester 7
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Magang Web Developer
        </h4>

        <p className="text-white/60 mb-3">
          Program Magang
        </p>

        <ul className="text-white/70 text-sm space-y-1">
          <li>• Mengembangkan website berbasis web</li>
          <li>• Membantu pengembangan fitur pada aplikasi perusahaan</li>
          <li>• Berkolaborasi dengan tim developer</li>
        </ul>

      </div>
    </div>


    {/* SEMESTER 8 */}
    <div className="group relative">

      <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#FF9FFC] rounded-full shadow-lg shadow-pink-500/50 group-hover:scale-125 transition"></div>

      <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 
      hover:border-[#FF9FFC] hover:shadow-xl hover:shadow-pink-500/20 
      transition duration-500 hover:-translate-y-2">

        <p className="text-[#FF9FFC] text-sm mb-1">
          Semester 8
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Aplikasi Pengenalan Budaya Maluku
        </h4>

        <p className="text-white/60 mb-3">
          Project Lomba Kementerian Kebudayaan
        </p>

        <ul className="text-white/70 text-sm space-y-1">
          <li>• Mengembangkan aplikasi edukasi budaya Maluku</li>
          <li>• Menampilkan informasi budaya, adat, dan tradisi Maluku</li>
          <li>• Dirancang untuk mengikuti lomba Kementerian Kebudayaan</li>
        </ul>

      </div>
    </div>

  </div>
</div>

      {/* PROJECT */}
      <section id="project" className="py-28">

        <h2 className="text-5xl font-bold text-[#FF9FFC] mb-14 text-center">
          Project Saya
        </h2>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

      </section>



      {/* CONTACT */}
      <section id="contact" className="py-32 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-[#FF9FFC] mb-16 text-center">
          Kontak
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - PROJECT PREVIEW */}
          <div className="bg-[#141414] p-8 rounded-2xl border border-white/10 shadow-xl">

            <h3 className="text-xl mb-4 font-semibold">
              💬 Chat Room
            </h3>

            <div className="space-y-3 text-sm">

              <div className="bg-[#1f1f1f] p-3 rounded-lg w-fit">
                Selamat datang di web Portofolio saya 👋
              </div>

              <div className="bg-[#1f1f1f] p-3 rounded-lg w-fit ml-auto">
                Halo, boleh kerja sama?
              </div>

              <div className="bg-[#1f1f1f] p-3 rounded-lg w-fit">
                Tentu, silakan hubungi melalui form disamping 🙂
              </div>

            </div>

            <button className="mt-6 w-full bg-white text-black py-2 rounded-lg font-medium hover:scale-105 transition">
              Login with Google
            </button>

            <p className="text-xs text-white/40 mt-2 text-center">
              Login untuk mengirim pesan
            </p>

          </div>



          {/* RIGHT - CONTACT FORM */}
          <div className="bg-[#141414] p-8 rounded-2xl border border-white/10 shadow-xl">

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#1f1f1f] border border-white/10 p-3 rounded-lg focus:border-[#FF9FFC] outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1f1f1f] border border-white/10 p-3 rounded-lg focus:border-[#FF9FFC] outline-none"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-[#1f1f1f] border border-white/10 p-3 rounded-lg focus:border-[#FF9FFC] outline-none"
              />

              <button className="w-full bg-[#FF9FFC] text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
                Send
              </button>
            </div>
          </div>
        </div>


        {/* SOCIAL MEDIA */}
        <div className="flex justify-center gap-6 mt-16 text-white/70">

          <a href="#" className="hover:text-[#FF9FFC] transition text-xl">
            Github
          </a>

          <a href="https://www.instagram.com/1zyaaa_?igsh=Nnd1eXQ0anRiYTg1" className="hover:text-[#FF9FFC] transition text-xl">
            Instagram
          </a>

          <a href="#" className="hover:text-[#FF9FFC] transition text-xl">
            LinkedIn
          </a>

          <a href="https://youtube.com/@sorayaauliamaruapey1853?si=n3iRLOuNSCMd15_i" className="hover:text-[#FF9FFC] transition text-xl">
            YouTube
          </a>
        </div>
      </section>

    </div>
  );
}