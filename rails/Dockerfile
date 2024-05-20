FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y vim

RUN mkdir /rails-next-article-app
WORKDIR /rails-next-article-app
COPY Gemfile /rails-next-article-app/Gemfile
COPY Gemfile.lock /rails-next-article-app/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler

RUN bundle install
COPY . /rails-next-article-app

COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

