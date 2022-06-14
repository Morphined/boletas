export interface Usuario_modelo {
    nombres: string,
    apellidos: string,
    tipo_identificacion: string,
    numero_identificacion: string,
    ciudad: string,
    pais: string,
    email: string,
    telefono: string,
    contrasena: string,
    login: boolean,
    _id?:string
}