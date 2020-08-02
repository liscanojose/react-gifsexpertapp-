import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GiftExpertApp = () =>
{
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAddCategory = () =>
  // {
  //   //caso1 q funciona
  //   //setCategories([...categories, 'Inuyasha']);
  //   //caso 2 q tambien funciona
  //   //            valor inicia => valor inicial + lo nuevo
  //   setCategories(categs =>[...categs, 'Inuyasha']);
  // }
  return (
    <>
    <h2>GiftExpertApp</h2>
    <AddCategory setCategories = {setCategories} />
     <hr/>
     <ol>
        {
          categories.map( category =>(
            <GifGrid
              category = {category}
              key = {category}
            />
          ))
        }
     </ol>
    </>
  );
}

export default GiftExpertApp;
