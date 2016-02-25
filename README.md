<h1>sgb-parent-menú<h1>

<h3>Propósito</h3>

Pantalla abstracta para el manejo del menú en Megazord, funcional para aplicaciones que requieren un menú con efecto "Side" de tipo lateral.

<h3>Datos Esperados</h3>

Los datos se reciben mediante un Json y sus parámetros describen el título de la pantalla a donde direccionara la opción seleccionada, el nombre de la pantalla de destino, y el icono que desea utilizar.

<h3>Parámetros de configuración</h3>

- **title**: Nombre de la pantalla o categoría visible por el usuario.
- **screen**: Estado al que direccionara la opción seleccionada.

<h3>Parámetros Opcionales</h3>
    
- **selItem**: Permite aplicar un sombreado a las opciones de un menú ofreciendo la particularidad de indicarnos en que opción se encuentra el usuario para el momento.  
- **icon**: Icono descriptivo que acompaña los elementos de la lista.

  
<h3>Ejemplo de configuración del archivo screen.ts</h3>

<pre>
"Parent-Menu": {
    type: 'sgb-parent-menu',
    params: {
        menu: [
            {title: 'Planes', screen: 'Planes',icon:"icon ion-iphone"},
            {title: 'Servicios', screen: 'Servicios',icon:"icon ion-android-laptop"}
  	  ],
	selItem:true	
   }
}
</pre>

<h3>Otras configuraciones</h3>
- **$linesInItems**: Si deseas que las separaciones de los items que vienen por defecto no aparezcan en el menú debes modificar esta variable,
 dejándola en blanco.
- **$backgroundItemColor**: Si deseas Cambiar el color de sombreado de los items debes modificar esta variable. 
Ambas ubicadas en el archivo sgb-parent-menu.scss.

<h3>Diseño</h3>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-parent-menu.png)