
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
}

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
}

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

}

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

}

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
}

function noviembre21(){
    monthYear.textContent = "Noviembre 2021";
    cantTambos.textContent = "1581";
    precioPorLitro.textContent = "34,52";
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
}

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
}

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

    aN_Li_x_c_IA.textContent = "9, %";
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
}

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
}

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
}





