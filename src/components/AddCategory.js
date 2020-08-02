import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( {setCategories} ) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( inputValue.trim().length >2 )
    {
      //existentes y leugo la ultima
      //setCategories(categs =>[...categs, inputValue]);
      //ultima y luego las existentes
      setCategories(categs =>[inputValue,...categs,]);
      setInputValue('');
    }

  }
  return (
    <form onSubmit = { handleSubmit }>
      <input
      type="text"
      value = {inputValue}
      onChange= {handleInputChange}
      />
    </form>
  )

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
