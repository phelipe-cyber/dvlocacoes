"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "particular"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      // Enviar dados para nossa API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar o email');
      }

      // Mostrar mensagem de sucesso
      setSubmitSuccess(true);

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "particular"
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro desconhecido ao enviar');
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Olá! Sou ${formData.name}. Gostaria de saber sobre os serviços de ${formData.serviceType}!!!`;
    window.open(
      `https://api.whatsapp.com/send?phone=5511968400206&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-3xl font-semibold text-center mb-6">Contato Rápido</h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Entre em contato conosco para locação de veículos para motoristas de app ou serviços particulares. Estamos aqui para ajudar!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/687830685.jpeg"
              alt="Táxi amarelo estacionado"
              fill
              className="object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Nota: </strong>
              <span className="block sm:inline">
                Este formulário está configurado para enviar emails via servidor SMTP do Hostinger.
                Se a mensagem não chegar, verifique a configuração do servidor.
              </span>
            </div>

            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Sucesso! </strong>
                <span className="block sm:inline">
                  Seu email foi enviado para contato@dvlocacoes.com.br. Entraremos em contato em breve!
                </span>
              </div>
            )}

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Erro! </strong>
                <span className="block sm:inline">{submitError}</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Seu nome completo*
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Digite seu nome aqui"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Seu e-mail*
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail aqui"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Telefone*
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="(11) 91234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Sua mensagem*
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem aqui"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div>
              <p className="block text-sm font-medium mb-2">Tipo de serviço*</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="particular"
                    name="serviceType"
                    value="particular"
                    checked={formData.serviceType === "particular"}
                    onChange={() => handleRadioChange("particular")}
                    className="mr-2"
                  />
                  <label htmlFor="particular">Particular</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="motorista"
                    name="serviceType"
                    value="motorista"
                    checked={formData.serviceType === "motorista"}
                    onChange={() => handleRadioChange("motorista")}
                    className="mr-2"
                  />
                  <label htmlFor="motorista">Motorista App</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="outros"
                    name="serviceType"
                    value="outros"
                    checked={formData.serviceType === "outros"}
                    onChange={() => handleRadioChange("outros")}
                    className="mr-2"
                  />
                  <label htmlFor="outros">Outros</label>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar por Email"}
              </Button>

              <Button
                type="button"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700"
              >
                Enviar por WhatsApp
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Você também pode nos contatar diretamente pelo WhatsApp.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton text="WhatsApp" className="flex items-center gap-2" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 -mx-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Carlos Silva</p>
                    <p className="text-sm text-gray-500">O serviço de locação foi excelente, atendeu todas as minhas necessidades como motorista de app.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="https://ext.same-assets.com/533557136.jpeg" alt="Ana Costa" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Ana Costa</p>
                    <p className="text-sm text-gray-500">A experiência foi incrível! Os veículos são confortáveis e sempre em ótimo estado para trabalhar.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
