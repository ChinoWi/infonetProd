import React from 'react'

let date = () => {
    var d=new Date();
    var dia=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")
    var mes = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
    var resultado="Hoy es "+ dia[d.getDay()]+" "+ d.getDate() + " de " +mes[d.getMonth()]+" del "+ d.getUTCFullYear()
    return resultado;
};


export  default date
