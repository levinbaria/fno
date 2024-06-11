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
        eventsBannerImage,
        // eventsCategories
    } = attributes;


    const blockProps = useBlockProps({
        className: 'fno-upcoming-events'
    });

    const onSelectImage = (media) => {
        setAttributes({ eventsBannerImage: { url: media.url, id: media.id } });
    };

    const removeImage = () => {
        setAttributes({ eventsBannerImage: {} });
    };


    const headingStyle = {
        ...headingStyles
    };

    const descStyle = {
        color: descriptionColor
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Events Banner Image', 'fno-upcoming-events')} initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={eventsBannerImage.id}
                            render={({ open }) => (
                                <>
                                    <Button onClick={open} variant='primary'>
                                        {eventsBannerImage.url ? __('Replace Image', 'fno-upcoming-events') : __('Upload Image', 'fno-upcoming-events')}
                                    </Button>
                                    {eventsBannerImage.url && (
                                        <Button onClick={removeImage} isDestructive>
                                            {__('Remove Image', 'fno-upcoming-events')}
                                        </Button>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={__('Heading Settings', 'fno-upcoming-events')} initialOpen={false}>
                    <ColorPalette
                        label={__('Heading Color', 'fno-upcoming-events')}
                        value={headingStyles.color}
                        onChange={(color) => setAttributes({ headingStyles: { ...headingStyles, color } })}
                    />
                    <ToggleControl
                        label={__('Resize Heading?', 'fno-upcoming-events')}
                        checked={headingStyles.isCustomSize}
                        onChange={(isCustomSize) => setAttributes({ headingStyles: { ...headingStyles, isCustomSize } })}
                    />
                    {headingStyles.isCustomSize && (
                        <TextControl
                            type="number"
                            label={__('Heading Font size', 'fno-upcoming-events')}
                            value={headingStyles.fontSize}
                            onChange={(fontSize) => setAttributes({ headingStyles: { ...headingStyles, fontSize: parseInt(fontSize) } })}
                        />
                    )}
                </PanelBody>
                <PanelBody title={__('Description Setting', 'fno-upcoming-events')} initialOpen={false}>
                    <TextareaControl
                        label={__('Description Text', 'fno-upcoming-events')}
                        help={__('Enter Description', 'fno-upcoming-events')}
                        value={description}
                        onChange={(description) => setAttributes({ description })}
                    />
                    <ColorPalette
                        label={__('Description Color', 'fno-upcoming-events')}
                        value={descriptionColor}
                        onChange={(descriptionColor) => setAttributes({ descriptionColor })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <ServerSideRender
                    block={metadata.name}
                    attributes={attributes}
                />
            </div>
        </Fragment>
    );
}