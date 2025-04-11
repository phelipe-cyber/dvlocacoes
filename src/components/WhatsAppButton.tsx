"use client";

import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

export default function WhatsAppButton({
  text = "Alugar",
  className = ""
}: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5511968400206&text=Olá!%20Gostaria%20de%20saber%20sobre%20os%20serviços!!!",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#7165e3] hover:bg-[#5e53d8] text-white font-medium px-8 py-2 rounded-md ${className}`}
    >
      {text}
    </Button>
  );
}
