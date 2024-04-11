const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
        colors: {
          'charcoal': '#2e3139',
          'gunmetal': '#22252d',
          'off-white': '#FDFDFD',
          'seasalt': '#FAF8F6',
          'isabelline': '#F0EDEA',
          'off-white-text': '#e8e8e8',
          'raisin-black': '#1b1e24'
        }
    },
  },
  plugins: [require('preline/plugin')],
};
