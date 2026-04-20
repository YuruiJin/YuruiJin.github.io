# frozen_string_literal: true

module Jekyll
  class SocialLinksTag
    CUSTOM_SOCIAL_LOGO_BASE = '/assets/img/'.freeze

    # Patch jekyll-socials custom social rendering for local logo files.
    # The upstream gem treats `| relative_url` as a Ruby expression, which
    # raises at build time. Here we keep the original behavior for built-in
    # socials and only normalize local custom logo paths.
    def render(context)
      socials = context.registers[:site].data['socials'] || []
      socials.filter_map do |social|
        icon = SOCIAL_ICONS[social[0]]
        url_template = SOCIAL_URLS[social[0]]

        if icon && url_template
          if social[0] == 'academia_edu'
            url = url_template % [social[1]['organization'], social[1]['username']]
          elsif social[0] == 'cv_pdf'
            if social[1] =~ %r{://}
              url = social[1]
            elsif !context.registers[:site].respond_to?(:active_lang) || !context.registers[:site].active_lang || context.registers[:site].active_lang.empty?
              baseurl = context.registers[:site].baseurl.to_s.empty? ? '' : context.registers[:site].baseurl
              url = baseurl + social[1]
            else
              baseurl = context.registers[:site].baseurl.to_s.empty? ? '' : context.registers[:site].baseurl
              url = baseurl + social[1].gsub('[LANG]', context.registers[:site].active_lang)
            end
          elsif social[0] == 'rss_icon'
            baseurl = context.registers[:site].baseurl.to_s.empty? ? '' : context.registers[:site].baseurl
            url = url_template % (baseurl + '/feed.xml')
          else
            url = url_template % social[1]
          end
          "<a href='#{url}' title='#{social[0].gsub('_', ' ').capitalize}'>#{icon}</a>"
        elsif social[1].is_a?(Hash) && social[1]['logo'] && social[1]['url']
          baseurl = context.registers[:site].baseurl.to_s.empty? ? '' : context.registers[:site].baseurl
          logo_url = if social[1]['logo'].include?('://')
                       social[1]['logo']
                     elsif social[1]['logo'].start_with?('/')
                       baseurl + social[1]['logo']
                     else
                       baseurl + CUSTOM_SOCIAL_LOGO_BASE + social[1]['logo']
                     end
          "<a href='#{social[1]['url']}' title='#{social[1]['title']}'><img src='#{logo_url}' alt='#{social[1]['title']}'></a>"
        end
      end.join(" ")
    end
  end
end
