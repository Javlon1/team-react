import "./scss__team/Team.scss"
import "./scss__team/Team__media__phone/Team__madia__phone.scss"
import Olva from "../../../../img/team__Oval.png"
import Dina from "../../../../img/team__dina.png"
import Djon from "../../../../img/team_djon.png"

function Team() {
    return (
        <section className="team" id="team">
            <div className="container">
                <h1 className="title">Delivering real results for top companies. Some of our <samp className="spam">success stories.</samp> </h1>
                <div className="teams">
                    <div className="teams__info">
                        <p className="teams__info__discriptions"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h1 className="teams__info__name">Kady Baker</h1>
                        <p className="teams__info__position">Product Manager at Bookmark</p>
                        <img className="teams__info__img" src={Olva} alt="" />
                    </div>
                    <div className="teams__info">
                        <p className="teams__info__discriptions">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h1 className="teams__info__name">Aiysha Reese</h1>
                        <p className="teams__info__position">Founder of Manage</p>
                        <img className="teams__info__img" src={Dina} alt="" />
                    </div>
                    <div className="teams__info">
                        <p className="teams__info__discriptions">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h1 className="teams__info__name">Arthur Clarke</h1>
                        <p className="teams__info__position">Co-founder of MyPhysio</p>
                        <img className="teams__info__img" src={Djon} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
  } 
  
  export default Team;