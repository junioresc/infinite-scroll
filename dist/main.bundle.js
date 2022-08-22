/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const imageContainer = document.getElementById('image-container');\nconst loader = document.getElementById('loader');\n\nlet ready = false;\nlet imagesLoaded = 0;\nlet totalImages = 0;\nlet photosArray = [];\n\n// Helper function to Set Attributes on Elements\n\nconst setAttributes = (element, attributes) => {\n    for (const key in attributes) {\n        element.setAttribute(key, attributes[key]);\n    }\n}\n\n// Unsplash API\nlet count = 5;\nconst apiKey = \"DiEFNXyjxiXSg1UHtTxOFRUCT3bSdwk6SyltlWb1r-A\";\nconst apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;\n\n// Check if all images were loaded\nconst imageLoaded = () => {\n    imagesLoaded++;\n    if (imagesLoaded === totalImages) {\n        ready = true;\n        loader.hidden = true;\n        count = 30;\n    }\n}\n\n// Create Elements for Links and Photos\nconst displayPhotos = () => {\n    imagesLoaded = 0;\n    totalImages = photosArray.length;\n    // Run function for each object in photosArray\n    photosArray.forEach((photo) => {\n        // Creating an anchor element to link ot Unsplash\n        const item = document.createElement('a');\n        setAttributes(item, {\n            href: photo.links.html,\n            target: '_blank',\n            rel: 'noopener noreferrer'\n        })\n        // Creating image tag for photo\n        const img = document.createElement('img');\n        setAttributes(img, {\n            src: photo.urls.regular,\n            alt: photo.alt_description,\n            title: photo.alt_description\n        })\n        // Event Listener to check when each photo is finished loading\n        img.addEventListener('load', imageLoaded);\n        // Putting image inside the link tag and then inserting it inside the image-container\n        item.appendChild(img);\n        imageContainer.appendChild(item);\n    });\n}\n\n// Get photos from Unsplash API\nconst getPhotos = async () => {\n    try {\n        const response = await fetch(apiUrl);\n        photosArray = await response.json();\n        displayPhotos();\n    } catch (error) {\n        console.log(error);\n    }\n};\n\n// Checking to see if scrolling near bottom of the page to load more photos\nwindow.addEventListener('scroll', () => {\n    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {\n        ready = false;\n        getPhotos();\n    }\n})\n\ngetPhotos();\n\n//# sourceURL=webpack://infinite-scroll/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;