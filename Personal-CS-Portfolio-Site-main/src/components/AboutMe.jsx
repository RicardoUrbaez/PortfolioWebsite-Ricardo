import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { profile } from '../data/profile';
import ElectricBorderWrapper from './ui/ElectricBorderWrapper';

export const AboutMe = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);

    return <section id="about" className="relative w-full py-16 sm:py-20">
        <div data-aos = "fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <ElectricBorderWrapper radius={14} thickness={2} chaos={0.1} className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 inline-block">
                        About <span className="text-primary">Me</span>
                    </h2>
                </ElectricBorderWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-center">
                <ElectricBorderWrapper radius={18} thickness={2} chaos={0.12} className="rounded-lg card-hover w-full">
                <div className="space-y-4 bg-card rounded-lg p-5 md:p-6 shadow-xs">
                                        <h3 className="text-2xl font-semibold">{profile.aboutTitle}</h3>

                                        {profile.about.map((paragraph) => (
                                            <p key={paragraph} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                                                {paragraph}
                                            </p>
                                        ))}

                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <ElectricBorderWrapper radius={16} thickness={2} chaos={0.08} className="inline-block">
                        <a href="#contact" className="cosmic-button inline-block">
                            Get In Touch
                        </a>
                    </ElectricBorderWrapper>

                    <a href={profile.resumePath} download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>
                </ElectricBorderWrapper>

                <ElectricBorderWrapper radius={18} thickness={2} chaos={0.12} className="rounded-lg card-hover w-full">
                    <div className='bg-card rounded-lg overflow-hidden shadow-xs flex justify-center p-4 sm:p-6'>
                        <img className='w-full max-w-md h-auto object-cover rounded-lg' src="/Images/RicardoHeadShot.jpg" alt="Ricardo Urbaez headshot" />
                    </div>
                </ElectricBorderWrapper>
            </div>
        </div>
    </section>
}