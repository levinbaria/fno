/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
  * React hook that is used to mark the components element.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/components/
  */
import { PanelBody, Button, TextControl, SelectControl, ColorPalette, ToggleControl, RangeControl } from '@wordpress/components';
/**
 * React hook that is used to mark the element.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
*/
import { Fragment } from '@wordpress/element';
import './editor.css';

export default function Edit(props) {
	const { attributes, setAttributes } = props

	const {
		bannerHeading,
		headingTag,
		headingColor,
		isCustomHeadingSize,
		bannerHeadingSize,
		bannerDescription,
		descriptionColor,
		buttonText,
		bgImg,
		showBgOverlay,
		bgOverlayColor,
		bgOverlayOpacity,
	} = attributes;
	// Object for the styling.
	const bannerStyle = {};
	bgImg.url && (bannerStyle.backgroundImage = 'url(' + bgImg.url + ')');

	const bannerHeadingStyle = {};
	(bannerHeadingSize && isCustomHeadingSize) && (bannerHeadingStyle.fontSize = bannerHeadingSize + 'px');
	headingColor && (bannerHeadingStyle.color = headingColor);

	const bannerDescStyle = {};
	descriptionColor && (bannerDescStyle.color = descriptionColor);

	const bannerOverlayStyle = {}
	bgOverlayColor && (bannerOverlayStyle.backgroundColor = bgOverlayColor);
	bgOverlayOpacity && (bannerOverlayStyle.opacity = bgOverlayOpacity);

	const blockProps = useBlockProps({
		className: 'fno-banner-block',
		style: bannerStyle
	});


	return (
		<Fragment>
			{/* SiderBar settings for the Banner Block */}
			<InspectorControls>
				{/* Banner Background Settings */}
				<PanelBody title={__('Banner Background Setting', 'fno-banner')} initialOpen={true}>
					<div className='fno-banner-block__background-setting'>
						<div className='fno-banner-block__background-image-preview'>
							<img
								src={bgImg.url}
								alt='banner-image'
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
					<div className='fno-banner-block__overlay-setting'>
						<ToggleControl
							label={__('Backgroung Overlay?', 'fno-banner')}
							checked={showBgOverlay}
							onChange={(showBgOverlay) => setAttributes({ showBgOverlay })}
						/>
						{showBgOverlay && (
							<div>
								<ColorPalette
									label={__('Background Overlay Color', 'gb-session')}
									value={bgOverlayColor}
									onChange={(bgOverlayColor) => setAttributes({ bgOverlayColor })}
									colors={[
										{ name: __('white', 'gb-session'), color: '#fff' },
										{ name: __('black', 'gb-session'), color: '#000' },
										{ name: __('red', 'gb-session'), color: '#f00' },
										{ name: __('green', 'gb-session'), color: '#0f0' },
										{ name: __('blue', 'gb-session'), color: '#00f' },
									]}
								/>
								<RangeControl
									label={__('Background Overlay Opacity', 'fno-banner')}
									value={bgOverlayOpacity}
									onChange={(bgOverlayOpacity) => setAttributes({ bgOverlayOpacity })}
									min={0}
									max={1}
									step={0.1}
								/>
							</div>
						)}
					</div>
				</PanelBody>
				{/* Banner Heading Settings */}
				<PanelBody title={__('Heading Settings', 'fno-banner')} initialOpen={false}>
					<SelectControl
						label={__('Heading Tag', 'fno-banner')}
						value={headingTag}
						options={[
							{ label: __('h1', 'fno-banner'), value: 'h1' },
							{ label: __('h2', 'fno-banner'), value: 'h2' },
							{ label: __('h3', 'fno-banner'), value: 'h3' },
							{ label: __('h4', 'fno-banner'), value: 'h4' },
							{ label: __('h5', 'fno-banner'), value: 'h5' },
							{ label: __('h6', 'fno-banner'), value: 'h6' },
						]}
						onChange={(headingTag) => setAttributes({ headingTag })}
					/>
					<ColorPalette
						label={__('Heading Color', 'fno-banner')}
						value={headingColor}
						onChange={(headingColor) => setAttributes({ headingColor })}
					/>
					<ToggleControl
						label={__('Resize Heading?', 'fno-banner')}
						checked={isCustomHeadingSize}
						onChange={(isCustomHeadingSize) => setAttributes({ isCustomHeadingSize })}
					/>
					{isCustomHeadingSize && (
						<TextControl
							type="number"
							label={__('Heading Font size', 'fno-banner')}
							value={parseInt(bannerHeadingSize)}
							onChange={(bannerHeadingSize) => setAttributes({ bannerHeadingSize: parseInt(bannerHeadingSize) })}
						/>
					)}
				</PanelBody>
				{/* Banner Description Settings */}
				<PanelBody title='Banner Description Settings' initialOpen={false}>
					<ColorPalette
						label={__('Description Color', 'fno-banner')}
						value={descriptionColor}
						onChange={(descriptionColor) => setAttributes({ descriptionColor })}
					/>
				</PanelBody>
				{/* Banner Button Settings */}
				<PanelBody title={__('Banner Button Settings', 'fno-banner')} initialOpen={false}>
					<TextControl
						label={__('Button Text', 'fno-banner')}
						value={buttonText}
						onChange={(buttonText) => setAttributes({ buttonText })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* Main Banner Blcok */}
			<div {...blockProps}>
				{showBgOverlay && (
					<div
						style={bannerOverlayStyle}
						className='fno-banner-block__overlay'
					>
					</div>
				)}
				{/* Block Wrapper */}
				<div className='fno-banner-block__wrapper'>
					<RichText
						tagName={headingTag}
						value={bannerHeading}
						placeholder={__('Enter Banner Heading', 'fno-banner')}
						className='fno-banner-block__banner-heading'
						style={bannerHeadingStyle}
						onChange={(bannerHeading) => setAttributes({ bannerHeading })}
					/>
					<RichText
						tagName='p'
						value={bannerDescription}
						placeholder={__('Enter Banner Description', 'fno-banner')}
						className='fno-banner-block__banner-description'
						style={bannerDescStyle}
						onChange={(bannerDescription) => setAttributes({ bannerDescription })}
					/>
					<div className='fno-banner-block__btn-wrapper'>
						<Button
							className='fno-banner-block__banner-btn'
						>
							{buttonText || __('Learn More', 'fno-banner')}
						</Button>
						<i className='dashicons dashicons-arrow-right-alt'></i>
					</div>
				</div>
			</div>
		</Fragment>
	);
}