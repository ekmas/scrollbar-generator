import React from 'react'
import ColorProperty from './ColorProperty'
import NumberProperty from './NumberProperty'
import SelectProperty from './SelectProperty'

export default function Properties() {
  return (
    <div className='bg-[#ffffff] p-5 rounded border-2 border-black'>
        <p className='text-center text-xl font-medium mb-3'>Properties</p>

        <ColorProperty 
          text={'Thumb color'} 
          variableName={'thumbColor'} 
          functionName={'changeThumbColor'} 
        />

        <ColorProperty 
          text={'Track color'} 
          variableName={'trackColor'} 
          functionName={'changeTrack'} 
        />

        <ColorProperty 
          text={'Border color'} 
          variableName={'borderColor'} 
          functionName={'changeBorderColor'} 
        />

        <NumberProperty 
          text={'Width'} 
          variableName={'width'} 
          functionName={'changeWidth'} 
          min={'1'}
        />

        <NumberProperty 
          text={'Border radius'} 
          variableName={'borderRadius'} 
          functionName={'changeBorderRadius'} 
          min={'0'}
        />

        <NumberProperty 
          text={'Border width'} 
          variableName={'borderWidth'} 
          functionName={'changeBorderWidth'} 
          min={'0'}
        />

        <SelectProperty 
          text={'Border style'} 
          variableName={'borderStyle'} 
          functionName={'changeBorderStyle'} 
          options={['solid', 'dotted', 'dashed', 'double', 'none', 'groove', 'inset', 'ridge', 'outset']}
        />

        <SelectProperty 
          text={'Firefox width'} 
          variableName={'firefoxWidth'} 
          functionName={'changeFirefoxWidth'} 
          options={['auto', 'none', 'thin']}
        />
    </div>
  )
}
