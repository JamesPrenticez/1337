import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Loading from "./components/common/Loading";
import { SettingsProvider } from "./providers/settingsProvider";
import { algorithmData } from "./constants/algorithmData";

const Home = lazy(async () => await import('./pages/Home'));
const Algorithms = lazy(async () => await import('./pages/Algorithms'));
const RoadMap = lazy(async () => await import('./pages/RoadMap'));
const Settings = lazy(async () => await import('./pages/Settings'));
const NotFound: React.FC = () => <h1>404 - Not Found</h1>;

const App = (): React.ReactElement => {
  return (
    <Suspense fallback={ <Loading fullScreen={true} />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="algorithms">
            <Route index={true} element={<Algorithms />} />
            {algorithmData.map((algorithm) => (
              <Route key={algorithm.id} path={algorithm.slug} element={algorithm.component()} />
            ))}
          </Route>
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/settings" element={
            <SettingsProvider>
              <Settings />
            </SettingsProvider>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
