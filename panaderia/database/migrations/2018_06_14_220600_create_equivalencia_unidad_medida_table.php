<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquivalenciaUnidadMedidaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equivalencia_unidad_medida', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('unidad_real_id')->unsigned();
            $table->integer('unidad_equivalente_id')->unsigned();
            $table->timestamps();

            $table->foreign('unidad_real_id')->references('id')->on('unidad_medida');
            $table->foreign('unidad_equivalente_id')->references('id')->on('unidad_medida');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equivalencia_unidad_medida');
    }
}
