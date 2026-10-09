import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Team, Profile } from './pages/Team'
import Resources from './pages/Resources'
import Activity from './pages/Activity'
import { ComponentTree, Log, NotFound } from './pages/Documentation'
import './App.css'
export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="equipo" element={<Team />} /><Route path="equipo/:id" element={<Profile />} /><Route path="recursos" element={<Resources />} /><Route path="actividad" element={<Activity />} /><Route path="arbol" element={<ComponentTree />} /><Route path="bitacora" element={<Log />} /><Route path="*" element={<NotFound />} /></Route></Routes></BrowserRouter>
}
