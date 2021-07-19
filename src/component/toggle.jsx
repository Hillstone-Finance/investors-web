/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import React from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { ThemeContext } from "./themeContext";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <button 
            className="transition duration-500 ease-in-out bg-gray-800 p-1 rounded-full text-gray-400"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {theme === "dark" ? (
            <div>
                <span className="sr-only">Light Mode</span>
                <SunIcon className="h-6 w-6" aria-hidden="true" />
            </div>
        ) : (
            <div>
                <span className="sr-only">Dark Mode</span>
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
            </div>
        )}
        </button>
    );
};

export default Toggle;