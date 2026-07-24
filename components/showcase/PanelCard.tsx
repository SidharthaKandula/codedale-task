"use client";


export default function PanelDeck({

panels

}:{

panels:string[]

}){


return(

<div

className="
flex
justify-center
gap-6
mt-12
"

>


{
panels.map((panel,index)=>(


<div

key={index}

className="
w-[260px]
h-[160px]
rounded-2xl
overflow-hidden
shadow-xl
"

>


<img

src={panel}

alt="panel"

className="
w-full
h-full
object-cover
"

/>


</div>


))

}


</div>


)

}