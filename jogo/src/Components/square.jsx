import React from "react";

// Componente funcional Square, representa um quadro no tabuleiro
function Square({ value, onClick}) {
    return (
        // Botão que exibe o valor quadrado e chama a função onClick ao ser clicado
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

// Exporta  componente Square como padão
export default Square;