
import Slider from "react-slick";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Item() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass:'absolute bottom-5 slick-dots ',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
         // eslint-disable-next-line react/prop-types
        const { className, onClick } = props;
        return (
            <div
            className={`${className} bg-red block absolute right-3 z-10`}
            onClick={onClick}
        />
        );
    }

    function SamplePrevArrow(props) {
        // eslint-disable-next-line react/prop-types
        const { className , onClick } = props;
        return (
            <div
                className={`${className} bg-red block absolute left-3 z-10`}
                onClick={onClick}
            />
        );
    }

    const ar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
    const img = ['https://a0.muscache.com/im/pictures/miso/Hosting-32587907/original/cb6e9f82-38dd-4de7-97be-52568c27273a.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/23a65126-0d2b-41bb-92a6-f5204ed273be.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/5c0313fa-6461-41b5-9acf-aacafc62ca2e.jpg?im_w=720']
    return (
        <div className="py-10 grid grid-cols-1 gap-4 auto-cols-max lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1">
            {
                ar.map((x, i) => (
                    <div key={i} className="flex flex-col cursor-pointer ">
                        <div className="relative ">
                            <div className="absolute top-1 right-1 z-10 "><AiOutlineHeart color="white" size={30} /></div>
                            <Slider {...settings}  >
                                {
                                    img.map((x, i) => <div key={i} className="relative outline-none h-64  ">
                                        <img className="rounded-xl object-cover h-full" alt="photo" src={x} />
                                    </div>)
                                }
                            </Slider>
                        </div>
                        <div>
                            <div className="w-full flex justify-between"><p className="font-medium" >Sam Roi Yot ไทย</p> <p className="flex items-center font-light"><AiFillStar />4.92</p></div>
                            <div className="text-sm text-gray-500 truncate">18 กม. ถึง อุทยานแห่งชาติเขาสามร้อยยอด</div>
                            <div className="font-medium">฿7,297 คืน</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Item
