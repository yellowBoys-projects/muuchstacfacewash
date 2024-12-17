import { post1 } from "../../assets/materials"

export default function  Main(){
    return(
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-4 ">
        <Card01 img={post1} 
        title={'How to Prep Your Lawn in the Spring'}
         para={''}/>
        <Card01 img={'https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251de2c58fd7e9bb4755a46_Vegetables.jpg'} title={'Secrets to Know About Hedge Trimming'} para={''}/>
        <Card01 img={'https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251ddb271cdba5e3f52b7de_Dying-Tree.jpg'} title={'What to Do With a Dying Tree'} para={''}/>
       <div className="">
        <Card01 img={'https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251de953135bf6f78bee519_Flowers.jpg'} title={'Which Flowers Should You Plant Garden'} para={''}/>
           
       </div>
        </div>
    )
}
function Card01(props){
    return(
        <>
        <div className=' border-2 border-emerald-700 w-11/12 auto hover:scale-105 duration-200 hover:border-emerald-700 lg:border-emerald-300 lg:shadow-2xl  '>
<img className='w-fit rounded-sm ' src={props.img} alt="" />
<h3 className='text-md bold py-2 text-center sm:text-xl lg:text-sm'><a href="#" className="border-b-2 duration-200 hover:scale-105 hover:border-emerald-700">{props.title}</a></h3>
<p className="text-center mb-5">{props.para}</p>
</div>
        </>
    )
}

export function Card02(){
    return(
<div className="grid grid-cols-1 gap-5 md:grid-cols-3  ">
<Card02_copy img={"https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6251c058a914166f1460329c_Lawnmower1.jpg"} 
top="lawns" title="Lawnmower Xtreme" para="This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet"/>
<Card02_copy img={"https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/62536f974b75bb9d8c91fcad_HedgeTrimmer.jpg"} 
top="lawns" title="Lawnmower Xtreme" para="This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet"/>
<Card02_copy img={"https://cdn.prod.website-files.com/6249a9cc7b96d375dd0db024/6253733253c9ae18a7f69a37_Fertilizer.jpg"} 
top="lawns" title="Lawnmower Xtreme" para="This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet"/>

</div>
        )
}
function Card02_copy(props){
return(
    <>
<div className="border-2 border-emerald-700 relative sm:p-3 ">
              <img className="scale-90 hover:scale-100 duration-200 " src={props.img} alt="" />
              <span className="absolute top-7 left-7 border-2 border-slate-300 px-3 rounded-lg sm:py-2 sm:px-5 sm:left-14 sm:top-14 lg:top-8  lg:left-10 lg:px-2 lg:py-1  ">{props.top}</span>
              <h3 className="text-center text-md bold sm:text-xl sm:py-3 lg:text-lg">{props.title}</h3>
              <p className="px-1 text-center sm:text-lg lg:text-sm">{props.para}</p>
            </div>
    </>
    )
}
