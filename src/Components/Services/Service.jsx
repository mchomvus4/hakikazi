import React from 'react';
import './Service.css';
function Service() {
  return (
    <section id="services">
        <div className="container">
            <h1>Our Services</h1>
            <div className="row services">
                <div className="col-md-3 text-center">
                    <div className="icon">
                    <i className="fa fa-gavel"></i>
                    </div>
                    <h3>Corporate Law</h3>
                    <p>Corporate law is the body of law governing the rights, relations, 
                        and conduct of persons, companies, organizations and businesses. 
                        </p>
                </div>


                <div className="col-md-3 text-center">
                    <div className="icon">
                    <i className="fa fa-gavel"></i>
                    </div>
                    <h3>Criminal Law</h3>
                    <p>Criminal law is the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful,
                         or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self 
                        </p>
                </div>

                <div className="col-md-3 text-center">
                    <div className="icon">
                    <i className="fa fa-gavel"></i>
                    </div>
                    <h3>Labour Law</h3>
                    <p>Labour law mediates the relationship between workers, employing entities, trade unions and the government.
                        </p>
                </div>

                <div className="col-md-3 text-center">
                    <div className="icon">
                    <i className="fa fa-gavel"></i>
                    </div>
                    <h3>Administrative  Law</h3>
                    <p>Administrative law is the body of law that governs the activities of administrative agencies of government. 
                        Government agency action can include rule making, adjudication, or the enforcement of a specific regulatory agenda. 
                        Administrative law is considered a branch of public law. 
                        </p>
                </div>

            </div>
        </div>
    </section>
  );
}
export default  Service;