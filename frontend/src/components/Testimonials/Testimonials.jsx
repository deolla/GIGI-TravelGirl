import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    name: "Trevor Job",
    text: "GIGI-TravelGirl exceeded all expectations! From the moment we inquired about our trip to the day we returned home, her professionalism and dedication to providing the best travel experience shone through. Can't wait to book our next adventure with her!",
    img: "https://picsum.photos/101/101",
  },
  {
    name: "Osi Keme",
    text: "I've traveled with GIGI-TravelGirl multiple times, and each experience has been nothing short of amazing. The seamless planning and fantastic destinations keep me coming back for more adventures!",
    img: "https://picsum.photos/102/102",
  },
  {

    name: "Deosun Adeola",
    text: "Booking with GIGI-TravelGirl was a game-changer for our family vacation! From finding the perfect destination to arranging all the details, her expertise and personalized service made our trip unforgettable.",
    img: "https://picsum.photos/103/103",
  },
  {

    name: "Bovi Oke",
    text: "GIGI-TravelGirl took care of everything, allowing us to fully immerse ourselves in the beauty of our destination. Her attention to detail and commitment to customer satisfaction made our honeymoon a dream come true.",
    img: "https://picsum.photos/103/104",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;