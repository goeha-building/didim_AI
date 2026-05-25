import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import DashboardPage from '../pages/DashboardPage'
import PromptBuilderPage from '../pages/PromptBuilderPage'
import DictionaryPage from '../pages/DictionaryPage'
import SafetyPage from '../pages/SafetyPage'
import GuardianPage from '../pages/GuardianPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/prompt-builder',
        element: <PromptBuilderPage />,
      },
      {
        path: '/dictionary',
        element: <DictionaryPage />,
      },
      {
        path: '/safety',
        element: <SafetyPage />,
      },
      {
        path: '/guardian',
        element: <GuardianPage />,
      },
    ],
  },
])