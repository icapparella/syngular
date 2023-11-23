import React from "react";
import "./style.css";

export const Menu = () => {
    return (
        <div className="menu">
            <div className="div">
                <img className="x" alt="X" src="x.svg" />
                <div className="text-wrapper">Histórico</div>
                <div className="text-wrapper-2">Configurações</div>
                <div className="text-wrapper-3">Ajuda</div>
                <div className="text-wrapper-4">Sair</div>
                <img className="rectangle" alt="Rectangle" src="rectangle-7.png" />
                <div className="text-wrapper-5">Alexandre Peixoto</div>
                <div className="text-wrapper-6">Analista comercial</div>
                <img className="book-open" alt="Book open" src="book-open.svg" />
                <img className="settings" alt="Settings" src="settings.svg" />
                <img className="help-circle" alt="Help circle" src="help-circle.svg" />
                <img className="log-out" alt="Log out" src="log-out.svg" />
                <img className="line" alt="Line" src="line-1.svg" />
            </div>
        </div>
    );
};
