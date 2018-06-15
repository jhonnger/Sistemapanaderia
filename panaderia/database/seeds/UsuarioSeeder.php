<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Panatex\Entidades\Usuario;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Usuario::create([
            'nombre' => 'Johnny',
            'email' => 'jrcotos@gmail.com',
            'password' => Hash::make('123456'),
            'panaderia_id' => 1]);
    }
}
