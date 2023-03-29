/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

"use strict";


var navBtn = document.querySelector(".header__nav-btn");
var headerNav = document.querySelector(".header__nav");
var headerLinks = document.querySelectorAll(".header__links li a");
var headerLinksA = document.querySelectorAll(".header__links li a.anchor");

//--- Nav btn

navBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  headerNav.classList.toggle("active");
});
if (!headerNav.classList.contains("active")) {
  headerLinks.forEach(function (i) {
    i.addEventListener("click", function () {
      navBtn.classList.remove("active");
      headerNav.classList.remove("active");
    });
  });
}

//--- End

//--- Anchors

headerLinksA.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = anchor.getAttribute("href");
    var targetFixed = target.replace("#", "");
    document.querySelector("[data-tab-target=".concat(targetFixed, "]")).click();
    document.querySelector(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//--- End

//--- Sticky nav on scroll & Up btn

var header = document.querySelector(".header");
window.onscroll = function () {
  var y = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
  var scrollUp = document.querySelector(".scroll-up");
  var footerTop = document.querySelector("footer").offsetTop;
  var wHeight = window.innerHeight;
  if (document.querySelector(".scroll-up")) {
    if (y >= 1 && y < footerTop - wHeight) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  }
  y > 0 ? header.classList.add("sticky") : header.classList.remove("sticky");
};

//--- End

/***/ }),

/***/ "./src/js/import/_accordion.js":
/*!*************************************!*\
  !*** ./src/js/import/_accordion.js ***!
  \*************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".accordion")) {
  var acTitles = document.querySelectorAll(".accordion__title");
  var acTitleFirst = document.querySelectorAll(".accordion .accordion__item:first-child");
  acTitles.forEach(function (i) {
    i.addEventListener("click", function () {
      var filteredItems = Array.prototype.filter.call(acTitles, function (item) {
        return item !== this;
      }, this);
      filteredItems.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.toggle("active");
    });
  });
  acTitleFirst.forEach(function (item) {
    item.querySelector(".accordion__title").classList.add("active");
  });
}

/***/ }),

/***/ "./src/js/import/_buttons.js":
/*!***********************************!*\
  !*** ./src/js/import/_buttons.js ***!
  \***********************************/
/***/ (function() {

"use strict";


//--- Form animation on btn click
if (document.querySelector(".inline-labels__trigger")) {
  var formBtnTrigger = document.querySelector(".inline-labels__trigger");
  formBtnTrigger.addEventListener("click", function () {
    this.parentElement.classList.add("active");
  });
}

//--- End

//--- Show more/less btn

if (document.querySelector(".btn-more-less")) {
  var btnMoreLess = document.querySelector(".btn-more-less");
  var cardsBlog = document.querySelector(".cards-blog");
  btnMoreLess.addEventListener("click", function () {
    cardsBlog.classList.toggle("active");
    if (this.textContent === "Show More") {
      this.textContent = "Show Less";
    } else {
      this.textContent = "Show More";
    }
  });
}

//--- End

/***/ }),

/***/ "./src/js/import/_card-cta.js":
/*!************************************!*\
  !*** ./src/js/import/_card-cta.js ***!
  \************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".card-cta")) {
  var cardCTA = document.querySelector(".card-cta");
  var cardCTAParent = cardCTA.parentElement;
  var cardCTAParentW = cardCTAParent.offsetWidth - 30;
  window.addEventListener("resize", function () {
    cardCTAParentW = cardCTAParent.offsetWidth - 30;
    cardCTA.style.width = cardCTAParentW + "px";
  });
  window.addEventListener("scroll", function () {
    var cardCTAParentY = cardCTAParent.offsetTop;
    var y = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    if (y >= cardCTAParentY - 95) {
      cardCTA.classList.add("sticky");
      cardCTA.style.width = cardCTAParentW + "px";
    } else {
      cardCTA.classList.remove("sticky");
    }
  });
}

/***/ }),

/***/ "./src/js/import/_categories.js":
/*!**************************************!*\
  !*** ./src/js/import/_categories.js ***!
  \**************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".categories")) {
  var catItem = document.querySelectorAll(".categories .item-img-v");
  catItem.forEach(function (i) {
    i.addEventListener("click", function () {
      var catItems = this.parentElement.parentElement;
      var thisTarget = i.getAttribute("data-tab-target");
      var catTabs = this.parentElement.parentElement.parentElement.querySelector(".tabs");
      var catTab = this.parentElement.parentElement.parentElement.querySelector(".list-tabs-boxed").querySelector("[data-tab-target=".concat(thisTarget, "]"));
      catTab.click();
      catTabs.classList.remove("hidden");
      catItems.classList.add("hidden");
    });
  });
}

/***/ }),

/***/ "./src/js/import/_components.js":
/*!**************************************!*\
  !*** ./src/js/import/_components.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codevadmin_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codevadmin/owl.carousel */ "./node_modules/@codevadmin/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var _codevadmin_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codevadmin_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var owlSetup1 = {
  margin: 10,
  loop: true,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false
};
var owlSetup2 = {
  smartSpeed: 500,
  autoplaySpeed: 500,
  autoplayTimeout: 1750,
  dots: false
};
if (document.querySelector(".owl-carousel")) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".owl-carousel1").owlCarousel({
    margin: 20,
    loop: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsive: {
      650: {
        stagePadding: 150
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".owl-carousel2").owlCarousel(_objectSpread(_objectSpread(_objectSpread({}, owlSetup1), owlSetup2), {}, {
    items: 3,
    responsive: {
      650: {
        items: 4
      }
    }
  }));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".owl-carousel3").owlCarousel(_objectSpread(_objectSpread(_objectSpread({}, owlSetup1), owlSetup2), {}, {
    responsive: {
      0: {
        items: 3
      },
      650: {
        items: 5
      },
      991: {
        items: 7
      }
    }
  }));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".owl-carousel4").owlCarousel(_objectSpread(_objectSpread({}, owlSetup1), {}, {
    dots: true,
    nav: true,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    autoplayTimeout: 2750,
    autoplayHoverPause: true,
    navText: ["<i class='icon-arrow-left'>", "<i class='icon-arrow-right'>"],
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 3
      }
    }
  }));
}

//--- Typed plugin, for hero section animation

if (document.querySelector("#text-animation")) {
  var textsAnimations = document.querySelectorAll("#text-animation b");
  var textsArray = [];
  textsAnimations.forEach(function (i, n) {
    textsArray.push(i.textContent);
    if (n !== 0) {
      i.style.display = "none";
    }
  });
  for (var i = 0; i < 3; i++) textsArray.push.apply(textsArray, textsArray);
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#text-animation b", {
    strings: textsArray,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 3000,
    loop: true,
    startDelay: 2000
  });
}

//--- End

//--- Fade in animation on page load

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("main").classList.remove("loading");
  }, 1000);
});

//--- End

/***/ }),

/***/ "./src/js/import/_dashboard.js":
/*!*************************************!*\
  !*** ./src/js/import/_dashboard.js ***!
  \*************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".dashboard")) {
  var menuLiFirst = document.querySelector(".menu__item li");
  var menuLi = document.querySelectorAll(".menu__list li");
  var dashCTA = document.querySelector(".dashboard__sidebar__cta");
  var dashSide = document.querySelector(".dashboard__sidebar");
  dashCTA.addEventListener("click", function () {
    this.classList.toggle("active");
    setTimeout(function () {
      document.querySelector("html").classList.add("non-scrollable");
    }, 500);
  });
  menuLiFirst.classList.add("active");
  document.addEventListener("mouseup", function (e) {
    if (!dashSide.contains(e.target)) {
      dashCTA.classList.remove("active");
    }
  });
  menuLi.forEach(function (item) {
    item.addEventListener("click", function () {
      dashCTA.classList.remove("active");
      var acTitleFirst = document.querySelectorAll(".accordion .accordion__item:first-child");
      var acTitle = document.querySelectorAll(".accordion .accordion__title");
      acTitle.forEach(function (item) {
        item.classList.remove("active");
      });

      /**
       * Automatic opening of the first element in the accordion
       */
      // acTitleFirst.forEach((item) => {
      //     item.querySelector(".accordion__title").classList.add("active");
      // });

      if (item.hasAttribute("data-tab-target")) {
        var tabTargetAttr = this.getAttribute("data-tab-target");
        var tabTarget = document.getElementById(tabTargetAttr);
        var parentOne = this.parentElement;
        var parentTwo = parentOne.parentElement;
        var parentThree = parentTwo.parentElement;
        var parentFour = parentThree.parentElement;
        var parentFive = parentFour.parentElement;
        var thisTabContent = parentFive.querySelector(".dashboard__body");
        parentThree.querySelector("li.active").classList.remove("active");
        this.classList.add("active");
        thisTabContent.querySelectorAll(".dashboard__tab").forEach(function (i) {
          i.style.display = "none";
        });
        tabTarget.style.display = "block";
      }
    });
  });
  var targets = document.querySelectorAll("[data-tab-target]");
  targets.forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#dashboard").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

/***/ }),

/***/ "./src/js/import/_picture-box.js":
/*!***************************************!*\
  !*** ./src/js/import/_picture-box.js ***!
  \***************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".picture-box")) {
  var pictureBox = document.querySelectorAll(".picture-box");
  pictureBox.forEach(function (i) {
    var siblings = i.querySelectorAll("picture");
    if (siblings.length === 2) {
      i.classList.add("picture-box--two");
    } else if (siblings.length === 3) {
      i.classList.add("picture-box--three");
    } else if (siblings.length === 4) {
      i.classList.add("picture-box--four");
    }
  });
}

/***/ }),

/***/ "./src/js/import/_popups.js":
/*!**********************************!*\
  !*** ./src/js/import/_popups.js ***!
  \**********************************/
/***/ (function() {

"use strict";


//--- Popups
var popup = document.querySelector(".popup");
var closePopup = document.querySelectorAll(".close-popup");
var html = document.querySelector("html");
var textActive = document.querySelector(".popup__text .active");
var popupClosed = function popupClosed() {
  popup.classList.remove("active");
  html.classList.remove("non-scrollable");
  textActive.classList.remove("active");
};
closePopup.forEach(function (i) {
  i.addEventListener("click", function () {
    popupClosed();
  });
});
document.addEventListener("mouseup", function (e) {
  var popupCard = document.querySelector(".popup__card");
  if (!popupCard.contains(e.target)) {
    popupClosed();
  }
});

//--- End

/***/ }),

/***/ "./src/js/import/_question-cta.js":
/*!****************************************!*\
  !*** ./src/js/import/_question-cta.js ***!
  \****************************************/
/***/ (function() {

"use strict";


if (document.querySelector(".question-cta")) {
  var qCTA = document.querySelector(".question-cta");
  window.addEventListener("scroll", function () {
    var y = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    var contactY = document.querySelector("#contact").offsetTop;
    var wHeight = window.innerHeight;
    y >= 1 && y <= contactY - wHeight ? qCTA.classList.add("active") : qCTA.classList.remove("active");
  });
}

/***/ }),

/***/ "./src/js/import/_subnav.js":
/*!**********************************!*\
  !*** ./src/js/import/_subnav.js ***!
  \**********************************/
/***/ (function() {

"use strict";


if (document.querySelector(".list-nav")) {
  var listNav = document.querySelector(".list-nav");
  var parent = listNav.parentElement;
  var listNavHeight = listNav.offsetHeight;
  parent.style.height = listNavHeight + "px";
  window.addEventListener("scroll", function () {
    var listNavParentY = parent.offsetTop;
    var headerHeight = document.querySelector("header").offsetHeight;
    var y = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    if (y >= listNavParentY - headerHeight) {
      listNav.classList.add("sticky");
      listNav.style.top = headerHeight - 1 + "px";
    } else {
      listNav.classList.remove("sticky");
    }
  });

  // (function() {
  //
  //     const section = document.querySelectorAll(".section");
  //     let sections = {};
  //     let i = 0;
  //
  //     Array.prototype.forEach.call(section, function(e) {
  //         sections[e.id] = e.offsetTop;
  //     });
  //
  //     window.onscroll = function() {
  //         const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  //
  //         for (i in sections) {
  //             if (sections[i] <= scrollPosition) {
  //                 document.querySelector(".list-nav .active").setAttribute("class", " ");
  //                 document.querySelector("a[href*=" + i + "]").setAttribute("class", "active");
  //             }
  //         }
  //     };
  // })();
}

/***/ }),

/***/ "./src/js/import/_tabs-article.js":
/*!****************************************!*\
  !*** ./src/js/import/_tabs-article.js ***!
  \****************************************/
/***/ (function() {

"use strict";


if (document.querySelectorAll(".article")) {
  var aTabsList = document.querySelectorAll(".article__tabs-list");
  var aTabsListItem = document.querySelectorAll(".article__tabs-list li");
  aTabsList.forEach(function (i) {
    var liFirst = i.getElementsByTagName("li")[0];
    liFirst.classList.add("active");
  });
  aTabsListItem.forEach(function (item) {
    item.addEventListener("click", function () {
      var tabTargetAttr = this.getAttribute("data-tab-target");
      var tabTarget = document.getElementById(tabTargetAttr);
      var parentOne = this.parentElement;
      var parentTwo = parentOne.parentElement;
      var parentThree = parentTwo.parentElement;
      var thisTabContent = parentThree.querySelector(".article__content");
      parentOne.querySelector(".active").classList.remove("active");
      this.classList.add("active");
      thisTabContent.querySelectorAll(".article__content__item").forEach(function (i) {
        i.style.display = "none";
      });
      tabTarget.style.display = "block";
    });
  });
}

/***/ }),

/***/ "./src/js/import/_tabs.js":
/*!********************************!*\
  !*** ./src/js/import/_tabs.js ***!
  \********************************/
/***/ (function() {

"use strict";


var tabsDropdown = document.querySelectorAll(".tabs__dropdown");
var tabsList = document.querySelectorAll(".tabs__list");
var tabsListItem = document.querySelectorAll(".tabs__list li");
tabsList.forEach(function (i) {
  var liFirst = i.getElementsByTagName("li")[0];
  liFirst.classList.add("active");
});
var tabsListItemActive = document.querySelectorAll(".tabs__list li.active");
tabsListItemActive.forEach(function (i) {
  var thisText = i.textContent;
  i.parentElement.parentElement.previousElementSibling.textContent = thisText;
});
tabsListItem.forEach(function (item) {
  item.addEventListener("click", function () {
    var tabTargetAttr = this.getAttribute("data-tab-target");
    var tabTarget = document.getElementById(tabTargetAttr);
    var thisText = this.textContent;
    var parentOne = this.parentElement;
    var parentTwo = parentOne.parentElement;
    var parentThree = parentTwo.parentElement;
    var thisDrop = parentThree.querySelector(".tabs__dropdown");
    var thisTabContent = parentThree.nextElementSibling;
    parentOne.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    if (window.getComputedStyle(thisDrop).display !== "none") {
      thisDrop.classList.remove("active");
    }
    thisDrop.textContent = thisText;
    thisTabContent.querySelectorAll(".tabs__content__item").forEach(function (i) {
      i.style.display = "none";
    });
    tabTarget.style.display = "block";
  });
});
tabsDropdown.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});
document.addEventListener("mouseup", function (e) {
  tabsList.forEach(function (list) {
    var thisPrev = list.previousElementSibling;
    if (window.getComputedStyle(thisPrev).display !== "none" && !list.parentElement.contains(e.target)) {
      thisPrev.classList.remove("active");
    }
  });
});

/***/ }),

/***/ "./src/js/import/contact.js":
/*!**********************************!*\
  !*** ./src/js/import/contact.js ***!
  \**********************************/
/***/ (function() {

var form = document.querySelectorAll(".form-cta");
var popup = document.querySelector(".popup");
var html = document.querySelector("html");
var questionFormText = document.getElementById("question-form-text");
var ctaFormText = document.getElementById("cta-form-text");
var returnBack = function returnBack(submitButton, originalButtonTitle) {
  setTimeout(function () {
    submitButton.textContent = originalButtonTitle;
    submitButton.disabled = false;
  }, 1000);
};
var showSuccess = function showSuccess(email, emailInput, submitButton, originalButtonTitle, text) {
  popup.classList.add("active");
  html.classList.add("non-scrollable");
  emailInput.value = "";
  returnBack(submitButton, originalButtonTitle);
  text.classList.add('active');
};
var showError = function showError(thisLabel, errorMessage, submitButton, originalButtonTitle) {
  thisLabel.classList.add("has-error");
  errorMessage.textContent = "Something went wrong, please try again later";
  returnBack(submitButton, originalButtonTitle);
};
form.forEach(function (i) {
  i.addEventListener("submit", function (e) {
    e.preventDefault();
    var pageUrl = window.location.href;
    var errorMessage = this.querySelector(".error-message");
    var emailInput = this.querySelector("input");
    var email = emailInput.value;
    var thisLabel = emailInput.parentElement;
    var submitButton = this.querySelector("button");
    var originalButtonTitle = submitButton.textContent;
    if (email !== undefined && email !== "") {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "../a1/contact.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // disable button while requesting
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
      xhr.onload = function () {
        if (xhr.status === 200) {
          // set success popup
          showSuccess(email, emailInput, submitButton, originalButtonTitle, questionFormText);
        } else {
          // set failure notice
          showError(thisLabel, errorMessage);
        }
      };
      xhr.onerror = function () {
        // set failure notice
        showError(thisLabel, errorMessage, submitButton, originalButtonTitle);
      };
      xhr.send("subscriber=".concat(email, "&page_url=").concat(pageUrl));
    }
  });
});
var formContact = document.querySelectorAll(".form-question");
formContact.forEach(function (itemForm) {
  itemForm.addEventListener("submit", function (elem) {
    elem.preventDefault();
    var pageUrl = window.location.href,
      errorMessage = this.querySelector(".text-md"),
      nameInput = this.querySelector("#name"),
      companyInput = this.querySelector("#company"),
      phoneInput = this.querySelector("#phone"),
      subjectInput = this.querySelector("#subject"),
      messageInput = this.querySelector("#message"),
      name = nameInput.value,
      company = companyInput.value,
      phone = phoneInput.value,
      subject = subjectInput.value,
      message = messageInput.value,
      submitButton = this.querySelector("button"),
      thisLabel = phoneInput.parentElement,
      originalButtonTitle = submitButton.textContent;
    if (name !== "" && phone !== "") {
      var xhr = new XMLHttpRequest();
      // specify file path
      xhr.open("POST", "../a1/mail.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // disable button while requesting
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
      xhr.onload = function () {
        if (xhr.status === 200) {
          // set success popup
          showSuccess(phone, phoneInput, submitButton, originalButtonTitle, ctaFormText);
        } else {
          // set failure notice
          showError(thisLabel, errorMessage);
        }
      };
      xhr.onerror = function () {
        // set failure notice
        showError(thisLabel, errorMessage, submitButton, originalButtonTitle);
      };
      xhr.send("name=".concat(name, "&page_url=").concat(pageUrl, "&company=").concat(company, "&phone=").concat(phone, "&subject=").concat(subject, "&message=").concat(message));
    }
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/_components */ "./src/js/import/_components.js");
/* harmony import */ var _import_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/_tabs */ "./src/js/import/_tabs.js");
/* harmony import */ var _import_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_tabs_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/_tabs-article */ "./src/js/import/_tabs-article.js");
/* harmony import */ var _import_tabs_article__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_tabs_article__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_picture_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/_picture-box */ "./src/js/import/_picture-box.js");
/* harmony import */ var _import_picture_box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_picture_box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/_popups */ "./src/js/import/_popups.js");
/* harmony import */ var _import_popups__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_popups__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _import_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/contact */ "./src/js/import/contact.js");
/* harmony import */ var _import_contact__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_import_contact__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _import_card_cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/_card-cta */ "./src/js/import/_card-cta.js");
/* harmony import */ var _import_card_cta__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_import_card_cta__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _import_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import/_buttons */ "./src/js/import/_buttons.js");
/* harmony import */ var _import_buttons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_import_buttons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _import_subnav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import/_subnav */ "./src/js/import/_subnav.js");
/* harmony import */ var _import_subnav__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_import_subnav__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _import_question_cta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import/_question-cta */ "./src/js/import/_question-cta.js");
/* harmony import */ var _import_question_cta__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_import_question_cta__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _import_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./import/_dashboard */ "./src/js/import/_dashboard.js");
/* harmony import */ var _import_dashboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_import_dashboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _import_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./import/_accordion */ "./src/js/import/_accordion.js");
/* harmony import */ var _import_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_import_accordion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _import_categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./import/_categories */ "./src/js/import/_categories.js");
/* harmony import */ var _import_categories__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_import_categories__WEBPACK_IMPORTED_MODULE_13__);















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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkSample_For_My_Projects"] = self["webpackChunkSample_For_My_Projects"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map