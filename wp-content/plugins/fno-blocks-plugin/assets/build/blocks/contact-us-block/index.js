/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/blocks/contact-us-block/edit.js":
/*!****************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.css */ "./assets/src/blocks/contact-us-block/editor.css");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
  * React hook that is used to mark the components element.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/components/
  */

/**
 * React hook that is used to mark the element.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
*/


function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
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
  contactHeadingSize && isCustomHeadingSize && (contactHeadingStyle.fontSize = contactHeadingSize + 'px');
  contactHeadingColor && (contactHeadingStyle.color = contactHeadingColor);
  const contactDescStyle = {};
  contactDescriptionColor && (contactDescStyle.color = contactDescriptionColor);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'fno-contact-us-block'
  });
  const RequiredLabel = ({
    text
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, text, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contact Heading Settings', 'fno-contact-us-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Tag', 'fno-contact-us-block'),
    value: contactHeadingTag,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h1', 'fno-contact-us-block'),
      value: 'h1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h2', 'fno-contact-us-block'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h3', 'fno-contact-us-block'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h4', 'fno-contact-us-block'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h5', 'fno-contact-us-block'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h6', 'fno-contact-us-block'),
      value: 'h6'
    }],
    onChange: contactHeadingTag => setAttributes({
      contactHeadingTag
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Color', 'fno-contact-us-block'),
    value: contactHeadingColor,
    onChange: contactHeadingColor => setAttributes({
      contactHeadingColor
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resize Heading?', 'fno-contact-us-block'),
    checked: isCustomHeadingSize,
    onChange: isCustomHeadingSize => setAttributes({
      isCustomHeadingSize
    })
  }), isCustomHeadingSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Font size', 'fno-contact-us-block'),
    value: parseInt(contactHeadingSize),
    onChange: contactHeadingSize => setAttributes({
      contactHeadingSize: parseInt(contactHeadingSize)
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "contact Description Settings",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description Color', 'fno-contact-us-block'),
    value: contactDescriptionColor,
    onChange: contactDescriptionColor => setAttributes({
      contactDescriptionColor
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Overlay Settings', 'fno-contact-us-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Image Overlay', 'fno-contact-us-block'),
    checked: showImgOverlay,
    onChange: value => setAttributes({
      showImgOverlay: value
    })
  }), showImgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: imgOverlayColor,
    onChange: color => setAttributes({
      imgOverlayColor: color
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Opacity', 'fno-contact-us-block'),
    value: imgOverlayOpacity,
    onChange: value => setAttributes({
      imgOverlayOpacity: value
    }),
    min: 0,
    max: 1,
    step: 0.1
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "fno-contact-us-block__main-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: contactHeadingTag,
    value: contactHeading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Contact Us Heading', 'fno-contact-us-block'),
    className: "fno-contact-us-block__contact-us-heading",
    style: {
      contactHeadingStyle
    },
    onChange: contactHeading => setAttributes({
      contactHeading
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: contactDescription,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Contact Us Description', 'fno-contact-us-block'),
    className: "fno-contact-us-block__contact-us-description",
    style: contactDescStyle,
    onChange: contactDescription => setAttributes({
      contactDescription
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__hero-contact-us-card-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-hero-img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: contactImg.url,
    alt: "contact-us-image"
  }), showImgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-hero-img-overlay",
    style: {
      backgroundColor: imgOverlayColor,
      opacity: imgOverlayOpacity
    }
  }), contactImg.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      const newImage = {
        id: media.id,
        url: media.url,
        alt: media.alt
      };
      setAttributes({
        contactImg: newImage
      });
    },
    allowedTypes: ['image'],
    value: contactImg.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-edit"
    }))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "is-button is-destructive",
    onClick: () => setAttributes({
      contactImg: {}
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-no-alt"
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      const newImage = {
        id: media.id,
        url: media.url,
        alt: media.alt
      };
      setAttributes({
        contactImg: newImage
      });
    },
    allowedTypes: ['image'],
    value: contactImg.url,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: 'button button-large',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'fno-contact-us-block'))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-form-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-name"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First Name', 'fno-contact-us-block')
    }),
    value: firstName,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First name', 'fno-contact-us-block'),
    onChange: firstName => setAttributes({
      firstName
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your Name', 'fno-contact-us-block')
    }),
    value: lastName,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last name', 'fno-contact-us-block'),
    onChange: lastName => setAttributes({
      lastName
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    type: "email",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Address', 'fno-contact-us-block')
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Address', 'fno-contact-us-block'),
    value: contactEmail,
    onChange: contactEmail => setAttributes({
      contactEmail
    }),
    className: "fno-contact-us-block__contact-email"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-company-details"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Work Phone', 'fno-contact-us-block')
    }),
    value: contactWorkPhone,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Work Phone', 'fno-contact-us-block'),
    onChange: contactWorkPhone => setAttributes({
      contactWorkPhone
    }),
    type: "number",
    pattern: "[0-9]*"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Company', 'fno-contact-us-block')
    }),
    value: contactCompany,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Company', 'fno-contact-us-block'),
    onChange: contactCompany => setAttributes({
      contactCompany
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Area', 'fno-contact-us-block')
    }),
    value: productArea,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Austin', 'fno-contact-us-block'),
      value: 'Austin'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texas', 'fno-contact-us-block'),
      value: 'Texas'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bhavnagar', 'fno-contact-us-block'),
      value: 'Bhavnagar'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manali', 'fno-contact-us-block'),
      value: 'Manali'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Valsad', 'fno-contact-us-block'),
      value: 'Valsad'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ahmedabad', 'fno-contact-us-block'),
      value: 'Ahmedabad'
    }],
    onChange: productArea => setAttributes({
      productArea
    }),
    className: "fno-contact-us-block__form-contact-product-area"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Country', 'fno-contact-us-block')
    }),
    value: country,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('America', 'fno-contact-us-block'),
      value: 'America'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('India', 'fno-contact-us-block'),
      value: 'India'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Japan', 'fno-contact-us-block'),
      value: 'Bhavnagar'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Germany', 'fno-contact-us-block'),
      value: 'Germany'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('France', 'fno-contact-us-block'),
      value: 'France'
    }],
    onChange: country => setAttributes({
      country
    }),
    className: "fno-contact-us-block__form-contact-country"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RequiredLabel, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comment', 'fno-contact-us-block')
    }),
    value: comment,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comment', 'fno-contact-us-block'),
    onChange: comment => setAttributes({
      comment
    }),
    className: "fno-contact-us-block__form-contact-comment"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: ".fno-contact-us-block__form-contact-submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submit', "fno-contact-us-block")))))))));
}

/***/ }),

/***/ "./assets/src/blocks/contact-us-block/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./assets/src/blocks/contact-us-block/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./assets/src/blocks/contact-us-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./assets/src/blocks/contact-us-block/save.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/src/blocks/contact-us-block/style.css");
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./assets/src/blocks/contact-us-block/save.js":
/*!****************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/save.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


function Save(props) {
  const {
    attributes
  } = props;
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
  const contactHeadingStyle = {};
  contactHeadingSize && isCustomHeadingSize && (contactHeadingStyle.fontSize = contactHeadingSize + 'px');
  contactHeadingColor && (contactHeadingStyle.color = contactHeadingColor);
  const contactDescStyle = {};
  contactDescriptionColor && (contactDescStyle.color = contactDescriptionColor);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: 'fno-contact-us-block'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "fno-contact-us-block__main-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-header"
  }, contactHeading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: contactHeadingTag,
    value: contactHeading,
    className: "fno-contact-us-block__contact-us-heading",
    style: {
      contactHeadingStyle
    }
  }), contactDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: contactDescription,
    className: "fno-contact-us-block__contact-us-description",
    style: contactDescStyle
  })), contactImg.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__hero-contact-us-card-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-hero-img"
  }, contactImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: contactImg.url,
    alt: "contact-us-img"
  }), showImgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-hero-img-overlay",
    style: {
      backgroundColor: imgOverlayColor,
      opacity: imgOverlayOpacity
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-us-form-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    id: "fno-contact-us-block__contact-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-name"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "firstName",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First name', 'fno-contact-us-block'),
    className: "fno-contact-us-block__contact-first-name"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('First Name', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "lastName",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last name', 'fno-contact-us-block'),
    className: "fno-contact-us-block__contact-first-name"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last Name', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__contact-email"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "email",
    name: "contactEmail",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Address', 'fno-contact-us-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Address', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-company-details"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "contactWorkPhone",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Work Phone', 'fno-contact-us-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Work Phone', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "contactCompany",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Company', 'fno-contact-us-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Company', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-product-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "productArea"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Austin"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Austin', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Texas"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texas', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bhavnagar"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bhavnagar', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Manali"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manali', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Valsad"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Valsad', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ahmedabad"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ahmedabad', 'fno-contact-us-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Area', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-country"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "country"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "America"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('America', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "India"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('India', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Japan"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Japan', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Germany"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Germany', 'fno-contact-us-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "France"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('France', 'fno-contact-us-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Country', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__form-contact-comment"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "comment",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comment', 'fno-contact-us-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comment', 'fno-contact-us-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: 'red',
      fontSize: '18px'
    }
  }, "*"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "fno-contact-us-block__form-contact-submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submit', 'fno-contact-us-block'))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fno-contact-us-block__image-required"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Required To show the form', 'fno-contact-us-block'))))));
}

/***/ }),

/***/ "./assets/src/blocks/contact-us-block/editor.css":
/*!*******************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/editor.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/blocks/contact-us-block/style.css":
/*!******************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/style.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./assets/src/blocks/contact-us-block/block.json":
/*!*******************************************************!*\
  !*** ./assets/src/blocks/contact-us-block/block.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"gb-final-exercise/contact-us-block","version":"0.1.0","title":"FNO Contact Us Block","category":"fno-blocks-custom-category","icon":"phone","description":"Contact Us Block for the Home Page","keywords":["Contact Us","Homepage","Form"],"supports":{"html":false},"textdomain":"fno-block","attributes":{"contactHeading":{"type":"string","default":""},"contactHeadingTag":{"type":"string","default":"h1"},"contactHeadingColor":{"type":"string","default":"#000000"},"isCustomHeadingSize":{"type":"boolean","default":false},"contactHeadingSize":{"type":"number","default":30},"contactDescription":{"type":"string","default":""},"contactDescriptionColor":{"type":"string","default":"#000000"},"contactImg":{"type":"object","default":{}},"showImgOverlay":{"type":"boolean","default":false},"imgOverlayColor":{"type":"string","default":"#000000"},"imgOverlayOpacity":{"type":"number","default":0.8}},"editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/contact-us-block/index": 0,
/******/ 			"blocks/contact-us-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfno_blocks"] = globalThis["webpackChunkfno_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/contact-us-block/style-index"], () => (__webpack_require__("./assets/src/blocks/contact-us-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map