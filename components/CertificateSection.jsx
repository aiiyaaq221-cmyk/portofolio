"use client";
import { useState } from "react";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    id: 1,
    title: "Frontend Developer",
    image: "/certificate1.png",
  },
  {
    id: 2,
    title: "React Developer",
    image: "/certificate2.png",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/certificate3.png",
  },
];

export default function CertificateSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificate" className="px-10 py-20 bg-[#020617] text-white">
      <h3 className="text-4xl font-bold text-[#FF9FFC] mb-14 text-center"> Certificates </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={setSelected}
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selected.image}
            className="max-w-4xl w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}