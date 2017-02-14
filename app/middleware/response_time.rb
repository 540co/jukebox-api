class ResponseTime
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, response = @app.call(env)
    request_time = headers['X-Runtime']

    if headers['Content-Type'] && headers['Content-Type'].include?('application/json')
      new_response = []
      response.each do |body|
        if body.is_a?(String)
          new_response << body.gsub(/\"responseTime\":\"N\/A\"/, "\"responseTime\":\"#{request_time}\"")
        else
          new_response << body
        end
      end
      response = new_response
    end

    [status, headers, response]
  end
end
