import { ArrowDown } from "lucide-react"
import { profile } from "../data/profile";
import KeanWhiteLogo from "../assets/KeanLogoWhite.webp";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";
import TextType from "./effects/TextType/TextType";


export const HeroSection = () => {
    return <section id="home" className="relative w-full min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6 sm:space-y-8">
            <div
              className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 border border-border/60 bg-background/80 backdrop-blur-md"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight break-words">
                  <TextType
                    as="span"
                    text={`Hi, I'm`}
                    typingSpeed={48}
                    initialDelay={200}
                    loop={false}
                    pauseDuration={999999}
                    deletingSpeed={0}
                    showCursor={false}
                  />
                  <TextType
                    as="span"
                    text={` Ricardo`}
                    typingSpeed={48}
                    initialDelay={560}
                    loop={false}
                    pauseDuration={999999}
                    deletingSpeed={0}
                    showCursor={false}
                    className="text-primary"
                  />
                  <TextType
                    as="span"
                    text={` Urbaez`}
                    typingSpeed={48}
                    initialDelay={980}
                    loop={false}
                    pauseDuration={999999}
                    deletingSpeed={0}
                    showCursor
                    cursorCharacter="_"
                    className="text-gradient ml-2"
                  />
                </h1>

                <TextType
                  as="p"
                  text={`Full Stack Web Developer | IT Desktop Support | Computer Science Tutor | AI Researcher | NexGen Cyber E-Board | Computer Science Student w/ minors in Mathematics & Cybersecurity`}
                  typingSpeed={20}
                  initialDelay={1500}
                  loop={false}
                  pauseDuration={999999}
                  deletingSpeed={0}
                  showCursor={false}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide text-center max-w-3xl mx-auto break-words"
                />

                <div className="mt-6 flex justify-center">
                  <img
                    src={KeanWhiteLogo}
                    alt="Kean University logo"
                    className="h-10 sm:h-12 md:h-14 w-auto opacity-90"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

              </div>
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center">
              <ElectricBorderWrapper radius={18} thickness={2} chaos={0.08} enabledOnHover={true} className="inline-block">
                <a
                  href="#projects"
                  className="inline-block rounded-full py-2 px-6 border border-border bg-card text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_10px_rgba(239,68,68,0.45)] hover:scale-105 active:scale-95"
                >
                  {profile.heroCta}
                </a>
              </ElectricBorderWrapper>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 inset-x-0 mx-auto w-fit flex flex-col items-center justify-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
}