import {AiFillDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';






const Elemento = ({titulo,llaveMaestra}) =>{
    const dispatch = useDispatch();
    const getSecurity = ({security})=>security;
    const security = useSelector(getSecurity);
    const navigate = useNavigate();

    const onChangeNavegar = (e)=>{
        dispatch({
            type:"M_NOTA",
            payload: llaveMaestra
            }
    );
        e.preventDefault();
        e.stopPropagation();
        navigate('/add_categories',{replace:true});
}


return(
    <>
    <div onClick={onChangeNavegar} className=" h-10 my-2 bg-white max-w-sm rounded overflow-auto shadow-lg">
            <h1  className="text-2xl">{titulo}</h1>
            <p className="hidden">{llaveMaestra}</p>
    </div>
    </>
)
}

export default Elemento;