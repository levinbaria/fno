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
import { Fragment, useEffect, useState } from '@wordpress/element';
import './editor.css';


export default function Edit(props) {
	const { attributes, setAttributes } = props;


	const {
		applicationHeading,
		applicationHeadingTag,
		applicationHeadingColor,
		isCustomHeadingSize,
		applicationHeadingSize,
		applicationDescription,
		applicationDescriptionColor,
		sliderCards = [],
		sliderMode,
		autoPlay,
		pauseOnHover,
		autoplaySpeed,
		slideSpeed,
		showArrows,
		showDots
	} = attributes;

	const [editMode, setEditMode] = useState(sliderMode);

	// Styling Object for the Heading and Description.
	const applicationHeadingStyle = {};
	(applicationHeadingSize && isCustomHeadingSize) && (applicationHeadingStyle.fontSize = applicationHeadingSize + 'px');
	applicationHeadingColor && (applicationHeadingStyle.color = applicationHeadingColor);

	const applicationDescStyle = {};
	applicationDescriptionColor && (applicationDescStyle.color = applicationDescriptionColor);

	// Function to update a specific card's attributes
	const updateSliderCard = (index, newAttributes) => {
		const newSliderCards = [...sliderCards];
		newSliderCards[index] = { ...newSliderCards[index], ...newAttributes };
		setAttributes({ sliderCards: newSliderCards })
	}

	// Function To add a Slider Card.
	const addSliderCard = () => {
		const newSliderCards = [...sliderCards, { sliderCardImg: { url: '', alt: '' }, sliderCardTitle: '', sliderCardDescription: '' }];
		setAttributes({ sliderCards: newSliderCards });
	};

	// Function to Remove a Slider Card.
	const removeSliderCard = (index) => {
		const newSliderCards = [...sliderCards];
		newSliderCards.splice(index, 1);
		setAttributes({ sliderCards: newSliderCards })
	}

	// UseEffect to be render when the slider attributes changed evry time.
	useEffect(() => {
		if (!editMode) {
			const $ = jQuery;
			const $slider = $('.fno-application-slider__cards-wrapper');

			if ($slider.hasClass('slick-initialized')) {
				$slider.slick('unslick');
			}

			$slider.slick({
				infinite: true,
				speed: slideSpeed,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				autoplay: autoPlay,
				autoplaySpeed: autoplaySpeed,
				pauseOnHover: pauseOnHover,
				arrows: showArrows,
				dots: showDots,
				variableWidth: true,
			});

			return () => {
				if ($slider.hasClass('slick-initialized')) {
					$slider.slick('unslick');
				}
			};
		}
	}, [editMode, sliderCards, autoPlay, pauseOnHover, autoplaySpeed, slideSpeed, showArrows, showDots]);


	const blockProps = useBlockProps({
		className: 'fno-application-slider',
	});

	// Function to handle click event of the "Finish" button
	const handleFinish = () => {
		setEditMode(false); // Switch to finish mode
		setAttributes({ sliderMode: false });
	};

	// Function to handle click event of the "Edit" button
	const handleEdit = () => {
		setEditMode(true); // Switch to edit mode
		setAttributes({ sliderMode: true });
	};

	return (
		<Fragment>
			{/* SiderBar settings for the Banner Block */}
			<InspectorControls>
				{/* Heading Settings */}
				<PanelBody title={__('Application Heading Settings', 'fno-application-slider')} initialOpen={false}>
					<SelectControl
						label={__('Heading Tag', 'fno-application-slider')}
						value={applicationHeadingTag}
						options={[
							{ label: __('h1', 'fno-application-slider'), value: 'h1' },
							{ label: __('h2', 'fno-application-slider'), value: 'h2' },
							{ label: __('h3', 'fno-application-slider'), value: 'h3' },
							{ label: __('h4', 'fno-application-slider'), value: 'h4' },
							{ label: __('h5', 'fno-application-slider'), value: 'h5' },
							{ label: __('h6', 'fno-application-slider'), value: 'h6' },
						]}
						onChange={(applicationHeadingTag) => setAttributes({ applicationHeadingTag })}
					/>
					<ColorPalette
						label={__('Heading Color', 'fno-application-slider')}
						value={applicationHeadingColor}
						onChange={(applicationHeadingColor) => setAttributes({ applicationHeadingColor })}
					/>
					<ToggleControl
						label={__('Resize Heading?', 'fno-application-slider')}
						checked={isCustomHeadingSize}
						onChange={(isCustomHeadingSize) => setAttributes({ isCustomHeadingSize })}
					/>
					{isCustomHeadingSize && (
						<TextControl
							type="number"
							label={__('Heading Font size', 'fno-application-slider')}
							value={parseInt(applicationHeadingSize)}
							onChange={(applicationHeadingSize) => setAttributes({ applicationHeadingSize: parseInt(applicationHeadingSize) })}
						/>
					)}
				</PanelBody>
				{/* Description Settings */}
				<PanelBody title='Application Description Settings' initialOpen={false}>
					<ColorPalette
						label={__('Description Color', 'fno-application-slider')}
						value={applicationDescriptionColor}
						onChange={(applicationDescriptionColor) => setAttributes({ applicationDescriptionColor })}
					/>
				</PanelBody>
				{/* Slider Settings */}
				<PanelBody title={__('Slider Settings', 'fno-application-slider')} initialOpen={true}>
					<ToggleControl
						label={__('Auto Play', 'fno-application-slider')}
						checked={autoPlay}
						onChange={(value) => setAttributes({ autoPlay: value })}
					/>
					<RangeControl
						label={__('Autoplay Speed (ms)', 'fno-application-slider')}
						value={autoplaySpeed}
						onChange={(value) => setAttributes({ autoplaySpeed: value })}
						min={1000}
						max={10000}
					/>
					<RangeControl
						label={__('Slide Speed (ms)', 'fno-application-slider')}
						value={slideSpeed}
						onChange={(value) => setAttributes({ slideSpeed: value })}
						min={100}
						max={2000}
					/>
					<ToggleControl
						label={__('Pause On Hover', 'fno-application-slider')}
						checked={pauseOnHover}
						onChange={(value) => setAttributes({ pauseOnHover: value })}
					/>
					<ToggleControl
						label={__('Show Arrows', 'fno-application-slider')}
						checked={showArrows}
						onChange={(value) => setAttributes({ showArrows: value })}
					/>
					<ToggleControl
						label={__('Show Pagination Dots', 'fno-application-slider')}
						checked={showDots}
						onChange={(value) => setAttributes({ showDots: value })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* Main Block */}
			<div {...blockProps}>
				<section className='fno-application-slider__main-container'>
					<div className='fno-application-slider__application-wrapper'>
						<div className='fno-application-slider__application-header'>
							<RichText
								tagName={applicationHeadingTag}
								value={applicationHeading}
								placeholder={__('Enter Application Heading', 'fno-application-slider')}
								className='fno-application-slider__application-heading'
								style={applicationHeadingStyle}
								onChange={(applicationHeading) => setAttributes({ applicationHeading })}
							/>
							<RichText
								tagName='p'
								value={applicationDescription}
								placeholder={__('Enter Application Description', 'fno-application-slider')}
								className='fno-application-slider__application-description'
								style={applicationDescStyle}
								onChange={(applicationDescription) => setAttributes({ applicationDescription })}
							/>
						</div>
						<div className='fno-application-slider__cards-wrapper'>
							{/* Iterate over the number of the card of the card attribute */}
							{sliderCards.map((sliderCard, index) => (
								<div key={index} className='fno-application-slider__individual-card-wrapper'>
									{editMode && (
										<div className='fno-application-slider__card-modifications'>
											{/* Button to Remove Slider Card */}
											<Button className="is-button is-destructive" onClick={() => removeSliderCard(index)}>
												<i className='dashicons dashicons-no-alt'></i>
											</Button>
											{sliderCard.sliderCardImg.url && (
												<Button className="is-button is-destructive" onClick={() => updateSliderCard(index, { sliderCardImg: { url: '', alt: '' } })}>
													<i className='dashicons dashicons-edit'></i>
												</Button>
											)}
										</div>
									)}
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => updateSliderCard(index, { sliderCardImg: { id: media.id, url: media.url, alt: media.alt } })}
											allowedTypes={['image']}
											value={sliderCard.sliderCardImg}
											render={({ open }) => (
												<Fragment>
													{sliderCard.sliderCardImg.url ? (
														<div className='fno-application-slider__individual-card-image'>
															<img
																src={sliderCard.sliderCardImg.url}
																alt={sliderCard.sliderCardImg.alt} />
														</div>
													) : (
														<Button className={'button button-large fno-application-slider__upload-img'} onClick={open}>
															{__('Upload Image')}
														</Button>
													)}
												</Fragment>
											)}
										/>
									</MediaUploadCheck>
									<div className='fno-application-slider__slider-meta-details'>
										<RichText
											tagName='h4'
											value={sliderCard.sliderCardTitle}
											placeholder={__('Slider Card Title', 'fno-application-slider')}
											onChange={(value) => updateSliderCard(index, { sliderCardTitle: value })}
											className='fno-application-slider__individual-card-title'
										/>
									</div>
									<RichText
										tagName='p'
										value={sliderCard.sliderCardDescription}
										placeholder={__('Slider Card Description (max. 25 words)', 'fno-application-slider')}
										onChange={(value) => updateSliderCard(index, { sliderCardDescription: value })}
										className='fno-application-slider__individual-card-description'
									/>
								</div>
							))}
						</div>
						{editMode ? (
							<div className='fno-application-slider__edit-mode-on'>
								<Button onClick={handleFinish}>
									<i className='dashicons dashicons-saved'></i>
								</Button>
								{/* Button to Add Card */}
								<Button className='fno-application-slider__add-slider-btn' onClick={addSliderCard}>
									<i className='dashicons dashicons-plus-alt'></i>
								</Button>
							</div>

						) : (
							<Button onClick={handleEdit} className='fno-application-slider__slider-customizer'>
								<i className='dashicons dashicons-admin-customizer'></i>
							</Button>
						)}
					</div>
				</section>
			</div>
		</Fragment>
	);
}