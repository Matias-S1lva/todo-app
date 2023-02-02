import React,{useEffect,useState} from 'react';

function useLocalStorage(itemName, initialValue) {
    //utilizamos otros hooks
    const [item, setItem] = useState(initialValue);
  
    //Creamos estado inicial para nuestros errores y carga
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      //Simulamos un segundo de delay de carga
      setTimeout(() => {
        //Manejamos la tarea dentro de un try/catch por si ocurre algun error
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
        } catch (error) {
          setError(error);
        } finally {
          //tambien podemos utilizar la ultima parte del try/catch para terminar la carga
          setLoading(false);
        }
      }, 3000);
    });
  
    //Guardamos nuestro item en una constante
  
    //Utilizamos la logica que teniamos, pero ahora con las variables y parametros nuevos
    //actualizamos la funcion para guaradar nuestro item con las nuevas variables y parametros
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    //para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
    return { item, saveItem, loading, error };
  }

  export {useLocalStorage}