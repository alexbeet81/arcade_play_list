# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


# require 'net/https'
# http = Net::HTTP.new('api.igdb.com/v4',443)
# http.use_ssl = true
# request = Net::HTTP::Post.new(URI('https://api.igdb.com/v4/external_games'), {'Client-ID' => 'kbfk11t8q6lb33clzkf074fflfrk2b', 'Authorization' => 'Bearer 0r29zp7b8uwswd6rjed08svor0h0jf'})
# request.body = 'fields category,checksum,countries,created_at,game,media,name,platform,uid,updated_at,url,year;'
# puts http.request(request).body
require 'json'
require 'open-uri'

## -- GIANT BOMB API --
## seach one game at a time
# url = 'https://www.giantbomb.com/api/game/3030-50/?api_key=af926dff67c16cd52bc4feffa6372f7b760ca93a&format=json&field_list=name,deck,image,images,image_tags,platforms,publishers,original_release_date,site_detail_url'
# game_serialized = URI.open(url).read
# game = JSON.parse(game_serialized)

# puts "Name: #{game['results']['name']}"
# puts "Short Description: #{game['results']['deck']}"
# puts "Image: #{game['results']['image']['icon_url']}"
# puts "Platforms: #{game['results']['platforms'][0]['name']}"
# puts "Publishers: #{game['results']['publishers'][0]['name']}"
# puts "Release date: #{game['results']['original_release_date']}"
# puts "Giant Bomb url: #{game['results']['site_detail_url']}"

# p game['results']['image']
# p game['results']['images']
# p game['results']['image_tags']

## search all games - limit 100
# url = 'https://www.giantbomb.com/api/games/?api_key=af926dff67c16cd52bc4feffa6372f7b760ca93a&format=json&field_list=name,guid'
# games_serialized = URI.open(url).read
# games = JSON.parse(games_serialized)

# games['results'].each do |game|
#   p game['name']
#   p game['guid']
# end

# count = 1

# 10.times do
#   url = "https://www.giantbomb.com/api/game/3030-#{count}/?api_key=af926dff67c16cd52bc4feffa6372f7b760ca93a&format=json&field_list=name,deck,image,platforms,publishers,original_release_date,site_detail_url"
#   game_serialized = URI.open(url).read
#   game = JSON.parse(game_serialized)

#   puts "Name: #{game['results']['name']}"
#   puts "Short Description: #{game['results']['deck']}"
#   puts "Image: #{game['results']['image']['icon_url']}"
#   puts "Platforms: #{game['results']['platforms'][0]['name']}"
#   puts "Publishers: #{game['results']['publishers'][0]['name']}"
#   puts "Release date: #{game['results']['original_release_date']}"
#   puts "Giant Bomb url: #{game['results']['site_detail_url']}"

#   count += 1
#   sleep(1)
# end
