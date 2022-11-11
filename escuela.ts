class ErrorValidacion extends Error {

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}
class Alumno{
    private nombre: string;
    private apellido: string;
    private dni: number;
    private nota: number;
    
    public constructor( nombre: string, apellido:string, dni:number, nota: number){
        this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.nota= nota;
        
    }
    getnombre():string{
        return this.nombre
    }
    getapellido():string{
        return this.apellido
    }
    getdni():number{
        return this.dni
    }
    getnota():number{
        return this.nota
    }

    public EstarAprobado() {
        if (this.nota < 0){
            throw new ErrorValidacion ("La nota ingresada es invalida");
            }
        
        if (this.nota < 7){
            console.log ("El alumno está desaprobado");
        }
        if (this.nota >6 && this.nota <11){
            console.log ("El alumno está aprobado");
            }
        if (this.nota >10){
            throw new ErrorValidacion("La nota ingresada es invalida");
        }
    }}
    
    let alumno1: Alumno= new Alumno ("Leandro","Gentile", 32987098, 8);
    let alumno2: Alumno= new Alumno ("Roman", "Perez", 32456789, 5);
    let alumno3: Alumno= new Alumno ("Alma", "Campos", 32654123, -1);
    let alumno4: Alumno= new Alumno ("Luana", "Cano", 32000999, 11);
    try{
        console.log("--------------------------------------------------------");
        console.log(alumno1);
        alumno1.EstarAprobado();
        console.log("--------------------------------------------------------");
        console.log(alumno2);
        alumno2.EstarAprobado();
        console.log("--------------------------------------------------------");
        console.log(alumno3);
        alumno3.EstarAprobado();
        console.log("--------------------------------------------------------");
        console.log(alumno4);
        alumno4.EstarAprobado();
        console.log("--------------------------------------------------------");
    }
    catch(err){
        console.log("Ocurrió un error: " + err.message)

    }