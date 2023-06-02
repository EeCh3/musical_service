/* eslint-disable import/extensions */

/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/login/loginPage";
import { MainPage } from "./pages/main/mainPage";
import { RegisterPage } from "./pages/register/registerPage"
import { MyTracksPage } from "./pages/myTracks/myTracksPage";
import { PlaylistOfTheDayPage } from "./pages/playlistOfTheDay/playlistOfTheDayPage";
import { DancingHitsPage } from "./pages/dancingHits/dancingHitsPage";
import { IndiePage } from "./pages/indie/indiePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mytracks" element={<MyTracksPage />} />
      <Route path="/playlistoftheday" element={<PlaylistOfTheDayPage />} />
      <Route path="/dancinghits" element={<DancingHitsPage />} />
      <Route path="/indie" element={<IndiePage />} />
    </Routes>
  );
}
