import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router'

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}