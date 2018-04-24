import CMS from 'netlify-cms'
import OfertaPagePreview from './preview-templates/OfertaPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import OmniePagePreview from './preview-templates/OmniePagePreview'
import KontaktPagePreview from './preview-templates/KontaktPagePreview'
import ReferencjePagePreview from './preview-templates/ReferencjePagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('oferta', OfertaPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('omnie', OmniePagePreview)
CMS.registerPreviewTemplate('kontakt', KontaktPagePreview)
CMS.registerPreviewTemplate('refrenecje', ReferencjePagePreview)