import "./section3.scss"
import Capuccino from "../../../assets/cappucino.png"
import Fast2 from "../../../assets/fast2.png"
import Fast3 from "../../../assets/fast3.png"
import Arrows from "../../../assets/arrows.svg"

function Section3() {
    return (
        <section className="section3">
            <div className="section3-container">
                <h2 className="section3-container__title">New Our <span className='section3-container__title--span'>Products</span></h2>
                <p className="section3-container__subtitle">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
            </div>
            <div className="section3-cards">
                <div className="section3-cards-card">
                    <img className="section3-cards-card__img" src={Fast3} alt="fast"/>
                    <p className="section3-cards-card__title">Fast</p>
                    <p className="section3-cards-card__subtitle">Our cafe will serve you quickly</p>
                    <div className="section3-cards-card-texts">
                        <p className="section3-cards-card-texts__price">7,45$</p>
                        <p className="section3-cards-card-texts__volume">330 ml</p>
                    </div>
                    <button className='section3-cards-card__btn'>Buy Product</button>
                </div>
                <div className="section3-cards-card">
                    <img className="section3-cards-card__img" src={Fast2} alt="fast"/>
                    <p className="section3-cards-card__title">Fast</p>
                    <p className="section3-cards-card__subtitle">Our cafe will serve you quickly</p>
                    <div className="section3-cards-card-texts">
                        <p className="section3-cards-card-texts__price">7,45$</p>
                        <p className="section3-cards-card-texts__volume">330 ml</p>
                    </div>
                    <button className='section3-cards-card__btn'>Buy Product</button>
                </div>
                <div className="section3-cards-card">
                    <img className="section3-cards-card__img" src={Capuccino} alt="capucino"/>
                    <p className="section3-cards-card__title">Cappuccino</p>
                    <p className="section3-cards-card__subtitle">Our cafe will serve you quickly</p>
                    <div className="section3-cards-card-texts">
                        <p className="section3-cards-card-texts__price">7,45$</p>
                        <p className="section3-cards-card-texts__volume">330 ml</p>
                    </div>
                    <button className='section3-cards-card__btn'>Buy Product</button>
                </div>
                <img src={Arrows} alt="arrows"/>
            </div>
        </section>
    )
}

export default Section3
