import { useState } from "react";
import "./Menu-tab.css";
import BD_Menu from "./BD-Menu";
import PropTypes from "prop-types";

export const MenuTab = ({ handleAddToOrder }) => {
  const [activeTab, setActiveTab] = useState("Desayuno");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="tab">
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
      </section>

      <section className="tab-content">
        {activeTab === "Desayuno" && <BD_Menu activeTab={activeTab} handleAddToOrder={handleAddToOrder} />}
        {activeTab === "Comida" && <BD_Menu activeTab={activeTab} handleAddToOrder={handleAddToOrder} />}
      </section>

      </>
  );
};

MenuTab.propTypes = {
  handleAddToOrder: PropTypes.func.isRequired,
}