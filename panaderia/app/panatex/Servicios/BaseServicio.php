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
use Tymon\JWTAuth\Facades\JWTAuth;

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

    public function paginate()
    {
        $data = $this->repositoryBase->paginate();
        return ApiResponse::respuestaExito($data);
    }
    public function obtener($id)
    {
        $data = $this->repositoryBase->find($id);
        return ApiResponse::respuestaExito($data);
    }
    public function create($data)
    {
        $usuarioAutenticado = JWTAuth::parseToken()->toUser()->panaderia_id;
        $idPanaderia = $usuarioAutenticado->panaderia_id;

        $data["panaderia_id"] = $idPanaderia;

        $res = $this->repositoryBase->create($data);
        return ApiResponse::respuestaExito($res);
    }
}