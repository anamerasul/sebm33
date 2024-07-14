import React from "react";
import gates from "../../assets/images/videos/gates.png";
import sugarrush from "../../assets/images/videos/sugarrush.png";
import muertos from "../../assets/images/videos/muertos.png";
import lebandit from "../../assets/images/videos/lebandit.png";
import maxbonus from "../../assets/images/videos/maxbonus.png";
import moneytrain from "../../assets/images/videos/moneytrain.png";
import "./videos.css";

function Videos() {
    return (
        <>
            <div className="inner-container">
                <div className="container my-2">
                    <h1 className="title text-center">
                        <span className="text-primary">Biggest </span>Wins
                    </h1>
                    <p className="text-center mb-5">
                        Checkout some of my biggest wins here!
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="youtube-tab" data-bs-toggle="tab" data-bs-target="#youtube" type="button" role="tab" aria-controls="youtube" aria-selected="false">Youtube</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="twitch-tab" data-bs-toggle="tab" data-bs-target="#twitch" type="button" role="tab" aria-controls="twitch" aria-selected="true">Twitch</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="youtube" role="tabpanel" aria-labelledby="youtube-tab">
                            <div className="row mt-4 mb-5">
                                {/* Manually add Youtube video boxes */}
                                <div className="col-md-6" data-aos="fade-right">
                                    <div className="vCard">
                                        <a target="_blank" href="https://www.youtube.com/watch?v=GybFwoJWzQA">
                                        <img className="img-fluid" src={muertos} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                        I gamble every MUERTOS MULTIPLIER bonus to 14 spins!
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 27.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: $2,500</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-left">
                                    <div className="vCard">
                                    <a target="_blank" href="https://www.youtube.com/watch?v=jBt9dQzWJZ4&t">
                                        <img className="img-fluid" src={lebandit} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                        I raised the bet for every bonus bait!
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 25.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: Unknown</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-left">
                                    <div className="vCard">
                                        <a target="_blank" href="https://www.youtube.com/watch?v=qEHkHvzjZWY">
                                        <img className="img-fluid" src={gates} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                        I got a MASSIVE MULTIPLIER on NEW Gates of Olympus 1000!
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 23.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: $2,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-left">
                                    <div className="vCard">
                                    <a target="_blank" href="https://www.youtube.com/watch?v=6QZwEZ2Aybk">
                                        <img className="img-fluid" src={sugarrush} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                        We RE-TRIGGERED Sugar Rush! "BONUS BUY SESSION"
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 19.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: Unknown</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more Youtube video boxes as needed */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="twitch" role="tabpanel" aria-labelledby="twitch-tab">
                            <div className="row mt-4 mb-5">
                                {/* Manually add Twitch video boxes */}
                                <div className="col-md-6" data-aos="fade-right">
                                    <div className="vCard">
                                        
                                   <a target="_blank" href="https://youtube.com/watch?v=rOElJjWslJ8">
                                        <img className="img-fluid" src={maxbonus} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                            I GOT 8 MAX GAMBLED BONUSES: Here is the OPENING!
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 17.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: $8,000+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-left">
                                    <div className="vCard">
                                    <a target="_blank" href="https://www.youtube.com/watch?v=ddVLNsyfewg">
                                        <img className="img-fluid" src={moneytrain} alt="" />
                                        </a>
                                        <p className="mt-1 fst-italic mb-0 ">
                                        I GOT MY RECORD WIN ON MONEY TRAIN 4 WITH PERSISTENT COLLECTOR-PAYER!!!
                                        </p>
                                        <div className="mb-2 d-flex">
                                            <p className="text-muted fw-bold">Date: 15.01.2024</p>
                                            <p className="text-muted fw-bold ms-4">Win: $19,000</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more Twitch video boxes as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Videos;
