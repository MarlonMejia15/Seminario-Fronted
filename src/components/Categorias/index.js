import { useState,useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import ListaElementos from "../NotayCategoriaComponent/ListaElementoCategoria";
import Page from "../Page";
import { fetchCategoriesData } from '../../store/reducers/categories/actions';
import {publicAxios} from "../../store/utils/Axios"
import { useNavigate } from 'react-router-dom';

const getSecurity = ({security})=>security;
const getCategories =({categories})=>categories;
const AgregarCategoria = () =>{ 

    const [categoria, setcategoria] = useState([]);
    const dispatch = useDispatch();
    const {user} = useSelector(getSecurity);
    let {items} = useSelector(getCategories);
    console.log(user);

    const cargar = () =>{
        fetchCategoriesData(dispatch, user.correo_usu);
        
    }
    
    useEffect(() => {
        
        cargar();
    }, [])

    const navigate = useNavigate();
    const onChangeNavegar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/add_categories',{replace:true});
    }
    //************************************************************************** */
    return(
        <Page showHeader={true}  showNavBar>
        <div className="w-11/12 h-96 mx-auto mt-0 border-4 bg-gray-200 rounded-md shadow-lg text-center overflow-y-scroll">
        <h1 className="mt-6 text-2xl font-bold">Categorias</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
            <ListaElementos elementos = {items}/>
            <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                <button onClick={onChangeNavegar}>Agregar Categoría</button>
            </div>
        </div>
    </div>
    </Page>
    )
}

export default AgregarCategoria;
