<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            ['name' => 'admin', 'description' => 'Administrador'],
            ['name' => 'tecnico', 'description' => 'Técnico'],
            ['name' => 'rrhh', 'description' => 'Recursos Humanos'],
            // Agrega más roles según tu negocio
        ]);
    }
}
