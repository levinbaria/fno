/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
  * React hook that is used to mark the components element.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/components/
  */
import { PanelBody, TextControl, Button, CheckboxControl, TextareaControl, Placeholder, ColorPalette, ToggleControl } from '@wordpress/components';

/**
 * React hook that is used to mark the element.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
*/
import React, { Fragment, useEffect, useState } from '@wordpress/element';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import apiFetch from '@wordpress/api-fetch';
import './editor.css';
import metadata from './block.json';


export default function Edit(props) {

	const { attributes, setAttributes } = props;

	const {
		headingStyles,
		description,
		descriptionColor,
	} = attributes;


	const blockProps = useBlockProps({
		className: 'fno-resource-center'
	});


	return (
		<Fragment>
			<InspectorControls>
			{/* Heading Settings */}
			<PanelBody title={__('Heading Settings', 'fno-resource-center')} initialOpen={true}>
					<ColorPalette
						label={__('Heading Color', 'fno-resource-center')}
						value={headingStyles.color}
						onChange={(color) => setAttributes({ headingStyles: { ...headingStyles, color } })}
					/>
					<ToggleControl
						label={__('Resize Heading?', 'fno-resource-center')}
						checked={headingStyles.isCustomSize}
						onChange={(isCustomSize) => setAttributes({ headingStyles: { ...headingStyles, isCustomSize } })}
					/>
					{headingStyles.isCustomSize && (
						<TextControl
							type="number"
							label={__('Heading Font size', 'fno-resource-center')}
							value={headingStyles.fontSize}
							onChange={(fontSize) => setAttributes({ headingStyles: { ...headingStyles, fontSize: parseInt(fontSize) } })}
						/>
					)}
				</PanelBody>
				{/* Description Settings */}
				<PanelBody title={__('Description Setting', 'fno-resource-center')} initialOpen={false}>
					<TextareaControl
						label={__('Description Text', 'fno-resource-center')}
						help={__('Enter Description', 'fno-resource-center')}
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<ColorPalette
						label={__('Description Color', 'fno-resource-center')}
						value={descriptionColor}
						onChange={(descriptionColor) => setAttributes({ descriptionColor })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{/* Server side render for the attributes */}
				<ServerSideRender
					block={metadata.name}
					attributes={attributes}
				/>
			</div>
		</Fragment>
	);
}