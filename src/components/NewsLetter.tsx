

const NewsLetter = () => {
  return (
    <div className='container pt-16'>
        <div className="bg-accent py-8">
      <div className="container grid md:grid-cols-2 sm:grid-cols-2 gap-8 lg:px-[140px] md:px-[100px] items-center">
        {/* First Column */}
        <div>
          <h2 className="text-white lg:text-4xl md:text-2xl sm:text-2xl font-bold">Sign up to Newsletter</h2>
          <p className="mt-2 text-white font-medium">...and receive $20 coupon for first shopping</p>
        </div>

        {/* Second Column */}
        <div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-3/4 p-5 border-none hover:border-none rounded-l"
            />
            <button
              className="w-1/3 bg-accentDark text-white py-5 px-4 rounded-r font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default NewsLetter;
