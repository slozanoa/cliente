import React,{useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReduce from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
    } from '../../types';
const TareaState = props =>{
    //state inicial es un objeto
    const initialState = {
        tareas:[
            {id:1,nombre:'Elegir plataforma', estado:true, proyectoId:1},
            {id:2,nombre:'Elegir plataforma de pago', estado:true, proyectoId:3},
            {id:3,nombre:'Elegir Colores', estado:false, proyectoId:2},
            {id:4,nombre:'Elegir hosting', estado:true, proyectoId:4},
            {id:5,nombre:'Elegir plataforma', estado:true, proyectoId:1},
            {id:6,nombre:'Elegir Colores', estado:false, proyectoId:2},
            {id:7,nombre:'Elegir plataforma de pago', estado:true, proyectoId:3},
            {id:8,nombre:'Elegir hosting', estado:true, proyectoId:4},
            {id:9,nombre:'Elegir plataforma', estado:true, proyectoId:1},
            {id:10,nombre:'Elegir Colores', estado:false, proyectoId:2},
            {id:11,nombre:'Elegir plataforma de pago', estado:true, proyectoId:3 },
            {id:12,nombre:'Elegir hosting', estado:true, proyectoId:4},
            {id:13,nombre:'Elegir hosting', estado:true, proyectoId:4}
        ],
        tareasproyecto:null,
        errortarea:false
    }
    //crear el dispatch y state
    const [state,dispatch] = useReducer(TareaReduce, initialState);

    //crear las funciones 
    //obtener tareas del proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
         })
    }
    //agregar tarea al proyecto seleccionado
   const agregarTarea = tarea=>{
            dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
       })
   }
   //VALIDA Y MUESTRA UN ERROR 
   const validarTarea =()=>{
       dispatch({
           type:VALIDAR_TAREA
       })
   }
   //eliminar tarea
   const eliminarTarea=id=>{
       dispatch({
           type:ELIMINAR_TAREA,
           payload: id
       })
   }
    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto:state.tareasproyecto,
            errortarea: state.errortarea,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea
            
        }}
        >
            {props.children}
            
        </TareaContext.Provider>
    )
}

export default TareaState;