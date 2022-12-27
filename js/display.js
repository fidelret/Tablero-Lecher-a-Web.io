let leyenda_al_pie = document.querySelector(".leyenda_al_pie");

let variacion = document.querySelector(".variacion_19_20");

let descargar_1 = document.querySelector(".descargas_1");
let descargar_2 = document.querySelector(".descargas_2");
let btn_abrir_descargas = document.querySelector(".abrir_descargas");
let btn_ocultar_descargas = document.querySelector(".ocultar_descargas");

function leyenda(){
    leyenda_al_pie.style.display = "block";
    };

function no_leyenda(){
    leyenda_al_pie.style.display = "none";
    };

function bloque_variacion(){
    variacion.style.display = "block";
    };

function no_bloque_variacion(){
    variacion.style.display = "none";
    };

function display_descargas(){
    descargar_1.style.display = "block";
    descargar_2.style.display = "block";
    btn_abrir_descargas.style.display = "none"
    btn_ocultar_descargas.style.display = "block";
    };

function undisplay_descargas(){
        descargar_1.style.display = "none";
        descargar_2.style.display = "none";
        btn_abrir_descargas.style.display = "block"
        btn_ocultar_descargas.style.display = "none";
        };

