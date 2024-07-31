import Image from "next/image";


export default function Home() {
  return (
    <main >
       <div className="flex justify-center text-2xl gap-20 mt-2">
       <div className="text-2xl font-bold text-yellow-500 font-serif	text-2xl mr-96">FoodHouse</div>
                    <a className="text-amber-500">HOME</a>
                    <a>RESTAURANT</a>
                    <a>SERVICES</a>
                    <a>CART</a>
                    <a className="ml-96">Sign In</a>
                </div>
                {/* <a >Sign In</a> */}
                <div className="flex gap-80 mt-20">
        <div className="ml-4 ">
          <div className="flex-col mt-5">
            <h1 className="text-7xl">Enjoy Delicious </h1>
            <span className="text-7xl"> Food in</span>
            <span className="text-yellow-500 text-6xl p-3">Healthy Life </span>
          </div>
          <p className="mt-10 text-3xl">
            Tandoori masaala is an Indian spice blend consisting of a 
            variety of spices. Tandoori masaala is an Indian spice blend consisting of a 
            variety of spices.
          </p>
          <button className="bg-yellow-500 rounded-lg text-white p-3 mt-16 text-2xl">
            <p>ORDER NOW</p>
          </button>
        </div>
        <div>
          <figure>
            <img src="/Images/chicken.png" width={2800}></img>
          </figure>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl mt-20 font-bold font-serif">Online Store</h1>
        <p className="text-center text-6xl font-bold font-serif ">Popular Foods</p>
      </div>
      <div className="flex gap-60 justify-center items-center mt-6 m-24 ">
        <div>
          <img src="/Images/fishdish.jpeg" className="rounded-full h-56" width={230} />
          <div className="block ml-0">
          <p className="text-2xl ml-16">Fruit dish</p>
          <img src="/Images/stars.jpg" className="h-26 ml-4" width={200} />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm ml-7">
            <a className="text-xl">Add to cart $696</a>
          </button>
          </div>
        </div>
        <div>
          <img src="/Images/chipsfish.jpeg" className="rounded-full h-56" width={230} />
          <p className="text-2xl ml-16">Fruit dish</p>
          <img src="/Images/stars.jpg" className="h-26 ml-4" width={200} />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm ml-7">
          <a className="text-xl">Add to cart $696</a>
          </button>
        </div>
        <div>
          <img src="/Images/seafish.jpeg" className="rounded-full h-56" width={200} />
          <p className="text-2xl ml-8">Sea fish dish</p>
          <img src="/Images/stars.jpg" className="h-26" width={200} />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm ml-4">
          <a className="text-xl">Add to cart $696</a>

          </button>
        </div>
        <div>
          <img src="/Images/fruitdish.jpeg" className="rounded-full h-56" width={200} />
          <p className="text-2xl ml-10">Fruit dish</p>
          <img src="/Images/stars.jpg" className="h-26 " width={200} />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm ml-4">
          <a className="text-xl">Add to cart $696</a>
          </button>
        </div>
      </div>
      <button className="bg-yellow-500 mt-5 ml-80 p-2 rounded-lg text-white text-sm">
           <a className="text-2xl font-bold"> -50%</a>
          </button>
      <div className="flex justify-center items-center">
        <div className="mt-6 m-10 mr-60">
          <h1 className="text-7xl font-bold public/Images/crosscut.jpeg ">Our Special Offer</h1>
          <p className="mt-8 text-2xl">
            Best cooks and best delivery guys at your
          </p>
          <p className="text-2xl">
            service. Hot tasty food will reach you in 60 minutes.
          </p>
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm">
           <a className="text-2xl"> See All Menu</a>
          </button>
        </div>
        <figure>
          <img src="/Images/salad.jpeg" className="rounded-full h-96" width={400} />
        </figure>
      </div>
      <div className="mt-8 text-center">
        <div className="flex justify-center">
        <p>Quality food</p>
        <div className="flex justify-center">
        <img src="/Images/thumpsup.jpeg" className="rounded-full h-6 ml-120" width={30} />
        </div>
        </div>
        <h1 className="text-6xl font-bold mb-10">Get The Best Offers</h1>
        <p className="text-2xl">
          The food at your doorstep. why starve when you have us. Your hunger
        </p>
        <p className="text-2xl">
          patrner, Straight out of the oven to your dorstep
        </p>
      </div>
      <div className="flex gap-20 text-left mt-12 m-24 text-2xl justify-center items-center">
        <div className="flex">
          <div>
            <h3>Any day offers</h3>
            <p>New phenomenon</p>
            <p>Burger taste</p>
            <p className="text-yellow-500 font-bold">$ 12.90</p>
          </div>
          <figure>
            <img src="/Images/burger.jpeg" className="h-52" width={200} />
          </figure>
        </div>
        <div className="flex gap-20 text-left  text-2xl">
          <div>
            <h3>Other</h3>
            <p>flavors</p>
            <p>save room. We</p>
            <p>Made salad</p>
            <p className="text-yellow-500 font-bold">$ 12.00</p>
          </div>
          <figure>
            <img src="/Images/brocoli.jpeg" className="h-52" width={200} />
          </figure>
        </div>
        <div className="flex gap-20 text-left text-2xl">
          <div>
            <h3>Find a poco</h3>
            <p>Store near</p>
            <p>You</p>
            <p className="text-yellow-500 font-bold">$ 12.90</p>
          </div>
          <figure>
            <img src="/Images/map.jpeg" className="h-52" width={200} />
          </figure>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-5xl">Our Service</h1>
      </div>
      <div className="flex gap-80 mt-8 m-24 justify-center items-center">
        <figure>
          <img src="/Images/restaurant.png" className="h-42" width={200} />
          <h3 className="text-xl">55+Restaurants</h3>
        </figure>
        <figure>
          <img src="/Images/quality.png" className="h-42" width={200} />
          <h3 className="text-xl">Good quality</h3>
        </figure>
        <figure>
          <img src="/Images/system.png" className="h-52" width={300} />
          <h3 className="text-xl">Discount system</h3>
        </figure>
        <figure>
          <img src="/Images/delivery.png" className="h-42" width={200} />
          <h3 className="text-xl">fast delivery</h3>
        </figure>
      </div>
      <div className="text-center ">
        <p className="text-2xl font-bold">Testimonial</p>
        <h1 className="text-5xl font-bold">What Our Clients Say</h1>
      </div>
      <div className="flex justify-center mr-80">
      <img src="/Images/topcommas.png" className="justify-center h-14 ml-80 mt-8" width={60} />
      </div>
      <div className="mt-9 m-28 text-center text-2xl justify-center items-center">
        <p>Lorem ipsum dolor aimet,consetus adipisingelit,sed do</p>
        <p>ut labore et dalore magna alique. Uyt ad mininms quies nagfhj</p>
        <p>ulicamo laboris nisi ut alique ea commendo</p>
        <div className="flex  resize-y  gap-0 mt-8 ms-9 justify-center items-center">
          <figure>
            <img src="/Images/Atlantic.jpeg" className="rounded-full h-28" width={110} />
          </figure>
          <figure>
            <img src="/Images/coloradoan.jpeg" className="rounded-full h-28" width={110} />
          </figure>
          <figure>
            <img src="/Images/freepik.jpeg" className="rounded-full h-32" width={130} />
          </figure>
          <figure>
            <img src="/Images/forbes.jpeg" className="rounded-full h-28" width={110} />
          </figure>
          <figure>
            <img src="/Images/crosscut.jpeg" className="rounded-full h-28" width={110} />
          </figure>
        </div>
        <div className="flex-col justify-center">
          <p className="text-2xl font-bold mt-6">Mitchell Marsh</p>
          <p className="text-xl mb-4">CEO,Bexon Agency</p>
          <figure>
            <div className="flex justify-center">
            <img src="/Images/grayarrow.jpeg" className="h-14" width={60}/>
            <img src="/Images/orangearrow.png" className="h-14" width={60}/>
            </div>
          </figure>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-beige-100">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-6">
        <div className="flex-shrink-0 mb-8 md:mb-0">
        <img src="/Images/fooddelivery-banner-img.webp" width={300}/>
        </div>
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-orange-500 font-medium text-2xl">Download Our App</h2>
          <h1 className="text-6xl font-bold my-4 font-serif">It’s all here.</h1> 
         <h1 className="text-6xl font-bold my-4 font-serif"> All in one app.</h1>
          <p className="text-gray-600 mb-6">
            Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="inline-block">
            <img src="/Images/images (19).jpeg" className="h-14" width={200}/>
              </a>
            <a href="#" className="inline-block">
            <img src="/Images/images (19).jpeg" className="h-14" width={200}/> 
            </a>
          </div>
        </div>
      </div>
    </div>


      <div className="flex gap-28 m-24 justify-center items-center">
        <div>
          <h1 className="text-6xl font-bold font-serif">Subscribe Our Newsletter</h1>
          <p className="mt-10 text-2xl text-gray-900">Subscribe on our newsletter to get our</p>
          <p className="text-2xl text-gray-900">news</p>
        </div>
        <div className="flex text-2xl">
        <input
            type="email"
            placeholder="Your email address.."
            className="flex-grow p-3 border border-gray-900 rounded-lg focus:outline-none focus:border-indigo-500 h-20"
          />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm h-20 mb-4 mt-0 w-60">
            <p className="text-2xl">Subscribe</p>
          </button>
        </div>
      </div>
      <div className="flex gap-60 bg-black text-white justify-center items-center h-72 ">
        <div className="ms-2 text-2xl">
          <h1>FoodHouse.</h1>
          <p>Best cooks and best delivery guys all</p>
          <p>at your service. Hot tasty food will</p>
          <p>reach you in 60 minutes.</p>
          <div className="flex gap-4">
          <img src="/Images/facebook.png" className="h-18" width={60}/>
          <img src="/Images/Xtwitter.png" className="h-14" width={60}/>
          <img src="/Images/linkedin.png" className="h-14" width={60}/>
          </div>
        </div>
        <div className="text-2xl">
          <h3>Company</h3>
          <p>Career</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Press Info</p>
          <p>Features</p>
        </div>
        <div className="text-2xl">
          <h3>Fudo</h3>
          <p>Why fudo</p>
          <p>How it works</p>
          <p>Why choose Us</p>
          <p>Client Stories</p>
          <p>Gallery</p>
        </div>
        <div className="text-2xl">
          <h3>Menu</h3>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Fast Foods</p>
          <p>Drinks</p>
        </div>
      </div>
      <div className="bg-amber-400 text-white h-12">
        <div className="flex gap-20">
        <p className="text-center text-1xl ml-96">@Copyright 2021 Bensik All Right Reserved</p>
        <div className="flex gap-20 ml-96 text-1xl">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
      </div>
      </div>
      </div>
    </main>
  );
}
