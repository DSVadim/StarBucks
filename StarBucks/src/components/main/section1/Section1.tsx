import "./section1.scss"
import Coffee from "../../../assets/coffee.png"
import Bottom from "../../../assets/section1.png"
function Section1() {
    return (
        <section className='section1'>
            <div className="section1-container">
                <div className="section1-container-block">
                    <h2 className="section1-container-block__title">New Cafe by <span className='section1-container-block__title--span'>StarBucks</span></h2>
                    <p className="section1-container-block__subtitle">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                    <div className="section1-container-block-buttons">
                        <button className="section1-container-block-buttons__btn1">Select a coffee </button>
                        <button className="section1-container-block-buttons__btn2">More </button>
                    </div>
                    <div className="section1-container-block-cards">
                        <div className="section1-container-block-cards-card">
                            <p className="section1-container-block-cards-card__num">9k<span className="section1-container-block-cards-card__num--span">+</span></p>
                            <p className="section1-container-block-cards-card__txt">Premium Users</p>
                        </div>
                        <div className="section1-container-block-cards-card">
                            <p className="section1-container-block-cards-card__num">2k<span className="section1-container-block-cards-card__num--span">+</span></p>
                            <p className="section1-container-block-cards-card__txt">Happy Customer</p>
                        </div>
                        <div className="section1-container-block-cards-card">
                            <p className="section1-container-block-cards-card__num">28<span className="section1-container-block-cards-card__num--span">+</span></p>
                            <p className="section1-container-block-cards-card__txt">Awards Winning</p>
                        </div>
                    </div>
                </div>
                <img src={Coffee}/>
            </div>
            <img src={Bottom} />
        </section>
    )
}

export default Section1
