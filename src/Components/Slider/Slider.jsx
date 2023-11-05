import slider1 from '../../assets/slider/slider-1.jpg'
import slider2 from '../../assets/slider/slider-2.jpg'
import slider3 from '../../assets/slider/slider-3.jpg'
import slider4 from '../../assets/slider/slider-4.jpg'

const Slider = () => {
    return (

        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-xl" />
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0.]">
                    <div className='text-white space-y-7 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have
                            suffered alteration in some form</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-info ml-5">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-xl" />
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <div className='text-white space-y-7 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have
                            suffered alteration in some form</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-info ml-5">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-xl" />
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <div className='text-white space-y-7 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have
                            suffered alteration in some form</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-info ml-5">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full rounded-xl" />
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <div className='text-white space-y-7 w-1/3'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have
                            suffered alteration in some form</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-info ml-5">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>



    );
};

export default Slider;