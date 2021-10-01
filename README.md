# Iron-muscles
##### Lista de endPoints

| Method | Path | Description 
|--------|------|-----------------------
get | / | Página de inicio
get | /registro | Muestra el formulario para crear un usuario
post|/registro| Guarda la información y te redirige a la página iniciar sesión
get|/iniciar-sesión|Muestra el formulario para iniciar sesión
post|/iniciar-sesión| Envía datos y redirige al perfil del usuario
get|/usuario/:id| Muestra el perfil del usuario
get|/usuario/editar/:id|Muestra el formulario del perfil del usuario para editar.
post|/usuario/editar/:id| Guarda la información editada del usuario y te redirige al perfil del usuario, accede usuario.
get|/usuarios| Muestra lista de usuarios, accede admin
post|/usuario/eliminar/:id| Elimina usuario, redirige a la pagina de inicio.
get|/ejercicios| Muestra listado ejercicios 
get|/ejercicios/:id| Muestra los detalles del ejercicio.
get|/ejercicios/crear| Muestra formulario para añadir un ejercicios.
post|/ejercicios/crear| Guarda la información del ejercicios y redirige al listado de ejercicios.
get|/ejercicios/editar/:id| Muestra el formulario con la información del ejercicios.
post|/ejercicios/editar/:id| Guarda la información editada del ejercicio y te redirige a la pagina de detalles del ejercicio.
post|/ejercicios/eliminar/:id| Eliminamos y redirigimos al listado de ejercicios.
get|/entrenamientos| Muestra listado entrenamientos. 
get|/entrenamientos/:id| Muestra los detalles del entrenamientos.
get|/entrenamientos/crear| Muestra formulario para añadir un entrenamientos.
post|/entrenamientos/crear| Guarda la información del entrenamientos y redirige al listado de entrenamientos.
get|/entrenamientos/editar/:id| Muestra el formulario con la información del entrenamientos./
post|/entrenamientos/editar/:id| Guarda la información editada del entrenamiento y te redirige a la pagina de detalles del entrenamiento.
post|/entrenamientos/eliminar/:id| Eliminamos y redirigimos al listado de entrenamientos.