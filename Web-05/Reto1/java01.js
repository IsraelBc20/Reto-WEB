// 1. Desarrolle el siguiente algoritmo:Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan  en  galones.  Realice  un  algoritmo,  y represéntelo en JS, que ayude al productora saber cuánto recibirá por la entrega de su producción de un día (1 galón= 3.785 litros).Si se analiza el problema se puede establecer que los datos que se ne-cesitan para resolver el problema son los que se muestran en la tabla

let L = +prompt("Cuántos litros ha traído?");
let PG = +prompt('Cuál es el precio a pagar por litros?');
let TG = (L/3.785);
let GA = PG * TG;
alert(`La ganancia es: ${GA}`);