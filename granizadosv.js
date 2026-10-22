const nombreLocal = "Granizados Polar";

const granizados = [
  "Fresa",
  "Mora",
  "Maracuyá",
  "Limón",
  "Piña",
  "Coco",
  "Mango",
  "Mango biche",
  "Cereza"
];

// Mostrar el listado completo en consola
console.log(`Bienvenido a ${nombreLocal}`);
console.log("Estos son nuestros granizados:");
for (let i = 0; i < granizados.length; i++) {
  console.log(`${i + 1}. ${granizados[i]}`);
}

// Verificar si el client es mayor de edad
let edadCliente = 20
;
const mayoriaDeEdad = 18;

if (edadCliente >= mayoriaDeEdad) {
  console.log(`El cliente es mayor de edad, tiene ${edadCliente} años.`);
} else {
  const añosFaltantes = mayoriaDeEdad - edadCliente;
  console.log(`El cliente es menor de edad, tiene ${edadCliente} años y le faltan ${añosFaltantes} años para ser mayor de edad.`);
}
// Pregunta: ¿lo quiere con alcohol?
let conAlcohol = true; // true = con alcohol, false = sin alcohollet edadCliente = 20const mayoriaDeEdad = 18;

if (conAlcohol) {
  console.log("El cliente quiere el granizado con alcohol. Hay que verificar la edad.");

  if (edadCliente >= mayoriaDeEdad) {
    console.log(`El cliente es mayor de edad, tiene ${edadCliente} años. Puede comprarlo.`);
  } else {
    const añosFaltantes = mayoriaDeEdad - edadCliente;
    console.log(`El cliente es menor de edad, tiene ${edadCliente} años y le faltan ${añosFaltantes} años para ser mayor de edad. No se le puede vender.`);
  }
} else {
  console.log("El cliente quiere el granizado sin alcohol. No hace falta verificar la edad.");
}