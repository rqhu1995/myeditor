/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    /* --------------------- START ----------------------------- */
    var LpmlnHighlightRules = function() {
    this.$rules = {
    "start" : [
       {
          "token" : "keyword.other.define",
          "regex" : "(\\:-)"
       },
       {
          "token" : "keyword.operator.naf",
          "regex" : "((not))"
       },
       {
          "token" : "keyword.operator.neg",
          "regex" : "([\\-])"
       },
       {
          "token" : "markup.underline.weight",
          "regex" : "(\\d+:)"
       },
       {
          "token" : "string.regexp",
          "regex" : "(^\\w+(\\.*\\d{0,2})([+*/-]\\w+(\\.*\\d{0,2}))+)"
       },
       {
          "token" : "comment.line.percentage",
          "regex" : "(\\%.*)"
       },
       {
          "token" : "support.varaiable",
          "regex" : "([\\(\\)])"
       },
       {
          "token" : "variable.parameter",
          "regex" : "(?<=\\().*?(?=\\,)|(?<=\\,).*?(?=\\))"
       },
       {
          defaultToken : "text",
       }
    ]
    };
    this.normalizeRules();
    };
    /* ------------------------ END ------------------------------ */
    oop.inherits(LpmlnHighlightRules, TextHighlightRules);
    exports.LpmlnHighlightRules = LpmlnHighlightRules;
    });

