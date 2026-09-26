import React from 'react'
import dumble from '../../assets/dumble.png';
const Sidebar = () => {
    return (
        <div className='w-1/3 border-2 bg-zinc-800  p-5 '>
            <div className='text-center font-bold text-4xl text-white'>
             Night Wolf 
             </div>
                <div>
                   <div>
               <div className='text-center font-bold text-3xl text-teal-700'>
                 Fitness
             </div>
                <div className='flex gap-5 my-5'>
                   <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                 <img  alt='Night Wolf Fitness' src={dumble} className='w-full h-full rounded-full border-2 border-teal-700'/>
         </div>
         <div>
           <div className='text-2xl text-white'>Good Morning</div>
           <div className='text-xl mt-1 font-semibold text-teal-700'>Admin</div>
         </div>
    </div>

       <div className='mt-10 p-5 border-t-2 border-grey-50 text-white'>
         options
       </div>

      </div> 
    </div>
  </div>
    ) 
}
export default Sidebar;
