import "./Card.css";

const Card = ({img}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="row">
          <div className="col-lg-5">
            <img src={img} className="img-fluid" alt="Display" />
          </div>
          <div className="col-lg-7">
            <div className="h-100 d-flex flex-column align-items-start justify-content-center">
              <div>
                <h1>
                  Hello my name is <br />
                  <b>Mukesh</b>
                </h1>
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

export default Card;
