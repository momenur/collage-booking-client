import bannerImg from '../../../assets/Images/Home/banner.jpg';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-1 text-5xl font-bold">Your Dream</h1>
                        <h1 className="mb-5 text-xl font-bold">is Our Commitment</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;