<?php

use Illuminate\Database\Seeder;
use Panatex\Entidades\Panaderia;

class PanaderiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Panaderia::create([
            'nombre' => 'Panadería Cotos',
            'id' => 1
        ]);
    }
}
