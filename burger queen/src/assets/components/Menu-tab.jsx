import { useState } from "react";
import './Menu-tab.css';

export const MenuTab = () => {
  const [activeTab, setActiveTab] = useState("Desayuno");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab">
      <button
        className={activeTab === "Desayuno" ? "tablinks active" : "tablinks"}
        onClick={() => handleTabClick("Desayuno")}
      >
        Desayuno
      </button>
      <button
        className={activeTab === "Comida" ? "tablinks active" : "tablinks"}
        onClick={() => handleTabClick("Comida")}
      >
        Comida
      </button>

      <div className="tabcontent">
        {activeTab === "Desayuno" && <h3>Desayuno</h3>}
        {activeTab === "Comida" && <h3>Comida</h3>}
      </div>
    </div>
  );
};
