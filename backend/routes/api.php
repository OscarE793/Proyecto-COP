<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aquí es donde puedes registrar las rutas de tu API. Estas rutas
| están cargadas por el RouteServiceProvider dentro de un grupo que
| está asignado al middleware "api". ¡Disfruta desarrollando tu API!
|
*/

// Rutas públicas (no requieren autenticación)
Route::post('register', [AuthController::class, 'register']);
Route::post('login',    [AuthController::class, 'login']);

// Rutas protegidas con autenticación
Route::middleware('auth:api')->group(function () {
    // Rutas de autenticación
    Route::get('me',     [AuthController::class, 'me']);
    Route::post('logout',[AuthController::class, 'logout']);

    // Rutas de usuarios protegidas
    Route::get('usuarios',         [UserController::class, 'index']);
    Route::post('usuarios',        [UserController::class, 'store']);
    Route::get('usuarios/{id}',    [UserController::class, 'show']);
    Route::put('usuarios/{id}',    [UserController::class, 'update']);
    Route::delete('usuarios/{id}', [UserController::class, 'destroy']);
});
