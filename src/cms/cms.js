import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import LandingCreativePagePreview from './preview-templates/LandingCreativePagePreview'
import ContentPagePreview from './preview-templates/ContentPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('landing-creative', LandingCreativePagePreview)
CMS.registerPreviewTemplate('content-page', ContentPagePreview)