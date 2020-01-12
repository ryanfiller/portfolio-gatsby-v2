import CMS from 'netlify-cms-app'

// collection field partials
import { blog } from './fields/blog'

// editor components
// import image from './editor/image'

// editor components
// CMS.registerEditorComponent(image);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      squash_merges: true,
      name: 'git-gateway',
      repo: 'ryanfiller/portfolio-gatsby-v2',
      branch: 'master',
    },
    // publish_mode: 'editorial_workflow',
    
    media_folder: 'static/images/uploads',
    public_folder: '/images/uploads',
    collections: [
      blog
    ]
  },
});