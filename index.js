  'use strict'
  console.log('STAAAARTTTTT')
  //api url
  const url = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12';
  
  //get data from api
  fetch(url).then((data) => {
    return data.json()
  }).then((completeData) => {
    const products = completeData.products
    let data1 = "";
    //listing data
    products.map((items) => {
      data1 += `<div id="product" class="product mx-auto font-grotesk pb-[100px]">
      <div class="max-w-[300px] h-[400px]">
        <img class=" mb-[10px] border-black border-2 rounded" src=${items.images.map(item => item.src)} alt="product">
        <div class="flex justify-between mb-[15px]">
          <div>
            <h1 class="font-bold text-sm">${items.title}</h1>
            <p class="font-bold text-sm">${items.variants.map(item => item.price)[1]} KR.</p>
          </div>
          <div>
            <div class="font-semibold text-sm">Condition</div>
            <div class="text-sm">Slightly used</div>
          </div>
        </div>
        <div id="adding" class="bg-black rounded text-white font-grotesk font-bold text-sm">
          <div class="py-[20px] ml-[90px] ">
            PICK-UP IN <span class="underline-offset-4">2200</span>
          </div>
        </div>
      </div>
    </div>`
    document.getElementById('products').innerHTML = data1
    })
  }).catch((err) => {
    return err;
  })
 
  
  window.onload=function(){
    let bool = false;
    let data2 = `<div class="h-[72px] w-[315px] md:w-[660px] lg:w-[900px] bg-black cursor-pointer rounded mt-[24px] mb-[50px] md:mt-[100px] md:mb-[55px]">
          
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <img class="inline-block py-[26px] pl-[5px] lg:pl-[26px]" src="./images/alert-circle.svg" alt="">
            <div class="inline-block text-white py-[26px] pl-1 lg:pl-2 font-grotesk font-bold">ALPHA</div>
            <div class="inline-block text-white py-[26px] pl-2 lg:pl-12 font-grotesk text-sm hidden lg:block">
              Important info regarding our service
            </div>
            <div class="inline-block text-white py-[26px] pl-[10px] lg:pl-12 font-grotesk text-sm block lg:hidden">
              Important info
            </div>
          </div>
            <button class="cursor-pointer inline-block" >
              <img class="py-[33px] pr-[15px] lg:pr-[30px]" src="./images/Vector.svg" alt="arrow_down">
            </button>
        </div>
    </div>`;
    document.getElementById('readMore').innerHTML = data2
    document.getElementById('readMore').addEventListener('click', event => {
      bool = !bool;
      console.log(bool);
      if(bool) {
        data2 =`<div class="h-[300px] w-[315px] md:w-[660px] lg:w-[900px] bg-black cursor-pointer rounded mt-[24px] mb-[50px] md:mt-[100px] md:mb-[55px]">
          
        <div class="flex justify-between">
        <div class="flex flex-row">
        <img class="inline-block py-[26px] pl-[5px] lg:pl-[26px]" src="./images/alert-circle.svg" alt="">
        <div class="inline-block text-white py-[26px] pl-1 lg:pl-2 font-grotesk font-bold">ALPHA</div>
        <div class="inline-block text-white py-[26px] pl-2 lg:pl-12 font-grotesk text-sm hidden lg:block">
          Important info regarding our service
        </div>
        <div class="inline-block text-white py-[26px] pl-2 lg:pl-12 font-grotesk text-sm block lg:hidden">
          Important info
        </div>
      </div>
        <button class="cursor-pointer inline-block" >
          <img class="py-[33px] pr-[5px] lg:pr-[30px]" src="./images/Vector.svg" alt="arrow_down">
        </button>
    </div>
        <div class="h-[1px] mx-auto lg:mx-[160px] block bg-amber-50"></div>
        <div class="inline-block text-white py-[26px] pl-0 lg:pl-[160px] font-grotesk text-sm">
          We're working on a new service to offer you returned online goods at a discount near you.
        </div>
        <div class="h-[1px] mx-auto lg:mx-[160px] mb-[26px] block bg-amber-50"></div>
  
  
  
        <div class="font-grotesk text-white ml-0 lg:ml-[160px] grid grid-rows-1 grid-flow-col gap-x-[10px]">
          <div>
            <div class="font-bold">
              CURRENTLY
            </div>
            <div class="text-xs">
              1. Very limited assortment of items that we ressell
            </div>
            <div class="text-xs">
              2. All sorts of product categories
            </div>
            <div class="text-xs">
              3. Focus on testing the ordering and pick-up experience
            </div>
          </div>
          
          <div class="mt-2">
            <div class="text-xs">
              >
            </div>
            <div class="text-xs">
            >
            </div>
            <div class="text-xs">
              >
            </div>
            <div class="text-xs">
              >
            </div>
          </div>
          <div class="">
            <div class="font-bold">
              FUTURE
            </div>
            <div class="text-xs">
              1. Returned items from other shoppers
            </div>
            <div class="text-xs">
              2. Select product categories
            </div>
            <div class="text-xs">
              3. Focus on end-to-end service experience
            </div>
          </div>
        </div>
        </div>`
      } else {
        data2 = `<div class="h-[72px] w-[310px] md:w-[660px] lg:w-[900px] bg-black cursor-pointer rounded mt-[24px] mb-[50px] md:mt-[100px] md:mb-[55px]">
          
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <img class="inline-block py-[26px] pl-[5px] lg:pl-[26px]" src="./images/alert-circle.svg" alt="">
            <div class="inline-block text-white py-[26px] pl-1 lg:pl-2 font-grotesk font-bold">ALPHA</div>
            <div class="inline-block text-white py-[26px] pl-2 lg:pl-12 font-grotesk text-sm hidden lg:block">
              Important info regarding our service
            </div>
            <div class="inline-block text-white py-[26px] pl-2 lg:pl-12 font-grotesk text-sm block lg:hidden">
              Important info
            </div>
          </div>
            <button class="cursor-pointer inline-block" >
              <img class="py-[33px] pr-[5px] lg:pr-[30px]" src="./images/Vector.svg" alt="arrow_down">
            </button>
        </div>
    </div>`
      }
      document.getElementById('readMore').innerHTML = data2
    })
  }