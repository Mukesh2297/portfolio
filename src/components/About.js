import './About.css';
import myImg from "../assets/my-img-2.jpg";

const About = () => {
  return (
    <div className="about-container">
        <div className="card" >
            <div className="row">
                <div className="col-md-4">
                    <img src={myImg} className="img-fluid" alt="Display" />
                </div>
                <div className="col-md-8">
                    <div className="h-100 d-flex flex-column align-items-start justify-content-center">
                        <div>
                            <h1>Hello my name is <br /><b>Mukesh</b></h1>
                        </div>
                        <div>
                            <h3>Software Engineer - Chennai</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
