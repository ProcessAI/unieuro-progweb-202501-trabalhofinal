import React from 'react';

interface EyeIconProps {
  size?: number;
  color?: string;
}

const EyeOpenIcon: React.FC<EyeIconProps> = ({ size = 20, color = 'black' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24" // O viewBox do seu SVG
    fill="none" // Para ícones de contorno
    stroke={color} // Use a prop 'color' para o contorno
    strokeWidth="2" // Ajuste a espessura da linha se desejar
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Conteúdo do seu SVG de olho aberto */}
    <path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/>
    <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/>
  </svg>
);

export default EyeOpenIcon;