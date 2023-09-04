import ImageSlide from '../function/ImageSlide';
import Slide1 from '../../image/slide1.png'
import Slide2 from '../../image/slide2.png'
import Promotion from '../function/Promotion';

export default function Home(props) {
    const { card } = props
    const url = [Slide1, Slide2,]

    return (
        <div className="home">
            <ImageSlide url={url}></ImageSlide>
            <Promotion card={card} />
        </div>


    )
}