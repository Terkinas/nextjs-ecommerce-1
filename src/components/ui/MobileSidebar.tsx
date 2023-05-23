import { Search, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';


interface Category {
  name: string;
  subMenu: string[];
}

const sidebarWindow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    }
  },
  exit: {
    opacity: 0,
  }
}

const sidebarVariants = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    }
  },
  exit : {
    x: '-100%',
  }
};
  

const MobileSidebar = ({setNavbarOpen}: {setNavbarOpen: (state: boolean) => void}) => {
    const [openCategories, setOpenCategories] = React.useState<string[]>([]);

  const categories: Category[] = [
    {
      name: 'Category 1',
      subMenu: ['Type 1', 'Type 2', 'Type 3']
    },
    {
      name: 'Category 2',
      subMenu: ['Type A', 'Type B', 'Type C']
    },
    // Add more categories here
  ];

  const toggleSubMenu = (categoryName: string): void => {
    if (openCategories.includes(categoryName)) {
      setOpenCategories(openCategories.filter(category => category !== categoryName));
    } else {
      setOpenCategories([...openCategories, categoryName]);
    }
  };

  return (
    <motion.div 
    variants={sidebarWindow}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="fixed h-full top-0 left-0 w-full bg-black bg-opacity-50">
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit='exit'
     className="relative h-full w-3/5 max-w-sm bg-white drop-shadow-lg">
        <div className='flex items-center py-5 pt-6 justify-between px-4'>
            <Link href='/' className='text-sm'>Neprisijungęs</Link>
            <button onClick={() => setNavbarOpen(false)}> <X size={16} /> </button>
        </div>

        <div className=" relative flex items-center w-full rounded px-3 pb-3">
              <input className="p-1 h-8 text-xs border px-4 py-1 border-gray-400 border-r-0 rounded-l outline-none" placeholder="Įrašykite, ko ieškote" type="text" />
              <span className="bg-emerald-500 relative text-white w-8 h-8 rounded flex items-center justify-center
              rounded-l-none border-emerald-500 cursor-pointer
              hover:bg-emerald-400">
                <Search size={18} />

              </span>
            </div> 

        <h5 className='text-xs px-4 py-2'>Prekių katalogas</h5>
        <hr />
      <ul className="py-4">
        {categories.map(category => (
          <li key={category.name}>
            <button
              className="w-full py-2 px-4 text-left"
              onClick={() => toggleSubMenu(category.name)}
            >
              {category.name}
            </button>
            {openCategories.includes(category.name) && (
              <ul className="pl-4">
                {category.subMenu.map((subItem, index) => (
                  <li key={index} className="py-2 px-4">{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.div>

   
  </motion.div>
  )
}

export default MobileSidebar