import { useState } from "react";
import "./Menu-tab.css";
import BD_Menu from "./BD-Menu";

export const MenuTab = () => {
  const [activeTab, setActiveTab] = useState("Desayuno");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
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
      </div>

      <div className="tab-content">
        {activeTab === "Desayuno" && <BD_Menu activeTab={activeTab} />}
        {activeTab === "Comida" && <BD_Menu activeTab={activeTab} />}
      </div>

      </>
  );
};
