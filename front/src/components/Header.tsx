import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#">HOME</a>
          <a href="#">CLIENTES</a>
          <a href="#" className="nav-active">EQUIPAMENTOS</a>
          <a href="#">LAUDOS</a>
        </nav>
      </div>
      <div className="header-right">
        <span className="user-name">Rafael Marconi</span>
        <Button className="logout-btn">SAIR</Button>
      </div>
    </header>
  );
}

