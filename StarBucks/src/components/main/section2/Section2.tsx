import "./section2.scss"
import Decor from "../../../assets/section2.png"
import Video from "../../../assets/video.png"
function Section2() {
    return (
        <section className="section2">
            <img src={Decor}/>
            <div className="section2-container">
                <h2 className="section2-container__title">We make <span className='section2-container__title--span'>delicious</span></h2>
                <p className="section2-container__subtitle">Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <img src={Video}/>
            </div>
        </section>
    )
}

export default Section2
