This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Importante

Recuerden para cada componente crear su carpeta para que cada componente tenga su propio folder

Recuerden crearse sus constantes en redux/constants:
GET_TABLES: "GET_TABLES",
TABLE_DETAILS: "TABLE_DETAILS"
Estos nombres son meramente orientativos las constantes son para saber que acciones ya estan hechas y no hacer mas de una accion que haga lo mismo ademas de trabajar con nombres inmutables en un archivo y evitar errores de tipeo.

Las acciones van en redux/actions

Recuerden crear cada reducer en redux/reducers aparte y luego combinarlo en el combine reducer del redux/reducers/index.js
Si necesitan una guia del combine reducer: https://redux.js.org/api/combinereducers

# Rutas a crear

Ejemplo ruta landing page:
restobar.com/
Ejemplo ruta de registro de usuario: (nuevo)
restobar.com/registro
Ejemplo ruta comensal
restobar.com/restorant/mesa/5
restobar.com/restorant/mesa/5/menu
restobar.com/restorant/mesa/5/cuenta
restobar.com/restorant/mesa/5/feedback
Ejemplo ruta personal/admin:
restobar.com/restorant/login
Ejemplo ruta admin (nuevas):
restobar.com/restorant/admin
restobar.com/restorant/admin/recaudacion
restobar.com/restorant/admin/cuenta
restobar.com/restorant/admin/feedback
restobar.com/restorant/admin/menu
restobar.com/restorant/admin/menu/:idPlatillo
Ejemplo ruta personal:
restobar.com/restorant/personal
restobar.com/restorant/personal/mesas
restobar.com/restorant/personal/ordenes 

# Tailwind

No crear css de componentes solo clases globales y las clases de elementos HTML del mismo TW.