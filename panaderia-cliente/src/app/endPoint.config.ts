export class AppSettings {

  public static API_ENDPOINT = '/';
  public static meses = [
    {v: 0, d: 31, n: 'Enero'},  {v: 1, d: 28, n: 'Febrero'},   {v: 2, d: 31, n: 'Marzo'},
    {v: 3, d: 30, n: 'Abril'},  {v: 4, d: 31, n: 'Mayo'},      {v: 5, d: 30, n: 'Junio'},
    {v: 6, d: 31, n: 'Julio'},  {v: 7, d: 31, n: 'Agosto'},    {v: 8, d: 30, n: 'Septiembre'},
    {v: 9, d: 31, n: 'Octubre'}, {v: 10, d: 30, n: 'Noviembre'}, {v: 11, d: 31, n: 'Diciembre'}
  ];
  public static dias_semana = [
    {v: 1, n: 'lunes', i: 'Mon'}, {v: 2, n: 'martes', i: 'Tue'}, {v: 3, n: 'miercoles', i: 'Wed'},
    {v: 4, n: 'jueves', i: 'Thu'}, {v: 5, n: 'viernes', i: 'Fri'}, {v: 6, n: 'sabado', i: 'Sat'}, {v: 0, n: 'domingo', i: 'Sun'}
  ];
}

