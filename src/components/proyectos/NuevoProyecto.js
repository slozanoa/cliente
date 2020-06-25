import React,{Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    //obtener el state de formulario

    const proyectosConstext = useContext(proyectoContext);
    const {formulario, errorformulario,mostrarFormulario,agregarProyecto,mostrarError} = proyectosConstext;

    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });
    //lee los contenidos del input
    const onChangeProyecto =e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        });
    }
    //extraer nombre del proyecto
    const {nombre}= proyecto;

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e=>{
        e.preventDefault();
       
        
        //validar el proyecto
         if(nombre===''){
             mostrarError();
            return;
        }
        //agregar el state
        agregarProyecto(proyecto);
        //limpiar formulario
        guardarProyecto({
            nombre:''
        });
        
    }

    //funcion de mostrar formulario de proyecto
    const onClickFormulario = ()=>{
        mostrarFormulario();
    }
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {formulario ? (
                <form 
                className="formulario-nuevo-proyecto"
                onClick={onSubmitProyecto}
                >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agragar proyecto"
                />
            </form>
            ):null}
            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>:null}
        </Fragment>
     );
}
 
export default NuevoProyecto;