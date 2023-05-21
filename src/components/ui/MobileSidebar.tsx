import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';


interface Category {
  name: string;
  subMenu: string[];
}

const sidebarVariants = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
  },
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
    <div className="fixed h-full top-0 left-0 w-full bg-black bg-opacity-50">
    <div className="relative h-full w-3/5 max-w-sm bg-white drop-shadow-lg">
        <div className='flex items-center py-5 pt-6 justify-between px-4'>
            <Link href='/' className='text-sm'>Neprisijungęs</Link>
            <button onClick={() => setNavbarOpen(false)}> <X /> </button>
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
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  </div>
  )
}

export default MobileSidebar