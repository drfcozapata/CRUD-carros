const carsList = [{
        nameCar: 'Mercedes Benz SSL',
        tradeCar: 'Mercedes Benz',
        modelCar: '520 SSL',
        yearCar: 2017
    },
    {
        nameCar: 'Toyota Machito',
        tradeCar: 'Toyota',
        modelCar: 't678',
        yearCar: 2001
    },
    {
        nameCar: 'Lamborgini Testa',
        tradeCar: 'Lamborgini',
        modelCar: 'Lamb-2039',
        yearCar: 2018
    },
    {
        nameCar: 'Testarrossa',
        tradeCar: 'Ferrari',
        modelCar: 'Testa',
        yearCar: 2019
    }
];


/** VARIABLES QUE GUARDAN LA INFORMACIÓN A RECOGER (carsInfo) Y LA DEL FORMULARIO EXISTENTE (mainForm) **/
let carsInfoUI = document.getElementById('carsList'),
    mainFormUI = document.getElementById('mainForm');


/** RENDERLIST PARA LEER Y MOSTRAR EN DIV LOS VALORES DEL ARRAY **/
const renderList = () => {
    carsInfoUI.innerHTML = "";

    carsListArray = carsList;

    carsListArray.forEach((car, index) => {

        console.log(carsListArray[i]);

        const carItem = document.createElement('DIV');
        carItem.setAttribute('class', 'carItem');
        carsInfoUI.appendChild(carItem);

        const carInfo = document.createElement('DIV');
        carInfo.setAttribute('class', 'carInfo');
        carItem.appendChild(carInfo);

        const carName = document.createElement('H4'),
            carTrade = document.createElement('H4'),
            carModel = document.createElement('H4'),
            carYear = document.createElement('H4')

        carName.innerText = car.nameCar;
        carTrade.innerText = car.tradeCar;
        carModel.innerText = car.modelCar;
        carYear.innerText = car.yearCar;

        carInfo.appendChild(carName);
        carInfo.appendChild(carTrade);
        carInfo.appendChild(carModel);
        carInfo.appendChild(carYear);

        carsItem.appendChild(carInfo);
    });
};