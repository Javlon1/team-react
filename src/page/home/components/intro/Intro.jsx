import "./scss__intro/Intro.scss"
import "./scss__intro/intro__responsive/Intro__media__phone.scss"
function Intro() {
    return (
        <section className="home" id="home">
            <div className="container">
                <h1 className="title">Find the best <samp className="tal">talent</samp></h1>
                <div className="text">
                    <h6 className="line"></h6>
                    <p className="discription">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>
        </section>
    );
  }
  
  export default Intro;
   