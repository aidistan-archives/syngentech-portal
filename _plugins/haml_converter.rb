require 'haml'

module Jekyll
  class HamlConverter < Converter
    safe true

    def matches(ext)
      ext =~ /haml/i
    end

    def output_ext(_ext)
      '.html'
    end

    def convert(content)
      Haml::Engine.new(content).render
    end
  end
end
