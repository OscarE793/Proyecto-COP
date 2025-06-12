<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        // Si la petición espera JSON, no redirige (solo error 401)
        if ($request->expectsJson()) {
            return null; // Laravel lanzará un 401 en JSON automáticamente
        }

        // Si quieres que la versión web sí redirija, deja esto, si no, bórralo
        // return route('login');

        // O puedes forzar el error si quieres APIs puras
        abort(401, 'No autenticado.');
    }
}
