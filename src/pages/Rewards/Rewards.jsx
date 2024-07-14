import React, { useEffect, useRef, useState } from "react";
import MagicScrollButton from "../../components/MagicScrollButton/MagicScrollButton";
import arrow from "../../assets/images/rewards/arrow.png";
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './index.module.css'

function Rewards() {
    const rewardSection = useRef(null)
    const rewardContainer = useRef(null)
    const [Width, setWidth] = useState(0);

    const { scrollYProgress } = useScroll({
        target: rewardSection
    })
    const scrollPosition = useTransform(scrollYProgress, [0, 1], ["0px", "-" + Width + "px"])


    useEffect(() => {
        const childs = rewardContainer.current.children
        const totalChilds = childs.length;
        const cardsTotalWidth = childs[0].clientWidth * (totalChilds / 2);
        const arrowsTotalWidth = childs[1].clientWidth * (totalChilds / 2);
        const padding = totalChilds * 24;
        setWidth(cardsTotalWidth + arrowsTotalWidth + padding - rewardContainer.current.clientWidth)

    }, []);
    return (
        <>
            <div className="inner-container">

                <section data-aos="fade-left" ref={rewardSection} className="position-relative" style={{ height: '1000vh' }}>
                    <div className={`overflow-hidden position-sticky ${styles.rewardsWrapper}`} >
                        <div className="container mt-5">
                            <h1 className={`${styles.title} text-center`}>
                                <span className="text-primary">Over $16,000 in</span> Level Up Rewards
                            </h1>
                        </div>
                        <p className="text-center mb-5">
                            if the deposit Bonuses / Leaderboard and Cashback of 500.casino
                            isn't enough for you, here are Level Rewards. <br /> If you signed
                            up under Code "SEBM" you will have access to these{" "}
                            <span className="text-primary text-center">
                                EXCLUSIVE Level Up Rewards
                            </span>
                        </p>
                        <motion.div ref={rewardContainer} style={{ translateX: scrollPosition }} className={`d-flex flex-nowrap ${styles.rewardsContainer}`}>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 300</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $25
                                        </div>
                                        <div className="text-shade text-center">$25</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 400</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 400</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $50
                                        </div>
                                        <div className="text-shade text-center">$50</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 500</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 500</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $200
                                        </div>
                                        <div className="text-shade text-center">$200</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 600</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 600</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $400
                                        </div>
                                        <div className="text-shade text-center">$400</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 700</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 700</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $1,000
                                        </div>
                                        <div className="text-shade text-center">$1,000</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 800</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 800</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $1,500
                                        </div>
                                        <div className="text-shade text-center">$1,500</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 900</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 900</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $3,000
                                        </div>
                                        <div className="text-shade text-center">$3,000</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 my-2 align-self-center">
                                <img className="img-fluid" src={arrow} alt="" />
                                <p className="text-center fs-2 fw-bold">Level 1000</p>
                            </div>
                            <div className={`my-2`}>
                                <div className={`card d-flex flex-column justify-content-between py-4 p-2 mx-2 ${styles.card}`}>
                                    <p className="text-center fs-2 fw-bold mt-3">Level 1000</p>
                                    <div className="">
                                        <div className="text-primary fw-bolder text-center text-over-shade">
                                            $10,000
                                        </div>
                                        <div className="text-shade text-center">$10,000</div>

                                    </div>
                                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                                        <a href="https://500.casino/r/SEBM" target="_blank" className="btn btn-primary w-100">
                                            Earn Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className={`d-flex justify-content-center align-items-center ${styles.scrollButton}`}>
                            <MagicScrollButton />
                        </div>
                        <p className="mt-5 text-center pt-5">
                            <span className="text-primary">Scroll down</span> to reveal Level Up Rewards with a total value of <span className="text-primary ">over $16000</span>
                        </p>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Rewards;