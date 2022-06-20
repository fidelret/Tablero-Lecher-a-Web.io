
const mar22Prelitro = document.getElementById("PRefPagProd").getContext("2d");
const grafmar22Prelitro = new Chart(mar22Prelitro, {
type: 'bar',
data: {
labels: ['abr 21', 'may 21','jun 21', 'jul 21', 'ago 21', 'sep 21', 'oct 21', 'nov 21', 'dic 21', 'ene 22', 'feb 22', 'mar 22' ],
datasets: [{
    label: 'Valores en pesos $',
    data: [28.40, 30.15, 31.69, 32.73, 33.42, 33.90, 34.14, 35.52, 36.15, 36.58, 38.43, 41.12],
    backgroundColor: [
        'rgba(255, 255, 255, 1)',
    ],
    borderColor: [
        'rgba(255, 120, 0, 1)',
        
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






