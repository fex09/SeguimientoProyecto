import { Rol } from './rol';
export class Usuario {
  uid: number;
  email: string;
  nombre: string;
  apellido: string;
  correoVerificado: boolean;
  roles: Rol;
}
