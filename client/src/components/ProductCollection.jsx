import React from 'react'

const ProductCollection = () => {
  return (
    <div>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
    <header>
    <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Our <span className="font-serif text-yellow">Latest   Clothing </span>{" "}
                Collection
               </h1>
            </span>

 
    </header>

    <ul className="mt-8 grid gap-11 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://img.freepik.com/free-psd/poster-template-urban-fashion_23-2148652501.jpg?t=st=1728292572~exp=1728296172~hmac=92197fd7a8062935bc5346c2f2708636c7c34926de0732b9cb2c7247e49df916&w=740"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

         
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://img.freepik.com/free-psd/lifestyle-price-list-template-design_23-2151770702.jpg?t=st=1728292869~exp=1728296469~hmac=39fe834727dcd278b3d1fd4fbd4a88dcd536877777a0feecc226b1001c237a87&w=360"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

         
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149853383.jpg?t=st=1728292653~exp=1728296253~hmac=8033abd353fd1b0d8462636106a4896f77d90caac5c849da7cf8aff9e585f2e1&w=360"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

         
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/shocked-attractive-sale-shopping-woman_171337-14353.jpg?t=st=1728292734~exp=1728296334~hmac=266afaa8459263eec6f5d4f30b3d3c0c3db33dff3e2998a16930ad0b6a4679e8&w=360"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

         
        </a>
      </li>
    </ul>
  </div>
</section>
    </div>
  )
}

export default ProductCollection