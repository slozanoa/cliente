import React, {useContext}from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
    
    //obtengo el state
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    //obtener la funcion context de la tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas}=tareasContext;
    //funcion agregar en el royecto actua
    const seleccionarProyecto = id=>{
        console.log(id);
        proyectoActual(id);//fijar un royecto actual
        obtenerTareas(id);
    }
    return ( 
        <li>
        <button
            type="button"
            className="btn btn-black"
            onClick={()=> seleccionarProyecto(proyecto.id)}
           >
            {proyecto.nombre}
        </button>
    </li>
     );
}
 
export default Proyecto;