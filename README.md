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
Ejemplo ruta de registro de usuario:
restobar.com/registro
restobar.com/confirmacion/:token
Ejemplo ruta login:
restobar.com/login
Ejemplo ruta comensal:
restobar.com/:idResto/mesa/:idMesa
restobar.com/:idResto/mesa/:idMesa/menu
restobar.com/:idResto/mesa/:idMesa/cuenta
restobar.com/:idResto/mesa/:idMesa/feedback
Ejemplo ruta admin:
restobar.com/:idResto/admin
restobar.com/:idResto/admin/mesas
restobar.com/:idResto/admin/recaudacion
restobar.com/:idResto/admin/cuenta
restobar.com/:idResto/admin/feedback
restobar.com/:idResto/admin/menu/:idPlatillo
Ejemplo ruta personal:
restobar.com/:idResto/personal
restobar.com/:idResto/personal/mesas
restobar.com/:idResto/personal/ordenes 

# Tailwind

No crear css de componentes solo clases globales y las clases de elementos HTML del mismo TW.


# Componentes

 ----------------- <RUTAS> ----------------- 

// Ruta principal               <Landing>   --> Componente contenedor
                                            --> Nombre del local   
                                            --> Img logo del comercio
                                            --> bg-image + fondo color con opacidad
                                            --> Contiene boton <Link> hacia la ruta -> Restorant/mesa/:id                                     
                                            --> Caja con texto descriptivo del local

//Restorant/mesa/:id/menu     <OrderBoard>  --> Componente contenedor  
                                            --> NavBar Horizontal superior <OrderBar>
                                            --> Nav vertical lateral izq  <FilterBar>
                                            --> Componente contenedor <FoodCarrousel>                                   

//Restorant/mesa/:id/cuenta    <BillBoard>  --> Componente contenedor  
                                            --> NavBar Horizontal superior <BillBar>
                                            --> Componente contenedor <OrdersCarrousel>                                   
                                            --> Nav Horizontal inferior  <PayBar>


//Restorant/mesa/:id/pago      <PayBoard>   --> Componente contenedor  
                                            --> NavBar Horizontal superior <BillBar> ?? renderizado condicional para mostrar precio
                                            --> Boton para pagar en mesa -> mientras este activo renderizar <LocalPay> 
                                            --> Boton para pagar en mesa -> mientras este activo renderizar <MercadoPago>


 ----------------- <COMPONENTES-RUTAS> ----------------- 
 <Landing>
 <OrderBoard>
 <BillBoard>
 <PayBoard>
 ----------------- <COMPONENTES-HIJOS> ----------------- 

<OrderBar> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busqueda  <Search> --> input + btn icon lupa
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<FilterBar> {
        --> Componente <SetOrder>  --> Ordenar por + Selector con ordenamiento por Importancia || Mayor precio || Menor precio
        --> Componente de filtrado  <FilterCards> --> componente de logica .map  renderiza  el componente <FilterdCard> --> Nombre de la categoria
                                                                                                                        --> Img de categoria
                                                                                                                        --> :active --> Render Ul list Sub categorias -> SetFilter
}


---> VOY POR ACA

<FoodCarrousel> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<BillBar> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<OrdersCarrousel> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<PayBar> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<LocalPay> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}

<MercadoPago> {
        --> Boton para activar o desactivar <FillterBar> 
        --> Componente de busquedar  <Search> 
        --> Boton Link hacia el Carrito //Restorant/mesa/:id/cuenta --> Este boton tiene en su costado un contador de elementos en el carro
}




