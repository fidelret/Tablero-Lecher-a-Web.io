
let monthYear = document.querySelector(".monthYear"); 
let cantTambos = document.querySelector(".cantTambos");
let precioPorLitro = document.querySelector(".precioPorLitro");
let variacion1 = document.querySelector(".variacion1");
let variacion2 = document.querySelector(".variacion2");

let pCAbasNort = document.querySelector(".preciocuenAbasNort");
let pCAbasSur = document.querySelector(".preciocuenAbasSur");
let pCMyS = document.querySelector(".preciocuenMyS");
let pCO = document.querySelector(".preciocuenO");

let aNcruIA = document.querySelector(".aNortcrudaIA");
let aNcruIMen = document.querySelector(".aNortcrudaIMen");
let aSurcruIA  = document.querySelector(".aSurcrudaIA");
let aSurcruIMen  = document.querySelector(".aSurcrudaIMen");
let mYScruIA = document.querySelector(".mYScrudaIA");
let mYScruIMen = document.querySelector(".mYScrudaIMen");
let oescruIA = document.querySelector(".oescrudaIA");
let oescruIMen = document.querySelector(".oescrudaIMen");

let precio_solidos_UT = document.querySelector(".precio_x_kg_solidos_UT");
let precio_solidos_UTvar_IMen = document.querySelector(".precio_x_kg_solidos_UT-var_IMen");
let precio_x_kg_solidos_UTvar_IA = document.querySelector(".precio_x_kg_solidos_UT-var_IA");
let proteina = document.querySelector(".proteina");
let grasa_butirosa = document.querySelector(".grasa_butirosa");
let var_int_0 = document.querySelector(".var_int_0");
let var_int_2019 = document.querySelector(".var_int_2019");
let var_int_2020 = document.querySelector(".var_int_2020");
let anio_0 = document.querySelector(".anio_0");
let anio_1 = document.querySelector(".anio_1");
let anio_2 = document.querySelector(".anio_2");

//comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

let mes_comparativo_1 = document.querySelector(".mes_comparativo_1");
let mes_comparativo_2 = document.querySelector(".mes_comparativo_2");
let dato_comparativo_1 = document.querySelector(".dato_comparativo_1");
let dato_comparativo_2 = document.querySelector(".dato_comparativo_2");
let porcentaje_comparativo = document.querySelector(".porcentaje_comparativo");

let cantTambos2 = document.querySelector(".cantTambos2");
let prod_mensual_lech_crud = document.querySelector(".prod_mensual_lech_crud");
let produ_lechcrudIMen = document.querySelector(".produ_lechecruda_var_IMen");
let produ_lechecrudaIA = document.querySelector(".produ_lechecruda_var_IA");

let aN_Li_x_c_IA = document.querySelector(".aNort_Li_x_cuenca_IA");
let aN_Li_x_c_Men = document.querySelector(".aNort_Li_x_cuenca_IMen");
let aSur_Li_x_c_IA  = document.querySelector(".aSur_Li_x_cuenca_IA");
let aSur_Li_x_c_IMen  = document.querySelector(".aSur_Li_x_cuenca_IMen");
let mYS_Li_x_c_IA = document.querySelector(".mYS_Li_x_cuenca_IA");
let mYS_Li_x_c_IMen = document.querySelector(".mYS_Li_x_cuenca_IMen");
let oes_Li_x_c_IA = document.querySelector(".oes_Li_x_cuenca_IA");
let oes_Li_x_c_IMen = document.querySelector(".oes_Li_x_cuenca_IMen");

let cantTambos3 = document.querySelector(".cantTambos3");
let s_cuenAbasNort = document.querySelector(".solidos_cuenAbasNort");
let s_cuenAbasSur = document.querySelector(".solidos_cuenAbasSur");
let s_cuenMyS = document.querySelector(".solidos_cuenMyS");
let s_cuenO = document.querySelector(".solidos_cuenO");

const selectores = [monthYear, cantTambos, precioPorLitro, variacion1, variacion2, pCAbasNort, pCAbasSur, pCMyS, pCO, aNcruIA, aNcruIMen, aSurcruIA, aSurcruIMen, mYScruIA, mYScruIMen, oescruIA, oescruIMen, precio_solidos_UT, precio_solidos_UTvar_IMen, precio_x_kg_solidos_UTvar_IA, proteina, grasa_butirosa, cantTambos2, prod_mensual_lech_crud, produ_lechcrudIMen, produ_lechecrudaIA, var_int_0, var_int_2019, var_int_2020, anio_0, anio_1, anio_2, mes_comparativo_1, mes_comparativo_2, dato_comparativo_1, dato_comparativo_2, porcentaje_comparativo, aN_Li_x_c_IA, aN_Li_x_c_Men, aSur_Li_x_c_IA, aSur_Li_x_c_IMen, mYS_Li_x_c_IA, mYS_Li_x_c_IMen, oes_Li_x_c_IA, oes_Li_x_c_IMen, cantTambos3, s_cuenAbasNort, s_cuenAbasSur, s_cuenMyS, s_cuenO];

function junio21(){
    monthYear.textContent = "Junio 2021";
    cantTambos.textContent = "1571";
    precioPorLitro.textContent = "31,69";
    variacion1.textContent = "6%";
    variacion2.textContent = "69,92%";

    pCAbasNort.textContent = "$ 32,56"; 
    pCAbasSur.textContent = "$ 31,15";
    pCMyS.textContent = "$ 31,98"; 
    pCO.textContent = "$ 31,72";

    aNcruIA.textContent = "73,19%";
    aNcruIMen.textContent = "5,92%";
    aSurcruIA.textContent = "69,11%";
    aSurcruIMen.textContent = "5,38%";
    mYScruIA.textContent = "63,83%";
    mYScruIMen.textContent = "4,68%";
    oescruIA.textContent = "69,9%";
    oescruIMen.textContent = "5%";

    precio_solidos_UT.textContent = "438,18";
    precio_solidos_UTvar_IMen.textContent = "4,39%";
    precio_x_kg_solidos_UTvar_IA.textContent = "58,59%";
    proteina.textContent = "3,75%";
    grasa_butirosa.textContent = "3,48%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "180,98";
    produ_lechcrudIMen.textContent = "-0,62%";
    produ_lechecrudaIA .textContent = "-2,63%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "10,4%";
    aN_Li_x_c_Men.textContent = "1,2%";
    aSur_Li_x_c_IA.textContent = "5,99%";
    aSur_Li_x_c_IMen.textContent = "1,85%";
    mYS_Li_x_c_IA.textContent = "-7,30%";
    mYS_Li_x_c_IMen.textContent = "-9,15%";
    oes_Li_x_c_IA.textContent = "-3,71%";
    oes_Li_x_c_IMen.textContent = "0,7%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,29%";
    s_cuenAbasSur.textContent = "7,09%";
    s_cuenMyS.textContent = "6.89%";
    s_cuenO.textContent = "7,27%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Jun 20','Jul 20','Ago 20','Sept 20','Oct 20','Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21', 'Jun 21'];
    graf_precio_litro.data.datasets[0].data = [18.76,18.81,19.04,19.43,19.88,20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69];
    
    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [185.86,202.41,210.79,215.67,229.15,214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [8.67,7.09,7.05,7.03,6.97,6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function julio21(){
    monthYear.textContent = "Julio 2021";
    cantTambos.textContent = "1585";
    precioPorLitro.textContent = "32,73";
    variacion1.textContent = "3,28%";
    variacion2.textContent = "74%";

    pCAbasNort.textContent = "$ 32,33"; 
    pCAbasSur.textContent = "$ 32,30";
    pCMyS.textContent = "$ 33,22"; 
    pCO.textContent = "$ 32,70";

    aNcruIA.textContent = "75,88%";
    aNcruIMen.textContent = "2,36%";
    aSurcruIA.textContent = "74,31%";
    aSurcruIMen.textContent = "3,69%";
    mYScruIA.textContent = "68,46%";
    mYScruIMen.textContent = "3,88%";
    oescruIA.textContent = "75,05%";
    oescruIMen.textContent = "3,09%";

    precio_solidos_UT.textContent = "455,31";
    precio_solidos_UTvar_IMen.textContent = "3,91%";
    precio_x_kg_solidos_UTvar_IA.textContent = "71,65%";
    proteina.textContent = "3,46%";
    grasa_butirosa.textContent = "3,76%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "195,47";
    produ_lechcrudIMen.textContent = "8,0 %";
    produ_lechecrudaIA .textContent = "-3,43%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "10,3%";
    aN_Li_x_c_Men.textContent = "9,6%";
    aSur_Li_x_c_IA.textContent = "4,15%";
    aSur_Li_x_c_IMen.textContent = "6,11%";
    mYS_Li_x_c_IA.textContent = "-2,3%";
    mYS_Li_x_c_IMen.textContent = "4,07%";
    oes_Li_x_c_IA.textContent = "-2,14%";
    oes_Li_x_c_IMen.textContent = "9,22%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,20%";
    s_cuenAbasSur.textContent = "7,04%";
    s_cuenMyS.textContent = "6,85%";
    s_cuenO.textContent = "7,24%"; 

    //Gráfico1
    graf_precio_litro.data.labels = ['Jul 20','Ago 20','Sept 20','Oct 20','Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21'];
    graf_precio_litro.data.datasets[0].data = [18.81,19.04,19.43,19.88,20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [202.41,210.79,215.67,229.15,214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.09,7.05,7.03,6.97,6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19];
    
    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function agosto21(){
    monthYear.textContent = "Agosto 2021";
    cantTambos.textContent = "1579";
    precioPorLitro.textContent = "33,42";
    variacion1.textContent = "2,78%";
    variacion2.textContent = "75,53%";

    pCAbasNort.textContent = "$ 33,98"; 
    pCAbasSur.textContent = "$ 33,42";
    pCMyS.textContent = "$ 34,33"; 
    pCO.textContent = "$ 33,18";

    aNcruIA.textContent = "78,47%";
    aNcruIMen.textContent = "1,95%";
    aSurcruIA.textContent = "78,72%";
    aSurcruIMen.textContent = "3,74%";
    mYScruIA.textContent = "73,56%";
    mYScruIMen.textContent = "3,34%";
    oescruIA.textContent = "75,37%";
    oescruIMen.textContent = "1,47%";

    precio_solidos_UT.textContent = "467,97";
    precio_solidos_UTvar_IMen.textContent = "2,78%";
    precio_x_kg_solidos_UTvar_IA.textContent = "73,25%";
    proteina.textContent = "3,43%";
    grasa_butirosa.textContent = "3,71%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "211,09";
    produ_lechcrudIMen.textContent = "7,99%";
    produ_lechecrudaIA .textContent = "0,14%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "10,2%";
    aN_Li_x_c_Men.textContent = "6,5%";
    aSur_Li_x_c_IA.textContent = "6,81%";
    aSur_Li_x_c_IMen.textContent = "6,11%";
    mYS_Li_x_c_IA.textContent = "-0,3%";
    mYS_Li_x_c_IMen.textContent = "12,9%";
    oes_Li_x_c_IA.textContent = "-0,41%";
    oes_Li_x_c_IMen.textContent = "7,62%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,03%";
    s_cuenAbasSur.textContent = "7%";
    s_cuenMyS.textContent = "7,18%";
    s_cuenO.textContent = "7,14%"; 

    //Gráfico1
    graf_precio_litro.data.labels = ['Ago 20','Sept 20','Oct 20','Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21'];
    graf_precio_litro.data.datasets[0].data = [19.04,19.43,19.88,20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42];
    
    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [210.79,215.67,229.15,214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.05,7.03,6.97,6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function septiembre21(){
    monthYear.textContent = "Septiembre 2021";
    cantTambos.textContent = "1567";
    precioPorLitro.textContent = "33,90";
    variacion1.textContent = "1,44%";
    variacion2.textContent = "74,47%";

    pCAbasNort.textContent = "$ 34,60"; 
    pCAbasSur.textContent = "$ 33,66";
    pCMyS.textContent = "$ 34,39"; 
    pCO.textContent = "$ 33,79";

    aNcruIA.textContent = "77,53%";
    aNcruIMen.textContent = "1,82%";
    aSurcruIA.textContent = "76,60%";
    aSurcruIMen.textContent = "0,72%";
    mYScruIA.textContent = "71,52%";
    mYScruIMen.textContent = "0,17%";
    oescruIA.textContent = "74,81%";
    oescruIMen.textContent = "1,84%";

    precio_solidos_UT.textContent = "476,31";
    precio_solidos_UTvar_IMen.textContent = "1,78%";
    precio_x_kg_solidos_UTvar_IA.textContent = "72,41%";
    proteina.textContent = "3,41%";
    grasa_butirosa.textContent = "3,70%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "214,02";
    produ_lechcrudIMen.textContent = "1,39%";
    produ_lechecrudaIA .textContent = "-0,77%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "13,7%";
    aN_Li_x_c_Men.textContent = "1,9%";
    aSur_Li_x_c_IA.textContent = "9,02%";
    aSur_Li_x_c_IMen.textContent = "2,8%";
    mYS_Li_x_c_IA.textContent = "-0,2%";
    mYS_Li_x_c_IMen.textContent = "2,27%";
    oes_Li_x_c_IA.textContent = "-2,18%";
    oes_Li_x_c_IMen.textContent = "0,45%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,12%";
    s_cuenAbasSur.textContent = "6,94%";
    s_cuenMyS.textContent = "7,17%";
    s_cuenO.textContent = "7,11%"; 

    //Gráfico1
    graf_precio_litro.data.labels = ['Sept 20','Oct 20','Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21'];
    graf_precio_litro.data.datasets[0].data = [19.43,19.88,20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90];
    
    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [215.67,229.15,214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.03,6.97,6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function octubre21(){
    monthYear.textContent = "Octubre 2021";
    cantTambos.textContent = "1578";
    precioPorLitro.textContent = "34,14";
    variacion1.textContent = "0,71%"
    variacion2.textContent = "71,73%"

    pCAbasNort.textContent = "$ 35,08"; 
    pCAbasSur.textContent = "$ 33,84";
    pCMyS.textContent = "$ 34,65"; 
    pCO.textContent = "$ 33,97";

    aNcruIA.textContent = "75,22%";
    aNcruIMen.textContent = "1,39%";
    aSurcruIA.textContent = "73,18%";
    aSurcruIMen.textContent = "0,53%";
    mYScruIA.textContent = "69,85%";
    mYScruIMen.textContent = "0,76%";
    oescruIA.textContent = "72%";
    oescruIMen.textContent = "0,53%";

    precio_solidos_UT.textContent = "481,73";
    precio_solidos_UTvar_IMen.textContent = "1,14%";
    precio_x_kg_solidos_UTvar_IA.textContent = "69,03%";
    proteina.textContent = "3,42%";
    grasa_butirosa.textContent = "3,67%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "227,06";
    produ_lechcrudIMen.textContent = "-6,09%";
    produ_lechecrudaIA .textContent = "-0,91%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "13,9%";
    aN_Li_x_c_Men.textContent = "7,2%";
    aSur_Li_x_c_IA.textContent = "7,9%";
    aSur_Li_x_c_IMen.textContent = "5,5%";
    mYS_Li_x_c_IA.textContent = "-3,2%";
    mYS_Li_x_c_IMen.textContent = "8,5%";
    oes_Li_x_c_IA.textContent = "-1,9%";
    oes_Li_x_c_IMen.textContent = "5,2%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "6,99%";
    s_cuenAbasSur.textContent = "7%";
    s_cuenMyS.textContent = "7,17%";
    s_cuenO.textContent = "7,07%"; 

    //Gráfico1
    graf_precio_litro.data.labels = ['Oct 20','Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21'];
    graf_precio_litro.data.datasets[0].data = [19.88,20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14];
    
    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [229.15,214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.97,6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function noviembre21(){
    monthYear.textContent = "Noviembre 2021";
    cantTambos.textContent = "1581";
    precioPorLitro.textContent = "35,52";
    variacion1.textContent = "1,11%";
    variacion2.textContent = "67,98%";

    pCAbasNort.textContent = "$ 35,59"; 
    pCAbasSur.textContent = "$ 34,22";
    pCMyS.textContent = "$ 34,98"; 
    pCO.textContent = "$ 34,31";

    aNcruIA.textContent = "69,64%";
    aNcruIMen.textContent = "1,45%";
    aSurcruIA.textContent = "70,5%";
    aSurcruIMen.textContent = "1,12%";
    mYScruIA.textContent = "66,97%";
    mYScruIMen.textContent = "0,95%";
    oescruIA.textContent = "67,94%";
    oescruIMen.textContent = "1%";

    precio_solidos_UT.textContent = "491,65"
    precio_solidos_UTvar_IMen.textContent = "2,06%"
    precio_x_kg_solidos_UTvar_IA.textContent = "65,39%"
    proteina.textContent = "3,37"
    grasa_butirosa.textContent = "3,65"

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "212,12 ";
    produ_lechcrudIMen.textContent = "-6,58%";
    produ_lechecrudaIA .textContent = "-1,07%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "13,8%";
    aN_Li_x_c_Men.textContent = "-7,7%";
    aSur_Li_x_c_IA.textContent = "7,7%";
    aSur_Li_x_c_IMen.textContent = "-7,9%";
    mYS_Li_x_c_IA.textContent = "-1,7%";
    mYS_Li_x_c_IMen.textContent = "-7,3%";
    oes_Li_x_c_IA.textContent = "-2,8%";
    oes_Li_x_c_IMen.textContent = "-6%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "6,97%";
    s_cuenAbasSur.textContent = "6,87%";
    s_cuenMyS.textContent = "7,09%";
    s_cuenO.textContent = "7,01%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Nov 20','Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21'];
    graf_precio_litro.data.datasets[0].data = [20.55,21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [214.41,204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.91,6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02];


    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function diciembre21(){
    monthYear.textContent = "Diciembre 2021";
    cantTambos.textContent = "1559";
    precioPorLitro.textContent = "35,15";
    variacion1.textContent = "1,83%";
    variacion2.textContent = "63,64%";

    pCAbasNort.textContent = "$ 36,36"; 
    pCAbasSur.textContent = "$ 34,82";
    pCMyS.textContent = "$ 35,76"; 
    pCO.textContent = "$ 34,91";

    aNcruIA.textContent = "67,10%";
    aNcruIMen.textContent = "2,16%";
    aSurcruIA.textContent = "64,92%";
    aSurcruIMen.textContent = "1,75%";
    mYScruIA.textContent = "63,21%";
    mYScruIMen.textContent = "2,23%";
    oescruIA.textContent = "63,44%";
    oescruIMen.textContent = "1,75%";

    precio_solidos_UT.textContent = "505,05";
    precio_solidos_UTvar_IMen.textContent = "2,73 %";
    precio_x_kg_solidos_UTvar_IA.textContent = "60,90%";
    proteina.textContent = "3,33%";
    grasa_butirosa.textContent = "3,63%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "203,04";
    produ_lechcrudIMen.textContent = "-4,28%";
    produ_lechecrudaIA .textContent = "-0,78%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "12,9%";
    aN_Li_x_c_Men.textContent = "-4,5%";
    aSur_Li_x_c_IA.textContent = "9,8%";
    aSur_Li_x_c_IMen.textContent = "-1,8%";
    mYS_Li_x_c_IA.textContent = "0,6%";
    mYS_Li_x_c_IMen.textContent = "-4%";
    oes_Li_x_c_IA.textContent = "-3,8%";
    oes_Li_x_c_IMen.textContent = "-5,3%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "6,94%";
    s_cuenAbasSur.textContent = "6,85%";
    s_cuenMyS.textContent = "7,02%";
    s_cuenO.textContent = "6,03%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Dic 20','Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21'];
    graf_precio_litro.data.datasets[0].data = [21.48,22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [204.64,187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.84,6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function enero22(){
    monthYear.textContent = "Enero 2022";
    cantTambos.textContent = "1544";
    precioPorLitro.textContent = "36,58";
    variacion1.textContent = "4,07%"
    variacion2.textContent = "59,60%"

    pCAbasNort.textContent = "$ 37,86"; 
    pCAbasSur.textContent = "$ 36,12";
    pCMyS.textContent = "$ 37,06"; 
    pCO.textContent = "$ 36,40";

    aNcruIA.textContent = "63,12%";
    aNcruIMen.textContent = "4,13%";
    aSurcruIA.textContent = "60,39%";
    aSurcruIMen.textContent = "3,73%";
    mYScruIA.textContent = "59,95%";
    mYScruIMen.textContent = "3,64%";
    oescruIA.textContent = "58,95%";
    oescruIMen.textContent = "4,27%";

    precio_solidos_UT.textContent = "525,43";
    precio_solidos_UTvar_IMen.textContent = "4,04 %";
    precio_x_kg_solidos_UTvar_IA.textContent = "58,19%";
    proteina.textContent = "3,32%";
    grasa_butirosa.textContent = "3,64%";

    cantTambos2.textContent = "1544";
    prod_mensual_lech_crud.textContent = "179,11";
    produ_lechcrudIMen.textContent = "-11,79%";
    produ_lechecrudaIA .textContent = "-4,60%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "9,1 %";
    aN_Li_x_c_Men.textContent = "-12%";
    aSur_Li_x_c_IA.textContent = "4,5%";
    aSur_Li_x_c_IMen.textContent = "-8,8%";
    mYS_Li_x_c_IA.textContent = "-1,6%";
    mYS_Li_x_c_IMen.textContent = "-9,61%";
    oes_Li_x_c_IA.textContent = "-8,32%";
    oes_Li_x_c_IMen.textContent = "-13,97%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7%";
    s_cuenAbasSur.textContent = "6,85%";
    s_cuenMyS.textContent = "7,01%";
    s_cuenO.textContent = "6,94%";
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Ene 21','Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22'];
    graf_precio_litro.data.datasets[0].data = [22.92,24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [187.75,160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.90,7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function febrero22(){
    monthYear.textContent = "Febrero 2022";
    cantTambos.textContent = "1537";
    precioPorLitro.textContent = "38,43";
    variacion1.textContent = "5,06%"
    variacion2.textContent = "58,87%"

    pCAbasNort.textContent = "$ 39,44"; 
    pCAbasSur.textContent = "$ 37,93";
    pCMyS.textContent = "$ 39,26"; 
    pCO.textContent = "$ 38,22";

    aNcruIA.textContent = "59,22%";
    aNcruIMen.textContent = "4,17%";
    aSurcruIA.textContent = "58,8%";
    aSurcruIMen.textContent = "5,01%";
    mYScruIA.textContent = "58,56%";
    mYScruIMen.textContent = "5,94%";
    oescruIA.textContent = "58,06%";
    oescruIMen.textContent = "5,01%";

    precio_solidos_UT.textContent = "541,88";
    precio_solidos_UTvar_IMen.textContent = "3,13 %";
    precio_x_kg_solidos_UTvar_IA.textContent = "56,77%";
    proteina.textContent = "3,40%";
    grasa_butirosa.textContent = "3,69%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "155,57";
    produ_lechcrudIMen.textContent = "-13,14%";
    produ_lechecrudaIA .textContent = "-3,28%";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "9,1%";
    aN_Li_x_c_Men.textContent = "-12%";
    aSur_Li_x_c_IA.textContent = "4,5%";
    aSur_Li_x_c_IMen.textContent = "-8,8%";
    mYS_Li_x_c_IA.textContent = "-1,6%";
    mYS_Li_x_c_IMen.textContent = "-9,61%";
    oes_Li_x_c_IA.textContent = "-8,32%";
    oes_Li_x_c_IMen.textContent = "-13,97%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,14%";
    s_cuenAbasSur.textContent = "9,94%";
    s_cuenMyS.textContent = "7,09%";
    s_cuenO.textContent = "7,09%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Feb 21','Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22'];
    graf_precio_litro.data.datasets[0].data = [24.19,26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [160.84,174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.00,7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function marzo2022(){
    monthYear.textContent = "Marzo 2022";
    cantTambos.textContent = "1540";
    precioPorLitro.textContent = "41,12";
    variacion1.textContent = "7%";
    variacion2.textContent = "57,85%"; 

    pCAbasNort.textContent = "$ 42,15"; 
    pCAbasSur.textContent = "$ 40,27";
    pCMyS.textContent = "$ 41,68"; 
    pCO.textContent = "$ 40,95";

    aNcruIA.textContent = "60,01%";
    aNcruIMen.textContent = "6,9%";
    aSurcruIA.textContent = "56,9%";
    aSurcruIMen.textContent = "6,2%";
    mYScruIA.textContent = "55,9%";
    mYScruIMen.textContent = "6,1%";
    oescruIA.textContent = "57,3%";
    oescruIMen.textContent = "7,1%";

    precio_solidos_UT.textContent = "566,48";
    precio_solidos_UTvar_IMen.textContent = "4,54%";
    precio_x_kg_solidos_UTvar_IA.textContent = "53,78%";
    proteina.textContent = "3,46%";
    grasa_butirosa.textContent = "3,79%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "169,09";
    produ_lechcrudIMen.textContent = "8,70%";
    produ_lechecrudaIA.textContent = "-3,09% ";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "-2,4%";
    aN_Li_x_c_Men.textContent = "12,2%";
    aSur_Li_x_c_IA.textContent = "3,8%";
    aSur_Li_x_c_IMen.textContent = "4,4%";
    mYS_Li_x_c_IA.textContent = "1,4%";
    mYS_Li_x_c_IMen.textContent = "14,1%";
    oes_Li_x_c_IA.textContent = "-7,2%";
    oes_Li_x_c_IMen.textContent = "9,3%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,3%";
    s_cuenAbasSur.textContent = "7,09%";
    s_cuenMyS.textContent = "7,22%";
    s_cuenO.textContent = "7,25%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Mar 21','Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22'];
    graf_precio_litro.data.datasets[0].data = [26.05,28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [174.48,170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.07,7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function abril2022(){
    monthYear.textContent = "Abril 2022";
    cantTambos.textContent = "1563";
    precioPorLitro.textContent = "44,31";
    variacion1.textContent = "7,76%";
    variacion2.textContent = "56,02%"; 

    pCAbasNort.textContent = "$ 45,70"; 
    pCAbasSur.textContent = "$ 43,27";
    pCMyS.textContent = "$ 44,96"; 
    pCO.textContent = "$ 44,12";

    aNcruIA.textContent = "56,7%";
    aNcruIMen.textContent = "8,4%";
    aSurcruIA.textContent = "55,5%";
    aSurcruIMen.textContent = "7,4%";
    mYScruIA.textContent = "56%";
    mYScruIMen.textContent = "7,8%";
    oescruIA.textContent = "55,3%";
    oescruIMen.textContent = "7,7%";

    precio_solidos_UT.textContent = "601,81";
    precio_solidos_UTvar_IMen.textContent = "6,24%";
    precio_x_kg_solidos_UTvar_IA.textContent = "51,98%";
    proteina.textContent = "3,52%";
    grasa_butirosa.textContent = "3,85%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "164,54";
    produ_lechcrudIMen.textContent = "-3,15%";
    produ_lechecrudaIA.textContent = "-3,54% ";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "-1,6%";
    aN_Li_x_c_Men.textContent = "-3,8%";
    aSur_Li_x_c_IA.textContent = "3,8%";
    aSur_Li_x_c_IMen.textContent = "-4,2%";
    mYS_Li_x_c_IA.textContent = "-1%";
    mYS_Li_x_c_IMen.textContent = "-2,8%";
    oes_Li_x_c_IA.textContent = "-7,3%";
    oes_Li_x_c_IMen.textContent = "-1.5%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,35%";
    s_cuenAbasSur.textContent = "7,14%";
    s_cuenMyS.textContent = "7,33%";
    s_cuenO.textContent = "7,38%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Abr 21','May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22'];
    graf_precio_litro.data.datasets[0].data = [28.40,30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [170.58,182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.17,7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function mayo2022(){
    monthYear.textContent = "Mayo 2022";
    cantTambos.textContent = "1552";
    precioPorLitro.textContent = "46,87";
    variacion1.textContent = "5,78%";
    variacion2.textContent = "55,5%"; 

    pCAbasNort.textContent = "$ 48,24"; 
    pCAbasSur.textContent = "$ 45,51";
    pCMyS.textContent = "$ 47,95"; 
    pCO.textContent = "$ 46,68";

    aNcruIA.textContent = "56,9%";
    aNcruIMen.textContent = "5,6%";
    aSurcruIA.textContent = "54%";
    aSurcruIMen.textContent = "5,2%";
    mYScruIA.textContent = "56,9%";
    mYScruIMen.textContent = "6,7%";
    oescruIA.textContent = "54,5%";
    oescruIMen.textContent = "5,8%";

    precio_solidos_UT.textContent = "630,6";
    precio_solidos_UTvar_IMen.textContent = "4,78%";
    precio_x_kg_solidos_UTvar_IA.textContent = "52,5%";
    proteina.textContent = "3,56%";
    grasa_butirosa.textContent = "3,87%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "177,47";
    produ_lechcrudIMen.textContent = "7,8%";
    produ_lechecrudaIA.textContent = "-2,6% ";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "-3,6%";
    aN_Li_x_c_Men.textContent = "8,2%";
    aSur_Li_x_c_IA.textContent = "0,7%";
    aSur_Li_x_c_IMen.textContent = "7,2%";
    mYS_Li_x_c_IA.textContent = "-1,2%";
    mYS_Li_x_c_IMen.textContent = "6,1%";
    oes_Li_x_c_IA.textContent = "-4,3%";
    oes_Li_x_c_IMen.textContent = "8,9%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,43%";
    s_cuenAbasSur.textContent = "7,18%";
    s_cuenMyS.textContent = "7,42%";
    s_cuenO.textContent = "7,45%";
    
    //Gráfico1
    graf_precio_litro.data.labels = ['May 21','Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22'];
    graf_precio_litro.data.datasets[0].data = [30.15,31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [182.11,180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.29,7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function junio2022(){
    monthYear.textContent = "Junio 2022";
    cantTambos.textContent = "1541";
    precioPorLitro.textContent = "49,21";
    variacion1.textContent = "4,9%";
    variacion2.textContent = "55,3%"; 

    pCAbasNort.textContent = "$ 51,19"; 
    pCAbasSur.textContent = "$ 48,18";
    pCMyS.textContent = "$ 49,77"; 
    pCO.textContent = "$ 49";

    aNcruIA.textContent = "57,2%";
    aNcruIMen.textContent = "6,1%";
    aSurcruIA.textContent = "54,7%";
    aSurcruIMen.textContent = "5,9%";
    mYScruIA.textContent = "55,6%";
    mYScruIMen.textContent = "3,8%";
    oescruIA.textContent = "54,5%";
    oescruIMen.textContent = "4,9%";

    precio_solidos_UT.textContent = "663,35";
    precio_solidos_UTvar_IMen.textContent = "5,2%";
    precio_x_kg_solidos_UTvar_IA.textContent = "51,4%";
    proteina.textContent = "3,56%";
    grasa_butirosa.textContent = "3,86%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "174,59";
    produ_lechcrudIMen.textContent = "-1,69%";
    produ_lechecrudaIA.textContent = "-3,53% ";
    var_int_2019.textContent = "-";
    var_int_2020.textContent = "-";

    aN_Li_x_c_IA.textContent = "-6,3%";
    aN_Li_x_c_Men.textContent = "-1,6%";
    aSur_Li_x_c_IA.textContent = "-2,4%";
    aSur_Li_x_c_IMen.textContent = "-1,2%";
    mYS_Li_x_c_IA.textContent = "1,7%";
    mYS_Li_x_c_IMen.textContent = "-6,4%";
    oes_Li_x_c_IA.textContent = "-5,1%";
    oes_Li_x_c_IMen.textContent = "-0,2%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,41%";
    s_cuenAbasSur.textContent = "7,19%";
    s_cuenMyS.textContent = "7,36%";
    s_cuenO.textContent = "7,45%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Jun 21','Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22'];
    graf_precio_litro.data.datasets[0].data = [31.69,32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21];
    
    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [180.98,195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.23,7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42];

    //Funciones-----------
    no_bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function julio2022(){
    monthYear.textContent = "Julio 2022";
    cantTambos.textContent = "1557";
    precioPorLitro.textContent = "52,06";
    variacion1.textContent = "5,8%";
    variacion2.textContent = "59,1%"; 

    pCAbasNort.textContent = "$ 53,54"; 
    pCAbasSur.textContent = "$ 50,86";
    pCMyS.textContent = "$ 53,13"; 
    pCO.textContent = "$ 51,93";

    aNcruIA.textContent = "60,6%";
    aNcruIMen.textContent = "4,6%";
    aSurcruIA.textContent = "57,5%";
    aSurcruIMen.textContent = "5,6%";
    mYScruIA.textContent = "59,9%";
    mYScruIMen.textContent = "6,7%";
    oescruIA.textContent = "58,8%";
    oescruIMen.textContent = "5,9%";

    precio_solidos_UT.textContent = "707,77";
    precio_solidos_UTvar_IMen.textContent = "6,7%";
    precio_x_kg_solidos_UTvar_IA.textContent = "55,4%";
    proteina.textContent = "3,51%";
    grasa_butirosa.textContent = "3,85%";

    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "187,25";
    produ_lechcrudIMen.textContent = "7,25%";
    produ_lechecrudaIA.textContent = "-4,21% ";
    var_int_2019.textContent = "1,8%";
    var_int_2020.textContent = "-7,5%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    aN_Li_x_c_IA.textContent = "-9,4%";
    aN_Li_x_c_Men.textContent = "5,9%";
    aSur_Li_x_c_IA.textContent = "-1,1%";
    aSur_Li_x_c_IMen.textContent = "7,5%";
    mYS_Li_x_c_IA.textContent = "2,2%";
    mYS_Li_x_c_IMen.textContent = "4,6%";
    oes_Li_x_c_IA.textContent = "-6%";
    oes_Li_x_c_IMen.textContent = "8,22%";

    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,32%";
    s_cuenAbasSur.textContent = "7,15%";
    s_cuenMyS.textContent = "7,29%";
    s_cuenO.textContent = "7,39%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Jul 21','Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22'];
    graf_precio_litro.data.datasets[0].data = [32.73,33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [195.47,211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.19,7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36];

     //Funciones-----------
     bloque_variacion();
     no_leyenda();
     no_leyenda_12_07_2023();
     no_leyenda_09_02_2024();
     ocultar_agregado_ministro_0();
};

function agosto2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Agosto 2022";
    cantTambos.textContent = "1554";
    precioPorLitro.textContent = "54,34";
    variacion1.textContent = "4,4%";
    variacion2.textContent = "62,6%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 55,44"; 
    pCAbasSur.textContent = "$ 53,37";
    pCMyS.textContent = "$ 55,20"; 
    pCO.textContent = "$ 54,27";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "63,1%";
    aNcruIMen.textContent = "3,5%";
    aSurcruIA.textContent = "59,7%";
    aSurcruIMen.textContent = "4,9%";
    mYScruIA.textContent = "60,8%";
    mYScruIMen.textContent = "3,9%";
    oescruIA.textContent = "63,6%";
    oescruIMen.textContent = "4,5%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "748,17";
    precio_solidos_UTvar_IMen.textContent = "5,7%";
    precio_x_kg_solidos_UTvar_IA.textContent = "59,9%";
    proteina.textContent = "3,48%";
    grasa_butirosa.textContent = "3,78%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "204,09";
    produ_lechcrudIMen.textContent = "8,9%";
    produ_lechecrudaIA.textContent = "-3,3%";
    var_int_2019.textContent = "2,5%";
    var_int_2020.textContent = "-3,2%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-5%";
    aN_Li_x_c_Men.textContent = "11,8%";
    aSur_Li_x_c_IA.textContent = "-1,1%";
    aSur_Li_x_c_IMen.textContent = "6,7%";
    mYS_Li_x_c_IA.textContent = "-1,2%";
    mYS_Li_x_c_IMen.textContent = "9,1%";
    oes_Li_x_c_IA.textContent = "-4,7%";
    oes_Li_x_c_IMen.textContent = "9,2%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,28%";
    s_cuenAbasSur.textContent = "7,13%";
    s_cuenMyS.textContent = "7,19%";
    s_cuenO.textContent = "7,27%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Ago 21','Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22'];
    graf_precio_litro.data.datasets[0].data = [33.42,33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [211.09,214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.14,7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26];

     //Funciones-----------
     bloque_variacion();
     no_leyenda();
     no_leyenda_12_07_2023();
     no_leyenda_09_02_2024();
     ocultar_agregado_ministro_0();
};

function septiembre2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Septiembre 2022";
    cantTambos.textContent = "1545";
    precioPorLitro.textContent = "57,03";
    variacion1.textContent = "4,9%";
    variacion2.textContent = "68,2%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 58,35"; 
    pCAbasSur.textContent = "$ 56,15";
    pCMyS.textContent = "$ 57,87"; 
    pCO.textContent = "$ 56,93";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "68,6%";
    aNcruIMen.textContent = "5,2%";
    aSurcruIA.textContent = "66,8%";
    aSurcruIMen.textContent = "5,2%";
    mYScruIA.textContent = "68,2%";
    mYScruIMen.textContent = "4,8%";
    oescruIA.textContent = "68,5%";
    oescruIMen.textContent = "4,9%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "791,81";
    precio_solidos_UTvar_IMen.textContent = "5,8%";
    precio_x_kg_solidos_UTvar_IA.textContent = "66,2%";
    proteina.textContent = "3,48%";
    grasa_butirosa.textContent = "3,72%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "208,46";
    produ_lechcrudIMen.textContent = "2,1%";
    produ_lechecrudaIA.textContent = "-2,6%";
    var_int_2019.textContent = "1,7%";
    var_int_2020.textContent = "-3,3%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-7%";
    aN_Li_x_c_Men.textContent = "-0,3%";
    aSur_Li_x_c_IA.textContent = "-2,4%";
    aSur_Li_x_c_IMen.textContent = "1,5%";
    mYS_Li_x_c_IA.textContent = "2,4%";
    mYS_Li_x_c_IMen.textContent = "6%";
    oes_Li_x_c_IA.textContent = "-3,3%";
    oes_Li_x_c_IMen.textContent = "1,9%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,19%";
    s_cuenAbasSur.textContent = "7,03%";
    s_cuenMyS.textContent = "7,13%";
    s_cuenO.textContent = "7,23%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Sep 21','Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22'];
    graf_precio_litro.data.datasets[0].data = [33.90,34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [214.02,227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.12,7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20];

    //Funciones-----------
    bloque_variacion();
    no_leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function octubre2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Octubre 2022";
    cantTambos.textContent = "1536";
    precioPorLitro.textContent = "59,88";
    variacion1.textContent = "5%";
    variacion2.textContent = "75,4%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 61,40"; 
    pCAbasSur.textContent = "$ 58,89";
    pCMyS.textContent = "$ 61,39"; 
    pCO.textContent = "$ 59,64";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "75%";
    aNcruIMen.textContent = "5,2%";
    aSurcruIA.textContent = "74%";
    aSurcruIMen.textContent = "4,9%";
    mYScruIA.textContent = "77,2%";
    mYScruIMen.textContent = "6,1%";
    oescruIA.textContent = "75,6%";
    oescruIMen.textContent = "4,8%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "833,84";
    precio_solidos_UTvar_IMen.textContent = "5,3%";
    precio_x_kg_solidos_UTvar_IA.textContent = "73,1%";
    proteina.textContent = "3,46%";
    grasa_butirosa.textContent = "3,72%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "217,48";
    produ_lechcrudIMen.textContent = "4,3%";
    produ_lechecrudaIA.textContent = "-4,2%";
    var_int_2019.textContent = "6,3%";
    var_int_2020.textContent = "-5,1%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-7%";
    aN_Li_x_c_Men.textContent = "7,3%";
    aSur_Li_x_c_IA.textContent = "-4,8%";
    aSur_Li_x_c_IMen.textContent = "2,9%";
    mYS_Li_x_c_IA.textContent = "-2,3%";
    mYS_Li_x_c_IMen.textContent = "3,6%";
    oes_Li_x_c_IA.textContent = "-4,5%";
    oes_Li_x_c_IMen.textContent = "4,1%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,15%";
    s_cuenAbasSur.textContent = "7,01%";
    s_cuenMyS.textContent = "7,17%";
    s_cuenO.textContent = "7,20%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Oct 21','Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22'];
    graf_precio_litro.data.datasets[0].data = [34.14,35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [227.06,212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.09,7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18];

    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();
};

function noviembre2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Noviembre 2022";
    cantTambos.textContent = "1533";
    precioPorLitro.textContent = "63,17";
    variacion1.textContent = "5,5%";
    variacion2.textContent = "83%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 65,15"; 
    pCAbasSur.textContent = "$ 62,30";
    pCMyS.textContent = "$ 64,81"; 
    pCO.textContent = "$ 62,82";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "83%";
    aNcruIMen.textContent = "6,1%";
    aSurcruIA.textContent = "82,1%";
    aSurcruIMen.textContent = "5,8%";
    mYScruIA.textContent = "85,3%";
    mYScruIMen.textContent = "5,6%";
    oescruIA.textContent = "83,1%";
    oescruIMen.textContent = "5,3%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "888,19";
    precio_solidos_UTvar_IMen.textContent = "6,5%";
    precio_x_kg_solidos_UTvar_IA.textContent = "80,1%";
    proteina.textContent = "3,42%";
    grasa_butirosa.textContent = "3,69%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "204,07";
    produ_lechcrudIMen.textContent = "-6,2%";
    produ_lechecrudaIA.textContent = "-3,8%";
    var_int_2019.textContent = "-0,8%";
    var_int_2020.textContent = "-4,9%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-5,5%";
    aN_Li_x_c_Men.textContent = "-6,3%";
    aSur_Li_x_c_IA.textContent = "-5,2%";
    aSur_Li_x_c_IMen.textContent = "-8,3%";
    mYS_Li_x_c_IA.textContent = "-0,1%";
    mYS_Li_x_c_IMen.textContent = "-5,3%";
    oes_Li_x_c_IA.textContent = "-4,2%";
    oes_Li_x_c_IMen.textContent = "-5,6%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,11%";
    s_cuenAbasSur.textContent = "6,98%";
    s_cuenMyS.textContent = "7,12%";
    s_cuenO.textContent = "7,11%";

    //Gráfico1
    graf_precio_litro.data.labels = ['Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22'];
    graf_precio_litro.data.datasets[0].data = [35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11];
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function diciembre2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Diciembre 2022";
    cantTambos.textContent = "1529";
    precioPorLitro.textContent = "67,76";
    variacion1.textContent = "7,3%";
    variacion2.textContent = "92,8%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 70,91"; 
    pCAbasSur.textContent = "$ 67,24";
    pCMyS.textContent = "$ 68,50"; 
    pCO.textContent = "$ 67,37";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "95%";
    aNcruIMen.textContent = "8,8%";
    aSurcruIA.textContent = "93,1%";
    aSurcruIMen.textContent = "7,9%";
    mYScruIA.textContent = "91,5%";
    mYScruIMen.textContent = "5,7%";
    oescruIA.textContent = "92,9%";
    oescruIMen.textContent = "7,2%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "967,58";
    precio_solidos_UTvar_IMen.textContent = "8,9%";
    precio_x_kg_solidos_UTvar_IA.textContent = "91,6%";
    proteina.textContent = "3,36%";
    grasa_butirosa.textContent = "3,64%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "201,86";
    produ_lechcrudIMen.textContent = "-1,08%";
    produ_lechecrudaIA.textContent = "-0,58%";
    var_int_2019.textContent = "1,4%";
    var_int_2020.textContent = "-1,36%";
    anio_1.textContent = "2019";
    anio_2.textContent = "2020";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-5,8%";
    aN_Li_x_c_Men.textContent = "-4,8%";
    aSur_Li_x_c_IA.textContent = "-3,4%";
    aSur_Li_x_c_IMen.textContent = "0,0%";
    mYS_Li_x_c_IA.textContent = "2%";
    mYS_Li_x_c_IMen.textContent = "-2,1%";
    oes_Li_x_c_IA.textContent = "0,8%";
    oes_Li_x_c_IMen.textContent = "-0,4%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "6,96%";
    s_cuenAbasSur.textContent = "6,88%";
    s_cuenMyS.textContent = "7,02%";
    s_cuenO.textContent = "7,01%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22'];
    graf_precio_litro.data.datasets[0].data = [35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function enero2023(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Enero 2023";
    cantTambos.textContent = "1527";
    precioPorLitro.textContent = "71,83";
    variacion1.textContent = "6%";
    variacion2.textContent = "96,4%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 74,55"; 
    pCAbasSur.textContent = "$ 70,97";
    pCMyS.textContent = "$ 72,56"; 
    pCO.textContent = "$ 71,62";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "96,9%";
    aNcruIMen.textContent = "5,1%";
    aSurcruIA.textContent = "96,5%";
    aSurcruIMen.textContent = "5,5%";
    mYScruIA.textContent = "95,8%";
    mYScruIMen.textContent = "5,9%";
    oescruIA.textContent = "96,8%";
    oescruIMen.textContent = "6,3%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1025,57";
    precio_solidos_UTvar_IMen.textContent = "5,9%";
    precio_x_kg_solidos_UTvar_IA.textContent = "95,2%";
    proteina.textContent = "3,35%";
    grasa_butirosa.textContent = "3,65%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "185,91";
    produ_lechcrudIMen.textContent = "-7,9%";
    produ_lechecrudaIA.textContent = "3,8%";
    var_int_2019.textContent = "2,2%";
    var_int_2020.textContent = "-0,9%";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "5,4%";
    aN_Li_x_c_Men.textContent = "-1,5%";
    aSur_Li_x_c_IA.textContent = "1,4%";
    aSur_Li_x_c_IMen.textContent = "-4,2%";
    mYS_Li_x_c_IA.textContent = "3,4%";
    mYS_Li_x_c_IMen.textContent = "-8,4%";
    oes_Li_x_c_IA.textContent = "5,3%";
    oes_Li_x_c_IMen.textContent = "-10,1%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "6,98%";
    s_cuenAbasSur.textContent = "6,90%";
    s_cuenMyS.textContent = "7,03%";
    s_cuenO.textContent = "7%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23'];
    graf_precio_litro.data.datasets[0].data = [36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function febrero2023(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Febrero 2023";
    cantTambos.textContent = "1515";
    precioPorLitro.textContent = "76";
    variacion1.textContent = "5,8%";
    variacion2.textContent = "97,8%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 78,61"; 
    pCAbasSur.textContent = "$ 74,81";
    pCMyS.textContent = "$ 78,12"; 
    pCO.textContent = "$ 75,56";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "99,3%";
    aNcruIMen.textContent = "5,5%";
    aSurcruIA.textContent = "97,2%";
    aSurcruIMen.textContent = "5,4%";
    mYScruIA.textContent = "98,8%";
    mYScruIMen.textContent = "7,6%";
    oescruIA.textContent = "97,7%";
    oescruIMen.textContent = "5,5%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1073,56";
    precio_solidos_UTvar_IMen.textContent = "4,7%";
    precio_x_kg_solidos_UTvar_IA.textContent = "98,1%";
    proteina.textContent = "3,39%";
    grasa_butirosa.textContent = "3,69%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "154,9";
    produ_lechcrudIMen.textContent = "-16,7%";
    produ_lechecrudaIA.textContent = "-0,4%";
    var_int_2019.textContent = "-3,5%";
    var_int_2020.textContent = "-3,7%";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-2%";
    aN_Li_x_c_Men.textContent = "-17,3%";
    aSur_Li_x_c_IA.textContent = "-4,1%";
    aSur_Li_x_c_IMen.textContent = "-13,9%";
    mYS_Li_x_c_IA.textContent = "1,2%";
    mYS_Li_x_c_IMen.textContent = "-13,6%";
    oes_Li_x_c_IA.textContent = "1%";
    oes_Li_x_c_IMen.textContent = "-18,5%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,10%";
    s_cuenAbasSur.textContent = "6,95%";
    s_cuenMyS.textContent = "7,12%";
    s_cuenO.textContent = "7,07%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23'];
    graf_precio_litro.data.datasets[0].data = [38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83,76];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function marzo2023(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Marzo 2023";
    cantTambos.textContent = "1529";
    precioPorLitro.textContent = "84,09";
    variacion1.textContent = "10,6%";
    variacion2.textContent = "104,5%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 86,85"; 
    pCAbasSur.textContent = "$ 83,06";
    pCMyS.textContent = "$ 84,76"; 
    pCO.textContent = "$ 83,85";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "106,1%";
    aNcruIMen.textContent = "10,5%";
    aSurcruIA.textContent = "106,3%";
    aSurcruIMen.textContent = "11,3%";
    mYScruIA.textContent = "103,4%";
    mYScruIMen.textContent = "8,5%";
    oescruIA.textContent = "104,8%";
    oescruIMen.textContent = "10,9%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1166,29";
    precio_solidos_UTvar_IMen.textContent = "8,6%";
    precio_x_kg_solidos_UTvar_IA.textContent = "105,9%";
    proteina.textContent = "3,43%";
    grasa_butirosa.textContent = "3,78%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "166,59";
    produ_lechcrudIMen.textContent = "7,5%";
    produ_lechecrudaIA.textContent = "-1,5%";
    var_int_2019.textContent = "-1,8%";
    var_int_2020.textContent = "-4,5%";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "-7%";
    aN_Li_x_c_Men.textContent = "-1,6%";
    aSur_Li_x_c_IA.textContent = "-7,7%";
    aSur_Li_x_c_IMen.textContent = "0,5%";
    mYS_Li_x_c_IA.textContent = "-4,1%";
    mYS_Li_x_c_IMen.textContent = "8,1%";
    oes_Li_x_c_IA.textContent = "2,3%";
    oes_Li_x_c_IMen.textContent = "10,7%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,27%";
    s_cuenAbasSur.textContent = "7,06%";
    s_cuenMyS.textContent = "7,19%";
    s_cuenO.textContent = "7,21%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23'];
    graf_precio_litro.data.datasets[0].data = [41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83,76,84.09];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function abril2023(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Abril 2023";
    cantTambos.textContent = "1525";
    precioPorLitro.textContent = "92,73";
    variacion1.textContent = "10,3%";
    variacion2.textContent = "109,3%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 95,93"; 
    pCAbasSur.textContent = "$ 91,05";
    pCMyS.textContent = "$ 93,51"; 
    pCO.textContent = "$ 92,49";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "109,9%";
    aNcruIMen.textContent = "10,4%";
    aSurcruIA.textContent = "110,4%";
    aSurcruIMen.textContent = "9,6%";
    mYScruIA.textContent = "107,9%";
    mYScruIMen.textContent = "10,3%";
    oescruIA.textContent = "109,6%";
    oescruIMen.textContent = "10,3%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1253,59";
    precio_solidos_UTvar_IMen.textContent = "7,5%";
    precio_x_kg_solidos_UTvar_IA.textContent = "108,3%";
    proteina.textContent = "3,5%";
    grasa_butirosa.textContent = "3,9%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "170,36";
    produ_lechcrudIMen.textContent = "2,3%";
    produ_lechecrudaIA.textContent = "3,5%";
    var_int_2019.textContent = "-0,26%";
    var_int_2020.textContent = "-0,13%";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "0,5%";
    aN_Li_x_c_Men.textContent = "4%";
    aSur_Li_x_c_IA.textContent = "-3,5%";
    aSur_Li_x_c_IMen.textContent = "0,03%";
    mYS_Li_x_c_IA.textContent = "2,8%";
    mYS_Li_x_c_IMen.textContent = "4,1%";
    oes_Li_x_c_IA.textContent = "6,5%";
    oes_Li_x_c_IMen.textContent = "2,5%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,41%";
    s_cuenAbasSur.textContent = "7,20%";
    s_cuenMyS.textContent = "7,39%";
    s_cuenO.textContent = "7,42%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23'];
    graf_precio_litro.data.datasets[0].data = [44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83,76,84.09,92.73];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();
    no_leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    ocultar_agregado_ministro_0();

};

function mayo2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Mayo 2023";
    cantTambos.textContent = "1523";
    precioPorLitro.textContent = "100,74";
    variacion1.textContent = "8,6%";
    variacion2.textContent = "114,9%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 104,74";
    pCAbasSur.textContent = "$ 99,01";
    pCMyS.textContent = "$ 101,95";
    pCO.textContent = "$ 100,38";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "117,1%";
    aNcruIMen.textContent = "9,2%";
    aSurcruIA.textContent = "117,6%";
    aSurcruIMen.textContent = "8,7%";
    mYScruIA.textContent = "112,6%";
    mYScruIMen.textContent = "9,1%";
    oescruIA.textContent = "115,1%";
    oescruIMen.textContent = "8,5%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1349,06";
    precio_solidos_UTvar_IMen.textContent = "7,6%";
    precio_x_kg_solidos_UTvar_IA.textContent = "113,9%";
    proteina.textContent = "3,52%";
    grasa_butirosa.textContent = "3,95%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "176,63";
    produ_lechcrudIMen.textContent = "3,7%";
    produ_lechecrudaIA.textContent = "-0,5%";
    var_int_0.textContent = "3,4%";
    var_int_2019.textContent = "-3,9%";
    var_int_2020.textContent = "-3%";
    anio_0.textContent = "2019";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Mayo 2022";
    dato_comparativo_1.textContent = "845,8";
    mes_comparativo_2.textContent = "Acumulado Mayo 2023";
    dato_comparativo_2.textContent = "854,4";
    porcentaje_comparativo.textContent = "1,02%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-4,6%";
    aN_Li_x_c_Men.textContent = "2,7%";
    aSur_Li_x_c_IA.textContent = "-7,4%";
    aSur_Li_x_c_IMen.textContent = "2,9%";
    mYS_Li_x_c_IA.textContent = "-0,3%";
    mYS_Li_x_c_IMen.textContent = "2,9%";
    oes_Li_x_c_IA.textContent = "2,1%";
    oes_Li_x_c_IMen.textContent = "4,4%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,45%";
    s_cuenAbasSur.textContent = "7,22%";
    s_cuenMyS.textContent = "7,48%";
    s_cuenO.textContent = "7,49%";


    //Gráfico1
    graf_precio_litro.data.labels = ['May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23'];
    graf_precio_litro.data.datasets[0].data = [46.87,49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83,76,84.09,92.73,100.74];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [177.47,174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.43,7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    bloque_variacion();
    mostrar_agregado_ministro_0();
    

};

function junio2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Junio 2023";
    cantTambos.textContent = "1521";
    precioPorLitro.textContent = "107,39";
    variacion1.textContent = "6,6%";
    variacion2.textContent = "118,2%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 110,42";
    pCAbasSur.textContent = "$ 105,1";
    pCMyS.textContent = "$ 109,41";
    pCO.textContent = "$ 107,1";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "115,7%";
    aNcruIMen.textContent = "5,4%";
    aSurcruIA.textContent = "118,1%";
    aSurcruIMen.textContent = "6,1%";
    mYScruIA.textContent = "119,8%";
    mYScruIMen.textContent = "7,3%";
    oescruIA.textContent = "118,6%";
    oescruIMen.textContent = "6,7%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1453,31";
    precio_solidos_UTvar_IMen.textContent = "7,7%";
    precio_x_kg_solidos_UTvar_IA.textContent = "119,1%";
    proteina.textContent = "3,50%";
    grasa_butirosa.textContent = "3,89%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "177,32";
    produ_lechcrudIMen.textContent = "0,4%";
    produ_lechecrudaIA.textContent = "1,6%";
    var_int_0.textContent = "4,5%";
    var_int_2019.textContent = "-4,6%";
    var_int_2020.textContent = "-2%";
    anio_0.textContent = "2019";
    anio_1.textContent = "2020";
    anio_2.textContent = "2021";

    //comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Junio 2022";
    dato_comparativo_1.textContent = "1020,37";
    mes_comparativo_2.textContent = "Acumulado Junio 2023";
    dato_comparativo_2.textContent = "1031,71";
    porcentaje_comparativo.textContent = "1,11%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-1,8%";
    aN_Li_x_c_Men.textContent = "1,4%";
    aSur_Li_x_c_IA.textContent = "-2,9%";
    aSur_Li_x_c_IMen.textContent = "3,5%";
    mYS_Li_x_c_IA.textContent = "2%";
    mYS_Li_x_c_IMen.textContent = "-4,2%";
    oes_Li_x_c_IA.textContent = "3,1%";
    oes_Li_x_c_IMen.textContent = "0,8%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,28%";
    s_cuenAbasSur.textContent = "7,16%";
    s_cuenMyS.textContent = "7,42%";
    s_cuenO.textContent = "7,41%";


    //Gráfico1
    graf_precio_litro.data.labels = ['Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23'];
    graf_precio_litro.data.datasets[0].data = [49.21,52.06,54.34,57.03,59.88,63.17,67.76,71.83,76,84.09,92.73,100.74,107.39];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [174.59,187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.42,7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function julio2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Julio 2023";
    cantTambos.textContent = "1518";
    precioPorLitro.textContent = "112,51";
    variacion1.textContent = "4,7%";
    variacion2.textContent = "116,1%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 115,52";
    pCAbasSur.textContent = "$ 109,97";
    pCMyS.textContent = "$ 113,89";
    pCO.textContent = "$ 112,53";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "115,7%";
    aNcruIMen.textContent = "4,6%";
    aSurcruIA.textContent = "116,2%";
    aSurcruIMen.textContent = "4,5%";
    mYScruIA.textContent = "114,4%";
    mYScruIMen.textContent = "4,1%";
    oescruIA.textContent = "116,7%";
    oescruIMen.textContent = "5,7%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1529,27";
    precio_solidos_UTvar_IMen.textContent = "5,2%";
    precio_x_kg_solidos_UTvar_IA.textContent = "116,1%";
    proteina.textContent = "3,49%";
    grasa_butirosa.textContent = "3,86%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "191,13";
    produ_lechcrudIMen.textContent = "7,8%";
    produ_lechecrudaIA.textContent = "2,1%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Julio 2022";
    dato_comparativo_1.textContent = "1207,62";
    mes_comparativo_2.textContent = "Acumulado Julio 2023";
    dato_comparativo_2.textContent = "1222,84";
    porcentaje_comparativo.textContent = "1,26%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-0,5%";
    aN_Li_x_c_Men.textContent = "7,3%";
    aSur_Li_x_c_IA.textContent = "-1%";
    aSur_Li_x_c_IMen.textContent = "9,7%";
    mYS_Li_x_c_IA.textContent = "-0,4%";
    mYS_Li_x_c_IMen.textContent = "2,1%";
    oes_Li_x_c_IA.textContent = "3,8%";
    oes_Li_x_c_IMen.textContent = "8,9%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,32%";
    s_cuenAbasSur.textContent = "7,12%";
    s_cuenMyS.textContent = "7,35%";
    s_cuenO.textContent = "7,38%";


    //Gráfico1
    graf_precio_litro.data.labels = ['Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23'];
    graf_precio_litro.data.datasets[0].data = [52.06,54.34,57.03,59.88,63.17,67.76,71.83,76,84.09,92.73,100.74,107.39,112.51];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [187.25,204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.36,7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function agosto2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Agosto 2023";
    cantTambos.textContent = "1518";
    precioPorLitro.textContent = "117,42";
    variacion1.textContent = "4,4%";
    variacion2.textContent = "116,1%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 120,51";
    pCAbasSur.textContent = "$ 114,97";
    pCMyS.textContent = "$ 118,05";
    pCO.textContent = "$ 117,48";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "117,4%";
    aNcruIMen.textContent = "4,3%";
    aSurcruIA.textContent = "115,4%";
    aSurcruIMen.textContent = "4,5%";
    mYScruIA.textContent = "113,8%";
    mYScruIMen.textContent = "3,6%";
    oescruIA.textContent = "116,5%";
    oescruIMen.textContent = "4,4%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1614,55";
    precio_solidos_UTvar_IMen.textContent = "5,6%";
    precio_x_kg_solidos_UTvar_IA.textContent = "115,8%";
    proteina.textContent = "3,49%";
    grasa_butirosa.textContent = "3,78%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "209,23";
    produ_lechcrudIMen.textContent = "9,5%";
    produ_lechecrudaIA.textContent = "2,5%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Agosto 2022";
    dato_comparativo_1.textContent = "1411,71";
    mes_comparativo_2.textContent = "Acumulado Agosto 2023";
    dato_comparativo_2.textContent = "1432,07";
    porcentaje_comparativo.textContent = "1,4%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-2,3%";
    aN_Li_x_c_Men.textContent = "9,8%";
    aSur_Li_x_c_IA.textContent = "0,5%";
    aSur_Li_x_c_IMen.textContent = "8,4%";
    mYS_Li_x_c_IA.textContent = "5,1%";
    mYS_Li_x_c_IMen.textContent = "15,1%";
    oes_Li_x_c_IA.textContent = "3,7%";
    oes_Li_x_c_IMen.textContent = "9%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,2%";
    s_cuenAbasSur.textContent = "7,11%";
    s_cuenMyS.textContent = "7,21%";
    s_cuenO.textContent = "7,3%";


    //Gráfico1
    graf_precio_litro.data.labels = ['Ago 22','Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23'];
    graf_precio_litro.data.datasets[0].data = [54.34,57.03,59.88,63.17,67.76,71.83,76,84.09,92.73,100.74,107.39,112.51,117.42];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [204.09,208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.26,7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function septiembre2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Septiembre 2023";
    cantTambos.textContent = "1511";
    precioPorLitro.textContent = "122,66";
    variacion1.textContent = "4,5%";
    variacion2.textContent = "115,1%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 125,81";
    pCAbasSur.textContent = "$ 119,69";
    pCMyS.textContent = "$ 123,62";
    pCO.textContent = "$ 122,75";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "115,6%";
    aNcruIMen.textContent = "4,4%";
    aSurcruIA.textContent = "113,2%";
    aSurcruIMen.textContent = "4,1%";
    mYScruIA.textContent = "113,6%";
    mYScruIMen.textContent = "4,7%";
    oescruIA.textContent = "115,6%";
    oescruIMen.textContent = "4,5%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1694,5";
    precio_solidos_UTvar_IMen.textContent = "5%";
    precio_x_kg_solidos_UTvar_IA.textContent = "114%";
    proteina.textContent = "3,49%";
    grasa_butirosa.textContent = "3,75%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "212,88";
    produ_lechcrudIMen.textContent = "1,74%";
    produ_lechecrudaIA.textContent = "2,12%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //comparativa jul-2023 "Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Septiembre 2022";
    dato_comparativo_1.textContent = "1620,17";
    mes_comparativo_2.textContent = "Acumulado Septiembre 2023";
    dato_comparativo_2.textContent = "1644,95";
    porcentaje_comparativo.textContent = "1,53%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-0,4%";
    aN_Li_x_c_Men.textContent = "1,7%";
    aSur_Li_x_c_IA.textContent = "-1%";
    aSur_Li_x_c_IMen.textContent = "-0,1%";
    mYS_Li_x_c_IA.textContent = "4,7%";
    mYS_Li_x_c_IMen.textContent = "5,6%";
    oes_Li_x_c_IA.textContent = "3,3%";
    oes_Li_x_c_IMen.textContent = "1,6%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,28%";
    s_cuenAbasSur.textContent = "7,11%";
    s_cuenMyS.textContent = "7,21%";
    s_cuenO.textContent = "7,24%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Sep 22','Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23'];
    graf_precio_litro.data.datasets[0].data = [57.03,59.88,63.17,67.76,71.83,76,84.09,92.73,100.74,107.39,112.51,117.42,122.66];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [208.46,217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.20,7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function octubre2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Octubre 2023";
    cantTambos.textContent = "1514";
    precioPorLitro.textContent = "133,39";
    variacion1.textContent = "8,75%";
    variacion2.textContent = "122,76%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 137,17";
    pCAbasSur.textContent = "$ 130,04";
    pCMyS.textContent = "$ 134,56";
    pCO.textContent = "$ 133,52";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "123,4%";
    aNcruIMen.textContent = "9%";
    aSurcruIA.textContent = "120,8%";
    aSurcruIMen.textContent = "8,6%";
    mYScruIA.textContent = "119,2%";
    mYScruIMen.textContent = "8,8%";
    oescruIA.textContent = "123,8%";
    oescruIMen.textContent = "8,7%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "1852,41";
    precio_solidos_UTvar_IMen.textContent = "9,3%";
    precio_x_kg_solidos_UTvar_IA.textContent = "122,1%";
    proteina.textContent = "3,47%";
    grasa_butirosa.textContent = "3,73%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "223,64";
    produ_lechcrudIMen.textContent = "5,05%";
    produ_lechecrudaIA.textContent = "2,83%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //Comparativo volumen de muestra acumulado en millones de litros de leche cruda

    mes_comparativo_1.textContent = "Acumulado Octubre 2022";
    dato_comparativo_1.textContent = "1837,65";
    mes_comparativo_2.textContent = "Acumulado Octubre 2023";
    dato_comparativo_2.textContent = "1868,59";
    porcentaje_comparativo.textContent = "1,68%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-2,7%";
    aN_Li_x_c_Men.textContent = "4,8%";
    aSur_Li_x_c_IA.textContent = "1%";
    aSur_Li_x_c_IMen.textContent = "5%";
    mYS_Li_x_c_IA.textContent = "7,2%";
    mYS_Li_x_c_IMen.textContent = "6%";
    oes_Li_x_c_IA.textContent = "3,4%";
    oes_Li_x_c_IMen.textContent = "4,1%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,23%";
    s_cuenAbasSur.textContent = "7,07%";
    s_cuenMyS.textContent = "7,24%";
    s_cuenO.textContent = "7,19%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Oct 22','Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23'];
    graf_precio_litro.data.datasets[0].data = [59.88,63.17,67.76,71.83,76,84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [217.48,204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.18,7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function noviembre2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Noviembre 2023";
    cantTambos.textContent = "1497";
    precioPorLitro.textContent = "151,47";
    variacion1.textContent = "13,5%";
    variacion2.textContent = "139,8%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 154,03";
    pCAbasSur.textContent = "$ 146,78";
    pCMyS.textContent = "$ 154,25";
    pCO.textContent = "$ 151,68";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "136,4%";
    aNcruIMen.textContent = "12,3%";
    aSurcruIA.textContent = "136,8%";
    aSurcruIMen.textContent = "12,9%";
    mYScruIA.textContent = "138%";
    mYScruIMen.textContent = "14,6%";
    oescruIA.textContent = "141,4%";
    oescruIMen.textContent = "13,6%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "2105,36";
    precio_solidos_UTvar_IMen.textContent = "13,6%";
    precio_x_kg_solidos_UTvar_IA.textContent = "137,1%";
    proteina.textContent = "3,44%";
    grasa_butirosa.textContent = "3,75%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "207,35";
    produ_lechcrudIMen.textContent = "-7,3%";
    produ_lechecrudaIA.textContent = "1,6%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //"Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Noviembre 2022";
    dato_comparativo_1.textContent = "2041,72";
    mes_comparativo_2.textContent = "Acumulado Noviembre 2023";
    dato_comparativo_2.textContent = "2075,94";
    porcentaje_comparativo.textContent = "1,7%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-6,2%";
    aN_Li_x_c_Men.textContent = "-9,7%";
    aSur_Li_x_c_IA.textContent = "-0,1%";
    aSur_Li_x_c_IMen.textContent = "-9,3%";
    mYS_Li_x_c_IA.textContent = "4%";
    mYS_Li_x_c_IMen.textContent = "-8,1%";
    oes_Li_x_c_IA.textContent = "2,9%";
    oes_Li_x_c_IMen.textContent = "-6,1%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,23%";
    s_cuenAbasSur.textContent = "7,06%";
    s_cuenMyS.textContent = "7,27%";
    s_cuenO.textContent = "7,17%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Nov 22','Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23','Nov 23'];
    graf_precio_litro.data.datasets[0].data = [63.17,67.76,71.83,76,84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39,151.47];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [204.07,201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64,207.35];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.11,7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20,7.19];



    //Funciones-----------
    no_leyenda();
    leyenda_12_07_2023();
    no_leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function diciembre2023(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Diciembre 2023";
    cantTambos.textContent = "1491";
    precioPorLitro.textContent = "193,79";
    variacion1.textContent = "27,9%";
    variacion2.textContent = "185,9%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 195,15";
    pCAbasSur.textContent = "$ 186,31";
    pCMyS.textContent = "$ 196,73";
    pCO.textContent = "$ 194,51";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "175,2%";
    aNcruIMen.textContent = "26,7%";
    aSurcruIA.textContent = "177,1%";
    aSurcruIMen.textContent = "26,9%";
    mYScruIA.textContent = "187,2%";
    mYScruIMen.textContent = "27,5%";
    oescruIA.textContent = "188,7%";
    oescruIMen.textContent = "28,2%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "2716,84";
    precio_solidos_UTvar_IMen.textContent = "29,1%";
    precio_x_kg_solidos_UTvar_IA.textContent = "180,8%";
    proteina.textContent = "3,40%";
    grasa_butirosa.textContent = "3,73%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "195,98";
    produ_lechcrudIMen.textContent = "-5,5%";
    produ_lechecrudaIA.textContent = "-2,9%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //"Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado Diciembre 2022";
    dato_comparativo_1.textContent = "2243,58";
    mes_comparativo_2.textContent = "Acumulado Diciembre 2023";
    dato_comparativo_2.textContent = "2271,92";
    porcentaje_comparativo.textContent = "1,3%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-10,4%";
    aN_Li_x_c_Men.textContent = "-9,1%";
    aSur_Li_x_c_IA.textContent = "-6,3%";
    aSur_Li_x_c_IMen.textContent = "-6,2%";
    mYS_Li_x_c_IA.textContent = "-1,5%";
    mYS_Li_x_c_IMen.textContent = "-7,2%";
    oes_Li_x_c_IA.textContent = "-1,4%";
    oes_Li_x_c_IMen.textContent = "-4,6%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,11%";
    s_cuenAbasSur.textContent = "7,02%";
    s_cuenMyS.textContent = "7,16%";
    s_cuenO.textContent = "7,12%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Dic 22','Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23','Nov 23','Dic 23'];
    graf_precio_litro.data.datasets[0].data = [67.76,71.83,76,84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39,151.47,193.79];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [201.86,185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64,207.35,195.98];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.00,7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20,7.19,7.13];

    //Funciones-----------
    no_leyenda();
    no_leyenda_12_07_2023();
    leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function enero2024(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Enero 2024";
    cantTambos.textContent = "1489";
    precioPorLitro.textContent = "246,11";
    variacion1.textContent = "27%";
    variacion2.textContent = "242,6%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 249,25";
    pCAbasSur.textContent = "$ 238,29";
    pCMyS.textContent = "$ 252,61";
    pCO.textContent = "$ 246,67";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "234,3%";
    aNcruIMen.textContent = "27,7%";
    aSurcruIA.textContent = "235,7%";
    aSurcruIMen.textContent = "27,9%";
    mYScruIA.textContent = "248,1%";
    mYScruIMen.textContent = "28,4%";
    oescruIA.textContent = "244,4%";
    oescruIMen.textContent = "26,8%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "3478,9";
    precio_solidos_UTvar_IMen.textContent = "28,1%";
    precio_x_kg_solidos_UTvar_IA.textContent = "239,2%";
    proteina.textContent = "3,37%";
    grasa_butirosa.textContent = "3,7%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "174,88";
    produ_lechcrudIMen.textContent = "-10,7%";
    produ_lechecrudaIA.textContent = "-5,9%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //"Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado a enero '23";
    dato_comparativo_1.textContent = "185,91";
    mes_comparativo_2.textContent = "Acumulado a enero '24";
    dato_comparativo_2.textContent = "174,88";
    porcentaje_comparativo.textContent = "-5,9%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-18,3%";
    aN_Li_x_c_Men.textContent = "-10,1%";
    aSur_Li_x_c_IA.textContent = "-10,2%";
    aSur_Li_x_c_IMen.textContent = "-8,2%";
    mYS_Li_x_c_IA.textContent = "-1%";
    mYS_Li_x_c_IMen.textContent = "-7,9%";
    oes_Li_x_c_IA.textContent = "-4,2%";
    oes_Li_x_c_IMen.textContent = "-12,7%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,09%";
    s_cuenAbasSur.textContent = "6,97%";
    s_cuenMyS.textContent = "7,15%";
    s_cuenO.textContent = "7,05%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Ene 23','Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23','Nov 23','Dic 23','Ene 24'];
    graf_precio_litro.data.datasets[0].data = [71.83,76,84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39,151.47,193.79,246.11];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [185.91,154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64,207.35,195.98,174.88];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.00,7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20,7.19,7.13,7.07];

    //Funciones-----------
    no_leyenda();
    no_leyenda_12_07_2023();
    leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function febrero2024(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Febrero 2024";
    cantTambos.textContent = "1468";
    precioPorLitro.textContent = "298,57";
    variacion1.textContent = "21,3%";
    variacion2.textContent = "292,9%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 306,75";
    pCAbasSur.textContent = "$ 290,32";
    pCMyS.textContent = "$ 306,48";
    pCO.textContent = "$ 298,3";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "290,2%";
    aNcruIMen.textContent = "23,1%";
    aSurcruIA.textContent = "288,1%";
    aSurcruIMen.textContent = "21,8%";
    mYScruIA.textContent = "292,3%";
    mYScruIMen.textContent = "21,3%";
    oescruIA.textContent = "294,8%";
    oescruIMen.textContent = "20,9%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "4126,97";
    precio_solidos_UTvar_IMen.textContent = "18,6%";
    precio_x_kg_solidos_UTvar_IA.textContent = "284,4%";
    proteina.textContent = "3,44%";
    grasa_butirosa.textContent = "3,79%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "146,65";
    produ_lechcrudIMen.textContent = "-16,14%";
    produ_lechecrudaIA.textContent = "-5,33%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //"Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado a febrero '23";
    dato_comparativo_1.textContent = "340,81";
    mes_comparativo_2.textContent = "Acumulado a febrero '24";
    dato_comparativo_2.textContent = "321,53";
    porcentaje_comparativo.textContent = "-5,7%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-20,4%";
    aN_Li_x_c_Men.textContent = "-19,5%";
    aSur_Li_x_c_IA.textContent = "-12,8%";
    aSur_Li_x_c_IMen.textContent = "-16,4%";
    mYS_Li_x_c_IA.textContent = "-3,9%";
    mYS_Li_x_c_IMen.textContent = "-16,2%";
    oes_Li_x_c_IA.textContent = "-1,5%";
    oes_Li_x_c_IMen.textContent = "-16,2%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,16%";
    s_cuenAbasSur.textContent = "7,53%";
    s_cuenMyS.textContent = "7,29%";
    s_cuenO.textContent = "7,11%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Feb 23','Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23','Nov 23','Dic 23','Ene 24','Feb 24'];
    graf_precio_litro.data.datasets[0].data = [76,84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39,151.47,193.79,246.11,298.57];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [154.9,166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64,207.35,195.98,174.88,146.65];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.08,7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20,7.19,7.13,7.07,7.23];

    //Funciones-----------
    no_leyenda();
    no_leyenda_12_07_2023();
    leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};

function marzo2024(){

    //Precio de referencia pagado al productor
    monthYear.textContent = "Marzo 2024";
    cantTambos.textContent = "1474";
    precioPorLitro.textContent = "342,39";
    variacion1.textContent = "14,68%";
    variacion2.textContent = "307,17%";

    //Precio por Cuencas Lecheras
    pCAbasNort.textContent = "$ 355,69";
    pCAbasSur.textContent = "$ 332,72";
    pCMyS.textContent = "$ 345,63";
    pCO.textContent = "$ 342,7";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "309,6%";
    aNcruIMen.textContent = "15,9%";
    aSurcruIA.textContent = "300,6%";
    aSurcruIMen.textContent = "14,6%";
    mYScruIA.textContent = "307,8%";
    mYScruIMen.textContent = "12,8%";
    oescruIA.textContent = "308,7%";
    oescruIMen.textContent = "14,9%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "4693,16";
    precio_solidos_UTvar_IMen.textContent = "13,72%";
    precio_x_kg_solidos_UTvar_IA.textContent = "302,4%";
    proteina.textContent = "3,46%";
    grasa_butirosa.textContent = "3,83%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "161,14";
    produ_lechcrudIMen.textContent = "9,88%";
    produ_lechecrudaIA.textContent = "-3,27%";
    var_int_0.textContent = "No espefic %";
    var_int_2019.textContent = "No espefic %";
    var_int_2020.textContent = "No espefic %";
    anio_0.textContent = "0";
    anio_1.textContent = "0";
    anio_2.textContent = "0";

    //"Comparativo volumen de muestra acumulado en millones de litros de leche cruda"

    mes_comparativo_1.textContent = "Acumulado a marzo '23";
    dato_comparativo_1.textContent = "507,4";
    mes_comparativo_2.textContent = "Acumulado a marzo '24";
    dato_comparativo_2.textContent = "482,67";
    porcentaje_comparativo.textContent = "-4,87%";

    //Variación de los Litros por Cuenca lechera
    aN_Li_x_c_IA.textContent = "-17,1%";
    aN_Li_x_c_Men.textContent = "2,6%";
    aSur_Li_x_c_IA.textContent = "-6,9%";
    aSur_Li_x_c_IMen.textContent = "7,2%";
    mYS_Li_x_c_IA.textContent = "0,6%";
    mYS_Li_x_c_IMen.textContent = "13,2%";
    oes_Li_x_c_IA.textContent = "-1,3%";
    oes_Li_x_c_IMen.textContent = "-10,9%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "7,31%";
    s_cuenAbasSur.textContent = "7,18%";
    s_cuenMyS.textContent = "7,36%";
    s_cuenO.textContent = "7,26%";


    //Gráfico1
    
    graf_precio_litro.data.labels = ['Mar 23','Abr 23','May 23','Jun 23','Jul 23','Ago 23','Sep 23','Oct 23','Nov 23','Dic 23','Ene 24','Feb 24','Mar 24'];
    graf_precio_litro.data.datasets[0].data = [84.09,92.73,100.74,107.39,112.51,117.42,122.66,133.39,151.47,193.79,246.11,298.57,342.39];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [166.59,170.36,176.63,177.32,191.13,209.23,212.88,223.64,207.35,195.98,174.88,146.65,161.14];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [7.21,7.40,7.47,7.39,7.36,7.27,7.24,7.20,7.19,7.13,7.07,7.23,7.3];

    //Funciones-----------
    no_leyenda();
    no_leyenda_12_07_2023();
    leyenda_09_02_2024();
    no_bloque_variacion();
    mostrar_agregado_ministro_0();
    
};
