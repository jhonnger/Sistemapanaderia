<?php

namespace App\Http\Controllers;

use App\panatex\Servicios\UnidadMedidaServicio;
use Panatex\Servicios\BaseServicio;


class UnidadMedidaController extends BaseController
{

    public function __construct(UnidadMedidaServicio $unidadMedidaServicio)
    {
        parent::__construct($unidadMedidaServicio);
    }
}
