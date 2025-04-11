"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      location: "São Paulo",
      image: "https://ext.same-assets.com/4284876899.jpeg",
      text: "A locação foi rápida e o carro estava em excelente estado. Recomendo!"
    },
    {
      id: 2,
      name: "Ana Costa",
      location: "Rio Janeiro",
      image: "https://ext.same-assets.com/40391606.jpeg",
      text: "O serviço foi excepcional! O carro estava limpo e funcionou perfeitamente durante toda a locação. Voltarei a alugar com certeza."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Avaliações Clientes</h2>
        <p className="text-gray-700 text-center mb-10">
          Veja o que nossos clientes dizem sobre a locação de veículos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#fef2ee] border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="flex items-center pt-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
