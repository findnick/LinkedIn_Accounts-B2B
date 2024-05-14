import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingCarousel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-3/4 m-auto index-carousel">
        <div className="mt-20 mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-4">
                <img src={image.url} alt="" className="image-container mx-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default LandingCarousel;
