import React,{useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea  = () => {
    const proyectosConstext = useContext(proyectoContext);
    const {proyecto} = proyectosConstext;
     //obtener la funcion context de la tarea
     const tareasContext = useContext(tareaContext);
     const {tareaseleccionada, errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea}=tareasContext;
    useEffect(()=>{
        if(tareaseleccionada!==null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada])
    const [tarea, guardarTarea] = useState({
        nombre:''
    })
    //extraer el nombre del proyecto
    const {nombre} = tarea;

     if(!proyecto) return null;
    //array distructuring para extraer el array
    const [proyectoActual] =  proyecto;

    //leer los valores del formulario
    const handleChange = e=>{
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e =>{
        e.preventDefault();

        //validar
        if(nombre.trim()=== ''){
            validarTarea();
            return;
        }
        //si es para edicion o nueva tarea
        if(tareaseleccionada===null){
            //agregar nueva tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);
            limpiarTarea();
        }
        
        
        //obtener y filtar lista
        obtenerTareas(proyectoActual.id);
        //reiniciar form
        guardarTarea({
            nombre:''
        })
    }
    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />

                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada? 'Editar Tarea' :'Agregar tarea'}
                    />
                    
                </div>
            </form>
            {errortarea ?<p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
      );
}
 
export default FormTarea ;