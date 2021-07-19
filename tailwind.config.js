/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}
