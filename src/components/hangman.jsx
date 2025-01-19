export default function Hangman({wrongGuessCount}){

    const hangmanParts = [
        <div className="head" key="head" />,
        <div className="body" key="body" />,
        <div className="leftArm" key="leftArm" />,
        <div className="rightArm" key="rightArm" />,
        <div className="leftLeg" key="leftLeg" />,
        <div className="rightLeg" key="rightLeg" />,
    ]


    return(
        <div className="hangmanSection">
            <section className="hangmanStand">
                <div className="standTop" />
                <div className="stand" />
                <div className="standBase" />
            </section>
            <div className="standTip"></div>
            <section className="hangmanBody">
                {hangmanParts.slice(0, wrongGuessCount)}
            </section>
        </div>
    )
}