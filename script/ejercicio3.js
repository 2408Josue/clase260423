let nombre1,nombre2;
let deducciones1, bonificaciones1, bruto1, neto1;
let deducciones2, bonificaciones2, bruto2, neto2;

nombre1 = prompt ('ingrese el nombre del trabajo 1')
deducciones1 = Number (prompt('ingrese deducciones del usuario 1'))
bonificaciones1=Number(prompt('ingrese las bonificaciones del usuario 1'))
neto1=Number(prompt('ingrese el salario 1'))

nombre2 = prompt ('ingrese el nombre del trabajo 2')
deducciones2 = Number (prompt('ingrese deducciones del usuario 2'))
bonificaciones2=Number(prompt('ingrese las bonificaciones del usuario 2'))
neto2=Number(prompt('ingrese el salario 2'))

neto1=(bruto1-deducciones1)+bonificaciones1
neto2=(bruto2+deducciones2)+bonificaciones2

if (neto1>neto2){
    alert('El empleado' + nombre1 + 'Tiene salario mas alto'+neto1)
}
else {
    alert('El empleado' + nombre2 + 'Tiene salario mas alto'+neto2)
}