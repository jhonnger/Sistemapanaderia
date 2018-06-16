<?php

namespace Panatex\Entidades;

use Illuminate\Database\Eloquent\Model;

class UnidadMedida extends Model
{
    protected $table ="unidad_medida";
    protected $fillable =["nombre", "simbolo", "panaderia_id"];
}
