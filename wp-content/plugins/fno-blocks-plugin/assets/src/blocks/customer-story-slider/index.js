/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';

import Edit from './edit';
import './style.css';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
});
