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
		contactHeading,
		contactHeadingTag,
		contactHeadingColor,
		isCustomHeadingSize,
		contactHeadingSize,
		contactDescription,
		contactDescriptionColor,
		contactImg,
		showImgOverlay,
		imgOverlayColor,
		imgOverlayOpacity,
		firstName,
		lastName,
		contactEmail,
		contactWorkPhone,
		contactCompany,
		productArea,
		country,
		comment
	} = attributes;

	const contactHeadingStyle = {};
	(contactHeadingSize && isCustomHeadingSize) && (contactHeadingStyle.fontSize = contactHeadingSize + 'px');
	contactHeadingColor && (contactHeadingStyle.color = contactHeadingColor);

	const contactDescStyle = {};
	contactDescriptionColor && (contactDescStyle.color = contactDescriptionColor);

	const blockProps = useBlockProps({
		className: 'fno-contact-us-block',
	});

	const RequiredLabel = ({ text }) => (
		<span>
		  {text} <span style={{ color: 'red', fontSize: '18px' }}>*</span>
		</span>
	  );

	return (
		<Fragment>
			{/* SiderBar settings for the Contact Us Block */}
			<InspectorControls>
				<PanelBody title={__('Contact Heading Settings', 'fno-contact-us-block')} initialOpen={false}>
					<SelectControl
						label={__('Heading Tag', 'fno-contact-us-block')}
						value={contactHeadingTag}
						options={[
							{ label: __('h1', 'fno-contact-us-block'), value: 'h1' },
							{ label: __('h2', 'fno-contact-us-block'), value: 'h2' },
							{ label: __('h3', 'fno-contact-us-block'), value: 'h3' },
							{ label: __('h4', 'fno-contact-us-block'), value: 'h4' },
							{ label: __('h5', 'fno-contact-us-block'), value: 'h5' },
							{ label: __('h6', 'fno-contact-us-block'), value: 'h6' },
						]}
						onChange={(contactHeadingTag) => setAttributes({ contactHeadingTag })}
					/>
					<ColorPalette
						label={__('Heading Color', 'fno-contact-us-block')}
						value={contactHeadingColor}
						onChange={(contactHeadingColor) => setAttributes({ contactHeadingColor })}
					/>
					<ToggleControl
						label={__('Resize Heading?', 'fno-contact-us-block')}
						checked={isCustomHeadingSize}
						onChange={(isCustomHeadingSize) => setAttributes({ isCustomHeadingSize })}
					/>
					{isCustomHeadingSize && (
						<TextControl
							type="number"
							label={__('Heading Font size', 'fno-contact-us-block')}
							value={parseInt(contactHeadingSize)}
							onChange={(contactHeadingSize) => setAttributes({ contactHeadingSize: parseInt(contactHeadingSize) })}
						/>
					)}
				</PanelBody>
				<PanelBody title='contact Description Settings' initialOpen={false}>
					<ColorPalette
						label={__('Description Color', 'fno-contact-us-block')}
						value={contactDescriptionColor}
						onChange={(contactDescriptionColor) => setAttributes({ contactDescriptionColor })}
					/>
				</PanelBody>
				<PanelBody title={__('Image Overlay Settings', 'fno-contact-us-block')}>
					<ToggleControl
						label={__('Show Image Overlay', 'fno-contact-us-block')}
						checked={showImgOverlay}
						onChange={(value) => setAttributes({ showImgOverlay: value })}
					/>
					{showImgOverlay && (
						<>
							<ColorPalette
								value={imgOverlayColor}
								onChange={(color) => setAttributes({ imgOverlayColor: color })}
							/>
							<RangeControl
								label={__('Overlay Opacity', 'fno-contact-us-block')}
								value={imgOverlayOpacity}
								onChange={(value) => setAttributes({ imgOverlayOpacity: value })}
								min={0}
								max={1}
								step={0.1}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<section className='fno-contact-us-block__main-container'>
					<div className='fno-contact-us-block__contact-us-wrapper'>
						<div className='fno-contact-us-block__contact-us-header'>
							<RichText
								tagName={contactHeadingTag}
								value={contactHeading}
								placeholder={__('Enter Contact Us Heading', 'fno-contact-us-block')}
								className='fno-contact-us-block__contact-us-heading'
								style={{ contactHeadingStyle }}
								onChange={(contactHeading) => setAttributes({ contactHeading })}
							/>
							<RichText
								tagName='p'
								value={contactDescription}
								placeholder={__('Enter Contact Us Description', 'fno-contact-us-block')}
								className='fno-contact-us-block__contact-us-description'
								style={contactDescStyle}
								onChange={(contactDescription) => setAttributes({ contactDescription })}
							/>
						</div>
						<div className='fno-contact-us-block__hero-contact-us-card-wrapper'>
							<div className='fno-contact-us-block__contact-us-hero-img'>
								<img
									src={contactImg.url}
									alt='contact-us-image'
								/>
								{showImgOverlay && (
									<div
										className='fno-contact-us-block__contact-us-hero-img-overlay'
										style={{
											backgroundColor: imgOverlayColor,
											opacity: imgOverlayOpacity,
										}}
									/>
								)}
								{contactImg.url ? (
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => {
												const newImage = {
													id: media.id,
													url: media.url,
													alt: media.alt,
												}
												setAttributes({ contactImg: newImage })
											}}
											allowedTypes={['image']}
											value={contactImg.id}
											render={({ open }) => (
												<Button
													onClick={open}
												>
													<i className='dashicons dashicons-edit'></i>
												</Button>
											)}
										/>
										<Button
											className="is-button is-destructive"
											onClick={() => setAttributes({ contactImg: {} })}
										>
											<i className='dashicons dashicons-no-alt'></i>
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
												setAttributes({ contactImg: newImage })
											}}
											allowedTypes={['image']}
											value={contactImg.url}
											render={({ open }) => (
												<Button
													className={'button button-large'}
													onClick={open}
												>
													{__('Upload Image', 'fno-contact-us-block')}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								)}
							</div>
							<div className='fno-contact-us-block__contact-us-form-wrapper'>
								<form action='#'>
									<div className='fno-contact-us-block__form-contact-name'>
										<TextControl
											label={<RequiredLabel text={__('First Name', 'fno-contact-us-block')} />}
											value={firstName}
											placeholder={__('First name', 'fno-contact-us-block')}
											onChange={(firstName) => setAttributes({ firstName })}
										/>
										<TextControl
											label={<RequiredLabel text={__('Your Name', 'fno-contact-us-block')} />}
											value={lastName}
											placeholder={__('Last name', 'fno-contact-us-block')}
											onChange={(lastName) => setAttributes({ lastName })}
										/>
									</div>
									<TextControl
										type="email"
										label={<RequiredLabel text={__('Email Address', 'fno-contact-us-block')} />}
										placeholder={__('Email Address', 'fno-contact-us-block')}
										value={contactEmail}
										onChange={(contactEmail) => setAttributes({ contactEmail })}
										className='fno-contact-us-block__contact-email'
									/>
									<div className='fno-contact-us-block__form-contact-company-details'>
										<TextControl
											label={<RequiredLabel text={__('Work Phone', 'fno-contact-us-block')} />}
											value={contactWorkPhone}
											placeholder={__('Work Phone', 'fno-contact-us-block')}
											onChange={(contactWorkPhone) => setAttributes({ contactWorkPhone })}
											type="number"
											pattern="[0-9]*"
										/>
										<TextControl
											label={<RequiredLabel text={__('Company', 'fno-contact-us-block')} />}
											value={contactCompany}
											placeholder={__('Company', 'fno-contact-us-block')}
											onChange={(contactCompany) => setAttributes({ contactCompany })}
										/>
									</div>
									<SelectControl
										label={<RequiredLabel text={__('Product Area', 'fno-contact-us-block')} />}
										value={productArea}
										options={[
											{ label: __('Austin', 'fno-contact-us-block'), value: 'Austin' },
											{ label: __('Texas', 'fno-contact-us-block'), value: 'Texas' },
											{ label: __('Bhavnagar', 'fno-contact-us-block'), value: 'Bhavnagar' },
											{ label: __('Manali', 'fno-contact-us-block'), value: 'Manali' },
											{ label: __('Valsad', 'fno-contact-us-block'), value: 'Valsad' },
											{ label: __('Ahmedabad', 'fno-contact-us-block'), value: 'Ahmedabad' },
										]}
										onChange={(productArea) => setAttributes({ productArea })}
										className='fno-contact-us-block__form-contact-product-area'
									/>
									<SelectControl
										label={<RequiredLabel text={__('Country', 'fno-contact-us-block')} />}
										value={country}
										options={[
											{ label: __('America', 'fno-contact-us-block'), value: 'America' },
											{ label: __('India', 'fno-contact-us-block'), value: 'India' },
											{ label: __('Japan', 'fno-contact-us-block'), value: 'Bhavnagar' },
											{ label: __('Germany', 'fno-contact-us-block'), value: 'Germany' },
											{ label: __('France', 'fno-contact-us-block'), value: 'France' },
										]}
										onChange={(country) => setAttributes({ country })}
										className='fno-contact-us-block__form-contact-country'
									/>
									<TextControl
										label={<RequiredLabel text={__('Comment', 'fno-contact-us-block')} />}
										value={comment}
										placeholder={__('Comment', 'fno-contact-us-block')}
										onChange={(comment) => setAttributes({ comment })}
										className='fno-contact-us-block__form-contact-comment'
									/>
									<Button className='.fno-contact-us-block__form-contact-submit'>
										{__('Submit', "fno-contact-us-block")}
									</Button>

								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
}