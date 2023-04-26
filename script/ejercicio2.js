let edad;

edad= Number(prompt('ingrese la edad'))

if (edad<10){
    console.log('la perdona es un niño')
    alert ('la perdona es un niño')
    document.write('la persona es niño')
}

else if (edad>=15 && edad<18){
    console.log('la persona es un adolecente')
    alert ('la perdona es un adolecente')
    document.write('la persona es adolecente')
}
else if (edad>=18 && edad<50){
    console.log('la persona es un adulto')
    alert ('la perdona es un adulto')
    document.write('la persona es adulto')
}
else if (edad>=50){
    console.log('la persona es un adulto mayor')
    alert ('la perdona es un adulto mayor')
    document.write('la persona es adulto mayor')
}
