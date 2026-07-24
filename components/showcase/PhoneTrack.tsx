"use client";

import Image from "next/image";


export default function PhoneTrack({
  data,
  activeIndex
}: any) {


  const phones = [
    ...data.slice(activeIndex),
    ...data.slice(0, activeIndex)
  ];


  return (

    <div
      className="
      w-full
      overflow-visible
      mt-16
      "
    >


      <div
        className="
        flex
        justify-center
        items-center
        gap-6
        w-max
        mx-auto
        "
      >


        {
          phones.map((phone:any,index:number)=>{


            const active = index === 2;


            return (

              <div
                key={phone.id}
                className={`
                flex-shrink-0
                transition-all
                duration-700

                ${
                  active
                  ?
                  "scale-110"
                  :
                  "scale-100"
                }

                `}
              >


                <Image

                  src={phone.image}

                  alt={phone.title}

                  width={180}

                  height={360}

                  className="
                  rounded-3xl
                  object-cover
                  "

                />


              </div>

            )


          })
        }


      </div>


    </div>

  );
}