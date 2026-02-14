import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1_SecretCode from "./pages/Page1_SecretCode";
import Page2_HeyMyLove from "./pages/Page2_HeyMyLove";
import Page3_BrightenDays from "./pages/Page3_BrightenDays";
import Page4_Confession from "./pages/Page4_Confession";
import Page5_Quiz from "./pages/Page5_Quiz";
import Page6_WrongAnswer from "./pages/Page6_WrongAnswer";
import Page7_Moments from "./pages/Page7_Moments";
import Page8_HeartPuzzle from "./pages/Page8_HeartPuzzle";
import Page9_AlwaysBe from "./pages/Page9_AlwaysBe";
import Page10_BeMyValentine from "./pages/Page10_BeMyValentine";
import Page11_YesCelebration from "./pages/Page11_YesCelebration";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1_SecretCode />} />
        <Route path="/hey-my-love" element={<Page2_HeyMyLove />} />
        <Route path="/brighten-days" element={<Page3_BrightenDays />} />
        <Route path="/confession" element={<Page4_Confession />} />
        <Route path="/quiz" element={<Page5_Quiz />} />
        <Route path="/wrong-answer" element={<Page6_WrongAnswer />} />
        <Route path="/moments" element={<Page7_Moments />} />
        <Route path="/heart-puzzle" element={<Page8_HeartPuzzle />} />
        <Route path="/always-be" element={<Page9_AlwaysBe />} />
        <Route path="/be-my-valentine" element={<Page10_BeMyValentine />} />
        <Route path="/yes-celebration" element={<Page11_YesCelebration />} />
      </Routes>
    </Router>
  );
};

export default App;
