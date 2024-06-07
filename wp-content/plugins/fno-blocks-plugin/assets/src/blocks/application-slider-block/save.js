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
        applicationHeading,
        applicationHeadingTag,
        applicationHeadingColor,
        isCustomHeadingSize,
        applicationHeadingSize,
        applicationDescription,
        applicationDescriptionColor,
        sliderCards = [],
        autoPlay,
        pauseOnHover,
        autoplaySpeed,
        slideSpeed,
        showArrows,
        showDots
    } = attributes;

    const applicationHeadingStyle = {};
    (applicationHeadingSize && isCustomHeadingSize) && (applicationHeadingStyle.fontSize = applicationHeadingSize + 'px');
    applicationHeadingColor && (applicationHeadingStyle.color = applicationHeadingColor);

    const applicationDescStyle = {};
    applicationDescriptionColor && (applicationDescStyle.color = applicationDescriptionColor);

    const blockProps = useBlockProps.save({
        className: 'fno-application-slider',
        'data-auto-play': autoPlay,
        'data-pause-on-hover': pauseOnHover,
        'data-slide-speed': slideSpeed,
        'data-show-arrows': showArrows,
        'data-show-dots': showDots,
        'data-auto-play-speed': autoplaySpeed,
    });

    const validSliderCards = sliderCards.filter(
        ({ sliderCardImg, sliderCardTitle, sliderCardDescription }) =>
            sliderCardImg?.url && sliderCardTitle && sliderCardDescription
    );

    return (
        <div {...blockProps}>
            <section className='fno-application-slider__main-container'>
                <div className='fno-application-slider__application-wrapper'>
                    <div className='fno-application-slider__application-header'>
                        {applicationHeading && (
                            <RichText.Content
                                tagName={applicationHeadingTag}
                                value={applicationHeading}
                                className='fno-application-slider__application-heading'
                                style={applicationHeadingStyle}
                            />
                        )}
                        {applicationDescription && (
                            <RichText.Content
                                tagName='p'
                                value={applicationDescription}
                                className='fno-application-slider__application-description'
                                style={applicationDescStyle}
                            />
                        )}
                    </div>
                    <div className='fno-application-slider__cards-wrapper'>
                        {validSliderCards.map((sliderCard, index) => (
                            <div key={index} className='fno-application-slider__individual-card-wrapper'>
                                {sliderCard.sliderCardImg.url && (
                                    <div className='fno-application-slider__individual-card-image'>
                                        <img
                                            src={sliderCard.sliderCardImg.url}
                                            alt={sliderCard.sliderCardImg.alt} />
                                    </div>
                                )}
                                <div className='fno-application-slider__slider-meta-details'>
                                    {sliderCard.sliderCardTitle && (
                                        <RichText.Content
                                            tagName='h4'
                                            value={sliderCard.sliderCardTitle}
                                            className='fno-application-slider__individual-card-title'
                                        />
                                    )}
                                    <div class="fno-application-slider__slider-counting">
                                            <span class="current-slide">01</span>
                                            /
                                            <span class="total-slides">04</span>
                                    </div>

                                </div>
                                {sliderCard.sliderCardDescription && (
                                    <RichText.Content
                                        tagName='p'
                                        value={sliderCard.sliderCardDescription}
                                        className='fno-application-slider__individual-card-description'
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}