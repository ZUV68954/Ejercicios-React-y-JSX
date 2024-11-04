class Coche {
    constructor(matrícula, marca, tipo) {
        this.matrícula = matrícula;
        this.marca = marca;
        this.tipo = tipo;
    }

    mostrar() {
        return <div class="StyledTextComponent">{this.matrícula} - {this.marca} - {this.tipo}</div>
    }
}
export default Coche