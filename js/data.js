
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
let var_int_2019 = document.querySelector(".var_int_2019");
let var_int_2020 = document.querySelector(".var_int_2020");

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

const selectores = [monthYear, cantTambos, precioPorLitro, variacion1, variacion2, pCAbasNort, pCAbasSur, pCMyS, pCO, aNcruIA, aNcruIMen, aSurcruIA, aSurcruIMen, mYScruIA, mYScruIMen, oescruIA, oescruIMen, precio_solidos_UT, precio_solidos_UTvar_IMen, precio_x_kg_solidos_UTvar_IA, proteina, grasa_butirosa, cantTambos2, prod_mensual_lech_crud, produ_lechcrudIMen, produ_lechecrudaIA, var_int_2019, var_int_2020, aN_Li_x_c_IA, aN_Li_x_c_Men, aSur_Li_x_c_IA, aSur_Li_x_c_IMen, mYS_Li_x_c_IA, mYS_Li_x_c_IMen, oes_Li_x_c_IA, oes_Li_x_c_IMen, cantTambos3, s_cuenAbasNort, s_cuenAbasSur, s_cuenMyS, s_cuenO];

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

};

function diciembre2022(){

    //Precio de referencia pagado al productor 
    monthYear.textContent = "Diciembre 2022";
    cantTambos.textContent = "0000";
    precioPorLitro.textContent = "00,00";
    variacion1.textContent = "00,00%";
    variacion2.textContent = "00,00%"; 

    //Precio por Cuencas Lecheras 
    pCAbasNort.textContent = "$ 00,00"; 
    pCAbasSur.textContent = "$ 00,00";
    pCMyS.textContent = "$ 00,00"; 
    pCO.textContent = "$ 00,00";

    //Variación del $/ Lt. Leche cruda por Cuenca lechera
    aNcruIA.textContent = "00,00%";
    aNcruIMen.textContent = "00,00%";
    aSurcruIA.textContent = "00,00%";
    aSurcruIMen.textContent = "00,00%";
    mYScruIA.textContent = "00,00%";
    mYScruIMen.textContent = "00,00%";
    oescruIA.textContent = "00,00%";
    oescruIMen.textContent = "00,00%";

    //Parámetros de composición y evolución de precio SU
    precio_solidos_UT.textContent = "000,00";
    precio_solidos_UTvar_IMen.textContent = "00,00%";
    precio_x_kg_solidos_UTvar_IA.textContent = "00,00%";
    proteina.textContent = "00,00%";
    grasa_butirosa.textContent = "00,00%";

    //Evolución del volumen mensual en MM de litros de leche cruda
    cantTambos2.textContent = (cantTambos.textContent);
    prod_mensual_lech_crud.textContent = "00,00";
    produ_lechcrudIMen.textContent = "00,00%";
    produ_lechecrudaIA.textContent = "00,00%";
    var_int_2019.textContent = "00,00%";
    var_int_2020.textContent = "00,00%";

    //Variación de los Litros por Cuenca lechera 
    aN_Li_x_c_IA.textContent = "00,00%";
    aN_Li_x_c_Men.textContent = "00,00%";
    aSur_Li_x_c_IA.textContent = "00,00%";
    aSur_Li_x_c_IMen.textContent = "00,00%";
    mYS_Li_x_c_IA.textContent = "00,00";
    mYS_Li_x_c_IMen.textContent = "00,00%";
    oes_Li_x_c_IA.textContent = "00,00%";
    oes_Li_x_c_IMen.textContent = "00,00%";

    //% Solidos Útiles por Cuenca lechera
    cantTambos3.textContent = (cantTambos.textContent);
    s_cuenAbasNort.textContent = "00,00%";
    s_cuenAbasSur.textContent = "00,00%";
    s_cuenMyS.textContent = "00,00%";
    s_cuenO.textContent = "00,00%";
    
    
    //Gráfico1
    graf_precio_litro.data.labels = ['Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22','Dic 22'];
    graf_precio_litro.data.datasets[0].data = [35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17,000];

    //Gráfico2
    graf_produccion_mensual.data.labels = graf_precio_litro.data.labels;
    graf_produccion_mensual.data.datasets[0].data = [203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07,000];

    //Gráfico3
    graf_solidos_utiles.data.labels = graf_precio_litro.data.labels;
    graf_solidos_utiles.data.datasets[0].data = [6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11,00];
    
    
    
    //Funciones-----------
    bloque_variacion();
    leyenda();

};


