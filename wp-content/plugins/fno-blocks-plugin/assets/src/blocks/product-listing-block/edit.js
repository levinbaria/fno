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
import { useBlockProps, InspectorControls,MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import apiFetch from '@wordpress/api-fetch';
import './editor.css';
import metadata from './block.json';

export default function Edit(props) {
    const { attributes, setAttributes } = props;

    const {
        headingStyles,
        categoryDesc,
        categoryDescColor,
        productCategories,
        categoryBannerImage
    } = attributes;

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(productCategories || []);

    const blockProps = useBlockProps({
        className: 'fno-product-listing'
    });

    const onSelectImage = (media) => {
        setAttributes({ categoryBannerImage: { url: media.url, id: media.id } });
    };

    const removeImage = () => {
        setAttributes({ categoryBannerImage: {} });
    };

    useEffect(() => {
        apiFetch({ path: 'wp/v2/fno_product_listing_category' })
            .then(categories => {
                setCategories(categories);
            });
    }, []);

    const toggleCategory = (categoryId) => {
        const updatedSelectedCategories = selectedCategories.includes(categoryId) ?
            selectedCategories.filter(id => id !== categoryId) :
            [...selectedCategories, categoryId];

        setSelectedCategories(updatedSelectedCategories);
        setAttributes({ productCategories: updatedSelectedCategories });
    }

    const headingStyle = {
        ...headingStyles
    };

    const descStyle = {
        color: categoryDescColor
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Product Categories', 'fno-product-listing')} initialOpen={true}>
                    {categories.length === 0 ? (
                        <Placeholder icon="admin-appearance" label={__('Loading Categories', 'fno-product-listing')}>
                            {__('Loading categories...', 'fno-product-listing')}
                        </Placeholder>
                    ) : (
                        categories.map((category) => (
                            <CheckboxControl
                                key={category.id}
                                label={category.name}
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => toggleCategory(category.id)}
                            />
                        ))
                    )}
                </PanelBody>
                <PanelBody title={__('Banner Image', 'fno-product-listing')} initialOpen={false}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={categoryBannerImage.id}
                            render={({ open }) => (
                                <>
                                    <Button onClick={open} variant='primary'>
                                        {categoryBannerImage.url ? __('Replace Image', 'fno-product-listing') : __('Upload Image', 'fno-product-listing')}
                                    </Button>
                                    {categoryBannerImage.url && (
                                        <Button onClick={removeImage} isDestructive>
                                            {__('Remove Image', 'fno-product-listing')}
                                        </Button>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={__('Heading Settings', 'fno-product-listing')} initialOpen={false}>
                    <ColorPalette
                        label={__('Heading Color', 'fno-product-listing')}
                        value={headingStyles.color}
                        onChange={(color) => setAttributes({ headingStyles: { ...headingStyles, color } })}
                    />
                    <ToggleControl
                        label={__('Resize Heading?', 'fno-product-listing')}
                        checked={headingStyles.isCustomSize}
                        onChange={(isCustomSize) => setAttributes({ headingStyles: { ...headingStyles, isCustomSize } })}
                    />
                    {headingStyles.isCustomSize && (
                        <TextControl
                            type="number"
                            label={__('Heading Font size', 'fno-product-listing')}
                            value={headingStyles.fontSize}
                            onChange={(fontSize) => setAttributes({ headingStyles: { ...headingStyles, fontSize: parseInt(fontSize) } })}
                        />
                    )}
                </PanelBody>
                <PanelBody title={__('Description Setting', 'fno-product-listing')} initialOpen={false}>
                    <TextareaControl
                        label={__('Description Text', 'fno-product-listing')}
                        help={__('Enter Category Description', 'fno-product-listing')}
                        value={categoryDesc}
                        onChange={(categoryDesc) => setAttributes({ categoryDesc })}
                    />
                    <ColorPalette
                        label={__('Description Color', 'fno-product-listing')}
                        value={categoryDescColor}
                        onChange={(categoryDescColor) => setAttributes({ categoryDescColor })}
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