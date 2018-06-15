<?php
/**
 * Created by PhpStorm.
 * User: Jhongger
 * Date: 14/06/2018
 * Time: 23:18
 */

namespace App\panatex\Servicios;

use Panatex\Repositorios\UnidadMedidaRepository;
use Panatex\Servicios\BaseServicio;

class UnidadMedidaServicio extends BaseServicio
{
    public function __construct(UnidadMedidaRepository $unidadMedidaRepository)
    {
        parent::__construct($unidadMedidaRepository);
    }
}