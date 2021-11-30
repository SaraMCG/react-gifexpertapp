import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        // Lo agrega después del arreglo de categories
        // setCategories( [...categories, 'HunterXHunter'] );
        // Lo agrega antes del arreglo de categories
        // setCategories( ['HunterXHunter', ...categories] );
        // Lo agrega (cambia de estado) con una función de flecha
        setCategories(cats => [...cats, 'HunterXHunter']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
