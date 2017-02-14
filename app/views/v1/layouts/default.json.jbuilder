json.meta do
  json.responseTime "N/A"
  json.responseType @responseType if @responseType
  json.pagination @pagination if @pagination
end
json.data JSON.parse(yield)
