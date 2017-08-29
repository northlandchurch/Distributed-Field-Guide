# Distributed Church Field Guide

To get the field guide source code set up on your local machine, clone this repo and follow these steps:

## Bundler

[Bundler](https://bundler.io/) manages the dependencies of a Ruby project. You will need this gem installed on your machine before continuing with the next instructions.

## Middleman

[Middleman](https://middlemanapp.com/) is a static site builder that is built on top of Ruby.

Using `bundler`, we can install `middleman` and its dependencies by running the following command:

`bundle install --path vendor/bundle`

To get the middleman application running on your local, start the server with the following command:

`bundle exec middleman server`.

The local instance should then be available at `http://localhost:4567`, unless your settings are different.

If you encounter issues, verify that you are using the version of middleman installed within `./vendor/bundle`, not a version of `middleman` that you may have installed globally in a previous project.

### Source Code

The source code is available in the `source` folder. It is build with Haml (for HTML), Sass (for CSS), and vanilla javascript. Any changes you make here should be reflected while the server is running.

### Building

The source code is compiled into the `build` folder whenever you run `middleman build`. This single action creates the entire static website. More details for this specific project will be available soon.

### Deploying

Because this site is hosted with GitHub Pages, updating the production server is quite easy.

After you have made the appropriate changes, make sure you have properly built the static site by following the "building" directions above.

After you have built the static site, simply run `middleman deploy` to update the website. It might take a few minutes for the updates to show (also, make sure your cache isn't causing problems).
