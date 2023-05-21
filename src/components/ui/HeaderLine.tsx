import { MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

function HeaderLine() {
  return (
    <div className="hidden md:block h-22 px-3 w-full bg-gray-100">
       <div className='flex justify-between items-center max-w-6xl mx-auto py-3'>
            <ul className='flex items-center text-sm gap-10'>
                <li className='flex gap-2 items-center'><MapPin size={16} />  Kaunas, M.Riomerio g. 7</li>
                <li className='text-xs text-gray-500'>Darbo laikas: I-VII nuo 9:00 iki 18:00</li>
            </ul>
            <h5 className='text-xs text-gray-500 flex items-center gap-2'>
              <PhoneCall size={16} />  Koncultacija telefonu: <a type='number'>+370 000 00000</a>
            </h5>
       </div>
    </div>
  )
}

export default HeaderLine