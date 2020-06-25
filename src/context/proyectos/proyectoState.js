import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
    } from '../../types';

const ProyectoState = props=>{

    
    const proyectos =[
            {id:1,nombre: 'tiea virtual'},
            {id:2,nombre: 'Intranet'},
            {id:3,nombre: 'Diseño de sitio web'},
            {id:4,nombre:'MERN'}
    ]

    const initialState={
        proyectos:[],
        formulario:false,
        errorformulario:false,
        proyecto:null
    }

    //dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(proyectoReducer, initialState);

    //serie de funciones 
    const mostrarFormulario=()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }
    //obtener los productos
    const obtenerProyectos = () =>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })
    }
    //Agregar nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();
        //agregamos el proyecto al state con un dispatch
        dispatch({
            type:AGREGAR_PROYECTO,
            payload: proyecto
        })
    }
    //Calida el formulario por error
    const mostrarError=()=>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }
    //selecciona el  proyecto actual
    const proyectoActual= proyectoId=>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId
        })
    }
    //ELIMINAR PROYECTO
    const eliminarProyecto= proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                obtenerProyectos,
                mostrarFormulario,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;