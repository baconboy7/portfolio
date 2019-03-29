const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    postCss: [
        require('autoprefixer')({
            browsers: ['last 10 versions'],
            cascade: false,
        }),
    ],
});

mix.js('resources/js/app.js', 'public/js')
  .extract()
  .version()
  .sass('resources/sass/app.scss', 'public/css');
