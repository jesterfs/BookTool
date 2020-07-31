import React from 'react';
import './Results.css';

export default function Results(props) {
      

    return (
      <div>
        <h2> Results </h2>
          <div >
            {props.data.map(d =>
            <div className='group'>
              <div className='item'>
                <img src={d.volumeInfo.imageLinks.thumbnail} alt="Cover are of {d.volumeInfo.title}" />
              </div>
            
              <div className='item'>  
                <p>Title: {d.volumeInfo.title}</p>
                <p>Author(s): {d.volumeInfo.authors}</p>
                <p><a href={d.saleInfo.buyLink} target='_blank' rel='noopener noreferrer'> More Info</a></p>
                
              </div>  
            
            </div>
            
              
            )} 
          </div>
      </div>
    );

  
}

