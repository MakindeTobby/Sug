import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VotingPage from './votingPage'
import VoterTable from './votersTable'
import LiveResult from './liveResult'



const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/vote-page", element: <VotingPage />, },
  { path: "/voter-table", element: <VoterTable />, },
  { path: "/live", element: <LiveResult />, },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
)
