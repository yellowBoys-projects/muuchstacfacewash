import React from 'react'
import Layout from '../layout/Layout'
import Main  from '../Mobile_cart/card'
import {Card02 } from '../Mobile_cart/card'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
function Home() {
  return (
    <div>
    {/*layot component*/}
      <Layout />

      {/*home page component*/}
<Section01/>
{/*list of blog pages component*/}
<div className='hidden'>
<Section02/>
</div>
{/*mobile page component*/}
<div>
  <Mobile_Copy_Section02/>
</div>

{/*vew list component*/}
<Section03/>
{/*list of prodcut review component*/}
<Section04/>

{/*contact component*/}
<Section05/>
{/*footer page component*/}
<Section06/>
    </div>
  )
}

function Section01() {
  return (
    <>
      <Home_Content />
    </>
  )
}


function Home_Content() {
  return (
    <>
      <section className='mb-10 sm:mb-12 lg:my-10'>
        <div className='text-center lg:flex lg:flex-row justify-center'>
          <div className=' '>
            <img className='size-11/12 mx-auto lg:w-96 ' src="https://cdn.prod.website-files.com/6248cced2e2fd9cf8a16fe9b/6249b5a2d770c97347562dd9_undraw_website_builder_re_ii6e.svg" alt="" />
          </div>
          <div className='py-3 sm:py-5 w-1/2'>
            <h6 className='text-sm sm:text-lg lg:text-sm '>Introducing Affiliate Template for Webflow</h6>
            <h1 className='py-2  text-lg uppercase bold sm:text-3xl '>Easy-to-use Template for building Affiliate Sites</h1>
            <p className='text-sm px-4 mb-6 sm:text-lg lg:text-sm'><strong>Affiliate</strong> is a Webflow template made for entrepreneurs who want a professional and polished site ready to start and grow their affiliate marketing business in any niche.</p>

            <a href="#" className='bg-emerald-600 capit  px-3 py-2 rounded-lg shadow-xl text-sm text-slate-100 font-bold sm:px-5 sm:py-3 sm:text-lg lg:text-sm'>buy this template</a>

          </div>
        </div>
      </section>
    </>
  )
}


function Mobile_Copy_Section02(){
  return(
    <section className=" mb-10">
     <h2 className='text-lg bold py-2 capit text-center sm:text-2xl md:text-xl lg:text-xl'>Latest from the Blog</h2>
    <Main/>
    </section>
  )
}

function Section02() {
  return (
    <section className='my-10'>
      <div className='text-center'>
        <article>
          <h2 className='text-lg bold py-2 capit'>Latest from the Blog</h2>
          <div>
            <div className='my-3 border-2 border-blue-500 w-11/12 auto hover:scale-105 duration-200 hover:shadow-inner'>
              <img className='w-fit rounded-sm' src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251ddff94920cdbcb71baae_Lawncare.jpg" alt="" />
              <h3 className='text-md bold py-2'><a href="#">How to Prep Your Lawn in the Spring</a></h3>
              <p>This is the blog description text. This is the blog description text. This is the blog description text.</p>
            </div>
            <div>
              <div className='w-11/12 auto'>
                <img src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251de2c58fd7e9bb4755a46_Vegetables.jpg" alt="" />
                <a href="">Secrets to Know About Hedge Trimming</a>
              </div>
              <div>
                <img src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251ddb271cdba5e3f52b7de_Dying-Tree.jpg" alt="" />
                <a href="">What to Do With a Dying Tree</a>
              </div>
              <div>
                <img src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251de953135bf6f78bee519_Flowers.jpg" alt="" />
                <a href="">Which Flowers Should You Plant Garden</a>
              </div>
            </div>

          </div>
          <h6> view all blog articles</h6>
        </article>

      </div>


    </section>
  )
  
}
function Section03() {
  return (
    <>
      <section className=" sm:w-11/12 mx-auto"> 
        <div className="text-center py-10 flex justify-center items-center p-4 ">
       <img className="w-12 mx-auto float-left  sm:w-20 md:w-40 lg:w-24" src="https://assets-global.website-files.com/6248cced2e2fd9cf8a16fe9b/625c3881fab88a87ac1342e1_technics-p-500.png" alt="" />
       <div>
       
      <h2 className="text-lg bold sm:text-lg sm:mb-4 md:text-2xl lg:text-xl">View our list of the best products in lawncare.</h2>
          <a href="" className="border-b-2 border-emerald-700 bg-green-600 px-3 py-1 rounded-lg text-white capit sm:py-3 sm:px-4 sm:text-lg md:px-5 md:py-2 md:text-2xl bold lg:text-lg">see the list</a>
       </div>
          
        </div>
      </section>
    </>
  )
}

function Section04() {
  return (
    <>
      <section className=" p-3">
        <article>
          <h2 className="text-center text-xl py-2 bold sm:text-2xl sm:py-5 md:text-2xl lg:text-xl">Latest Product Reviews</h2>
      
           <Card02/>
            
         
          <h6 className=" text-center py-4 capit sm:text-lg"><a href="#" className="border-b-2 border-emerald-700 hover:font-bold duration-200">view all product reviews</a></h6>
        </article>
      </section>
    </>
  )
}
function Section05() {
  return (
    <>
      <section className="md:my-20">
        <div className="flex flex-col justify-center items-center text-center sm:gap-5 md:grid md:grid-cols-2 md:justify-around lg:w-3/4 lg:mx-auto">

          <img className="p-2 sm:w-1/2 md:w-80 lg:w-96" src="https://cdn.prod.website-files.com/6248cced2e2fd9cf8a16fe9b/6249d9dac38bda32751797f4_undraw_newsletter_re_wrob.svg" alt="" />
          <div className=" py-5 ">
            <h2 className="text-lg bold md:text-xl">    Newsletter Signup</h2>
            <p className="py-3 sm:px-3 sm:text-md" >Be the first to receive updates on articles, product reviews, courses, and more!</p>
            <form action="" className="">
              <input type="email" name="" id="" placeholder="enter email " className="ring-2 border-none ring-emerald-600 sm:text-lg md:w-60" />
              <button className="bg-green-500 px-3 py-1 rounded-lg ml-3 sm:px-5 sm:py-3 hover:bg-green-600 md:py-2 md:text-xs">submit</button> <div className="md:hidden"><br/></div>
             <br/>
              <a href="border-b-2 border-emerald-700 text-2xl">privacy policy</a>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function Section06() {
  return (
    <>
      <section className=" mt-5 ">
        <div className="w-full grid grid-cols-1  text-center gap-5  xl:grid-cols-2 ">
          <div className=" py-4">
            <h2 className="text-lg capit bold sm:text-2xl md:text-3xl">affilate</h2>
            <div className="flex flex-row w-full justify-center py-3">
              <i><img className="w-10 mx-auto sm:w-14"  src="https://cdn.prod.website-files.com/6248cced2e2fd9cf8a16fe9b/625c10acc401b377b416d5c3_Utility%20Icons_Facebook%20Black.png"/></i>
              <i><img className="w-10 mx-auto sm:w-14" src="https://cdn.prod.website-files.com/6248cced2e2fd9cf8a16fe9b/625c10b577e2fef3cd6899c3_Utility%20Icons_Twitter%20Black.png" /></i>
              <i><img className="w-10 mx-auto sm:w-14" src="https://cdn.prod.website-files.com/6248cced2e2fd9cf8a16fe9b/625c10b0640b17380c86b49e_Utility%20Icons_Instagram%20Black.png" /></i>
            </div>
            <p className="sm:px-3"><strong>Affiliate</strong> is a Webflow template made for entrepreneurs who want a professional and polished site ready to start and grow their affiliate marketing business in any niche.</p>
          </div>
          <div className="">
            <h3 className="text-lg bold py-2 sm:text-2xl md:text-3xl">Latest Articles </h3>
            <div className="w-full grid grid-cols-1 gap-5 px-4 sm:gap-3 sm:bg-emerald-200 sm:py-3 lg:w-2/3 lg:mx-auto lg:grid-cols-3 lg:gap-10">
              <div>
                <img   src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251ddff94920cdbcb71baae_Lawncare.jpg" alt="" />
                <a href="" className="text-xs sm:text-lg lg:text-sm">How to Prep Your Lawn in the Spring</a>
              </div>
              <div>
                <img  src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251de2c58fd7e9bb4755a46_Vegetables.jpg" alt="" />
                <a href="" className="text-xs sm:text-lg lg:text-sm">
                  Secrets to Know About Hedge Trimming</a>
              </div>
              <div>
                <img  src="https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251ddb271cdba5e3f52b7de_Dying-Tree.jpg" alt="" />
                <a href="" className="text-xs sm:text-lg lg:text-sm">What to Do With a Dying Tree</a>
              </div>
            </div>
          </div>
          <div className="py-2 lg:col-span-3">
            <h3 className="bold text-lg sm:text-2xl sm:py-3" >Browse</h3>
            <form action="" className="mb-3">
              <input type="text" placeholder="more article" className="border-2 border-emerald-700 sm:text-2xl sm:rounded-lg" />
              <button className="bg-green-500 px-3 py-1 rounded-lg sm:px-6 sm:py-2 sm:text-lg">search</button>
            </form>
            <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-5 sm:text-xl md:grid-cols-3 lg:grid-cols-6 lg:text-sm lg:gap-0 lg:w-fit lg:mx-auto">
              <a href="" className="">about</a>
              <a href="">categories</a>
              <a href="">tools</a>
              <a href="">contact</a>
              <a href="">privacy policy </a>
              <a href="">affilate disclosure</a>
            </div>
            <hr />
            <p className="py-3 sm:text-lg">&copy; 2024 your brand name</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="text-xs flex gap-1 sm:text-lg lg:text-sm">
            <a href="">style guide</a>
            <a href="">linsences</a>
            <a href="">chagelog</a>
          </div>
          <p className="float-right text-xs sm:text-lg lg:text-sm">powered by <a href="">webflow</a> desinged by <a href="">baskar</a></p>
        </div>
      </section>
    </>
  )
}

export default Home