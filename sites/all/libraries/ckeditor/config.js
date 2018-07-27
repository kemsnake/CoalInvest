/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
  var roxyFileman = '/sites/all/libraries/fileman/index.html';
  config.filebrowserBrowseUrl = roxyFileman;
  config.filebrowserImageBrowseUrl = roxyFileman+'?type=image';
  config.removeDialogTabs = 'link:upload;image:upload';
  console.log(config);
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
