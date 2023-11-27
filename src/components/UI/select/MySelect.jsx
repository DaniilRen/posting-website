import React from 'react'

export default function MySelect({options, defautlValue, value, onChange}) {
  return (
	 <select 
		value={value} 
		onChange={event => onChange(event.target.value)}
	 >
		<option disabled value=''>{defautlValue}</option>
		{options.map(option => 
			<option key={option.value} value={option.value}>
				{option.name}
			</option>
		)}
	 </select>
  )
}
