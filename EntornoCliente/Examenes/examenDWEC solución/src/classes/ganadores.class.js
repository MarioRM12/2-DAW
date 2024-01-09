class Ganadores {

    constructor(ganador = '', bolas = '') {
        let fecha = new Date();
        let hoy = fecha.toLocaleDateString();
        this.fecha = hoy;
        this.ganador = ganador;
        this.bolas = bolas;
    }


}