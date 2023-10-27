const BlogCard = ({ img, title, date, comment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={img} alt={title} className="w-full h-auto rounded-md" />
      <div className="flex items-center justify-between">
      <p className="text-gray-500 mt-2">{date}</p>
      <p className="text-gray-500 mt-2">{comment} Comments</p>
      </div>
      <h3 className=" text-xl font-semibold mt-4">{title}</h3>
    </div>
  );
};

const Blog = () => {
  const BlogCardData = [
    {
      img: '/post/post-2-768x487.webp',
      title: 'Prasent imperdiet going through',
      date: 'April 25, 2022',
      comment: 0,
    },
    {
      img: '/post/post-3-768x487.webp',
      title: 'Maecenas ultricies tratise',
      date: 'July 25, 2022',
      comment: 0,
    },
    {
      img: '/post/post-4-768x487.webp',
      title: 'Suspendisse quis eros cursus',
      date: 'April 15, 2022',
      comment: 0,
    },
  ];

  return (
    <div className='container pt-16'>
      <h2 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl">Latest News</h2>
      <p className="text-gray-500">Present posts in the best way to highlight interesting moments of your blog.</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-8">
        {BlogCardData.map((el, index) => (
          <BlogCard
            key={index}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
