"use client";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Locação de veículos
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Transporte Privado Seguro
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Oferecemos carros de qualidade para motoristas de aplicativo com preços acessíveis e flexibilidade.
          <br />
          Temos também carros blindados e serviços particulares.
        </p>
        <div className="mt-10">
          <WhatsAppButton />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center mt-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm">Avaliações: 4.8 de 5 estrelas</span>
        </div>
      </div>
    </div>
  );
}
