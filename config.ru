require 'rubygems'
require 'middleman/rack'
require "better_errors"

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__
end

run Middleman.server
