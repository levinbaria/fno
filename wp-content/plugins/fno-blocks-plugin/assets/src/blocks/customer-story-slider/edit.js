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
import { PanelBody, SelectControl, RangeControl, CheckboxControl, Placeholder, Button, ToggleControl, ColorPalette } from '@wordpress/components';

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
		storyCategories,
		bgImg,
		autoplay,
		pauseOnHover,
		autoplaySpeed
	} = attributes;

	const [categories, setCategories] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState(storyCategories || []);

	const blockProps = useBlockProps({
		className: 'fno-customer-story',
	});

	useEffect(() => {
		apiFetch({ path: 'wp/v2/fno_customer_story_category' })
			.then(stories => {
				setCategories(stories);
			});
	}, []);

	const toggleStoryCategory = (categoryId) => {
		const updatedSelectedCategories = selectedCategories.includes(categoryId) ?
			selectedCategories.filter(id => id !== categoryId) :
			[...selectedCategories, categoryId];

		setSelectedCategories(updatedSelectedCategories);
		setAttributes({ storyCategories: updatedSelectedCategories });
	};


	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Story Cateory Select', 'fno-customer-story')} initialOpen={true}>
					<div className='fno-customer-story__category-select'>
						{categories.length === 0 ? (
							<Placeholder icon="admin-appearance" label={__('Loading Categories', 'dynamic-block-projects')}>
								{__('Loading categories...', 'fno-customer-story')}
							</Placeholder>
						) : (
							categories.map((category) => (
								<CheckboxControl
									key={category.id}
									label={category.name}
									checked={selectedCategories.includes(category.id)}
									onChange={() => toggleStoryCategory(category.id)}
								/>
							))
						)}
					</div>
				</PanelBody>
				<PanelBody title={__('Story Background Setting', 'fno-banner')} initialOpen={true}>
					<div className='fno-customer-story__background-setting'>
						<div className='fno-customer-story__background-image-preview'>
							<img
								src={bgImg.url}
								alt='story-image'
							/>
						</div>
						{bgImg.url ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										const newImage = {
											id: media.id,
											url: media.url,
											alt: media.alt,
										}
										setAttributes({ bgImg: newImage });
									}}
									allowedTypes={['image']}
									value={bgImg.id}
									render={({ open }) => (
										<Button
											variant='primary'
											onClick={open}
										>
											{__('Replace Image', 'fno-banner')}
										</Button>
									)}
								/>
								<Button
									className="is-button is-destructive"
									onClick={() => setAttributes({ bgImg: {} })}
								>
									{__('Remove Image', 'fno-banner')}
								</Button>
							</MediaUploadCheck>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										const newImage = {
											id: media.id,
											url: media.url,
											alt: media.alt,
										}
										setAttributes({ bgImg: newImage })
									}}
									allowedTypes={['image']}
									value={bgImg.url}
									render={({ open }) => (
										<Button
											className={'button button-large'}
											onClick={open}
										>
											{__('Upload Image', 'fno-banner')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
				</PanelBody>
				<PanelBody title={__('Slider Settings', 'fno-customer-story')} initialOpen={true}>
					<ToggleControl
						label={__('Autoplay', 'fno-customer-story')}
						checked={autoplay}
						onChange={(autoplay) => setAttributes({ autoplay })}
					/>
					<ToggleControl
						label={__('Pause on Hover', 'fno-customer-story')}
						checked={pauseOnHover}
						onChange={(pauseOnHover) => setAttributes({ pauseOnHover })}
					/>
					<RangeControl
						label={__('Autoplay Speed (ms)', 'fno-customer-story')}
						value={autoplaySpeed}
						onChange={(autoplaySpeed) => setAttributes({ autoplaySpeed})}
						min={1000}
						max={10000}
						step={500}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>

				{/* Server Side Render */}
				<ServerSideRender
					block={metadata.name}
					attributes={attributes}
				/>
			</div>
		</Fragment>
	);
}