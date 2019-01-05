define('ace/mode/lpmln',function(require, exports, module) {
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;


// to define highlighting we need mode and highlight rules
// normally highlight rules are defined in a separate file, 
// but since this is used only in one place, this function is directly in the mode
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
        "regex" : "(?<=\\().*?(?=\\))"
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

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = LpmlnHighlightRules;
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/lpmln";
}).call(Mode.prototype);

exports.Mode = Mode
});

// after the mode is defined initialize the editor
// this can be in another file, but this playground doesn't allow to create multiple files