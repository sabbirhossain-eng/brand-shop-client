const OurStory = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto m-10"
      >
        <img
          className="object-cover rounded-t-lg h-auto w-1/2 "
          src="https://i.ibb.co/k0X0SwD/image.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
          <p className="mb-3 text-xl font-semibold text-[#322153] dark:text-gray-400">
            Our Story
          </p>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#77aa51] dark:text-white">
            For People Who Love Technology
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          In a world driven by innovation and the relentless pursuit of progress, there exists a special group of individuals, those who possess a boundless passion for the ever-evolving world of technology. They are the enthusiasts, the early adopters, and the curious minds who embrace the digital age with an unquenchable thirst for knowledge and a profound love for all things tech.
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          For people who love technology, every day is an opportunity to embark on a thrilling adventure, exploring the latest gadgets, software, and emerging trends. Their fascination knows no bounds, from the sleek and powerful smartphones that seamlessly connect them to the world, to the cutting-edge artificial intelligence that promises to reshape the future.
          </p>
          <div>
          <button className="btn bg-[#77aa51] text-white hover:text-black">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
