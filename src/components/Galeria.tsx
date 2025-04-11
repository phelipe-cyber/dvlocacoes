"use client";

import Image from "next/image";

export default function Galeria() {
  const images = [
    {
      src: "https://ext.same-assets.com/3959695871.jpeg",
      alt: "Táxi amarelo Yandex estacionado"
    },
    {
      src: "https://ext.same-assets.com/1827946293.jpeg",
      alt: "Táxi Yandex com iluminação noturna"
    },
    {
      src: "https://ext.same-assets.com/3040010578.jpeg",
      alt: "Celular com logo do Uber em superfície de madeira"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Galeria</h2>
        <p className="text-gray-700 text-center mb-10">
          Confira nossos veículos disponíveis para motoristas de app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {images.map((image) => (
            <div key={image.src} className="relative h-[320px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
