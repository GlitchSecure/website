require 'fileutils'
require 'imgkit'

module Previews
  def self.process(site, payload)
    begin
      # On first run it's necessary to create the previews
      # directory in the generated site
      FileUtils.mkdir('./_opengraph')

    rescue
    end

    # Loop through all the previews
    site.collections['previews'].docs.each do |p|
      slug = p.data['slug']

      # If the image already exists skip,
      # in order to speed up generation
      # To regenerate the preview, delete the file
      if !File.exists?('./_opengraph/' + slug + '.png')

        # Read the generated html for the preview
        # And set imgkit up for generating a
        # 600x315 image at 75 quality
        kit = IMGKit.new(
          File.read('./_site/previews/' + slug + '/index.html'),
          quality: 75,
          width: 600,
          height: 315
        )

        # Attach the local stylesheet for wkhtmltoimage to pick up
        kit.stylesheets << './_site/assets/css/style.css'

        # Then save the image to the previews directory
        kit.to_file('./_opengraph/' + slug + '.png')

        # This step requires pngquant
        # It removes color depth from images and reduces their
        # size to about a third
        # And copy it to the generated site

      end
    end
  end
end

# Add a hook that's run after html is written
Jekyll::Hooks.register :site, :post_write do |site, payload|

  # Check if the site is being built or served locally
  if !site.config['serving']
    Previews.process(site, payload)
  end
end
