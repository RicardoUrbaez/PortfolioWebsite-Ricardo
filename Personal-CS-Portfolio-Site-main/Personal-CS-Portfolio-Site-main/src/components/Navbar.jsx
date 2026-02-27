import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";
import TextType from "./effects/TextType/TextType";

const navItems = [
    {name: 'Home', url: '#home'},
    {name: 'About', url: '#about'},
    {name: 'Experience', url: '#experience'},
    {name: 'Resume', url: profile.resumePath, external: true},
    {name: 'Skills', url: '#skills'},
    {name: 'Projects', url: '#projects'},
    {name: 'Contact', url: '#contact'},
];

export const Navbar = () => {
    const[isScrolled,setIsScrolled] = useState(true);
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    }, [])
    

    return <nav className= {cn("sticky top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur shadow-xs" : "bg-transparent"
    )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            <a className="font-bold text-2xl md:text-3xl text-primary flex items-center shrink-0" href="#home">
                <span className="relative z-10">
                    <TextType
                        as="span"
                        text={`${profile.name.split(" ")[0]}'s`}
                        typingSpeed={48}
                        initialDelay={150}
                        loop={false}
                        pauseDuration={999999}
                        deletingSpeed={0}
                        showCursor={false}
                        className="text-glow text-foreground"
                    />
                    <TextType
                        as="span"
                        text={` Portfolio`}
                        typingSpeed={48}
                        initialDelay={520}
                        loop={false}
                        pauseDuration={999999}
                        deletingSpeed={0}
                        showCursor
                        cursorCharacter="_"
                    />
                </span>
            </a>

            {/* Desktop Nav */}
               <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, key) => (
                    <a href={item.url} key={key} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="text-foreground/80 hover:text-primary transition-colors duration-500">
                        <ElectricBorderWrapper radius={12} thickness={2} chaos={0.1} enabledOnHover={true} className="inline-block">
                            <span className="px-3 py-1 inline-block text-base lg:text-lg">
                                {item.name}
                            </span>
                        </ElectricBorderWrapper>
                    </a>
                ))}
               </div>


            {/* Mobile Nav */}

            <button onClick={()=> setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 text-foreground z-50 cursor-pointer"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={30}/> : <Menu size={30}/>}
            </button>

            
            <div className={cn("absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-40",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 text-lg">
                  {navItems.map((item, key) => (
                                        <a href={item.url} key={key} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="text-foreground/80 hover:text-primary transition-colors duration-500" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                        <ElectricBorderWrapper radius={12} thickness={2} chaos={0.1} enabledOnHover={true} className="inline-block">
                                                        <span className="px-4 py-2 inline-block">
                                {item.name}
                            </span>
                        </ElectricBorderWrapper>
                    </a>
                   ))}
               </div>
            </div>
        </div>
    </nav>
}