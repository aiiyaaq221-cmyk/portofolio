"use client";

import TextType from "../components/TextType";
import Lanyard from "../components/Lanyard";
import BlurText from "../components/BlurText";
import PixelTransition from "./PixelTransition";
import CircularGallery from "./CircularGallery";
import CertificateSection from "../components/CertificateSection";
import GooeyNav from "./GooeyNav";
import Masonry from '../components/Masonry';
// import { Github, Instagram, Youtube } from "lucide-react";


export default function HomeClient() {

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Certificate", href: "#certificate" },
    { label: "Kontak", href: "#contact" }
  ];


const items = [
    {
      id: "1",
      img: "/certificate3.png",
      url: "https://example.com/one",
      height: 400,
      width: 800,
    },
    {
      id: "2",
      img: "/certificate3.png",
      url: "https://example.com/two",
      height: 250,
      width: 400,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
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

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* FOTO */}
          <div className="relative flex justify-center md:justify-start md:translate-x-20">
            <img
              src="/me.jpg"
              alt="profile"
              className="rounded-2xl object-cover w-full max-w-sm"
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
            <a
              href="https://drive.google.com/drive/folders/1UHv4I1jGUV17phCrkhVGMcFcKPbJHWvC?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </section>

      {/* CERTIVICATE */}
      <main>
        <CertificateSection />
      </main>
      {/* CERTIVICATE */}

      {/* EXPERIENCE TIMELINE */}
      {/* <div className="mt-32 mb-32 relative max-w-4xl mx-auto px-6"> */}

        {/* Background */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1a2e] via-black to-[#2b0a3d] blur-3xl opacity-40"></div> */}

        {/* Title */}
        {/* <h3 className="text-4xl font-bold text-[#FF9FFC] mb-14 text-center">
          Pengalaman & Kontribusi
        </h3> */}

        {/* GRID */}
        {/* <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              semester: "Semester 5",
              title: "Aplikasi Pembelian Tiket Kapal",
              type: "Project Perkuliahan",
              desc: [
                "Mengembangkan sistem pemesanan tiket kapal",
                "Membuat fitur pemesanan, data penumpang, dan jadwal kapal",
                "Menggunakan database untuk manajemen data tiket"
              ]
            },
            {
              semester: "Semester 6",
              title: "Aplikasi Arsip Surat Digital",
              type: "Project Perkuliahan",
              desc: [
                "Mengembangkan sistem manajemen arsip surat",
                "Membuat fitur upload, pencarian, dan pengelolaan dokumen",
                "Mengimplementasikan sistem role admin dan pengguna"
              ]
            },
            {
              semester: "Semester 7",
              title: "Magang Web Developer",
              type: "Program Magang",
              desc: [
                "Mengembangkan website berbasis web",
                "Membantu pengembangan fitur aplikasi perusahaan",
                "Berkolaborasi dengan tim developer"
              ]
            },
            {
              semester: "Semester 8",
              title: "Aplikasi Pengenalan Budaya Maluku",
              type: "Project Lomba",
              desc: [
                "Mengembangkan aplikasi edukasi budaya Maluku",
                "Menampilkan informasi budaya dan tradisi",
                "Dirancang untuk lomba Kementerian Kebudayaan"
              ]
            }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#141414] p-5 rounded-2xl border border-white/10 
              hover:border-[#FF9FFC] hover:shadow-xl hover:shadow-pink-500/20 
              hover:bg-gradient-to-br hover:from-[#1a1a2e] hover:to-[#2b0a3d]
              transition duration-500 hover:-translate-y-2 group h-full"
            > */}

              {/* Badge */}
              {/* <span className="text-xs bg-[#FF9FFC]/10 text-[#FF9FFC] px-3 py-1 rounded-full">
                {item.semester}
              </span> */}

              {/* Title */}
              {/* <h4 className="text-xl font-semibold mt-4 mb-2 group-hover:text-[#FF9FFC] transition">
                {item.title}
              </h4> */}

              {/* Type */}
              {/* <p className="text-white/60 mb-3">
                {item.type}
              </p> */}

              {/* Description */}
              {/* <ul className="text-white/70 text-sm space-y-1">
                {item.desc.map((d, i) => (
                  <li key={i}>• {d}</li> */}
                {/* ))} */}
              {/* </ul> */}
            {/* </div> */}
          {/* ))} */}

        {/* // </div> */}
      {/* // </div> */}

      {/* PROJECT */}
      <section id="project" className="py-20 z-0 mb-32">

        <h2 className="text-5xl font-bold text-[#FF9FFC] mb-14 text-center">
          Project Saya
        </h2>
     
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
      </section>

      
      {/* CONTACT */}
      <section id="contact" className="py-25 max-w-7xl mx-auto mt-32">

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

  {/* Github */}
  <a
    href="https://github.com/aiiyaaq221-cmyk?tab=repositories"
    target="_blank"
    className="p-3 rounded-full bg-white/5 hover:bg-[#FF9FFC]/20 hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 
      0-.287-.01-1.045-.015-2.052-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 
      1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 
      0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 
      3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 
      3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 
      1.233 3.222 0 4.61-2.804 5.624-5.475 5.921.43.372.823 
      1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 
      0 .322.192.699.8.58C20.565 21.796 24 17.297 24 
      12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/1zyaaa_?"
    target="_blank"
    className="p-3 rounded-full bg-white/5 hover:bg-[#FF9FFC]/20 hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 
      22 7.75 22h8.5c3.176 0 5.75-2.574 
      5.75-5.75v-8.5C22 4.574 19.426 2 16.25 
      2h-8.5zm0 2h8.5C18.433 4 20 
      5.567 20 7.75v8.5c0 2.183-1.567 3.75-3.75 
      3.75h-8.5C5.567 20 4 18.433 
      4 16.25v-8.5C4 5.567 5.567 4 7.75 
      4zm4.25 2.5a5.5 5.5 0 100 11 5.5 5.5 
      0 000-11zm0 2a3.5 3.5 0 110 
      7 3.5 3.5 0 010-7zm4.75-.88a1.12 
      1.12 0 100 2.24 1.12 1.12 
      0 000-2.24z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@sorayaauliamaruapey1853?"
    target="_blank"
    className="p-3 rounded-full bg-white/5 hover:bg-[#FF9FFC]/20 hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.6 
      3.5 12 3.5 12 3.5s-7.6 0-9.5.7a2.9 
      2.9 0 00-2 2C0 8.1 0 12 0 
      12s0 3.9.5 5.8a2.9 2.9 0 002 
      2c1.9.7 9.5.7 9.5.7s7.6 
      0 9.5-.7a2.9 2.9 0 002-2c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.75 
      15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  </a>

</div>
      </section>

    </div>
  );
}