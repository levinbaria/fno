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
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save(props) {
	const { attributes } = props;

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
		imgOverlayOpacity
	} = attributes;

	// Object for the Styling.
	const contactHeadingStyle = {};
	(contactHeadingSize && isCustomHeadingSize) && (contactHeadingStyle.fontSize = contactHeadingSize + 'px');
	contactHeadingColor && (contactHeadingStyle.color = contactHeadingColor);

	const contactDescStyle = {};
	contactDescriptionColor && (contactDescStyle.color = contactDescriptionColor);

	const blockProps = useBlockProps.save({
		className: 'fno-contact-us-block',
	});

	return (
		<div {...blockProps}>
			{/* Section for theConatc Us Block */}
			<section className='fno-contact-us-block__main-container'>
				{/* Main Conatiner for the Contact Us */}
				<div className='fno-contact-us-block__contact-us-wrapper'>
					{/* Header container */}
					<div className='fno-contact-us-block__contact-us-header'>
						{contactHeading && (
							<RichText.Content
								tagName={contactHeadingTag}
								value={contactHeading}
								className='fno-contact-us-block__contact-us-heading'
								style={{ contactHeadingStyle }}
							/>
						)}
						{contactDescription && (
							<RichText.Content
								tagName='p'
								value={contactDescription}
								className='fno-contact-us-block__contact-us-description'
								style={contactDescStyle}
							/>
						)}
					</div>
					{contactImg.url ? (
						<div className='fno-contact-us-block__hero-contact-us-card-wrapper'>
							{/* Image Conatiner */}
							<div className='fno-contact-us-block__contact-us-hero-img'>
								{contactImg && (
									<img
										src={contactImg.url}
										alt='contact-us-img'
									/>
								)}
								{showImgOverlay && (
									<div
										className='fno-contact-us-block__contact-us-hero-img-overlay'
										style={{
											backgroundColor: imgOverlayColor,
											opacity: imgOverlayOpacity,
										}}
									/>
								)}
							</div>
							{/* Contact Us Form Container */}
							<div className='fno-contact-us-block__contact-us-form-wrapper'>
								<form id='fno-contact-us-block__contact-form'>
									<div className='fno-contact-us-block__form-contact-name'>
										<span>
											<input
												type='text'
												name='firstName'

												placeholder={__('First name', 'fno-contact-us-block')}
												className='fno-contact-us-block__contact-first-name'

											/>
											<label>
												{__('First Name', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
											</label>
										</span>
										<span>
											<input
												type='text'
												name='lastName'
												placeholder={__('Last name', 'fno-contact-us-block')}
												className='fno-contact-us-block__contact-first-name'
											/>
											<label>
												{__('Last Name', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
											</label>
										</span>
									</div>
									<div className='fno-contact-us-block__contact-email'>
										<input
											type='email'
											name='contactEmail'
											placeholder={__('Email Address', 'fno-contact-us-block')}

										/>
										<label>
											{__('Email Address', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
										</label>
									</div>
									<div className='fno-contact-us-block__form-contact-company-details'>
										<span>
											<input
												type='number'
												name='contactWorkPhone'
												placeholder={__('Work Phone', 'fno-contact-us-block')}
											/>
											<label>
												{__('Work Phone', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
											</label>
										</span>
										<span>
											<input
												type='text'
												name='contactCompany'
												placeholder={__('Company', 'fno-contact-us-block')}
											/>
											<label>
												{__('Company', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
											</label>
										</span>
									</div>
									<div className='fno-contact-us-block__form-contact-product-area'>
										<select
											name='productArea'
										>
											<option value='Austin'>{__('Austin', 'fno-contact-us-block')}</option>
											<option value='Texas'>{__('Texas', 'fno-contact-us-block')}</option>
											<option value='Bhavnagar'>{__('Bhavnagar', 'fno-contact-us-block')}</option>
											<option value='Manali'>{__('Manali', 'fno-contact-us-block')}</option>
											<option value='Valsad'>{__('Valsad', 'fno-contact-us-block')}</option>
											<option value='Ahmedabad'>{__('Ahmedabad', 'fno-contact-us-block')}</option>
										</select>
										<label>
											{__('Product Area', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
										</label>
									</div>
									<div className='fno-contact-us-block__form-contact-country'>
										<select
											name='country'
										>
											<option value='America'>{__('America', 'fno-contact-us-block')}</option>
											<option value='India'>{__('India', 'fno-contact-us-block')}</option>
											<option value='Japan'>{__('Japan', 'fno-contact-us-block')}</option>
											<option value='Germany'>{__('Germany', 'fno-contact-us-block')}</option>
											<option value='France'>{__('France', 'fno-contact-us-block')}</option>
										</select>
										<label>
											{__('Country', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
										</label>
									</div>
									<div className='fno-contact-us-block__form-contact-comment'>
										<input
											type='text'
											name='comment'
											placeholder={__('Comment', 'fno-contact-us-block')}
										/>
										<label>
											{__('Comment', 'fno-contact-us-block')}<span style={{ color: 'red', fontSize: '18px' }}>*</span>
										</label>
									</div>
									<button
										type='submit'
										className='fno-contact-us-block__form-contact-submit'
									>
										{__('Submit', 'fno-contact-us-block')}
									</button>
								</form>
							</div>
						</div>
					) : (
						<div className='fno-contact-us-block__image-required'>
							<p>{__('Image Required To show the form', 'fno-contact-us-block')}</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
