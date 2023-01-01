const selectores = [monthYear, cantTambos, precioPorLitro, variacion1, variacion2, pCAbasNort, pCAbasSur, pCMyS, pCO, aNcruIA, aNcruIMen, aSurcruIA, aSurcruIMen, mYScruIA, mYScruIMen, oescruIA, oescruIMen, precio_solidos_UT, precio_solidos_UTvar_IMen, precio_x_kg_solidos_UTvar_IA, proteina, grasa_butirosa, cantTambos2, prod_mensual_lech_crud, produ_lechcrudIMen, produ_lechecrudaIA, var_int_2019, var_int_2020, aN_Li_x_c_IA, aN_Li_x_c_Men, aSur_Li_x_c_IA, aSur_Li_x_c_IMen, mYS_Li_x_c_IA, mYS_Li_x_c_IMen, oes_Li_x_c_IA, oes_Li_x_c_IMen, cantTambos3, s_cuenAbasNort, s_cuenAbasSur, s_cuenMyS, s_cuenO]

function aparecer() {

    for (let index = 0; index < selectores.length; index++) {
        let element = selectores[index];
        element.animate([
            // fotogramas clave
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-150px)' },
            { transform: 'translateX(0px)' },
            {  filter: 'blur(10px)' },
            {  filter: 'blur(0px)' },
        ], {
            // opciones de sincronización
            duration: 200,
        });
        
    }

};


