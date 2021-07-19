/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import "./App.css"
import Header from './component/Header'
import Overlap from './component/Overlap'
import { ThemeProvider } from './component/themeContext'

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Overlap />
        <div className="absolute z-20 w-screen">
          <Header />
          <header className="pt-4">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
          </header>    
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </ThemeProvider>
    </div>
  )
}