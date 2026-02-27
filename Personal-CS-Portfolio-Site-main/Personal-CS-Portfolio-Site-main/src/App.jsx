import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { AIChatBot } from "./components/AIChatBot"
import ClickSpark from "./components/ClickSpark"
import { StarBackground } from "./components/StarBackground"

const HyperspeedBackground = lazy(() => import("./components/effects/Hyperspeed/HyperspeedBackground"))

function App() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <StarBackground />

      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/85">
        <Suspense fallback={null}>
          <HyperspeedBackground className="absolute inset-0 w-full h-full" />
        </Suspense>
      </div>

      <div className="relative z-10">
        <BrowserRouter>
          <ClickSpark
            sparkColor="#ffffff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={10}
            duration={420}
          >
            <AIChatBot />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/index.html" element={<Home/>}/>
              <Route path="*" element={<Home/>}/>
            </Routes>
          </ClickSpark>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App