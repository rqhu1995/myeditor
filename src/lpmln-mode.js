ace.define('ace/mode/lpmln-mode',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

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
        }
            /* ------------------------ END ------------------------------ */
    oop.inherits(LpmlnHighlightRules, TextHighlightRules);
    exports.LpmlnHighlightRules = LpmlnHighlightRules;
    });
