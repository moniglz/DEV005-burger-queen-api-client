import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Menu-tab.css';

export const MenuTab = () => {
  const [activeTab, setActiveTab] = useState("Desayuno");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab">
      <ul className="nav nav-tabs">
      <li className="nav-item bg-white">
        <button
          className={activeTab === "Desayuno" ? "tablinks active" : "tablinks" }
          onClick={() => handleTabClick("Desayuno")}
        >
          Desayuno
        
        </button>
      </li>
      <li className="nav-item bg-white">
        <button
          className={activeTab === "Comida" ? "tablinks active" : "tablinks"}
          onClick={() => handleTabClick("Comida")}
        >
          Comida
        </button>
      </li>
      </ul>
      
      <div className="tabcontent">

        {activeTab === "Desayuno" && 
        <div className="tab-pane fade show active" 
        id="home" 
        role="tabpanel" 
        aria-labelledby="home-tab">
          <h3>Desayuno</h3>
          </div>}
        {activeTab === "Comida" && <h3>Comida</h3>}
      </div>
      
    </div>
  );
};