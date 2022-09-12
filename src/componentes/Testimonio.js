import React from "react";
import "../estilos/Testimonio.css"

function Testimonio (props) {
    return (
    <div className="contenedor-testimonio">
            <img className="imagen-alumno" src={require(`../imagenes/imagen-${props.imagen}.png`)} alt={`Imagen de ${props.nombre}`} />
        <div className="contenedor-texto">
            <p className="texto-nombre"><strong>{props.nombre}</strong> en {props.pais}</p>
            <p className="texto-trabajo">{props.puesto} en <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>
    );
};

export default Testimonio;