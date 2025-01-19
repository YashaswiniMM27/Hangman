export default function Hangman(){
    return(
        <div className="hangmanSection">
            <section className="hangmanStand">
                <div className="standTop" />
                <div className="stand" />
                <div className="standBase" />
            </section>
            <div className="standTip"></div>
            <section className="hangmanBody">
                <div className="head" />
                <div className="body" />
                <div className="leftArm" />
                <div className="rightArm" />
                <div className="leftLeg" />
                <div className="rightLeg" />
            </section>
        </div>
    )
}