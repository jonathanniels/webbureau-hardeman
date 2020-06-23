import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import LandingCreativePagePreview from './preview-templates/LandingCreativePagePreview'
import ContentPagePreview from './preview-templates/ContentPagePreview'
import CallMeBackPagePreview from './preview-templates/CallMeBackPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('landing-creative', LandingCreativePagePreview)
CMS.registerPreviewTemplate('index', LandingCreativePagePreview) // Let's give this a try
CMS.registerPreviewTemplate('websites', ContentPagePreview)
CMS.registerPreviewTemplate('webshops', ContentPagePreview)
CMS.registerPreviewTemplate('internet-marketing', ContentPagePreview)
CMS.registerPreviewTemplate('callmeback', CallMeBackPagePreview)