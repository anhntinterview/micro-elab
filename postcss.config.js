// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'tailwindcss': {},
    'postcss-custom-properties': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
