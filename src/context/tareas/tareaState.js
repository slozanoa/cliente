import React,{useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReduce from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
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
        errortarea:false,
        tareaseleccionada:null
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
       tarea.id = uuidv4();
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

    //cambiar estado de cada tarea
    const cambiarEstadoTarea= tarea =>{
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }
    //Extrae la tarea actual
    const guardarTareaActual= tarea =>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }
    //ACTUALIZAR TAREA
        const actualizarTarea=tarea=>{
            dispatch({
                type:ACTUALIZAR_TAREA,
                payload: tarea
            })
        }
        //LIMPIAR TAREA
        const limpiarTarea = ()=>{
            dispatch({
                type:LIMPIAR_TAREA
            })
        }
    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto:state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
        }}
        >
            {props.children}
            
        </TareaContext.Provider>
    )
}

export default TareaState;