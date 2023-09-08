// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-custom-properties': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
