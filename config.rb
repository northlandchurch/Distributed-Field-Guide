# --------------------------------------
#   Config
# --------------------------------------

# ----- Middleman ----- #

activate :livereload

# ----- Assets ----- #

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# ----- Images ----- #

activate :automatic_image_sizes

# --------------------------------------
#   Content
# --------------------------------------

# ----- Blog ----- #

activate :blog do |blog|
  blog.layout = "layout_article"
  blog.paginate = true
  blog.per_page = 7
  blog.permalink = "{section}/{title}"
  blog.sources = "articles/{section}/{title}.html"
end

# ----- Directories for assets (needs to be activated after blog) ----- #

activate :directory_indexes

# --------------------------------------
#   Production
# --------------------------------------

# ----- Prefixing ----- #

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.cascade = false
end

# ----- Build ----- #

ignore 'assets/fonts/*'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  set :relative_links, true
  activate :gzip
  activate :move
end

# Moves required Typography.com directory untouched

# class Move < Middleman::Extension
#   def after_build
#     FileUtils.cp_r('source/assets/fonts/', 'build/assets')
#   end
# end
#
# ::Middleman::Extensions.register(:move, Move)
