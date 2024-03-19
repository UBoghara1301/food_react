import React from "react";
import SideBar from "../inner_page/.side-bar";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>

            <div className="container1">
                <div className="inner-pages">
                    <div className="left">
                        <SideBar />
                    </div>
                    <div className="right">
                        <div className="about-main">
                            <div className="inner">
                                <div className="mini-nav">
                                    <p>About Us<span className="about"><Link to="/About">About Us</Link></span> <span className="home"><Link to="/">Home</Link> <i class="fa-solid fa-angles-right"></i></span> </p>
                                </div>
                                <div className="que">
                                    <p>The standard Lorem Ipsum passage</p>
                                </div>
                                <div className="ans">
                                    <p>An natum nulla eruditi mei, te qui idque adipisci, nonumy graeci has ad. Cu diam dolor noluisse nec. Nam ex dicta graeco, audire nominati persequeris eu eos. Pri nibh dolor soleat cu, sanctus inermis instructior eum ei. Scripta ceteros sit ex. Et eum alia laudem delectus. </p>
                                </div>
                                <div className="que">
                                    <p>Aliquam vulputate, neque consectetur gravida egestas</p>
                                </div>
                                <div className="ans">
                                    <p>Et quis dictas meliore nec, habeo lorem blandit et vis, alia veniam assueverit an duo. Facilis offendit eleifend id has. Deserunt expetenda est an, tacimates iudicabit sed eu. Cum eu periculis similique, ut meis expetenda quo. Eam ea omnis fierent disputando. </p>
                                </div>
                                <div className="que">
                                    <p>Suspendisse vel lorem massa. Morbi</p>
                                </div>
                                <div className="ans">
                                    <p>Eam eu illud menandri praesent, ei regione oporteat tractatos nam. Ad mea postea voluptua constituam, aeterno aperiri facilis et nec, utroque veritus no mea. Mel quando tantas accusamus et, quo quot augue senserit ex, possim efficiendi has no. Nam at bonorum prodesset, per ne primis platonem, mel in mundi salutatus constituto. Ei vis vidit oportere, no prima eripuit ius, vim at justo legendos.  </p>
                                </div>
                                <div className="que">
                                    <p>Vivamus ut diam ut risus sodales vestibulum eget varius dolor</p>
                                </div>
                                <div className="ans">
                                    <p>Has ut stet discere nonumes, te dicam nullam vim. Eam iriure tacimates persecuti ut. No labore reprimique consequuntur pri, iusto nihil ex usu. Ne illud definitionem pri, prima fuisset phaedrum sea cu. His ea partem tempor elaboraret, nam iudico atomorum accusamus ad, quo ut quidam aliquam voluptua. Cu cotidieque dissentiunt vix, at putent tamquam scribentur usu.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-left">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;