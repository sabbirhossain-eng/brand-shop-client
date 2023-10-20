const Banner = () => {
    return (
        <div className=" dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-[#322153]">Technology and Electronics Brand Shop</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Discover Innovation at Your Fingertips, Your Go-To Technology and Electronics Brand Shop for Cutting-Edge Gadgets and Gear.</p>
                <a href="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#77aa51] hover:bg-[#322153] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                </a>
                <a href="/faq" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#322151] border border-[#77aa51] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    FAQ
                </a> 
            </div>
            <div className="flex-col-reverse lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://i.ibb.co/vZQNt1f/Connected-world-rafiki.png" alt="" />
            </div>                
        </div>
    </div>
    );
  };
  
  export default Banner;
  