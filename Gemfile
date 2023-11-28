source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false
# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem 'importmap-rails'
gem 'jbuilder'
gem 'jsbundling-rails', '~> 1.2'
gem 'pg', '~> 1.1'
gem 'pry-rails', '~> 0.3.9'
gem 'puma', '~> 5.0'
gem 'rails', '~> 7.0.7', '>= 7.0.7.2'
gem 'redis', '~> 4.0'
# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'turbo-rails'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
end

group :development do
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

gem "rspec-rails", "~> 6.1"
