import CMS from 'netlify-cms-app'

// collection field partials
import { blog } from './fields/blog'

// editor components
// import image from './editor/image'
  
// CMS.registerMediaLibrary(cloudinary);

// editor components
// CMS.registerEditorComponent(image);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      squash_merges: true,
      name: 'github',
      repo: 'ryanfiller/portfolio-gatsby-v2',
      branch: 'master',
    },
    publish_mode: 'editorial_workflow',
    
    media_folder: 'src/images/uploads',
    public_folder: '/img',
    // media_library:{
    //   name: 'cloudinary',
    //   config: {
    //     cloud_name: 'lensrentals',
    //     api_key: '978623752449151'
    //   }
    // },
    collections: [
      blog
    ]
  },
});