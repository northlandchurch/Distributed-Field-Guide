# Distributed Church Field Guide

To get the field guide source code set up on your local machine, clone this repo and follow these steps:

## Middleman

[Middleman](http://middlemanapp.com/) is a static site builder that is built on top of Ruby.

To get the middleman application running on your local, first run `bundle install` and the begin the server with `middleman server`. The local instance should then be available at `http://localhost:4567`, unless your settings are different.

### Source Code

The source code is available in the `source` folder. It is build with Haml (for HTML), Sass (for CSS), and vanilla javascript. Any changes you make here should be reflected while the server is running.

### Building

The source code is compiled into the `build` folder whenever you run `middleman build`. This single action creates the entire static website. More details for this specific project will be available soon.

### Deploying

Because this site is hosted with GitHub Pages, updating the production server is quite easy.

After you have made the appropriate changes, make sure you have properly built the static site by following the "building" directions above.

After you have built the static site, simply run `middleman deploy` to update the website. It might take a few minutes for the updates to show (also, make sure your cache isn't causing problems).
