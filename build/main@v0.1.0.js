/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/main.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var platform=__etcpack__scope_args__.platform;

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var normalize =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var style =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('5');
 // 引入主模块

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var appModule =__etcpack__scope_args__.default;
 // 先获取平台实例

platform({
  // 框架管理的区域
  el: document.getElementById('root'),
  // 全局样式
  styles: [normalize, style]
}) // 然后启动主模块
.bootstrap(appModule);
/**
 *
 *  “生于三界之外，不灭六道之中”这句话作用在病毒身上真的很有味道。
 *  与其说病毒是一种生命，然后试图在进化树上寻找它们的位置，
 *  倒不如说病毒是缠绕在进化树上的一株藤蔓。
 *
 *  什么是生命、生命存在的意义是什么？
 *
 *  有一种有别于传统观念的认知认为：生命的本质是遗传物质的复制！
 *
 *  这可以很好的解释生物演化的意义，只要遗传物质保留了下来，
 *  生物最终变成什么样子便不再那么重要，活着就好，
 *  而同时也理解了病毒存在的意义。
 *
 *  但这也同时意味着，数千年里人心中那股桀骜不驯，
 *  仿佛天生我才的妄大在此刻被打的一丁不剩，甚至都无处宣泄自己的愤怒。
 *  但当你试图接受这样的设定后，便有了一种更豁达的视野。
 *
 *  无论是宇宙或生命演化的漫长岁月里，还是这广袤无垠的天地，
 *  人的存在远比你想象的渺小的多，我们没有背负什么神圣的使命，
 *  也没有明确的目的，
 *  我们不过是亿年岁月中的一瞬，万丈平原中的一点。
 *
 *  再反观病毒，是不是觉得，倒有了几分纯粹，
 *  仿佛一个横跨数亿年的古老种族，依旧坚持着生命开始的模样。
 *
 *  2022年8月11日 于 南京
 */
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');
var Nefbl =__etcpack__scope_args__.default;
 // 装饰器

__etcpack__scope_bundle__.Module = Nefbl.Module;
__etcpack__scope_bundle__.Component = Nefbl.Component;
__etcpack__scope_bundle__.Directive = Nefbl.Directive; // 核心方法

__etcpack__scope_bundle__.platform = Nefbl.platform;
__etcpack__scope_bundle__.mountComponent = Nefbl.mountComponent;
__etcpack__scope_bundle__.evalExpress = Nefbl.evalExpress;
__etcpack__scope_bundle__.getValue = Nefbl.getValue;
__etcpack__scope_bundle__.setValue = Nefbl.setValue; // 暴露的一些有用的方法

__etcpack__scope_bundle__.ref = Nefbl.ref;
__etcpack__scope_bundle__.reactive = Nefbl.reactive;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/nefbl/dist/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.6
 *
 * Copyright (c) 2021-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Dec 02 2021 16:51:00 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 模块
   */

  function Module () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var component = {},
        directive = {};
    var bootstrapComponent = null;
    var exports = {
      component: {},
      directive: {}
    };

    if (isArray(config.declarations)) {
      // 分析出指令和组件
      var _iterator = _createForOfIteratorHelper(config.declarations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Item = _step.value;
          var needExports = false;

          if (isArray(config.exports)) {
            // 判断是否需要暴露

            /**
             * 为什么这里暴露出去的需要从declarations中取？
             * 因为考虑到后期改造的时候，可能新增一些需要在本模块实例化等，
             * 这样的好处是保罗出去的和内置使用的保持一致，不会乱。
             */
            var _iterator2 = _createForOfIteratorHelper(config.exports),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ExportItem = _step2.value;

                if (ExportItem === Item) {
                  needExports = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // 组件


          if (Item.prototype.__type__ == "Component") {
            component[Item.prototype.__selector__] = Item; // bootstrap用于标记启动组件

            if (config.bootstrap === Item) {
              bootstrapComponent = Item;
            }

            if (needExports) {
              exports.component[Item.prototype.__selector__] = Item;
            }
          } // 指令
          else if (Item.prototype.__type__ == "Directive") {
              directive[Item.prototype.__selector__] = Item;

              if (needExports) {
                exports.directive[Item.prototype.__selector__] = Item;
              }
            }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (isArray(config.imports)) {
      // 分析导入的模块
      var _iterator3 = _createForOfIteratorHelper(config.imports),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var module = _step3.value;

          // 组件
          for (var key in module.prototype.__exports__.component) {
            component[key] = module.prototype.__exports__.component[key];
          } // 指令


          for (var _key in module.prototype.__exports__.directive) {
            directive[_key] = module.prototype.__exports__.directive[_key];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Module'; // 登记所有的指令、组件（包括依赖的模块的）

      target.prototype.__component__ = component;
      target.prototype.__directive__ = directive; // 暴露出去的

      target.prototype.__exports__ = exports; // 可能还有启动组件

      target.prototype.__bootstrapComponent__ = bootstrapComponent;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  var toString$1 = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType$1 (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString$1.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType$1(value) === '[object String]';
  }

  var isString = _isString;
  var isArray$1 = function isArray(input) {
    return Array.isArray(input);
  };

  function analyseTag (attrString) {
    var attr = {},
        index = 0;
    attrString = attrString.trim();

    var getOneAttr = function getOneAttr() {
      // 属性名和属性值
      var attrName = "",
          attrValue = ""; // 先寻找属性名

      for (; index < attrString.length; index++) {
        // 寻找属性名的时候遇到空白或结尾的时候，肯定没有属性值
        if ($RegExp.blanksReg.test(attrString[index]) || index == attrString.length - 1) {
          attrName += attrString[index]; // 如果属性名是空白，就不需要记录了

          if (!$RegExp.blanksReg.test(attrName)) {
            attr[attrName.trim()] = "";
          }

          index += 1;
          break;
        } // 如果遇到等号，说明属性名寻找结束了
        else if (attrString[index] == '=') {
            // 接着寻找属性值
            index += 1; // 由于属性可能由引号包裹或直接暴露

            var preCode = null,
                preLeng = -1; // 如果是由'或者"包裹

            if (attrString.substr(index, 1) == '"' || attrString.substr(index, 1) == "'") {
              preCode = attrString.substr(index, 1);
              preLeng = 1;
              index += 1;
            } // 如果是由\'或\"包裹
            else if (attrString.substr(index, 2) == '\"' || attrString.substr(index, 2) == "\'") {
                preCode = attrString.substr(index, 2);
                preLeng = 2;
                index += 2;
              } // 开始正式寻找属性值
            // 如果没有包裹，是直接暴露在外面的
            // 我们寻找到空格或结尾即可


            if (preCode !== null) {
              for (; index < attrString.length; index++) {
                if (attrString.substr(index, preLeng) == preCode) {
                  attr[attrName.trim()] = attrValue.trim();
                  index += 2;
                  break;
                } else {
                  attrValue += attrString[index];
                }
              }
            } // 如果是包裹的
            // 我们确定寻找到对应的包裹闭合即可
            else {
                for (; index < attrString.length; index++) {
                  if ($RegExp.blanksReg.test(attrString[index])) {
                    attr[attrName.trim()] = attrValue.trim();
                    index += 1;
                    break;
                  } else {
                    attrValue += attrString[index];
                  }
                }
              }

            break;
          } else {
            attrName += attrString[index];
          }
      } // 如果还有字符串，继续解析


      if (index < attrString.length) {
        getOneAttr();
      }
    };

    getOneAttr();
    return attr;
  }

  function nextTagFun (template) {
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 如果前面是获取的js或css，还有pre等开始标签，比较特殊，直接寻址闭合的

    var preIsSpecial = false,
        specialCode = "";
    var specialTag = ['script', 'pre', 'style', 'code']; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < template.length - 1 ? template[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return template.substring(i, n + i > template.length ? template.length : n + i);
    };

    next(); // 剔除开头的空白

    while ($RegExp.blankReg.test(currentChar) && i < template.length - 1) {
      next();
    }
    /**
     * 一个Tag存在哪些类型？如下：
     * 1.<tag-name>       { tagName:'tag-name', type:'beginTag', attrs:{} }      开始标签
     * 2.</tag-name>      { tagName:'tag-name', type:'endTag'   }                结束标签
     * 3.<tag-name />     { tagName:'tag-name', type:'fullTag',  attrs:{} }      自闭合标签
     * 4.text             { tagName:'text',     type:'textcode' }                文本结点
     * 5.<!-- text -->    { tagName:'text',     type:'comment'  }                注释
     * 6.<!DOCTYPE text>  { tagName:'text',     type:'DOCTYPE'  }                声明
     *
     *
     */


    return function () {
      var tag = currentChar,
          tagObj = {};
      if (tag == null) return null;
      /**
       * 特殊标签内容获取
       * ========================================
       */
      // 如果是获取特殊标签里面的内容
      // 先不考虑里面包含'</XXX>'

      if (preIsSpecial) {
        tagObj.type = 'textcode';
        tagObj.tagName = tag;

        while (nextNValue(specialCode.length + 3) != '</' + specialCode + '>' && i < template.length) {
          tagObj.tagName += next();
        }

        tagObj.tagName = tagObj.tagName.replace(/<$/, '');
        preIsSpecial = false;
        return tagObj;
      }
      /**
       * 特殊标签获取
       * ========================================
       */
      // 针对特殊的comment


      if (nextNValue(4) == '<!--') {
        tagObj.type = 'comment';
        tagObj.tagName = tag;

        while (nextNValue(3) != '-->' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        next();
        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!--/, '').replace(/-$/, '');
        return tagObj;
      } // 针对特殊的doctype


      if (nextNValue(9) == '<!DOCTYPE') {
        tagObj.type = 'DOCTYPE';
        tagObj.tagName = tag;

        while (nextNValue(1) != '>' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!DOCTYPE/, '').replace(/>$/, '');
        return tagObj;
      }
      /**
       * 普通的
       * ========================================
       */
      // 如果是期望归结非文本结点
      else if (tag == '<') {
          // 标记是否处于属性值是字符串包裹中
          var isAttrString = false,
              attrLeftValue = null,
              attrLeftLen = null; // 如果在包裹中或者没有遇到‘>’说明没有结束

          while ((isAttrString || currentChar != '>') && i < template.length) {
            tag += next(); // 如果是包裹里面，试探是否即将遇到了结束

            if (isAttrString) {
              var next23Value = nextNValue(attrLeftLen + 1).substring(1);

              if (next23Value == attrLeftValue) {
                isAttrString = false;
              }
            } // 如果在包裹外面，试探是否即将进入包裹
            else {
                var next23Value = nextNValue(2);

                if (next23Value == '="' || next23Value == "='") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 1;
                  isAttrString = true;
                }

                next23Value = nextNValue(3);

                if (next23Value == '=\"' || next23Value == "=\'") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 2;
                  isAttrString = true;
                }
              }
          } // 针对特殊的结束标签


          if (/^<\//.test(tag)) {
            tagObj.tagName = tag.replace(/^<\//, '').replace(/>$/, '');
            tagObj.type = 'endTag';
          } else {
            if (/\/>$/.test(tag)) {
              tagObj.type = 'fullTag';
              tag = tag.replace(/\/>$/, '');
            } else {
              tagObj.type = 'beginTag';
              tag = tag.replace(/>$/, '');
            }

            tag = tag.replace(/^</, '');
            tagObj.tagName = "";
            var j = 0;

            for (; j < tag.length; j++) {
              if (tag[j] == ' ') break;
              tagObj.tagName += tag[j];
            }

            var attrString = tag.substring(j);

            if ($RegExp.blanksReg.test(attrString)) {
              tagObj.attrs = {};
            } else {
              tagObj.attrs = analyseTag(attrString);
            }
          }
        } // 如果是归结文本结点
        // 如果文本中包含<的先忽略考虑
        else {
            tagObj.type = 'textcode';
            tagObj.tagName = currentChar;

            while (nextNValue(1) != '<' && i < template.length) {
              tagObj.tagName += next();
            }

            tagObj.tagName = tagObj.tagName.replace(/<$/, '');
            i -= 1;
          } // 如果遇到开始script或者style、pre等特殊标签，标记开始获取特殊文本


      if (tagObj.type == 'beginTag') {
        if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
          preIsSpecial = true;
          specialCode = tagObj.tagName;
        }
      } // 如果遇到结束script或者style、pre等特殊标签，标记结束获取特殊文本
      else if (tagObj.type == 'endTag') {
          if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
            preIsSpecial = false;
          }
        }

      next();
      return tagObj;
    };
  }

  // 分析deep
  // 我们会在这里校对那些没有结束标签的开始标签
  // 这步结束以后，每个都是一个单独的标签
  // 也就是不用再区分开始或闭合了
  function analyseDeep (tagArray) {
    // 闭合标签
    tagArray = closeTag(tagArray);
    var deep = 0,
        tagDeepArray = [];
    tagArray.forEach(function (tag) {
      if (tag.type == 'beginTag') {
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: ++deep,
          __tagType__: "double"
        });
      } else if (tag.type == 'endTag') {
        deep -= 1;
      } else if (tag.type == 'textcode') {
        // 如果是文本
        tagDeepArray.push({
          type: "text",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else if (tag.type == 'comment') {
        // 如果是注释
        tagDeepArray.push({
          type: "comment",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else {
        // 如果是自闭合结点
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: deep + 1,
          __tagType__: "single"
        });
      }
    });
    return tagDeepArray;
  }

  var closeTag = function closeTag(tagArray) {
    var needClose = [];
    tagArray.forEach(function (tag, i) {
      if (tag.type == 'beginTag') {
        needClose.push([i, tag.tagName]);
      } else if (tag.type == 'endTag') {
        while (needClose.length > 0) {
          var needCloseTag = needClose.pop();

          if (needCloseTag[1] == tag.tagName) {
            break;
          } else {
            tagArray[needCloseTag[0]].type = 'fullTag';
          }
        }
      }
    });
    return tagArray;
  };

  /*!
   * 🔪 - 解析xhtml为json对象返回
   * https://github.com/hai2007/algorithm.js/blob/master/xhtmlToJson.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // noIgnore为true表示不忽略任何标签

  function xhtmlToJson (template, noIgnore) {
    if (!isString(template)) throw new Error("Template must be a String!"); // 获取读取下一个标签对象

    var nextTag = nextTagFun(template.trim());
    var tag = nextTag(),
        DomTree = [];

    while (tag != null) {
      if (tag.type == 'textcode' && $RegExp.blanksReg.test(tag.tagName)) ; else if (tag.type == 'DOCTYPE') ; else if (tag.type == 'comment') {
        // 注释目前也默认过滤掉，除非显示声明不忽略
        if (noIgnore) {
          DomTree.push(tag);
        }
      } else {
        tag.tagName = tag.tagName.trim();
        DomTree.push(tag);
      }

      tag = nextTag();
    } // 分析层次


    DomTree = analyseDeep(DomTree);
    /**
     * 模仿浏览器构建的一棵树,每个结点有如下属性：
     *
     * 1.parentNode index  父结点
     * 2.childNodes []     孩子结点
     * 3.preNode    index  前一个兄弟结点
     * 4.nextNode   index  后一个兄弟结点
     *
     * 5.attrs:{}          当前结点的属性
     * 6.name              节点名称
     * 7.type              节点类型（tag和text）
     * 8.content           文本结点内容
     *
     * 需要注意的是：如果一个文本结点内容只包含回车，tab，空格等空白字符，会直接被忽视
     */

    var presNode = [null],
        preDeep = 0;

    for (var i = 0; i < DomTree.length; i++) {
      // 当前结点
      var currentIndex = i,
          currentDeep = DomTree[i].__deep__;
      DomTree[i].childNodes = [];
      DomTree[i].preNode = null;
      DomTree[i].nextNode = null; // 前置三个结点

      var lastPre = presNode[presNode.length - 1];
      var last2Pre = presNode.length > 1 ? presNode[presNode.length - 2] : null; // 如果遇到的是兄弟结点

      if (currentDeep == preDeep) {
        // 修改兄弟关系
        DomTree[currentIndex].preNode = lastPre;
        DomTree[lastPre].nextNode = currentIndex; // 修改父子关系

        DomTree[currentIndex].parentNode = last2Pre;
        DomTree[last2Pre].childNodes.push(currentIndex); // 校对presNode

        presNode[presNode.length - 1] = currentIndex;
      } // 如果是遇到了孩子
      else if (currentDeep > preDeep) {
          // 修改兄弟关系
          // todo
          // 修改父子关系
          DomTree[currentIndex].parentNode = lastPre;
          if (lastPre != null) DomTree[lastPre].childNodes.push(currentIndex); // 校对presNode

          presNode.push(currentIndex);
        } // 如果是遇到了祖先
        else {
            var preTempIndex = presNode[presNode.length - 1 - (preDeep - currentDeep)];
            var preTemp2Index = presNode[presNode.length - 2 - (preDeep - currentDeep)]; // 修改兄弟关系

            DomTree[currentIndex].preNode = preTempIndex;
            if (preTempIndex != null) DomTree[preTempIndex].nextNode = currentIndex; // 修改父子关系

            DomTree[currentIndex].parentNode = preTemp2Index;
            if (preTemp2Index != null) DomTree[preTemp2Index].childNodes.push(currentIndex); // 校对presNode

            for (var j = 0; j < preDeep - currentDeep; j++) {
              presNode.pop();
            }

            presNode[presNode.length - 1] = currentIndex;
          }

      preDeep = currentDeep;
    }

    return DomTree;
  }

  // 在浏览器中利用style标签插入样式
  function addStylesClient(styles, uniqueId) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = styles.join(''); // 如果需要包裹

    if (uniqueId) {
      style = style.replace(/( {0,}){/g, "{");
      style = style.replace(/( {0,}),/g, ",");
      var temp = ""; // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash

      var isSpecial = false,
          isContent = false,
          hadComplete = false;

      for (var i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
          hadComplete = true;
          temp += "[" + uniqueId + "]";
        } else if (style[i] == '{' && !isSpecial) {
          isContent = true;
          if (!hadComplete) temp += "[" + uniqueId + "]";
        } else if (style[i] == '}' && !isSpecial) {
          isContent = false;
          hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
          isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
          isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
          if (!hadComplete) temp += "[" + uniqueId + "]";
          hadComplete = false;
        }

        temp += style[i];
      }

      style = temp;
    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);
  }

  /**
   * 组件
   */

  var index = 0;
  function Component (config) {
    var uniqueId = null; // 加载css

    if (isArray(config.styles)) {
      uniqueId = "nefbl-scoped-" + index++;
      addStylesClient(config.styles, uniqueId);
    }

    var template = xhtmlToJson("<nefbl-component>" + config.template + "</nefbl-component>");
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Component'; // 登记选择器

      target.prototype.__selector__ = config.selector; // 登记模板对象

      target.prototype.__template__ = template; // 记录唯一标识

      target.prototype.__uniqueId__ = uniqueId;
    };
  }

  /**
   * 指令
   */
  function Directive (config) {
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Directive'; // 登记选择器

      target.prototype.__selector__ = config.selector;
    };
  }

  // 判断是否是合法的方法或数据key
  function isValidKey (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      throw new Error('The beginning of _ or $ is not allowed：' + key);
    }
  }

  function watcher (component, data, key, doback) {
    // 记录值
    var value = data.value;
    var getter_setter = {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        value = newValue; // 回调通知组件更新

        doback();
      }
    }; // setter和getter添加监听

    Object.defineProperty(data, 'value', getter_setter); // 组件实例新增属性

    component[key] = value;
    Object.defineProperty(component, key, getter_setter);
  }

  function proxy (component, data, key, doback) {
    var proxy = new Proxy(data.value, {
      get: function get(_target, _key) {
        return _target[_key];
      },
      set: function set(_target, _key, _value) {
        var flag = Reflect.set(_target, _key, _value); // 回调通知组件更新

        doback();
        return flag;
      }
    });
    data.value = proxy;
    component[key] = proxy;
  }

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') temp += "0";
            expressArray.push(+temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);
    return path[0];
  }; // 获取

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray$1(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  function toNode(tagname) {
    if (['svg', 'circle', 'path', 'rect', 'ellipse', 'line', 'polyline', 'polygon', 'text'].indexOf(tagname) > -1) {
      return document.createElementNS('http://www.w3.org/2000/svg', tagname);
    } else {
      return document.createElement(tagname);
    }
  }

  function mountComponent(target, Component, module) {
    var component = new Component();
    var hadWillUpdate = false;

    var observeFunction = function observeFunction() {
      if (!hadWillUpdate) {
        hadWillUpdate = true;
        setTimeout(function () {
          if (isFunction(component.$beforeUpdate)) component.$beforeUpdate(); // 触发指令

          var _iterator = _createForOfIteratorHelper(component.__directives),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var directiveInstance = _step.value;

              if (isFunction(directiveInstance.instance.$update)) {
                directiveInstance.instance.$update(directiveInstance.el, {
                  type: directiveInstance.type,
                  exp: directiveInstance.exp,
                  value: directiveInstance.exp ? evalExpress(component, directiveInstance.exp) : undefined,
                  target: component
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (isFunction(component.$updated)) component.$updated();
          hadWillUpdate = false;
        }, 0);
      }
    };

    if (isFunction(component.$setup)) {
      // 获取当前组件需要双向绑定的数据、方法等
      var instance = component.$setup();

      for (var key in instance) {
        isValidKey(key); // ref

        if (instance[key].type == 'ref') {
          watcher(component, instance[key], key, observeFunction);
        } // reactive
        else if (instance[key].type == 'reactive') {
            proxy(component, instance[key], key, observeFunction);
          } // 方法
          else if (isFunction(instance[key])) {
              component[key] = instance[key];
            }
      }
    } // 记录子组件


    component.__children = []; // 记录指令

    component.__directives = [];
    var templateObj = component.__template__;

    (function createElement(index, pEl) {
      var vnode = templateObj[index],
          el = null;

      if (vnode.type == 'tag') {
        // 如果是组件
        if (vnode.name in module.__component__) {
          // 编译子组件并登记
          component.__children.push(mountComponent(pEl, module.__component__[vnode.name], module));
        } // 否则就是普通的标签
        else {
            el = toNode(vnode.name);

            for (var attrKey in vnode.attrs) {
              var attrKeys = (attrKey + ":").split(':'); // 指令

              if (attrKeys[0] in module.__directive__) {
                (function () {
                  var directiveInstance = new module.__directive__[attrKeys[0]]();
                  var type = attrKeys[1];
                  var exp = vnode.attrs[attrKey];

                  if (isFunction(directiveInstance.$inserted)) {
                    setTimeout(function () {
                      directiveInstance.$inserted(el, {
                        type: type,
                        exp: exp,
                        value: exp ? evalExpress(component, exp) : undefined,
                        target: component
                      });
                    });
                  }

                  component.__directives.push({
                    instance: directiveInstance,
                    el: el,
                    type: type,
                    exp: exp
                  });
                })();
              } // 普通属性
              else {
                  el.setAttribute(attrKey, vnode.attrs[attrKey]);
                }
            }

            if (component.__uniqueId__ != null) {
              // 配置唯一标识
              el.setAttribute(component.__uniqueId__, "");
            } // 追加孩子


            var _iterator2 = _createForOfIteratorHelper(vnode.childNodes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subVnode = _step2.value;
                createElement(subVnode, el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
      } else if (vnode.type == 'text') {
        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n') // 特殊转义字符进行校对
        .replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&amp;/g, '&');
      }

      if (el != null) {
        // 追加到父亲结点
        pEl.appendChild(el);
      }
    })(0, target);

    if (isFunction(component.$mounted)) component.$mounted();
    return component;
  }

  function platform (options) {
    // 样式生效
    addStylesClient(options.styles || []); // 记录根组件

    var rootComponent = null;
    return {
      bootstrap: function bootstrap(Module) {
        var module = new Module(); // 在所有的指令和组件中登记所在模块

        var allList = _objectSpread2(_objectSpread2({}, module.__component__), module.__directive__);

        for (var key in allList) {
          allList[key].prototype._module = module;
        } // 通过启动组件，启动


        rootComponent = mountComponent(options.el, module.__bootstrapComponent__, module);
        return {
          // 根组件
          rootComponent: rootComponent,
          // 当前模块对象
          module: module
        };
      }
    };
  }

  function ref (data) {
    // 如果是定义的数据，不好监听，嵌套一层壳
    return {
      value: data,
      type: 'ref'
    };
  }

  function reactive (data) {
    // 如果是对象
    if (isObject(data)) {
      return {
        value: data,
        type: 'reactive'
      };
    } // 否则，还是用ref
    else {
        return ref(data);
      }
  }

  /**
   * 整理好对象并对外暴露调用接口
   */

  var Nefbl = {
    // 装饰器
    Module: Module,
    Component: Component,
    Directive: Directive,
    // 核心方法
    platform: platform,
    mountComponent: mountComponent,
    evalExpress: evalExpress,
    getValue: getValue,
    setValue: setValue,
    // 暴露的一些有用的方法
    ref: ref,
    reactive: reactive
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());


        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n body{\n\nfont-family: cursive;\n\n}\n\n #dialog>li{\n\ndisplay: none;\n\n}\n\n #dialog>li:last-child{\n\ndisplay: block;\n\nwidth: 100vw;\n\nheight: 100vh;\n\nbackground-color: #bab6b6a3;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('16');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.module.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Module=__etcpack__scope_args__.Module;
 // 组件

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var AppComponent =__etcpack__scope_args__.default;
 // 指令

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var uiBind =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var uiModel =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('32');
var uiOn =__etcpack__scope_args__.default;


var _class = (_dec = Module({
  declarations: [AppComponent, uiBind, uiModel, uiOn],
  imports: [],
  exports: [],
  bootstrap: AppComponent
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;
var mountComponent=__etcpack__scope_args__.mountComponent;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var image2D =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var Matrix =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var sigmoid =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var weight_calc =__etcpack__scope_args__.default;

var _weight1 = weight_calc.weight1;
var _weight2 = weight_calc.weight2;
var _weight3 = weight_calc.weight3;
__etcpack__scope_args__=window.__etcpack__getBundle('24');
var seedData =__etcpack__scope_args__.default;


var _seedData = JSON.parse(sessionStorage.getItem('digit-recognition@seed-data')) || seedData;

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var lazyLoad =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('27');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('28');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "image2d", void 0);

    _defineProperty(this, "painter", void 0);

    _defineProperty(this, "isDown", false);
  }

  _createClass(_class2, [{
    key: "$mounted",
    value: function $mounted() {
      // 初始化画布
      this.image2d = image2D('canvas');
      this.painter = this.image2d.painter(); // 配置画笔

      this.painter.config({
        strokeStyle: "#ff0000",
        // 训练样本确定以后，这个值不要轻易改动了
        lineWidth: 10
      }); // setTimeout(() => {
      //     for (let i = 0; i < 10000; i++) {
      //         console.log(i)
      //         for (let j = 0; j < _seedData.length; j++) {
      //             this.trainSeed(_seedData[j].output, _seedData[j].input)
      //         }
      //     }

      document.getElementById('seed-msg').style.display = 'none'; // })
    } // 获取画布上的像素信息

  }, {
    key: "getInput",
    value: function getInput() {
      var seedJson = [],
          oralPainter = this.image2d[0].getContext("2d");

      for (var row = 0; row < 28; row++) {
        for (var col = 0; col < 28; col++) {
          seedJson.push(oralPainter.getImageData(col * 20 + 10, row * 20 + 10, 1, 1).data[0] > 100 ? 1 : 0);
        }
      }

      this.seedImage(seedJson);
      return seedJson;
    } // 训练程序

  }, {
    key: "doTrain",
    value: function doTrain() {
      var _this = this;

      this.openDialog('selectNum').then(function (target) {
        target.component.init({
          callback: function callback(num) {
            target.el.parentNode.removeChild(target.el);
            var output = [num == 0 ? 1 : 0, num == 1 ? 1 : 0, num == 2 ? 1 : 0, num == 3 ? 1 : 0, num == 4 ? 1 : 0, num == 5 ? 1 : 0, num == 6 ? 1 : 0, num == 7 ? 1 : 0, num == 8 ? 1 : 0, num == 9 ? 1 : 0];

            var input = _this.getInput();

            for (var index = 0; index < 100; index++) {
              _this.trainSeed(output, input);
            }

            _seedData.push({
              output: output,
              input: input
            });

            sessionStorage.setItem('digit-recognition@seed-data', JSON.stringify(_seedData));
          }
        });
      });
    } // 下载权重

  }, {
    key: "downloadWeightData",
    value: function downloadWeightData() {
      var _weight = {
        weight1: _weight1,
        weight2: _weight2,
        weight3: _weight3
      };
      var Link = document.createElement("a");
      Link.download = "weights.json";
      Link.style.display = "none";
      var blob = new Blob([JSON.stringify(_weight)]);
      Link.href = URL.createObjectURL(blob);
      document.body.appendChild(Link);
      Link.click();
      document.body.removeChild(Link);
    } // 下载种子

  }, {
    key: "downloadSeedData",
    value: function downloadSeedData() {
      var seedData = sessionStorage.getItem('digit-recognition@seed-data');

      if (seedData) {
        var Link = document.createElement("a");
        Link.download = "seed.json";
        Link.style.display = "none";
        var blob = new Blob([seedData]);
        Link.href = URL.createObjectURL(blob);
        document.body.appendChild(Link);
        Link.click();
        document.body.removeChild(Link);
      } else {
        alert('种子已经是最新的了，无需下载更新！');
      }
    } // 训练

  }, {
    key: "trainSeed",
    value: function trainSeed(output, input) {
      // 先求解出每一层的值
      var _this$calcInput = this.calcInput(input),
          input1 = _this$calcInput.input1,
          input2 = _this$calcInput.input2,
          input3 = _this$calcInput.input3,
          input4 = _this$calcInput.input4; // 嗅探第3层


      var error3 = Matrix([output]).minus(input4).value()[0];
      var delta3 = Matrix([error3]).dot(input4).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input4)).value()[0]; // 嗅探第2层

      var error2 = Matrix([delta3]).multiply(Matrix(_weight3).T()).value()[0];
      var delta2 = Matrix([error2]).dot(input3).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input3)).value()[0]; // 嗅探第1层

      var error1 = Matrix([delta2]).multiply(Matrix(_weight2).T()).value()[0];
      var delta1 = Matrix([error1]).dot(input2).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input2)).value()[0]; // 调整第3层

      _weight3 = Matrix(input3).T().multiply([delta3]).add(_weight3).value(); // 调整第2层

      _weight2 = Matrix(input2).T().multiply([delta2]).add(_weight2).value(); // 调整第1层

      _weight1 = Matrix(input1).T().multiply([delta1]).add(_weight1).value();
    } // 识别程序

  }, {
    key: "doRun",
    value: function doRun() {
      var input4 = this.calcInput().input4;
      var result = 0,
          value = input4[0][0];

      for (var index = 1; index < 9; index++) {
        if (input4[0][index] > value) {
          value = input4[0][index];
          result = index;
        }
      }

      alert('你写的数字是：' + result);
    } // 求解

  }, {
    key: "calcInput",
    value: function calcInput(input) {
      // 获取0层输入值
      var input1 = input || this.getInput(); // 计算第1层

      var input2 = sigmoid(Matrix([input1]).multiply(_weight1).value()); // 计算第2层

      var input3 = sigmoid(Matrix(input2).multiply(_weight2).value()); // 计算第3层

      var input4 = sigmoid(Matrix(input3).multiply(_weight3).value());
      return {
        input1: [input1],
        input2: input2,
        input3: input3,
        input4: input4
      };
    } // 种子可视化打印

  }, {
    key: "seedImage",
    value: function seedImage(seed) {
      var imageStr = "";

      for (var index = 0; index < seed.length; index++) {
        if (index % 28 == 0) {
          imageStr += "\n";
        }

        imageStr += seed[index] == 1 ? "  " : " 0";
      }

      console.log(imageStr);
    } // 清空画布

  }, {
    key: "doClear",
    value: function doClear() {
      this.painter.clearRect();
    } // 鼠标按下

  }, {
    key: "doMouseDown",
    value: function doMouseDown() {
      this.isDown = true;
      this.painter.beginPath();
    } // 鼠标移动

  }, {
    key: "doMouseMove",
    value: function doMouseMove(event) {
      if (this.isDown) {
        this.painter.lineTo(event.offsetX, event.offsetY).stroke();
      }
    } // 鼠标放开

  }, {
    key: "doMouseUp",
    value: function doMouseUp() {
      this.isDown = false;
    } // 打开弹框

  }, {
    key: "openDialog",
    value: function openDialog(dialogName) {
      var _this2 = this;

      return new Promise(function (resolve) {
        lazyLoad[dialogName]().then(function (data) {
          var li = document.createElement('li');
          document.getElementById('dialog').appendChild(li);
          resolve({
            component: mountComponent(li, data["default"], _this2['_module']),
            el: li
          });
        });
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/image2d/build/image2D.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/hai2007/image2D.git
*
* For online documents, please visit
* https://hai2007.gitee.io/image2d/index.html
*
* author 你好2007
*
* version 1.16.4
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Sat Apr 16 2022 19:16:09 GMT+0800 (GMT+08:00)
*/

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(function(){"use strict";var f=function t(e,r){for(var n in r){try{e[n]=r[n]}catch(t){throw new Error("Illegal property value！")}}return e};var u={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var m={whitespace:"[\\x20\\t\\r\\n\\f]",blank:"[\\n\\f\\r]",identifier:"(?:\\\\.|[\\w-]|[^\0-\\xa0])+"};var a=["href","title","show","type","role","actuate"];function r(t){var e=typeof t==="undefined"?"undefined":_typeof(t);return t!=null&&(e==="object"||e==="function")}var e=Object.prototype.toString;function n(t){if(t==null){return t===undefined?"[object Undefined]":"[object Null]"}return e.call(t)}function t(t){return typeof t==="number"||t!==null&&(typeof t==="undefined"?"undefined":_typeof(t))==="object"&&n(t)==="[object Number]"}function i(t){var e=typeof t==="undefined"?"undefined":_typeof(t);return e==="string"||e==="object"&&t!=null&&!Array.isArray(t)&&n(t)==="[object String]"}function o(t){if(!r(t)){return false}var e=n(t);return e==="[object Function]"||e==="[object AsyncFunction]"||e==="[object GeneratorFunction]"||e==="[object Proxy]"}function l(t){if(t===null||(typeof t==="undefined"?"undefined":_typeof(t))!=="object"||n(t)!="[object Object]"){return false}if(Object.getPrototypeOf(t)===null){return true}var e=t;while(Object.getPrototypeOf(e)!==null){e=Object.getPrototypeOf(e)}return Object.getPrototypeOf(t)===e}var s=function t(e,r){return r!==null&&(typeof r==="undefined"?"undefined":_typeof(r))==="object"&&e.indexOf(r.nodeType)>-1&&!l(r)};var c=r;var h=t;var b=i;var x=o;var d=function t(e){return Array.isArray(e)};var _=function t(e){return s([1,9,11],e)};var v=function t(e){return s([3],e)};var p=function t(e,r){if("innerHTML"in SVGElement.prototype===false||"innerHTML"in SVGSVGElement.prototype===false){var n=document.createElement("div");n.innerHTML=r;var o=function t(e){var r=document.createElementNS(u.svg,e.tagName.toLowerCase());var n=e.attributes;for(var i=0;n&&i<n.length;i++){if(a.indexOf(n[i].nodeName)>=0){r.setAttributeNS(u.xlink,"xlink:"+n[i].nodeName,e.getAttribute(n[i].nodeName))}else{r.setAttribute(n[i].nodeName,e.getAttribute(n[i].nodeName))}}return r};var i=o(n.firstChild);(function t(e,r){var n=e.firstChild;if(v(n)){r.textContent=e.innerText;return}while(n){var i=o(n);r.appendChild(i);if(n.firstChild)t(n,i);n=n.nextSibling}})(n.firstChild,i);e.appendChild(i)}else{e.innerHTML=r}};var g=function t(e,r){var n=void 0,i=void 0,o="div";if(r==="html"||r==="HTML"){if(/^<tr[> ]/.test(e)){o="tbody"}else if(/^<th[> ]/.test(e)||/^<td[> ]/.test(e)){o="tr"}else if(/^<thead[> ]/.test(e)||/^<tbody[> ]/.test(e)){o="table"}n=document.createElement(o);n.innerHTML=e;if(!/</.test(n.innerHTML)){throw new Error("This template cannot be generated using div as a container:"+e+"\nPlease contact us: https://github.com/hai2007/image2D/issues")}}else{n=document.createElementNS(u.svg,"svg");p(n,e)}i=n.childNodes;for(var a=0;a<i.length;a++){if(_(i[a]))return i[a]}};function k(t,e){if(new RegExp("^"+m.identifier+"$").test(t))t="<"+t+"></"+t+">";var r=/^<([^(>| )]+)/.exec(t)[1];if("canvas"===r.toLowerCase())e="HTML";if(!b(e)&&["div","span","p","em","i","table","ul","ol","dl","dt","li","dd","form","input","button","textarea","header","footer","article","section","h1","h2","h3","h4","h5","h6","image","video","iframe","object","style","script","link","tr","td","th","tbody","thead"].indexOf(r.toLowerCase())>=0)e="HTML";return g(t,e)}function w(t,e){if(b(e)||b(t)){t=t.trim().replace(new RegExp(m.blank,"g"),"");if(typeof e=="string"||/^</.test(t)){var r=k(t,e);if(_(r))return[r];else return[]}else if(t==="*"){return e.getElementsByTagName("*")}var n=t.match(new RegExp("#"+m.identifier,"g"));if(n){var i=document.getElementById(n[0].replace("#",""));if(_(i))return[i];else return[]}var o=t.match(new RegExp("\\."+m.identifier,"g")),a=t.match(new RegExp("^"+m.identifier));if(a||o){var f=e.getElementsByTagName(a?a[0]:"*"),u=[];for(var l=0;l<f.length;l++){var s=" "+f[l].getAttribute("class")+" ",c=true;for(var h=0;o&&h<o.length;h++){if(!s.match(" "+o[h].replace(".","")+" ")){c=false;break}}if(c)u.push(f[l])}return u}else{throw new Error("Unsupported selector:"+t)}}else if(_(t)){return[t]}else if(t&&(t.constructor===Array||t.constructor===HTMLCollection||t.constructor===NodeList)){var d=[];for(var v=0;v<t.length;v++){if(_(t[v]))d.push(t[v]);else if(t[v]&&t[v].constructor===T){for(var p=0;p<t[v].length;p++){d.push(t[v][p])}}}return d}else if(t&&t.constructor===T){return t}else if(x(t)){var g=e.getElementsByTagName("*"),w=[];for(var y=0;y<g.length;y++){if(t(g[y]))w.push(g[y])}return w}else{throw new Error("Unknown selector:"+t)}}var T=function t(e,r){return new t.prototype.init(e,r)};T.prototype.init=function(t,e){this.context=e=e||document;var r=w(t,e),n=void 0;for(n=0;n<r.length;n++){this[n]=r[n]}this.length=r.length;return this};T.prototype.extend=T.extend=function(){var t=arguments[0]||{};var e=arguments[1]||{};var r=arguments.length;if(r===1){e=t;t=this}if(!c(t)){t={}}for(var n in e){try{t[n]=e[n]}catch(t){throw new Error("Illegal property key："+n+"！")}}return t};T.prototype.init.prototype=T.prototype;function y(t){var l=t||{},s,n;var i=function t(){var a=[],f=0,u=0;(function t(e,r){if(r>u)u=r;var n;for(n=0;n<e.children.length;n++){t(s[e.children[n]],r+1)}s[e.id].left=r+.5;if(n==0){if(a[r]==undefined)a[r]=-.5;if(a[r-1]==undefined)a[r-1]=-.5;s[e.id].top=a[r]+1;var i=a[r]+1+(s[e.pid].children.length-1)*.5;if(i-1<a[r-1])s[e.id].top=a[r-1]+1-(s[e.pid].children.length-1)*.5}else{s[e.id].top=(s[e.children[0]].top+s[e.children[n-1]].top)*.5}if(s[e.id].top<=a[r]){var o=a[r]+1-s[e.id].top;(function t(e,r){s[e].top+=o;if(a[r]<s[e].top)a[r]=s[e].top;var n;for(n=0;n<s[e].children.length;n++){t(s[e].children[n],r+1)}})(e.id,r)}a[r]=s[e.id].top;if(s[e.id].top+.5>f)f=s[e.id].top+.5})(s[n],0);return{node:s,root:n,size:f,deep:u+1}};var o=function t(o){var a={};var e=l.root(o),f,r;f=r=l.id(e);a[f]={data:e,pid:null,id:f,children:[]};var u=1;(function t(e,r){var n=l.child(e,o),i;u+=n?n.length:0;for(i=0;n&&i<n.length;i++){f=l.id(n[i]);a[r].children.push(f);a[f]={data:n[i],pid:r,id:f,children:[]};t(n[i],f)}})(e,f);return{value:[r,a],num:u}};var e=function t(e){var r=o(e);s=r.value[1];n=r.value[0];if(r.num==1){s[n].left=.5;s[n].top=.5;return{deep:1,node:s,root:n,size:1}}return i()};e.root=function(t){l.root=t;return e};e.child=function(t){l.child=t;return e};e.id=function(t){l.id=t;return e};return e}var M=function t(e,r,n,i,o){var a=Math.cos(n),f=Math.sin(n);return[+((i-e)*a-(o-r)*f+e).toFixed(7),+((i-e)*f+(o-r)*a+r).toFixed(7)]};var E=function t(e,r,n,i,o){var a=Math.sqrt(e*e+r*r);return[+(e*n/a+i).toFixed(7),+(r*n/a+o).toFixed(7)]};var C=function t(e,r,n,i,o){return[+(n*(i-e)+e).toFixed(7),+(n*(o-r)+r).toFixed(7)]};var P=function t(o){o=f({d:[1,1],c:[0,0],p:[0,0]},o);var a={rotate:function t(e){var r=o.d[0]+o.p[0],n=o.d[1]+o.p[1];var i=M(o.p[0],o.p[1],e,r,n);o.d=[i[0]-o.p[0],i[1]-o.p[1]];return a},move:function t(e){o.p=E(o.d[0],o.d[1],e,o.p[0],o.p[1]);return a},scale:function t(e){o.p=C(o.c[0],o.c[1],e,o.p[0],o.p[1]);return a},value:function t(){return o.p}};return a};function S(m){m=f({"begin-deg":0,deg:Math.PI*2},m);var b=y().root(m.root).child(m.child).id(m.id);var e=function t(e){var r=b(e);for(var n in r.node){r.node[n].deep=r.node[n].left-.5}if(m.type==="LR"||m.type==="RL"){var i=m.width/r.deep;if("RL"===m.type)i*=-1;var o=m.height/(r.size- -.5);for(var a in r.node){var f=r.node[a];r.node[a].left=+(("RL"==m.type?m.width:0)- -f.left*i).toFixed(7);r.node[a].top=+(f.top*o).toFixed(7)}}else if(m.type==="TB"||m.type==="BT"){var u=m.height/r.deep;if("BT"==m.type)u*=-1;var l=m.width/(r.size- -.5);var s=void 0,c=void 0;for(var h in r.node){var d=r.node[h];s=d.left;c=d.top;r.node[h].top=+(("BT"==m.type?m.height:0)- -s*u).toFixed(7);r.node[h].left=+(c*l).toFixed(7)}}else if(m.type==="circle"){if(r.deep==1&&r.size==1){r.node[r.root].left=m.cx;r.node[r.root].top=m.cy}else{var v=m.radius/(r.deep-1);var p=m.deg/(r.size- -.5);for(var g in r.node){var w=r.node[g];r.node[g].deg=(m["begin-deg"]- -p*w.top)%(Math.PI*2);var y=M(m.cx,m.cy,r.node[g].deg,m.cx- -v*(w.left-.5),m.cy);r.node[g].left=+y[0];r.node[g].top=+y[1]}}}if(x(m.drawer)){m.drawer(r);return t}else{return r}};e.config=function(t){m=f(m,t);return e};e.drawer=function(t){m.drawer=t;return e};return e}function A(u){u=f({"begin-deg":-Math.PI/2,deg:Math.PI*2,radius:[]},u);if(!x(u.value)){throw new Error("config.value must be a function!")}var e=function t(e){var r=0,n=[],i=0;for(var o in e){n.push({value:u.value(e[o],o,r),data:e[o],key:o,index:r,dots:[]});i+=n[r].value;r+=1}for(r=0;r<n.length;r++){n[r].beginDeg=r===0?u["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/i;n[r].deg=a*u.deg;n[r].percent=new Number(a*100).toFixed(2)}if(h(u.cx)&&h(u.cy)){for(r=0;r<u.radius.length;r++){for(var f=0;f<n.length;f++){n[f].dots.push(M(u.cx,u.cy,n[f].beginDeg+n[f].deg*.5,u.cx+u.radius[r],u.cy))}}}if(x(u.drawer)){u.drawer(n);return t}else{return n}};e.config=function(t){u=f(u,t);return e};e.drawer=function(t){u.drawer=t;return e};return e}function L(t,e,r,n){n=n||0;var i=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/i,r*t/i,n*t/i,1]}function N(t){var e=Math.sin(t),r=Math.cos(t);return[r,e,0,0,-e,r,0,0,0,0,1,0,0,0,0,1]}function I(t,e,r,n,i,o){n=n||0;i=i||0;o=o||0;return[t,0,0,0,0,e,0,0,0,0,r,0,n-n*t,i-i*e,o-o*r,1]}function j(t,e,r,n,i,o){if(typeof t==="number"&&typeof e==="number"){if(typeof r!=="number"){r=0;n=t;i=e;o=1}else if(typeof n!=="number"||typeof i!=="number"||typeof o!=="number"){n=t;i=e;o=r;t=0;e=0;r=0}if(t==n&&e==i&&r==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(i-e)*(i-e)),f=a!=0?(i-e)/a:1,u=a!=0?(n-t)/a:0,l=(n-t)*u+(i-e)*f,s=o-r,c=Math.sqrt(l*l+s*s),h=c!=0?s/c:1,d=c!=0?l/c:0;return[[f,h*u,u*d,0,-u,f*h,f*d,0,0,-d,h,0,e*u-t*f,r*d-t*u*h-e*f*h,-t*u*d-e*f*d-r*h,1],[f,-u,0,0,h*u,h*f,-d,0,u*d,f*d,h,0,t,e,r,1]]}else{throw new Error("a1 and b1 is required!")}}var D=function t(e,r){var n=[];for(var i=0;i<4;i++){for(var o=0;o<r.length/4;o++){n[o*4+i]=e[i]*r[o*4]+e[i+4]*r[o*4+1]+e[i+8]*r[o*4+2]+e[i+12]*r[o*4+3]}}return n};function R(t){var l=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var s={move:function t(e,r,n,i){l=D(L(e,r,n,i),l);return s},rotate:function t(e,r,n,i,o,a,f){var u=j(r,n,i,o,a,f);l=D(D(D(u[1],N(e)),u[0]),l);return s},scale:function t(e,r,n,i,o,a){l=D(I(e,r,n,i,o,a),l);return s},multiply:function t(e,r){l=r?D(l,e):D(e,l);return s},use:function t(e,r,n,i){n=n||0;i=i||1;var o=D(l,[e,r,n,i]);o[0]=+o[0].toFixed(7);o[1]=+o[1].toFixed(7);o[2]=+o[2].toFixed(7);o[3]=+o[3].toFixed(7);return o},value:function t(){return l}};return s}var F=[];var z=13;var H=400;var B=null;function O(e,t,r){if(arguments.length<2)t=H;var u={timer:function t(e,r,n){if(!e){throw new Error("Tick is required!")}var i=(new Date).valueOf()+"_"+(Math.random()*1e3).toFixed(0);F.push({id:i,createTime:new Date,tick:e,duration:r,callback:n});u.start();return i},start:function t(){if(!B){B=setInterval(u.tick,z)}},tick:function t(){var e,r,t,n,i,o,a,f=F;F=[];F.length=0;for(r=0;r<f.length;r++){i=f[r];e=i.createTime;t=i.tick;o=i.duration;n=i.callback;a=(+new Date-e)/o;a=a>1?1:a;t(a);if(a<1&&i.id){F.push(i)}else if(n){n(a)}}if(F.length<=0){u.stop()}},stop:function t(){if(B){clearInterval(B);B=null}}};var n=u.timer(function(t){e(t)},t,r);return function(){var t;for(t in F){if(F[t].id==n){F[t].id=undefined;return}}}}function W(t,e){for(var r in e){try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}}return t}function G(u){u=W({u:.5},u);var l,s,c;var h=function t(e){if(l){var r=(e-s)/(c-s),n=r*r,i=r*n;var o=i*l[0]+n*l[1]+r*l[2]+l[3];return o*(c-s)}else throw new Error("You shoud first set the position!")};h.setP=function(t,e,r,n,i,o){if(t<r){s=t;c=r;var a=u.u*i,f=u.u*o;e/=r-t;n/=r-t;l=[2*e-2*n+a+f,3*n-3*e-2*a-f,a,e]}else throw new Error("The point x-position should be increamented!");return h};return h}function $(e,t,r,n){if(!x(r)){n=r;r=false}var i={ease:[.25,.1,.5,1],"ease-in":[.5,0,.75,.6],"ease-in-out":[.43,.01,.58,1],"ease-out":[.25,.6,.5,1],linear:"default"}[n]||n;var o=function t(e){return e};if(i&&d(i)&&i.length==4){o=G({u:1}).setP(0,0,1,1,i[1]/i[0],(1-i[3])/(1-i[2]))}return O(function(t){e(o(t))},t,function(t){if(x(r)){if(t!=1)t=o(t);r(t)}})}function V(i){i=f({t:0},i);var o=void 0,r=void 0;var a=function t(e){if(o){r=-1;while(r+1<o.x.length&&(e>o.x[r+1]||r==-1&&e>=o.x[r+1])){r+=1}if(r==-1||r>=o.h.length)throw new Error("Coordinate crossing!");return o.h[r](e)}else{throw new Error("You shoud first set the position!")}};a.setT=function(t){if(typeof t==="number"){i.t=t}else{throw new Error("Expecting a figure!")}return a};a.setP=function(t){o={x:[],h:[]};var e=void 0,r=(t[1][1]-t[0][1])/(t[1][0]-t[0][0]),n=void 0;o.x[0]=t[0][0];for(e=1;e<t.length;e++){if(t[e][0]<=t[e-1][0])throw new Error("The point position should be increamented!");o.x[e]=t[e][0];n=e<t.length-1?(t[e+1][1]-t[e-1][1])/(t[e+1][0]-t[e-1][0]):(t[e][1]-t[e-1][1])/(t[e][0]-t[e-1][0]);o.h[e-1]=G({u:(1-i.t)*.5}).setP(t[e-1][0],t[e-1][1],t[e][0],t[e][1],r,n);r=n}return a};return a}function q(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return b(e)?r.getPropertyValue(e):r}var U=function t(e){var r=document.getElementsByTagName("head")[0];r.style["color"]=e;var n=q(r,"color");var i=n.replace(/^rgba?\(([^)]+)\)$/,"$1").split(new RegExp("\\,"+m.whitespace));return[+i[0],+i[1],+i[2],i[3]==undefined?1:+i[3]]};var X=function t(e,r){if(!(r&&r>=0&&r<=1))r=1;var n=[];for(var i=1;i<=e;i++){n.push("rgba("+(Math.random(1)*230+20).toFixed(0)+","+(Math.random(1)*230+20).toFixed(0)+","+(Math.random(1)*230+20).toFixed(0)+","+r+")")}return n};var Y=function t(e,r){if(!(r&&r>=0&&r<=1))r=1;var n=["rgba(84,112,198,"+r+")","rgba(145,204,117,"+r+")","rgba(250,200,88,"+r+")","rgba(238,102,102,"+r+")","rgba(115,192,222,"+r+")","rgba(59,162,114,"+r+")","rgba(252,132,82,"+r+")","rgba(154,96,180,"+r+")","rgba(234,124,204,"+r+")"];var i=[];if(e<=n.length){return n}else{if(e%n.length==0){for(var o=0;o<e/n.length;o++){i=i.concat(n)}}else{for(var a=1;a<e/n.length;a++){i=i.concat(n)}if(e%n.length==1){i=i.concat(n[4])}else{for(var f=0;f<e%n.length;f++){i=i.concat(n[f])}}}}return i};var Z=function t(e,r){if(window.attachEvent){for(var n=0;n<this.length;n++){this[n].attachEvent("on"+e,r)}}else{for(var i=0;i<this.length;i++){this[i].addEventListener(e,r,false)}}return this};var Q=function t(e,r){if(window.detachEvent){for(var n=0;n<this.length;n++){this[n].detachEvent("on"+e,r)}}else{for(var i=0;i<this.length;i++){this[i].removeEventListener(e,r,false)}}return this};var J=function t(e){var r=this[0].getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-r.left,y:e.clientY-r.top}};var K=function t(e){e=e||window.event;if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}return this};var tt=function t(e){e=e||window.event;if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}return this};var et=function t(e,r,n,i){var o=Math.cos(e),a=Math.sin(e);return[r,n*o-i*a,n*a+i*o]},rt=function t(e,r,n,i){var o=Math.cos(e),a=Math.sin(e);return[i*a+r*o,n,i*o-r*a]},nt=function t(e,r,n,i){var o=Math.cos(e),a=Math.sin(e);return[r*o-n*a,r*a+n*o,i]};var it=[];function ot(t,e,r){it=rt((360-r)/180*Math.PI,100*t.scale,0,0);it=nt(e/180*Math.PI,it[0],it[1],it[2]);it=nt((90-t.center[0])/180*Math.PI,it[0],it[1],it[2]);it=et((90-t.center[1])/180*Math.PI,it[0],it[1],it[2]);return[-it[0],it[1],it[2]]}function at(t){var n=f({type:"eoap",scale:1,center:[107,36]},t);var e=function t(e,r){switch(n.type){case"eoap":{return ot(n,e,r)}default:{throw new Error("Map type configuration error!")}}};e.config=function(t){n=f(n,t);return e};return e}function ft(t,e,r){if(t<e){var n=e;e=t;t=n}else if(t==e){return[t]}var i=(t+".").split(".")[1].length;var o=(e+".").split(".")[1].length;var a=i>o?i:o;var f=function(t){var e=t<100&&t>-100?10:.1;var r=1,n=t;while(e==10?n>=-100&&n<=100:n<=-100||n>=100){r*=e;n*=e}return r}(t-e);var u=+(Math.ceil((t-e)*f/r)/f).toFixed(a);if(u<=0)return[e,t];var l=Math.floor(e/u)*u;var s=[],c;s.push(l);for(c=1;s[s.length-1]<t;c++){s.push(+(l+u*c).toFixed(a))}s[0]=+l.toFixed(a);var h=[s[0]];for(var d=1;d<s.length;d++){if(h[h.length-1]!=s[d]){h.push(s[d])}}return h}function ut(t,e){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:5;var n=ft(t,e,r);return{min:n[0],max:n[n.length-1],distance:n.length<=1?0:n[1]-n[0],num:n.length-1,ruler:n}}var lt=function t(e,r){var n=w(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].appendChild(this[i])}}else{throw new Error("Target empty!")}return this};var st=function t(e,r){var n=w(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].insertBefore(this[i],n[0].childNodes[0])}}else{throw new Error("Target empty!")}return this};var ct=function t(e,r){var n=w(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].parentNode.insertBefore(this[i],n[0].nextSibling)}}else{throw new Error("Target empty!")}return this};var ht=function t(e,r){var n=w(e,r||document);if(n.length>0){for(var i=0;i<this.length;i++){n[0].parentNode.insertBefore(this[i],n[0])}}else{throw new Error("Target empty!")}return this};var dt=function t(){for(var e=0;e<this.length;e++){this[e].parentNode.removeChild(this[e])}return this};var vt=function t(e){var r=[];for(var n=0;n<this.length;n++){if(e(n,T(this[n])))r.push(this[n])}return T(r)};var pt=function t(e){if(arguments.length>0){for(var r=0;r<this.length;r++){this[r].textContent=e}return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent};var gt=function t(e){if(arguments.length>0){for(var r=0;r<this.length;r++){if(/[a-z]/.test(this[r].tagName)){p(this[r],e)}else{this[r].innerHTML=e}}return this}if(this.length<=0)throw new Error("Target empty!");return this[0].innerHTML};var wt=function t(e){if(this.length<=0)throw new Error("Target empty!");var r=void 0,n=void 0,i=this[0];if(e=="content"){n=i.clientWidth-(q(i,"padding-left")+"").replace("px","")-(q(i,"padding-right")+"").replace("px","");r=i.clientHeight-(q(i,"padding-top")+"").replace("px","")-(q(i,"padding-bottom")+"").replace("px","")}else if(e=="padding"){n=i.clientWidth;r=i.clientHeight}else if(e=="border"){n=i.offsetWidth;r=i.offsetHeight}else if(e=="scroll"){n=i.scrollWidth;r=i.scrollHeight}else{n=i.offsetWidth;r=i.offsetHeight}return{width:n,height:r}};function yt(){if(arguments.length<=1&&(arguments.length<=0||_typeof(arguments[0])!=="object")){if(this.length<=0)throw new Error("Target empty!");return q(this[0],arguments[0])}for(var t=0;t<this.length;t++){if(arguments.length===1){for(var e in arguments[0]){this[t].style[e]=arguments[0][e]}}else this[t].style[arguments[0]]=arguments[1]}return this}var mt=function t(e,r,n){if(/[a-z]/.test(e.tagName)&&a.indexOf(r)>=0){e.setAttributeNS(u.xlink,"xlink:"+r,n)}else e.setAttribute(r,n)};function bt(){if(arguments.length===1&&_typeof(arguments[0])!=="object"){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}else if(arguments.length>0){for(var t=0;t<this.length;t++){if(arguments.length===1){for(var e in arguments[0]){mt(this[t],e,arguments[0][e])}}else mt(this[t],arguments[0],arguments[1])}}return this}var xt=function t(e,r){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var n=0;n<this.length;n++){this[n].__data__=typeof r==="function"?r(e,n):e}return this};var _t=function t(e,r){if(arguments.length<=0){var n=[];for(var i=0;i<this.length;i++){n[i]=this[i].__data__}return n}var o=[],a=void 0;for(a=0;a<this.length&&a<e.length;a++){this[a].__data__=typeof r==="function"?r(e[a],a):e[a];o.push(this[a])}var f=T(o);f.__enter__=[];for(;a<e.length;a++){f.__enter__.push(typeof r==="function"?r(e[a],a):e[a])}f.__exit__=[];for(;a<this.length;a++){f.__exit__.push(this[a])}return f};var kt=function t(e,r){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var n=[];for(var i=0;i<this.__enter__.length;i++){n[i]=k(e,r);n[i].__data__=this.__enter__[i]}delete this.__enter__;return T(n)};var Tt=function t(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var e=T(this.__exit__);delete this.__exit__;return e};var Mt=function t(e){for(var r=0;r<this.length;r++){e(this[r].__data__,r,T(this[r]))}return this};function Et(t,e,r,n,i,o,a){if(e<0){t+=e;e*=-1}var f=[],u=void 0;u=M(0,0,t,i,0);f[0]=u[0];f[1]=u[1];u=M(0,0,e,u[0],u[1]);f[2]=u[0];f[3]=u[1];u=M(0,0,t,o,0);f[4]=u[0];f[5]=u[1];u=M(0,0,e,u[0],u[1]);f[6]=u[0];f[7]=u[1];a(t,t+e,f[0]+r,f[1]+n,f[4]+r,f[5]+n,f[2]+r,f[3]+n,f[6]+r,f[7]+n,(o-i)*.5)}var Ct=function t(e,r,n,i,o){e.beginPath();e.translate(n,i);e.rotate(o);e.font=r["font-size"]+"px "+r["font-family"];return e};var Pt=function t(c,h,d,v,p,g,e,r){if(p>g){var n=p;p=g;g=n}e=e%(Math.PI*2);if(r>=Math.PI*1.999999||r<=-Math.PI*1.999999){r=Math.PI*2}else{r=r%(Math.PI*2)}Et(e,r,d,v,p,g,function(t,e,r,n,i,o,a,f,u,l,s){if(s<0)s=-s;c.beginPath();c.moveTo(r,n);c.arc(d,v,p,t,e,false);if(h["arc-end-cap"]=="round")c.arc((a+u)*.5,(f+l)*.5,s,e-Math.PI,e,true);else if(h["arc-end-cap"]=="-round")c.arc((a+u)*.5,(f+l)*.5,s,e-Math.PI,e,false);else c.lineTo(u,l);c.arc(d,v,g,e,t,true);if(h["arc-start-cap"]=="round")c.arc((r+i)*.5,(n+o)*.5,s,t,t-Math.PI,true);else if(h["arc-start-cap"]=="-round")c.arc((r+i)*.5,(n+o)*.5,s,t,t-Math.PI,false);else c.lineTo(r,n)});if(h["arc-start-cap"]=="butt")c.closePath();return c};var St=function t(e,r,n,i){e.beginPath();e.moveTo(r+i,n);e.arc(r,n,i,0,Math.PI*2);return e};var At=function t(e,r,n,i,o){e.beginPath();e.rect(r,n,i,o);return e};var Lt=function t(e,r,n,i,o){var a=e.createLinearGradient(r,n,i,o);var f={value:function t(){return a},addColorStop:function t(e,r){a.addColorStop(e,r);return f}};return f};var Nt=function t(e,r,n,i){var o=e.createRadialGradient(r,n,0,r,n,i);var a={value:function t(){return o},addColorStop:function t(e,r){o.addColorStop(e,r);return a}};return a};function It(s,t){var c=s.getContext("2d");var e=s.__image2D__layer__=="yes";var r=e?s.getAttribute("width"):s.clientWidth,n=e?s.getAttribute("height"):s.clientHeight;if(r==0||n==0){if(!t)console.warn("Canvas is hidden or size is zero!");if(s.__image2D__noLayer_getSize__=="yes"){r=s.width/2;n=s.height/2}else{r=s.width;n=s.height;s.__image2D__noLayer_getSize__="yes"}}s.style.width=r+"px";s.style.height=n+"px";s.setAttribute("width",r*2);s.setAttribute("height",n*2);c.scale(2,2);c.textBaseline="middle";c.textAlign="left";var f={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"};var i=function t(e,r){if(e=="lineDash"){try{c.setLineDash(r)}catch(t){console.error(t)}}else if(f[e]){f[e]=r}else{c[e]=r}};var h={config:function t(){if(arguments.length===1){if(_typeof(arguments[0])!=="object")return c[arguments[0]];for(var e in arguments[0]){i(e,arguments[0][e])}}else if(arguments.length===2){i(arguments[0],arguments[1])}return h},fillText:function t(e,r,n,i){c.save();Ct(c,f,r,n,i||0).fillText(e,0,0);c.restore();return h},strokeText:function t(e,r,n,i){c.save();Ct(c,f,r,n,i||0).strokeText(e,0,0);c.restore();return h},fullText:function t(e,r,n,i){c.save();Ct(c,f,r,n,i||0);c.fillText(e,0,0);c.strokeText(e,0,0);c.restore();return h},beginPath:function t(){c.beginPath();return h},closePath:function t(){c.closePath();return h},moveTo:function t(e,r){c.moveTo(e,r);return h},lineTo:function t(e,r){c.lineTo(e,r);return h},arc:function t(e,r,n,i,o){c.arc(e,r,n,i,i+o,o<0);return h},fill:function t(){c.fill();return h},stroke:function t(){c.stroke();return h},full:function t(){c.fill();c.stroke();return h},save:function t(){c.save();return h},restore:function t(){c.restore();return h},quadraticCurveTo:function t(e,r,n,i){c.quadraticCurveTo(e,r,n,i);return h},bezierCurveTo:function t(e,r,n,i,o,a){c.bezierCurveTo(e,r,n,i,o,a);return h},clearRect:function t(e,r,n,i){c.clearRect(e||0,r||0,n||s.getAttribute("width")/2,i||s.getAttribute("height")/2);return h},toDataURL:function t(){return s.toDataURL()},drawImage:function t(e,r,n,i,o,a,f,u,l){r=r||0;n=n||0;a=a||0;f=f||0;u=u?u*2:s.getAttribute("width");l=l?l*2:s.getAttribute("height");if(e.nodeName=="CANVAS"){u=u/2;l=l/2;i=i?i*2:s.getAttribute("width");o=o?o*2:s.getAttribute("height")}else{i=(i||e.width)*2;o=(o||e.height)*2}c.drawImage(e,r,n,i,o,a,f,u,l);return h},fillArc:function t(e,r,n,i,o,a){Pt(c,f,e,r,n,i,o,a).fill();return h},strokeArc:function t(e,r,n,i,o,a){Pt(c,f,e,r,n,i,o,a).stroke();return h},fullArc:function t(e,r,n,i,o,a){Pt(c,f,e,r,n,i,o,a);c.fill();c.stroke();return h},fillCircle:function t(e,r,n){St(c,e,r,n).fill();return h},strokeCircle:function t(e,r,n){St(c,e,r,n).stroke();return h},fullCircle:function t(e,r,n){St(c,e,r,n);c.fill();c.stroke();return h},fillRect:function t(e,r,n,i){At(c,e,r,n,i).fill();return h},strokeRect:function t(e,r,n,i){At(c,e,r,n,i).stroke();return h},fullRect:function t(e,r,n,i){At(c,e,r,n,i);c.fill();c.stroke();return h},createLinearGradient:function t(e,r,n,i){return Lt(c,e,r,n,i)},createRadialGradient:function t(e,r,n){return Nt(c,e,r,n)},translate:function t(e,r){c.translate(e,r);return h},rotate:function t(e){c.rotate(e);return h},scale:function t(e,r){r=r||e;c.scale(e,r);return h}};return h}function jt(t,e){if(t==="textAlign"){return{left:"start",right:"end",center:"middle"}[e]||e}return e}var Dt=function t(e,r,n,i,o){if(!e||e.length<=0||e[0].nodeName.toLowerCase()!=="text")throw new Error("Need a <text> !");o=o%(Math.PI*2);e.attr("dy",{top:r["font-size"]*.5,middle:0,bottom:-r["font-size"]*.5}[r.textBaseline]).css({"text-anchor":r.textAlign,"dominant-baseline":"central","font-size":r["font-size"]+"px","font-family":r["font-family"]}).attr({x:n,y:i});return{transform:"rotate("+o*180/Math.PI+","+n+","+i+")"}};var Rt=function t(d,v,e,r,p,g,n,i){if(!d||d.length<=0||d[0].nodeName.toLowerCase()!=="path")throw new Error("Need a <path> !");n=n%(Math.PI*2);if(p>g){var o=p;p=g;g=o}if(i>=Math.PI*1.999999||i<=-Math.PI*1.999999){i=Math.PI*1.999999}else{i=i%(Math.PI*2)}Et(n,i,e,r,p,g,function(t,e,r,n,i,o,a,f,u,l,s){var c=e-t>Math.PI?1:0,h="M"+r+" "+n;if(s<0)s=-s;h+="A"+p+" "+p+" 0 "+c+" 1 "+a+" "+f;if(v["arc-end-cap"]=="round")h+="A"+s+" "+s+" "+" 0 1 0 "+u+" "+l;else if(v["arc-end-cap"]=="-round")h+="A"+s+" "+s+" "+" 0 1 1 "+u+" "+l;else h+="L"+u+" "+l;h+="A"+g+" "+g+" 0 "+c+" 0 "+i+" "+o;if(v["arc-start-cap"]=="round")h+="A"+s+" "+s+" "+" 0 1 0 "+r+" "+n;else if(v["arc-start-cap"]=="-round")h+="A"+s+" "+s+" "+" 0 1 1 "+r+" "+n;else h+="L"+r+" "+n;if(v["arc-start-cap"]=="butt")h+="Z";d.attr("d",h)});return d};var Ft=function t(e,r,n,i){if(!e||e.length<=0||e[0].nodeName.toLowerCase()!=="circle")throw new Error("Need a <circle> !");e.attr({cx:r,cy:n,r:i});return e};var zt=function t(e,r){if(!e||e.length<=0||e[0].nodeName.toLowerCase()!=="path")throw new Error("Need a <path> !");e.attr("d",r);return e};var Ht=function t(e,r,n,i,o){if(!e||e.length<=0||e[0].nodeName.toLowerCase()!=="rect")throw new Error("Need a <rect> !");if(o<0){o*=-1;n-=o}if(i<0){i*=-1;r-=i}e.attr({x:r,y:n,width:i,height:o});return e};var Bt=function t(e){var r=e.getElementsByTagName("defs");if(r.length<=0){r=[k("<defs>","SVG")];e.appendChild(r[0])}return r[0]};var Ot=function t(e,r,n,i,o,a){var f=Bt(r);var u="image2D-lg-"+(new Date).valueOf()+"-"+Math.random();var l=k('<linearGradient id="'+u+'" x1="'+n+'%" y1="'+i+'%" x2="'+o+'%" y2="'+a+'%"></linearGradient>');f.appendChild(l);var s={value:function t(){return"url(#"+u+")"},addColorStop:function t(e,r){l.appendChild(k('<stop offset="'+e*100+'%" style="stop-color:'+r+';" />'));return s}};return s};var Wt=function t(e,r,n,i,o){var a=Bt(r);var f="image2D-rg-"+(new Date).valueOf()+"-"+Math.random();var u=k('<radialGradient id="'+f+'" cx="'+n+'%" cy="'+i+'%" r="'+o+'%"></radialGradient>');a.appendChild(u);var l={value:function t(){return"url(#"+f+")"},addColorStop:function t(e,r){u.appendChild(k('<stop offset="'+e*100+'%" style="stop-color:'+r+';" />'));return l}};return l};function Gt(o,t){var f=void 0;if(t)f=T(t,o);var u={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt",lineDash:[]};var l="",s=[];var e=[],c="";var h={config:function t(){if(arguments.length===1){if(_typeof(arguments[0])!=="object")return u[arguments[0]];for(var e in arguments[0]){u[e]=jt(e,arguments[0][e])}}else if(arguments.length===2)u[arguments[0]]=jt(arguments[0],arguments[1]);return h},bind:function t(e){f=T(e,o);return h},appendTo:function t(e){f.appendTo(e||o,o);return h},prependTo:function t(e){f.prependTo(e||o,o);return h},afterTo:function t(e){f.afterTo(e||o,o);return h},beforeTo:function t(e){f.beforeTo(e||o,o);return h},beginPath:function t(){l="";s=[];return h},closePath:function t(){l+="Z";return h},moveTo:function t(e,r){l+="M"+e+" "+r;s=[e,r];return h},lineTo:function t(e,r){l+=(l==""?"M":"L")+e+" "+r;s=[e,r];return h},arc:function t(e,r,n,i,o){var a=M(e,r,i,e+n,r);var f=M(e,r,i+o,e+n,r);i=i/Math.PI*180;o=o/Math.PI*180;if(l==""){l+="M"+a[0]+","+a[1]}else if(a[0]!=s[0]||a[1]!=s[1]){l+="L"+a[0]+","+a[1]}l+="A"+n+","+n+" 0 "+(o>180||o<-180?1:0)+","+(o>0?1:0)+" "+f[0]+","+f[1];return h},fill:function t(){zt(f,l).attr("transform",c).attr("fill",u.fillStyle);return h},stroke:function t(){zt(f,l).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:"none","stroke-dasharray":u.lineDash.join(",")});return h},full:function t(){zt(f,l).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:u.fillStyle,"stroke-dasharray":u.lineDash.join(",")});return h},save:function t(){e.push(c);return h},restore:function t(){if(e.length>0)c=e.pop();return h},quadraticCurveTo:function t(e,r,n,i){l+="Q"+e+" "+r+","+n+" "+i;return h},bezierCurveTo:function t(e,r,n,i,o,a){l+="C"+e+" "+r+","+n+" "+i+","+o+" "+a;return h},fillText:function t(e,r,n,i){var o=Dt(f,u,r,n,i||0);f.attr("transform",c+o.transform).attr("fill",u.fillStyle)[0].textContent=e;return h},strokeText:function t(e,r,n,i){var o=Dt(f,u,r,n,i||0);f.attr("transform",c+o.transform).attr({stroke:u.strokeStyle,fill:"none","stroke-dasharray":u.lineDash.join(",")})[0].textContent=e;return h},fullText:function t(e,r,n,i){var o=Dt(f,u,r,n,i||0);f.attr("transform",c+o.transform).attr({stroke:u.strokeStyle,fill:u.fillStyle,"stroke-dasharray":u.lineDash.join(",")})[0].textContent=e;return h},fillArc:function t(e,r,n,i,o,a){Rt(f,u,e,r,n,i,o,a).attr("transform",c).attr("fill",u.fillStyle);return h},strokeArc:function t(e,r,n,i,o,a){Rt(f,u,e,r,n,i,o,a).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:"none","stroke-dasharray":u.lineDash.join(",")});return h},fullArc:function t(e,r,n,i,o,a){Rt(f,u,e,r,n,i,o,a).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:u.fillStyle,"stroke-dasharray":u.lineDash.join(",")});return h},fillCircle:function t(e,r,n){Ft(f,e,r,n).attr("transform",c).attr("fill",u.fillStyle);return h},strokeCircle:function t(e,r,n){Ft(f,e,r,n).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:"none","stroke-dasharray":u.lineDash.join(",")});return h},fullCircle:function t(e,r,n){Ft(f,e,r,n).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:u.fillStyle,"stroke-dasharray":u.lineDash.join(",")});return h},fillRect:function t(e,r,n,i){Ht(f,e,r,n,i).attr("transform",c).attr("fill",u.fillStyle);return h},strokeRect:function t(e,r,n,i){Ht(f,e,r,n,i).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:"none","stroke-dasharray":u.lineDash.join(",")});return h},fullRect:function t(e,r,n,i){Ht(f,e,r,n,i).attr("transform",c).attr({"stroke-width":u.lineWidth,stroke:u.strokeStyle,fill:u.fillStyle,"stroke-dasharray":u.lineDash.join(",")});return h},createLinearGradient:function t(e,r,n,i){return Ot(f,o,e,r,n,i)},createRadialGradient:function t(e,r,n){return Wt(f,o,e,r,n)},translate:function t(e,r){c+=" translate("+e+","+r+")";return h},rotate:function t(e){e=e%(Math.PI*2);c+=" rotate("+e/Math.PI*180+")";return h},scale:function t(e,r){r=r||e;c+=" scale("+e+","+r+")";return h}};return h}function $t(){if(!_(this[0]))throw new Error("Target empty!");var t=this[0],e=t.nodeName.toLowerCase();if(e==="canvas")return It(t,arguments[0]);if(e==="svg")return Gt(t,arguments[0]);throw new Error("Painter is not a function!")}function Vt(){if(!_(this[0]))throw new Error("Target empty!");if(this[0].nodeName.toLowerCase()!=="canvas")throw new Error("Layer is not a function!");var r=this.painter(),n={},i=[];var o=this[0].clientWidth,a=this[0].clientHeight;var f={painter:function t(e){if(!n[e]){n[e]={visible:true};n[e].canvas=document.createElement("canvas");n[e].canvas.setAttribute("width",o);n[e].canvas.setAttribute("height",a);n[e].canvas.__image2D__layer__="yes";n[e].painter=T(n[e].canvas).painter();i.push(e)}return n[e].painter},delete:function t(e){for(var r=0;r<i.length;r++){if(i[r]===e){i.splice(r,1);break}}delete n[e];return f},update:function t(){r.clearRect(0,0,o,a);r.save();for(var e=0;e<i.length;e++){if(n[i[e]].visible)r.drawImage(n[i[e]].canvas,0,0,o,a,0,0,o,a)}r.restore();return f},hidden:function t(e){n[e].visible=false;return f},show:function t(e){n[e].visible=true;return f}};return f}T.extend({treeLayout:S,pieLayout:A,Matrix4:R,rotate:M,move:E,scale:C,dot:P,animation:$,cardinal:V,formatColor:U,getRandomColors:X,getLoopColors:Y,stopPropagation:K,preventDefault:tt,map:at,ruler:ut});T.prototype.extend({appendTo:lt,prependTo:st,afterTo:ct,beforeTo:ht,remove:dt,filter:vt,text:pt,html:gt,size:wt,css:yt,attr:bt,datum:xt,data:_t,enter:kt,exit:Tt,loop:Mt,bind:Z,unbind:Q,position:J,painter:$t,layer:Vt});T.fn=T.prototype;if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=T}else{var qt=window.image2D,Ut=window.$$;T.noConflict=function(t){if(window.$$===T){window.$$=Ut}if(t&&window.image2D===T){window.image2D=qt}return T};window.image2D=window.$$=T}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/arith-js/matrix.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 矩阵运算
 * https://github.com/lab-contrib/arith-js/blob/master/matrix.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isArray=__etcpack__scope_args__.isArray;


__etcpack__scope_bundle__.default= function (initMatrix) {

    var copyArray2 = function (input) {
        var _copyMatrix = [], row, col;
        for (row = 0; row < input.length; row++) {
            _copyMatrix[row] = [];
            for (col = 0; col < input[row].length; col++) {
                _copyMatrix[row][col] = input[row][col];
            }
        }
        return _copyMatrix;
    };

    var toValue = function (input) {
        return copyArray2(isArray(input) ? input : input.value());
    };

    var _matrix = toValue(initMatrix);

    var matrixObj = {

        // 矩阵的值
        "value": function () {
            return _matrix;
        },

        // 矩阵相乘
        "multiply": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            if (_matrix[0].length != _newMatrix.length) {
                throw new Error("Not a matrix that can be multiplied：A(" + _matrix.length + "," + _matrix[0].length + ")*B(" + _newMatrix.length + "," + _newMatrix[0].length + ")");
            }

            var _temp = [], row, col, index;

            // 一行行
            for (row = 0; row < _matrix.length; row++) {
                _temp[row] = [];

                // 一列列
                for (col = 0; col < _newMatrix[0].length; col++) {
                    _temp[row][col] = 0;

                    for (index = 0; index < _newMatrix.length; index++) {
                        _temp[row][col] += (_matrix[row][index] * _newMatrix[index][col]);
                    }

                }

            }
            _matrix = _temp;

            return matrixObj;
        },

        // 矩阵点乘
        "dot": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] *= _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 矩阵减
        "minus": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] -= _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 矩阵加
        "add": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] += _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 转置
        "T": function () {

            var _temp = [], row, col;
            for (row = 0; row < _matrix[0].length; row++) {
                _temp[row] = [];
                for (col = 0; col < _matrix.length; col++) {
                    _temp[row][col] = _matrix[col][row];
                }
            }
            _matrix = _temp;

            return matrixObj;
        }

    };

    return matrixObj;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/arith-js/sigmoid.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * sigmoid激活函数
 * https://github.com/lab-contrib/arith-js/blob/master/sigmoid.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isArray=__etcpack__scope_args__.isArray;


var sigmoid = function (x) {
    return 1 / (1 + Math.exp(-1 * x));
}

__etcpack__scope_bundle__.default= function (x) {

    // 如果是数组，表示多值
    if (isArray(x)) {
        var _temp = [], i, j;

        // 二维数组
        if (isArray(x[0])) {
            for (i = 0; i < x.length; i++) {
                _temp[i] = [];
                for (j = 0; j < x[i].length; j++) {
                    _temp[i][j] = sigmoid(x[i][j]);
                }
            }
        }

        // 一维数组
        else {
            for (i = 0; i < x.length; i++) {
                _temp.push(sigmoid(x[i]));
            }
        }

        return _temp;
    }

    // 否则就一个值
    else {
        return sigmoid(x);
    }

};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/weights.json
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {"weight1":[[-0.15794825366093734,0.2651654130213412,-0.24794872618814434,0.6570146285618113,0.959382368802522,-0.32763541418499553,0.10758617622270084,0.31922470315975593,-0.5092761257797038,-0.9146018951349664,0.23176256714268462,0.1421017697579412,0.5951797400662029,0.6239894793850675,-0.5893151244330141,-0.8154287515797702],[-0.7606758497880675,-0.2202300030705837,0.38123006898137524,0.37173187415152276,0.24905264444612207,0.6987745547865556,0.7065927059157753,-0.43719475433019594,-0.11787035821738456,0.5435821986451792,0.4566304823929763,0.16800568476830202,-0.8621959105933512,-0.622883390257857,-0.2565351735720318,0.27577943739032174],[-0.5695844186020209,-0.4496434161802436,0.8139547345139935,0.12220290487200813,-0.08923314220824796,0.1104103224999311,0.19370398157788937,0.11369433291526265,0.9982368736562126,-0.2928156444739307,0.09725932143034832,0.2482534136555299,-0.6405372044870994,0.7888992626643963,-0.7848401503198348,0.18045888134571975],[0.10344028629633462,0.020595215748909546,0.9958863117731371,0.8433238474311957,0.07307114993940234,0.7738882318611839,-0.8258577621350041,0.49861676486889595,0.9843600582360086,0.17263265346214096,0.289799644609094,0.8417303196519605,0.6625525005341109,0.7595503016336052,-0.8884338776637972,0.36759072583841057],[-0.449789041997271,-0.5376986756089388,-0.4746713056369134,-0.8844341124798789,0.37754988450819216,-0.36412741244823144,0.14342104217266582,0.652031436833548,0.9054722066829441,-0.3327850196943154,-0.8298834084708102,0.2185613767682697,0.3677089523366939,-0.8823041357374302,0.6570705064625151,-0.8040760139768017],[-0.5596821407567631,0.7384264467275048,-0.766625170567313,-0.6722862919228243,0.8713984150831142,0.4892572098357215,-0.4385275628574479,-0.931416286597432,0.6787766460149305,0.6353433276235578,0.8649928355912246,-0.29209055987981314,-0.5569406630724814,0.502766998893883,0.8788292487789424,0.31530108347942987],[-0.07026977915675658,0.1351207029706849,0.505894696847911,0.34200906222511396,-0.23094247889974895,0.2549875761233684,-0.5042591116831194,-0.22012591732471964,-0.27788233683915164,-0.7257463665225425,-0.5666028782240304,0.22385133129164814,-0.17908435799037958,-0.49745566592970336,-0.42496362249126785,-0.4909416950494605],[0.26670090348257647,0.3842027952429814,-0.2788600183536296,-0.6307831386735772,0.6067273008126777,-0.15225897877114924,0.8623913072860381,0.6924496537626577,-0.8912286207313822,-0.9357650601642171,0.9864902455071389,0.4817276707205713,0.35133860919642323,-0.014398947846344434,0.9514692231071269,0.12518026669649496],[-0.28656792353708793,-0.6355975582479738,-0.7440148990675741,0.7944564631329096,-0.8519411463955135,-0.49734956856430745,-0.9621731429837559,-0.9265052546643475,-0.28785959761932745,-0.735748421757366,0.6100134149938059,-0.19391428593480553,0.7877457867642246,-0.16707541664050618,0.986132488063256,-0.6454775987498897],[0.6716988148517689,-0.9041631325422528,-0.6394395906504426,-0.34200943414294027,-0.33781309531547876,-0.5290791422717032,-0.6703287933807061,0.9158310622894992,0.07698639372219862,0.7039207583054354,0.4990136438251498,-0.45102235348380626,0.2664097207689613,0.5301287542329294,0.5374688254997206,-0.3973786139896993],[0.3551519258060045,-0.09674034660065489,-0.2757030703426011,0.1094180654426804,0.5650842440097255,0.06535263176416972,0.04042190792637257,0.9101228649345141,-0.43650478734786313,0.8130191157657558,-0.7493287323588622,0.5969343226634245,-0.16100560957428867,0.6099844957929048,-0.6653965565936875,-0.7250838801567148],[-0.03729022772250046,0.3432178384564759,0.7310593251884163,0.6256662964887556,0.7044086080732943,0.14937033609497474,-0.49608897258960116,0.04502757486497888,-0.19836696624103256,-0.8280344108567066,0.19148419062428257,-0.6691959753226788,-0.04389124297869662,0.8823861188871489,-0.07983899178972331,-0.5777638673379593],[-0.3771208858146866,-0.7577964231213055,0.6183721121524144,0.5180108718634795,0.3998858316610505,0.5169183493526734,-0.8493112602267217,0.17790538785026788,0.11284567042330762,-0.022657061294947933,0.6805618148826968,-0.9461191474658661,-0.275625097328672,0.31295107521570165,-0.8504805792267796,0.01591067867670093],[0.10811283903881286,-0.8289494270174531,-0.647016595013675,-0.5911357285230401,-0.9948365447849605,0.6187190970474266,-0.39456855980919814,0.4094181565286825,-0.3148222727084464,0.43646963317033816,-0.18403231342365745,-0.9902520491137667,-0.9224087292077914,0.9057424024165481,-0.3127203751595671,-0.7275265390357828],[0.29691811194785256,-0.2725658770730597,-0.33792574737431647,-0.32430115354102096,-0.5870890113517224,-0.11122558695061491,-0.9913231693011495,0.8116685368439662,-0.7045708269270197,0.5863201704076695,-0.3152986229682466,0.18286348483748593,0.7682655179914857,0.871685172132171,0.41135686019957296,-0.3840422426449117],[-0.25935586845316694,-0.9674532225447008,0.9180270874888845,-0.22997127172262255,-0.3230922802285021,0.6090371550538314,-0.26046043078005177,-0.08587911132613568,0.09052625321275487,-0.9914371971413218,-0.3807633465124747,0.6634778033158066,0.5223573087247062,0.5118593794354211,0.4046034073182323,0.8403109551942256],[0.5971405585187117,-0.3879035361664305,0.7081409325552794,-0.6677756919692572,0.9032375847427518,-0.42749844457718345,0.2585675974917536,0.7007215488058511,0.6763014031774817,0.4468552377757069,0.8192247222174665,0.7426771065182391,0.021046330679136194,-0.6815472940122844,-0.8625846543430136,-0.6061034097839819],[-0.7397179578652731,-0.7892224697822661,0.6723046131814967,-0.8351393100508604,0.26203450804332995,0.8333347721293713,0.984229019712028,-0.9376656853888736,-0.6559069547405745,0.7391204735423225,0.04074799237062354,0.885260502794603,-0.4043423604681813,-0.39343430027255444,0.908468475411647,0.8771022052387467],[0.36485687899380626,0.7874206846950056,0.06424230546918785,0.12152549949393299,-0.748960934967756,0.8753930028783388,-0.26722561019036917,-0.3992221642931417,0.005139486419089234,-0.8438980880113811,-0.244753371949872,0.8118740513292941,-0.8192201700180926,-0.6396186659977756,0.19901624366484771,-0.17867878221678124],[0.5926430779639236,0.8968449385764377,-0.595026006200805,-0.9219136751372101,-0.1409043447409002,0.17536066703324238,-0.5295229482143622,0.4870095440296809,-0.43341784652419113,-0.4196313055202592,0.7006523268164266,-0.9583436039254973,0.2598184326045909,-0.08317498740663165,-0.6457490983766161,-0.5092474456677598],[-0.8605321722491279,0.19145177176030082,0.8335479236361532,-0.1649436719459625,0.8622759413478334,-0.6967194951811027,-0.28898392287332886,-0.9062527509645344,0.31014250899869955,-0.08115843514098176,-0.008591014163556121,-0.5184986080449914,0.854952259136919,0.23780758562077065,0.6832517724673597,-0.22192092741697156],[0.8354111593299902,0.6559251197751172,-0.463239791166298,-0.5383377854372977,-0.3409559317205981,-0.7879723418164088,0.5091506376185193,-0.908441348291527,-0.9199443453224143,0.26992240831764924,0.6119419102609878,-0.7230390760394232,-0.2419863826306452,0.2090911499353334,-0.013135308792692868,0.8169379346216621],[-0.8688896838264775,0.4385183457942463,-0.8020303978186876,-0.45053102901555686,0.047197782468437754,0.18405731750403964,0.24972118293031365,-0.7995812726486018,-0.7441197274551521,0.8083297890287953,-0.6433522905528442,-0.11025149077303142,0.2763035288958431,0.5084989253981838,-0.7064892576512953,-0.5282874471491068],[-0.12580240696330058,0.8673531380550794,-0.9958180185292229,0.6134469816806525,-0.15414079810902326,0.24475079549250722,0.266555861599417,0.8056988366161573,-0.3172588177419362,0.4547751047192845,-0.05542908077121078,0.8276245996761715,-0.003265397053410002,-0.8014641859819891,0.7787972738258686,-0.6895704590919403],[-0.6034621850063333,-0.8701578288682397,0.38066615434515416,-0.5927823593632819,0.4348462103492663,0.8482745728787844,-0.18614954960813934,0.45994359106109783,0.6286909603939717,0.7712758855141435,0.3325349318957005,-0.6075178439884197,0.8982847727271701,-0.7400596425723376,-0.30165897788509977,0.02477335469116504],[0.8347619032208442,0.3520397590369959,0.7054523505311332,0.05801533179625196,-0.021989315697025003,-0.43857461435692535,-0.972558444887623,0.31288717344956707,0.8624628241336834,-0.7607344754146239,-0.6863236791555507,-0.8893303343330072,0.5399906365878024,-0.4552370174254321,-0.05681849259858884,0.7583930157851992],[-0.28111725516926134,0.9967616223834761,-0.27957296403802445,0.5672083899590974,0.2925713526712337,-0.4409329496301351,0.7534754300028701,-0.7030478697390015,0.16645105484807576,-0.5385383289623293,-0.8390107799624804,0.04634706153869583,-0.6493912361727361,0.8256199961895465,0.9696634349560478,0.9959676068240775],[0.7451107168816913,0.3824013628418954,0.45933647956895785,0.4278230042979878,-0.45461004062146904,-0.39246565214706663,0.6674785291654963,-0.8652442604520489,-0.7883138961309553,0.9317655539024408,0.9545648307095074,0.9616315276271434,-0.42574804209098804,0.8336752281836164,-0.9854303273243268,-0.189288723582147],[-0.14402404048330686,0.15929906901701862,-0.06895481154983729,-0.020937057102700773,-0.5991641942418733,-0.19173189120905798,-0.695625198255005,0.5787793505797567,0.9673128344008943,0.16910735180429493,-0.7525779140484219,0.6287935622486045,0.37678730481001477,-0.11401174852292151,-0.16992266902125808,0.9978959308242712],[-0.5690775786759854,0.6711123263962255,0.1594384821637327,-0.38381289009566677,0.0831824094733391,0.3535703208587,0.10356299080713383,0.8210768188341175,0.9796773430376486,0.3624653165255127,-0.9685479784169893,-0.7358523498546679,-0.841826630792224,0.6015868121185188,0.1075108842825836,0.7309743439057019],[0.9760581671622903,0.7201182817340892,-0.4829677614120529,-0.9452281957482414,-0.27573106289438964,-0.5535813844106765,-0.5426270075990014,0.9745690813929335,0.9579456417415328,-0.7908584802408063,0.4988072807911239,0.5145262226228753,0.5102290504583524,0.7485775642769914,0.538130725265376,0.7978851767875361],[0.8832604473530337,0.05431427234900088,0.7258860274033343,-0.6072262745716785,-0.05496559445904925,-0.2625312611133017,0.640268079383044,0.32839945480220134,-0.2310251951519966,0.9978995843501113,-0.7147720518223655,0.9765620602079927,0.0297664065826031,-0.2868401664583895,0.48409137636702404,0.3434720759139709],[0.7810585176615574,0.15519759233128072,0.8779205088346953,-0.9596923825636461,-0.6141131482300897,-0.5103204148991627,-0.9352629114868241,0.3795751393242366,0.12802485446410206,0.25911867791785426,-0.40931189542469104,-0.9924466812278268,0.7372333008739775,-0.2207143929921518,-0.16795186010547436,-0.555295897810649],[-0.7804440721270622,0.36179770037792824,-0.6561115697773561,-0.2214992326398324,-0.8216649652934862,-0.6294535751497183,-0.2518290519012383,0.1792349576538177,0.40886556858065504,-0.588544586622044,0.8186315076583872,0.8360794106508904,0.8313138276723846,-0.008160472293585297,0.3148975938756706,-0.04620535980366958],[-0.19452292727204012,0.6639544460352513,0.021093414480721773,0.6283153352698885,0.10960933272178197,-0.8470412958448716,0.38236741478135183,-0.7582073830196503,-0.16334825280742882,0.9382780920611395,0.4898238608033898,0.9873046213331134,-0.12875290270191586,-0.8441127518356546,-0.5987388350271776,-0.1860918323266203],[-0.8537620811061513,-0.04036450358166688,0.881043814721203,0.6677397186118514,-0.30131304560578664,-0.35199001533567476,-0.38438981275530093,-0.6102587749531754,0.24949714611603513,-0.6262418014390545,-0.9830787907597527,0.5207507455300693,-0.7991752985637466,0.3150571465987042,-0.43273425709360724,-0.491244403814731],[-0.292388360642752,0.36058715961110765,-0.8421895797076888,-0.28186300210954096,-0.6668197163479421,-0.18308088754301988,-0.5635262821630382,-0.8564140077806726,-0.6050054811043353,0.7807220844571714,0.15255791219149195,0.4570791226874249,0.5059342177299073,-0.18545816652034208,0.6043239588423628,-0.28651118437347156],[0.7069006678142205,0.4429834425529817,0.8480113877577184,-0.3297259789408531,-0.10644440806774158,-0.33487428488557613,0.055635840042008056,-0.2232607143755847,0.26134807337272337,-0.35213981480546996,-0.6654627683577168,-0.5289418059816451,0.6547207285924506,0.7977817148039446,-0.01686900106341449,-0.3361571289641052],[-0.5163757607496731,0.6988362524895182,-0.3286157385608659,-0.6169031284897084,-0.7376107522743367,-0.282614637806871,0.43780416465407734,-0.7988786749607311,0.9094146097204714,-0.44598038941491547,-0.896520197671097,-0.7675730380405894,-0.2850195658591699,0.003691381063710253,0.2716599639721009,-0.07032076617681149],[-0.37026059196299865,0.48865308697275633,-0.07318101012395806,-0.33454618135924097,-0.8862750111109463,0.4471471036055936,-0.6936505879103652,-0.5446768661417902,0.9176583067007731,0.6983728616977922,-0.9422187400453259,-0.4736972773802641,-0.56474913325318,-0.5388035030194769,0.370268735899137,0.14046550317300133],[0.38361317752578294,-0.9751619101934401,-0.16327480116776272,-0.6950463510705758,-0.1204866799427391,-0.8389944406203016,0.79178059223733,0.9765005235068038,0.1075726937272754,0.5173222302061746,0.49850867710634894,0.41878385132519824,0.717110590659428,0.306195208226693,0.4158439131033722,0.8264946898039347],[-0.7123075796845226,0.8105686109969641,-0.8731079518976985,0.15784892792485694,-0.35047511089043004,-0.1451109252133218,0.4597607893804079,0.07361492406990156,-0.7613553579477914,-0.1378870068651441,0.8575805696576264,0.30129555337815983,-0.5997122596839404,-0.8442517460653192,0.07166973687445122,0.5882962509602083],[-0.0568179536089346,0.654746383638126,-0.4080889516357762,0.7736056996829159,-0.6550928308733948,-0.8300280916676313,0.17963020419954123,0.08505392993153649,-0.1159326013148001,0.8072417048746989,0.7550572071898078,-0.8130121081149015,-0.026843179153467123,-0.8293248427516402,-0.3334373868089928,0.645439045579649],[0.046700479660451766,-0.17359966167485963,0.06309637816878944,0.7931900064714688,-0.1838123743212603,-0.17316057890253722,-0.7631277740115765,-0.19926212543708655,0.7970298809611784,0.7022219538691794,0.05767767925361822,0.4232973835211089,0.8834182623418436,-0.6835669430529214,0.6253831476200777,0.7406070588627491],[0.3101018708767742,0.8279382273309013,0.38998341526287295,-0.09334917728087477,-0.4543823001969787,0.6430785390969387,-0.3381646245765255,0.7414625511123285,-0.6724384690643403,0.7437754051707679,-0.12302839141419142,0.38343956915299415,0.8415797156506795,0.6641162779906167,0.07150595599576492,-0.40831372923789777],[0.4039043049859994,-0.6381743341937169,0.7177599130543402,0.8844490095292747,-0.5631701676167902,0.9367433052720626,0.39033280497532274,-0.6595972948592324,0.8520091692146807,-0.786173137129524,0.8549061075241906,-0.8014288103677041,-0.48613221407403984,-0.9062358544435036,0.003984165627894054,0.6926031896346951],[-0.5311345121360511,0.5941429516838412,0.5946755968653408,-0.06894338946436607,0.430821191606626,0.7422888568063524,0.7829305045936663,-0.5676493529350268,0.3285275636482692,-0.016141682204140917,0.8228064167340481,-0.27507834839036205,-0.9252556003234491,-0.9717437412807768,-0.5471577160264092,-0.7571787484939176],[-0.5701446366441094,0.9260201142988622,-0.3393791717934067,0.9234758207924068,-0.20189863017294263,-0.9153319347735192,0.8452993638811073,-0.4643753446451879,0.15664893080557984,-0.41879973290306216,0.8334510817921625,-0.9055372058745612,0.41060359982303085,-0.6232429662477936,-0.5935886644795048,0.6088072749034543],[0.658097650355256,0.24691770698971638,-0.5014079916598186,-0.17314176856213903,-0.38203833147843635,-0.17559950119624146,0.09573857008059372,0.593448205104143,-0.7919217673285126,0.5507977230761352,0.1669614999421487,0.5396341297779137,-0.9189411754039285,-0.854969533267115,-0.5588826830244615,-0.39007773532955126],[0.8249167501399279,0.5317402813505336,0.7491505019240905,-0.7424153731672534,0.6930320632294573,0.7363877650796891,-0.6707684576360426,0.5359948137728208,0.17155277290384596,-0.9209894282279452,-0.2875233247383986,0.9296974299325163,0.35238981355165144,0.450759622883647,-0.4184300016148512,0.8414628733586471],[-0.8101680935002786,0.7163467782388424,-0.6430108712062124,0.2892902670705002,0.9485334026373082,0.25982737278115575,-0.5658849629299998,0.8888636595404837,0.2961448167886509,-0.7002333528919165,0.6594975812949051,0.3215959920739495,0.7955736150797978,-0.7808088502459984,-0.7204125280737972,-0.8394717766937183],[0.08793466912492276,-0.13668490825482094,-0.32603723973282683,0.047179638221074516,0.12675172132953483,0.3834766514094885,0.3838225752612674,-0.2700091923887147,0.28263790205623973,-0.3182798194473557,0.5669584832994601,0.2873449875895133,0.754030835645652,0.3560914786936653,0.9047977316667621,0.6257044210331721],[0.24595545062457536,-0.456665048486244,-0.40590033774946566,0.4671606293828381,0.9926619611775545,-0.005586330266974304,0.43560510084657533,0.8183591665820158,-0.7004019085761208,-0.6430599956417207,0.9405722502183544,-0.5408806958562429,-0.5925507633658849,-0.6100339302454474,0.7305631267889621,-0.74288539914357],[-0.12120543691663199,-0.8351489849863989,0.2797192993180695,-0.9686015371097607,0.20183974328659016,0.14979602302613815,0.47740023572282997,-0.7128684418590536,-0.6373825746641879,-0.5785238152878045,0.6997796912136964,-0.7900817480463038,-0.6755478579607925,-0.21198526814783936,-0.4852414012649744,0.32321585377586537],[0.3172913194932212,0.47639792898815125,-0.20142258488213827,0.07713683235715862,0.8857972906332585,-0.7862962746120243,0.3580575659281551,-0.4181370763533203,0.2562528321367412,-0.2696419434698014,0.9575967855136742,-0.374197967391364,0.028463401992366855,-0.19252950987107686,-0.8827734179841893,0.18277239729410732],[0.7533818409240038,0.00202392720415423,-0.5403803931826361,-0.9252911330883724,0.8854801078111896,0.5588346116746656,0.7141289540741904,0.22217285691045952,0.020922368119684176,-0.6303352848167432,0.8875997926814083,0.7107934991029983,0.2294544486549106,0.7687989825414241,0.827887198708718,0.302336138799586],[-0.49971933864245965,0.7910067515304147,0.476684116020484,0.3882322102361151,0.890796898601542,0.4008617261259837,-0.0990578661695034,0.39241014621580117,0.9750168897638556,0.9567159903332465,0.9184539199017019,0.013354433990802939,0.15155074685851888,0.3287774853195473,-0.41922200923157815,-0.28430444389200016],[-0.9248146784279454,0.21221894880571046,0.008342999642919846,0.5736684383205835,0.2809815216296889,0.7521883350464691,0.9051398489799602,0.9292847862777518,0.4716529189256482,0.9420096150068193,-0.9471456389325286,-0.04453289125769189,-0.47359651333545605,0.6034848578981111,0.2729576050180187,0.004187806770312719],[-0.7217762452574932,0.24482708821506272,-0.7165738115519242,0.4762132241371937,-0.509999597402043,0.5439129544626393,0.037549614821565935,0.8502141661135401,-0.875356815836208,0.8137374027260487,0.4186256698202393,0.7954885293136895,-0.5584224678945717,-0.7797690020819843,0.6186177540651676,0.8770869107477446],[0.4069422590402927,0.5637189265876015,-0.40708083674817486,-0.7133112778492179,0.95346154772326,0.6254499095662296,0.39249744286995547,0.5572032084518712,-0.3557071321729568,-0.9026118280703104,-0.8743576276096281,-0.4712843002680369,0.9592229514310122,-0.763447367425639,-0.26345354804699417,-0.6322842994083695],[0.34754574881156897,-0.9526573308744264,-0.5228653928430727,0.2744275557252043,0.4849047960155617,-0.6533236043222868,0.8198648642270139,0.056644979802377815,-0.28633279641431564,0.5607424041929896,0.20050669201509885,-0.4046232529463363,0.16398912797206489,-0.022727334988308368,0.3713529765476502,-0.9030115912126022],[-0.714512698901959,0.9576756530070356,0.8837595423706794,0.3668097606625804,0.3408000361666428,0.2663973937361481,-0.4698850415995701,-0.7336667144381201,-0.3444664011283636,-0.8543604879092217,-0.2226588407534642,0.644611987609653,0.28579070178190413,-0.31271692930499695,0.9888711105996295,-0.741248003712176],[0.1316819929889781,0.19368771562095466,0.3730835093338336,-0.07165449683116965,0.3964198638304244,0.009147470126560364,-0.10207789999058736,0.8554959579059838,-0.2277371904703105,-0.36994078756507376,0.36272230378358916,-0.6445687229613326,0.9678753548668895,0.4557481825178935,-0.2510535433685721,0.09186301966415877],[0.4932750270112378,0.9247357274732595,0.3549976088641542,0.3568088920108905,0.6625978537318784,-0.3241283446800116,-0.3966026758474568,0.2920665134317266,0.6912787409013177,0.1862580578847206,-0.9545869133557856,-0.8026159896799454,0.15365280138602788,0.26710943211908544,-0.9939479368184467,-0.14764957135973855],[-0.5982156924387261,0.9212848208865316,0.2802148809403988,-0.07070156861359322,-0.3490079580859198,-0.3945256693958563,-0.4318014770645102,-0.9892013032393128,0.051256134483250726,0.7391720651181535,-0.7735332800718937,0.25316581318545817,-0.4381868881673108,0.5664928397614619,0.32966164252761665,0.6714550771375802],[0.5935847053580914,-0.8446593155001216,-0.791792449780488,0.10481083782647982,-0.4912755872889978,-0.6079726234528744,0.6602384221718371,0.5922713702338673,-0.7228617107449655,-0.9093013078281773,0.2088138334192231,-0.183221822917206,0.4676256868300328,0.7654619688902145,-0.5893441599839235,0.9000590204950396],[-0.9316432931410805,0.015427465038341026,-0.7065840542471067,0.5235515604319874,0.09228954963799962,-0.12031025412556806,0.7607145552426164,-0.6573785002184152,0.7855852079027033,0.7470870175961948,0.717191667188446,-0.3203863328600782,0.3123379152222827,0.9486508447815862,-0.24664515352166516,-0.6491647456680654],[0.5139552478673615,0.6228349531014965,-0.7184443078212439,-0.660558521042983,-0.007828368311827205,-0.5605842045505458,0.2907712198444097,-0.38632921546482546,0.19565354538064073,-0.79905395373093,-0.2230427528243002,0.030973428151338744,0.6482921116947606,0.8627468937903351,-0.9088751755311222,-0.7376378138328552],[-0.8326085424499583,-0.5658535031245782,-0.24088614821908472,0.5964762222784854,-0.25801922051097614,-0.7601548320850138,-0.43819593671985313,0.8979763199268258,-0.13967183695535335,0.14712144269820104,-0.9020989087744051,0.6656428085966901,-0.23918945263135205,-0.7421985672042841,0.9149014246896163,-0.6744241749083324],[0.09265454804515239,-0.5652292763454998,-0.3755118962511075,-0.06303261252797832,0.9458681951059074,-0.34470227629859984,0.10798815556388908,0.25519859659997035,0.5165507638833726,0.6409305788047157,-0.6413320917761927,-0.5931473263150417,-0.5190951484649231,0.7631919162148049,-0.13898856747256838,-0.21719362240624607],[-0.6585220976743087,0.28900073047653807,-0.5610790928813367,0.11684586308534461,-0.8271931104661228,0.8896935964419548,-0.6928833120615279,0.9952640922650793,0.8846893693213027,-0.3592340085968764,0.3621034746762386,0.27797350267488374,0.5769442953915682,-0.7921122453925484,0.2316756983154038,-0.5550559165123627],[-0.163159416720577,-0.491158944729603,-0.7425329584781277,-0.04813525824421738,-0.621366879592721,-0.8037311278793227,-0.1960939620106168,0.6300381863115163,-0.4439983503829241,-0.34324389358961716,0.909350849098816,0.20641141582356992,-0.4169337407803537,-0.004035309240989271,0.8646609442912494,-0.2929182543043729],[0.364182009664892,0.05543056093274945,0.3153313415570942,0.9311484921903173,0.46872255629635573,-0.29049823619396786,0.8376274202928107,-0.2895901398388627,-0.36726930630952426,-0.3837303473190232,0.07059612040020324,-0.9060662277670151,-0.7198034163358296,0.3181914159834802,-0.16016080966585244,-0.9306641117647043],[0.022496433234639568,0.4407704345275225,0.9482821858666921,-0.5697609278419167,-0.43780790872251485,0.9312321020602008,0.8900263916413955,0.43548099825846576,-0.4183292275787527,-0.9894654782814252,0.7393895588227983,0.43574128321531846,0.1037385204307193,-0.8364145323237135,0.7069740926726777,0.4586897978743032],[-0.8273633804029035,0.8247237850390383,0.5504143778088904,0.4642595244212382,0.4424664431631191,-0.6163117412258283,-0.5488465577321002,-0.7641274718816726,-0.20342129238932172,0.3002729096049692,0.9164805923001138,0.9242717376284189,-0.2611607633735371,-0.14240914108410152,0.5913212233270064,-0.4950313802419726],[0.7918661667835845,0.6933609221352861,-0.8593968931654032,0.36870727507239476,0.3185878005230043,0.8889498619815988,0.324927554092747,0.7831174697612289,-0.6856202133068519,-0.41154157433509386,0.9990037946860375,-0.9300423297326406,-0.7632467957207325,0.034200566679243316,0.9692972658554173,-0.48782200180560276],[0.4628801151216342,0.612496386229993,-0.5040663982396469,-0.8404588946463067,-0.30180372082582796,0.6304763830521067,0.5047112195431045,0.9819681473026423,-0.2625865011621169,-0.8844338235494473,-0.041290482391195926,0.5075580371037951,-0.21781543048715601,0.8423231385835681,-0.5353945002722247,-0.19739443988281735],[-0.25433635460579795,-0.8100213691539602,0.4734225233329443,0.8789766619820414,-0.20124169238708278,-0.4244897672110426,0.5965749954753212,-0.9651337848008881,-0.16598733988065018,0.597454461093637,-0.5502382226692601,-0.5693631740585801,0.5530576186874949,0.1946903255244492,-0.7784077502000324,0.017775065209320928],[0.9343701391568606,-0.3343445948156005,0.6395116927691218,0.1520583849390218,-0.09474988147030894,-0.8154866777193219,0.06453583763360538,0.38121442412184514,0.6493043709394359,-0.5283974711399408,0.22405515976694979,-0.2893075998616448,-0.3933638222660645,0.5330020966096778,-0.6986916819072198,-0.5426137818577095],[-0.4836215097371577,-0.3610906216021448,-0.7812974377265647,0.7285729865270474,0.043400350208071536,-0.09351392389968272,-0.4630556803186976,-0.7663464124000381,0.3623146928828822,-0.21569613374492835,0.8225555748709765,0.7557705469107758,0.8850023678508543,0.09584989933524657,-0.8138827282764294,0.4227366871566356],[0.5590801628001998,-0.44377472994755207,0.2804611058525892,-0.4794283747100887,0.7093802052867457,-0.23160791936958303,-0.10564809020410948,-0.5901264805943338,-0.7746445286722636,0.7314622300267395,0.918987084972311,0.31389105336101464,0.9745680402929899,0.4213201715567143,-0.4463157509001108,0.09381139202938948],[0.8755138468025314,-0.6523966040233788,-0.7106874050557921,-0.17611923812869001,0.5920471024757048,-0.7154096301456483,0.2586930531321521,0.6681183138463727,0.8894323159508599,-0.7714678709286633,0.8441145425454861,-0.18023810381797256,-0.23339869922448653,-0.2934846127279056,0.022992069373205304,0.0551255639303605],[-0.6092483475982609,0.8151060020291379,-0.4421490158764674,-0.5042217818292563,0.08386944483947856,-0.8620916265674157,-0.1136188707955208,-0.7724663039627151,-0.8991200025096497,0.8171276984571021,0.8515768139551927,-0.8385770160298991,0.10474001314139558,0.8109458666759073,-0.2897760418212685,0.44060159218656825],[0.13965402862737442,-0.21637575534867093,0.10518585970251948,0.7047908781590406,0.8532757111539189,0.8351576010786497,-0.06739391339232315,-0.12170745635196667,-0.666210608972067,0.7031699426703977,-0.09026205093382744,0.9269822471114764,-0.15850331504962556,0.08922602839811367,-0.6285083747331703,-0.002680812675884159],[-0.8700481792682764,0.3025064455424773,-0.9725487925130194,0.38287164664734696,0.7248042656731135,-0.5382596637430974,0.5094783668565959,-0.7872193147750295,0.27114021102224894,-0.8444052539924978,0.9235940644510308,-0.08256183496183445,0.4954703415172954,-0.02167088609517842,-0.36045942869385783,0.48150362192397766],[0.8778414988226495,0.7839614540718363,-0.2062302961714737,-0.2531879261762393,0.888102482658693,0.21986226935034958,0.059848765027890494,0.9729120498705242,0.33467669968348535,0.7161873708933291,-0.2597558053866691,0.9450536944043946,0.3089070336345898,-0.8927098933845374,-0.8592103196247822,-0.9020023167033151],[-0.6954318951382508,-0.3801554691739901,-0.746097495936469,0.17736005187720405,-0.8524301907179761,0.0736792210890731,0.5467608854589234,0.1616592035972162,-0.5329565009842363,-0.093863997123671,0.032146405578443726,-0.704700035810613,-0.7517090457601565,0.14473334751208045,0.19681765552542885,0.781872972509992],[-0.6896120657918359,0.9171476874466129,-0.40056809932291504,-0.8453508223578727,0.47952982975653047,0.680402153861182,-0.17996287112830744,0.1804585838419155,-0.7836191911570114,-0.08149123822320492,-0.7984062508402041,0.177193398536712,0.6619685551584413,0.15946479745732933,0.11679954652704483,-0.24436557839107342],[-0.3952734598530321,-0.5840408565773334,-0.8384658275588044,0.5563986065499464,-0.7389841200868967,-0.03374085016929218,-0.10895510688905663,0.9444346290569605,0.7197037552904861,-0.13925545400511563,0.02281551141787963,0.6297979916933056,-0.31012033463245814,0.1583853034153173,-0.35455855858994045,0.6750073588879721],[-0.3738651677336553,0.6863466069116284,0.5544901499772585,0.7227413185227802,-0.254158432548357,-0.0688493355600448,-0.8692085213056213,0.2133240670526626,-0.566427770489168,0.35307097528221565,-0.11546661382437229,-0.7641192057919244,-0.5524403245631011,0.0029565459991518495,0.17953304930391356,-0.204805028323213],[0.2757392679089832,0.9323850142376569,0.7763401784914037,0.963111385005631,-0.9394576254710398,-0.5743413469630805,0.5733113220430068,-0.6432295267463748,0.06161770519794585,-0.10002139817658229,-0.9384298443889509,-0.7794662929020304,0.918881161393486,0.5857479901684659,0.17855016304581683,-0.5881153562950496],[-0.46288230397457486,0.6270193161724995,0.7173736834111306,-0.11603796974891889,-0.2837810652778372,-0.44975413670629516,0.8116793578026065,0.21170836181587482,-0.42797345876059456,-0.01857145154482609,-0.47217405665811096,-0.021009620864132383,-0.0974644894955996,-0.23396553400136044,-0.6785547205428641,-0.43355941431421474],[-0.18389188451458294,-0.37162127060818584,-0.7162611221097013,-0.9174565089059286,-0.03463117283392547,0.7845000228107306,0.2960820739281216,-0.9938034403336475,0.6995531289419232,0.19088846555172845,-0.7976717129341737,0.28183845207201896,-0.320371885751229,-0.6056030387166307,0.23622250065522943,-0.39945200029786054],[0.05989893272962332,0.6268050924964932,-0.9597827617976726,0.11223586952525944,0.22364833191636002,-0.46352783745471404,0.806089698475303,0.7205468413753495,0.02178996229867325,-0.3941602525414263,0.5081663264930536,-0.8169356324603787,0.8738864005966662,-0.035594102209897116,0.4859996238931701,0.2755666729107853],[-0.2881962597145318,-0.056407808680952076,-0.5920841471042264,-0.040804574062417664,-0.14851566958106766,-0.012401006816759708,0.7023858534634302,0.4202358892816074,-0.36947816927096344,0.9247086226317096,0.5342253172167348,-0.6598295925976747,-0.8250989974163336,-0.025841890511462573,-0.32741898599115205,0.022894777620293016],[0.884050881322469,-0.5453905370441374,0.5528948436152525,-0.3519848156440504,0.7005787618534471,-0.3896644662544615,-0.7719250819566557,0.7196661375377582,-0.30893049262843997,0.5521290924174669,0.13567091479934756,0.3306939579980326,0.30338135162550994,0.41213171953000716,0.7372216696704603,-0.24195479266050057],[0.9766511558238395,-0.7058719229428236,0.24576575292380554,0.5612171860596802,0.1328126877801239,-0.12565321359118808,-0.7364642924460556,0.1626004823524645,0.6974390560587018,0.7340704355287171,-0.7273716569513078,-0.35414536509648986,0.11670565488084383,-0.19969589061162418,0.517397443509374,-0.4712438807896864],[-0.17364122688723338,-0.2714287124922543,-0.491656670729931,0.6217717712518094,-0.010738149142670128,0.03229527648384556,-0.0004781433879958996,0.03186809995589224,0.8168344678501853,-0.4541210743877433,0.5432921432497166,-0.7276676571407585,-0.8124692446430717,0.7208232643069166,-0.05430203927179855,0.694614050582472],[0.45664813703705587,0.37329931307650366,-0.5080978467099864,-0.27464561359825623,0.7174712959418872,-0.5454326298734014,-0.8709130422330262,0.6688084594834178,0.7652869568370151,-0.386554841962901,0.8791969716272043,-0.8126407470849113,-0.6659267417253463,0.26126923811104596,-0.14875080504017157,-0.07772356687292836],[-0.1759816524500022,0.6806230027391624,0.08708958817564527,0.5186146780424532,-0.5176557405160458,0.5926368721101531,0.7619405015204515,-0.9898876742534668,0.11779056477704941,-0.46583156843746476,-0.3595620144993492,0.9706029683393878,0.08389238219300577,0.5623494847509618,0.405308483775773,-0.35083647905496296],[-0.2706376761183922,-0.10707494985646271,-0.31453908171587885,0.8118521590828269,0.22303156262204338,0.8309010427774894,-0.05873392645332576,0.24740935633158978,0.9423432641731884,-0.697194514825938,-0.1147728719968093,0.3086583465901338,-0.4060827244245111,0.8396399030398385,-0.6341954379501313,-0.7955420319915101],[0.3069304411197882,0.12892798882322642,-0.3359385996949915,-0.9701710271827264,0.39076254252795284,0.1309805224529832,0.6585724265730892,-0.028250641256652553,-0.5561119159707646,0.06526370059041531,0.5971683235676171,-0.3021757328210488,-0.09562756970809216,0.8065752514447868,-0.17500853780538383,-0.2619574508976181],[-0.9229788200656834,-0.053513483589394006,-0.7199608505260517,-0.046195714820814526,-0.6901339307385559,0.1509620686316273,-0.5778232785426067,-0.15996746824692387,0.7735711918631298,0.3762746385029758,-0.07142397206153861,0.7926407191242091,0.5836609239776651,-0.9819302134558616,-0.566629648566229,0.5805644983457334],[0.20395240855623875,0.7481254484383744,0.20033523113387286,0.7021612222535869,0.7028657437308485,0.25856867531248096,0.2679094920372562,0.3621396245745552,-0.3008040586172118,-0.17182621626049466,0.00578324847176237,-0.7992055536604319,-0.33654527563167,-0.5219396497758719,-0.14745926392340092,-0.4270725014921086],[0.9430835992324824,-0.7163778171009962,-0.8765976846315451,0.0592605286067629,-0.34105161202632983,-0.9431128906806987,-0.4729635562771404,-0.7894147943819232,-0.8032385700542357,-0.3744599038809975,-0.31458279628286956,-0.8720075862638703,0.7828675843081316,0.8023863014675121,-0.8452973204663832,-0.5874918087329317],[-0.5688843576408256,0.15647687753044348,-0.021018774806364604,0.6317740022991862,-0.4076063872730207,-0.4340053019232708,-0.43041460655099373,0.5606738993611611,-0.31056813236842995,-0.5582207073782328,0.10009620756578963,0.33625581794329173,0.9697038790720796,-0.2531487862076154,-0.5872691652489359,0.6371571372834506],[-0.47993644346201547,0.5279472624411454,0.7686072321496282,-0.012707144320499797,0.10055472038425739,-0.6663172615553452,0.586107117521272,0.751015903030428,0.4585408136104876,-0.5649069723397049,0.6052091722065134,-0.000928754773866558,0.9297922305626161,-0.8490429858785977,0.01571021073086376,-0.5071748064186727],[-0.48873591757943435,0.2201616487418825,-0.3327034635337949,0.6550433883664128,-0.8674405605762363,-0.9494965622678961,-0.13298786386765382,-0.9255661060610993,0.6449121739170334,0.957055361518774,-0.2825645321562158,0.43771221611862865,0.02545079642575576,0.8164636676917896,-0.5135995545335552,-0.6007836108535449],[-0.1298326157064058,0.4492237594231203,0.6686327489593151,0.8435880019658155,-0.7623002230989435,0.5023181940116488,0.8253181497691084,-0.431977658201276,0.44532921171114026,0.8528116015838552,-0.07456633228565046,-0.32175760199387593,0.36670936488548733,-0.8249950574026546,-0.62629566410377,0.9165324688800598],[0.6997942953306304,-0.7448675516860161,-0.7433863041143067,0.3722337929857922,-0.3592255437058789,0.141741856486433,0.6587691497500354,0.06071680942714108,0.6874429028578857,0.9412926810614399,-0.5359999938876352,-0.3273547692178651,-0.31113548081373565,0.5845851347772246,0.8812650164549383,0.2662190422909032],[0.1593937340406799,0.36997213324981093,0.5583806003165099,-0.35707468314864466,-0.7570935393245284,-0.5453027566571063,0.025706684617974762,0.6721659744509321,-0.07133480569801165,-0.03397348947474166,0.6389746337142257,0.560675246332889,-0.41970435130149175,-0.2784989309967747,0.7877666827135936,-0.2713241821227266],[-0.8475502337548217,-0.9933952557692383,-0.5271198303806526,0.7654096760373554,0.3435689122628891,0.3292567433375342,0.45265453326124705,0.9473886290272535,-0.13199277251830788,0.6027532475766866,0.5316279886243795,-0.8863327431908372,0.23033078758401127,0.9821694924037221,0.65398328329788,-0.03890530296777506],[-0.7911201761371176,0.35442716824956255,-0.39668179038357776,0.35358030828581155,-0.33464581769030044,0.9141237860683842,0.8100774954968957,0.298075605728664,0.22644421218124533,-0.6124720468585347,0.18375378371256623,0.46394327049198747,0.03980175591799551,-0.7107093078188562,-0.42106892725322087,-0.16000580359180905],[-0.5686197069810657,-0.48925230109457685,-0.8191343830477549,-0.5014921635974328,0.18783180498319085,0.333827746563776,-0.31681790411456134,0.0046206688249816885,0.7381520360878246,-0.33484290930440297,-0.6567130976743987,-0.46163315118601744,-0.5282642063974943,-0.44074982487159,0.6412524374933124,0.9095872360489508],[-0.46953740192128146,-0.20797972109050322,-0.8957149573835128,-0.3797511687817856,0.2746216963115957,0.8625221272442829,0.8125297178092135,0.2401405804383705,0.5468510866743426,0.3843860425421335,0.5269753260051795,0.7402528938864767,-0.05645909396648019,-0.3328192351506316,0.3183721354130693,-0.6887123934048187],[0.18204309822375864,-0.11592608528564474,0.9017784791410106,0.781943416524292,-0.9529118375022954,0.4261303735957722,0.7341979569460793,0.00866482631900789,0.9309739282319645,-0.8865488835567517,0.43430550230769294,0.23869303578931778,-0.03905670149093732,0.3864935235674607,-0.6155331178488423,0.6577888321936576],[0.7006901165930692,-0.32773734059599535,-0.1601686731325267,-0.38996399622348044,0.5625455206438845,0.5787652246669466,0.2772745205156357,-0.04116795601124501,-0.8955352710552775,0.006100646350312822,-0.8296693336820113,-0.6013439539315035,0.6858677724407718,0.9229901013070907,0.43785157231326677,0.06337327342665766],[0.3132895455305462,-0.9903518844168273,0.21792535740438979,0.09326817203201587,0.5712329978520905,-0.29750010834784923,0.32955842731140583,-0.05587397971210928,-0.1321817060119561,0.03548254377913462,0.36003858367554953,-0.3457030119639879,0.5599034377343477,-0.42775181184042,-0.7147541846236471,0.6791388348927012],[-0.27854092586371637,-0.7016025366923739,0.9880858697597743,-0.521985555622372,-0.44824134748187694,0.2339255572257577,-0.18890124884191284,0.41742975944900884,0.7658925510074672,0.5434161600717333,-0.2486733722725174,0.2615244433841526,0.4237719694377078,0.5670983491624613,-0.4887432457457197,0.9545570498188702],[-0.9660018095587413,0.9475343294773304,-0.028956769639638225,-0.17847802104358435,0.33525747016109664,0.9449894979884035,0.5323165862283625,0.14576761284485462,-0.12650913626988292,0.38530952876185287,-0.6843226040103279,-0.24911595029169487,0.3421106075349196,-0.6420862916610273,0.22129347388274168,0.9843054530161552],[-0.3891666490309196,0.44220641089525525,0.45876676966628827,0.7911860713773295,-0.15662903705764153,-0.9059430335317717,-0.9594816241074637,-0.261992373202816,0.931104582235982,0.42895296192314936,-0.4822745290095205,0.7065635163596102,-0.1943771846906439,-0.8627551374978237,-0.5268241668867768,-0.67611479344033],[0.08290091107621356,-0.653478011765714,-0.5080879701417804,-0.6520978825713679,-0.011137622474214126,-0.9549028055095747,-0.6780950255828277,0.9123661147675617,-0.9397323482737594,-0.6432299922874734,-0.6751515832409463,0.11172045250294671,-0.6345878754583256,-0.565862514920676,-0.12777293572008208,-0.3320104948199707],[0.6314818663011597,0.1396126938429556,0.4599978885804128,-0.29455746574961195,0.06757340584788807,0.5648868332048282,-0.09385342609055058,0.25731327698059125,0.956641950995385,0.27739452674403076,0.9079326817503692,-0.26312827141576145,0.4237802292656214,0.4206832328026242,-0.3327058939631522,-0.42310937363465895],[-0.5103406588775679,-0.25663109835237297,-0.5721913955285287,0.8750087263930082,0.185984686992418,-0.9204858710158059,0.4058068227710807,0.4405233876302681,0.3852226090260271,0.3905000023879768,-0.6698185997429942,0.7213798239204787,-0.8140237612128072,-0.8808217599530077,0.9670493335266284,-0.04976640906435881],[-0.017609448115206927,-0.876710240280004,0.8810204292983945,0.030283328970187817,-0.9736679936906305,-0.6140847933879581,-0.26956380971563076,-0.766536368081443,-0.2618140886768816,0.23742338827652132,0.16037662755245208,0.619032328805329,0.9865471478416836,0.3673578784758358,0.38329383759021907,-0.6861395331550892],[0.8454242843063446,-0.13063534035794255,-0.8700452858335948,0.16198609338161862,-0.797937007836028,-0.4094036156378449,0.7159940096317223,0.4192314497929739,-0.8043855512332443,0.5839653966238845,-0.8247676437279345,-0.77430397253706,-0.698447663261148,-0.4632455121659964,0.22624373328526337,-0.289224026044252],[-0.0727277540154243,-0.2326204046147673,-0.6104147086579998,0.4559032709792201,-0.6991215524993044,-0.17526866003522912,-0.8125080234149271,0.8275443534501115,0.9309082117223784,0.07941116852025631,-0.7797144938366025,0.9305139491449683,0.8202238118543854,-0.3920859524873257,-0.00003269796605476216,0.6536688520782241],[-0.8351402941050439,-0.6507454123155836,-0.5444242917071382,-0.13822520462155774,-0.36918639705881295,-0.6682903575518293,0.8947061377637104,0.08589013112515209,-0.5296646912755829,0.8475151906849865,0.8763926330915464,0.6976971077708556,0.23773830295840703,-0.18255133972665716,-0.22803340478396628,0.8168251243199847],[-0.4798987505508161,-0.14937770758619484,0.4646121459514272,0.08088096768000952,0.9155313410524095,-0.3288926681978963,0.40989830031011154,0.8063695492682337,-0.3595304463730753,-0.3754568162961145,0.32486741954428355,-0.8276300575089071,0.0674779928748297,-0.9638808721904901,-0.7090481137811926,0.541815017321901],[-0.6404817566395735,-0.9146266265762764,0.3037477750625208,-0.8723946247710108,0.714392764279324,0.10540992613119515,-0.9829322508293239,-0.8358899109858169,0.0851415673211191,0.9252878218394334,0.7971583851732564,-0.541643102835597,-0.6574139674356045,0.05300750558058276,0.5106552655792127,0.6202193582091566],[0.07509959455145898,-0.6315490213791923,-0.9176021402457222,0.8092054745120101,0.7331679321361553,0.19630137404606796,0.8944601328316262,0.8006359461242685,-0.9346713755724574,0.9782190500471026,0.2358609245646086,-0.24862551393830312,0.9079022502260417,0.6543133928059697,-0.8490383134774899,-0.28792509835657265],[0.14587994931171622,-0.8624437227176456,0.13752915214558525,0.41100077759648235,0.20802706445672348,0.29740227029238353,0.7397951800390365,0.2468340166110674,-0.0006830107872026758,0.0843196909238948,0.11071669592978006,0.06820191103860518,-0.08863343092328968,0.8730957693064139,-0.6585980198963148,0.5703773623712238],[-0.6987022259733169,0.037962494906943256,0.3748359807720125,0.8621806553371458,0.4786086053441707,-0.13931054137402077,0.9100306398015956,0.8283544632985489,-0.8503160352531483,-0.25718196646071867,0.7158943634648613,-0.6896596820452419,-0.4257484175241899,0.05454871874617506,-0.2905818021820319,-0.09971459299538799],[-0.040380877303019425,0.7252461511983586,-0.4842627309119516,-0.4444203732636445,0.5282022417621506,0.007896190057724795,-0.2193374322287318,0.5092704629124878,-0.8033278622320648,0.5414171491795376,0.8767824586089299,-0.0038143890402517755,-0.32164124266511296,0.9878553963695849,-0.15080171443449375,-0.9471961073486108],[-0.6381849607023318,0.02875153267641961,-0.6826702305124854,0.9026654592989511,-0.15345627878856227,0.45621184045888263,0.4637642925459713,-0.5102438334949633,-0.7405358209701793,0.0646671277983133,-0.8248451360479763,0.5505596029853725,-0.9779129449741175,-0.4086955645880672,-0.018040846289061552,0.23270408421443545],[0.13826094734784178,0.23554100316511795,0.3750576373035033,0.5913383714768181,-0.04632401313879564,0.7196730205198754,0.7412613564439012,0.7836725476116819,0.0955008776782793,-0.983697553746532,0.018553983830552845,-0.6954902050069123,0.38940312475624417,-0.15336418575635724,0.680310497633358,-0.3302903334126248],[0.8812845643899094,-0.6321455385641066,-0.881728931345235,0.512152405195573,0.6303615849551991,-0.7709827307190089,-0.8441846686822689,-0.19113435488045916,0.19556878269018174,-0.7762968818324274,-0.5821731827992997,-0.8043987296388462,0.9536015600811618,-0.43591602592827705,-0.5691305351407299,0.34350295819792276],[0.7594159821950384,0.31424042859839263,-0.41666483538910537,-0.7730977538997568,0.7085610749911835,0.19832906020649954,0.0936417059735386,-0.7023872839979766,-0.30761981989825093,-0.6286892136526143,-0.042317377819602875,-0.47782156637981643,-0.9245860111957374,0.9656650283553825,-0.42773730027560486,-0.17898610634556356],[0.6460134858266025,-0.7024391613074594,-0.21312151837995508,-0.7337764792694719,-0.42421411062044534,-0.0933992567750419,-0.23986307070276291,0.4204494064546149,-0.051002340486650866,-0.6977846827100578,-0.5425704965778149,-0.02218404315161493,-0.9568218568933666,0.75570311404981,-0.9726822615942461,-0.7934894620726296],[0.14401329634258708,-0.9991789980729804,0.5399990895934019,0.742491031115708,-0.16638101577960285,0.5702100966629318,-0.8964491644516626,-0.0705865143867741,-0.6068057325821967,-0.6759203841487613,-0.47848144738845555,0.8014875773132917,0.30017256944267556,0.5298692017451327,0.6186126866971153,0.22501005250281336],[-0.2547481228381372,0.6462118038368043,0.5605622027787556,-0.32393735275168334,0.2336390136554587,-0.1506441460476502,0.632338555181656,-0.6990428913765618,0.15085396657716688,-0.29840375852903556,-0.9166794417812447,0.8742617932157168,-0.9425258915041805,0.35702020400689216,-0.8001254317470989,-0.5152832174907913],[-0.4730714811731578,-0.005370853318091839,-0.8224684795308894,-0.22750400469415855,0.5727414461719182,-0.19779400806767367,0.968677837506414,0.12987042758635026,0.3001369955342841,0.40152729075771054,-0.9193405812953586,0.5400201046470459,0.9165008608394647,-0.9181701595299372,0.04896938190494504,-0.7499278371692828],[-0.3761892527121331,-0.36035484260160855,-0.6338998816401777,-0.47227281652490793,0.3122221926682469,-0.5535376394412559,-0.266430911409532,-0.9163795873024219,-0.6131483550781778,0.2609273440549016,-0.7648361781762856,0.5233715749427774,-0.9598033784376403,-0.9924514822786654,0.8945276659708727,-0.3137915978534762],[-0.33907152600540513,0.5929548224996855,-0.9227999238164157,0.2733891913459767,0.02890304538809252,0.5206176973260286,-0.24879595523877063,-0.6605821755121073,0.8513189923737587,-0.6518271164004483,-0.16482122748976824,-0.6450182394768342,0.8874921110049905,-0.7257575989227116,-0.9934180208190857,0.37291253773757127],[0.40009885961842606,-0.7851226427282496,0.9285031244437141,-0.27679426801343787,0.20020442075895817,0.363822798839712,0.6303682100189971,0.3067714809228548,0.25708266255787793,-0.5641009356774376,0.036800879600156655,0.7238494007367393,0.6618915914225147,0.6130685269846259,0.08822025502415265,-0.4349470013976311],[0.10129578405130557,-0.995609816006159,-0.03514147552543889,-0.5656782867435002,0.13089033666808492,0.7603610214029022,-0.2836012447940339,-0.5056344218084421,0.6379243632039824,0.33546406409308327,-0.8774687154478538,-0.4157357368744803,-0.846059003079898,0.705526712539307,0.38802062749223243,-0.42982551164703287],[-0.664306681929451,0.491133418697264,-0.7097178240757209,0.014962697461713415,0.6850987556271368,0.2375056224323422,-0.4492103910610066,-0.5845859220318319,0.7933017221762269,-0.5813870679564372,0.47223816479467784,0.6533714181523389,0.9210022931827169,-0.034130485832916335,-0.3844652766877745,0.26258506342200416],[0.5401111044616225,0.28436845619629825,-0.9008735586378478,-0.5303627058919447,-0.20523778619867983,-0.7510654269902126,0.27009674250951754,0.808806265505055,0.6402188734169072,0.7548205469853602,0.5963721249526079,0.7715582382311879,0.06384412081246671,-0.07639190849068145,0.9973826424630143,-0.39738899032486685],[0.7132275736122288,-0.8766300324012791,0.33290448997771255,0.25719372551870223,-0.8524475551437962,-0.46699959431808113,-0.4202059772548895,0.26142576277415713,-0.46996743081697906,-0.7668984054760929,-0.9020059370642588,0.22867322164770426,-0.7307259780429349,-0.3117590414069638,0.25230684886776766,0.9149795684176308],[-0.6768348483213246,0.7554890329864422,-0.299924680140639,0.4998261503151048,-0.39790144656724863,0.4712879549058821,-0.6596026240628001,-1.0150627241422192,-0.7136473416555682,-0.626824368217774,0.0787778307622978,-0.08313749292027953,-0.054460384760238796,0.791754744617933,-0.15499663885690748,-0.7757990641110292],[0.21894919420660872,-0.959151984575627,0.8090289782573816,0.042497170334895175,0.49964398762542883,0.4953755856820767,0.1625159946676163,0.6987783393792908,0.3421527668357074,0.16601551271434617,0.4920141143174347,0.19363677526689113,-0.7489257759911565,-0.1361227821927984,0.1746682189961585,0.23389856102770923],[0.4697441096714908,-0.08323228447869889,-0.06582807668650509,-0.4594678014453018,-0.2108665038257488,-0.6063475993140185,-0.2710487828897028,0.3724099720858501,-0.35006063630737566,0.47821988662006343,0.6671600628864426,-0.6296529419676757,-0.4729445688584935,1.0716250327560504,0.7309032536809296,-0.12864595950343682],[0.7093731013835689,1.0118236887457541,-0.335051061815536,-0.013834302831501718,0.4850248026169092,0.929339043930343,0.10891121135488017,0.7305157711795386,0.11468735794532413,-0.5591539123759254,-0.11651236392804092,1.057427015801534,-0.1468000273779151,-0.04682023130098856,0.7819422075753434,0.4295807759804726],[1.005014246908057,-0.9916592592221548,0.1367385779220978,-0.965065398430855,-0.6907506750349829,-0.6238088721163715,0.4381624836638161,-0.3742285406699475,-0.8093591524355042,0.457859340178197,-0.35183640740556743,0.963441692600356,-0.045376382039781823,0.2554439249123132,-0.5816869393513823,-0.3614473105959465],[0.9267200408390242,-0.9533126513283664,-0.38371843020106716,0.6141677334986979,-0.9481124373424272,0.7988787542851132,-0.21667792892836438,-0.16107149083990757,-0.03330986610490744,0.879496056133439,-0.6468540092512152,-0.5573591586570167,-0.06497044936325828,-0.31609798985735943,0.7861734593341229,-0.6100483278396713],[0.4363809469856529,0.5260955269522338,0.5856503391686833,0.9661416278433583,0.0870795848341982,-0.264318998194688,-0.6763359319205551,-0.8849899150998883,-0.22533801943003082,0.9548933145963264,-0.6432143260302519,-0.6367343623446978,0.7025965826173705,0.2689488115552585,-0.2405704088458119,-0.24004838487296973],[-0.4127334353947747,-0.7368555017063425,0.3425347221679793,0.8456445692891679,-0.4478816973940738,0.28994752423229686,-0.23984133919928885,0.4989248472749046,0.8082104268368493,0.8648816851051819,0.4306842674547613,0.767680343093808,-0.016630134789767048,0.47523477979292306,0.7578234970981579,-0.39404772188633874],[0.41749217547362605,0.4693754361204694,-0.11180604172001818,-0.6219368001909333,-0.9898750180148084,-0.7948307586575862,0.26670640070494933,0.024994905407869528,-0.45106854352676784,0.5609495665311508,0.25430563186464594,-0.533463153087987,-0.9778977391029238,0.28211632137836773,0.23555641708198305,0.5470964873585662],[0.6614657757279856,0.09869852481470387,-0.19264763651994388,0.5267014881827228,0.15559177831020188,0.14392179523096393,0.2265173471275288,-0.16182794621367558,0.9623026965254291,-0.10226681590883269,-0.138554119011006,0.9532694580830925,-0.01717474168211508,0.13611700259764037,0.9476232732802377,0.36131471963124717],[-0.038044649797393415,0.18186289291031343,0.07576928085714485,-0.12741745890068135,-0.0836778699577101,0.12008967031521722,0.2547737011082569,-0.5478460582551681,0.4945543168050843,0.5109358502513084,-0.5688437734650984,-0.01505338375602383,-0.27035973567983085,0.5064263079726077,0.04775455190550115,0.7181133303284004],[-0.13980608824854723,0.025550848230219803,0.4892834015161842,-0.7247295092325845,0.7253857266840789,-0.37117584087422806,0.45693569522938926,-0.07048616094227889,0.028348996442326246,-0.06681096352815308,0.6706891367614909,0.8605669257695854,-0.690497848772976,0.6332547894737708,0.24613771687543284,-0.8423682799241421],[0.9422961354188617,0.8423161575378262,0.6695212786980131,-0.8556565827671414,0.6841340217317802,0.1478761052915738,-0.21492788102042493,-0.4725435477905817,0.7768639964592023,-0.9757858180279602,0.32417614114772286,-0.6507769759448969,0.6653304853389814,-0.7538247349728437,-0.5354204309548174,0.26081979795488497],[0.5719607650665268,-0.6738998276083068,0.64660482321105,-0.15947137688510393,0.6984122695295865,0.40145754960139834,0.42563506633593295,0.966073273395649,0.19914575357235575,0.3136023980986882,-0.9890656021896,-0.07566931930181076,-0.7407235297360879,-0.6121984954338813,0.14898026326140945,-0.6421762560501967],[-0.13326100988364198,0.6986953265245295,-0.3458974620791846,-0.10943294022165961,-0.22532266244875387,-0.9850454151284094,-0.2398805585362176,-0.8055895638979025,-0.241668439729124,-0.8835104786760613,0.02243064078750434,0.9059675929633206,-0.22297690588684338,-0.28586106382341736,0.2850615050460954,-0.13208232818737775],[0.06540123059474201,0.9727816238509566,0.0077311882283375155,0.40891499089098904,-0.4428347461101101,0.4625256733927534,-0.32612951645513677,0.36355954779722177,-0.5832171909819124,-0.7672260942782438,-0.9173772018335087,-0.6862620716549288,-0.6065361342374831,-0.935426218237136,0.7817871254500046,-0.49811323318941714],[0.08354620506629429,0.2531674904015615,-0.7596716395730763,0.04838352704950344,-0.1208939771577553,0.9457211640946492,-0.1942427319858253,0.3937502319761075,0.12696558704703165,-0.22809451732659092,-0.35530719157909996,0.7595293088265622,0.08070593505455914,-0.45134039471082454,-0.6512031845784096,0.7701112106881536],[-0.24966748222919,0.9830917113443984,0.8126050139404923,0.5782367883553188,-0.7070488859912358,-0.1317411657667975,-0.7124649448610274,0.9902557629920818,0.43130574861485105,0.9703137183338986,-0.9306644761458851,0.4481406935377521,0.28999568951844656,0.3723146206838215,-0.42430251554872145,0.1695142869525923],[-0.3910144400378588,0.3192385291812778,-0.1780396587182853,0.9880502815985808,-0.462145608305216,-0.3217165652253122,0.27237479466089143,-0.5336077662719982,-0.793564197594133,0.9722201504606258,0.35849506779983775,0.3118998915847744,-0.4202625153277948,-0.055320123953823686,-0.4459446778464242,0.83782931160362],[0.0976057816920557,-0.1978374835570924,0.42381056856543653,0.1950803477452987,0.672185175867392,-0.21927066416318386,-0.44871116852978865,0.1306280398499733,-0.10681804597184996,0.6682119885669398,0.20994955026166195,0.2265402857709975,-0.5721420786397498,0.0705709785230022,0.4436361855086077,-0.6234154683093251],[-0.33438113538332814,-0.7790089908219238,-0.6666356587662223,0.6774723234910103,0.4703353049091521,-0.05537770462325353,0.36997757433570655,0.4461549359039032,-0.2900258781134597,-0.8712673303606056,0.36045381866776394,-0.4458313056103571,-0.41716894289164896,-0.2550205409654578,-0.01733412591150696,-0.39021577260433604],[0.2580903943292703,-0.5573084729909117,-0.3554437652797482,0.8324412113564423,0.09164910364340217,0.09837268072098482,0.7354349727353582,-0.624127057695862,0.5085759602054938,-0.18184862124040402,0.981930811014863,-0.15832066660128685,0.5677772450705301,-0.42985608063871217,-0.7465585170791647,0.17811107475016463],[-0.35309627238365193,0.24496039315756324,0.5270414490992086,0.3448107094088102,0.3298527648892664,0.19921198431109755,-0.6952709962856845,0.5413323596172406,0.3589716700135641,0.8335918207148878,-0.08057899500138355,-0.21180463209954326,0.5915379179479117,0.8678246142831276,0.023462690076969217,0.3749586976287045],[-0.6051678741163307,-0.15094527930317359,0.17693681317169707,0.4150543950125192,0.7641579530122922,0.482337692121213,-0.33789610043032337,0.7748682593682084,-0.35326006510439045,-0.4170019668771263,-0.7588512836590549,-0.8364343040819713,0.8292495907174144,-0.7048538075313266,0.44643341636170497,-0.33874111596542544],[0.6305869195784881,-0.9536794405479894,-0.2889565095762694,0.3081135690399681,-0.24367818540344288,-0.6733927890262974,-0.7375120142516391,-0.7167150563696305,0.08144368204795338,-0.5361949005611941,0.9838200331314542,0.16348965686299888,0.2570306750958342,-0.4999529234672204,0.4725371269578833,-0.1947871191192201],[0.5205292942044659,-0.9777811398607721,-0.752864629165217,-0.003630069131041136,-0.6587077868010187,0.5764528791747443,-0.7868745390969232,-0.801334429637079,-0.5227517492745757,0.262608652842073,-0.19049168090383395,0.7435319658132444,-0.002240472447054387,-0.6460379233306677,0.04128023208145182,0.6506255820929194],[-0.877646839571883,0.9895522913693418,0.7803330597286959,0.2386871611418253,0.5797573843519053,0.7908667787088088,0.2827383384526545,0.354931097847313,0.40867107833749383,0.41601507004365956,-0.591452310575209,0.09660698209131047,0.7051666698696208,0.37534997433300754,-0.443824725715269,0.19823680668239874],[0.7382464001364065,0.4113538965815702,-0.10679291980937147,-0.15423465410121143,0.7472565031091969,-0.9896720783116202,0.7631126752964041,-0.17777993876834747,0.11390903327490937,-0.593740746016321,1.016630382669061,0.024045600078971097,0.22512912855062645,1.1200038711204023,-0.2769132028212948,0.8775714484344664],[-1.117874289139253,-0.34860946579000823,0.46638806210731854,0.9399966695986982,-0.3970297302592197,0.40128368637483725,-1.029439437934746,-0.2453025972600499,-0.6496224165041486,0.28261295667320135,0.20002494368627372,0.5830481654418685,-0.4039488158339918,-0.07748188498682666,-0.03202060218733555,0.9870755699005023],[0.5176350328261411,0.9707137170172067,-0.5222067706857734,0.3163368944587259,0.30535052677539937,0.02945116409703756,0.12987924668540615,0.6149967940837975,0.47437681853104163,-0.3306073008526618,0.7640670376671764,0.6161714674956931,0.43694369833847324,0.5465084428160611,0.6742201160223041,0.677322834825955],[-0.8186787772692027,-0.9441441105426849,-0.14972161374915466,-0.08789418722696878,-0.2068837835258107,0.059090964774413356,-0.5166107979645372,-0.025067216791904132,-0.02211975645389522,0.18091346983388865,-0.9859670003037609,0.7398405705641266,0.6642237972843552,0.7859932651320964,-0.9239133452097538,0.5478818713230433],[-0.45640100384525095,-0.33385769869705845,-0.03503392212266368,-0.8512371114901209,-0.3781292380067708,1.1460666832046233,0.360856649788375,-0.31786335898398693,-0.09303986531164452,-0.7578744569919978,0.7608579795027801,0.27320979654494987,-0.47613008990989925,-0.5652917103103524,0.060414473324743735,0.12070522526927219],[0.921219821440386,-0.22137703515926574,0.25985840199471183,0.5074847427283422,-0.542733399313553,1.1920358462540341,0.4643428753196736,-0.08483385443043087,0.6973571148822992,-0.47503278457786663,-0.6613866331403273,-0.19372284112542118,-0.7376325214552327,0.712370647381469,-0.1811087654768948,-0.019369317562168854],[0.09127173289766784,0.6106468682175081,0.7002310646987403,0.5508975815301438,0.3193442457987619,-0.34414664217166696,-0.023807553051866114,-0.6847739840241344,0.6021620532195189,-0.029495312728940234,0.17166944257636027,0.6320125320802985,0.3045920091764474,0.9554823563621252,-0.6605449220388779,0.7421062628048198],[-0.6566767113966432,-0.019691364141092738,0.1849837220172914,0.8915062627008913,-0.06169585854038463,-0.5266557116744068,0.4617550753265848,-0.18671312867444229,-0.7362400162386679,0.8242985475634577,-0.7052462371334274,-0.16224880169858047,0.37728149615098844,-0.39700663203645764,-0.3000050606436643,0.9047795838751042],[-0.4243985062861196,-0.2835955554746984,-0.032334639405365545,0.6832199231307121,-0.31074217875966015,0.7071527520183488,-0.6180305271779999,-0.15273402734099978,0.4250094693847984,-0.889911482450081,-0.49678237022405025,0.2897258687601195,0.793199529886228,0.3565786000577595,-0.8336081901835353,0.22782024913658946],[0.6692777819072125,0.20958792369201623,0.14211464466271223,-0.5418487964400892,0.10803623689574558,0.167430533910058,-1.1052553331747335,0.5751063227969586,-0.7623940460641858,-0.260160371427537,1.0192959515871267,0.627313806840782,0.6966305629324988,0.49833105533768607,-0.7413407413174011,0.33462347027312994],[0.40654147945302493,0.5241605066155096,-0.2949231200797735,0.966241013354813,0.2641031635037226,0.1235493852243722,-1.0443460022972317,0.785516462096642,-0.7646812184757428,-0.12568452033126207,0.7999055467137612,0.1605525722206983,-0.5827985193765371,-1.1077786555099534,0.7770701890349341,-0.08133553894539733],[-0.9729538748204098,0.1636016139573826,-0.4383666958709562,-0.8583269704203866,0.5095468954866917,-0.8581762898332306,0.19584734184351316,-0.40681272665444856,-0.08219226493802712,-0.201353705789598,-0.21294201165831828,0.9585220741155771,0.9336467772354089,0.5594727496415723,-0.9679190628000489,-0.9317393794359865],[0.3612876770290909,0.6338360174089548,0.46133083484882853,-0.8848735349559775,-0.6094371040336375,-0.2759653591321487,-0.1963541400138329,0.7928447416453293,0.2552926866742098,-0.0751542563376213,-0.9331124143078444,-0.03096556392869365,-0.7239886896459882,0.5475055214829214,0.6618922222130466,0.5694732314741131],[-0.8404850883291624,-0.8584793074270967,-0.33420626510957074,-0.951398788844696,-0.5503553351810604,-0.15686766396275464,-0.0857548346834407,0.004675774336742045,-0.8145649711336156,0.8938630570744923,-0.12485132569095558,0.8841777921269363,-0.5187464387215059,-0.9946053512188611,0.5550792162747697,0.5604734420846214],[0.8676848259093255,0.7526187384211216,0.2525560102304003,0.8166395803038382,-0.4349696631300852,-0.09480552092841021,-0.1009310999827604,-0.01216828942191217,0.3271438225426029,-0.28422056493446757,-0.35847648944593224,-0.3268596235041885,0.13886322634881543,-0.6300311305514645,-0.9812620310286668,-0.29427493418906403],[0.39359686739951316,0.30122955025068965,0.08987060136579084,0.3490666166196661,0.4628573917440906,0.09479942517178452,0.4720591413242614,0.5662569927119399,0.908574462269454,-0.6310057462684009,0.23996908008206352,0.10344677855613593,0.8784002996019753,-0.25656100876254007,0.4051866797784389,0.3205657657092704],[-0.28142922146097016,0.5699295995372542,-0.34364061891916275,-0.5236385762336604,-0.6340936960885388,0.10241284892518232,-0.3543057577496205,-0.8810265506356716,-0.8121113129307673,-0.5329007683327105,0.22772616044455063,-0.42120386941531285,0.05880744821012529,-0.8120251096658504,0.7323036810444177,-0.6410811168507271],[0.1878903883102745,-0.6128181177675627,0.9114986333599924,0.05769211265862273,0.30182000009415777,-0.3418527934762916,0.4888046496107066,0.4849592044351656,-0.9270000366011248,-0.1704438054965376,-0.28435487214110156,-0.8805777439937761,0.08205982886917473,-0.4124083975342985,-0.5825622185652009,-0.6526848504571499],[0.658471775541476,0.5041411451377567,0.9853887361760258,0.3482624461950068,0.981525107346426,0.5013681809568591,0.7224671560965601,-0.14160264884821894,0.1842837689364334,0.9301509980801894,0.053990817107545386,0.940363773828552,-0.3735861344226823,0.6298721962828262,0.4344044245486125,-0.04022881587734117],[0.3890327182922997,-0.6908114138022552,0.3687253533080428,-0.33094314019043614,-0.17502341881692463,0.43505872371107346,-0.48143777597391324,-0.3433876914364822,0.8106567726079379,0.2999756538102547,0.7290395768033027,0.6020292548774906,-0.3438152636965017,-0.3822648954695591,-0.05467023893761036,0.1126763154655781],[-0.5075839571270402,0.1980953466991271,-0.7277549463144184,-0.12937692836903603,0.024839593583833697,0.8318975029052664,0.9157346751328563,-0.8630463939228905,-0.9159360095379636,0.43728153104148104,0.389508020952976,-0.1120444614963878,0.9350705666143528,-0.6667917550141609,0.7080211711251496,0.18530521518024523],[-0.9647526055532727,-0.8270343494619286,-0.5537588188921263,-0.5537109169026042,-0.3907062283134204,-0.508269240918191,0.28559061094114435,0.42036561639526493,0.1162222918388558,-0.7091173845495162,-0.618189667335062,-0.16587197862027336,0.9032255797913753,0.29134088388930834,0.3158123481368813,0.8672680576729159],[0.31900356684881226,-0.9454316485952838,0.2312341217775633,0.5050884147785517,0.4720902157240192,-0.7943009374442633,0.3900349362150197,-0.5945495140134351,0.45170241207330797,0.6624589851112259,-0.958784959873233,-0.21644289253871207,-0.4781648779521763,-0.5888187716431852,-0.3298403884506187,0.3632545015769231],[0.7711994881319995,0.4800505505257897,-0.23341053923894073,0.08432920803515165,-0.8716111250845215,-0.2699294613304133,0.23478432285161333,0.7404771127914889,-0.07388968183491862,0.132021003095248,-0.3857146121579782,0.06079729791481192,0.2718292285134627,0.2877396362302673,-0.020669107073018722,-0.15004117296100716],[0.6946560948769012,-0.7620991902651659,0.9805183961005666,0.9250390730666029,0.6652407336534929,-0.025258928983181494,0.030862132152232657,-0.023697730386227356,-0.6817062276183297,0.7911330918189474,-0.029728723865454665,0.8665984790968406,-0.10982468428708936,-0.6408568146658546,0.13698072499254277,0.49678039913915306],[-0.779974175414099,0.7665224686587524,0.7259061661267125,-0.9101576306530053,0.019767363622538614,0.32225373459937634,-0.32139432673020174,0.33307655645034995,-0.17084536853122634,-0.7671740378186716,-0.0544917444537778,-0.6042806297280743,0.34563419931914474,-0.9568332181174641,-0.8307819999045685,-0.04886498156587704],[-0.5363675734902662,0.7573739607724441,0.36922251146161367,-0.6509701282551164,-0.7817383781072795,0.8073718101553018,0.8573062578371209,-0.9341771579087665,-0.9549656211637365,0.7934751289425996,-0.17686282744479254,-0.9264303393178226,0.017187329028129028,-0.1583202174882885,0.325814783788251,0.3337346098845262],[0.6043984427794893,0.91949714938931,0.41657079545561126,-0.8683675972522344,0.15432815839518899,-0.5129914904888424,-0.5821820265406803,-0.04985512541643988,0.9503051538737397,0.709683502949376,-0.8874005851220086,0.9774039179491307,0.06110798253259553,0.09196947612659434,-0.8147673349505018,0.47436669541755316],[0.41874583353822264,0.6255020509368024,0.11714231710102396,-0.9954132854166673,-0.7728386244134385,-0.698025040589282,-0.16980450580097292,0.49281390155422655,0.314561314163389,-0.7305620719970879,-0.4121478170763726,0.6440127715011823,-1.1878379497036096,-0.793525118293191,0.6193027286724394,0.03771543642571693],[0.31184093369867294,0.19897764676191118,-0.6463451163783355,0.39726635599494875,-0.3508541665511714,0.7418417736336972,0.37020656574874056,0.6225456739479985,0.35243362769287545,0.6395295352189106,0.08424780000970511,-0.8714917783843151,-0.3042343845653301,-0.1438452659817877,1.006927758619213,-0.5803448798937583],[0.23549862864781398,0.21681952221477516,0.6214896148385377,0.5464406715270571,-0.27265256920182285,-0.03397915425770269,-0.9922288841335218,0.39776980964341047,0.6242356565794741,1.1224037411885832,0.22213820864586273,-0.46858224906348156,-0.5010167513828723,-0.19840367447004556,-0.6124123478748502,-0.13234970491174],[-0.1289603915334544,1.0293117693308111,0.7227524162901581,-0.8831645283428728,-0.6238586853581602,0.6660268413365796,0.8370135681979148,-0.6615029237030581,0.2633203431539859,0.4539841105495575,-0.16764695204335822,0.1983130146943026,-0.6248962221988106,0.09711141031445195,-0.03747547160734791,0.27173636539268864],[0.7716827922894114,0.6171701384085585,0.42990029784355777,0.08711817928795176,-0.9149900635843163,-0.9282428749273615,-0.5296251993402288,-0.0253076036761858,-0.37489098335321197,0.6419150871707171,0.46678252935584225,0.14418667286616002,0.02999146442906123,-0.5702914168751138,-0.41432182122123973,-1.0916213519462086],[-0.8322375847542347,0.015081875200945618,-0.6049448591249997,0.14714866992095219,-0.6329707689833776,0.6311658711766778,-0.06825120199435439,-0.5806040886993589,0.6780877934287234,0.45891942257011314,0.9230654807646675,-0.3871171266727468,0.6856719056128653,0.040364218511807326,-0.6306024428456071,-0.23569128016705346],[-0.9236476342967791,-0.03724194361600544,0.00843706373207546,1.0994670377552638,0.004668146997192889,0.8560058854433271,-0.4980445436891151,-0.030723857466637878,-0.9335064454145202,-0.12514237530822472,-0.4790932203168577,0.8590660051678483,0.029661493648866236,0.07982770459471346,0.8084151156913714,-0.06490437611519558],[0.04484442662065763,-0.24310023771079894,0.522250123735624,-0.7979911374404748,-0.06454905553968465,0.37619140824767605,-0.8681957949929168,0.15137409759490866,-0.008834148215427993,-0.9097340272774146,0.11986648565451381,0.7633289268640387,-1.1712462198150726,-0.432849374998753,-0.7536655576182191,1.0523970946535044],[0.29856022958248335,-0.4382575353324149,0.12644331653243762,-0.2297846705963183,1.0953781986034605,0.554788028456092,0.04195595234678852,-0.09733930586559367,-0.5386476072201938,0.6177891683222542,0.589252900110592,-0.10156457194831008,-0.5252474144365593,-0.6359548793267753,-0.6316679653176002,-0.5586508985278346],[-0.22556582420954188,0.8525977302163728,-0.2395281281964735,-1.003367208303002,0.17733642470193725,0.0337740410400416,0.40339925041381974,-0.20012438293452955,0.49747344741930677,-0.04498832687855605,-0.28963881270202074,0.04251585501098663,-0.638236674957117,-0.5184333290768386,0.7755511384364623,-0.1692481430655391],[0.49180741843217324,-0.7423950071781975,1.0188678968156757,0.1062913986627199,-0.029273717041655295,-0.4851235318671324,0.6228868017875285,-0.18384957855557496,0.5878812693059342,-0.9467167443661615,-0.6648106229584502,-0.39881804246240854,-0.07228799329774185,0.6458681068292074,0.5113299786421371,0.3198892157135387],[0.7533153412648743,0.6726034693512764,-0.27810172690178186,0.7559824863331809,0.27880653302051783,-0.9547105825448479,-0.3810085227900921,-0.5694289981288964,-0.30147948684804854,-0.66399575334722,-0.9159365417940787,0.9093221598571586,-0.7031331909667813,-0.9245535420457243,0.6250843811597727,0.7910978608438931],[0.8890545591096722,-0.31406754963460903,0.6302500559263124,0.46684283496255896,0.003364588437604626,-0.017648066651096663,-0.9463099949872026,-0.35423019468161526,0.5417083273001507,-0.5516624540070744,-0.9340349334880605,0.3901211015086101,0.8602730274228806,0.09000359576577503,-0.705995616542932,-0.8869418966615351],[0.16982546623703687,-0.6976784145148924,-0.9372482942170426,-0.575877404815524,0.863589242841297,-0.4139085823886872,0.5203853613518645,-0.5208686098535726,0.18978366956245196,0.834963634605594,0.8322202192386219,0.6023559099988947,0.3527876238512171,0.6666986247566316,-0.6885344091555967,0.1589144234287163],[0.4134423801538616,-0.03642955802675374,0.9151321003392217,0.08267689205294149,0.9322806679515816,-0.9482642455308055,0.33702525022232077,-0.9979887772448719,-0.5461715297238432,0.15038410705616956,0.8931499379475047,0.7750886700646107,-0.6861934128155656,-0.1597240859899829,0.3781161194302043,-0.2500678262819003],[-0.9973290117479947,0.24446624599213607,-0.8805426206999867,0.3017235310922328,0.37466526602607786,0.48790901069926296,0.6930136170209109,0.9351250095841199,0.9106838364090311,-0.5656849847117753,-0.7059490916799462,0.17992842681718058,-0.5379451424802735,-0.5745292656684287,0.7916254773834241,-0.7279391419555927],[0.2308015569826276,-0.3492419640676552,-0.40358745812514973,-0.5659837344760086,0.09592770749261126,0.9133921406495187,0.9692305369637788,-0.5931715397481465,0.0731194627254288,0.38529611760239924,0.9934582180691112,-0.674007080718122,-0.971746723116103,0.7710415800921719,0.8329899420047369,0.3963233778073749],[0.5992278052381215,-0.8278380855895233,-0.6053104621847263,-0.44137087180042256,0.9253636630834947,-0.5358213087562822,0.4780303092269724,0.25541285324721796,-0.751400945405063,-0.28095176497714336,-0.6394874025182435,-0.1471800515226076,0.5065878665611261,-0.27423168615763327,-0.5965073857521803,-0.29054803628523773],[-0.75462425685425,0.08584804772581522,-0.4237130020377702,0.7243452365871343,-0.8127301907638578,-0.8686542850895314,-0.4531046736839861,0.90764609248005,0.7823375072873411,0.07172145799357388,-0.43178888623294487,0.32362447024902163,0.5327804441547537,-0.5899793271488436,-0.6340949846338417,-0.5431174926148676],[0.6344887666354873,-0.9955339619193704,0.7734578127436991,0.43960937470391936,0.6860207436043062,0.3366324348477834,-0.39441247158321335,-0.9924791097759642,0.34516188628891786,-0.42955997040449034,-0.774466997054795,-0.5873815109556224,0.20076267582928642,0.2716889527104507,-0.19628444539523127,0.1453739020413991],[0.7683445932542465,-0.30361622136760724,-0.8190353695990229,0.06220454907709794,-0.6083415420794474,-0.8360584665356408,0.6553382773412366,-0.5659115458320096,-0.1665867428562091,-0.8994535637179006,-0.9413434546959216,0.48330443212882734,0.8753236032357878,0.871901663297399,0.5480699182655195,0.4447189730773178],[-0.3506319095980146,0.06568917967533583,-0.957162888672475,0.0198776867189836,0.58611447825926,-0.3238260457204052,0.6153274358159821,0.5563469822299991,-0.051101818214786654,0.762294620106784,-0.6764760747943308,0.2117162532013741,0.7952254635495768,-0.060846322308957035,-0.4790506667268919,0.24432913015504631],[0.8469377025039684,-0.8333748816600024,0.018855448179845524,-0.4893262773706488,0.537031657561085,-0.25415328648863333,0.6355341175365203,-0.9929643731738182,0.5575633262121964,0.7832966185952244,0.11468855822432289,0.2590271940387914,0.5122876000655903,0.8906043928947867,-0.9788105014167945,-0.40882904000316156],[0.6911541385732485,-0.11512186879135866,-0.7115708460351944,-0.47537968442168,0.23971270899041297,-0.5603549724400674,-0.752744740519316,0.599623660673879,0.9082115061113343,0.9274112714529745,0.9677722390437591,-0.7563626596053048,0.7794985838358119,-0.18200169097219598,0.4997182381492693,0.5525763202179932],[-0.6131520443906244,-0.004043947900429501,0.4081866692289058,-0.6696808626746629,-0.8275300185937331,0.38690151071014434,0.9069991889932294,0.2243563767220702,0.7982207671851209,-0.7025729748073761,0.3379081296697759,-0.2594507154114569,-0.39351017012158973,-0.971534713346311,0.6980742433804248,0.7364897772044725],[0.8225190475040627,-0.05775706508414746,0.4602625772624531,-0.37043390897646633,0.08709225184382197,-0.5179078820907845,-0.7927242106789114,-0.08168689653971262,0.4517702672779902,0.2284558577475715,0.6241700454022312,-0.4940018485126241,-0.08852672991950072,-0.4270199563148793,-0.7276310630816476,-0.18484401343208345],[0.6369377626578556,0.09779958923461862,0.2977962448407827,-0.21553342141876364,0.1538589762296696,0.955660117366874,-0.7994583991463662,-0.13699709106421532,0.982784161425529,0.582349860309582,0.01587455467087784,-0.15697332898631133,-0.4317396568482579,-0.3349596350868991,0.6004976790932064,0.7480495630199333],[-0.6460858492820335,-0.08533734412523718,0.016440993970351925,-0.2641320882728672,0.10477968316145873,-0.8036320143296551,-0.7759879117546632,0.47967491318024985,-0.2630034065435946,0.9133452386146743,-0.8551737107227043,-0.8115084536754803,-0.4850492944773741,-0.5875527310312549,0.6441807791914097,1.0281007521282854],[0.1415476348733664,-0.8481516159804074,0.0026385196167765476,1.0371684945485213,-0.32451252587555085,-0.9981846063597769,0.3033397954181533,-0.8971608408444407,-0.9867275614387436,-0.29921712360596797,-0.6555929944474945,-0.3508833908400121,-0.613848400583829,0.7586155712776153,0.6054043609932005,0.8693634522145371],[0.41068648446305517,-0.010461204523475397,-0.5386463521147872,0.8029216697874314,0.24701784805070678,0.48007923424605786,0.4884334836254919,-0.6906203850235726,0.7072243146683248,-0.5118122384946773,-0.13676777095700776,0.8319356214224504,0.8324201339916798,-0.37956231909305943,-0.4399914298476275,-0.6746218136645271],[1.1194256446770237,-0.8930090243755399,-0.8188047584089513,0.4529115994325029,-0.3271313468137878,-0.44026121622685616,-1.0728602516881554,-0.07016999007479303,-1.0186606864712184,0.7225717821648315,-0.5404555828490779,-0.7086702461115076,-0.5786033689058452,1.2548244625323202,0.5037953608505253,0.06409533026486107],[0.873295248685111,0.539611376983715,0.810566227346355,1.2227748837331727,0.2292224900940381,-0.5694260430204824,-0.3974288229851186,0.8832310837579752,-1.4746425638479577,-0.19396811995697197,0.4479233984930428,0.5597216875377701,0.6860633686717991,1.341860353408552,0.4161849325727857,-0.3056292915622725],[0.8501728124979422,0.25869543219652613,0.33736026370245686,0.11921981441770638,-0.15491016782689007,-0.6570255436345604,0.6429903042144111,0.2763462739474622,0.2011315668378449,0.6349649712585389,-0.10498900656244682,-0.27143447297149226,-0.4832357696310451,0.9523947936855316,-0.6081723210935145,-0.33724977191020994],[0.4884926230721377,-0.30179694490292697,0.8902679987733906,-0.28562666146700944,-0.050096305006219755,0.87489329827771,0.6676621114352775,-0.02151366433170352,0.22027408016887695,0.013453000974658916,0.4206318794784101,0.03876997691957651,0.6755665118495794,-1.017156474798965,0.7623414090128984,-0.15775629521722348],[0.8815121357176184,-0.5058912191036065,1.0595283470929069,0.9410083621654822,0.20566666231116837,0.055358619194898796,-0.3824819793602224,0.6266624488176664,-0.042035005035665145,0.7857019493058612,-0.7349558204530527,0.2947165331262664,-0.5220915716901978,0.22563850931494314,-0.865035439700678,-0.958085016677536],[0.21541483217484955,-0.34560799473888437,0.36064603608360346,0.6479685119346495,-0.09366325438261305,0.41436310643634017,1.089566583506366,-0.5136603790012895,-1.145557812196745,-0.38613430328413456,-0.24752454204818952,-0.17443917004487758,0.10719709043153701,0.12214218011393291,0.19760030071912119,-0.08191371134735335],[0.26611383917220494,0.20231612402203078,-0.5340538066352303,-0.29842333701344664,-0.053044402252372246,-0.5119513442671004,-0.7934186459189088,-0.030831424022043308,-0.6955018784187271,0.8765763384606369,1.0660349295929665,-0.22783646218084538,-0.9399354540458346,0.873799270151331,0.78199079250085,-0.03151655117725856],[0.6665244813846217,0.46901909747770154,0.38755133343217474,-0.06865049045643162,-0.9002520663380612,0.49826931673500086,0.882257726805545,0.8137481114212064,-0.1315061907469608,-0.5654470244585212,-0.5630916588415324,0.07824727334041091,-0.2857986461879892,0.8785785660912182,-0.46227910926283905,0.17101520375658574],[-0.8197777156205843,-0.0754456367680496,0.3685680704956592,-0.3039256047418677,-0.4533972464333641,0.5598857218359582,0.36976040786142667,0.8477977678595224,-0.1673935052755921,-0.7586135173640273,-0.13344962400931903,0.07751294898228883,0.07920845799867704,-0.8235227435731062,0.6914031264752286,0.1986265724811018],[0.91977379042159,-0.20033538979620652,-0.040758949829754434,0.7970863616796762,-0.04812623670236024,0.7274868287179413,-0.3628244087060282,-0.5764865943801628,-0.2279613343494916,-0.8705593787876209,0.8294152879112144,1.165801652272678,0.6788073910915535,0.734063220548506,0.1158709704574502,-0.9189843236747207],[0.0465972241745015,-0.05355641071575877,-0.8122313205086732,0.12660012831289205,0.39135391644796824,0.8309912750581289,0.023074864734442674,0.6773646638124209,0.3746874228993554,0.3360510262805343,0.378692990854467,1.0462389245109904,-0.21021871628420608,0.35410191402691066,0.6602157985658798,0.6186306938685022],[-0.6672425177092283,-0.48117553965354665,0.5437778657275789,0.3866401226823082,0.8031374385277599,0.14128560353798214,-0.8624857913137851,-0.9751669162567467,-0.6984476557157824,-0.2918010958721986,-0.6570092813630284,-0.691133418318425,0.35439434759296473,-0.6400533572058595,-0.4513271400179497,0.3559903555776782],[-0.5330048050456591,0.46268968044855274,-0.8015233039878553,0.06947354481266732,0.07105162051217473,-0.9589052156147391,-0.9278165051667728,-0.07409704198588285,-0.011178015559548005,-0.6966983836579357,0.4586009708598011,0.8021775435644178,-0.22887772445887622,-0.0025224725651553648,0.5906681628056374,-0.6765368903827027],[-0.46047648047049483,-0.968826190024394,-0.9694225144510487,0.5857698423168327,-0.3980613908524808,-0.9694536886004177,0.6951264348950068,-0.7066607488183028,0.44284397908869133,0.6706426823109175,-0.03689072444241903,-0.1490691281080898,-0.7043556696889937,0.7602695603137324,0.4886256400933138,0.9988965094096773],[0.043743130142005704,0.48466615712515226,0.07598464392170134,0.18798772967317667,-0.2708126782666178,-0.9185677029098986,0.48397682121329355,0.9369891290032961,0.3281275929093912,-0.5841702438535594,-0.6945725156636238,0.9975256748119445,0.4251154501565404,0.6394564137929843,-0.46045347793386426,-0.16330003756284928],[0.8261539411336276,-0.33059767723473943,-0.18339757193593353,-0.8011726994458463,-0.5093957640004945,-0.6203038476860008,-0.13633647481951083,-0.6428190584508529,0.8342131766976717,0.7945773925591828,0.43030732162699614,-0.32486795932922163,-0.906309386247699,0.35937498548956537,-0.24131875567459016,-0.13792213543093723],[-0.7652656870808512,0.032466639257828334,-0.18564511643283632,-0.6411569696283892,0.8650411771809532,-0.3225291763664244,-0.011756473743249174,-0.5663287348179313,0.9857947154192765,-0.5873415493494143,-0.6555969948732332,0.1494065633572359,0.6986142158522695,0.5854712729467026,0.09828916101919605,0.34289310642561954],[-0.33333338598433837,-0.8359322736835733,0.8791474558628418,-0.027785873076063172,0.8728135556974754,0.2918496640150501,0.5083924643119371,-0.45462199903492495,0.4459946731073403,-0.8904268863892129,0.4282214659016583,-0.7459827435288191,-0.3772483226119099,-0.9653636409377406,-0.3082580386417155,-0.5767082173417144],[-0.10057614351392585,0.8907326984950967,-0.866658553296463,-0.19829284627865018,-0.33664771597427023,-0.19045106515942534,-0.9830801027219258,-0.8315848258946383,0.7948138584349733,0.14695486704942873,0.37525386315049314,0.5226998032339019,0.0863056125952677,0.6001526166008646,-0.9857844654027068,0.259697538093858],[0.14628415026965635,-0.956196019309755,-0.9225178670293044,0.7691509556106935,-0.4554191397701248,-0.9765718828685945,0.6582149444553034,0.781637000571541,-0.9971730261442073,-0.3222501999080225,0.023812254484481876,0.8073528284293503,-0.17722963071841846,0.22800447341017005,-0.5116382138909943,0.1033158736127886],[0.7925940368157653,-0.36008400317864764,-0.33133438131353543,-0.7595405329722715,-0.8465677863487868,-0.25291482846409163,0.9372088275468604,-0.044392628569619674,0.33184889691395814,0.6308560376814656,-0.008396860062858558,-0.7724488494457611,-0.7353696207723313,0.8817579263209443,-0.5716796146543515,0.6077861895530714],[0.46473819053865206,0.4893891290523191,-0.7885055255227669,0.7114566552022201,-0.3431731275567551,0.5240848773049271,-0.77515636780221,0.7813637813717103,-0.7371545197656739,-0.15286549014188777,0.48992608813500693,-0.47039972145792586,-0.8782467963976397,-0.14901944930666877,-0.11119721574848818,-0.9373259347153358],[-0.9123619224687656,0.5901115356640805,-0.9558506560508597,0.03646094586585935,-0.7612181607536215,0.5483261012319365,0.08702500500711041,0.7657033643285143,0.29144258464286255,0.33419821926620674,-0.17208805079281753,-0.186467965018128,-0.1904374600583818,-0.09911072540037047,-0.8720800834115003,-0.667226484425159],[-0.3532103523107093,0.9810499006467444,-0.7925439571673802,0.42203600807927844,-0.6341522910047015,0.33996849072362956,0.07977487090963065,-0.6005730456000347,-0.8812516423458048,-0.865276771430969,-0.5792648383974157,0.18009131020907976,-0.2841882768244157,0.500931513075284,-0.5138858205409447,-0.8681748071917132],[0.5005001863143579,0.8185494467964549,0.7613465279773721,-0.406902489836547,0.27290845705892286,-0.24825727079094184,0.7486067088522117,0.46688056379802667,-0.4825768115325624,-0.6890254335369681,-0.8947819690107819,0.054636400453282,-0.3816576556563138,-0.7763951222697543,0.9206709027144013,0.7517833798105245],[-0.2776574482601622,-0.49132960080287735,0.7449212606254886,0.4388737760086159,1.0746103944722016,0.20434867383128616,0.015528736453904656,-0.46263915988998966,0.09213452392550055,0.09321020721217065,-0.7196567785930373,1.0578303878011432,0.24108260431448542,0.3011346172240798,-0.19651589436169561,-0.48822055103704765],[0.508810845943458,-0.15895041169055255,0.719041343292256,-0.434630355390271,0.3294360188578388,-0.5069536213627045,-0.8397428926513091,-1.0714333505971132,-0.8050777242746787,-0.7196978816427242,-0.11204573694817088,-0.09469637103351161,0.4728459625482321,0.3945849972307587,0.8375039912114608,-0.8718693037002309],[-0.9536858443495732,0.3487925453454389,-0.4736832655353483,-0.6410442692495134,0.6957031620768661,-0.5601756330313176,0.844445387827563,1.1224415227678066,0.17973706254682195,0.5118172493086464,0.767052247558736,0.2832214688704645,0.19506374766628648,-0.5118863910742345,-0.7986472926359791,-0.16528864679356486],[0.04373673608722343,0.42665882542618633,-1.1159803502548113,-0.6600321575842404,-0.004027054546747653,-0.6769114282107053,0.6452936031546824,0.8916986140340145,0.6363081563739821,0.14688015620671402,-0.2909375586570609,-0.4567374947519956,0.25666118160682916,-0.2679522551282895,-0.6917145374769587,0.9667226953749738],[-0.14945276045803546,-0.19737720661270056,-0.07587575585498899,0.7284828233765297,0.31695698044335024,0.7025212675508669,0.1370338746343698,-0.4350135206835343,-0.6444519991924773,-0.9834245281330288,-0.15234930797138632,-0.3027261378813622,-0.9277028462626664,1.1921279279339168,-0.5667303724764098,0.7969582965123989],[0.2567946249239337,0.5367171085694078,0.18088006778700835,0.7066606131073283,-0.9807382417625294,-0.4870234340536634,0.77997549101914,0.8438122590953792,0.5492850680724384,0.5857971588936005,0.7554151402903616,0.7253403857335985,-0.023841463413349123,0.41515443986493966,-0.12162240282550435,-0.484596719403807],[0.9133839629023239,-0.051088191921260726,0.2521682910359467,-0.7348658875707988,-0.5982307728627545,-0.5653484960708526,1.0831171286537469,0.025609423999900297,-0.2844462932284862,0.5603729783912497,-0.28965247468146155,0.9327205450697473,-0.877154004498232,-0.2677732210351447,0.4973214704557374,0.025497344846001573],[0.4683743880369088,0.4561943679419612,0.12403315801072427,0.7700746099514951,-0.7196884466850727,0.4669288096142025,0.5685377711968479,0.026630258618593434,-0.2362359632922655,-0.5255521707826513,-0.2214993183227612,-0.5500478044613933,-0.4378367680805227,-0.29375644191911093,-0.8372747195770609,-1.3281403466202204],[-0.9647522004835355,-0.1136488961774968,-0.23499942038457622,0.14378207986184938,-0.4688216924828616,-0.9809284164854795,0.8329039303210428,0.8242248542702452,-0.6881688675159904,-0.36798616572245574,1.161787995333885,0.5249655690282331,-0.6197598695923853,0.9263071663480662,-0.1790445653789651,0.43697890831624414],[0.6554069825268074,-0.9932438145811513,-0.7675833132424027,-0.0035371175222826947,-0.15775721380250798,-0.45086993696272754,-0.9242893031122147,-0.621266711152376,-0.023507558358594277,-0.4300420975847595,0.6343215957292484,1.0871967534611497,0.1347733706394032,-0.05871517184808768,-0.37247737150363536,-0.35535193150858396],[-0.7271463843132866,0.7515758178831684,-0.4487841659404175,0.2357104737500704,0.08574036299219208,-1.006429091885537,1.071855075631586,0.19649155045216496,0.9846772372155642,-0.3417740163470692,1.1814974417452415,0.3132453436682174,-0.07540949967691239,-0.23986868742749728,-1.1235540123011658,0.329991230682517],[0.49760643676610683,0.3724748353734063,0.6636264917635684,0.4881944032180707,-0.535951745439675,-0.1731087974669866,-0.7972134665820511,-0.5727779450029603,0.43862794798649896,-0.3569157612862067,0.10649169894666152,-0.3745772836431207,-0.7028100218908607,0.13678649996549894,0.1796774407609386,-0.7588329468037349],[0.5729357902155472,-0.5780964803011669,-0.72619863426728,-0.740967102489659,0.4710281704004324,-0.9130065682430553,0.36810578123818016,0.11307262740589659,0.24565946445187184,0.3860618990827981,-0.7482838556804726,0.8714504726069786,0.8336752001642111,0.07197454454106755,0.5675378408894871,-0.18683903211933672],[0.5477348380920023,0.0679861583795579,1.0951632798058037,-0.6818461417203662,0.5433704093725513,-0.1473577399192287,0.1587201231637106,-0.025374961242903032,-0.934437745135618,0.6426211944278882,-0.7987292619992433,0.9860712084561811,0.9927699336279003,0.2846156048277253,-0.6298287882520863,0.6939857097169971],[-0.11662931889424726,0.2484943808411086,0.34490603171636414,0.4437544212230018,0.7144305087283684,-0.287390692902838,-0.3521380152487107,-0.8867054565071096,0.2268336461485985,0.3753503458489847,-0.7547403268456803,1.0894781758844816,0.8210395969900636,-1.0940051146551475,0.41266511353255186,-0.20655175186402178],[0.8966329652488945,-0.07037189150999268,-0.6568394453852466,0.7912723350851447,0.45840154963763746,0.9691409207023156,0.23232408902824542,-0.5886229676245218,0.833390775806309,0.9041233488776936,-0.11410131263277323,0.0185365681549281,0.8203790432021285,-0.5525635908382611,0.1704471759400148,-0.00719289155418501],[0.7280824705549125,-0.07002572233353632,0.3742928559083052,0.9750943520856721,0.42896435205813255,0.4113092408598966,0.9985165572831072,0.8099495589519394,0.604625900302878,0.1421112352715399,0.07453819259005412,0.11933698224547173,-0.2609163892109132,-0.14238983755640655,0.40931189732574236,-0.5989396767985888],[0.8862316092659688,0.9726464078791102,0.12455141823351346,0.17860648531601475,-0.808167217648013,0.29325227052465674,0.9758363384056916,-0.7068942814178367,0.43226419223461354,0.21027112773460654,0.12589663047110777,0.07913744527609179,0.22440779816367185,0.4964582110540361,0.5942945323306814,0.9621611914554702],[0.2074996658722652,-0.22277855606605046,-0.8976428611828977,-0.8681894552467764,-0.6193680339579024,-0.2291247222611319,-0.09323116576093327,-0.29412643899898594,-0.4406734911498633,-0.6335861206581108,0.691901611101164,0.0257247586126379,-0.8125051742929252,-0.03505779876164272,-0.999351400497805,0.04265046016310503],[0.05991387627662004,0.7771706298390404,-0.7220424942015726,0.7647283385038213,-0.9470122412360773,-0.0324133364947361,-0.554419454094917,0.3119430292743899,0.1464047546919005,0.16721549650378753,-0.4391950964263449,-0.771791264783174,-0.7063845401549913,-0.0746821623177194,0.027683929012428,0.125265454827018],[-0.7096259084886913,-0.5750852792933583,-0.12413707065141466,0.49834179292644,0.47614966626838484,0.2760564390846678,-0.13189758292587728,0.5761575754432551,-0.41553737555826853,0.6768501604215773,-0.7849215195335195,-0.9045603861321085,0.6561059395740023,-0.09714420478595542,0.2682690641284604,0.11424216567489731],[0.5525205160839621,0.6298123654074592,-0.9155244557574056,-0.8145149220354493,0.7517459367694941,0.428491653279353,-0.7700690519425466,0.26661134659195573,0.7368465374404676,-0.8808633207252368,0.17735416429332096,-0.5678094188984089,-0.2473972423882933,-0.013585529036574506,-0.34939997147992097,0.385045912397592],[0.9733879851136278,-0.34871098537581835,0.5869966493061329,0.9626477689289774,0.20163003526120926,0.021844595892460905,-0.4035903594198431,0.05872208727203976,-0.015058348181261838,0.6068075189724489,-0.39802646757605853,0.2140374442223827,0.11446579620804309,-0.031818287279085755,-0.6178849286991501,0.49722145928744776],[-0.8278263571979658,0.6687048638321036,0.5687503920540582,0.24717152395012132,0.5219372712362778,-0.8800977894957778,-0.8915963764650492,0.1297825743837584,0.7616592608496653,-0.35752293107288846,0.37955046058040454,0.07973418442054347,0.3704942667895996,-0.5446128555819989,0.39377263863965695,0.94184695243599],[0.33597228108672716,0.4028644264852379,0.2555083559286553,-0.6120264208424362,-0.06980516942817205,-0.44888091068900193,0.5214221357832818,0.19664671748293383,-0.2351028374459041,0.410680841955847,-0.6292245443440048,0.9989477137329508,-0.6720697942005156,-0.5723951155097797,0.10142125536021807,0.41473175523125816],[-0.04630455073787143,-0.5610968778030383,-0.797681961343573,0.1407198196229591,-0.6401699428380243,-0.5344010520891067,0.3958665497979976,-0.7847536627739968,-0.7675653203375594,0.06991709651746358,-0.3452637726538903,0.5733819178770889,-0.4352410259863091,0.8953093175939539,0.8160126978772935,-0.515164102524249],[0.5069332333491152,-0.15689621397714815,-0.9131899773305769,0.11511300345025832,-0.9073225124883004,-0.92879854469451,-0.031495935086986115,-0.2352065862572683,0.6377019395114631,0.06917982606065909,-0.7288669386815978,0.4449351007257518,0.41045336314049763,0.7789292184531247,0.20257086944075864,0.578122306272919],[-0.23400214240611827,-0.23916354481756674,0.6371746546601837,0.2848286871899667,0.65483053741477,-0.01813345691668576,0.3663935998454872,0.4094567732020704,-0.20224253103884263,-0.2676483395719506,0.11022293736826283,-0.6976939792300499,0.39078052116131157,0.19588936006491825,0.1950676541401526,0.7238539437037133],[-0.4171949120378708,-0.44077267424066474,0.8871682981253322,0.376921172259802,0.7434666983421921,-0.3547181981923426,-0.2339365693659831,0.0918870778254505,0.12883984976329482,-0.49802867138797496,-0.39808123001466855,-0.12251364880319258,-0.7966194104388702,-0.09661713323498089,-0.29111200216602656,0.16125583127316398],[-0.7991128207014895,-0.7535602445724611,-0.8127422906103544,0.2956494498991253,0.5550003040609759,-0.3458281341322904,0.6460129941605317,0.10120843803674474,0.6606304954653028,-0.015055111604357133,0.5887323939039659,0.33798489633197115,-0.6342158911349024,-0.6399284390181643,0.7235853592536511,1.078405554094005],[-0.3375378573297892,-0.4960776930582018,0.2340439339492969,0.5561146626503747,-0.7424488513637261,0.15667219434508695,-0.5298218947588589,0.6646758058265356,-0.2867744969986291,0.508053810581276,-0.5543885833976735,-0.8386314163604003,0.3614532821482876,-0.1976493754603878,0.8050882138037124,-0.8012472930108214],[-1.1627562980493802,-0.15302686627242126,-1.0337489818781944,0.5432574227450181,0.8299356548221487,0.09686502198297339,-0.07776721069849471,-0.8553906667876413,0.9048204165809347,0.1192123589616527,0.4550299888686302,0.06720632116370226,0.04419420929429595,1.038756121182759,-0.03274878466637332,-0.7557969610097942],[0.8171880330397847,-0.9074497126227161,-0.5230656312818659,0.6890216379095601,-0.8714834994877465,0.3397819147972114,-0.5029529838785481,-0.5810614012550439,0.5512209233996179,-0.7844630301142821,-0.6789249823962061,-0.6005458159779028,-0.39849535871489156,0.6206347244535849,-0.023081691597264673,-0.2745088506289287],[-0.11373127309675396,-0.5912066196161642,0.004903284712238532,0.13909401326168844,0.03681628129993004,0.1102547365689767,0.8829654212663256,0.04872416058795158,-0.5985107489670747,-0.17509315911444603,0.033246821103999145,-0.01913277478791645,-0.24696635115513943,0.8584215642944699,0.060239162676801336,0.6473232584964067],[-0.275423348993248,-0.4507833533163415,0.5336258391435448,0.7157925487505693,-0.6328329351131446,-0.3905423829441403,0.8017145125220281,-0.5857661698232968,0.027554287220639302,0.156642706873055,-0.8540006740210495,0.24827998438734192,-1.1343484764191212,0.17469097715055257,-0.2774391326231521,-0.2313370214891013],[-0.07761409945674866,-0.2751329902839554,0.7475493492331061,-0.2134664691513689,-0.49950620085563413,0.18514193244366936,0.3999114146916637,-0.4094630941652891,-0.5942146598597271,0.4367742565412032,0.4514930557412383,0.34613618152671405,-0.1712722995095146,0.5006050270710497,-0.302056526129131,0.30764191044032096],[-0.631383637837747,-1.227347799417352,-0.37544109797292174,-0.4530589579480127,0.5150136316661187,-0.567691742150676,0.6427000875245088,0.12938104702409295,0.17556974393509003,-0.1948611134056949,0.8107367607581252,-0.5539510065764006,-0.8351061195681232,0.9333766107223794,-0.5983303265802141,0.7920310389176505],[-0.3932625581445678,-0.26739820641591305,0.4135888305062127,0.8359547435690381,0.16296622619155912,-0.6357351680595718,-0.539780742304055,-0.9952027710906888,-0.8029149455290145,0.5085999200518471,0.16374138293218482,0.09137904178950287,0.31652113982439306,0.189918733037088,0.43813452586059937,-0.7830517370466344],[-0.11593130456185831,0.3077949723532985,-0.8621182430995896,0.14219972549512072,0.6320098744444279,-0.9366112364889164,-0.38187724086116415,-0.09054826197430839,1.032212308810421,0.9627493405967663,0.42790612767554004,-0.8701529996928254,-0.3239597685109433,-0.21671507033462925,-0.3958661435449069,0.8743745168321081],[-0.09336309274414129,-0.06916996973237392,0.2865304556988874,0.8536136770036206,-1.0352152503984218,0.39971678495067514,0.6549031638761403,0.550443840907581,0.7830571962535697,0.37499121047291945,0.11773918473927819,0.3719249715826191,-0.6544977745257472,-0.30807438762366063,0.6436628370185584,-0.8229019083655902],[0.9468884918585172,-0.8917006401477073,-0.5974727136887971,0.16927637677230242,0.8133686210113308,-0.3343167192475985,0.734025451429256,0.5815315460862254,0.4781763526747279,-0.30182144599293753,-0.8673985995127008,-0.31899503789392536,0.7075446307987282,-0.7358836349676611,-0.8315745165771036,-0.03713400375203605],[-0.4677244246358393,0.926284758665978,0.5585511580562829,-0.0053171879007469815,-0.13222142942453416,0.10103644256892698,-0.4621317869611739,0.5361152511486237,-0.8820026856675819,-0.754877043143968,0.230095316433817,1.1427705326661761,-0.8711348865591747,0.38980492963228425,-0.5654321239085742,-0.12972136278702628],[-0.23757521116296818,-0.2675994631322339,-0.4760082019446972,-0.28881365637141765,-0.20767416740546482,1.0078648552802338,-0.9320998797952982,-0.22290510881213724,-0.7445264053797342,-0.7662313696879177,0.10276197679456803,-0.6042352012204322,-0.6779899449857288,0.1868437577051668,-0.5872844874358449,-0.6048068997842515],[0.9821122914712576,-0.6317575380706091,-0.29882359894297617,-0.4439364232687779,-0.6019236815373916,-0.6856131189919774,0.11937803503258275,-0.09156623174233397,-0.8221148478353202,0.7903695106524131,0.7830921381361313,0.31192133620046514,0.042347785398719424,0.7983739352642033,-0.013693184322070095,0.4003785914173299],[-0.6659753402325532,0.9021094955140745,0.9510922730116196,0.0799597510819714,-0.9906827335360582,-0.4687493303315198,-0.24161430807859974,0.6211061278107843,0.5906320559267351,0.2996243557559861,-0.4891914905680168,0.7533519336343288,-0.11372594489229071,0.3798914269890967,-0.6540992431428525,-0.5014325052345523],[-0.7853308377511721,0.029517067167201372,-0.0527890012488994,-0.8748448090758187,-0.49996300672451577,-0.8141936587179104,0.444753154312691,-0.6043759309442889,0.7130106250326578,-0.8985057127516916,0.5783703603894499,-0.838939709209781,0.0738607271405054,-0.5590704329298921,-0.007320212126203707,0.6108342495852299],[0.2744431664445415,0.8274771020727281,-0.5558668504698039,0.0409806557479131,-0.6727522425185315,0.8741739422298931,0.5304803903018835,0.05511872009108609,-0.23619552964892065,-0.7468534049801021,0.9096609855065259,0.6367430738481632,-0.9318861539034065,-0.16424376908486726,0.13787077731271147,0.726343907092474],[0.5064076311417716,-0.029527813133403136,-0.2567482257323883,0.6852881802957063,-0.41715913819061523,0.8249543800096433,-0.47754791205271285,-0.9834359499172964,-0.6962067129647633,-0.6845831753309719,-0.2995947980243563,0.10935878383400599,-0.0833283355004526,0.7965200220866504,0.49682025538151153,0.22146887167279683],[0.529087514121497,0.44527027673948183,0.5919605945341413,-0.09633517212678555,-0.6141780530566856,-0.11532993246089385,0.9222058563780728,-0.9941588570029918,0.8807354029785754,0.1194621318078326,-0.7381972386955402,0.7187019486098585,-0.11740886185568966,0.3654809052189081,-0.6182038942990014,-0.9480763443733924],[-0.987489762018237,-0.6365522472240088,0.67660331123039,-0.5007832572093354,0.738468937557295,0.8631672999919071,-0.16596785724717478,0.5247405242085446,-0.42172029248321197,-0.12591674290135302,0.8463217706328612,-0.2556925146472224,-0.8297999735497261,0.703374997263361,-0.21647890327175068,-0.3738243743846317],[-0.568125006585054,-0.3577215174765622,0.3066458126471794,0.6537411574816643,-0.334490267782829,0.6421008898859375,0.5179255654368524,0.7747185112195862,0.9062981208666128,0.42847410024973875,-0.5244857091305262,-0.9711853175324787,-0.11592500073009049,0.30339642269571865,-0.8025746804423837,0.039316947195452645],[0.0537011870858044,-0.4656333255630756,0.3380359206245931,0.5111771061086432,0.4472939552883024,0.8967269760665149,-0.5892812022163172,-0.050072729810243466,-0.7950588844287596,-0.13210295444963416,0.8296021512819465,-0.11263824561881997,0.09805919896483584,0.287639224701818,0.009238400914082678,0.988469805080435],[-0.004022359074596249,-0.02104759523330335,0.048149470340830725,0.3978727548767429,0.10240333701646342,-0.39988816981129327,-0.47550236907718535,0.5042235399329451,-0.08367849245183034,0.7534309231571985,0.004832764754607144,0.740885673306702,0.20242208953942198,0.7172025711653367,0.4343581104061296,-0.8342441382008854],[0.9266940987812684,0.5269121053486172,0.3164352452617347,0.5196394114267182,0.40824600891998664,0.48322100480789043,0.8801701005509872,-0.7786282737268913,-0.2007850309006156,0.04513835894771523,-0.22956478494478416,-0.8523366546856632,-0.2770032464170735,0.958682467097645,0.3163523806846915,-0.8693868494597052],[-0.19344499711315777,-0.8239854862431439,0.9913348102659643,0.7641916365349708,0.1376484769116315,-0.9961658863361733,0.07988550872751743,0.8077961030705159,0.5520583800589969,-0.43163480512104213,0.7713745653956106,-0.7844503653063497,-0.3662110192644197,-0.08448857101210061,0.7567281172846467,-0.4278061717672794],[0.6886564042331662,0.052081693701578655,-0.9786000998494848,0.7732144039952931,-0.5314057459491122,-0.6056116818930614,-0.8437556578845778,-0.7394128181497347,0.2878447944635848,-1.0893317826776463,-0.9654761506249866,-0.3441207977633564,-0.1359088014783514,-0.421946346741174,-0.44234688041509906,-0.7061913523683236],[-0.7407874112373092,-0.5794086183472997,-0.13915147877524756,-0.5793396511858419,0.5712217845461882,-0.5713019713583971,-0.6101698726161155,-0.015307403875230427,-0.4025771767083958,-0.807674903403289,-0.17859892564817545,-0.41195089711777555,0.9946768703745203,-0.023282000465499428,0.644766036576897,-0.06888287293204218],[-0.16123639600473383,0.5552403078292235,-0.5976185368608662,0.5600700997034045,-0.1970940606823589,0.5059073194798143,0.18003360878932173,0.9900196675333781,-0.8728280409634364,-0.05305553485857559,0.6677359709690729,0.5533093557267953,0.7832789990471757,-0.07167698170733226,0.26915776216163656,-0.8666538100370028],[0.20605202025108227,0.11451189924253163,-0.18455949168697572,0.3787095519852688,0.19501354996856993,-0.04569752667013379,0.4225732935749123,-0.7811951767918268,0.61761608338967,-0.7100978937884969,-0.1436841104355567,0.038809115004543204,-0.16084701466541054,0.13969716626283937,0.15178979593673175,0.8802164997706814],[-0.8672495743245338,0.17235773235237403,-0.20542676000017498,0.18750466100308405,0.6558378726564564,0.2804537959248938,0.6251531280023327,-0.7851939903720669,-0.344642262842235,0.235905258572033,-0.6717792773913986,-0.3480854318262743,-0.7598219305221229,0.6615841300754509,0.3328794787435931,0.5655657248074765],[0.7317465679998947,-0.7225146205722676,0.031144127558723048,-0.23606585163081217,0.5391442183234185,-0.674587079980034,-0.9492388941960217,-0.3609704510061514,-0.048356326207600005,-0.8513536717715287,-0.5996019301044304,-0.9699490630658976,0.7804601283437114,-0.3540485359078142,0.11103574890577797,0.44573834154473013],[-0.8180880765140596,0.15787529122555405,0.9739412930586516,0.8644341381478555,-0.7096811751617513,-1.0104877455837178,-0.432530902859833,-0.010706707533794293,0.6910128527483641,0.10239360317842262,0.5589927206684335,-0.14203104049485968,-1.2754854764650712,-0.7654525235625307,1.0125897486017688,-0.031500943197569464],[0.4565626097110362,-0.7649688102327606,-0.5958215429903229,0.2482891054288726,-0.5143616616935002,0.7510874127887911,0.5519717761397467,0.7189929332885885,0.7764465815116294,0.7798831571959537,-0.353504056645516,0.001270536017997298,-1.0027283989677547,-0.6826217695830874,0.9497363416712319,0.7224298358081646],[-0.49103116990632883,0.24854283103202932,0.25136083485032884,0.532528420877981,-0.971971779028392,-0.09284362109847008,1.0249972417276272,-0.17668873695469725,0.8848993151405273,0.4272292565183253,-0.6632233150881993,0.10021638671235072,-0.49146664518853445,-0.5823063912782995,0.4782846465721773,0.5179006719353799],[0.5609601319631444,-0.6157415578647635,0.2999050152289448,-0.16759567273066914,-0.4342581088719822,0.4464900740233079,0.4458104538395082,0.4684078753826477,0.5425473184642055,0.5672193161058353,0.48011952438883077,-1.0172437266163377,-0.343505747230519,0.22391331554285654,-1.0374413826920577,1.1739170456161399],[-0.6348357912340763,0.5386858947921822,-1.068835034948479,-1.0374529923624851,-0.6506029039065926,0.08286425584263245,-0.6656318250671422,0.6578459103382934,-0.6273072096930231,-1.1095535369843215,0.257072223992211,-0.6259130686254928,-0.9599260304606683,0.7861862679844648,0.31811588653332923,0.39267509776981585],[1.0619824910480402,-0.4337630542039962,-0.5388733217542901,0.488477523784706,0.013528263041827582,0.6720042376960554,0.7722658181001776,-0.22684530438021389,-1.130545823615061,0.01609190978143693,0.11051604601703988,0.5921442600229804,0.22929769582274115,0.5772543401574859,-0.7279171359655597,0.43284806995831165],[0.06468404484228854,0.8810140705698246,0.9673866091981946,0.40042788863683854,-0.026040073499151526,-0.35361177138936045,-0.8552596286539166,0.26189505397327795,-0.8607212256307416,-0.44511173485827765,0.7874680816835663,0.8678228491675146,0.37818789470340847,0.692560940382504,-0.007857895409448102,-0.72939972394967],[-0.7397561554613251,0.32753941600287906,-0.1050311126835624,-0.16178199623600395,0.38333099488064737,-0.4212162092648009,0.9950002632434409,-0.5861416849438794,0.40051053062872827,0.3038040990400641,-0.7173468851842055,0.015186532713059284,0.4325690246358516,-0.11041816238038621,-0.6822148426308497,-0.5146339047398185],[0.6655969262678244,0.11790050932229425,0.08409249536995086,0.25289170091492524,0.2574801316222282,0.5718550156502502,-0.54975539081831,-0.21533982817641312,-0.7003621919822531,-0.7115781724058126,-0.09761947471786565,0.34338253339434516,-0.2436072883250161,-0.08006804928386016,-0.7088671841982243,-0.680608881422422],[0.8963940040979743,-0.8662696418022988,0.4436224358358487,-0.3195264350539446,0.8289127403730947,0.635704856709844,0.9971069739193692,0.24423806531131387,-0.05509755754379553,0.7574029036451093,-0.9379502237371864,0.405346234218912,0.4730351051527695,0.9403188146618899,0.6254514650167735,0.030262153177823325],[0.53169038746522,-0.12676716082973744,0.29166424225014875,-0.0695182898195923,-0.5762482031357923,-0.670627300126365,-0.9290539551819237,-0.848264755735138,0.8041893156641375,0.5176755358367775,0.8203223367201269,-0.6627937628862892,-0.34082815260280663,0.021467364099278248,-0.6508303569730249,-0.46958424346081096],[0.8076341094023047,-0.5213611376769167,0.9619171926931838,0.1447234944288902,0.027256469108604353,-0.6437656317050107,-0.6265939463058912,-0.049517277643749136,-0.05779261982836914,0.38165538190968507,0.2679983173073577,0.932750677644536,0.6401258751505554,-0.9730336312484842,0.5092780773280787,-0.3161705529619736],[-0.9158253543188861,0.0937796300111442,0.5522552136928214,-0.7530144851856195,-0.5491881662995373,-0.4229277521786705,-0.9465400066754084,0.042965123857358734,0.4377656538302257,-0.1561562256380027,-0.20422847400147282,-0.37432996015846953,0.22283569844092366,-0.6941144655313232,0.41997243313865695,-0.2145128339308333],[0.026244716780353006,-0.5839505618777832,-0.40847110964551847,-0.9487551520828141,-0.33654663541466867,0.6161541014341885,-0.8834320112588467,-0.6507296743763531,-0.7584022910307673,0.8784140965127709,-0.8300099417056197,-0.7774562893251682,-0.6669263512727555,-0.5008988294396097,0.9444782562933245,-0.838326256984149],[-0.3664401198726188,-0.4255282765892048,0.3089537016201156,0.1460801332185424,-0.5943450864085493,0.37292314963227513,-0.909531928819757,-0.5654762799907189,-0.6188745379816667,0.8783633627207257,0.9225788625844578,-0.4990178883562062,-0.7886601265261861,-0.9928404430112474,-0.2755641272600462,0.33078598047663244],[0.24652276317313104,-0.8266343735959127,-0.00624228403510152,-0.27708811541379896,0.8141560066042337,-0.7118710126994654,-0.7341225306771402,-0.2380639543473353,-0.02144402376813037,-0.45451322842290454,0.7097341737657716,0.6439097648326189,-0.3429740996421695,0.7035149005179688,0.7368443759806893,0.04017627376130406],[0.655930123788727,-0.6251338985155179,-0.4166541782707749,0.35274142814927956,0.40310581408712265,-0.3986589142335659,0.19972477009533485,-0.43917356186497836,0.6231544181731143,0.9400456998028206,-0.6478039971399738,-0.9754503160813242,-0.5761551629396893,0.36859574382381854,-0.40132359619189817,0.946465993922025],[-0.5100813999838971,0.6429343427140108,-0.9406988812504462,0.8183439349653185,0.31903249769735753,-0.28590152127883295,0.704685488260127,-0.7978771696366525,-0.7043240310563399,0.32372774687399675,0.951376785937732,-0.2182678685977102,-0.018363266777872145,0.1015738441268792,0.09026777294466237,-0.23905291415919638],[0.31989819006883824,0.9274478546654281,-0.25612306459692213,0.6381212400024245,0.36300090041276833,0.959816341289645,-0.30905936950501856,0.5533200246013137,0.4376087548455696,-0.32595630680021426,-0.5513227366219766,-0.008795006234660008,0.4534103849180964,0.5213742315920848,-0.31388683672571815,-0.5743614108434416],[0.4881605802434943,-0.8807223967619131,-0.05183630399819039,0.5786980949776099,-0.16183904555815642,0.5353942866113455,0.37147450471540333,0.6759394980569495,-0.21900460590129045,0.7447813545809825,0.09493498552860835,0.04555293046971798,0.8358268468223686,0.813330060991444,0.5580291203589529,0.5018868290773186],[0.9299135622379011,-0.2535858669784554,0.9153595842936273,-0.9183414868770825,0.6123345356674603,-0.4186812504341617,-0.2952523545929351,0.18041289531631666,0.8906713120051744,0.7117690425850003,-0.29577935931852517,0.006886007123243054,0.9000327977934424,-0.186839316271322,0.9652775234412041,0.0659551880485365],[-0.9193152248159344,0.9461106017433725,0.6991105472763448,0.3709050557793563,-0.9396089448146867,-0.8183684945222058,0.05511369512772912,0.6907447058197103,-0.729164960047644,0.13570175656871886,-0.3159811753080217,0.3380390234233164,-0.1586497803507081,-0.957290227050605,-0.05533311686233011,-0.4646319811160282],[-0.2663285207897214,0.008064982601796776,0.5758555841127251,-0.30329607593028757,-0.5922688166840233,0.6881528568015923,-0.5100674944206146,0.0020448676843956865,0.6210162511633166,0.5704365749742609,-0.4046675650184517,-0.1194249521928849,-0.06555494748291905,0.6280113464836882,0.3853507519120912,0.3171628646666847],[0.6681003580738003,0.8251541783650846,0.21684184134919385,-0.34922858006034346,0.465069936061795,0.5256887389996775,-0.32741149686235327,0.5993554023601061,0.13170817396358675,-0.24466829126977643,-0.4454559891228448,-0.05077363708734477,0.9315595844880067,-0.49594097306560325,-0.7605426871452619,0.2727994751591631],[0.6037593045680737,-0.6206536552189208,0.30925193459999906,0.7357235409246904,0.2917626333436569,0.4663060240916059,0.12294064854784233,-0.9614630540174444,0.5983245236423098,0.2598357323538266,-0.23020811590605023,-0.5255746241940648,-0.62065557507179,0.4608877614476144,0.30288985768133403,-0.20203802614416963],[0.8596450407690469,-0.7512592492891935,-0.28476616072352356,0.7818767706160863,0.5938982399049902,0.13008444239719416,0.54194627963459,0.8076533871556779,0.27685877987445895,-0.45753105034663105,0.563299661952026,-1.1594378289228584,0.30467928493798596,-0.5307736038706399,1.0208430472357202,0.8677939800717327],[0.26417136328736396,0.06592887505857506,-0.8120339124437701,0.026710085570250557,0.6559653495517893,-0.3050896118588281,-0.42662320828298034,0.701465442296666,-0.0076130921383781745,-0.5772406502721539,-0.5639558634859245,-0.9358621276067699,-0.36672737651308296,0.9194596049361107,-0.9922671577464108,0.6910922630462888],[-0.07267897081676312,0.45969428993788664,-1.0095227197961816,-1.218104171469445,0.16576816739293304,0.5375979010670242,0.7741840197242494,0.5565658653815374,-0.5887051690912923,1.1224000677612924,-0.01721854361671102,0.8580632429942516,-1.1580797900701485,-0.6104747461137514,0.26998871366832394,-0.4869180489819479],[-0.4656041560559129,0.6343355081017641,0.686567638321747,0.6520552574935622,-0.9819239520317308,-0.24935750119434957,-0.6103433916299179,-0.6332667458995583,-0.6117228232032944,-0.26700610849219014,-1.0013621460895934,1.3036835284144594,-0.1904871061159249,-0.49521706909878155,-0.35472087919082307,0.6205125978318478],[0.39223626939203954,-0.524038475935147,0.6874016781903971,0.9108830515510957,-0.3885191809599524,0.12101742377262746,-0.916134363808979,-0.5809307632917707,-0.1389135457382774,-0.6745516263931044,-0.39808814696973605,-0.2487117910760381,-0.102498148162197,0.5950405135108303,-0.3712511965551733,-0.14325658447717515],[0.6049970493468777,-0.536233242201946,0.7552938558978753,-0.2562481430375015,0.3116105893983378,-0.5333151036456301,0.8892281790364895,0.12095861891790281,0.8124535584590222,1.033024862185134,0.43604613641585677,-0.05463194080022757,-1.3918345100796754,-0.4254558593054651,0.4069773929070294,-1.1401556030093374],[-0.43066826049714274,-0.5576552228360783,-0.22684167318525497,-0.7197998622169405,-0.6512646150079349,-0.03575478034815069,0.6766707819690125,-0.7060270457871528,-0.02532139594248894,-0.7042060499143477,0.18398668147163139,-0.3527115821497029,0.5776666895637119,0.6081580439361571,0.2472544374448674,0.7174843660716318],[-0.591469102143533,-0.33166321799822507,0.8088707172597862,-0.6438114950859238,0.909122627238132,-0.5869667261317769,0.8344574507749885,-0.03981739236204622,-0.3226230950431258,-0.4395072333761048,0.6544808745637052,0.42780055507275205,-0.16548631540114575,0.5844223928773523,-0.2967696245821061,0.234102037869646],[0.17796010885638536,-0.08220536430515242,-0.5827029906377026,-0.6339414647842252,0.36919936905071093,-0.9004324836808137,0.414751846798747,0.3154807848026885,-0.6482741532455706,0.1556767373259415,0.5725875426062258,-0.6850932694699705,0.7899518561327924,0.4393720968245049,0.33816097073408635,-0.330021553597005],[-0.6345653094649827,-0.1352164444783801,-0.10022235919062124,-0.675994662534878,0.5887094185970646,0.6153091425562723,0.4542612292325019,0.630766790977843,-0.4998957538412812,0.04743015743438787,-1.0126367279373087,-0.7736517346098251,-0.5220969280193527,1.0160881153174743,-0.10032796457071659,0.38100614476110384],[0.7960119323777853,0.508699721815393,-0.911354695062829,-0.07611990847340126,-0.9498640251323416,-0.08940423198603191,0.646728986471102,-0.7194966857835351,0.15395451143616076,-0.41662441185534954,-0.6492476277517448,-0.05831037118531851,-0.2503387040208943,0.8369683050093284,0.5545417250727035,-0.19651233517629868],[-0.6248492320374114,0.17837366312420946,-0.9400739043060846,-0.7383888329249377,-0.16853382305193182,-0.23298764907258795,-0.7762063291729068,0.0026968450220196953,-0.425664957076075,-0.9652818467922647,-0.31265605754937464,0.19212825225804978,0.634205061353083,0.46196610844185315,0.760141886583085,0.26497593973648526],[-0.2323279045268145,-0.5106137336836905,-0.05752679307633546,0.551623702622178,0.4499313902866846,0.21053883991432665,-0.14574949607161924,-0.8740837800268464,0.1783799934893313,0.7826422181933537,0.23589537738487154,0.5775350815996676,-0.1641058352405893,-0.4761882125233501,0.8460225516199222,0.19396214893509578],[0.6326914268650977,0.26796452801937726,-0.6948440464651005,0.06912152022474727,0.9420963019634088,0.35433523426638575,0.3212519069005515,0.7854076121778023,0.2587841260075007,-0.8612263719354194,-0.4763146872213917,1.121593223856378,-0.06610957877609243,-0.8139599352011232,-0.6586105692198543,-0.011218580256987654],[0.0017428037723621337,-0.8298568910708135,0.10411479387330225,-0.9044743583690624,-0.2689645616506473,-0.3993317808121275,0.129014851480465,-0.7133586473574547,-0.03594021561293248,0.8588008156362856,0.7963403345977635,0.9414071892509575,0.7687177649173185,-0.010702039798877738,0.2590208629983577,0.31309115103058627],[0.4798285269578413,-0.2903388462002412,0.3582983709707581,-0.47071320870137745,0.20366679546220023,0.5022738221033087,0.8821772734527338,0.7656125588041882,0.8373014873068554,0.32217684754215625,-0.7265562107142598,-0.0706629783020758,-0.8696770022108735,0.638887814820225,0.7105896730118575,-0.8824033697641629],[0.8340802781558057,0.27740961899721306,0.7771560346916595,-0.7161203877258897,-0.6756477517344615,0.2827054653235255,-0.35291865517445187,0.07393467383720731,0.9136803591033087,0.8995152848315975,-0.15291847685508841,-0.38770536978836656,0.22776502285692857,0.12288483675396789,-0.20287312140274238,-0.027614215601151404],[0.7864775646745144,-0.8214436638853102,-0.600445567320032,0.5106091244589326,-0.8512833402841338,-0.38815650715679206,0.38629339278815555,0.5409906451740931,-0.23935578291341297,0.15556698249622647,-0.7026927874139153,-0.07213455146247272,-0.7193082690646593,-0.22093147917869427,0.8363725350766615,-0.3949318474465313],[-0.5518372961026787,0.9186383501890085,0.7119841798366662,-0.9259571658418788,-0.3687623715214232,-0.2582414082443232,0.1703211329314227,0.6088640753432704,-0.6755961313450034,-0.53233364251586,-0.49484984302161417,0.6206146963115748,0.21571876506056098,0.8673002085978734,0.43970556263006255,-0.19437141685544645],[-0.9680560998088716,0.3807118438507615,0.014565994441008812,-0.6101744170166432,-0.9179824047920557,-0.5572769612136779,-0.34675636767566953,-0.3547777592874124,0.39997117428574214,-0.9070522987708469,-0.8901117529913778,0.8825290100788217,-0.2808202180019843,0.22422318188066903,-0.22053703342549946,-0.48919159352775],[0.9733183069146598,0.33845379077570437,-0.38324782884475317,0.5092420918422613,-0.5974462662351976,0.6928527746609663,-0.09347996196749353,0.9759739193082098,-0.13801600905813283,0.5190103806941768,0.2079299005225601,0.1837808633774931,0.6594736217046617,0.039758152304477434,0.5174995840140966,-0.6946965751715797],[0.7867333903945943,0.7419026171020713,0.36515273616637955,0.7876106692553462,0.8141235433000742,0.3829941133760051,0.5741180333293365,0.35295244057840547,0.12149642022352714,-0.5250928118715423,-0.46750427091143854,0.0033583571753901253,-0.8740270544318252,0.8465799057634142,-0.6261938031683925,-0.04442984440484743],[0.8554980084595836,-0.09271815051968613,0.2834585289571123,0.6840319707103739,0.8271967416210169,-0.6869771271050795,-0.9076591039737925,-0.4778141071215516,0.4922864344124229,0.8224344445051166,0.5754653512786927,-0.4043961942006784,-0.626197179499735,-0.2360668162114843,-0.10267514288727542,-0.04642548308161709],[0.8035497845626804,-0.3952990432654433,0.24374656803838635,-0.9028215723592501,0.058663864391808485,-0.6840058234515562,-0.6683987327794858,0.16690339834349865,-0.6364008023854995,-0.677143437305904,-0.9200954307911222,0.8021752291995341,0.9774420424777439,0.14991987543864616,-0.900967029383839,0.3408868799449243],[0.24270253639954031,-0.26723494243227197,-0.6408302941018462,-0.6991657403268663,0.30876151937086993,-0.6659994909859388,0.2765198183505926,-0.5950883082627101,0.7033899526350624,-0.9393689798953506,-0.6932354024100058,0.5247640345975473,0.7323167862614959,-0.2368325002296645,0.56773888014144,0.19298057417860193],[-0.5292982172693848,-0.6686933406677965,0.05015774906015017,-0.0852988398548809,-0.6784582207115679,0.5616587296188468,-0.786556503028537,-1.0081854178445153,0.5369925093687662,0.09853098922062663,0.20920163511345116,-0.37175816162971065,-0.13372160107282255,-0.029713412002258643,0.40143577037177475,-0.42027470603291667],[-0.19058448120394614,-0.8656823348093492,-0.8831041204005177,-0.22956780373333877,-0.18627476137725305,0.04271307449367034,0.0292065557854784,0.9252354745328779,0.8211802475696408,-0.9330629580121302,0.0405352954761328,0.026715451869201524,0.6795644807765441,0.7318064353188953,0.8106631767753882,0.05242870678571574],[-0.6240124657502447,0.6763749020316239,-0.6296587930557749,1.1015436466696227,-0.839522514853644,-0.8820740743284711,-0.47343789467404773,0.2850756665558348,0.8817836277895181,-0.7722397688610151,-0.18061315345499043,0.1305673945292908,0.4753715940899895,0.4327036499116473,0.601702573446614,0.8569754022156643],[-0.2503829645143926,-1.080954514075125,0.42389630480227797,1.0683620384817125,-0.7076740095975207,0.021006033432561487,-0.7388533392055082,-1.0183040608142946,-0.1317480454097832,0.02356780576957598,-0.18250642859645536,-0.8042631939912058,-0.5426325049133426,-0.4414652452064514,-0.46166877213324464,-0.5037129746000795],[-0.9132573309640191,0.9424157629245842,0.3192164288897521,-0.4783231791816922,0.11781175648124403,0.20305525320928575,0.44405948412639035,-0.26831105611340794,-0.1781271537678196,-0.8759859471956398,0.6647988566318768,-0.1552458390121473,-0.32717266694776526,0.5843515443724312,0.9554848563816345,0.296973434340031],[0.1538337610850532,0.8427501336854483,-0.9950327119259283,-0.448304882893095,1.0298580204130576,-0.6300147187750061,0.01002913539001061,-0.4261659813185967,-0.4012089115440817,0.5765353305974855,-0.7801487590973409,0.6872508441288808,-0.6024060205201593,-0.17534718851355682,0.8767629643830822,-1.1312069305762844],[-0.11470165865928833,1.0579988877940074,-0.925932388297805,-0.5178800868518774,0.436868500810359,-0.4658169726776992,0.0967128680664739,0.020932174212153667,-0.16702497855660564,1.13825908175755,-0.6368736689706223,1.4679535052626707,-1.0764861268867776,0.9297808210211063,-0.4148558658473587,-0.3625275921203741],[-0.9578713014773916,1.114620338433652,-0.329354457453387,-0.9704306479912682,-0.7715792058031474,0.15090887127475064,-0.1189708301579543,-0.6850861867659366,0.565548439800425,0.065872543820635,0.03525765509996388,-0.1676853546244029,-0.38052316414058385,-1.1112018073615657,-0.5508062566877262,-1.203981639892067],[0.7780859816275915,-0.6029235433655262,-0.8877083425297774,-0.6813884152859275,-0.7894269397543963,0.24269594073724557,0.5132016661733475,-0.664362697653327,0.46046613441092527,-0.8392727218590335,0.8189050679904768,0.8186272360529039,0.056835931505701466,0.48873372363595524,-1.1787281033186134,-0.13755821123163528],[-1.0221739096365134,-0.8152639521421141,-0.49648586672907136,-0.05256442139289563,0.27038780900306797,0.41056981263851033,0.5462493402868879,-0.06553475905735241,-0.17069513809843956,-1.1453205971774731,-0.5369695459376023,-0.39618510870849993,-0.2925317746461992,0.710760706795644,-0.6302864654018399,0.5695564966365974],[-0.011259274755501654,-0.9207527989273314,0.3490032717789877,0.07074503458588137,0.39124766768282,-0.10332656314126827,0.7826032154549971,0.6030434238554359,-0.6123952584024882,-0.883291973875576,-0.22804349821377048,-0.8502989978538323,0.22447359460716956,0.8959052836979008,-0.33023167495170647,0.6990389481200684],[-0.24615494497048185,-0.6469122481701309,-0.2281276707021052,0.26293374690717297,-0.5088122895838658,-0.13120097537999756,0.33764717633420416,-0.7101811199406047,0.2623620185345392,-0.0015109065217091353,0.7056731908613185,-0.062404679008138994,0.24076526870033257,-1.01269175213764,0.5881947137900936,0.0392969077728077],[0.8152515832045727,-0.6790774280745011,1.0990101053641397,1.0021156502026223,0.5510329929796991,0.07405423886815206,-0.5814029036129416,-0.3115681357713011,0.7850995795359417,-0.5730361106635882,-0.29421526470750814,-0.9769066389981566,0.8496522152321763,-0.16782111883420103,0.6270868826461314,0.25688373968792383],[0.5924241008351053,0.7825073490593452,0.7009826898158914,-0.033703532439166774,-0.7694378632534324,0.9308576780631161,0.5161653597197144,0.8090420657575027,0.7091337097139233,-0.33664439743635144,0.03554624330931122,0.23879365874039082,1.098373315504433,0.615913805146228,0.1796001095277776,0.6031335426744152],[-1.0354328956722803,0.7186735556294829,0.01742786106119513,0.07218348889946287,-0.488841400099597,-0.01273856474212799,0.19730391190011046,0.08344041536466722,-0.03494098487655008,0.6674898184446476,-0.8443759461625188,0.9755724642592559,-0.2544314578226982,0.05040545006848102,0.85822656962178,-0.4823541549339112],[-0.5327418437739229,-0.2807658335406246,-0.20843409628324405,0.6354657472653659,0.39951807130915207,-0.26169110925926353,-0.7664023460620122,-0.795212379709663,0.42284670867635876,0.010677764767327467,-0.4804953598826778,-0.3343918534919515,0.18511063705248257,-0.4244334435017641,-0.8123012028803347,-0.6068272444154157],[0.2359016785319642,-0.47497413579534137,1.0741716965055972,-0.9767124675284369,0.7556161931123364,0.13122658901004283,-0.18081812438921427,0.5648420791580806,-0.6733213864202652,0.6264932726057636,-0.2711415568319742,0.6101774232446809,-0.17760379594755984,-1.1333517535705184,-0.458853019443637,-0.12168680249678529],[-0.8737179323199196,0.9618298320777656,0.036981209692481976,-0.66906873324031,0.41327455083321096,0.7771321514320144,0.5665356210489563,-0.3408030275107743,0.9127455728020584,0.5457538118911671,-0.6185798627634163,0.9761424157600844,0.014845443679613268,-0.7979017749524231,-0.5242126836711378,0.26687062444398313],[0.6545103957043161,0.7375040266754755,-0.5305401815887261,-0.41263040027356856,0.6611484620701726,-0.44459418151506735,0.6017001557184116,0.054801237831102245,-0.25875113448222953,-0.5784857458537966,-0.7769898254237178,-0.32639944620616124,-0.9105409963510191,-0.1755635246631373,-0.0007552829803261218,0.2833418121040565],[-0.5066666858977356,-0.37184243367581615,-0.30178732600410996,0.4791564237548882,0.034968227563977994,0.6787071078539775,-0.6232074772829503,0.35706050257876054,0.24588251390307958,0.9999091151989927,0.9772137678863664,0.07120002429756722,-0.21849344670749593,-0.2874458524094794,-0.7196805208330237,-0.6371606973525048],[-0.6033350831497422,0.09441627620875614,0.4677887011234829,-0.04598371879372998,0.42329274846862,0.6441920085627042,-0.8799153761782166,0.39303384664726515,0.6742456959252716,-0.12200305948036227,0.2025228140539288,0.9824116418082922,-0.49242087763732867,-0.24855879190511976,0.6092116657449416,-0.8132341558148855],[-0.006660069131684931,0.9287013095951333,-0.5817828807556142,-0.8281493571962772,0.5531856778317366,-0.5872669444434564,-0.4717970625243826,0.4832522371553769,-0.1142107107192647,-0.19271143159170956,0.9495558587357289,-0.09310962744888185,-0.8213754638468642,0.33647889815750975,0.22794011317427243,-0.09035724184766414],[-0.6863960149327015,-0.8372526824881863,-0.2319623541557787,0.8199667021962345,0.9945963527609085,0.11565127360482563,0.213666657779227,-0.4637121398050872,0.7854569512048344,-0.7041076366319325,0.19830783475597125,-0.8113551991110834,-0.02003026366491234,-0.39012666479447455,-0.30154003752689373,-0.965939503936553],[0.6925700955224467,0.28880631183641814,-0.9054962542970046,-0.08694342133654454,0.653036038686543,0.7539714051375759,0.041914632812691366,-0.2299435070660376,-0.3962322077551934,0.39994468996885635,0.6159627890974817,-0.8063928138631509,0.13151127732622792,0.8048893055951494,0.5485121476462904,-0.18559687486609988],[-0.23294191421388977,-0.06490767222671145,0.09025659977627543,-0.540154271872404,0.3432727108073852,-0.06891539133387736,-0.26357280964005936,0.9166776800825263,0.9072867326581742,-0.2589978280688965,0.07702544623858154,0.3897722725767716,0.6691682167316824,-0.9438997773204996,-0.8457282174267129,-0.2953583461899205],[-0.007075974169856281,-0.4373055871697513,0.054447578172645894,-0.7888260279081964,0.7461634301493332,-0.30429968467387347,-0.823763713239376,-0.8422347645251107,0.7940373188914265,-0.8166942830273136,0.00943385425792842,-0.7740157743140625,0.31587891812835434,-0.7081509662361869,-0.2913258452885481,-0.7856673258287739],[0.8466857355238209,0.04297972557373786,0.5918068011525466,-0.23789139110547675,0.9226673509300354,-0.5636185106772826,-0.6443951313604717,-0.4070176317110126,-0.7446727093336163,-0.8115700601264653,0.7308957327515198,0.9176750638490558,0.18854348440698532,0.3243176386144171,0.9461466751318071,0.3163046770675293],[0.4337415461304941,-0.05613794256335147,0.8368187288584887,0.20217801087769205,-0.521026775521483,-0.6990956047871206,-0.15855731023977793,0.7200580994634471,-0.44380952353870606,0.838015184154695,-0.24020080528719356,0.4208961127829425,-0.13987690720345913,0.4116924847087966,0.524293685065329,-0.5478665098130255],[0.12481009641144668,-0.019531128063389025,-0.5008265992518033,-0.42281463345023385,0.631692292160951,-0.32237919538116006,-1.064113073697808,0.5269642093125236,0.956416637989965,0.2751296959406109,0.978995682180438,-0.792474858505225,0.27165450192006185,-1.083054122646834,0.8614282418350009,0.9542114685316209],[-0.32104315220678287,0.7679734928811832,0.5267281472057507,0.9234133324091865,-0.3985237828952208,1.0175167372608716,1.0009695964825835,0.17530006435808856,-0.6291343119480861,-0.7818011853727093,0.5090191089174756,0.3432501632329314,-0.7522870368005372,-0.6634009350677186,0.7185597499585641,0.06129899918886948],[0.13698379156456625,-0.43468252863742696,-0.3336230355222793,0.6942884053533905,0.7150609182190986,0.005768467053902206,0.8345275727327409,0.05706307215587465,0.10726768450043477,-0.45752765102127296,-0.688639776587794,0.7512455488721469,-0.48971422497017403,0.36726656641717836,-0.5087178769795083,-0.48203807783329894],[0.552572941572686,0.7591343959972202,1.1415402606568765,-0.4237633979511251,0.36776759913022067,0.6593301107990096,-0.8151396287659295,-0.16464549813846308,-0.1573814583865847,-0.8878753421134767,0.9044958351868821,-0.9112244967768807,0.230935501175638,-1.2500099469637473,-0.5006115816143316,0.7534953403877744],[-0.5619543519037923,-0.014848767278188546,-0.1418343527878074,0.647303170301681,0.3713236205475701,0.5756267492603652,-0.08700031757389909,0.324883189813931,-0.8313351746020298,0.8244686946869945,-0.46667401180364215,0.0760765166958678,1.0784244427725123,0.7407466551408859,0.1818511262597385,-0.8155081791121813],[0.3107173909417892,-0.8695550660113331,-0.5907752146486779,-0.21422083144619378,-0.7483989403406724,0.1564289345005369,0.9302550978068729,0.696973476054261,-0.05784111243805566,0.10510495470237602,-0.2773886666348754,-0.6682039635389482,-0.6092208840266926,0.7243019935307851,0.4977630226296866,-0.17629806605278947],[-0.4552534918760334,-0.394121015337097,0.14691926924613394,0.21900541353307149,-0.7285846598508007,-0.19814938063305162,0.7129714094176671,-0.9143008420067009,0.48440328494967816,0.6101947153620233,-0.2641689747653299,-0.42652936325133667,0.5612019869284668,-0.8858681302278321,-0.5744816635908229,-0.5990028433976807],[0.7199576854992148,0.44825643633791606,-0.4907639483885671,-0.5103476033693045,0.014066634278946602,-0.12692146409017185,0.9306073803015725,0.13482371969244922,0.19416437536262132,0.5130400363867593,0.9039959247614109,0.29224138418945717,0.11891253972124867,-0.8979859372810548,0.6108492682778655,-0.4521598643224475],[0.40327990577977646,0.862795596612524,0.2484575570746409,-0.3104188203191723,0.6292192027738054,0.21383916164840538,-0.24374509295942745,0.5282567723005821,0.6284976830705492,0.07530648356400693,0.4288547002499427,1.09115322597825,-0.08965547747771684,-1.1169896222632165,-0.3542557704111876,0.24823772100635857],[0.5892787716494782,0.6581900173143941,0.334161736624852,0.5363492927755692,-0.7687360877097381,0.5919112856438968,-0.5669796922306072,-1.0651482234069052,-0.8611089077094167,-0.2865835360507925,1.1044229555655611,0.44598107840678053,0.4164517104510088,-0.5966906904056338,0.5344458042582754,-0.30035225356094475],[-0.6025883131841532,-0.8141337525178161,-0.44491543352314356,0.644022058335225,-0.26013598980458186,-0.6747470350641526,-0.7043039834769882,-0.09188957715371705,0.807043983252417,0.31556326145997804,-0.6996692765581749,-0.9265209261612595,-0.5173330490573738,0.7401293763666564,0.7848754408575502,0.024210874792172786],[0.14334920812035884,-0.07722600947192719,-0.37866237250664203,-0.6704386898723613,-1.121050814999098,-0.21029266775781108,0.0908023587067629,0.2916434262392894,-0.7843807956017619,-0.5748543096374708,0.08018860481011358,0.22579872969463224,0.532954267412782,0.012016419967042833,0.042950288665805164,0.11629240962631632],[-0.001751213529186589,0.48304618587582226,0.15323441642359809,-0.007953652844157838,0.2984868301022498,-0.7493972165129511,-0.7837866150631674,1.0291637698960687,0.36279914952063824,-1.2158895721534413,-0.40437530417202017,-0.4831959589041854,-0.10341871109569627,-1.0866049879895119,-0.04758705365730673,-1.0751660317224025],[0.007299590731574857,-0.42715527575825896,0.11842225877267425,0.6282926223432783,0.22491360697633958,0.2704888435710833,1.0334460768079932,0.8323196459335238,0.9030101820297269,-0.04579036315681119,-0.016916476210805272,0.6813967902178634,0.23501362925658842,-0.9081188346298927,0.12640382083058285,-0.5203033160362702],[-0.7323907387232849,-0.10203161315162315,-0.7663674938369204,0.22697510119035816,1.0003755906308995,-0.03141694649875743,-0.3845905768203515,-0.4844716142320415,-0.1996069381665222,-0.28232269726325315,-0.8470152067372214,0.4577698941134777,0.19959074261407653,-0.8596995231867129,0.4800334769820317,0.9459920932906443],[0.7319306821402651,-0.16559135564821015,-0.06283114922419628,0.13496026126381142,-0.05526898261719077,0.9630821500644782,0.41922275052425284,-0.9063108453326099,0.010173965007033032,-0.19653107602557318,-0.22330486970433314,-1.0469167805554007,0.5924257981274446,0.3705967874425171,-0.8134735432514697,0.6239350333166656],[-0.3757240173371622,0.17308591935054884,-0.460936181996928,-0.14986859895672028,-0.08832209184298159,0.520480005375597,-0.8366020168494792,0.9488766080405895,0.2266528510295654,0.31620854007260163,-0.6864252245340628,-0.3329784409109187,0.7732398909073795,-0.6142734151832909,-0.9179732128297277,0.6212194308570721],[0.9449861530323171,0.2750188296114704,0.19425839475216877,-0.4259940510683071,-0.4117609011611796,-0.503457011899334,-0.8762184426960316,-0.4174433995230471,-0.997499163171764,-0.7408245988907285,-0.4787720704523202,-0.3194396006597966,0.21171678481370915,0.22602208044281635,0.6404780950867885,-0.8549162451841847],[-0.5610210165821434,0.5276505968721077,0.014652604565178251,-0.05250138493398193,-0.30244597612705304,-0.7563697703825576,-0.20504900472993937,0.8134194788933433,0.29923133140127156,0.0225908278642053,0.3584317055372517,-0.6690397212745274,-0.6534107514864105,-0.6005007725792635,0.9378180275294774,-0.8176110121994258],[-0.12097629921753317,-0.527914915502496,0.47139047153248814,-0.7690561733175465,0.4266228892477115,0.7252353352990091,0.44633551261595183,-0.3293277768620446,-0.12234959314905947,0.03935161282113242,0.870264077773907,-0.3111736306203441,-0.1306138410874622,-0.42566239938420125,-0.31886352422397346,0.018773701783123542],[-0.653397804980036,0.6099437178661034,0.5026052315769274,-0.12723913607858162,-0.5949090456354567,-0.4076294677860246,0.6866082399290341,-0.6157456216188564,-0.21246349625124017,-0.94098011922648,-0.8649388681748338,0.5530364066861253,-0.3449915607072609,-0.20143510106706497,-0.8495199320496698,-0.08615016793005648],[-0.251398272426798,-0.09261480061830296,0.5352287138424421,-0.3012263981277554,-0.5705214337999722,0.07031414521208745,0.7872789755819545,0.9990352561211253,-0.17136205620342304,-0.25208096737639085,0.4043361008309989,-0.960593959834322,0.60066115311982,-0.05543692311717763,0.7085751134138052,-0.8378632752380244],[0.7474071565228724,0.21023573721334765,-0.4075097901929601,-0.6615004591435212,0.13072560750478956,-0.8710339857142548,-0.812343932458282,-0.8170485199149184,-0.22791446956267158,-0.2465965544434705,-0.3195707000396184,-0.8068446667802585,0.26490448255701393,0.4603645836335346,0.021656179571284184,0.07813494108569863],[-0.3735779887813546,0.0056451210634289595,0.6623148958341059,-0.5296329480677233,0.42754825790987727,0.4413948533583518,0.9001691322736805,-0.5335716149244707,0.5463090067724079,-0.5209076972241409,-0.2777250662459707,-0.7183503460390064,0.2181429598231004,-0.34767009632617984,0.08924824371764473,0.6518123256866684],[-0.6290825684809778,0.3532365124048389,0.4167895830105288,0.6275674777413549,-0.0998215468561714,0.4094753479759592,-0.43077765447161775,-0.266577331970407,-0.9068011950531782,-0.1387247515837653,0.9773868553184788,0.14378404734649886,0.8856855911529573,-0.9239219627143558,-0.3073302206618842,0.5440639450325779],[-0.9784294070846915,-0.7937476960681509,-0.5118810768543569,0.39169492409489015,0.7045932620894146,-0.9932257153018695,0.657175078012572,0.4283269364993081,0.9724487352222106,-0.714907066112342,0.7541995575199905,-0.3961900381920036,-0.6925994059109755,0.5059000652404722,0.12115273633457102,0.9525124343761235],[0.4590109313983506,0.20831177012114876,-0.400771993347977,-0.11188062306616686,-0.7994682446970205,0.8405362400822867,-0.5459182782702787,-0.5211470306292441,0.03826415882760026,-0.049576342069519,0.9284074414349015,0.7986706283841833,-0.9680919451884531,0.19247757880721528,0.08282878079953848,0.7984552272062904],[0.2721349731891989,0.4336130501690971,-0.6353217996939331,-0.3004081839423729,0.6449414842525871,-0.5279813488811262,-0.3583360344488522,0.46038623586640215,-0.5010731601386569,-0.37888961034350643,-0.9853209389933841,-0.45553492399397566,-0.3920218855998763,-0.5864014061372367,-0.4200586796748871,0.868573324660677],[-0.8360863459566863,0.3703819286655537,-0.6776572221077106,0.2031390251187183,0.8339388525166961,0.9578324368955761,0.42928017162828536,0.5468767739382251,0.1333404800650465,0.6786019218796021,0.7169657873111925,0.19041769882471535,-0.0047349196607678,-0.6869381323098916,-0.0354181102044789,-0.2469600844619459],[0.9492828659905841,-0.9374244968819199,0.9272662570663962,0.1403133456096828,-1.1013624492449394,0.6588064335765029,0.8624669668461549,-0.7277089792627845,-0.6718053896356042,-0.5633269589320199,0.6975445930888332,0.6108086577724298,0.575698737938005,-0.5415876117909346,0.7102149220616516,0.6643585046945327],[-0.5335006096509562,0.04468510250745496,-0.14481154501727744,0.878101528204422,0.4383813206963152,1.0123069739962975,-0.39767008952361205,0.8480894634649936,1.0233301352997883,0.7826383116800538,0.24254784453195558,0.6702890230479315,0.5884445184494409,0.597453811617696,-0.12353465285903828,0.9151694060493827],[-0.33818291714934456,-0.5579426031349333,-0.30475307946416624,-0.0450646938131501,0.6988551555423486,0.20970558881783416,-0.8447611830226646,0.3010648730915089,-0.870621187871314,-0.9453145706749677,0.3786786506783196,-0.4944992881006534,0.1871200010896693,-0.8593287297045465,1.1292852182726978,-0.27040533628984387],[0.5379601890165988,0.14518903393514376,-1.3176395393652445,-0.7824173093165518,-0.6367332599720389,-0.5167412391119073,0.8549378796548236,0.019381584161645177,-0.5014978189485939,0.6688246769301989,-0.26456009144759524,-0.021611500312021917,0.6309362942804624,-0.6899309291473276,0.8193943801370143,0.7729271225489506],[-0.6387962400336237,-0.9000998285533809,-1.1540976451214455,-0.5819947908458265,-0.05294421870420386,0.7427475574189423,-0.37920627675672863,0.1962286834682788,0.34637598806243486,-0.2630648932648251,0.9034351925489602,0.5740035231412053,-0.5642007172146611,0.16154485256606232,-0.9878153510613471,0.6954443345610579],[0.2939284981938086,-0.5299338639099078,0.09360922796885311,-0.05564903377876258,-0.2646104146631186,-0.5953496398137608,0.7919418248748374,-1.35663558996534,0.5241341919521164,-0.8062212261360137,0.5832230152862381,-0.1916773260135327,0.1371624539642224,-0.1611820290272395,0.485502276884788,0.17651294163511952],[-0.5902237430402246,0.01958288654164636,-0.42486240275554243,-0.8821351113220635,0.03730390014373763,-0.09315715664859651,0.04838296852520004,-0.39606011200742136,1.1890898303353623,0.9427712631220714,-0.7835543406696728,-0.2501019020722984,-0.011022660476811767,-0.6052394744083656,-0.08061421653202351,-0.9216277950306972],[0.568557570366561,-0.3158861213535765,0.7428552218937201,1.0256351211780934,-0.2921648706778225,0.45588025598103904,-0.7281215770784316,-0.3927969812213006,-0.793601850081447,-1.041765420256956,-0.37184126654306066,-0.1740465413282461,-0.8011561795737338,-0.42695459398873137,0.5957624856532836,-0.1263983817367138],[0.8720294199060845,0.32859495191837523,-0.619397740329593,0.8874379285169635,-0.11155646474000776,0.4885365234118114,0.8535995387064811,0.7602081303762463,-0.06685474878248425,0.26712523362500523,-0.30354306437880235,-1.0343676939371182,-0.36040554487607135,0.7398368740122672,-0.01034711787258923,0.24047793556461766],[0.13561786358762967,-0.41607250969911597,0.08678602121990808,-0.8085937370944104,0.5090358223967654,-0.0819657063793725,0.19435008916615654,-1.0444885904271786,-0.5792963082681575,-0.5637894506113718,-0.12748432482305438,0.4986567013277252,-0.6956652382960844,-0.24429650560038088,0.641614490398045,-1.1597719308553427],[-0.8460732951092504,-0.18073054135742428,-0.4466764204267434,0.3824516778042163,0.7380634990431273,-0.7026350994663727,-0.25707974104276277,-0.3654076348570508,-1.0378617397507068,-0.6618695156130323,-0.6715553980918064,0.15673516506453264,0.4531923487986181,1.1862412614915925,0.3470799281647355,0.33915590738922957],[0.42742899557135333,-0.5136067138159744,-0.17330341842984387,0.5005396019412767,-0.537025010389388,-0.8551842925711935,-0.33846106258736186,-0.8147397199730828,-0.4359204799524471,-0.7238436988105755,0.7915232165766112,-0.20875934393018095,-0.7811894257760341,-0.23204860500601607,-0.5500824983367739,-0.3112377481929527],[-0.2983336540453228,-0.48009898844781684,-0.20281699781480184,-0.580001846120908,0.8802871074721335,-0.6916582362424819,0.47046981598295146,0.06520230730302855,-0.5494685902130921,-0.22757443520962545,-0.9295103058110075,-0.4585721204814097,0.32750989591851226,0.3619738910559898,-0.5611547762574169,-0.2809277371130794],[0.3444452972012664,1.0899100885135902,-0.024812620759897763,-0.23759059449661923,-0.6730588370307691,-0.8647806403566913,-1.0779856677311135,0.5484209230309357,0.168660866087709,-0.7183620041174137,0.22115691672897195,0.23727787753299495,-0.007413258839785994,-0.9428565962132346,-0.7776918724474797,-0.701060611316238],[0.362802938674366,-0.8173123082139282,-0.6114195758388211,1.0406891985577134,0.12033551306851048,0.21685313544783533,0.5734035673279309,1.0657385279628915,-0.1352044891310099,-0.02725517324132079,0.770277764824644,-0.8259258480710582,-0.023447710966806534,-0.3303161169152363,0.7229154972299552,-0.03252133058539806],[-0.030851282180127358,0.955105506050064,0.5507947769477397,-0.8252895800864936,-0.10536512974288413,-0.25510619411679997,0.5333664919520873,0.42671719858232937,-0.7418706726555508,-0.5815181485716832,0.22054102923590016,0.06123833729309694,-0.1624941433524882,0.8355569364813152,-0.7922651223132049,0.9753542953799461],[-0.28937085192109224,-0.7988880319645477,0.08046025878604857,-0.8079858912344924,-0.24564267478899593,0.9797896197585474,0.7387016447426138,0.9931370885877575,0.038379584887771045,0.11549090337519985,0.7942840899737047,0.7131571026254853,-0.5815582169007327,-0.09807691191424617,0.006066268525781737,0.879597905216134],[0.7593419979384888,0.9639292422853707,0.7561397502184404,-0.09566178134104675,0.950515369543615,-0.752842048380499,0.7985315325153262,0.9621562982906062,0.4207276485824689,0.596609952510434,0.35432120120653154,0.4212534026456134,0.6835608033548497,-0.05790469607769255,0.3974578652698493,-0.2250810475321101],[-0.41546926345150315,0.4656175546993442,0.06141769008644982,0.792816364434834,0.7449366431598787,0.7123663137311973,-0.29686680580013514,0.533759181842206,0.9720402678718174,0.752612553931383,-0.19893086448730024,-0.9612861851632433,0.2624248898753092,0.8567975245256396,0.8810946317215991,0.6456391362316505],[-0.5719568536952724,0.6814740182186925,-0.2645786406258428,0.10153675629293746,-0.38455567126253243,-0.8113329763306534,-0.03573008109461817,0.9078251342021342,0.3890233622711974,-0.457408427684193,-0.9257714774283303,0.32970974478027815,0.6194406570656539,-0.7985209257454446,0.4061764231818423,0.39496638693369146],[0.013769031214840854,-0.14011875040202382,-0.7001696138646332,-0.3063351952208788,-0.00506877717630605,-0.6318173327476035,0.41375372237504715,-0.06733466991630976,0.9747026556546774,-0.4675114606132267,0.4852185313953261,-0.2732621066135734,-0.5926137350204295,-0.9082285439377142,0.40056718594780305,0.5982199799355978],[0.006207680578537378,0.7339472441665253,-0.4297146594412746,0.03487779336974661,0.03906829053327909,0.0753930889210781,0.695533712981875,0.9372450479669618,-0.45524086496824,0.5420769370960024,0.9371064819104977,0.7588307444842828,0.8084354267066938,0.5002145230413197,-0.7774478839662953,0.9186027440563516],[-0.14293825220340928,-0.6116784423784907,-0.6916743559134115,0.9262466135424892,0.9741003935603723,0.0002549981298276549,0.9509643363927038,0.8387750563476835,-0.77834557115083,0.9368405350607065,0.597661293304891,0.5650858760305959,0.05276572898431109,0.39831232692265583,0.8227269327831754,0.15471715524131735],[0.6706308567295034,0.6358577231624856,-0.6051096410985162,0.8701641676378618,-0.5186541374182885,0.37574872644413526,-0.7800727918406554,0.8099544752143886,-0.12007867249765036,0.5196476779467316,0.12530926071089032,-0.11356040463212791,0.33885414352372134,-0.4618693303479686,-0.6756156028859563,-0.7600957268695807],[0.33619656806748965,-0.8719583397082378,-0.04009133418091082,-0.5686687552077503,0.6483518174737095,-0.9717285872066754,0.7572432025859275,0.8367292959401058,0.18242349911100364,-0.390247059709377,-0.011211715852530002,0.8774136908612173,0.3361602181994643,0.4258727857760731,0.12779868940572747,-0.2772887997831863],[-0.5802551307572323,0.7558228682656929,0.08247360544525728,-0.4970175825829406,-0.2975193084957559,0.06949223711232122,-0.46896849296440024,0.6651792807723158,-0.012811444233341795,-0.30372120216148835,-0.6448519134757253,0.4789144482055625,-0.7925070424424998,-0.13399820671738016,0.2654790484122187,0.058799334469896714],[-0.27475655576064906,0.9779489398914842,0.18766551649815755,0.06923149335721224,0.3287634205084453,0.2460541107824752,0.5742557020110919,0.8780008914108137,0.08664410091425756,-0.9056657632812155,0.3560207286730921,-0.16518287793525488,-0.7954569185120057,-0.6420291986833759,0.1838649813706139,-0.7160364109962276],[-0.4093768746765101,0.7189259157590379,-0.5940406783608186,-0.0744324681749336,0.23890943337999415,0.6941461199596023,-1.1744781472878507,0.176390097773798,-0.9350260728749455,-0.17456805203244047,-0.4245005391921307,-0.48309302347089983,-0.011352949752574316,-0.1573519776084331,-0.7480589925138387,0.12500611469174003],[0.05078770871142746,-0.13179697247597266,-0.8196170341987319,0.43755620737790535,0.15513378083468332,-0.11176124734856074,0.7557780769112394,0.27861361451977595,0.8669397066225115,0.43445729721157056,-0.3528718838984144,0.3246794461964808,-0.5727239121532852,0.5500079033409424,0.8056144935846326,0.012248665943919601],[-1.0003836950273564,0.5991117547377752,-0.8229333756304739,0.7267155224685202,0.7347206589873174,-0.7019101492521919,-0.7610842986702412,-0.31798915160934366,0.02096876202116267,0.3154243401070637,-1.113608140021686,0.5339732281915575,0.339336131350608,0.42019046151726597,0.3119205090367648,1.0170655120286232],[0.367910321928968,-0.6252212328195637,0.7323098702145393,-0.6141578902429223,0.9374643149768906,0.1630749170353009,0.6667311264631314,0.2941291379360535,0.18353387513050784,-0.7806583315883864,-0.42785224123105464,-0.4617680483266946,-0.1133249458753796,0.06886172323848017,0.5448382387709974,0.7573162514847493],[-0.23498757500643638,0.39483670481844024,0.4159429366061585,0.24018073562304293,0.8789918894260802,0.4993789000670843,0.3521647033600808,-0.19680375246886872,-0.8318171287391322,-0.7881073502745557,0.38665862167187515,-0.4768029960989665,0.6386523629748463,-0.5318646272487068,-0.7973245870366086,-0.22971443542719955],[0.8560210529852643,-0.774756802919305,0.41440027360510107,-0.05087917091093419,-0.421592204328992,-0.8983839511264174,0.7723161740628445,-0.2103830680474089,-0.8117113992429825,0.834674581028326,0.4005195321595826,-0.7017207403457276,-1.0496984839556092,0.8099541210254463,0.08247451079628661,-0.5921955867613745],[-0.8942270469463671,0.13351034003819576,-0.9392420980813415,0.8688589770546761,1.0881398075688624,-0.13729368600377603,-0.5467412701774134,-0.1315030690391601,0.6975928231636065,-0.7636010160671733,-0.5952229671947687,0.18395614480537376,0.5145021852254791,-0.8504481346356411,0.09786222347127348,-0.1273838923869943],[-0.5102559827660844,1.0388258687076575,-0.5240291295032499,-0.055306539648070654,0.19018019081790077,0.5940863627391992,-0.16168766638238927,-0.7337413554157992,0.8978863021124539,0.7454817979086275,0.12337160865699426,-0.08826403501761411,-0.4996310282104932,0.026570583362307044,1.137358835603402,-0.6165183981982544],[-0.7642235123032038,-0.1236016049672638,0.020399629506665833,-0.47755534184694215,0.5706673673799693,0.6054598184840139,0.7956334673656588,0.40365888627093904,0.588157803600159,0.2940150999006184,0.034838920068782385,0.24234862731797213,0.6105870842984596,-0.6834148384569886,-0.7321226167785179,-0.3091929320341114],[-0.026037474663759438,0.9030284821406508,-0.45540576707345115,0.2472654689304343,-1.5773643774484112,0.08670213644838182,-0.5658001609111809,0.4630524266823321,0.20602104650017158,-1.1191393110091596,-0.5492496340761718,-0.0973684358940625,0.29126167583467605,0.5008593992460872,0.4125777206197644,-0.8717006261169653],[0.8801244168137772,-0.42583350949890314,0.11298959602419428,0.34463836684341403,-0.5745307335770793,-0.7362513161772228,-0.8274312924285246,0.3525125194152429,-0.8999883288879748,-0.504797244229552,0.9669815410648394,0.22544622139435005,-0.4721318018331971,0.6833640879354923,0.7568800308636034,-0.037910379992070246],[0.6940584410844135,-0.03228571748632073,-0.17549878730285923,-1.1226915669801956,-0.43617053345654283,0.29227814181416917,0.46026468647551294,0.058641133094835374,-0.3521372257227898,0.29326450078200084,0.28713924552781733,-0.729819131785115,0.8039246252739694,-0.9132428031902844,-0.4649847289991812,0.7911265540165994],[-0.9714742503566701,-1.027958642259125,0.13319660370998915,0.3288395292922978,0.8379286159062312,0.6067672336740407,0.09751982887559285,0.08792437992114734,-0.07710268176800288,1.0855329095485244,-0.5878386105267743,-0.06819898477629413,0.14583284628935894,0.08722998039354024,0.5216017344771852,0.1962399416111692],[-0.9231697288892052,-0.22982537249575918,0.8458151446152167,-0.9722790657534668,0.39561343852852254,0.9239160643469412,-0.18011341300505268,-0.21515631776996041,0.7791861300683808,-0.28860538996353413,1.0713739384789203,-0.1859606575587291,0.2959940985995008,0.6736261502290757,0.1695837890302155,0.4636902923005672],[0.631620015211988,0.5498071195075998,0.41650845241282997,0.7389829411118108,-0.4918441274185358,-0.3827657685636865,-0.06713707211988322,-0.6673536239645299,0.00849051982406883,-0.2869491433409148,0.6051102053122307,-0.07394655995547281,0.9803210996664191,0.6003663252301112,-0.5163712327665213,0.7635289649023836],[0.8716948080285726,0.7106976083511498,0.31550646009567584,-0.25334320754481765,0.9057669494099763,-0.5800641865517038,0.4845307571610131,-0.8438059091687943,-0.4981148069810209,0.790959367496946,-0.563465764012628,0.2748996036175844,-0.033051941260281964,-0.8470033077029105,0.5261434495467883,0.6806754230898266],[0.38333794042088565,-0.9679118623197036,-0.24123029030570375,0.5255204795406696,-0.9688447400416078,0.6423945599279994,0.2712844493653863,0.9604121543761681,0.28561544124608096,-0.2802026250728895,-0.21582374260915316,-0.1837789267146417,0.37095919564894775,0.368328668320808,0.8272583277336345,0.7193736087745237],[-0.9887561308874488,-0.22584802056700592,-0.33273143409260353,0.486905701620588,-0.22397433925889,-0.08454187943437175,-0.5663683098091337,0.9135407714721158,-0.32722292333267644,0.7495182724780962,-0.02227688879072831,0.05240014604140919,-0.30489882508702193,0.3123956859959205,0.06930314736048526,0.6482441405379165],[0.4610396389434177,0.3007115999150729,0.23387086444419758,-0.6560098905281468,-0.3098631112421515,-0.9643732450243601,-0.7210947280617344,-0.5560698211814996,-0.8587584407445177,0.9689561936550728,-0.37456375536280095,0.5668250066424325,0.6281839096188166,-0.5634572068038004,-0.9514701648195576,0.27997292764718384],[-0.07167438864752862,-0.12789041302910098,0.9321870637504284,-0.21170759565528297,0.745042872538725,0.4304812072115931,-0.6856855745542982,-0.017142084487421272,-0.2001394745138363,-0.0006481667321249773,-0.9643156257431502,0.017587417023559038,-0.13851144110956692,-0.3364294237304182,0.5274243291064247,-0.5455368335576574],[-0.678102537426045,-0.649455487936919,0.7360887190641074,0.23489866868411458,0.32086584831652276,-0.7690541347958382,0.18374255588141652,0.5016210770631009,-0.2391862358652288,-0.534916495144707,-0.17209286697672255,0.9978665539719196,-0.7008055000969584,0.4625302280848307,-0.4986877764367743,-0.5117378780781023],[-0.30426450879799427,0.7789839550643958,-0.5084747035782136,-0.3556364633655318,-0.3444873695582915,-0.7482163592680142,-0.6174110740932783,0.663490001286549,0.2578604864700327,-0.11537050750075917,-0.306478611196332,-0.7327151188775662,0.6856476489351047,0.6393494942582234,0.45927565997751163,0.5789882252129788],[0.43452509199566425,0.26722556920002916,0.9081327631985956,0.7807027603556818,0.05747260203100302,0.7153498522455561,-0.8839201162907577,-0.2658201375058922,0.9853254977975241,-0.4187972755090881,-0.7339857607461293,0.21874498165552048,-0.6732815353802666,0.007788467051166759,-0.7487522279610506,-0.5580016148564635],[-0.7695176552661782,-0.09390298378282447,-0.8279639552347442,0.03119823896039131,0.025437614628739613,0.9229240330081501,-0.091357706880284,0.43161254127128723,-0.5304744249134501,-0.4086225623451365,-0.20868824153638466,-0.8801047488692504,-0.38362022772817106,0.05084914643946492,-0.5691986090835974,-0.12580922407725748],[-0.38411639064568615,-0.6546697495363532,-0.9856072932557036,-0.34278905952219185,0.5981611249454195,0.6512289753473386,-0.4942075317150798,-0.6579125596345716,0.9139586980778525,-0.28078376946284456,0.6310774015316643,0.9037994140802446,0.8893253381754409,-0.27216044131269435,0.26055671055308105,-0.8574423954738477],[0.40593743377809854,-0.9727323924043914,-0.6878644009263417,-0.6399154564174383,0.7034716195487416,0.8313336656038599,-0.48631442931188307,-0.989079077914194,-0.8645316791278326,-0.22314919218096874,-0.441991994782581,-0.8224527363386902,-0.5998143228482586,-0.07863275666078406,-0.7700976471122711,0.5055157320699237],[0.08941618964441034,-0.915248790599922,0.4202480804021502,-0.09922199289032152,0.25108490013346874,-0.020987586820132798,-0.5039484779800754,0.906559398531853,0.01680619392731897,0.919944647627116,0.8884216605874444,-0.914012417696255,-0.3993116111185042,-0.7372120858569198,0.671924288624616,0.5029953045333313],[-0.47347227760856914,0.21805217203665528,-0.9270434809343535,-0.6583700841099511,-0.30679524472049957,0.8921848546717266,0.5849820081242325,-0.14848009853024013,0.22138314906693823,0.6069434258132675,-0.7079082834336514,0.47408207179200224,-0.17923928726268334,-0.8480666216239565,-0.2161805348871808,0.12027954334857016],[-0.13563801080941215,0.7152688100512326,0.9369427854063344,-1.0122658781399925,-0.8192919697948525,1.0234317309488197,-1.029599547597774,-0.8618380259321996,0.12249167354984171,0.3528066876764681,0.5037623351098884,-0.18973859088341574,-0.24297982995029208,-0.4945773863332383,1.0160541986647684,-0.7141376058311055],[0.398467740352671,0.03767273631688727,0.09661348155387621,-0.3345262520396173,0.5606273692118983,-0.8138467234067367,-0.4901875498397237,0.8799530725876545,0.9702497580264327,-0.7739788333252552,-0.11663583741603673,0.5617175339315248,0.32329310332714767,-0.6336770526108059,0.41257860204726826,-0.3365255769766371],[-0.1092717385923521,-0.667119430458619,-0.6407677330764426,0.4096914000616789,0.17453809230078393,0.988728530581945,0.7820716995813767,-0.29527011079794097,0.745669454601402,-0.9766517920353941,-1.1848508546970213,-0.8002353065604694,-0.18695760800487563,-0.8404696362081943,0.3737434251396637,-0.3011469665611836],[0.5628594167331663,-0.04714994611734043,-1.1277181133163674,-1.0893582572256246,0.4077568025536199,0.9111154993192601,-0.4875568511095242,-0.5145486572240346,0.5533024433396239,0.1948284438899429,1.1595861968100147,-0.8089615350805832,0.7892937783480616,-0.3553224619717387,-0.9233842860875383,0.23923548422793042],[-0.9474370831838945,-0.1545656575529808,-0.6639638795862985,-0.5897690895443929,0.6154473303651269,-0.581802650355469,-1.00505861135627,-0.478311723873029,0.26193173233645367,0.07898877137475327,0.21428722482449447,-0.7195410529137775,-0.5143574986083712,-0.10943692036743866,-0.7397736993861707,0.4308603497135125],[-0.5969848662993517,0.53187381206585,0.06865433642063264,0.7320523966744881,-0.5613956947549988,-0.5534483463362307,0.5587830471952204,-0.6219311332403942,0.13985544338770298,0.28411339229131527,0.10374289263499137,-0.29556467916199686,0.3689341258895858,-0.6589918478534716,0.7254626805319612,0.6492112869637372],[-0.7655445290279412,0.8520913071108642,-0.1853953618433412,0.5220835401887003,-0.9405692331309861,-0.10468455617192109,0.6482048420317594,-0.6667370551158112,0.42318222485238555,0.14592918815004507,1.0233116687211676,-0.7561585888536148,-0.7593653855632853,-1.0190840804905892,0.569040008741863,0.20408829693964337],[0.27069176584889587,-0.18214662609718263,0.8305097831630655,-0.5220515886390732,0.5743482941748422,-0.1875213924087965,0.05453519817907998,0.05479171062706178,0.16872482056691737,-0.7923225126399236,0.11254394576396617,-0.32330732894781883,-0.3931217211741729,-0.006839044192704698,0.3899139830390493,0.009258736231470268],[0.6257865110764613,0.2875181307219825,-0.4352922055544879,0.9905625135326487,-1.0188557866767254,-0.2576610727334757,-0.886883087731368,0.897985748799255,-0.21885068709851419,0.34996553661683,-0.16965677414879873,0.2077310970425214,-0.027868333552410956,0.36884338054902543,0.3472268515083774,0.6057199244214706],[-0.06458567961740226,0.4920807692188874,0.3569539416585336,0.7810056159416799,-0.7387324903872327,-1.0005130232464252,0.8504483667569046,1.177599614141103,-0.6861646498993265,-0.6827450731815535,0.7268380902696977,0.1693507562150241,0.6336035159922628,0.35278086240923046,0.423109324310825,-0.17117399320165438],[-0.22009349597911781,-0.8902825301996793,0.37641152148283014,-0.7407076383596828,-0.1442152289278114,-0.04309192049261502,0.49336363524002047,0.3365966326595343,0.30210628525668093,-0.9694857972333721,0.30924828488718975,-0.23086464195364761,-0.7973571730615866,-0.2587636790403197,-0.38127737497164216,-0.13039115363130566],[0.07186428359521779,-0.8966069362350357,0.7575650468403455,-0.38535976864754445,-1.0228777197207757,-0.7668329699498126,-0.8425998101042829,-0.4032683867119071,0.2698533001878189,0.7924223808424278,-0.46016791063868173,-0.6719652376027051,0.7906378555475211,-0.36137519123772355,-0.42793973738233776,-0.8510827819980323],[0.5529426127429394,-0.40857918512493807,-0.19867439104450013,-1.069459335504036,0.05376645904111902,-0.4612904808083154,0.4388305603781155,0.018555346389842166,0.6953309421228316,-0.9410295600859818,-0.20512684071843929,-0.4856653844660079,-0.5034414271655233,-0.7844913740843524,-0.7164914910678941,-0.34654354816880556],[-0.07375230463673907,-0.026292694096515277,-0.2298918829063318,-0.9236924776438964,0.5698416634866453,0.5370088838392855,0.9202942444828528,0.057973199471198535,-0.314640328909534,-0.0836055356177563,0.5137478230078749,0.8629326589409334,-0.03328923953645645,-0.19674106754129425,-0.09852997365055492,-0.5505732411103856],[-1.0818307583348803,-0.6756314157061473,-0.8112724125654457,-0.3916800193239377,-0.124956476034001,0.3340980928014993,-0.4090585333476285,0.21080750577026602,-0.16014917789274408,0.27099598892670157,-0.12231166594357797,-0.9067815207667774,-0.5675138166210429,0.41149927202245273,0.34583111978167475,-0.21668405746913663],[0.9206554650547386,0.48610163518480815,-0.3149658321832547,-0.9315034525859355,-0.8644275188925681,0.9719924259180697,-1.0715636792845913,-0.1956019002349702,0.15360648288653525,0.040503419860220935,-0.00043893254759321584,-0.5291847130151812,-0.42645565326567214,-0.8511714542520757,0.8236852614048988,0.12364478680436397],[-0.5560544900087647,-0.03710728072089875,-0.0434193072061233,0.47062366925922694,0.8777587917515519,0.32298228627904013,-0.130092808670506,0.7854531132897615,-0.9857870247165734,-0.9120752978144804,-0.6956686560116645,0.5271560985585002,-0.9390514173980096,-0.5999536593439294,0.21274463810077293,0.9201279559968634],[-0.36480444697430636,-0.14902096205189252,0.7822665809786509,-0.9776574279459651,-0.7183602424851423,-0.9347917600226814,0.6501874918366473,0.2376607107368991,-0.8894876805438874,-0.7454083703020831,0.7848064403794854,0.4640918965660923,0.8925189200598078,-0.24565740503300937,-0.6123391062180157,-0.2497660656551668],[0.10400924512511889,-0.05875031182682067,0.7589039989154109,-0.3554959789387695,-0.5602449075472142,-0.7895740411696659,0.5492348418760487,-0.3342260032874784,-0.45561603563213504,-0.49575178314458057,-0.7044589212704895,0.5523225403660064,-0.4107392653445485,0.058306465539160524,0.4851978886904864,0.556615827908268],[-0.7147637925537111,-0.8806266961823996,0.6177716002210798,0.5604345872145302,-0.28589836900626153,0.9358719392369608,-0.8744350105994645,0.3656423772519135,-0.50002014531916,-0.9311915394029286,-0.5984148938773668,0.31690158250316003,0.11901857405363803,0.17194192267961617,-0.29351657320442204,-0.5610880961099816],[0.6504306057511418,-0.7264104407094778,0.8037288399840881,0.8605604579309887,-0.5393118390871017,0.42752847299616636,0.8763171400859493,-0.665111440874461,0.3438059007428609,-0.1595902617018985,-0.9823272770148974,-0.24466871330848994,-0.6475829333590695,0.813943540320353,0.9728727878108288,-0.3006049867923113],[-0.31462789818474457,0.7742693248611325,-0.1053333821284661,0.4047620616050942,-0.5575199183945374,0.28369764912486506,0.9136832729010274,0.7712139357633632,0.9510917514340553,-0.8995644824412472,-0.31893881941795144,-0.9640833442723786,0.5529850921519572,0.6835394102909707,-0.023016828360380437,0.39128520376845977],[0.15747732380272472,0.05239424159375128,-0.08270897720218917,0.5060639857396949,0.2723334054061066,0.64195601662064,-0.32557769991741337,0.49751430362146376,-0.521070520684372,-0.5676956868592558,-0.7345122882262904,-0.0911230119231643,0.15337366428869093,-0.6239800827217548,-0.19388180535173127,-0.7400125355601785],[0.17665787130408672,0.19429139701669618,-0.25282947543933654,-0.5534803882686012,0.2637047239328125,-0.9179397650072896,-0.354265457110714,-0.7966667989917324,0.2465574361218974,-0.5958405228343704,0.4902179413891039,0.3126116143827127,0.7370357000471945,0.46955747372262113,0.6114145927703918,-0.6986006900666344],[0.6764119251249086,-0.10083234022204302,-0.2636883298532622,0.5305828887601032,-0.571085293589169,-0.744538108126823,0.05234707976002495,-0.32295276163270215,-0.2865434779929532,0.8523380466599497,0.9894235813366001,0.6734628132836806,-0.646355385116189,-0.8738014890440429,0.058221990303310545,0.6246674886270625],[-0.45234440395330955,0.049898638913394855,0.3277703314615903,-0.49079956232853394,0.3777242531074698,-0.8204913366993596,-0.6002515353838902,-0.047126922612808375,-0.01128835573233955,-0.1027919150144272,0.512331677417921,0.8267343887767469,-0.7989038955568715,0.34022196744613087,-0.4224603214628351,0.25141436076451207],[-0.9542158060989299,-0.5608795112131695,-0.9935821916622771,-0.35395588507942266,-0.5744563600901351,0.1767835490509464,0.3123991555913137,-0.11454170938373087,0.44941721779803023,0.4062315180752152,-0.7218978014962629,-0.17971754763508718,-0.8311823913966707,-0.7744845433867735,0.9920146388328872,0.4182418209362404],[-0.4506456729587174,0.09413468822162496,-0.651321911264942,0.1786747485871416,-0.8111999907216618,0.5542610362391649,-0.47697577237514555,0.36663393204045613,0.19457613394481577,0.642583105983026,0.6042851284106132,-0.41884652760134866,-0.47097235494076095,-0.7186948826207029,0.0764112309008147,0.2477713100987433],[-0.35513455872524125,-0.7114323272076646,-0.9277539081293886,-0.07446256159231894,0.9304280292272541,-0.17655763575953712,-0.24081149193614418,0.35793016060595206,-0.5050176983076972,0.49082575912071436,-0.42789788865488454,0.849149894918284,0.4149672851497491,0.002330934359871663,1.003315268718914,0.012730396547651441],[-0.13316024726413528,-0.3041946913620488,0.2665708642024735,0.42648249170080654,0.7099846435558997,-0.9857782661465501,0.725194688578708,0.3945430226310113,0.09533524467542381,0.4519749386275078,0.5491916253241567,-0.7510958541093082,-1.0463181874620726,0.7315195709518233,-0.6977050578835438,-0.09944792189269705],[-0.2526869262532519,-0.7688068682168785,0.18159039470822086,-0.8177831172772325,0.594622925569921,0.06009080855832247,0.6347465131350535,-0.6693231942631239,-0.9229353239151326,0.7019656695907739,-0.015345633386777646,-0.4487927506293556,0.9234597456474579,-0.22989832518222078,-0.9526711919682291,-0.09643764317305803],[-0.6970587646968258,0.9247314027794823,0.2706985451342462,0.513058059445846,-0.6316628104389375,0.5012691470659596,-0.4767227452349428,-0.04207948729877382,-0.5596286171047895,-0.46644032732047863,-0.30613109163667823,0.607859387876349,-0.13717509194902203,0.1418175651411394,0.1938659046616497,-0.502085749730257],[-0.6317733210453819,-0.3145625401396978,0.5906450559435289,-0.015255171691566581,0.018261323244917582,-0.5824192334641751,0.18548805794289608,0.4609995827315122,-0.5890194316186671,0.25961611948058866,0.6987592263034119,-0.23387504654121172,-0.20419407708343443,-0.19409858783144707,-0.19518119837665002,-0.7077567046251627],[0.061999927036453066,-0.2548056511748149,0.8246523618560359,-0.875139608134646,-0.17273947746358184,-0.5796551295927116,-0.30144762756221255,0.871717622454911,-0.34508730498055157,0.35654125035348666,-0.006751136011353991,0.8657726683182594,0.6555826355384144,0.7176915379109975,-0.5208687440308513,0.8802639650085997],[-0.1739168354095113,-0.29199869248662436,-0.13803367087413648,-0.4589650399736427,-0.27031844186268095,-0.45552781050958924,0.07067072539089872,0.8415489405547006,-0.011390255521907679,0.6356425897162998,0.004782064888540719,0.41949253917164864,-0.4613796146208921,-0.9558401936951368,-0.23210470055850851,-0.3602826852964121],[0.334319330143965,0.586630171280966,1.2449390804043654,0.7371266934684287,-0.29808254248707156,-0.6192306351917345,0.5909061755106805,-0.618174350725548,-0.8304695854795922,-0.3920122519867996,0.6300839132942485,1.0212580578665653,0.0622562939574626,0.5691567807777896,1.1728028792814154,0.44754214148413474],[-0.4315525147575055,-0.6578249305065137,0.8037230143647436,-0.7143514485920444,-0.16202235479677785,-0.11724659896130069,0.5474498364730699,0.6168321775156524,-0.3011632291425756,-0.8836472082810528,0.712947300007598,0.9528716100568275,-0.2953200065501257,-0.7580713484721272,-0.26358564232747606,0.17480698247326257],[-0.6773539045363717,-0.816896554335983,-0.054243804046626085,-0.46776331865480336,-0.21255475673457638,-0.9834421799051161,0.5797618648674493,-0.5316359792792154,0.8843531778162864,0.386867769268695,-0.2420868672600746,-0.5996930965942274,0.25795336970391924,-1.0020280497678102,0.3039240805234158,0.15499983895711053],[0.5985200413463624,0.3127474921613156,0.5241962190303845,-0.7069937347437939,-0.7112546975429183,-0.8356997996923275,0.3069153567750633,-0.8429614160369936,-0.6665785638891206,0.4641623661018651,-0.8988201573731465,-0.1759645362076388,-0.8328464430741891,-0.3820694593345383,0.21277971665635612,-0.5501435700501995],[0.2366225050360892,-0.597863087844116,-0.6780263511634357,-0.6844377609466805,0.7473648628058979,-0.4071776873380518,0.8960769545599158,-0.78961456460218,-0.5464954164033462,0.7203987554369504,-0.7051640157866437,-0.37636159848139344,0.49983532413719306,-0.3960180118096299,0.3978786988432789,-0.2458078042496658],[-0.9550422821183412,0.8631803275446528,0.8801720762415169,-1.4039858891149293,-0.3468607960511662,-0.5888058307480942,-0.24373447202749066,0.22831156066287414,-0.3178106536699586,-0.7561409681306522,-0.617387293402144,0.8832032696387441,0.5096902200726142,-0.2158807080922297,-0.6245156780608627,-1.283786707397226],[-0.8261941741917047,0.9273827593273439,0.4310255689239039,-0.3964247208856754,-0.5797437713415504,0.5681690538508655,-0.24349886512616478,0.46496518059498143,1.111456956090407,-1.358890740792417,-0.6711318130367883,-0.38540612906266414,-0.34538626157778773,-0.11725616031394362,-1.1342635392853966,-0.5343618796555922],[-0.907597912024087,0.3238787216271848,-0.030312719372736094,0.004948578073883879,0.7685913103509449,0.11129866538838139,0.20884971777601322,-1.0191977824104645,0.3599266272837573,0.18482251867653496,-0.7687209559317468,-0.2585046425115381,0.07997525909633285,-0.6333970296792052,0.5630611419720678,0.3980834213435111],[0.23385274879091203,-0.11586829144857692,0.831794629901907,-0.11950030039038229,0.333660159468165,-0.057583448016596255,-1.027216422255199,-0.1330939246536334,-0.03349770302166687,-0.6832818578622504,0.24331841826408493,0.016520318762451178,-0.934403344453229,-0.7445556541635882,0.7069474512704317,-0.5330783822446952],[0.5922348979126486,-0.7004428258616411,0.37972792704800407,-0.9082225286907506,-0.8237541488676174,-0.18667615468956367,-0.113949045539258,0.16206468437447485,-0.6546166447174024,0.6628671701310522,-0.9142282138646336,-0.41545734839608883,-0.977268633664973,0.6009982869407042,-0.17051109283951948,0.8868637897744742],[-0.10387994990668625,-0.6406970780329058,0.5442163002494746,-0.1259545016016621,0.3004672641317696,0.796083968552916,0.017964543655270226,0.9289251727079066,0.930271748193999,-0.9502634930762937,-0.6854288940766637,0.7034602054225916,-0.3964343676016684,0.24889827572390555,0.06721791066486116,-0.5605108300210948],[0.9835149086322854,-0.2398304755644176,0.8473559476862467,0.965270629817248,-0.4580165570208492,0.37825490415248675,0.017659060161390627,0.44754184352170245,0.3745759920918412,0.9776682663910861,0.19462389708278094,0.9071248935717566,-0.14096259977300551,-0.8950589704085861,-0.6910445028272547,0.7833399312840079],[0.9680197761911518,-0.026093629172226684,-0.06783367687013842,-0.9963204753536159,-0.9544795872860092,-0.598117538859039,-0.5501577712455545,-0.3472630144954718,-0.7488812708904629,-0.7964054554210924,-0.6080954000272918,-0.9985816105876988,0.32495227048463615,-0.44757391604158725,0.6305001374335157,-0.14108777424096708],[-0.01756197166027551,0.1202355915001374,-0.443264315021187,-0.25760374297420485,0.3238312464329036,-0.6596265156814116,-0.2513306464890932,0.6282059291117075,-0.10871267536781382,0.2965288232381851,-0.3768704904804694,-0.8664033457758684,-0.9908167422117762,-0.8690640917345531,0.17311704883040946,-0.4120195380800773],[0.981084615916223,-0.7541919559001848,0.38833864344600144,-0.5508533495075829,0.24716427123314277,0.5901013438945677,0.9429711518752346,0.739672166843746,0.2890299585420837,-0.9260636687759072,0.3135392718615031,0.6319900617888341,0.5879389527496506,-0.41817562108308337,-0.17110826528388268,0.40397228657608464],[0.8559525798176582,-0.7140777380862504,0.6024298705553388,-0.20374261175035535,0.06489828296408273,0.8955064110735913,0.24513456755742702,0.8794120824304636,-0.8973802599846019,-0.10548339802408835,0.9544421485269279,0.04097629842860462,0.08791946278258411,-0.602984133470577,0.7684179207217863,-0.7821364892571818],[-0.5502589343519948,0.8030461712979879,0.3020852747795204,0.6267954263402125,-0.9073749805849287,0.8155205729540325,0.23923480245354511,-0.7641717411374733,0.24776366262210958,-0.6167667651727786,-0.07419828303844556,-0.25126025792284823,-0.6218058827848689,-0.9480937932568594,0.5327458260487443,0.8251979753464425],[0.9639844512087863,0.6834153586312248,-0.3934594674684484,-0.1397154435809136,0.5640260982791463,-0.6316028749270681,-0.17900715953291035,0.6247300000647455,0.6188810857356883,0.22010793995341738,-0.9442347695859197,-0.49178842267995115,0.41899274621366045,-0.8666148430269249,0.2051108469679268,-0.002271424142153755],[0.2045313118538492,0.7094777219894794,0.17733975341638164,-0.9725460262252263,0.850214118032786,0.9592256747121697,0.34940927724987025,0.02283092269018816,-0.39149847281042494,0.12912735299378042,-0.7240042703055698,-0.42929411414537366,-0.12573623124300726,-0.39423431885856175,0.8835236611522297,0.11797099143958256],[-0.9378400178508124,-0.6090045597415004,0.9830882029390242,-0.32856879182185095,-0.7792471159288286,0.02852887854585706,0.6032975491830475,-0.5787614626277002,0.5706871020366338,-0.8421352125443917,-0.8469648820522666,-0.4030479678963128,0.7933663674171436,-0.7699175583296629,0.7920174874560693,-0.34667428238091436],[-0.4522996089811788,-0.6834897424841415,0.5197261982765369,-0.7558128933706603,-0.47214111840217177,0.22301286492036576,-0.2888911924138129,-0.8773825687831507,0.42835518938973394,-0.5480443232362151,-0.7784617959154843,-0.23579877211988665,-0.737836036814119,-0.8267234950835314,0.4962314443251161,0.9066728033535862],[-0.9442938103856188,0.8015743980598768,-0.05614896948616123,-0.0850076871012662,-0.3504188742490091,0.9031600221568319,-0.791897991581321,-0.07518935517125154,0.8678587511230111,-0.31012652902881516,-0.1347143075263599,1.1389077295723151,-0.030640898903682264,-0.9319402405604016,0.5379097522267323,0.9646616624176805],[0.774040969760215,0.927909037657499,-0.3820183422851448,-0.4419579671910649,0.6419315427478013,0.002914377214706309,-0.29234070083374136,-0.9089220047038838,-0.4996478138222031,-0.3354087108327503,-0.49821903140818347,-0.11202854904718015,-0.7740586521344492,-0.6403484208401926,0.16978215221456924,-0.6419743094491386],[-0.29288573633125553,0.6533030723200703,0.4544119352337424,-0.7603038744572138,-0.37298564908046294,-0.5549275176401746,-0.4724463440454442,0.15823434800191874,-0.6495226946291542,-0.5442660420904383,0.3867645491805388,0.6208205134346468,0.699392155831792,-0.6121727531313742,-0.3926789291061913,0.1758964288650631],[0.7406372070423256,-0.6906297704214104,0.48728523002596186,0.36633888426684835,0.45479050951176253,-0.11485023293744734,0.577468037194095,0.22647873902252147,-0.04460992953438957,0.8112283064724536,0.7925006710429359,-1.0979113972880883,0.9912532302960716,1.096001000694098,0.09975599944101024,-0.6927896631009921],[-0.08660018150951355,-0.5129063129448885,0.7965011417677992,-0.16927289331528536,0.9332261689496205,-0.740761502251712,-0.7578158900397426,-0.3333440567626846,-0.07497747860779021,-0.30156006191240503,0.1391085872011694,-1.0680884737510337,-0.605218556324967,-0.4346540664720159,-0.2884393201720668,0.4108260343443575],[0.9301674760611862,0.3455893377776454,-0.44416377450694594,-0.4186964750311129,0.12305050867275759,0.43303699578536375,-0.6053667778383844,0.6516991854893897,-0.941855650761303,0.04543857779201125,0.29637905376408097,0.13624637433247996,0.5335753939539241,0.7950950281104552,-0.4924899177061166,0.25129182599938293],[0.6844481828640886,0.45640901735931877,0.5023903841001988,1.0405796360229371,0.25975593991269325,-0.6399575778521985,-0.08407380735966416,0.6294575774056834,-0.42137488714268057,-0.1836115878985718,-0.11222440834784833,-0.30522998456649614,-0.6951815343518295,0.11440495828334434,1.1011526095174298,0.21684053284519572],[0.9254600899436827,-0.5940124585218116,-0.5540196224150099,1.126664925140901,0.5950650602106135,-0.2121070630459516,0.29665316469335756,-1.0903108925702252,0.24847040993455688,1.0633820382633066,0.8534963132661596,-0.7621473030189508,-0.13981473957786486,-1.1146488099983765,-0.47267978408447636,-0.009788924448146502],[-0.3074638818178757,-0.22802908449959058,1.0322197449968264,-0.6466268608707723,-0.846760674670573,-0.6106713059465754,0.4273406977458932,-0.6411241807159103,0.5398640391831233,-0.8948953844582617,-0.22970916985711992,0.42477266683358716,0.018766321657178047,0.10608423749907446,1.16122533656746,0.3057021851006522],[0.2868943990139611,-0.8639341455926584,0.10054912119519452,0.6967034373999309,0.31320915235883084,0.9231942678236245,-0.723711061225339,-0.5699611710207163,0.8607881155330732,0.1605480502173682,0.9235623530900408,-1.1276328055721776,-0.6342399887002946,-0.5149258247208096,0.35072392088269766,-0.13356286712207038],[-0.9601627543273539,0.5033320397878904,0.782547662594356,0.71980660396255,0.7162873285508002,-0.16650531020942289,0.07769786821665198,0.04793808683830234,-0.832762577331238,-0.4469299316757715,0.6904437588174682,-0.3421949376924738,0.7045201279104114,-0.6936109711706919,-0.8744220780639667,-1.0351761423681862],[0.2019433021425666,0.13300596048854027,0.5388723828305441,0.6558224361528083,0.6988604699724295,0.3976240176623445,-0.4411488798595294,0.022033150675604594,0.26012782495348,-0.31014672380721253,0.4782459877214073,-0.022741131520642836,-0.1679769629746097,-0.03566636612908365,0.4909242766974845,0.07088203768632445],[0.5323613201800736,0.4311008394576687,0.21512125917622188,-1.1481313038844654,-0.062473541956663256,0.16324710149151506,0.46931485219538477,0.3714628279186578,-0.6996754831941392,0.14242325021920982,-1.0745732523175908,-0.9287467595179141,-0.18394726772286799,-0.289374750174941,-0.08599822289631794,-0.5920748571522961],[0.7365476481185224,-0.8017698048839775,-0.8491858687250579,0.9818972310050629,1.0325000487285476,-0.15869209268759277,-0.5041694795722009,-0.18311773579882373,0.7813026528545586,0.7745843707954194,-1.1712360678630003,0.9791972799468777,-0.05437553202975742,-0.1219191056585707,-0.24720637847216134,0.4889266955145135],[0.8098465942898369,0.8354559984961396,0.27089654273771585,-0.38516380590741683,-0.7136201269022191,-0.642595601244128,0.36470719957295344,0.06918002668382063,-0.06486921457916413,0.8260406690507273,-0.6675712812489311,0.29714666440746285,-0.12154468228184663,-0.21054903365351005,-0.037035630037308594,-0.25552302406477145],[0.47339764372505755,0.7880278216054384,-0.4169194522396964,-0.485323444369802,-0.507100056544628,0.37191076709600246,-0.31535416172238007,-0.06421242654637327,-0.831570813510143,-0.024076910093634663,0.985226295422021,0.32733945091209193,-0.47965071592167163,0.7939448495272612,0.2494576507428401,-0.7554399024365108],[0.0868175139151357,0.6667206892969988,0.6998533083793821,-0.05359161842990279,-0.8523500689143084,0.17851423948152334,-0.5583794743543558,-0.37923267374727665,0.793286221538728,-0.8948710788549348,0.010884144905173088,0.26854877016722734,0.23195141418517906,0.874251082569363,0.8119918310276386,0.5917777453704387],[0.4655572397439527,-0.5055150246360252,-0.5443027629221056,-0.6611330078413116,-0.5526136976830576,-0.5541219310305885,0.5763976067177294,0.27267606761087704,-0.3123819351767039,0.8213927930038594,-0.15164211605546551,-0.5199578471661517,-0.29760407651775544,-0.2312633926053822,-0.48132598965413553,-0.14222590829916104],[-0.6497249514182233,-0.7365997791760241,0.6087943916726046,0.9016335301100264,0.0709420960083329,-0.07772253785119698,0.3017304777420735,-0.10064109829381307,0.4330686060113167,-0.05095321215496673,0.38855349985872056,0.7013545194781146,0.8003283869802513,-0.1514057338555621,-0.7293020111613444,-0.6003719595041432],[0.23377240861532966,0.7403305620253242,-0.9570552647912676,-0.29241311440170126,0.6527263041412743,0.09203863409158863,0.44431349688981703,0.730159027900068,0.5659953782747156,-0.3787068477765487,-0.10361839338696788,0.4944425844144411,-0.022922351120494344,-0.2157748581663541,0.30360501974462206,-0.17387898730592521],[0.8015449438087758,0.30907849283890654,0.3085124254414695,0.6547786772625614,0.11871933518193512,-0.9720846717848888,-0.7412672808898968,-0.8837465826148767,0.4648443651360852,-0.4234626324223134,0.48113448905618084,-0.6474867227899948,0.8141673735667263,-0.7572896832397427,-0.44239957586780054,0.2981383785631109],[-0.5115630925156482,-0.9079073486882234,0.6225497675005696,0.8939478900666233,0.24340144069194025,0.7513746147964282,-0.6770939022606046,-0.23743113048009956,0.7547110694772075,-0.28085449612557056,0.1066563587523719,0.6101854142651897,0.11224742036702873,-0.2882089359944535,-0.6756849318965852,0.6565097929575039],[-0.37347397740025956,0.2542656891252797,0.22404847673943573,0.9440552638281234,-0.7301475341013224,-0.622449418472713,-0.9110810517134094,-0.398435720991265,0.06932802381246539,-0.7334945427609165,0.7355211869826208,0.8626456431303091,0.6475927556563628,0.31257285601533225,0.8461081000688551,-0.8695334596699711],[0.8498208673880447,0.7589376245793842,-0.49036376471502363,-0.5882643268685461,-0.8794509219947098,-0.07063667740802293,-0.3775791617225819,0.48054135298436407,0.536860516872312,-0.3970851412965768,-0.27699736779110484,0.41534939832186923,-0.8514790584895606,0.01977256376693326,-0.03373243457558983,-0.31785710298108993],[-0.6660528124773903,0.5858148849419074,0.37384279037121226,-0.25569505021577443,0.1532715288973412,-0.9106588887920362,0.17052031786512822,0.5678034630313427,-0.8624457596848369,0.3132635217034516,0.7115219557349279,-0.39763587893549035,-0.9831834843566511,-0.1894600014104726,-0.4907340661470716,-0.5141792066894277],[-0.6166338193475638,-0.7215644897714046,-0.7836484825219898,-0.042143759747961695,0.6869372639625828,0.8832507994686387,0.8543471803168221,0.7396840480818514,0.4296261119131488,0.022288064044621247,-0.31693973831275235,-0.397796488709973,-0.6552941292580572,0.92120708979381,0.3880353945934205,0.16352029208474494],[0.7758414635131223,-0.986380913326697,0.9507658735465658,-0.17111478552257608,-0.8966568423773555,0.26682323685145093,0.6187032164776811,0.1130583020219289,-0.2539057444910253,0.549569151948464,0.6709080452285479,0.5733577859204062,0.4695722168304157,0.5702280379054101,-0.9949313511537161,-0.010040828093411669],[0.8933559770582566,-0.676758135027776,0.5563876891441719,-0.6927888903499326,-0.7662024520963597,-0.22918788335562823,-0.44571060527913886,-0.10122386430148378,-0.07048839049896971,-0.1324807601196185,0.9217505269153521,0.4927418584823329,-0.724929234142563,0.9104236147218545,-0.9616527973352866,-0.05363594623394885],[0.7593826675432149,-0.3128040547995698,0.9449778143578303,-0.2153840600880101,-0.03263255484037192,0.8854699152778378,-1.0706124717499685,0.289437041316065,0.7642248043400608,0.40467708815322057,-0.9075546332924804,0.9769715693219339,-0.1974177541443761,0.5050285467072015,-0.5126715687411842,-0.04188377539020272],[-0.6263425549707523,0.5990207573657014,0.8631183189825218,-0.7478181968716127,0.41181132575701374,0.6911640462459954,0.3932894227072446,0.8512036546011417,-0.8361775864095364,0.013747628142253299,-0.29919166724091495,-0.6547839081030814,-0.2902253010433137,0.800521480230368,0.3027823979027769,-0.12905971300664806],[0.1215972470738224,-0.17859692529238733,-0.9717956684266232,-0.1589307628653785,-0.8551679531033695,0.004225469530609937,-0.5192798135733817,0.40536632312210147,-0.7455147859143503,-0.48257220410509455,-0.7213415454828053,-0.01979876227047772,0.09618385510854405,-0.9402270963361283,-0.9027552693695936,0.6271952990690388],[-0.6959031677175131,0.32727515108306926,-0.14334547052213167,-0.3524802060504336,-0.5246969248139983,0.12479352650074914,0.6283144640546844,-1.333581743332713,0.3571964303748782,-0.7770745746890023,-0.2882684806835983,0.41412354491623393,-0.07462270523063085,-0.14309395809951145,-0.19368433616388672,0.22431827355078993],[-0.47030926516978694,-0.013562457667142504,-0.5296112907815935,0.025094042728473966,0.647434092263815,0.12387779788780724,-0.026137998508829963,-0.3560787492162102,-0.5278927318991155,0.9289169702006371,-0.16563495830476183,0.32147408842605224,0.3399568432118661,-0.2946492462953748,0.45550812682177866,1.0791466768841615],[-0.7750513005833597,0.8105451416519992,-0.8842459035099792,0.3821395926929061,0.9740835814438639,-0.04033918949067775,0.7944931335230349,-0.5779379146246797,0.7110945165660626,-0.06172101851579307,0.1987289021152747,0.48407609358518755,1.0070246578839837,-0.5773726141975604,-0.4750019027945359,-0.038069465911528017],[-0.28473852472106237,-0.5129464317216822,0.9432078547658174,-0.2535131869328335,-0.338920235687669,-0.10554926585306608,0.4789087238539167,-0.7072899088825622,0.8169738589867592,0.7745637255680052,-1.1209779644230793,-0.25089502623210813,-0.3557645244234706,0.046355907519209344,1.2230658514270685,-0.6144897704153668],[0.34154605704906993,0.26399525188793627,0.07122727690113562,-0.38495650734125636,0.8003031724895486,0.04438404020847736,-0.384868531718645,0.8364952927432502,-0.3055998429159427,0.9953711805634119,0.452522195703143,-0.9474544490008727,-0.7288695100766301,-0.9086687049597061,0.4016615103572584,0.40685285283218664],[0.1888890605182064,-0.1863315963000123,1.0682774919433482,0.8831751862865294,-0.38427615001746146,-0.20655746577297388,0.25413150999681655,1.0610100751941294,0.256848085313759,0.024944013752624363,-0.9758744254831869,-0.15750663909512863,0.06856192083736466,0.2695623125857923,1.1116777826207929,-1.449789313513953],[-0.88741628621419,0.5945437281297693,0.05162353344659423,0.3517935606212678,-0.26363017505095176,0.6532229011165385,-0.005017928594203611,-0.7627650763377564,0.6323330587253283,-0.0609183390665294,-0.7194837761612677,0.05261601375177891,0.870667710259519,0.4470682411723108,0.24486709359051725,0.19154871944588175],[0.4578860825382197,-0.12071253109799848,0.19988432072350729,0.05107770748681701,-0.15057167240646127,-0.5597173851926942,0.4268528630037944,0.9243486606687014,0.1843526456030214,-0.759209839998317,-0.5713426476056644,0.4788479031887857,0.3870447565706948,0.2999232324490966,0.3797732125428704,0.21320601476464707],[0.20749660936779768,0.10544313788084997,-0.43101578562310683,-0.3989801883168265,0.7665126636548628,-0.23897758221094023,0.39327178456684103,-0.24526992070302447,-0.08587927163290329,-0.01465969344192701,0.6575472263462616,-0.6369951783667909,0.9949670021303214,0.24277100520424308,-0.7272655350582221,-0.3724633516152896],[0.1579919697161549,1.0263254988167887,-0.25183133093796056,-0.8417379272522909,0.13082875773145575,-1.0349152281570433,-0.14065800914499232,-0.8910545834813954,-0.6993175082567493,0.04400033483074656,-0.8770534248463667,-0.7433054947905013,0.718633087746461,0.835664623852787,-0.5172598104165121,0.7788616949183184],[-1.0380175495110926,0.5503051550334754,-0.03946740076661978,-0.30475339610389074,-0.7634576257278993,-0.5221335079455315,0.6354679339378076,0.8078542685928624,0.15318590689626485,-0.7598468149746358,-0.4619388251246739,0.6069725626133515,0.3970425053122742,0.03604879786347081,0.591220761544995,-0.43147392919283767],[-0.871174735458019,-0.8954121882356323,0.8488121921402542,-1.0019122660685484,-0.7894904361248669,-0.5731235409020848,0.009270195428641029,-0.168540039748558,-0.3061082173070499,0.9658285666208408,0.2350434862627189,0.7212959755254251,-0.780817222663753,0.4649370710455441,-0.3886408953022035,0.6568183766167524],[0.7204509709293436,-0.8354377348810913,0.48094092743396155,-0.8157256254598675,-0.3144664786270912,-0.8258937984901684,0.6368078146637193,0.4680243694589965,0.9265409977597865,0.22098846847670295,-0.776940473949264,0.838535170599044,-0.7266228598079145,0.14895447598085898,-0.24337462967485513,0.7283690412973938],[-0.31695415587275155,0.39618068271171225,-0.9015765401951699,-0.7818871384790786,-0.9328798950688921,-0.3921336245734546,-0.4930961078646847,0.21513094627069185,-0.6362657641078422,-0.8187254348744513,0.7257265796590917,0.4340301718282782,0.32436794315437334,-0.950985647458845,-0.6195522253977201,0.4947465748095028],[0.19577553023628758,-0.11297909186028798,0.8019795549406972,0.6476362401566513,-0.08061665117301686,-0.9743350408851517,0.08329367294119905,0.7750278514212239,0.7094260932173699,-0.9467892058095657,-0.017224399568983362,0.7802072994887164,0.3957014500059173,-0.29733585515617866,0.2893596425400262,-0.822622080983066],[-0.4699506996939711,0.33758492225807624,-0.9508760137083265,-0.2463863370559607,-0.8509031635096327,-0.1227631539421914,-0.08685515100283059,-0.94135927859619,0.06386303464007037,0.1922052122801312,0.37836805064880075,-0.5474097569454401,0.46326546631524623,0.9516147332504059,-0.8724180880583208,-0.9405257869267807],[-0.37695494995670975,0.1282088386730158,-0.01924165862227012,0.9148988956413597,-0.004867799630390746,0.5378201740535697,-0.7647071726042638,0.6191091742068209,-0.10418399838598447,0.4410252626084299,0.6328022723548972,0.24048875855918972,-0.5283748037984708,0.38245465083475105,0.25187806467779517,0.5723478435955585],[0.10496637603692216,0.4146742683117517,-0.4865638075722134,-0.10377084640065926,0.7861821275960463,-0.22302723918388567,-0.10416818645688375,0.2802309263783167,-0.908761059072821,0.796118331681277,-0.9878907354786874,-0.8801884844489418,-0.10844123663378591,-0.009660479117207466,0.18013396470379517,-0.2232383390608721],[0.8393457225087131,0.07980776038361714,-0.0031728458099773427,0.9105217467465101,0.4211640944523074,0.2172984729513887,0.4710387163293577,-0.32491458770639436,0.8628668825325119,-0.8676112509233529,-0.6265562015576092,-0.18371073225293655,-0.23606582873048154,-0.5998129299336723,-0.2318899178624867,-0.3824395850382061],[0.47472045164744303,-0.6185629062388935,0.216703436970358,-0.8112092732771914,-0.05111194132832342,-0.4035667953694646,-0.31909885814417427,-0.013093377336844458,-0.36487258202762485,0.7417685854433707,0.4965339156031603,-0.9346970532505772,-0.21968940998759567,-0.7355562947793692,0.10338492599810944,0.35044670126028654],[-0.3634003544109472,0.6045008159976284,-0.9259899655400039,0.36725221118509754,-0.14232735736249724,-0.595335020660857,-0.5015148205773738,0.10347283001755381,0.9424646592895276,0.7532729115016861,-0.42318694189954087,-0.5831006496351212,-0.8617438252707497,-0.43684067113239733,0.9397927838616553,-0.1547603938445805],[-0.22296691773787547,0.9209444472966211,-0.6338313293726103,0.46910009458966107,0.8054031038295486,-0.779129677127044,-0.3461252070251448,-0.7079547843066667,-0.045029866567873444,-0.7720369673915859,-0.1216809530837506,0.9359492310768349,0.6925633838555467,-0.7529651662697971,0.29957065115393533,-0.9018629293091323],[0.10033754073123946,-0.698389136452727,0.9023865105618909,0.19302923761662516,-0.07406804180735582,0.3436849767330039,0.3980418290385752,0.8386607042916849,-0.11964746469499943,0.06350519120636644,-0.987505442380952,-0.30413608190499053,0.9170867632212683,-0.35990095359879604,0.05953958917039426,-0.7284150228838757],[0.4891695287625093,-0.2743319926232095,0.7969646495663798,-0.6412180447494493,0.927132425139499,0.3379534334042682,-0.5571745883175008,-0.015817420479066424,0.028644270254718496,0.06427561343840704,-0.9798161899458848,0.6793182756407399,0.2730029733763253,-0.4350287352467035,-0.22300921954907338,0.9414887015234861],[0.8253568283538977,-0.1492372772109567,0.4204924558960208,0.06736023878452402,0.5436308317307477,0.7547249026248255,-0.5110409002762974,-0.01389059405347659,0.984941421761679,-0.5260203513270283,0.7024925009571543,-0.3735879162043618,0.4468532064610682,-0.6433258608624026,-0.19911886557366243,-0.881952222232266],[-0.6911377179510905,-0.7904731759147383,0.30139484610503153,-0.9474344896154299,0.5309558844614992,-0.32181940645810414,0.4051883582933318,-0.8816175663778822,-0.46803832712933424,-0.8198412989763275,0.42130801729722167,-0.5062201937311235,-0.5212355334619336,0.07331336580089154,-0.39994669622450774,0.7405500667187548],[0.705162952061098,-0.28197963374713725,0.1600776430615363,-0.31371643938212,0.3543118582901594,-0.9646480046393666,-0.47630700642440904,-0.5865600752623791,1.0247582335827274,0.24401881446642246,0.28044046934876077,0.2156270385902442,-0.013553856874371509,0.9297393305826516,1.0135278291554377,0.24379139118664508],[-0.627103403850814,-0.36097515279432696,0.2683642743684942,-0.12225140026813076,0.08361819153578139,-0.6414564847345642,-0.1162246681966767,0.3404574794053223,0.9620371749476417,0.9601153886306126,0.6139104513753377,-1.1178898444782543,-0.8397561953113524,0.6956976371475931,0.01978875322796606,0.5692490400163915],[-0.9212514130343922,0.8954125454898447,-0.39074886187345115,0.3828882483418813,1.001089476130753,-0.8333962239039954,0.3970476362332997,1.0715306207450257,0.6365991395297862,0.9293727807857979,-0.5766578897259437,-0.9498558302670089,-0.8842151682139717,0.0070528308344536194,0.3020624997803382,-0.9958597441984723],[0.5818338834148429,-0.9747295815378096,0.792969399270618,-0.9785419006910315,1.0534981419411844,-0.5190741874223316,0.7350740976220715,0.7142290829137106,0.1283245537035548,1.1790717578312344,-0.6009425013579669,0.4593331463787386,0.7723055865281263,0.35309775886814687,-0.44806898584048444,-0.6423425257474631],[-1.050491616593247,-0.4353366842787724,0.4014188871421147,-0.5888469403978046,-0.36441601056328093,0.5614187873794707,-0.19932000454560334,1.103418788215708,1.0867733307984375,0.704408028223334,0.33713890114195666,-0.8244407024715842,0.5641406652104918,0.4220097429890824,0.599668126204063,0.5824672451535609],[-0.9398865955898879,0.47026368184784717,0.3198992957019516,0.9704041581463451,1.0803971577739424,0.8694644837022045,-0.04434089333699789,0.5948850461325048,0.6359451095013776,0.23643210101905765,-0.2884599912928336,-0.41718521938205677,0.592923019120902,0.07583664718571669,0.5681599211688076,-0.7719888909839187],[-0.017638833192056672,0.6947300262457379,-0.2940217438834563,0.9051682154329032,0.03996649730147249,-0.27387774469840553,-0.6225236466917677,0.8412419957524959,1.1139550132471758,-0.9905407063915805,-0.15871186961097697,-0.0796160056926406,-0.6172176925372498,0.3967036159153056,0.874811198683154,0.35226728887641734],[-0.23518053441520897,0.7378495871807534,-0.7824329691107006,0.29667649423745557,-0.4282038194471044,0.7262985290448588,0.6490103611748563,-0.24190496035528067,-0.6279095723269532,0.3067371958464265,-0.6224396700502384,0.5992251639986829,-0.21336706380219306,0.31587782701743056,-0.6590773531779036,0.12987272958232463],[-1.0260996561071818,0.8350916972344828,0.7252617044865406,-0.34796960229413015,0.514969739165246,0.11366708042232855,-0.5367524866491713,-0.5982634221571593,-0.5908678150461195,-0.3461478949977987,0.04097935312307588,0.11958189898878195,0.4170577092337531,-0.40531238437814626,0.4603818165717877,0.3898136159793783],[-0.6070738998503513,-0.08782495240636451,-1.1610943346728677,0.07727610727177071,0.030875725399827865,0.6381625206680389,-0.0485810531987335,0.37591169755580717,-0.556219901080466,-0.2355857546567832,0.32437343589989126,-0.6063744713348107,1.2702667250057949,-0.9210315297132355,0.4822376083097504,0.7149789709261852],[0.783543046798602,0.8915711151950538,-0.10701985815129428,0.6356945939942705,0.27153315401321876,-0.7858396336929987,-0.328342319171821,0.17851017064908548,-0.6003348146458308,-0.6021390193397964,-0.06306751118763336,1.1466136127589692,-0.242762510547572,0.4681546939872286,0.23571966464129687,-0.4287716126754329],[0.20147449169016213,0.609112402336705,0.2493702274618092,0.4673154744666193,0.2057481795530395,0.0035041410142044784,0.9983652060745684,0.7901381142723212,-0.34648147995472955,0.08756418820419747,0.3268036937433651,0.3357981035810168,-0.7732757763295363,0.43410265987427915,-0.9069351189700519,-0.7731223742537112],[-0.6638540549231723,-0.6510411834040616,0.05567948371751059,-0.2588422615491096,1.1736264585675926,0.9063235616609568,-0.39694046328024685,0.9282155616233853,0.33781091037475175,0.8913323069600998,-0.11420239894507103,-0.011911136194446524,1.125612083235895,-0.28933906464604003,0.2940852386633139,0.9286471753930481],[0.9919408756706005,0.038452957690213285,-0.38863820922127523,0.647295974631132,0.1865534889336713,0.7716883793360951,0.7081100191178487,0.09626357650164818,-0.4813852118646871,-0.10320860429127965,-0.4757706041487215,-0.5038354263462073,-0.01318931316088312,0.7128097069834753,0.25247693540566285,0.07522700987930264],[0.7537133186473657,-0.4126186045186717,-0.3430857665246725,0.8002552924021948,-0.7323771564035986,0.13243802344522315,0.6488986925597855,-0.011774959498554782,-0.5531073619980988,-0.28679654371972063,0.6775924458740876,0.09591484229781022,0.5000714315095109,-0.04693622353989779,-0.44232821593237404,-0.10083382060190171],[0.34064999215605196,0.015976990130858848,0.5609409644862171,0.1923372422816385,0.6123792093138545,-0.12868255983790355,0.4217920490491105,0.42766485808456256,0.47322624905194743,0.07857406151617274,-0.1468457322037917,-0.40130098574162254,-0.23600119318635793,0.7516595845769825,-0.35281710031829805,-0.1312847455744066],[-0.06119745429037282,0.3469580965528083,0.9710364714600193,-0.6763526263580677,0.8716903279575416,-0.3527458718469787,-0.8156991797813942,-0.31557629738740944,0.11822576744539459,0.8983331120318718,-0.7092351085397062,0.9184537253052452,-0.6302669049066849,0.7993169394790787,-0.6558971656176178,0.8300657574016954],[-0.41839239320405275,0.23324370676313322,-0.13543373997344021,-0.9527411558806418,0.4263844175347833,-0.7281917162851377,0.4092791380620464,0.8420783256903643,0.7085605907205994,-0.062034061686149666,-0.31650067329634357,0.9670652940239886,0.7938378538529021,-0.46408024914224777,-0.6573609012458572,-0.8338061626728153],[0.642915231020587,-0.5122947754439138,0.9959628762365478,0.41508709286920764,0.22496219591105238,-0.9805059027102949,0.18820071838852437,0.7684174703461468,-0.15569136443437825,0.5464800109422105,-0.18874626028176245,-0.1845653557525173,-0.2138039068483253,0.34370366412722486,-0.3323720449958052,0.6667819431306365],[0.5262656839955433,-0.7835771909812199,0.5927298247767792,-0.2761934876581744,0.16057229411232132,-0.41941940554533863,-0.6941793021083593,-0.8992520854219705,-0.36486590416313724,0.023591487364587937,-0.015279371050794133,-0.12449537485850648,-0.20687617769440436,-0.09776058149504063,0.14418185181066345,0.7485929120795887],[-0.43136262388606506,0.5179658730777312,-0.9390455360673005,-0.6823334869376558,-0.9806899604271972,0.19142882741703504,0.48231819948947185,0.9139415787075822,-0.12870069707407739,0.8381894679739994,0.09656620824348572,-0.006908394366953896,-0.523485228652163,-0.8533066947521926,-0.08479372121708817,-0.7581123178033944],[-0.47749503956528905,0.05230652374927569,0.6542639955224203,0.3486576021530752,0.32404108940752696,0.37191025377299214,0.41620056671264294,0.6188697423053333,0.1628422575638253,-0.362612476125439,-0.15423234453342394,-0.5094363660422845,0.5982538742079431,-0.3916524057005497,-0.4944859128693304,0.9653897201464998],[-0.42763735130489344,-0.3059447016408594,-0.04539718139306759,-0.46410455694955566,0.05542271741564031,-0.8454723802578603,0.545389250912224,0.5396366297296149,-0.8054721129745572,-0.5718333914597165,0.6735947058193266,-0.4292333927264562,-0.3121512464800471,-0.9074020135457705,-0.7313910856000421,-0.3693946664707406],[0.7880479302569121,-0.23317054816924854,0.11879540402614364,-0.9924116303042356,0.397449073453747,0.3223090426983881,-0.4173897942090856,0.9962055946827961,0.16821244413933423,-0.4436816748308985,0.4125052452950171,-0.03157221521359599,0.5666058135662455,0.5646194175017225,-0.5262593660720425,-0.9154913442046531],[0.38116181523707393,0.3817417721891694,0.5945651047503393,0.6167685261030544,0.8815238347641006,-0.5506329465305893,0.8479235524782638,0.7775934250252385,-0.6709847104583586,-0.5142698365052492,0.13719642697433754,0.4650573918064427,0.7321283740414497,-0.021556829055230597,0.01887944608901293,0.6604717186316642],[0.15102433098736245,-0.26402236003370305,0.9770343754764887,-0.5474217880193764,0.24547299327482497,0.847419093355092,0.7617479735758748,-0.7714309536639616,0.5898204368948972,0.9916789911867623,-0.9937173823211847,-0.8805644647968793,0.37645429342170456,0.7706962504907682,0.18308681799227866,0.6662856643149082],[-0.15933724330787813,-0.29428246195806684,0.6006650898367889,0.4317286330799148,-0.6118885781109666,-0.7589574826798668,0.3935877355647097,-0.07909683011849067,0.5827260139324903,0.011570749853864637,-0.1540603268293812,0.25985248060271937,-0.5444195351263437,-0.32816104691230796,0.9497641532190726,0.9369488614707966],[-0.8520025941043539,-0.19912898203291718,0.9934498177390485,0.5537663393558923,-0.8749610988530896,0.7967935084513154,0.9850006214434313,-0.7928879247792833,-0.8126447317878598,-0.759721260777646,0.7861568756451405,-0.3621738741438545,0.839062301801258,-0.5112258155628564,0.12505585511095463,-0.2865047550206583],[0.6259970009824193,-0.8841611838487755,0.6553625999498813,-0.1988609894531418,-0.8347448070598077,-0.30897545054683445,-0.3170444835045785,0.5958531835585722,0.22691779930840994,-0.3467507558407069,0.7810620566605279,-0.5384594964505502,0.5358157531548612,0.6780485603166833,-0.485379353884991,0.5462174305960161],[0.49517340837981677,-0.33394069524897974,0.6290829262490342,-0.6563631451502577,-0.560044022157355,0.1397215185435262,0.6792487098761106,0.0692473797342839,-1.0201622008287499,0.43488083511540127,-0.13282996304717407,-0.9390927694967444,0.8878019721026306,0.6833859691563496,0.2313199713056322,-0.3911272641261592],[-0.8258850776751734,-0.1882141636558683,0.6439420007495193,0.954379460251658,0.2672875270784064,-1.0540903611550103,-0.9963391226420966,0.2725037335605338,-0.745808840391554,0.7807553261673642,0.3766148237514245,-0.7327168599930546,0.01313524914354848,-0.20785458051535982,-0.7215649338435386,0.7166791771246303],[0.7221546220328149,0.6052504713645053,0.5531187622128657,-0.4809493612446365,-0.34089414001573737,-0.9177341472553235,-0.169271528142493,0.35189239611770584,-1.0838430991240509,0.4280760602166346,-0.028207886559751517,-0.5000289245999422,-0.17814571745105146,0.2619245940696266,0.512331709932056,-0.48749108260456564],[0.9996161889566039,0.3129157858277445,0.26165065375152,0.47810838149829843,0.6598046306367027,0.26534500756506785,0.30796511926918435,0.780251927882194,-0.15745436487646355,0.33461281105741303,-0.6211953726003492,0.9406149761416486,0.2916436167165015,-0.5103348728043452,-0.674549181153226,-0.3209454340702708],[-0.5099885582197596,-0.6331397094245557,0.3209683464743886,-0.815950595392732,0.6951259790288906,-0.06473812864864684,0.20593604089120152,-1.0466467360948903,0.1750928572558003,0.30377581699880973,1.1752104448975298,0.25176924404723783,0.3598963078524144,-0.48186968706151045,0.6344454754295418,0.3271303590793715],[-0.05502292668300402,1.1279774087037056,-0.7834884360684251,0.35880008284377,-0.5845723229598955,-0.05325883765677735,0.28802563264099235,-0.5073803476403443,-0.5658493148486863,-0.7551904464374096,-0.7070774570810133,0.16134042867795093,0.9172888911319976,-0.8566332471884729,0.5816898835041773,-0.1140255279584538],[0.9084512981928736,0.15597630509436305,0.3671851646385009,0.37488781456132747,-0.3210089210850617,-0.145097137353209,-0.8229957586239119,0.17051878293371606,0.34286592986835734,-0.014273007193387718,0.8807776944961662,0.7978665124722423,0.9661801466105967,0.0970959228802096,-1.3326049952479324,0.6669828257358601],[0.22144010858436397,0.38487506697769397,0.7363176624849128,-1.0345774720794,0.6744368273936594,-0.4788897889688601,0.30704525675299843,-0.03709511874237367,-0.36973336017825836,-0.12422930802935964,-0.6814666104933844,0.16340420633391298,0.7126106213737387,0.5807499913089182,0.15395142903492917,0.981654969748288],[-0.5598820624431184,-0.05034334274969228,0.5799149415431806,-0.6996812586664541,-0.47808424438629776,1.062845490401488,-0.7862494479629776,-0.44516827143704757,-0.7658864037168996,-0.7261297676304077,0.9477048444884419,-0.4997467112918706,0.04297736540793991,0.7355705127133291,-0.4892429874635307,0.03202673573007385],[-0.4540312220611088,0.5801250575723083,0.22948783227071212,0.8696425467515391,0.38592052852136033,0.025454627431069927,0.2852179743679054,0.907450037402347,0.0036036321946240797,-0.03995497981266805,-0.006404265384258873,0.4264665631376749,0.8319552082580174,-0.7585663885748124,-0.34817724351941115,-0.017860775790278168],[0.0630342340791697,-0.1469945972310908,-0.0007071710505535286,0.4833219904126988,-0.22552346649333116,-0.8081133348706597,0.9137559056535851,0.5137247713413656,-0.8636062508275443,0.49128269785683837,0.7232916196147737,-0.6601267098936894,-0.15535129468480482,-0.9316699133067087,-0.3815996275644323,0.37478228630755517],[-0.5844659312693272,0.6373417389317242,0.8126653819166987,0.7443655993833539,-0.5501851534848705,-0.9166305029936359,-0.05710685629335043,0.19841620369662358,0.37289619052553247,-0.8551689986180749,-0.0952847908252417,-0.2601875993936076,-0.1769731049529783,1.0120894439020554,0.11828087919023908,-0.2957977763729621],[-0.02177120115847586,0.04115195912975267,-0.5945942890001596,0.11873107550100448,0.6403900209655182,-0.3416063687298858,0.016820437831882362,-0.7203278637709492,0.5496548187807351,-0.5425060101842067,0.09798513387261121,0.5290435456628098,0.37786269129944605,-0.5015692001658989,0.36866477190583957,0.21636940101340363],[0.6096806475381946,0.9998189604440078,-0.8385591159091894,-0.18083870081233488,0.026690959097245504,-0.09658870839367939,0.1721881392963165,0.7719354698420346,-0.6216632680374508,0.1394899519845203,0.13724355413789002,-0.31972876997002286,-0.6438877777276804,-0.7303735390120423,-0.4926485271174603,-0.8274792540800617],[0.2248470281562982,0.8348804414853381,0.623910361693178,0.9989874017185896,0.1658124078379286,-0.22818159295545515,0.7552559593455692,0.230191021286132,0.8294605239684918,0.50660818025642,-0.801384639346375,-0.31522761464929117,-0.7521526054917351,-0.8705450663757262,0.5152005691583681,-0.37354957936618893],[-0.6045857339587553,0.9534746638680094,-0.4165407398497081,-0.9817205192990022,-0.29299495878808246,-0.010592186310176555,-0.27710927244170724,0.05663744091249523,-0.4149387913223652,-0.32886204847063105,0.1310721782589126,0.8281267128233587,0.4448670765547944,-0.3251135306639057,0.5899615632966202,-0.550081815134607],[0.5121808591332289,0.4001459980872495,-0.3162064205447077,0.5886679141858293,0.2615452386886856,0.07907959840796996,-0.3504847360079162,-0.43498335645545305,-0.13556231015242926,-0.7928289804146287,0.9468273046110425,0.9009225525811733,0.036549701171241455,-0.6111306490110393,-0.9989648561081559,0.48831452373491446],[-0.7888031847219814,0.556001755067574,0.543716216210663,-0.8335702195800296,0.4919329715273286,-0.8769975565195938,0.09769993813855082,-0.38603644290561956,-0.6242585312024986,0.6649717498363028,-0.02293572567027713,0.939654425061105,0.5612807893727378,0.642461521211402,0.7198879213588332,-0.4615456359844945],[0.04304054127461088,-0.9321115521061976,-0.5859785733767602,0.20397535556534052,-0.43359901885926,0.1909788344841159,-0.4327770242652167,0.8533671477942977,0.07300738708724408,0.09800169701361305,0.782725067704753,-0.13245772599270156,0.042291416155397776,0.8738265090927233,-0.5256592426184477,0.9509244364206109],[-0.7834949803405498,0.8701977854484388,-0.902775056058374,-0.3145187602537898,0.02089568355809268,-0.6736905604283332,-0.48035909801560983,-0.7103263602361238,-0.20627379225538034,-0.6130205532372468,0.1607691650439076,0.3916974284217343,-0.4449311776721161,0.44870765158113013,0.2513967438663651,-0.6573793416884146],[-0.494917553919032,-0.3789263075577285,-0.9351293970086529,-0.6776863500007133,0.7244250753059536,-0.24340711056690978,0.7087498669059498,0.16139416283324293,-0.013351872233729356,-0.4154799876739039,-0.42072928068817106,-0.5049220922712485,-0.8669494646718054,-0.13175862889367673,0.5803324472405813,-0.24136095825231685],[-0.9777193874724333,0.024540872215154774,-0.9829195702268225,-0.9250825563314704,0.4397980458529198,-0.9618268709194262,0.18014363539705913,0.8761392569038571,0.05503842246586954,0.19159100917791827,-0.9382643472216361,-0.1933541371231846,-0.15550659900072272,-0.5373992468850841,-0.08413335486725337,-0.8437177296265257],[0.35606451021757746,0.6408470678927798,-0.634085102695507,-0.15121923344240162,-0.8594633754703693,-0.5738422164370758,0.7823011310071877,0.6005966945597869,-0.27417124421556593,-0.7744761585706521,0.6530147974258225,0.060080357801257644,0.43921135004146583,0.13889233610649354,0.34047687279055117,-0.29724588652510997],[0.26950438329368254,-0.8887794113806766,0.4751098310347186,-0.20310262876959628,-0.98990014604983,0.5934664427652319,0.7197828503485035,-0.05561031474410871,0.08073572682685626,0.7574415377164292,0.39980956310530225,-0.9411939789062989,0.20413045449335332,-0.38927273122670236,-0.007483084663864492,0.05770128058925739],[0.34268646241716194,-0.7796938369594892,0.7059038707104328,-0.6578526667911997,-0.36296948781008354,-0.17233870579457955,0.9062854763898947,-0.3012807922276446,0.8089755278865045,-0.48063874561532804,0.21437412362914143,-0.34960280890422,-0.4161878800566061,-0.5236842287211703,-0.3332843453555068,-0.010247924302847267],[-0.6051151515666549,-0.6068440690526566,0.7476467782820899,-0.260408234511333,-0.5664962023534037,0.27830595735689867,0.35182290702608743,0.8698806481523782,-0.26184007881760474,-0.38077235370757734,-0.7219097142565096,0.2979413969166047,-0.574964117384889,-0.20823455870511243,-0.9200870161667223,-0.4819299753792352],[0.9606723064712761,-0.6879580921088233,0.41256389933266746,-0.7325721522601722,-0.6902135151225135,0.1775814473184294,0.5569158702444952,-0.5897678384147045,0.7567258058967057,0.03024395509229283,0.3546802535618765,-0.2179817458378066,-0.9782789240393837,0.0013284450009454218,-0.7027190580218665,0.15296988719680282],[0.24458007034248785,0.8410756359325222,-0.9413467762935399,0.4953807175679059,0.3343074490680098,0.407236488079167,-0.35900204172158645,0.5400302737968814,0.47997168683086766,-0.10586284658651746,0.17559918146729636,-0.18562589939384688,-0.5214808555064812,-0.6512812433081927,0.5219556867876372,0.6290615190837365],[0.20056752777171794,-0.5156275746654447,-0.13221536361628625,0.4105754718580819,-1.0662956103481835,0.8229518121433437,-0.027101573038401244,0.2997145103612693,0.023014162326370186,-0.0770480596673632,0.023294026800976315,-0.5755371930443139,-0.28680846557844514,0.24370772234405644,-0.231607593652728,0.7109594993544559],[0.8062158284903493,0.018107126416292505,0.787745970436644,-0.36673604890546485,-0.16827649079245074,0.8076998538882723,-0.6509013661057765,-0.5010813389048329,-0.032946553652173784,0.3748451146560795,0.9779264809543677,-0.04149674572946927,-0.5372035041188014,-0.3831022433541779,-0.8438995566139633,-0.17339984565610583],[0.06320089632291637,-0.6703877128159038,-0.28780705755641856,-0.6459784371736803,0.8395991252301085,0.29898150890108494,-0.7653874166882026,-0.06800257271524057,-0.30814099119543503,0.17816641390237598,0.1764931703122688,0.03489143101219877,0.6314160741235654,-0.5680523990658342,-0.05335344814638934,0.004917455493331303],[0.7950048107469805,0.35094193040421845,0.15738548569605731,0.6480013174335499,-0.4947107710764781,0.18606089628054787,0.6940604134050088,0.12402578845046695,0.44642445806724396,-0.7301060338157843,-0.7024885948519619,0.4636484341921539,-0.08910475044492898,0.6747037664949811,-0.7616739202860163,0.2650779255817359],[0.11979027956586455,0.7521691793094633,0.06100702264243419,-0.074304841086539,0.5815283304690071,-0.9603511963317273,-0.25392824607911463,-0.014239098541761403,-0.2819499294297084,-0.31611732440084805,0.7764514887523106,-0.3747351995810843,0.25656408941686887,-0.21595233741709302,0.8301194883263383,0.039239449819724576],[-0.7611293229999465,-0.038902222401310825,-0.2202664600152382,-0.6774738878157099,0.019139092964412397,-0.6125851756775843,-0.09103020191615323,-0.2979078494969246,-0.039703432667689935,-0.8429746975675432,0.23615273332821887,-0.6425801638532571,0.8454673031690966,0.8602800299575333,0.03519765552313971,0.5426033840071411],[-0.3321315129723072,-0.23898173213638688,0.8642860167238122,0.7795162105530655,0.765840046890543,0.525202502130184,0.41940929981162794,0.588166491137168,0.07915808973242884,1.144184650666431,0.1723399706580262,0.6845538671868947,-0.29484185210666547,0.47231898575666664,-0.7669090373287185,-0.27344131920391307],[-0.701783247083778,0.15969824078642295,0.5421960307779262,0.8835690282263987,0.07445634177809042,-0.9973743111383594,0.5494719058232882,-0.933618494340004,0.8660493448890593,0.621858541474165,0.7276321099143721,0.2755449619102306,0.4440291947986088,0.7000424463985919,0.045507505186452996,-0.4217305283539754],[-0.19686967123738752,0.004380471781224331,0.5818201284087786,0.8497052475569089,-0.7033005777532436,-0.2745103009575585,-0.36467691541040664,-0.581145899304611,0.891898507963753,-0.9901806886613231,0.13178218985889384,-0.2673895428491431,0.25719510745437635,-0.7219795074579539,-0.8223101685320177,1.0105183151492374],[0.5796363587389444,0.24518153802410644,0.7219666824439701,-0.4998587219630837,-0.44136267173832566,-0.7641963779380654,0.1454317642134594,-0.5263071202873681,0.6945458197585065,0.9698542057515449,0.7437134193577546,-0.38560543404349096,0.41403945254416386,-0.26168530390509065,-0.8998612437944545,-0.6854565897830379],[0.9613191406599231,0.6509750731275393,-0.5196668692610722,-0.1904521388036554,0.8620390224689259,0.6767354118170146,-0.8252250653416369,-0.09723162901184566,-1.0016254480863285,0.7952580025329103,-0.24275739120065504,-0.1646861808870962,0.7916998706269277,-0.3077837340501202,0.6294166680801733,-0.5360086038899939],[0.7686622003198853,0.1954936053050253,0.9177452839018903,-0.03489248805120099,0.5013149733373709,0.6035735877662551,0.8699183641539319,0.3379151729013092,0.2836286466193128,0.3158497525160055,0.9182401066419075,-0.7744826286286055,-0.15632800340041672,-0.8048925659242364,0.44405795190541847,0.33746212680627075],[-0.5549473554516293,0.3837452534868917,-0.47017412425705807,0.8722486769925744,0.5046638072673408,0.056121029032114134,-0.5577727563907255,0.8284464681011174,-0.863869484525841,-0.1760164330552283,-0.21964046735188703,-0.28192750974516123,-0.3798648198878083,-0.29774467887613554,0.0376702717675812,0.9946573100801466],[0.36796828043280794,0.14631265676525196,-0.594199882519792,-0.41735221829914515,0.029937023943440888,-0.09203869339856618,-0.40797382950014915,0.8719915900251789,0.16855077612002356,-0.0015313571654060887,-0.35466296154183174,-0.07726732334513375,0.7155420771470968,0.04283622739975934,-0.214839165632831,-0.1743069809901696],[-0.22509207017627064,-0.32850018194653563,0.41518056756152166,0.5676877875761428,0.7739352272953481,-0.5118567740905942,-0.6998312519837335,0.7445518443051116,0.06452618669044652,-0.08674928181311925,0.5486286232409525,0.5244415867953127,0.36542145523599556,-0.696458508040394,0.6163130467732469,0.37591417892205214],[0.453394358010895,0.4642054303484353,-0.7161543022710899,-0.3626511556396803,-0.48655075908338175,0.7783326986700283,-0.44983723345203774,0.4006891460240771,-0.750569124883206,-0.041524687739780575,0.22766589410499005,-0.7625458296974972,-0.6648927539198306,0.8675002712190483,0.7892790147218194,-0.35553089488228595],[0.9225796300749471,-0.8724913885657832,0.5548374962590468,0.5805065902849282,-0.7589006241514826,-0.01600249728072356,-0.47734400463496174,0.015152155324755334,0.17665179589679125,-0.8375754322393014,-0.05127287355775767,-0.22241662616450064,0.08735717998458803,-0.1332851589189623,-0.5003495568707961,0.5376867259284821],[-0.31586511738842127,0.35790091617917197,-0.7039861979512296,0.37025908314023415,0.13235309204842816,0.5422804308954365,-0.7382463327647057,0.9315848535263065,-0.5702729506950788,0.5115108501857994,0.8126538083781005,-0.803379490655248,0.9787824269408363,0.9857473618427584,-0.7157048815586236,0.30099761186391527],[0.4087527307805985,0.3055724406508875,-0.5834056976163602,-0.07974269285935875,0.4751129115769026,-0.5965530921284401,0.5765114489449443,-0.26108583343822733,0.784924375969021,-0.13220886327597325,-0.8109715996763249,0.19661305662686956,0.7863553517945916,-0.7670120295392002,-0.04138552790988559,-0.6777335869797847],[0.27657602781655344,0.4236791693748816,0.8429400908961338,0.6608737793640991,0.21443763747936595,-0.12139910499928508,0.2629352310937949,0.11368450464028346,-0.044924895202325565,-0.8810532134555213,-0.5864889007804188,0.22659579555786769,0.9989736882960711,0.6793419608578382,0.8058335315997023,0.5744552540946843],[-0.6121567076010987,0.6721630552560534,-0.1267551105278275,0.5319296101555073,0.8274949213781424,-0.25753225111057043,-0.45222903695155203,0.5100526440550959,-0.8108125632744967,0.9254548987775935,0.9164579166537732,-0.8983747826669086,-0.5865252496416593,0.16631047115888187,-0.936895927681471,-0.019418030185628155],[0.4438845638703959,-0.7377743974703739,-0.3823767096632009,0.22099136080798365,-0.25083194985969026,-0.6223738305429714,-0.2533628492263733,-0.8969887765977562,0.8647474609845816,-0.3187092052119862,-0.48467612969762985,0.7894565945545371,0.7602585010854006,0.7924539756056208,-0.2282663816906787,-0.3161850421439656],[0.45947350526342845,-0.7638244745987515,0.9289987851071282,0.2703009343635685,-0.7896181804909657,-0.5250872329438718,0.2380863953065666,-0.27882695291428705,0.9926138494461436,0.10726313196937909,-0.6651569973503242,-0.16988329854213502,0.030056896872892036,0.8248033523958744,0.0183381811479717,-0.1597359177895319],[0.3409047745792808,-0.6619193745669434,0.46446162051789974,-0.37369185674529515,-0.3840700038159497,-0.7293273840568895,0.4921209388932457,-0.8086394032926476,-0.7315641596247691,-0.8062855872225705,0.8817345595854471,-0.0029836673884235942,0.3761785620747484,0.18651469834532097,0.24702303894185285,-0.9433286050306742],[0.4877609262770428,-0.503044332707602,0.33760003258418925,-0.9579652382111128,-0.9872837812003041,-0.4986621691710047,-0.8711287212008241,0.9123806102353353,0.9401684076337302,0.6797570843403191,0.8151633208704765,-0.8500241819730556,-0.1558812638640279,-0.4022049422099121,-0.2787450581286368,0.5358802864835934],[0.07644297280426038,-0.5997835412664476,0.5135158256456314,-0.058770765569045036,-0.5580147492493652,-0.01323789483714588,-0.9951400102449597,0.7031623467937438,0.3502961306679184,0.8922578141865061,0.6066097200611797,-0.27089944224338947,-0.2545359585297424,-0.3113400096828389,-0.1294228060785616,0.5339171766479214],[0.843773908188866,-0.7909094816249778,0.15053329386644876,-0.1631484305457671,-0.6238527814977508,0.8636893534170249,-0.1456590407045022,-0.004434350206281579,0.5777830740024705,0.39221668679251165,-0.8770991671047939,0.3463609384882318,-0.24617820644990385,0.9342883189604243,-0.9412566270354277,0.2781470599877589],[-0.7065485869642136,-0.28044408896065653,0.08569534788511682,-0.5094269761978913,0.8541335432371481,-0.03347673806219094,0.5833805614066925,-0.10421177343331818,-0.4401543548767772,-0.40657932597629426,0.42249939158320776,-0.6133494444115497,0.29056959746640265,0.22514718741903528,-0.48186164012519794,0.6934190452675381],[0.5528863123125316,-0.1328314941636204,-0.7529562093673972,-0.6479059412802526,0.8916806811110088,0.8877555946005002,0.3203477275632995,-0.7444961929555935,0.6144691340516942,0.4323429517777084,-0.20498080604957764,-0.9481141579678862,-0.7061129584566933,-0.2994854848876581,0.3725038721044883,-0.38224961028474524],[-0.36142262423403526,0.21978986284550261,0.44218694141827486,-0.5863880959417185,0.4072526025418668,-0.9075044290829766,0.07862620605028692,0.8008924492366623,-0.6660119832235929,0.34271345251847585,0.5714600758939872,-0.6156448537615278,0.5729699593520978,0.19418034026969622,-0.34718584827100685,0.20966823540041224],[-0.5404336568518633,-0.8349095088032339,0.4835797716781416,0.7810567126057402,-0.4448365931605638,0.03552010701077579,0.8564048242796187,0.9523924746992454,0.20198191482567118,-0.17059182180935206,0.616496858280251,0.1990752794965296,0.6203011506740785,0.348138804149805,0.7336377483377188,0.46444244133808743],[-0.43610163151993486,-0.3320155973781138,0.66312093408661,-0.8371468580090573,0.8807824109840219,0.30859953527908246,-0.46157215178269784,0.7901039182082319,-0.5014270263764931,0.17802936977697703,0.49018361386909426,0.07402864196839509,0.6033749533705097,0.5698098062312584,0.012251261874854702,0.2917342001214154],[0.09285370185679742,0.939555382904318,-0.1854359843914133,-0.07513692380834192,0.4194866824690511,0.358633859285014,0.5576679401262679,-0.5355846118478,-0.6155419823270094,-0.2682124749437844,-0.7700668704324936,0.7179135336844396,-0.14813717127501125,0.2796402174512185,-0.7035637095561942,-0.1372182589648614],[0.35442011756661296,0.4612789368723308,-0.783720989290434,-0.5011493375068797,0.07779340687013479,-0.01819742239117113,0.4510348147678228,0.5947691360313652,-0.6813638973004342,0.3396027021329221,-0.9670613981008486,0.4513122385573599,-0.7638470955405179,-0.7872326771017982,0.06771042996551126,-0.7741025876952065],[-0.8963524312021764,-0.6756319456720004,-0.818462800248303,0.06460421438015551,-0.7095957451243766,0.23237685935539432,0.8598137708442808,0.0630495507607356,-0.8794139833660406,-0.6988063734584409,-0.6341187886720068,0.1246620488103698,-0.1861229454641471,0.944578199874532,-0.5965875057385874,0.5613582251754505],[-0.2635560834528121,-0.42830161684662205,-0.5175311167872252,-0.6612376275578358,-0.7659757031012231,0.9263150098029835,0.8013920913856225,0.34534877184004875,-0.9242071480699878,0.3619418254374005,-0.7029679996085423,-0.3097968548174981,0.05463957101125638,0.21503812552259172,0.7174803676838395,-0.41834949502803864],[0.3803313194398057,-0.912278194040109,0.08605198617203946,-0.16788675381632823,-0.31051427707987367,0.5929155285957695,-0.045288345230763305,0.5307553878257094,0.12785748532692365,-0.2627441753424007,0.3030804179469091,0.04536807291086564,0.8878421360899176,0.6191448524269862,0.13826911089652727,0.9456085339022908],[-0.4244408299540767,-0.9897845518545103,-0.28484604932828805,-0.037770478117004735,0.35387028560198797,0.6719319823914169,-0.8591333839082389,0.38093434718078667,0.7232409700187579,-0.16597651824073978,-0.33661177499794803,-0.9982680696395976,0.6967026125512459,0.46092495687013146,0.20129894659481673,0.07852140927326223],[-0.0502382718510761,0.009457456561572819,-0.4658427862629648,0.3780549662728534,0.40323717114513835,-0.14507664871238424,-0.012951701280820238,0.758771168209392,-0.03658035015571759,-0.035417823844499985,-0.5263554486214947,0.7736493691986235,-0.11839063512730519,0.14350724360101985,0.33260805167251783,-0.238256848139764],[0.5360193397428881,0.1584196550386201,0.022968249555213482,0.8900711306863149,-0.0769805859563375,-0.23954584578101024,-0.7924530376771703,0.3421005756232427,-0.3513114728795448,0.6049621605154765,-0.9084564244234983,0.6698751630276267,-0.764540493334867,-0.4602550132702641,0.4523796763475447,0.1657489331226194],[0.6622849718275776,0.9623204434492494,-0.7063734433721702,0.8930862368146091,0.9587073749414654,-0.6766290352590256,-0.8420374915781332,0.1428059778238011,-0.1537521088650906,0.9924144754827693,-0.68166166924608,-0.3039518458524566,-0.5125688763681611,0.21200608869207516,0.7441152282712986,0.37212989827811604],[0.9233447375546615,-0.2452535098036841,-0.3744848307868023,0.6691651094452364,-0.6132252922169847,0.22928702225843667,0.694063056317805,-0.7987164591404179,-0.9744322874428897,0.02436914443727689,0.9866429549341866,-0.9665144746043999,-0.35331090467718207,0.23323888642010182,-0.07465845958540607,-0.562484067240312],[0.5979841975333056,0.5953000120081615,-0.016306522004471802,0.2975089771789259,0.28888618855572146,-0.2055400839376027,0.05305177672155992,-0.17890345082749404,0.29304749734440305,0.9498718278997207,0.005190339629954188,-0.8155676288144535,-0.8810025229670688,0.6975290197027593,-0.24413926275316822,-0.5024360360371927],[-0.3994698341188334,-0.11103439083819167,-0.12951771683441304,0.2890588588696885,0.8321340392255427,0.08662933615488155,0.42253967328000686,0.2946120730727517,-0.4224285238386214,0.45153888089574057,0.5756936609467163,-0.07423900997950961,0.95429570033231,-0.29577259114985255,0.5975664672409651,-0.3712406697360695],[-0.6665671982524572,0.21204240169882027,-0.48357177937645446,-0.45036444124530206,-0.8763201128873424,0.8560456373817349,-0.0913556608998447,0.10294725461333654,-0.5384898759014893,-0.9855542854397212,-0.06130927528828023,0.48385280749244686,-0.8562190908162903,-0.3550064591437363,0.0554296448253484,0.29445539429310186],[0.8757001932173081,-0.5087672665000089,-0.6356149014826009,0.1822909182587038,0.5166403016209653,0.32973337103820954,0.7347928789402296,-0.12888333599413881,0.6468919247870879,0.4028315681579282,0.5081852975367989,-0.6194717267396093,-0.4877322463705065,0.49534673827075393,-0.5797901644858681,0.26916793813403217],[0.35046153832377414,0.3895644540418193,0.8627719761919117,-0.010857789608377022,0.9927974789199694,0.7498331949646349,-0.3285385471714508,0.8839555933874932,-0.9817136167534812,0.3050905060919811,0.3401489395776518,-0.9010741708965377,0.927341775564559,0.18420491885176604,0.15256689733489504,-0.7404482018475087],[-0.9467344987840596,0.2611819566514533,0.248507552257335,0.9185382828137505,-0.8548528023178221,0.38480814386116835,-0.05633023835548334,0.0003431527878392515,0.3576491670905253,0.4500283192278096,0.8235561821773909,-0.4367866284173001,0.23796802669228745,-0.48384604933422626,-0.9473390925229417,-0.34521267610780804],[-0.5253365910963175,0.005055634821821808,0.02524524868588518,-0.7373144309923076,0.24470835734372676,0.6129919148368059,-0.7240945226916318,-0.6890154379344291,0.9833183225849318,-0.30552804193916483,-0.5098060113092902,0.414466816320167,0.22244741748362573,-0.2877873309269612,-0.7930808391654298,-0.4371921928843978],[0.7344573852201335,0.4057088251235319,-0.6263467648564212,0.9005180443417657,-0.6160748175319393,-0.48220336423012755,-0.05813144527105285,0.8813018296147841,-0.7996336055056372,-0.06655010761151603,-0.739523813558919,-0.4208421445875601,-0.888404513482218,-0.9397348725470316,0.4909035481248316,0.8075645847609931],[-0.17902083637319377,0.8010319254969884,0.05407882616292614,0.5115877698398998,-0.4050409685004479,-0.9730263816320113,0.8781968944118694,0.820743346664953,-0.1824418438939528,-0.8853372195493847,-0.8662616097476805,-0.34706418576941633,-0.1730403496594386,-0.7726261249618216,0.18447277264092632,0.9760647922873602],[-0.12103149672744573,-0.6984046297463689,0.6459831043289257,0.5746656039113991,0.21667921600282813,-0.10885593282122841,0.06380900883128904,-0.25535711141152806,-0.7237808814902595,-0.8320521326231973,-0.38584340296528064,-0.5142201429194553,0.2867164202089292,0.04734447279122689,-0.30699122507601695,0.9581270554059498],[-0.7515040777654485,-0.38775264434853307,-0.6910778376249631,-0.1761612886061088,-0.3347820976170266,0.44817054741692175,0.34071905155956905,-0.5349602314839133,-0.05718233370605175,-0.39654754280633053,-0.6280715223090123,0.8864134734739411,0.3379908703991914,-0.09134812795607239,0.09338792131782014,0.15038881871842325],[-0.7695231388366577,0.24541022054622852,-0.8598478854651384,0.8250475889161137,-0.752887271538524,0.9920148930992814,-0.32071525634992604,-0.5283378173201605,0.5110270192553839,-0.38592655613428395,0.32221559324073556,-0.5928671772300129,-0.25649410296391384,0.3500172570155389,0.6262495851220473,0.13247678807758678],[-0.9655289010056358,0.12285616541693622,0.13975384291366666,0.10766066947474195,-0.4527188891883105,-0.5271596989587191,-0.9223736641984468,-0.9562973520306479,0.4048053619009657,0.7541309211506291,-0.7001782756148791,-0.9309425817866863,-0.6955592555398735,-0.599236460937012,0.618220294454876,0.8689074696369183],[0.6464457387596703,-0.1728803325896764,-0.72468099709545,-0.275238970154692,0.7902060997297689,-0.37891627231706737,0.7132764915809702,0.708459450505099,0.7018344031816501,0.018530250659006597,-0.16464824844153458,0.319433987434417,0.9200161023056754,-0.354376301621381,0.9716044322012944,-0.22722296781909623],[0.30952830208685445,-0.5347172444417727,-0.3965728718988748,0.008663408140387574,0.43371474337403315,0.6195876540974941,-0.5094396415815674,0.36359056742482254,0.9209860317718457,-0.5023652567954402,0.9389026635224589,0.2776373364848377,0.4094741193616831,0.9330944722153593,-0.18965050135852968,0.6225071842498444],[-0.19681815910318345,0.3295836479496974,0.3114107653866123,0.4328347990109114,0.43826667278506903,-0.07837927850205162,0.8506429503288051,0.4811587673635285,0.021887738004312762,0.3475021302048056,0.7729467864563788,-0.7676221549784059,0.9761321578443551,-0.31770617691473557,0.9035817012637053,-0.9470926204519565],[0.8507745503863964,-0.4518962688318453,-0.7998147724953886,-0.49179336546811436,-0.14874858744355768,0.0920840857447156,-0.10089407473714562,-0.06424294495785388,-0.9155530798155049,-0.7730390131292317,0.3070706581210394,-0.535616277529106,0.6444519295030617,-0.7168460365369826,-0.5116053142090533,-0.7561440416194882],[0.6109375800232413,-0.8180916846715305,0.4828780635340326,0.5078254747424888,0.6715575840616039,0.5736095584942182,0.028242736141403046,0.4185063833165845,0.27757515529593135,-0.9302313039363841,0.1906824586973066,-0.36970859750252716,0.24818953034223368,0.41448175384750074,0.42922225243006773,0.7028107289545411],[-0.8381602345325021,0.20764507121172615,-0.01733304195125296,-0.7350340423070243,0.5668534233006048,0.6052568295189418,0.1543716399095345,0.43095324334779805,0.3649650908635875,0.03252163316919754,-0.2613695970871439,-0.11184914871279616,0.5370449829803459,0.39901209436902985,0.503691606077997,-0.7812415515859894],[0.26015239088442005,0.5154850758786446,0.039838904389488276,-0.025261003830114252,0.09223781797240077,-0.12792226553061326,0.5292400665254876,0.3665647783323762,-0.4532571397847403,0.41772623247388485,-0.7242315554399804,-0.9889040899213641,-0.8872593553158286,0.15562031230420384,-0.14504249120532656,0.5893413973504956],[-0.46097163208544245,0.6894112395345631,-0.20706415758870866,-0.21293691360031142,0.26922551142860085,-0.4732676692071225,-0.6905735074352983,0.09934923824023834,0.8587704363756838,0.6586205261658709,0.5282809680764577,-0.6933226133036339,0.7268899025704272,0.06804023961913508,0.018219195226659934,-0.35339228050536553],[-0.7607291208658062,-0.8152541259714545,0.9329669460962053,0.9081251816377178,0.6447166966393905,-0.16738383829817183,-0.5822974318793657,0.06767459893964389,0.35402943245663243,-0.7447726676982525,-0.9301294041420105,-0.3711243941064901,-0.2847566576590501,-0.8369774528034792,0.2697462866484597,0.6147521668264924],[0.042168821545771173,-0.8700807364692831,-0.30719022693916953,-0.8043121537170221,-0.44627284328052674,0.16919965508257695,-0.004100877612767562,-0.11133680173212879,-0.6661531585366256,0.8882350127288934,0.1648782026605633,0.873613725859125,0.6207200789206939,-0.1340831979500976,0.37875391717101214,-0.16027242893686866],[-0.3635975025136169,0.8980442965205806,-0.9896853837742268,-0.14425954393484774,0.7106513289607417,-0.5922456948923007,0.01247607113128657,-0.5620714298864558,-0.18013767767216926,-0.9347612032192614,0.931817673079371,0.13226710254885088,-0.78330099946804,0.8362327519389976,0.6482441744763618,-0.9982973991143322],[0.6065826708601407,0.5935373366015244,-0.5311951093743894,-0.2207861949938117,0.6026026183924631,0.7959769475186231,0.04825942118552984,0.3940982387801122,0.39968693950677814,0.1347621832059791,0.6427569243345612,0.13333006428338345,0.34377573368635783,-0.024882732189889456,-0.17985469832413026,-0.7272641148768804],[-0.874620115268717,0.3992296475793844,0.5359612475721014,0.7383431578115478,-0.5844387568887588,0.2204099814590874,-0.6033142546595354,-0.14843970345363067,0.6923362078637569,-0.29766752055807455,0.3816311821627223,-0.8442249346432082,0.9763291774477056,-0.5336668894431207,-0.5318026573910508,-0.9715931378306033],[0.630111030961551,0.4265780343360204,0.9965790749509651,-0.62147224564159,0.28117595241034943,0.5429700222386118,0.5426549045664077,-0.5006648906290274,-0.3349853311635922,0.6881334063434843,0.9569226423910262,0.9255747385963553,0.15569058052242113,-0.07706592631407228,-0.917741314245657,0.13027833032919656],[0.15077329557699848,0.5144850632454392,0.20339817611587518,0.26614355459796224,0.3146113309675993,0.6169659538915417,-0.34634203734933555,-0.9745238739372102,0.3822092712136804,-0.7142017863383479,-0.10652830624805087,-0.6612640641839196,-0.4342527227247275,-0.3402227840761154,0.18686236063844675,-0.8056335789440094],[0.06792593722069507,0.8617039901334249,-0.48339697265458925,-0.8069487317918917,0.0014857897964737354,0.7782129003662459,0.8706463695187336,-0.9210009510222839,-0.03153213988388481,-0.07497452986214892,-0.09908998128595536,0.47964780807937757,-0.9768853664825041,0.4150688747789557,-0.37202432034138866,0.5323713136811983],[-0.6767967370258692,0.33885938501701673,-0.0767052283635623,-0.2655419079094834,0.6525320966393777,-0.5492401828863165,0.07934245474378487,0.5770798868325455,-0.5704950196668355,0.4779921193017316,0.4861538912476213,-0.7210855179876741,0.6807120541668388,-0.7020094816466975,-0.6796059980704849,-0.06849587697923498],[0.46505752676243617,-0.386432562735453,-0.5471749780983695,0.6913041314249959,0.033371304916712585,-0.5421227452945434,0.29264142705919927,0.9288407350357195,0.06384870013105548,0.4134654497179566,0.4976931842544645,-0.3289257597725501,-0.747926762261371,-0.23189852389916377,-0.31643221766787377,-0.45156468160993235],[-0.5053939390807312,-0.7332836730652343,0.7488691236012217,0.4974458835386524,0.9481426711797969,-0.31175872785168535,0.628575430431956,-0.9607809657171664,-0.8482552113846853,-0.1732276680601026,0.499117319809979,0.9268915956662056,0.3318147391535513,0.9571003079141822,-0.669512157590813,-0.6247225098547906],[-0.7117192161892323,0.27130978399226047,-0.1100454407628324,-0.18669158658911655,-0.31776969261720645,-0.532753463341403,-0.8242927837407859,-0.6087107363601363,-0.4624415928012384,0.2429640085982827,-0.4693535340645112,0.8086901264834832,-0.837542369364511,0.032786957433534436,0.6111770558725511,-0.7460221251997483],[-0.8211751055401808,-0.7262346545056997,0.9594993137061567,-0.6215274541909155,0.8233654832200914,0.15710766337619075,-0.8471774021468463,0.01380420321856235,-0.908540582286621,0.14625122471167895,0.9204066812636067,0.1195554511872774,0.38560409457275524,0.3373543221700328,-0.08185352390575762,0.14525825924650526],[0.690494756408766,-0.9380646718827514,0.8224533114447365,-0.29795224269177334,-0.6308432520807745,0.02535413730497238,-0.5214158136072355,-0.5278180818537384,0.07020796258748341,-0.13208917192583058,-0.8550908664212411,-0.885437858108781,0.5991756474408976,-0.9208682102883201,-0.1949876233850003,-0.9326874262483704],[-0.9336880669733243,-0.03765690716925718,0.26282139398606086,-0.14125401584486053,0.534177072407358,0.3293964896491781,-0.7294699430101788,-0.7798827694292361,0.23159328397266687,0.9906774752555583,0.2201941006541941,-0.07662318198409723,0.05307517650806082,0.33892067857829167,-0.4142917624467324,0.2951372306515929],[0.7090485598787324,-0.46551126666947873,-0.18699026971889499,0.21535318336902964,0.8430183161126097,-0.41192430700676885,0.8767822539234746,-0.8371108326622614,0.9011092406729748,0.6141760731811821,0.016035735402366136,0.205594501228616,-0.7849152052278208,0.4296873129522276,0.518563374033052,0.989982972068217],[0.9762424827862062,-0.27373376609450606,-0.11678223213359429,0.2555877094128345,0.7993424459525063,-0.05022877504969969,-0.5206488048645688,0.07587308948650362,0.975148268264634,0.2155372937599842,0.27709955367341266,0.9176985747999362,-0.5103229501499134,-0.10926586962364349,0.3806195222647668,0.36090646361843604],[-0.8512423069906228,0.8852813592174251,-0.0386625292305558,-0.9061430633365539,0.19483087956391465,0.3715885238627119,-0.2740158033081048,0.47675283111856803,0.9510510194497019,0.9767631830055694,-0.8210816212364449,-0.1745973804249612,0.21860334717725483,0.6121974550260307,-0.18858976431083097,0.11805061121473459],[0.5125010398690537,-0.7184413871152384,-0.7326322126506315,0.5912003047977779,-0.6575229742908646,-0.52031949431555,-0.25791137637617156,-0.9258815246633088,0.9030968287004666,-0.31514413906101124,-0.37908079168159103,0.9191355532572509,-0.541123270637963,-0.058179922781474325,-0.8747312256851703,-0.9573825765945498],[0.8049497478211709,0.3271904695938397,-0.526218069436442,-0.6674371363309941,-0.5415768208036011,-0.5085377257027601,-0.5628830904940929,0.39972227270964966,-0.8739398522463309,0.9507163415906832,0.24211322463195728,0.46270295647776116,0.7041747569100831,0.6096164426868089,-0.5861816100167694,0.6801505516658635],[-0.6136260456262557,-0.11027155108803477,0.4773395038772765,-0.19897349695557676,-0.36079560755612183,-0.6083576628290084,0.7848912547607068,-0.5293901167656578,0.06834299951416245,-0.47128082142880645,-0.7403140271221531,-0.3592266583996335,-0.9870246773910645,0.03715868985553028,-0.08622433094418769,-0.4403739649908527],[-0.20951695629374223,-0.863530572219847,0.16650673843635388,0.26646856054192636,-0.8971695356225888,-0.46960737107439643,-0.38688731129436116,0.1022409205893382,0.8993783448348287,-0.4401235043666225,-0.11458616901024055,-0.5657715784186252,0.6470464654984451,0.04968032530896194,-0.14480752311874356,-0.8417093759063796],[0.9370161432460411,0.31875760434021405,0.48456141467292424,-0.47531882870003006,-0.23563298865197435,0.40427555260742754,-0.15250545919365566,-0.9867203547957488,0.1930057904602589,0.7778183170905208,-0.36188479272057483,0.20990184786216926,0.9455583565712966,-0.03855416851536386,-0.40563611867772176,0.8553428300636132],[-0.6252351863373389,0.7558036169424671,-0.6701138266372904,-0.2744799644199829,0.7379261633032685,0.20158102679356427,0.6669000563194589,0.625724699835847,0.8431155519809197,-0.17032615672236062,-0.5682779041994923,0.11283202749113519,0.5747939205081218,-0.6056312419493621,0.8635053834271083,-0.31309305590895686],[0.707518909026239,-0.5834918690850639,0.8216893737651438,0.1492787146954111,0.8498946642500087,-0.48717731380437934,-0.731081590963059,-0.2586600210786836,0.5989953727841781,-0.8945561356932048,-0.5001118200271537,-0.8026108334036075,0.7988018398442795,0.8705871254941036,-0.6828920526650188,0.5565423972628247],[-0.8579553996877309,-0.3817430092548255,-0.49651834601639644,-0.01768745209322864,0.4320641853974392,0.6909494572351846,-0.0728459120141074,-0.23472957391000238,-0.9801182543600051,0.18948864493731277,-0.0851376207422554,0.0559428729549194,-0.6912570393485908,0.9121323418123883,-0.9094722635849855,-0.12065826370753063],[-0.600978068966588,0.4110433971521221,-0.33672050814443555,0.8509316561408364,0.6395212205481373,-0.9873098761916865,-0.245393588372822,0.5377799625163786,0.8622930740121526,0.04816452844607921,0.9793054062612749,0.2583129055709641,-0.3644733307251822,0.01988111693793071,-0.9893782561998341,0.14202596431577108],[-0.4427595547093164,-0.8861539699841421,-0.6572872678552781,-0.3070217389647052,0.9637218790249524,0.1393077841356707,0.1556699214384576,0.126656191476052,-0.8072287780596077,0.8000973304267163,-0.7912554997112626,0.8224349222883705,-0.28397067603123904,0.2843351573904469,-0.6623025341174711,0.459473659797315],[-0.7076714741890777,-0.2200005087787651,0.45536422446270075,0.5098073714158433,-0.29108092029536836,0.2991898634612351,0.6597037692820922,0.18864963401354107,-0.1378700415992884,0.5815563761276334,-0.28547883092309867,-0.921949005712035,-0.14626210945562068,0.03844019800252996,-0.21846257369252964,-0.6242828807226166],[0.7587279447772439,0.5143266527316039,-0.9686677113271291,0.5130834621199369,-0.6422381620894351,0.11505589156074514,-0.13025813164530486,-0.4719978249760439,-0.31828320443934865,0.8758513674111157,-0.40044142687251183,0.008466301196706993,-0.7456059631489822,-0.11731628945198125,0.8761862817438426,0.6924177040218069],[0.23455398390869542,0.3922431362511709,0.8097743499906915,-0.7790211943409973,-0.8045673641164912,-0.5136384414072737,-0.3557957511232397,-0.41272040538165067,0.22047317531100052,-0.08837040919886396,-0.30446226749646943,-0.8575703505918773,-0.9341558783127937,0.8646199600676456,0.5232420305242509,-0.32953513272660073],[-0.005574486795738576,0.16450995168320093,-0.07092747402088317,-0.47922858474471886,-0.47041834188637743,-0.26171770702786024,-0.8182716276071043,-0.7366849403242299,0.6057398277274082,-0.04389748874643651,-0.943678691180561,-0.057059759367307006,0.6138791302961097,-0.675157636673597,-0.6030977165420031,0.08080925145677131],[-0.12980607899732943,0.756062751591088,-0.14579418026932656,0.41288667291896397,-0.6034913255743599,-0.8457170523234434,0.7519161116855706,0.6031289684558367,0.9231192722411232,0.6995062554011571,-0.4838074616159065,-0.14988375520935682,-0.0033702092932101912,0.8298699794984117,0.43677786202400126,0.20301217229679436],[-0.1440713610719948,0.992334961147717,0.12636041888288663,-0.6453613617459868,-0.021302282759483315,0.9241682648797429,-0.35463217498183397,-0.3295483728824511,0.4005767591739944,0.6938062294851415,-0.9304398564279364,-0.4913538534209816,-0.3389644349190748,-0.19762862920627589,-0.33800401670812485,-0.11430281089704808],[0.19666903913707534,-0.8010456701528597,-0.18942692167278397,-0.6720170161682724,-0.24234695848505572,0.14993902499750567,-0.5330796762735912,-0.8947306521727811,-0.8923735064606158,0.3515860268344997,-0.7991269291957783,-0.28497649803725755,-0.9734651433881094,0.8310190911811941,0.4844656802930545,0.45071147189057204],[-0.019953851820155855,-0.5406293887134175,-0.5778809918797916,0.959981432344486,0.5290105485534773,0.362021586859786,0.7553101901942361,0.276276094510147,0.5721982818173501,0.9295047788000224,0.6479489627824102,-0.2764834235063609,-0.5799108187531852,-0.8388990184483327,-0.6658723246103309,0.8177141760843707],[-0.06634313806680092,-0.9978009170134436,0.07558011859780267,-0.24999382170466689,-0.3753357768577579,0.08904567786160866,-0.34474883293294667,0.782617625395237,0.21474651671858824,-0.5057162641731003,-0.19615083666318922,-0.09615298168009767,-0.7931954719338496,-0.13821124329483858,-0.6195918875509023,-0.07065960015959227],[0.5749011261668282,-0.6084747039312783,0.1307939097404618,-0.18004827729546902,0.2158828712255132,-0.28092773318042674,-0.4903498826721586,-0.04144968881359912,0.4197527302589066,-0.31745371936095124,0.8291452012737088,-0.5436049633727484,-0.43813452904185946,-0.7551011118595712,0.007891619291825691,0.40300540422205877],[-0.10825937921006767,0.840685645274196,0.5718100821187386,0.7937626309597774,0.0016869722030619094,-0.5125884154732807,0.9434180917067501,-0.025431936502483765,-0.5376520759264647,-0.8425499613226264,0.5065862982251517,-0.5826225563779568,-0.2733763077077698,0.6949164128079675,-0.3637233185553823,-0.2558632281248139],[0.11120474381343382,0.5215316002934025,-0.15636202038861136,0.33972835750939945,0.47486841332444163,-0.21479715107929698,-0.26212036029299446,0.8505477515789601,-0.8974485997593051,0.3084500492764537,0.4974394049181803,0.007405184347502036,-0.8067006693430465,0.6033445200538372,0.11117943725239776,0.8269213837117335],[0.09930561048383835,0.4071139855767809,-0.14729348797430042,0.23713094684013925,0.34234913501613606,0.9512626643216504,-0.768098041654433,-0.7031968221350455,-0.09100883077693389,0.2130991917894427,0.012049301140514057,0.22785890838154899,-0.019849209270583756,0.9927997880570238,-0.17338540061876806,0.8571823792407884],[-0.605651638449221,0.6551057779543878,-0.14998398960728254,-0.35227872617891265,0.8882450606607839,0.05138806047477251,-0.52404778096441,-0.13476065849104302,0.7538458577547162,0.7076285669389932,0.8691835009264697,0.013187814863339309,-0.5958575333515466,-0.19403294740403343,-0.8259965750965854,0.036860218139714185],[0.5849803314286035,-0.15114089572952594,-0.9994812846729744,-0.7411052458161609,0.12492649145880952,-0.584602687547719,0.4723289074725159,-0.5664134639028369,-0.8396287862640897,0.12143341866602775,0.43813327243207567,-0.7909466797801681,0.04256729003116133,0.43961409475587665,0.7787434743745085,-0.9431518645197556],[-0.3610609274923875,-0.4848320265332311,0.07027425689535205,0.6946396994395854,0.09780308285434902,-0.9394475634426391,-0.2867548912209785,0.4785992817819613,-0.33080108125755947,0.49797090081489737,-0.8768258338620409,-0.4392941075029073,-0.094168845609655,-0.7670290079892115,0.0503034371207729,-0.9361117896165565],[-0.9191144667307638,0.7060398684426819,-0.8173943093497513,0.7180991386224855,0.5466427889666909,0.1513725644432795,-0.4559664547176929,-0.9183500141911631,-0.8587557396202672,-0.9573316303360708,0.6620263493357283,-0.2036984673243012,-0.4799718970882947,-0.6494600664477845,-0.5604700240781648,0.7968993062249168],[0.12745899429934404,-0.42325379621873127,0.16476972082821906,-0.9401095253999938,-0.5632124791527642,0.8795914061654644,-0.2391999604903674,0.4742215101308096,0.42983565743672614,0.05736149556483916,-0.8438551093574418,0.9944401792110376,-0.8979273125091938,0.09484326697856815,-0.6215918796495874,-0.6824344201818833],[-0.18072523168071442,0.11090393205169047,-0.6295769721998323,-0.4651777994103927,0.5230862292637619,-0.17639829226044146,-0.7631848549350169,0.1172125266342734,-0.9716354432234877,0.43938212526076237,-0.33244945208284893,0.6516295058210271,-0.43530588004266235,-0.2441890280993908,-0.8418967157881179,0.236433963064401],[-0.8562479986794713,-0.5451482030409296,0.8917340882858551,0.37176189528421055,-0.5415381424846082,-0.7098606376965799,0.6374489796373264,-0.7310395624023553,-0.46510011744512303,-0.8948146296448978,-0.6593929803055691,-0.7665936396810324,0.4516712572986785,0.984876955045364,-0.04110259051535037,0.008393054588176074],[0.5323913689180126,-0.5027405074199556,-0.821786182653844,-0.5544836368090142,-0.4531482661034154,-0.22481915377811923,0.691664217325473,-0.4948506400916437,0.2602110443917307,0.8311307537521384,0.899736337386638,-0.7549455109217442,0.5574157640164268,0.5059638254154541,0.8920969866819979,-0.6772603730322735],[0.18589896117147253,-0.2615048971734155,0.7827842659268427,0.4665012369052137,-0.644607675286248,-0.2748749758047766,-0.35472628175205134,0.2108520462262189,-0.5122516247955309,0.436190384698401,-0.5034328194293449,-0.009212741130617985,0.8445326511431888,0.8184863273630909,-0.9886562771344822,-0.12444434161490303],[-0.9790803307668421,0.15113517819223832,-0.18380118017239466,0.8910698976242153,0.49215296333279435,0.414291376215544,-0.964814410103565,-0.059691717979764025,-0.803803825982965,0.6687104002068702,0.05551416764423678,-0.49624035975920266,0.6137671563180191,0.6654377839060115,0.7474786677032736,0.44968645559548515],[-0.1901426300922564,0.866414592372053,-0.9696966310166899,0.4046860624034889,-0.22457055428403994,-0.5448126990286459,0.7302531045646381,0.8130917690302142,0.7185256318887845,0.9086479615845566,0.29068387533699,-0.9221965441868645,0.8081801642636508,-0.772721540590187,0.5338345153205952,-0.16835196019075616],[0.8851145202533055,-0.5862119944674316,0.527909523045412,-0.9365918641262687,-0.7433645917689677,0.9158239047867478,0.9552424397764265,-0.8518836223168997,-0.7717676260259081,-0.04198039566232348,-0.696550785325452,0.37623522837875356,0.6760712270292761,-0.31646127824216785,-0.21869447272132803,-0.6145219782751776],[0.5321290276386397,0.27585452875571104,0.17548559712853073,0.49906147536367174,-0.30266226750528435,0.18466459307828575,0.0060315859901973745,0.5083000272616154,-0.3705308275818915,-0.3886614145100551,-0.11714138106742356,0.018163857119299465,0.40614181820545037,-0.05207555649832951,0.6803233900475529,0.1436071955856697],[-0.2524964559288647,0.20868929426694738,0.6842961484180714,0.6067854171063112,0.9839660896057829,-0.8557922521840369,0.1402589068294544,0.47565394582893994,0.13663381004555708,-0.6679077082185945,0.7131513065828621,-0.774921434910798,-0.2005415839846365,-0.01202797430557112,0.7323023729163762,-0.012085946529880598],[0.3688566805540434,-0.9732554385793644,-0.8295698822107784,-0.8071012366122892,0.9455611597820193,-0.5150897804079952,-0.19865950798116838,0.2721326298443971,-0.5635275956251555,0.22159911071674587,0.8656943489778626,0.8797186632033474,0.16009796612919347,-0.1884055109442464,0.0027917509696653298,-0.36225564210044414],[0.3561598029197852,-0.8625002077939361,0.325597306372416,-0.7460740574596949,-0.06103564704894815,0.4680366248646428,-0.18440349806606493,-0.3487812272846571,-0.5010516597985228,-0.5624276804564672,-0.07835973598557722,-0.0856537288510304,-0.8881773812419325,0.3905105093926169,-0.17493394928317452,-0.5003202189033993],[0.04719777705197803,0.9600380103564281,-0.6906544310603264,0.11924751310212622,0.8593543219763662,0.9149843674489144,0.945126265376731,-0.6030127413408146,0.5480268113761428,0.677289279428186,0.28745763411173586,-0.16406343083596608,0.8663530655335037,0.9437116354842021,-0.8249671456566778,-0.3621433386222348],[-0.41064380417051094,0.4272038158810467,-0.17114648987906866,0.8568571070948439,-0.5034084989067957,0.04916175125877453,0.8410795502805355,0.24717496545706474,-0.8608144765167132,0.6968944885308122,-0.24464400829709465,0.6974028058774295,0.7850774206118829,-0.7978386535782169,0.6315942232228675,0.5794441728618085],[0.32261030722441486,0.33555907903009663,0.5618078152820449,-0.5686217898706891,0.45628149316010225,-0.6782623189538142,0.8555225122557677,0.06126290882965213,-0.18341064191006584,-0.2780330896188117,0.7229757089117586,0.5082932132522506,0.28783267114355926,-0.8305989648554286,-0.5195933468459915,0.26935685673840526],[-0.4488859534718861,-0.4401739506547879,-0.4878162735340803,0.1739443693243441,0.6674368406021696,-0.651189223366027,-0.6457996772466346,-0.3821818093744995,-0.47201868720707907,-0.08002579840106039,-0.30037869527414296,-0.7614833835572417,-0.5673214342363075,0.2772826055020148,0.08737233205721262,0.3090413956534266],[-0.3635672426071168,0.7962304553491846,0.8177901172939959,-0.6063873179724419,0.6022298558129577,0.2025717260315938,0.3974508998490114,-0.23050301401053552,-0.7459721712990453,-0.7919963967182371,0.9630557907269668,-0.9483063451220892,-0.5665944119640587,-0.5663075387453111,0.6993951438896366,0.5927100534149865],[-0.7713193752668563,-0.8602009345922772,0.35917368656701143,0.09401397414854573,0.14779441347941136,0.20784008919425423,0.5654789806065699,0.6781090537240684,-0.1984747720791078,0.5249718310305007,0.5256210332080431,-0.1114822758273597,0.6528447581706236,-0.620942932851106,-0.6403320309565861,0.717663233463163],[0.9947748282039703,0.017916357856572862,-0.8209351487876813,0.5937748780710232,-0.1732831716253962,0.25569940118150436,0.028991292108932143,-0.36241091547828086,-0.07701977710112518,-0.9110354959427669,0.46171635982586023,0.6891022699944225,-0.8468920134901325,-0.1477311488896098,-0.9854282147010163,0.5792793398131351],[-0.5503006107484567,-0.009400474482811116,-0.7928749641597226,-0.5729200068077329,-0.38744416622761335,-0.2768895288012012,0.03161396731315946,-0.8095920674016597,-0.21308255854320013,0.1372995203920162,0.7120843362622047,0.16656967987571125,-0.6620289336816798,0.9620423961493851,-0.14441067176430256,-0.5570908355632032],[0.4702516776695922,0.39431675683879197,-0.7197811178921669,0.13941121147485358,0.3285918459627237,0.03769248632466615,-0.2978655183549832,0.5264268204811517,-0.3939242743151672,-0.4523227727910153,0.012026438503127235,-0.2603906158047615,-0.682055481172593,0.2483522685500934,0.4332451820834198,-0.406820919991171],[-0.13687739997320536,-0.20634764432197006,-0.7551977441435103,-0.02786254261096488,0.37447781565601046,0.6476440442767522,0.49635714525534036,-0.0030305209142338363,-0.3318308390921261,-0.5713150233311786,-0.040359950111529486,0.9013134830902545,0.8686090471658399,0.10100664255671976,0.6038476662126504,-0.08810992061681677],[0.8970592721624833,-0.11566902011867208,0.708906733773377,-0.6075283049708049,-0.34976560274886426,0.8992837836191532,-0.16667442531837784,-0.25990992128623747,0.7782563786488716,0.9609957394680464,0.23153484356197884,0.701978384958601,0.1413125604673242,0.11617726559840369,0.9973799915834665,0.9515434584785374],[-0.26787129434365786,0.7953966275875506,-0.3299577406349967,-0.8321426758175505,-0.7054509175495696,0.00820796355942166,0.14475159926348224,0.36955874857982796,0.2327028811109897,0.6893226902435363,0.44511532508169616,-0.3633679880325644,0.8919959325875406,-0.6211346209193369,-0.958023839581561,-0.734892587356625]],"weight2":[[-1.3924658580490854,0.4687582045265872,1.4793368438236383,-1.076394249888943,0.7939503290447174,2.0361806169951095,-0.1708412761149711,0.9526826814929013,0.47486820434850324,-0.42314479285640955,0.21742016966909833,0.348376747058367,-1.8727908480190618,-0.4067486698788824,-0.7721884029007852,-0.47629035996620545],[1.7837157720511925,-0.32614291138061474,0.10014913481787999,-1.7601908626734777,-1.0993835713569806,0.030225923203370666,1.9809395696940064,-0.7605457392913253,0.158062166214835,2.238569969987412,-0.8438527602094138,-0.6087767292794162,0.9774393091112624,0.37980263602975367,-0.1832214363293748,0.21062543266902983],[-0.045876131583512114,1.158047544125046,-0.04798896966945702,-0.4860822152642622,0.11043542121303027,0.18630238496238596,-1.3475126107758513,0.571948119490814,-0.372603470290204,-0.2539195648641763,0.8618809400047495,-1.1368227723195674,1.1689181756525775,0.006924837751368159,-0.220715428991032,0.40033542620686247],[-2.0908260411125767,0.6024906272915396,-0.020897540180230347,0.08540648818732512,-0.36206804788640706,0.2942463554037226,-2.1050196882270975,1.61572235496725,1.2033370337683116,0.723071654986974,1.7539354388387465,0.16433402298446484,0.030144679094393764,0.6213992416996568,-0.5809057023086974,-0.11721806123090539],[0.9649625155730471,-0.8882781005585656,1.6803554159552017,1.4078828608407936,0.5622937810167066,-1.8773229587285778,1.7715950459589338,-0.3036817356328756,1.1541649452717062,-0.0494284529899106,0.7069072172255023,2.8992408974908,-0.9935862183088231,-0.3652116084049283,1.1118956063976075,-0.3464730259161874],[-0.1149309254629768,0.8797844905131499,-1.7727096606196953,1.5270980374511613,-0.6625580752948048,-1.616410477398445,0.5387722348992822,-0.7497840927864597,1.0679719144724125,-1.0423396735633519,0.8731311560745384,-1.8456796186047402,0.7899110174729304,1.1767764857748182,-0.565892739652252,0.7396115530424981],[-0.07430557832492389,-0.8939844418694594,-1.5833519262217197,0.034404458262754685,0.5426776140933948,0.7341535745300458,-0.2716512944730627,0.7192071670262978,-0.9161213164276744,-0.5157264352300736,-1.4984391780206503,0.07249325566721082,1.959117830149213,0.3608622750777871,2.250836363036633,-0.5485182526762932],[-0.9722992291127127,1.0654689881364878,2.4313238259670986,0.7081000090038287,0.5980703310565165,0.9503473395732677,-1.0659190653492367,1.380416127544164,-2.158446379720102,0.3126614297362387,-0.42381149965724496,-1.0035060487092682,2.596596908090712,-3.25892413402036,-1.5949846282024132,0.22892742505385977],[1.1957604760026312,-1.3572281133959343,-0.100060981994227,-0.5222094123037511,-0.5648793394295949,-1.826035514074851,-0.7143008995788621,0.8659024611232283,-0.2863866258451287,1.3717321865995125,-0.16470925726880553,-0.44317140166129665,-0.040999532776196515,1.6682115603309118,0.7927265103344584,2.6588422650298567],[2.2335897761812493,1.9702682878677722,-1.2153504997804796,-0.24166349260310918,2.1201260082358453,-2.716393317823985,-1.3947319833588616,-0.4017466993143997,-1.145463341606022,-1.1539016018610715,-0.8192042982622858,0.3803163443875379,0.015086276622947781,-1.5918675065245216,2.0676840905537968,-1.1669861461953197],[-0.7567456681400486,1.6068803886191654,-0.9030263084209715,0.5894289552463722,0.2045614033629307,1.7294841891616606,0.43328246413428645,-1.5213160907776946,-1.0060550686329008,-1.7084813102001215,-0.940681190726965,-0.06596620352048581,-0.5787153841585805,3.716291020936326,0.2223553000865008,-1.3087761051518516],[1.5837350220674868,1.5093436344015752,0.022364566537519535,-1.141105776204569,0.8716990970283692,0.40627868252893357,1.96717052784699,0.4419547489107662,2.162466750493948,1.2171075854631286,-1.8430478113628899,-2.280556312150983,-0.7078352194939431,-1.0197427579432785,-0.7566538351962627,-0.5987154778117135],[-0.9233664834957366,-0.1437736337379492,1.6440402020234601,-0.1233669259859233,-2.585391355052956,1.3751288856070312,0.8840400123875969,-3.192527539307809,-1.3186076654062528,0.6682999369664757,1.457366466793517,-1.1395372884912145,0.9666348348701979,-0.9681342250057415,1.3106047174447562,0.27538010682251784],[-1.5528089923515644,-2.409338643586143,1.4877498596494845,0.26541827351894215,1.3244105367636205,-0.25408031846925117,-0.47773206493568626,-0.7993071988237656,0.8740942971841688,-1.2791026927027702,-0.7130413482139409,3.0646718639534636,0.535963515937109,-0.7787925929526326,0.8002860762444951,-0.04005386513128202],[1.0738413773702309,0.20300024812422332,-0.6839978494111452,0.5422117684522325,1.0117795507025844,-1.145624923159936,-0.9191087168081967,1.770952904446399,1.5306547844353118,0.09552967345205693,0.2704789319094262,-0.739596857766763,-1.5449087156142154,0.4831815199033517,-2.493908129518194,1.6683025324386371],[-1.2261968740452664,0.7892839345397918,-0.31153775227939734,1.2399379090573528,-0.8482569115052357,0.08563086710491546,0.05141705937892975,-2.0177747275733093,0.18807343866075052,-0.3976753568495556,2.6394600738792446,1.4774451948195284,-0.8918035171118606,-0.24684685975027368,-1.082374643063528,0.08057736454368188]],"weight3":[[2.359027254767962,1.6128872439558788,-2.6528403598989487,0.5338173776914413,-3.161015302738989,1.2509724349321647,-2.305596803868163,-2.8875846968517482,1.3584835973662626,-2.8178930421981043],[0.6251931998891631,1.212706139094004,0.7907733523402529,-1.153763740576761,0.3929431369087624,-3.9515207048828263,-6.029343698615107,-0.6431048468326737,-0.6832554096037273,-1.2365290494480863],[1.0153345706922239,-4.6420138093944,1.5971236090658596,0.5482227675219254,-2.51851650447557,1.0841307517638397,0.058893548732398424,1.1271995919093138,-2.6438783961078927,0.6034969136836764],[0.50675613928091,-2.26506410014072,-0.3690946022805072,-2.209554787348842,2.223230796376432,0.39652907089396644,0.13990160580114427,-1.8373876042977213,0.4305875052923596,0.6664544141924125],[-2.161935507216156,0.7227857747509782,-0.14209710845291726,-3.1707234793670205,-3.132948612262217,0.5355318147590554,-3.7514997854139853,0.5082943796547007,1.8273421105164103,0.21339942125959505],[-3.793788239698857,-3.553195135482574,1.1490769495288544,3.252564165691476,-0.3852907921634172,-3.7861176152476728,-2.099967548206619,2.5141019938373943,-2.890355294551154,0.5111040298906462],[1.6201904414717978,-2.5144740593853725,-2.0857776782523905,3.2580540745522697,-2.2964665468532264,-2.4501251738749206,0.5424408502687014,-1.3371911332113937,2.1345888302514395,-1.3557604515876172],[-1.4124234674259721,3.3048498396382016,-3.2130894018592584,-1.3085482594588267,-0.9443133964977504,2.365312171801475,-2.950652956753447,2.671322900424225,-3.9070041711795844,0.861374276307622],[0.454479905858765,0.029242955380832446,-3.2284315530208305,-3.0470455882949508,-2.5339957657590557,-2.749899813460226,0.5499800341555341,0.5250496548516065,0.30241005279325217,1.0871450544978596],[1.4623321188921214,0.2953062445277618,-2.1035430278469245,1.5600918830136659,-1.425257879488468,-0.7786762272044135,1.2084966364957268,0.5883726479464029,-2.962897785115558,-1.6853899678581303],[1.3061837742368425,-2.0261783492462437,0.6635642820454367,-3.2265526809416354,1.6509126866599593,-2.6112227613583174,1.4793861653769107,-2.5364764719249453,-3.3223276728422357,-0.07697776208980685],[-2.723254237048067,-3.9355576092536393,1.6363465766056058,-2.8575506422086767,-3.940897602683717,1.7794910219341475,1.9992254755956347,-2.975081029195648,1.205698809256754,2.73882527012913],[-2.4816903212877177,-1.8988907755022297,-0.029140478045476433,-1.2865115198617005,1.534277720592686,0.024267877262805458,-1.002011608726183,0.9505292372771568,-2.2373388617472427,-6.186658700989699],[-3.8924454316812303,1.7493814754932566,-3.4887812600889707,1.2446647519080363,1.8391130950674397,-3.5245724606761955,0.18773760774447334,-4.019764970926098,0.5706611105895413,2.5728833007008123],[-3.6901012410223553,-0.45673933669196637,1.7086322758705221,0.43795146934508067,-1.9828996380874435,0.3502990354428757,1.4833724992502002,-3.9072124394508405,1.818802600986126,-3.7625450971773793],[0.06435481350598518,-0.36946573200063715,-3.534257606805656,-1.6153170480299186,0.9405706075127015,0.6104465393097802,0.27460662747653586,-0.984012237065121,-3.089005752925713,-1.5101967121610034]]}
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/seed.json
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= [{"output":[1,0,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[1,0,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[1,0,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,1,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,1,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,1,0,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,1,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,1,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,1,0,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,1,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,1,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,1,0,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,1,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,1,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,1,0,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,1,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,1,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,1,0,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,1,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,1,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,1,0,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,1,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,1,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,1,0,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,1,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,1,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,1,0],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,0,1],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,0,1],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"output":[0,0,0,0,0,0,0,0,0,1],"input":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/dialogs/lazy-load.js
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
  selectNum: function selectNum() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.0-bundle1.js','26');
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .fork{\n\nuser-select: none;\n\nposition: fixed;\n\ntransform: rotate(45deg);\n\nline-height: 1.6em;\n\ntransform-origin: 150px 23px;\n\ntext-align: center;\n\nfont-family: sans-serif;\n\ndisplay: inline-block;\n\ntop: 43px;\n\nright: -91px;\n\nwidth: 300px;\n\nbackground-color: #bac7cd;\n\noutline: 4px solid #bac7cd;\n\nborder: 2px dashed #ffffff;\n\ncolor: #ffffff;\n\nz-index: 10;\n\n}\n\n .view{\n\ntext-align: center;\n\n}\n\n .view>div.tips{\n\npadding: 50px 10px;\n\n}\n\n .view>canvas{\n\nwidth: 280px;\n\nheight: 280px;\n\nbackground-color: #efefef;\n\n}\n\n .view>button{\n\nmargin: 10px 5px;\n\ncursor: pointer;\n\nwidth: 60px;\n\nline-height: 30px;\n\nborder-radius: 5px;\n\nborder: none;\n\n}\n\n .view>button.train, .view>button.clear{\n\ncolor: rgb(110, 105, 105);\n\nbackground-color: rgb(220, 223, 225);\n\n}\n\n .view>button.run{\n\ncolor: white;\n\nbackground-color: rgb(29, 147, 220);\n\n}\n\n #dialog{\n\nposition: fixed;\n\nleft: 0;\n\ntop: 0;\n\nz-index: 6;\n\nwidth: 100vw;\n\n}\n\n .download-seed{\n\nposition: fixed;\n\nleft: 10px;\n\nbottom: 10px;\n\ncursor: pointer;\n\n}\n\n .download-weight{\n\nposition: fixed;\n\nleft: 140px;\n\nbottom: 10px;\n\ncursor: pointer;\n\n}\n\n #seed-msg{\n\nposition: fixed;\n\nleft: 0;\n\ntop: 0;\n\nwidth: 100vw;\n\nheight: 100vh;\n\npadding-top: 50vh;\n\ntext-align: center;\n\nbackground-color: rgba(198, 193, 193, 0.794);\n\ncolor: rgb(0, 0, 0);\n\nfont-weight: 800;\n\n}\n\n #seed-msg>div{\n\nfont-size: 20px;\n\nfont-weight: 200;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!-- 仓库地址 -->\n<a class=\"fork\" href=\"https://github.com/lab-contrib/digit-recognition\" target=\"_blank\">Fork Me on Github</a>\n\n<!-- 操作区域 -->\n<div class=\"view\" ui-on:mouseup=\"doMouseUp\">\n    <div class=\"tips\">\n        你可以用鼠标在下面的画布上绘制0~9中任意一个数字，然后点击“识别”按钮进行识别。\n    </div>\n    <canvas ui-on:mousedown=\"doMouseDown\" ui-on:mousemove=\"doMouseMove\"></canvas>\n    <br />\n    <button class=\"train\" title=\"训练程序\" ui-on:click=\"doTrain\">训练</button>\n    <button class=\"clear\" title=\"点击我清空画布\" ui-on:click=\"doClear\">清空</button>\n    <button class=\"run\" title=\"点击我对上面绘制的数字进行识别\" ui-on:click=\"doRun\">识别</button>\n</div>\n\n<!-- 弹框 -->\n<ul id=\"dialog\"></ul>\n\n<!-- 下载种子 -->\n<button ui-on:click=\"downloadSeedData\" class=\"download-seed\">\n    下载训练种子资源\n</button>\n\n<!-- 下载权重 -->\n<button ui-on:click=\"downloadWeightData\" class=\"download-weight\">\n    下载训练后的权重\n</button>\n\n<!-- 训练提示 -->\n<div id=\"seed-msg\">\n    正在使用种子训练程序\n    <hr />\n    <div id=\"seed-msg-val\">\n        (时间有点长，可能需要几分钟，请耐心等待......)\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-bind.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isString=__etcpack__scope_args__.isString;


var update = function update(el, binding) {
  // 如果有type表示给属性赋值
  if (isString(binding.type) && binding.type.length > 0) {
    if (el.getAttribute(binding.type) != binding.value) {
      el.setAttribute(binding.type, binding.value);
    }
  } // 否则是设置内容或值
  else {
    if (el.value != binding.value || el.textContent != binding.value) {
      el.value = el.textContent = binding.value;
    }
  }
};

var _class = (_dec = Directive({
  selector: "ui-bind"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      update(el, binding);
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      update(el, binding);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-model.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;
var setValue=__etcpack__scope_args__.setValue;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var xhtml =__etcpack__scope_args__.default;


var _class = (_dec = Directive({
  selector: "ui-model"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      el.value = binding.value;
      xhtml.bind(el, 'input', function () {
        setValue(binding.target, "." + binding.exp, el.value);
      });
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      el.value = binding.value;
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 提供常用的DOM操作方法
 * https://github.com/hai2007/browser.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-on.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var xhtml =__etcpack__scope_args__.default;

/**
 * [可以使用的修饰符]
 * .prevent 阻止默认事件
 * .stop    阻止冒泡
 * .once    只执行一次
 */

var _class = (_dec = Directive({
  selector: "ui-on"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      var types = binding.type.split('.'),
          modifier = {
        "prevent": false,
        "stop": false,
        "once": false
      },
          callback = function callback(event) {
        if (modifier.stop) xhtml.stopPropagation(event);
        if (modifier.prevent) xhtml.preventDefault(event);
        binding.value.apply(binding.target, [event]);

        if (modifier.once) {
          xhtml.unbind(el, types[0], callback);
        }
      };

      for (var i = 1; i < types.length; i++) {
        modifier[types[i]] = true;
      }

      xhtml.bind(el, types[0], callback);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();