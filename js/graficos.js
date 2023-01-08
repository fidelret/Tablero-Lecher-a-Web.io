 
const precio_litro = document.getElementById("PRefPagProd").getContext("2d");
const graf_precio_litro = new Chart(precio_litro, {
type: 'bar',
data: {
labels: ['Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22'],
datasets: [{
    label: 'Valores en pesos $',
    data: [35.52,35.15,36.58,38.43,41.12,44.31,46.87,49.21,52.06,54.34,57.03,59.88,63.17],
    backgroundColor: [
        'rgba(0,55,203,0.5)',
    ],
    borderColor: [
        'rgba(0,55,203,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);



const produccion_mensual = document.getElementById("lech_crud").getContext("2d");
const graf_produccion_mensual = new Chart(produccion_mensual, {
type: 'bar',
data: {
labels: ['Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22'],
datasets: [{
    label: 'Producción mensual de leche cruda en millones de litros',
    data: [212.12,203.04,179.11,155.57,169.09,164.54,177.47,174.59,187.25,204.09,208.46,217.48,204.07],
    backgroundColor: [
        'rgba(255,120,0,0.5)',
    ],
    borderColor: [
        'rgba(255,120,0,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);

const solidos_utiles = document.getElementById("graf_solidos_Utiles").getContext("2d");
const graf_solidos_utiles = new Chart(solidos_utiles, {
type: 'line',
data: {
labels: ['Nov 21','Dic 21','Ene 22','Feb 22','Mar 22','Abr 22','May 22','Jun 22','Jul 22','Ago 22','Sep 22','Oct 22','Nov 22'],
datasets: [{
    label: '% Solidos Útiles',
    data: [7.02,6.96,6.96,7.09,7.26,7.36,7.43,7.42,7.36,7.26,7.20,7.18,7.11],
    backgroundColor: [
        'rgba(255,173,0,0.5)',
    ],
    borderColor: [
        'rgba(255,173,0,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: false
    }
}
}
}
);



