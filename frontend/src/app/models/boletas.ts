export interface Boletas_model{
    usuario:string,
    correo:string,
    celular:number,
    evento:string,
    fecha: string,
    cantidad:number,
    precio:number,
    moneda:string,
    metodoPago:string,
    fechaPublicacion:Date,
    _id?:string
}
