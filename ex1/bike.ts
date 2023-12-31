import { Correntista } from "./correntista"

export class Bike {
    valor: number
    id: string 
    cliente: Correntista
    status: string
    tempo: number

    constructor(valor: number, id: string, cliente: Correntista, status: string, tempo: number){
        this.id = id
        this.cliente = cliente
        this.valor = valor
        this.status = status
        this.tempo = tempo
    }

    pagar(status: string): void{
        this.status = status
    }

    renovar(valor: number, cliente: Correntista, tempo: number){
        this.valor += valor
        this.cliente = cliente
        this.tempo += tempo
        if(this.status = 'pago'){
            this.valor = valor
            this.status = 'pendente'
        }
    }

    trocar(id: string): void{
        this.id = id
    }

    
}

