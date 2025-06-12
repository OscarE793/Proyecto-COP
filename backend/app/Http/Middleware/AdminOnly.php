<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Validar que el usuario esté autenticado y tenga el rol 'admin'
        $user = auth()->user();
        if (!$user || !$user->role || $user->role->name !== 'admin') {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        // Si es admin, sigue la fiesta
        return $next($request);
    }
}
