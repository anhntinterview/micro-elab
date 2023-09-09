// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'postcss-custom-properties': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
