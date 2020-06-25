import React,{useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea  = () => {
    const proyectosConstext = useContext(proyectoContext);
    const {proyecto} = proyectosConstext;
     //obtener la funcion context de la tarea
     const tareasContext = useContext(tareaContext);
     const {errortarea,agregarTarea,validarTarea,obtenerTareas}=tareasContext;

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
        //pasar la vlidación
        
        //agregar nueva tarea
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
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
                        value="Agregar Tarea"
                    />
                    
                </div>
            </form>
            {errortarea ?<p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
      );
}
 
export default FormTarea ;