
let graficos = document.querySelectorAll("#graficoextend");

function aparecer() {

    for (let i = 0; i < selectores.length; i++) {
        let element = selectores[i];
        element.animate([
            // fotogramas clave
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(0px)' },
            {  filter: 'blur(10px)' },
            {  filter: 'blur(0px)' },
        ], {
            // opciones de sincronización
            duration: 200,
        });
        
    };
        
    for (let i = 0; i < graficos.length; i++) {
        const element = graficos[i];
        element.animate([
            // fotogramas clave 
            { width : '95%'},
            {  filter: 'blur(100px)' },
            {  filter: 'blur(0px)' },
        ], {
            // opciones de sincronización
            duration: 450,
        });

    };
};



    



