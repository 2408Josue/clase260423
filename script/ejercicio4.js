let  placabus1, placabus2;
let  npasajeros1, vpasaje1, drecogido1;
let npasajeros2, vpasaje2, drecogido2;

vpasaje1=1700
vpasaje2=1700

placabus1=Number(prompt('ingrese numero de placa '))
npasajeros1=Number(prompt('ingrese numero de pasajeros'))

placabus2=Number(prompt('ingrese numero de placa'))
npasajeros2=Number(prompt('ingrese numero de pasajeros'))

drecogido1=npasajeros1*vpasaje1
drecogido2=npasajeros2*vpasaje2

if (drecogido1<drecogido2){
    alert ('el autobus que recogio mas dinero fue: '+placabus2 )
}
else if (drecogido1>drecogido2){
    alert ('el autobus que recogio mas dinero fue: '+placabus1 )
}