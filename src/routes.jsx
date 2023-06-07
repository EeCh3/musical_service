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
import { ProtectedRoute } from './components/protectedRoute/protectedRoute';

export function AppRoutes( {setUser, user} ) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/mytracks" element={<MyTracksPage />} />
        <Route path="/playlistoftheday" element={<PlaylistOfTheDayPage />} />
        <Route path="/dancinghits" element={<DancingHitsPage />} />
        <Route path="/indie" element={<IndiePage />} />
      </Route>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
