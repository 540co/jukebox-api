# Use the official Ruby 2.3.3 image
FROM ruby:2.3.3

# Run updates
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# Set up working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Set up gems
ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle install

# Add app code
ADD . /usr/src/app

CMD ["/usr/src/app/bin/docker/start"]
