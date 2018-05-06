import CMS from 'netlify-cms'
import OfertaPagePreview from './preview-templates/OfertaPagePreview'
import CMSBlogPostPreview from './preview-templates/CMSBlogPostPreview'
import OmniePagePreview from './preview-templates/OmniePagePreview'
import KontaktPagePreview from './preview-templates/KontaktPagePreview'
import ReferencjePagePreview from './preview-templates/ReferencjePagePreview'
import WspolpracaPagePreview from './preview-templates/WspolpracaPagePreview' 

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('oferta', OfertaPagePreview)
CMS.registerPreviewTemplate('blog', CMSBlogPostPreview)
CMS.registerPreviewTemplate('omnie', OmniePagePreview)
CMS.registerPreviewTemplate('kontakt', KontaktPagePreview)
CMS.registerPreviewTemplate('referencje', ReferencjePagePreview)
CMS.registerPreviewTemplate('wspolpraca', WspolpracaPagePreview)