import React from 'react'
import TextInput from './TextInput'
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

export default function Search() {

  return (
    <div>
      <div className="mb-3 h-[400px]">
        <TextInput
          placeholder = 'search product'
        />
      </div>
    </div>
  )
}
