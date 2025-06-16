<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::updateOrCreate(
            ['email' => 'admin@cope.com.co'],
            [
                'name' => 'Administrador',
                'password' => bcrypt('admin1234'), // Cambia la contraseña aquí
                'role_id' => 1, // Ajusta según tus roles
            ]
        );
    }
}
