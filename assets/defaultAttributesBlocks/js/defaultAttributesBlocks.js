/**
 * https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src
 * https://jeffreycarandang.com/extending-gutenberg-core-blocks-with-custom-attributes-and-controls/
 */

// Modify settings for Core blocks
wp.hooks.addFilter( 'blocks.registerBlockType',
  'theme/change_default_settings', ( settings, name ) => {
  switch( name ) {
    case 'core/image':
        settings.attributes.align.default = 'wide'
        settings.attributes.linkDestination.default = 'media'
        return settings
    case 'core/gallery':
        settings.attributes.linkTo.default = 'file'
        return settings
    case 'core/list':
    case 'core/gallery':
    case 'core/code':
    case 'core/verse':
    case 'core/preformatted':
    case 'core/table':
    case 'core/pullquote':
    case 'core/heading':
    case 'core/group':
    case 'core/cover':
    case 'core/columns':
    case 'core/social-links':
    case 'core/buttons':
    case 'core/file':
    case 'core/audio':
  }

  return settings;
});