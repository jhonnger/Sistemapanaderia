<?php

namespace Panatex\Entidades;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Panaderia extends Authenticatable
{
    use Notifiable;
    protected $table = "panaderia";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'id'
    ];

}
