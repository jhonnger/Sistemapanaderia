<?php
/**
 * Created by PhpStorm.
 * User: Jhongger
 * Date: 14/06/2018
 * Time: 23:08
 */

namespace App\Http\Controllers;


use App\Http\ApiResponse;
use Panatex\Servicios\BaseServicio;

class BaseController extends Controller
{
    protected $servicioBase;

    public function __construct(BaseServicio  $baseServicio)
    {
        $this->servicioBase = $baseServicio;
    }

    public function listar()
    {
        try{
            return  $this->servicioBase->listar();
        } catch (\Exception $e){
            return ApiResponse::respuestaError("Hubo un error al listar");
        }
    }
}