import React from 'react';

export default function Filter(props) {
  const { onChange, options, title, id} = props;

  return (
    <>
      <label htmlFor={id}> {title} </label>
      <select id={id} onChange={onChange}>
        {options.map(([val,name]) =>
          <option value={val}>{name}</option>)}
      </select>
    </>
  )
}