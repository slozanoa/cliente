import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';



const Tarea = ({tarea}) => {
    //tarea contect
    const tareasContext = useContext(tareaContext);
const {eliminarTarea,obtenerTareas, cambiarEstadoTarea, guardarTareaActual}=tareasContext;
    //proyecto context
const proyectosConstext = useContext(proyectoContext);
    const {proyecto} = proyectosConstext;
 //array distructuring para extraer el array
 const [proyectoActual] =  proyecto;
    const tareaEliminar=id=>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }
    //funcion para modificar el estado de las tareas
    const cambiarEstado=tarea=>{
        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        cambiarEstadoTarea(tarea);
    }
    //seleccionar tarea
    const seleccionarTarea=tarea=>{
        guardarTareaActual(tarea);
    }
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
            {tarea.estado?
            (
                <button
                    type="button"
                    className="completo"
                    onClick={()=>cambiarEstado(tarea)}
                > Completo</button>
            )
            :
            (
                <button
                    type="button"
                    className="Incompleto"
                    onClick={()=>cambiarEstado(tarea)}
                > Incompleto</button>
            )
            }
        </div>
        <div className="acciones">
            <button
                type="button"
                className="btn btn-primario"
                onClick={()=>seleccionarTarea(tarea)}
            >
                Editar
            </button>
            <button
            type="button"
            className="btn btn-secundario"
            onClick={()=> tareaEliminar(tarea.id)}
            >
                Borrar
            </button>
        </div>
        </li>
        
    );
}
 
export default Tarea;