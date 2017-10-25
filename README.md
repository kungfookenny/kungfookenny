# KungFooKenny

KungFooKenny is theme for kungfookenny.com utilizing [ZURB Foundation](http://foundation.zurb.com).

## Quick start

1. Make sure [Node.js](http://nodejs.org) v4.x.x is installed on your machine.
2. Clone or download repo at https://github.com/kungfookenny/mighty-foundation
3. Open the repo or your project folder and run the following commands to install
  ```bash
    # Install devDependencies for global use (this only needs to be run once)
    sudo src/install/init-global

    # Install dependencies in project folder
    npm install --production

    # Symlink devDependencies
    src/install/link

    # Move dependencies and clean up node_modules folder to save space
    src/install/preen

  ```
4. To compile & minify CSS and Javascript assets use `gulp watch` or `gulp`

## Features

* Basic setup and SASS compiler
* Utilizes NPM, Gulp, SASS
* Includes Zurb Foundation, Font Awesome
* Save storage space by utilizing sym links to devDependencies