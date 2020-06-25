import React,{Fragment,useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const {proyecto,eliminarProyecto} = proyectosContext;
   
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;
    
    if(!proyecto) return <h2>Selecciona el proyecto</h2>
    //array distructuring para extraer el array
    const [proyectoActual] =  proyecto;
    
    //eliminar proyecto
    const onClickEliminar=()=>{
        eliminarProyecto(proyectoActual.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length===0
                ?(<li className="No hay tarea"><p>No hay tareas</p></li>)
            
                :tareasproyecto.map(tarea=>(
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                    />
                ))}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;