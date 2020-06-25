import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //extraer proyecto de state inicial
    const proyectosConstext = useContext(proyectoContext);
    const {proyectos,obtenerProyectos} = proyectosConstext;

    useEffect(()=>{
        obtenerProyectos();
    },[]);
    if(proyectos.length===0)return <p>No hay proyectos, crear uno</p>;

    
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto=>(
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto} 
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;