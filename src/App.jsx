import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import PagePlaceholder from "./pages/PagePlaceholder";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:videoId" element={<VideoDetail />} />
          {/* <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} /> */}
          <Route
            path="/about"
            element={
              <PagePlaceholder
                eyebrow="THE STUDIO"
                title="About"
                description="The about page will be built in the company pages phase."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PagePlaceholder
                eyebrow="START A PROJECT"
                title="Contact"
                description="The enquiry form will be built in the company pages phase."
                showProjectLink={false}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
