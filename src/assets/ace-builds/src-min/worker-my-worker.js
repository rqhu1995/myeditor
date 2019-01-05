importScripts("https://gitcdn.xyz/repo/antlr/antlr4/master/doc/resources/worker-base.js");
ace.define('ace/worker/my-worker',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
    "use strict";
    //var antlr4 = require('antlr4');
    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var MyWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(MyWorker, Mirror);
    // load nodejs compatible require
    var ace_require = require;
    window.require = undefined;
    var Honey = { 'requirePath': ['..'] }; // walk up to js folder, see Honey docs
    importScripts("https://gitcdn.xyz/repo/gAmUssA/ksql-antlr4-ace-editor/master/require.js");
    var antlr4_require = window.require;
    window.require = ace_require;
    // load antlr4 and myLanguage
    var antlr4, LPMLNLexer,LPMLNParser;
    try {
        window.require = antlr4_require;
        antlr4 = antlr4_require("src/assets/ace-builds/src-min/antlr4/index");
        LPMLNLexer = antlr4_require('../LPMLNLexer');
        LPMLNParser = antlr4_require('../LPMLNParser');
    } finally {
        window.require = ace_require;
    }
    var AnnotatingErrorListener = function(annotations) {
        antlr4.error.ErrorListener.call(this);
        this.annotations = annotations;
        return this;
    };
    AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
    AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

    AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
    row: line - 1,
    column: column,
    text: msg,
    type: "error"
    });
    };

    

var validate = function(input) {
    var stream = CharStreams.fromString(input);
    var lexer = new LPMLNLexer(stream);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new LPMLNParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.parseMyRule();
    return annotations;
};

(function() {

    this.onUpdate = function() {
        var value = this.doc.getValue();
        var annotations = validate(value);
        this.sender.emit("annotate", annotations);
    };

}).call(MyWorker.prototype);

exports.MyWorker = MyWorker;
});



