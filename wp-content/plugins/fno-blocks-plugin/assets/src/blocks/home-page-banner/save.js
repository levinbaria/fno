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
import { TextControl, Button } from '@wordpress/components';

export default function Save(props) {
    const { attributes, setAttributes } = props;

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

    const bannerStyle = {};
    bgImg.url && (bannerStyle.backgroundImage = 'url(' + bgImg.url + ')');

    const bannerHeadingStyle = {};
    (bannerHeadingSize && isCustomHeadingSize) && (bannerHeadingStyle.fontSize = bannerHeadingSize + 'px');
    headingColor && (bannerHeadingStyle.color = headingColor);

    const bannerDescStyle = {}
    descriptionColor && (bannerDescStyle.color = descriptionColor);

    const bannerOverlayStyle = {}
    bgOverlayColor && (bannerOverlayStyle.backgroundColor = bgOverlayColor);
    bgOverlayOpacity && (bannerOverlayStyle.opacity = bgOverlayOpacity);

    const blockProps = useBlockProps.save({
        className: 'fno-banner-block',
        style: bannerStyle
    });

    return (
        <div {...blockProps}>
            {showBgOverlay && (
                <div
                    style={bannerOverlayStyle}
                    className='fno-banner-block__overlay'
                >
                </div>
            )}
            <div className='fno-banner-block__wrapper'>
                {bannerHeading && (
                    <RichText.Content
                        tagName={headingTag}
                        value={bannerHeading}
                        className='fno-banner-block__banner-heading'
                        style={bannerHeadingStyle}
                    />
                )}
                {bannerDescription && (
                    <RichText.Content
                        tagName='p'
                        value={bannerDescription}
                        className='fno-banner-block__banner-description'
                        style={bannerDescStyle}
                    />
                )}
                <div className='fno-banner-block__btn-wrapper'>
                    <button
                        className='fno-banner-block__banner-btn'
                    >
                        {buttonText || __('Learn More', 'fno-banner')}
                    </button>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}