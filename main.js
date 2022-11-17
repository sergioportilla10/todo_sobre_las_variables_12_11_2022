addEventListener(`DOMContentLoaded`, (e)=>{

    document.querySelector("body").innerHTML = "Por favor presione F12 para revisar la consola ";

    
    let Nombres ="Sergio David";   
    console.group("¿Cual es su Nombre?");
    console.log(Nombres);
    console.groupEnd();

    let Apellidos ="Portilla Ramirez";   
    console.group("¿Cuales son sus Apellidos?");
    console.log(Apellidos);
    console.groupEnd();

    let Edad = 25;   
    console.group("¿Cual es su edad?");
    console.log(Edad);
    console.groupEnd();

    let Profesion = false ;   
    console.group("¿Es usted Programador?");
    console.log(Profesion);
    console.groupEnd();
    
    let Futuro = undefined;
    console.group("¿A que me dedicare en un futuro?");
    console.log(Futuro)
    console.groupEnd();

    let Finalizar= null;  
    console.group("¿Finalizare el diplomado?");
    console.log(Finalizar);
    console.groupEnd();
  
    let Familia ={Madre:"Jazmin",Hermanos:"4",Mascota:"Perro"}

    console.group("Mi Familia");
    console.log(Familia);
    console.groupEnd();

})