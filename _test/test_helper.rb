require 'minitest/autorun'
require 'nokogiri'
require 'open-uri'

# A crawler for portal
class Crawler
  attr_accessor :map, :root

  def initialize(
    map: {},
    root: 'http://localhost:4000'
  )
    @map = map
    @root = root

    crawl_to('/')
  end

  private

  def crawl_to(path)
    crawl_urls(path)
    @map.keys.each { |l| crawl_to(l) unless @map[l] }
  end

  def crawl_urls(path)
    doc = Nokogiri::HTML(open(@root + path)) # rubocop:disable Security/Open

    filter_urls(
      doc.css('a').map { |a| a['href'] },
      doc.css('img').map { |a| a['src'] },
      doc.css('*').map { |ele| bgimg_url(ele) }
    ).each { |l| @map[l] ||= false }

    @map[path] = :valid
  rescue OpenURI::HTTPError
    @map[path] = :invalid
  end

  def bgimg_url(ele)
    match = /background-image: ?url\((.*)\)/.match(ele['style'])
    match[1] if match
  end

  def filter_urls(*urls)
    urls.flatten.select { |l| l =~ %r{^/} }.map { |l| l.split('#').first }.uniq.compact
  end
end
