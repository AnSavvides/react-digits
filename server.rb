require 'sinatra'
require 'multi_json'
require 'net/http'
require 'uri'

configure do
  set :port, 5000
end

get '/' do
  send_file 'index.html'
end

post '/user/verify' do
  data = MultiJson.load(request.body.read)

  url = URI.parse(data['apiUrl'])
  req = Net::HTTP::Get.new(url.path)
  req['Authorization'] = data['authHeader']

  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true if url.scheme == 'https'
  res  = http.request(req)

  halt res.code.to_i, 'Error! Request failed.' unless res.code == '200'

  MultiJson.dump(res.body)
end
