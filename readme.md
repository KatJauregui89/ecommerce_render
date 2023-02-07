1. Iniciar proyecto con npm init -y
2. Instalar dependencia express sequelize pg pg-hstore cors dotenv
3. Instalar dependencias de desarrollo nodemon morgan -D
4. Crear estructura de carpetas
    /src
    -- /services
    -- /models
    -- /controllers
    -- /routes
    -- /middlewares
    -- /seeders
    -- /test
    -- / utils
    -- /templates
        app.js
        server.js

5. Scripts start, dev. en el package.json
6. Crear un server básico.
7. Configurar la conexion a bd
8. Autenticar la base de datos en app.js
9. Crear un modelo generico de usuarios
10. Crear el init models
11. Sincronizar con la base de datos
12. Registrar usuario --> creación de usuarios
"1234" -> encriptar las contraseñas, bcrypt
13. Autenticación con el login 


NOTA:
para subir a github .gitignore - node_modules, .env_example con los datos borrados