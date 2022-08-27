
/*************************** [bundle] ****************************/
// Original file:./src/dialogs/selectNum/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('33');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('34');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "callback", void 0);
  }

  _createClass(_class2, [{
    key: "init",
    value: function init(_init) {
      this.callback = _init.callback;
    }
  }, {
    key: "doBack",
    value: function doBack(event) {
      this.callback(+event.target.innerText);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/dialogs/selectNum/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\nbackground-color: rgb(255, 255, 255);\n\nborder: 1px solid rgb(115, 112, 112);\n\nwidth: 350px;\n\ntext-align: center;\n\ndisplay: block;\n\npadding: 10px 0;\n\nposition: fixed;\n\nleft: calc(50vw - 175px);\n\ntop: calc(50vh - 48px);\n\n}\n\n .view>h2{\n\nfont-size: 20px;\n\nline-height: 2em;\n\n}\n\n .view>ul>li{\n\ndisplay: inline-block;\n\nwidth: 30px;\n\nheight: 30px;\n\nline-height: 30px;\n\ntext-align: center;\n\nbackground-color: rgb(206, 202, 202);\n\nmargin: 2px;\n\ncursor: pointer;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/dialogs/selectNum/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2>选择数字</h2>\n    <ul>\n        <li ui-on:click=\"doBack\">0</li>\n        <li ui-on:click=\"doBack\">1</li>\n        <li ui-on:click=\"doBack\">2</li>\n        <li ui-on:click=\"doBack\">3</li>\n        <li ui-on:click=\"doBack\">4</li>\n        <li ui-on:click=\"doBack\">5</li>\n        <li ui-on:click=\"doBack\">6</li>\n        <li ui-on:click=\"doBack\">7</li>\n        <li ui-on:click=\"doBack\">8</li>\n        <li ui-on:click=\"doBack\">9</li>\n    </ul>\n</div>"
  
    return __etcpack__scope_bundle__;
}
