<?php
/**
 * Created by PhpStorm.
 * User: Jhongger
 * Date: 14/06/2018
 * Time: 23:13
 */

namespace Panatex\Servicios;


use App\Http\ApiResponse;
use Panatex\Repositorios\BaseRepository;

class BaseServicio
{
    protected $repositoryBase;

    public function __construct(BaseRepository $baseRepository)
    {
        $this->repositoryBase = $baseRepository;
    }

    /**
     * @return ApiResponse
     */
    public function listar()
    {
        $data = $this->repositoryBase->all();
        return ApiResponse::respuestaExito($data);
    }
}