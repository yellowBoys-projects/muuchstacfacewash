import React from 'react'

function Layout() {
    return (
        <section className=''> 
            <nav className='flex relative justify-between items-center px-6 py-5  sm:py-8 sm:px-7  '>
                <a href="#" ><img className="w-32 sm:w-44 md:w-52 lg:w-40" src="https://assets-global.website-files.com/6248cced2e2fd9cf8a16fe9b/6248d620f3a05a3396d9f4c9_Logo-01.svg" alt=""/></a>
                <button className="lg:hidden"><span className='text-2xl sm:text-3xl '><i class="fa-solid fa-bars"></i></span></button>
                <div className='hidden  absolute top-14 right-4 bg-emerald-700 lg:bg-white   px-3 py-4 rounded-md lg:flex lg:static'>
                    <ul className="text-white lg:text-emerald-700 capit flex flex-col justify-center   gap-2 lg:flex-row lg:items-center lg:gap-5">
                        <select className="text-emerald-900" name="pages" id="">
                            <option value="">pages</option>
                            <option value="">about</option>
                            <option value="">conact</option>
                            <option value="">blank page</option>
                        </select>
                        <li><a href="">categories</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">reviews</a></li>
                        <li><a href="">buying guides</a></li>
                    </ul>
                    <button className='bg-red-600 px-4 py-1 rounded-lg text-white mt-1 hover:scale-105 duration-200 lg:ml-4'>sing up</button>                    
                </div>
                <button className='hidden'>sing up</button>
            </nav>
        </section>
    )
}

export default Layout