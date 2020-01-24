export class Proyecto {
  idProyecto: number;
  prioridad: number;
  nombre: string;
  descripcion: string;
  idArea: number;
  proponente: string;
  idPM: string;
  idTipoProyecto: number; // mejora, nueva funcionalidad, cumplimiento legal
  idEstado: number; // cotización producción, finalizado, inicio
  aumentaVentas: number; // números del 1 al 3 60%
  mejoraControl: number; // números del 1 al 3 25%
  disminuyeCostos: number; // números del 1 al 3 15%
  peso: number; // suma de aumento, mejora y disminuye.
  aporte: number; // aumento ventas * 60% + mejoracontrol * 25% + disminuyecostos * 15%
  observaciones: string;
  fechaCreacion: Date;
}
