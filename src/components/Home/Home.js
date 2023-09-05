import ImageSlide from '../function/ImageSlide';
import Slide1 from '../../image/slide1.png'
import Slide2 from '../../image/slide2.png'
import Promotion from '../function/Promotion';
import Advert from '../function/Advert';

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
                <Promotion card={card} />
            </div>
            <div>
                <Advert />
            </div>

        </div>


    )
}