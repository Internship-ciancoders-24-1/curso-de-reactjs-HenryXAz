## Ciclo de vida del componente

Los componentes tienen un ciclo dónde su estado va cambiando desde que se renderiza hasta que deja de mostrarse en pantalla, los tres estados principales son:

1. Montaje:
Es el estado inicial del componente, en este estado se ejecutan en el siguiente orden **el contructor**, el método **render** que pinta en pantalla el contenido de jsx en el documento y el método **componentDidMount**.

2. Actualización:
En el ciclo de vida la acualización se produce cuando algunos valores del componente cambian cuando este ya esta montado, para actualizar el componente se debe de ejecutar el método render y el método **componentDidUpdate** que recibe como parámetros el estado previo a la actualización de las propiedades y el estado.

3. Desmontaje:
El desmontaje representa el fin de vida del componente, el componente se elimina del documento cuando ya no es necesario, en este estado se ejecuta el método **componentWillUnMounted**.