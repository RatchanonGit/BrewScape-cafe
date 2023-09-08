import ImageSlide from '../Home/Silde/ImageSlide';
import Slide1 from '../../image/slide1.png'
import Slide2 from '../../image/slide2.png'
import BestSellerSilde from './Silde/BestSellerSilde';
import Advert from '../Home/Silde/Advert';

export default function Home(props) {
    const { card } = props
    const url = [Slide1, Slide2,]

    return (
        <div className="home">
            <div className='imageSlide'>
                <ImageSlide url={url}></ImageSlide>
            </div>
            <div>
                <h1 style={{ margin: "50px 0 10px 20px" }}>Best Seller</h1>
                <BestSellerSilde card={card} />
            </div>
            <div>
                <Advert />
            </div>

        </div>


    )
}