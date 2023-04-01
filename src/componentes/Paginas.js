import React from "react";
import { Switch, Router } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./productos/index";

export const Paginas = () =>{
    return (
        <section>
            <Switch>
                <Router path = "/" exact component = {Inicio} />
                <Router path = "/productos" exact component={ProductosLista} />
            </Switch>
        </section>
    )
}
