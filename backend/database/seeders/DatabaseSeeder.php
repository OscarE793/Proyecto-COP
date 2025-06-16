<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Llama tu seeder de roles aquí
        $this->call(RoleSeeder::class);
        $this->call(AdminSeeder::class);

        // Si quieres, puedes seguir agregando más seeders:
        // $this->call(UserSeeder::class);
    }
}
