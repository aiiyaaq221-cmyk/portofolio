const CertificateCard = ({ cert, onClick }) => {
  return (
    <div
      onClick={() => onClick(cert)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10"
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>

       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
          Lihat
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;