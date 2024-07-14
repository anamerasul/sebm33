import React, { useCallback, useState } from 'react';
import styles from './index.module.css'
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import AOS from 'aos';

const ParticlesBg = () => {
    const [splashStyles, setSplashStyles] = useState({ class: 'show', style: {} });
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        setTimeout(() => {
            setSplashStyles({ class: '', style: {} })
            setTimeout(() => {
                setSplashStyles({ class: 'show', style: { display: 'none' } })
                AOS.init();
            }, 200);
        }, 500);
    }, []);

    return (
        <>
            <div className={`${styles.loader} fade ${splashStyles.class}`} style={splashStyles.style}>
                <div className="spinner-border text-primary"></div>
            </div>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: "#262230",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f8526e",
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    );
}

export default ParticlesBg;
