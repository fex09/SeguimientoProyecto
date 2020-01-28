import { Observacion } from './observacion';

export class Proyecto {
  idProyecto: string;
  prioridad: number;
  nombre: string;
  descripcion: string;
  areaNombre: string;
  empresaNombre: string;
  proponente: string;
  pmNombre: string;
  tipoProyectoNombre: number; // mejora, nueva funcionalidad, cumplimiento legal
  estadoNombre: string; // cotización producción, finalizado, inicio
  aumentaVentas: number; // números del 1 al 3 60%
  mejoraControl: number; // números del 1 al 3 25%
  disminuyeCostos: number; // números del 1 al 3 15%
  peso: number; // suma de aumento, mejora y disminuye.
  aporte: number; // aumento ventas * 60% + mejoracontrol * 25% + disminuyecostos * 15%
  observaciones: Observacion[];
  fechaCreacion: Date;
}
