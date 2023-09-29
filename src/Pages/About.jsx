import React from "react";
import aboutImg from "../Assets/images/about-img.jpg";
const About = () => {
    return (
        <div className="main_content about">
            <div className="container pt-4">
                <h3 className="text-uppercase mb-4">About</h3>
                <div className="row align-items-start m-auto">
                    <div className="col-lg-6 col-md-6 col-12 pe-0 pe-md-3 mb-4 mb-md-0">
                        <img src={aboutImg} alt="about" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12 ps-0 ps-md-5">
                        <h4 className="mb-4">About BookHub</h4>
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus dignissimos consequuntur vero
                            commodi provident maiores, iusto atque corrupti
                            voluptate vel sequi consectetur unde aliquam
                            corporis saepe animi non, tempora reiciendis
                            molestias sed laudantium dolores. Assumenda aperiam
                            fuga quo voluptate commodi ullam aliquam expedita
                            voluptas delectus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolor, dicta, possimus inventore eveniet atque
                            voluptatibus repellendus aspernatur illo aliquam
                            dignissimos illum. Commodi, porro omnis dolore amet
                            neque modi quas eum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
