"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

export default function AluguelMotoristas() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Aluguel de Carros para Motoristas
        </h2>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Oferecemos locação de veículos para motoristas de aplicativos, garantindo qualidade e conforto para suas corridas. Venha conhecer nossas opções e faça parte da nossa família!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/472628527.jpeg"
              alt="Aluguel de Carros para Motoristas"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600">150+</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Satisfação Total</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600">15</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Confiança e Qualidade</p>
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
