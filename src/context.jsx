
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer  from './reducer';
import API from "./data.json"


// create app context
//provider
//consumer


const AppContext =createContext();



const initialState ={
    name:'robin',
    image:'',
    services:[],
}



const AppProvider = ({children})=>{


    const [state,dispatch] = useReducer(reducer,initialState)

//updating home and about pages
const updateHomePage=()=>{
    return dispatch(
        {
            type:"HOME_UPDATE",
            payload:{
                name:"Front-End Devlopement",
                image:"./images/hero.svg",
                topData:false,
            }
        }
    )
}
const updateAboutPage=()=>{
    return dispatch(
        {
            type:"ABOUT_UPDATE",
            payload:{
                name:"Robin Roy",
                image:"./images/about.svg",
                topData:true,
            }
        }
    )
}


// getting local data =====>
const getServices=(url)=>{

    dispatch({type:"GET_SERVICES",payload:url})

}
// to call the api 

useEffect(()=>{
getServices(API);
},[]);


   return <AppContext.Provider value={{...state, updateAboutPage,updateHomePage}}>
        {children}
       </AppContext.Provider>
}


const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppContext,AppProvider,useGlobalContext};