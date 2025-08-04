import React from 'react';

interface TerminalNavbarProps {
  toggleCatalog: () => void;
}

const TerminalNavbar = ({ toggleCatalog }: TerminalNavbarProps) => {
  return (
    <div id="navbar">
      <div className="nav-links">
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); alert('Funcionalidad pendiente'); }}>Hoy</a>
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); alert('Funcionalidad pendiente'); }}>Aleatorio</a>
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); alert('Funcionalidad pendiente'); }}>Hechos</a>
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); toggleCatalog(); }}>Catálogo</a>
      </div>
    </div>
  );
};

export default TerminalNavbar;