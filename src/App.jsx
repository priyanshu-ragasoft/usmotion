import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import PagePlaceholder from "./pages/PagePlaceholder";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:videoId" element={<VideoDetail />} />
          <Route
            path="/categories"
            element={
              <PagePlaceholder
                eyebrow="BROWSE"
                title="Categories"
                description="Category browsing will be added in the portfolio phase."
              />
            }
          />
          <Route
            path="/services"
            element={
              <PagePlaceholder
                eyebrow="WHAT WE DO"
                title="Services"
                description="The services page will be built in the company pages phase."
              />
            }
          />
          <Route
            path="/industries"
            element={
              <PagePlaceholder
                eyebrow="WHO WE WORK WITH"
                title="Industries"
                description="The industries page will be built in the company pages phase."
              />
            }
          />
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
