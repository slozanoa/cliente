import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoProyectos = () => {

    //extraer proyecto de state inicial
    const proyectosConstext = useContext(proyectoContext);
    const {proyectos,obtenerProyectos} = proyectosConstext;

    useEffect(()=>{
        obtenerProyectos();
        // eslint-disable-next-line
    },[]);
    if(proyectos.length===0)return <p>No hay proyectos, crear uno</p>;

    
    return ( 
        <ul className="listado-proyectos">
           <TransitionGroup>
                {proyectos.map(proyecto=>(
                    <CSSTransition
                    key={proyecto.id}
                    timeout={200}
                    className="proyecto"
                    >
                        <Proyecto
                            
                            proyecto={proyecto} 
                    />
                    </CSSTransition>
            ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;