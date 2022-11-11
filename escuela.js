var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ErrorValidacion = /** @class */ (function (_super) {
    __extends(ErrorValidacion, _super);
    function ErrorValidacion(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorValidacion";
        return _this;
    }
    return ErrorValidacion;
}(Error));
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, dni, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota = nota;
    }
    Alumno.prototype.getnombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getapellido = function () {
        return this.apellido;
    };
    Alumno.prototype.getdni = function () {
        return this.dni;
    };
    Alumno.prototype.getnota = function () {
        return this.nota;
    };
    Alumno.prototype.EstarAprobado = function () {
        if (this.nota < 0) {
            throw new ErrorValidacion("La nota ingresada es invalida");
        }
        if (this.nota < 7) {
            console.log("El alumno está desaprobado");
        }
        if (this.nota > 6 && this.nota < 11) {
            console.log("El alumno está aprobado");
        }
        if (this.nota > 10) {
            throw new ErrorValidacion("La nota ingresada es invalida");
        }
    };
    return Alumno;
}());
var alumno1 = new Alumno("Leandro", "Gentile", 32987098, 8);
var alumno2 = new Alumno("Roman", "Perez", 32456789, 5);
var alumno3 = new Alumno("Alma", "Campos", 32654123, -1);
var alumno4 = new Alumno("Luana", "Cano", 32000999, 11);
try {
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
catch (err) {
    console.log("Ocurrió un error: " + err.message);
}
