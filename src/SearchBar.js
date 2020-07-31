import React from 'react';
import Filter from './Filter';
import './SearchBar.css';


export default function SearchBar(props){

  // const searchTerm = document.getElementById('search').value;
  function onChangePrintType(e) {
    props.changePrintType(e.currentTarget.value);
  }

  function onChangeAvailability(e) {
    props.changeAvailabilty(e.currentTarget.value);
  }

  return (
    <div>
      <form  id='searchForm' onSubmit={props.handleSubmit}>
          <div className='search'>
            <label htmlFor="search">Search:</label>
            <input type="text" value={ props.searchTerm } onChange={props.handleChange} id="search" name="search"/>
          </div>
        
          <Filter 
            
            id='printType'
            onChange={onChangePrintType}
            title="Print Type"
            options={[
              ['', "All"], 
              ['books', 'Books'], 
              ['magazines', 'Magazines']
          ]} />
          <Filter 
            
            onChange={onChangeAvailability}
            title="Availability"
            options={[
              ['', "Any"], 
              ['free-ebooks', 'Free Ebooks'], 
              ['paid-ebooks', 'Paid Ebooks']
          ]} />
        
        
          <input
            type='submit' value='Submit' />
        
      </form>
      
      

    </div>
  );
}
