// Generated from LPMLN.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LPMLNListener = require('./LPMLNListener').LPMLNListener;
var grammarFileName = "LPMLN.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003&\u017a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003G\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0005\u0007Q\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "V\n\u0007\u0003\u0007\u0005\u0007Y\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007^\n\u0007\u0007\u0007`\n\u0007\f\u0007\u000e\u0007",
    "c\u000b\u0007\u0005\u0007e\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bm\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bs\n\b",
    "\f\b\u000e\bv\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t~\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u0085",
    "\n\n\f\n\u000e\n\u0088\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0092\n",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u009a",
    "\n\f\f\f\u000e\f\u009d\u000b\f\u0003\f\u0003\f\u0005\f\u00a1\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00ad\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00b4\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00b9\n\u0011\f\u0011\u000e",
    "\u0011\u00bc\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012",
    "\u00c1\n\u0012\f\u0012\u000e\u0012\u00c4\u000b\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00c9\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00d0\n\u0013\u0003",
    "\u0013\u0007\u0013\u00d3\n\u0013\f\u0013\u000e\u0013\u00d6\u000b\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00db\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00e4\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u00ea\n\u0014\f\u0014\u000e\u0014\u00ed\u000b",
    "\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u00f1\n\u0015\u0005\u0015",
    "\u00f3\n\u0015\u0003\u0015\u0005\u0015\u00f6\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00fc\n\u0015\u0003\u0015",
    "\u0005\u0015\u00ff\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0103",
    "\n\u0016\u0005\u0016\u0105\n\u0016\u0003\u0016\u0005\u0016\u0108\n\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u010e\n",
    "\u0016\u0003\u0016\u0005\u0016\u0111\n\u0016\u0003\u0017\u0005\u0017",
    "\u0114\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0119",
    "\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0122\n\u0017\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u0126\n\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u012a\n\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u012e\n\u0017\u0005",
    "\u0017\u0130\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018",
    "\u0135\n\u0018\f\u0018\u000e\u0018\u0138\u000b\u0018\u0003\u0018\u0005",
    "\u0018\u013b\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019",
    "\u0140\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u0146\n\u0019\u0007\u0019\u0148\n\u0019\f\u0019\u000e\u0019\u014b",
    "\u000b\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u014f\n\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0005\u001d\u015f\n\u001d\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u0163\n\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u016a\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0007",
    " \u0175\n \f \u000e \u0178\u000b \u0003 \u0002\u0003\u000e!\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>\u0002\u0005\u0004\u0002\u0006\u0006\b\b\u0003\u0002",
    "\u000b\u000e\u0003\u0002\u001c\"\u0002\u019a\u0002@\u0003\u0002\u0002",
    "\u0002\u0004F\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002",
    "\bJ\u0003\u0002\u0002\u0002\nL\u0003\u0002\u0002\u0002\fd\u0003\u0002",
    "\u0002\u0002\u000el\u0003\u0002\u0002\u0002\u0010}\u0003\u0002\u0002",
    "\u0002\u0012\u007f\u0003\u0002\u0002\u0002\u0014\u0091\u0003\u0002\u0002",
    "\u0002\u0016\u00a0\u0003\u0002\u0002\u0002\u0018\u00a2\u0003\u0002\u0002",
    "\u0002\u001a\u00ac\u0003\u0002\u0002\u0002\u001c\u00ae\u0003\u0002\u0002",
    "\u0002\u001e\u00b3\u0003\u0002\u0002\u0002 \u00b5\u0003\u0002\u0002",
    "\u0002\"\u00bd\u0003\u0002\u0002\u0002$\u00c8\u0003\u0002\u0002\u0002",
    "&\u00da\u0003\u0002\u0002\u0002(\u00f2\u0003\u0002\u0002\u0002*\u0104",
    "\u0003\u0002\u0002\u0002,\u012f\u0003\u0002\u0002\u0002.\u013a\u0003",
    "\u0002\u0002\u00020\u013f\u0003\u0002\u0002\u00022\u014e\u0003\u0002",
    "\u0002\u00024\u0152\u0003\u0002\u0002\u00026\u0156\u0003\u0002\u0002",
    "\u00028\u015e\u0003\u0002\u0002\u0002:\u0162\u0003\u0002\u0002\u0002",
    "<\u0167\u0003\u0002\u0002\u0002>\u0176\u0003\u0002\u0002\u0002@A\u0007",
    "\f\u0002\u0002AB\u0007\u0006\u0002\u0002B\u0003\u0003\u0002\u0002\u0002",
    "CG\u0007\u0006\u0002\u0002DG\u0005\u0002\u0002\u0002EG\u0007\b\u0002",
    "\u0002FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002",
    "\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HI\t\u0002\u0002\u0002I\u0007",
    "\u0003\u0002\u0002\u0002JK\t\u0003\u0002\u0002K\t\u0003\u0002\u0002",
    "\u0002LM\t\u0004\u0002\u0002M\u000b\u0003\u0002\u0002\u0002Ne\u0005",
    "\u0004\u0003\u0002OQ\u0007\f\u0002\u0002PO\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002Re\u0007\n\u0002",
    "\u0002SY\u0005\u0004\u0003\u0002TV\u0007\f\u0002\u0002UT\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0007",
    "\n\u0002\u0002XS\u0003\u0002\u0002\u0002XU\u0003\u0002\u0002\u0002Y",
    "a\u0003\u0002\u0002\u0002Z]\u0005\b\u0005\u0002[^\u0005\u0006\u0004",
    "\u0002\\^\u0007\n\u0002\u0002][\u0003\u0002\u0002\u0002]\\\u0003\u0002",
    "\u0002\u0002^`\u0003\u0002\u0002\u0002_Z\u0003\u0002\u0002\u0002`c\u0003",
    "\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002dN\u0003\u0002\u0002",
    "\u0002dP\u0003\u0002\u0002\u0002dX\u0003\u0002\u0002\u0002e\r\u0003",
    "\u0002\u0002\u0002fg\b\b\u0001\u0002gm\u0005\f\u0007\u0002hi\u0007\u000f",
    "\u0002\u0002ij\u0005\u000e\b\u0002jk\u0007\u0010\u0002\u0002km\u0003",
    "\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002",
    "mt\u0003\u0002\u0002\u0002no\f\u0003\u0002\u0002op\u0005\b\u0005\u0002",
    "pq\u0005\u000e\b\u0004qs\u0003\u0002\u0002\u0002rn\u0003\u0002\u0002",
    "\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002",
    "\u0002\u0002u\u000f\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002",
    "w~\u0005\u000e\b\u0002xy\u0007\f\u0002\u0002yz\u0007\u000f\u0002\u0002",
    "z{\u0005\u000e\b\u0002{|\u0007\u0010\u0002\u0002|~\u0003\u0002\u0002",
    "\u0002}w\u0003\u0002\u0002\u0002}x\u0003\u0002\u0002\u0002~\u0011\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007\t\u0002\u0002\u0080\u0081\u0007",
    "\u000f\u0002\u0002\u0081\u0086\u0005\u0014\u000b\u0002\u0082\u0083\u0007",
    "\u0016\u0002\u0002\u0083\u0085\u0005\u0014\u000b\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089\u0003",
    "\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a\u0007",
    "\u0010\u0002\u0002\u008a\u0013\u0003\u0002\u0002\u0002\u008b\u0092\u0007",
    "\n\u0002\u0002\u008c\u0092\u0007\t\u0002\u0002\u008d\u0092\u0005\u0004",
    "\u0003\u0002\u008e\u0092\u0005\u0010\t\u0002\u008f\u0092\u0005\u0012",
    "\n\u0002\u0090\u0092\u0007\u0004\u0002\u0002\u0091\u008b\u0003\u0002",
    "\u0002\u0002\u0091\u008c\u0003\u0002\u0002\u0002\u0091\u008d\u0003\u0002",
    "\u0002\u0002\u0091\u008e\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0015\u0003\u0002",
    "\u0002\u0002\u0093\u00a1\u0007\t\u0002\u0002\u0094\u0095\u0007\t\u0002",
    "\u0002\u0095\u0096\u0007\u000f\u0002\u0002\u0096\u009b\u0005\u0014\u000b",
    "\u0002\u0097\u0098\u0007\u0016\u0002\u0002\u0098\u009a\u0005\u0014\u000b",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009d\u0003\u0002\u0002",
    "\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002",
    "\u0002\u009e\u009f\u0007\u0010\u0002\u0002\u009f\u00a1\u0003\u0002\u0002",
    "\u0002\u00a0\u0093\u0003\u0002\u0002\u0002\u00a0\u0094\u0003\u0002\u0002",
    "\u0002\u00a1\u0017\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\t\u0002",
    "\u0002\u00a3\u00a4\u0007\u000f\u0002\u0002\u00a4\u00a5\u0005\u0004\u0003",
    "\u0002\u00a5\u00a6\u0007\u0015\u0002\u0002\u00a6\u00a7\u0005\u0004\u0003",
    "\u0002\u00a7\u00a8\u0007\u0010\u0002\u0002\u00a8\u0019\u0003\u0002\u0002",
    "\u0002\u00a9\u00ad\u0005\u0016\f\u0002\u00aa\u00ab\u0007\f\u0002\u0002",
    "\u00ab\u00ad\u0005\u0016\f\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002",
    "\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ad\u001b\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007\u0003\u0002\u0002\u00af\u00b0\u0005\u001a\u000e\u0002",
    "\u00b0\u001d\u0003\u0002\u0002\u0002\u00b1\u00b4\u0005\u001a\u000e\u0002",
    "\u00b2\u00b4\u0005\u001c\u000f\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u001f\u0003\u0002\u0002\u0002",
    "\u00b5\u00ba\u0005\u0014\u000b\u0002\u00b6\u00b7\u0007\u0016\u0002\u0002",
    "\u00b7\u00b9\u0005\u0014\u000b\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002",
    "\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb!\u0003\u0002\u0002\u0002",
    "\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bd\u00c2\u0005\u001a\u000e\u0002",
    "\u00be\u00bf\u0007\u0016\u0002\u0002\u00bf\u00c1\u0005\u001a\u000e\u0002",
    "\u00c0\u00be\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c3#\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0005 \u0011\u0002\u00c6\u00c7\u0007\u0018\u0002\u0002",
    "\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00c5\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002",
    "\u00ca\u00d4\u0005\"\u0012\u0002\u00cb\u00cf\u0007\u001b\u0002\u0002",
    "\u00cc\u00cd\u0005 \u0011\u0002\u00cd\u00ce\u0007\u0018\u0002\u0002",
    "\u00ce\u00d0\u0003\u0002\u0002\u0002\u00cf\u00cc\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002",
    "\u00d1\u00d3\u0005\"\u0012\u0002\u00d2\u00cb\u0003\u0002\u0002\u0002",
    "\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5%\u0003\u0002\u0002\u0002",
    "\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d8\u0005 \u0011\u0002",
    "\u00d8\u00d9\u0007\u0018\u0002\u0002\u00d9\u00db\u0003\u0002\u0002\u0002",
    "\u00da\u00d7\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002",
    "\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0005\"\u0012\u0002",
    "\u00dd\u00de\u0007\u0018\u0002\u0002\u00de\u00eb\u0005\"\u0012\u0002",
    "\u00df\u00e3\u0007\u001b\u0002\u0002\u00e0\u00e1\u0005 \u0011\u0002",
    "\u00e1\u00e2\u0007\u0018\u0002\u0002\u00e2\u00e4\u0003\u0002\u0002\u0002",
    "\u00e3\u00e0\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0005\"\u0012\u0002",
    "\u00e6\u00e7\u0007\u0018\u0002\u0002\u00e7\u00e8\u0005\"\u0012\u0002",
    "\u00e8\u00ea\u0003\u0002\u0002\u0002\u00e9\u00df\u0003\u0002\u0002\u0002",
    "\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\'\u0003\u0002\u0002\u0002",
    "\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee\u00f0\u0005\u0014\u000b\u0002",
    "\u00ef\u00f1\u0005\n\u0006\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002",
    "\u00f2\u00ee\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002",
    "\u00f3\u00f5\u0003\u0002\u0002\u0002\u00f4\u00f6\u0007#\u0002\u0002",
    "\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002",
    "\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u0013\u0002\u0002",
    "\u00f8\u00f9\u0005$\u0013\u0002\u00f9\u00fe\u0007\u0014\u0002\u0002",
    "\u00fa\u00fc\u0005\n\u0006\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002",
    "\u00fd\u00ff\u0005\u0014\u000b\u0002\u00fe\u00fb\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff)\u0003\u0002\u0002\u0002",
    "\u0100\u0102\u0005\u0014\u000b\u0002\u0101\u0103\u0005\n\u0006\u0002",
    "\u0102\u0101\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u0100\u0003\u0002\u0002\u0002",
    "\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0107\u0003\u0002\u0002\u0002",
    "\u0106\u0108\u0007#\u0002\u0002\u0107\u0106\u0003\u0002\u0002\u0002",
    "\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0007\u0013\u0002\u0002\u010a\u010b\u0005&\u0014\u0002",
    "\u010b\u0110\u0007\u0014\u0002\u0002\u010c\u010e\u0005\n\u0006\u0002",
    "\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0111\u0005\u0014\u000b\u0002",
    "\u0110\u010d\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002",
    "\u0111+\u0003\u0002\u0002\u0002\u0112\u0114\u0007\f\u0002\u0002\u0113",
    "\u0112\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0007\n\u0002\u0002\u0116",
    "\u0118\u0005\n\u0006\u0002\u0117\u0119\u0007\f\u0002\u0002\u0118\u0117",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011a\u011b\u0007\n\u0002\u0002\u011b\u0130",
    "\u0003\u0002\u0002\u0002\u011c\u011d\u0007\n\u0002\u0002\u011d\u011e",
    "\u0005\n\u0006\u0002\u011e\u011f\u0007\u0004\u0002\u0002\u011f\u0130",
    "\u0003\u0002\u0002\u0002\u0120\u0122\u0007\f\u0002\u0002\u0121\u0120",
    "\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0123",
    "\u0003\u0002\u0002\u0002\u0123\u0126\u0007\n\u0002\u0002\u0124\u0126",
    "\u0005\u0010\t\u0002\u0125\u0121\u0003\u0002\u0002\u0002\u0125\u0124",
    "\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u012d",
    "\u0005\n\u0006\u0002\u0128\u012a\u0007\f\u0002\u0002\u0129\u0128\u0003",
    "\u0002\u0002\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u012b\u0003",
    "\u0002\u0002\u0002\u012b\u012e\u0007\n\u0002\u0002\u012c\u012e\u0005",
    "\u0010\t\u0002\u012d\u0129\u0003\u0002\u0002\u0002\u012d\u012c\u0003",
    "\u0002\u0002\u0002\u012e\u0130\u0003\u0002\u0002\u0002\u012f\u0113\u0003",
    "\u0002\u0002\u0002\u012f\u011c\u0003\u0002\u0002\u0002\u012f\u0125\u0003",
    "\u0002\u0002\u0002\u0130-\u0003\u0002\u0002\u0002\u0131\u0136\u0005",
    "\u001a\u000e\u0002\u0132\u0133\u0007\u0017\u0002\u0002\u0133\u0135\u0005",
    "\u001a\u000e\u0002\u0134\u0132\u0003\u0002\u0002\u0002\u0135\u0138\u0003",
    "\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136\u0137\u0003",
    "\u0002\u0002\u0002\u0137\u013b\u0003\u0002\u0002\u0002\u0138\u0136\u0003",
    "\u0002\u0002\u0002\u0139\u013b\u0005*\u0016\u0002\u013a\u0131\u0003",
    "\u0002\u0002\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013b/\u0003",
    "\u0002\u0002\u0002\u013c\u0140\u0005\u001e\u0010\u0002\u013d\u0140\u0005",
    ",\u0017\u0002\u013e\u0140\u0005(\u0015\u0002\u013f\u013c\u0003\u0002",
    "\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u013f\u013e\u0003\u0002",
    "\u0002\u0002\u0140\u0149\u0003\u0002\u0002\u0002\u0141\u0145\u0007\u0016",
    "\u0002\u0002\u0142\u0146\u0005\u001e\u0010\u0002\u0143\u0146\u0005,",
    "\u0017\u0002\u0144\u0146\u0005(\u0015\u0002\u0145\u0142\u0003\u0002",
    "\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145\u0144\u0003\u0002",
    "\u0002\u0002\u0146\u0148\u0003\u0002\u0002\u0002\u0147\u0141\u0003\u0002",
    "\u0002\u0002\u0148\u014b\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002",
    "\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a1\u0003\u0002",
    "\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014c\u014f\u0005.",
    "\u0018\u0002\u014d\u014f\u0005\u0018\r\u0002\u014e\u014c\u0003\u0002",
    "\u0002\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002",
    "\u0002\u0002\u0150\u0151\u0007\u0005\u0002\u0002\u01513\u0003\u0002",
    "\u0002\u0002\u0152\u0153\u0007\u0019\u0002\u0002\u0153\u0154\u00050",
    "\u0019\u0002\u0154\u0155\u0007\u0005\u0002\u0002\u01555\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0005.\u0018\u0002\u0157\u0158\u0007\u0019",
    "\u0002\u0002\u0158\u0159\u00050\u0019\u0002\u0159\u015a\u0007\u0005",
    "\u0002\u0002\u015a7\u0003\u0002\u0002\u0002\u015b\u015f\u00052\u001a",
    "\u0002\u015c\u015f\u00054\u001b\u0002\u015d\u015f\u00056\u001c\u0002",
    "\u015e\u015b\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002",
    "\u015e\u015d\u0003\u0002\u0002\u0002\u015f9\u0003\u0002\u0002\u0002",
    "\u0160\u0163\u0007\u0007\u0002\u0002\u0161\u0163\u0005\u0004\u0003\u0002",
    "\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0161\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0007\u0018\u0002\u0002",
    "\u0165\u0166\u00058\u001d\u0002\u0166;\u0003\u0002\u0002\u0002\u0167",
    "\u0169\u0007$\u0002\u0002\u0168\u016a\u0007\f\u0002\u0002\u0169\u0168",
    "\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b",
    "\u0003\u0002\u0002\u0002\u016b\u016c\u0007\t\u0002\u0002\u016c\u016d",
    "\u0007\u000e\u0002\u0002\u016d\u016e\u0005\u0006\u0004\u0002\u016e\u016f",
    "\u0007\u0005\u0002\u0002\u016f=\u0003\u0002\u0002\u0002\u0170\u0175",
    "\u00056\u001c\u0002\u0171\u0175\u00058\u001d\u0002\u0172\u0175\u0005",
    ":\u001e\u0002\u0173\u0175\u0005<\u001f\u0002\u0174\u0170\u0003\u0002",
    "\u0002\u0002\u0174\u0171\u0003\u0002\u0002\u0002\u0174\u0172\u0003\u0002",
    "\u0002\u0002\u0174\u0173\u0003\u0002\u0002\u0002\u0175\u0178\u0003\u0002",
    "\u0002\u0002\u0176\u0174\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002",
    "\u0002\u0002\u0177?\u0003\u0002\u0002\u0002\u0178\u0176\u0003\u0002",
    "\u0002\u00026FPUX]adlt}\u0086\u0091\u009b\u00a0\u00ac\u00b3\u00ba\u00c2",
    "\u00c8\u00cf\u00d4\u00da\u00e3\u00eb\u00f0\u00f2\u00f5\u00fb\u00fe\u0102",
    "\u0104\u0107\u010d\u0110\u0113\u0118\u0121\u0125\u0129\u012d\u012f\u0136",
    "\u013a\u013f\u0145\u0149\u014e\u015e\u0162\u0169\u0174\u0176"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'not '", null, "'.'", null, null, "'0'", null, 
                     null, "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'['", 
                     "']'", "'{'", "'}'", "'..'", "','", "'|'", "':'", "':-'", 
                     "':~'", "';'", "'<'", "'<='", "'>'", "'>='", "'='", 
                     "'=='", "'!='", null, "'#show '" ];

var symbolicNames = [ null, "NAF_NOT", "STRING", "FULLSTOP", "POSITIVE_INT", 
                      "DECIMAL", "ZERO", "CONSTANT", "VAR", "PLUS", "MINUS", 
                      "STAR", "SLASH", "LPAREN", "RPAREN", "LSBRACK", "RSBRACK", 
                      "LCBRACK", "RCBRACK", "RANGE", "COMMA", "DISJUNCTION", 
                      "CONDITION", "ASSIGN", "WEAK_ASSIGN", "SEMICOLON", 
                      "LESS_THAN", "LEQ", "GREATER_THAN", "GEQ", "EQUAL", 
                      "DOUBLE_EQUAL", "NEQ", "AGGREGATE_OP", "META_OP", 
                      "LINE_COMMENT", "WS" ];

var ruleNames =  [ "negative_int", "integer", "natural_number", "arithmetic_op", 
                   "relation_op", "simple_arithmetic_expr", "simple_arithmetic_expr2", 
                   "arithmethic_expr", "functions", "term", "atom", "range_atom", 
                   "literal", "default_literal", "extended_literal", "term_tuple", 
                   "literal_tuple", "aggregate_elements", "aggregate_elements_condition", 
                   "body_aggregate", "head_aggregate", "relation_expr", 
                   "head", "body", "fact", "constraint", "full_rule", "hard_rule", 
                   "soft_rule", "meta_rule", "lpmln_rule" ];

function LPMLNParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LPMLNParser.prototype = Object.create(antlr4.Parser.prototype);
LPMLNParser.prototype.constructor = LPMLNParser;

Object.defineProperty(LPMLNParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LPMLNParser.EOF = antlr4.Token.EOF;
LPMLNParser.NAF_NOT = 1;
LPMLNParser.STRING = 2;
LPMLNParser.FULLSTOP = 3;
LPMLNParser.POSITIVE_INT = 4;
LPMLNParser.DECIMAL = 5;
LPMLNParser.ZERO = 6;
LPMLNParser.CONSTANT = 7;
LPMLNParser.VAR = 8;
LPMLNParser.PLUS = 9;
LPMLNParser.MINUS = 10;
LPMLNParser.STAR = 11;
LPMLNParser.SLASH = 12;
LPMLNParser.LPAREN = 13;
LPMLNParser.RPAREN = 14;
LPMLNParser.LSBRACK = 15;
LPMLNParser.RSBRACK = 16;
LPMLNParser.LCBRACK = 17;
LPMLNParser.RCBRACK = 18;
LPMLNParser.RANGE = 19;
LPMLNParser.COMMA = 20;
LPMLNParser.DISJUNCTION = 21;
LPMLNParser.CONDITION = 22;
LPMLNParser.ASSIGN = 23;
LPMLNParser.WEAK_ASSIGN = 24;
LPMLNParser.SEMICOLON = 25;
LPMLNParser.LESS_THAN = 26;
LPMLNParser.LEQ = 27;
LPMLNParser.GREATER_THAN = 28;
LPMLNParser.GEQ = 29;
LPMLNParser.EQUAL = 30;
LPMLNParser.DOUBLE_EQUAL = 31;
LPMLNParser.NEQ = 32;
LPMLNParser.AGGREGATE_OP = 33;
LPMLNParser.META_OP = 34;
LPMLNParser.LINE_COMMENT = 35;
LPMLNParser.WS = 36;

LPMLNParser.RULE_negative_int = 0;
LPMLNParser.RULE_integer = 1;
LPMLNParser.RULE_natural_number = 2;
LPMLNParser.RULE_arithmetic_op = 3;
LPMLNParser.RULE_relation_op = 4;
LPMLNParser.RULE_simple_arithmetic_expr = 5;
LPMLNParser.RULE_simple_arithmetic_expr2 = 6;
LPMLNParser.RULE_arithmethic_expr = 7;
LPMLNParser.RULE_functions = 8;
LPMLNParser.RULE_term = 9;
LPMLNParser.RULE_atom = 10;
LPMLNParser.RULE_range_atom = 11;
LPMLNParser.RULE_literal = 12;
LPMLNParser.RULE_default_literal = 13;
LPMLNParser.RULE_extended_literal = 14;
LPMLNParser.RULE_term_tuple = 15;
LPMLNParser.RULE_literal_tuple = 16;
LPMLNParser.RULE_aggregate_elements = 17;
LPMLNParser.RULE_aggregate_elements_condition = 18;
LPMLNParser.RULE_body_aggregate = 19;
LPMLNParser.RULE_head_aggregate = 20;
LPMLNParser.RULE_relation_expr = 21;
LPMLNParser.RULE_head = 22;
LPMLNParser.RULE_body = 23;
LPMLNParser.RULE_fact = 24;
LPMLNParser.RULE_constraint = 25;
LPMLNParser.RULE_full_rule = 26;
LPMLNParser.RULE_hard_rule = 27;
LPMLNParser.RULE_soft_rule = 28;
LPMLNParser.RULE_meta_rule = 29;
LPMLNParser.RULE_lpmln_rule = 30;

function Negative_intContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_negative_int;
    return this;
}

Negative_intContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Negative_intContext.prototype.constructor = Negative_intContext;

Negative_intContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

Negative_intContext.prototype.POSITIVE_INT = function() {
    return this.getToken(LPMLNParser.POSITIVE_INT, 0);
};

Negative_intContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterNegative_int(this);
	}
};

Negative_intContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitNegative_int(this);
	}
};




LPMLNParser.Negative_intContext = Negative_intContext;

LPMLNParser.prototype.negative_int = function() {

    var localctx = new Negative_intContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LPMLNParser.RULE_negative_int);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(LPMLNParser.MINUS);
        this.state = 63;
        this.match(LPMLNParser.POSITIVE_INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_integer;
    return this;
}

IntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

IntegerContext.prototype.POSITIVE_INT = function() {
    return this.getToken(LPMLNParser.POSITIVE_INT, 0);
};

IntegerContext.prototype.negative_int = function() {
    return this.getTypedRuleContext(Negative_intContext,0);
};

IntegerContext.prototype.ZERO = function() {
    return this.getToken(LPMLNParser.ZERO, 0);
};

IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitInteger(this);
	}
};




LPMLNParser.IntegerContext = IntegerContext;

LPMLNParser.prototype.integer = function() {

    var localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LPMLNParser.RULE_integer);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LPMLNParser.POSITIVE_INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(LPMLNParser.POSITIVE_INT);
            break;
        case LPMLNParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.negative_int();
            break;
        case LPMLNParser.ZERO:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.match(LPMLNParser.ZERO);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Natural_numberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_natural_number;
    return this;
}

Natural_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Natural_numberContext.prototype.constructor = Natural_numberContext;

Natural_numberContext.prototype.POSITIVE_INT = function() {
    return this.getToken(LPMLNParser.POSITIVE_INT, 0);
};

Natural_numberContext.prototype.ZERO = function() {
    return this.getToken(LPMLNParser.ZERO, 0);
};

Natural_numberContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterNatural_number(this);
	}
};

Natural_numberContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitNatural_number(this);
	}
};




LPMLNParser.Natural_numberContext = Natural_numberContext;

LPMLNParser.prototype.natural_number = function() {

    var localctx = new Natural_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LPMLNParser.RULE_natural_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        _la = this._input.LA(1);
        if(!(_la===LPMLNParser.POSITIVE_INT || _la===LPMLNParser.ZERO)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Arithmetic_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_arithmetic_op;
    return this;
}

Arithmetic_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmetic_opContext.prototype.constructor = Arithmetic_opContext;

Arithmetic_opContext.prototype.PLUS = function() {
    return this.getToken(LPMLNParser.PLUS, 0);
};

Arithmetic_opContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

Arithmetic_opContext.prototype.STAR = function() {
    return this.getToken(LPMLNParser.STAR, 0);
};

Arithmetic_opContext.prototype.SLASH = function() {
    return this.getToken(LPMLNParser.SLASH, 0);
};

Arithmetic_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterArithmetic_op(this);
	}
};

Arithmetic_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitArithmetic_op(this);
	}
};




LPMLNParser.Arithmetic_opContext = Arithmetic_opContext;

LPMLNParser.prototype.arithmetic_op = function() {

    var localctx = new Arithmetic_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LPMLNParser.RULE_arithmetic_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LPMLNParser.PLUS) | (1 << LPMLNParser.MINUS) | (1 << LPMLNParser.STAR) | (1 << LPMLNParser.SLASH))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relation_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_relation_op;
    return this;
}

Relation_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relation_opContext.prototype.constructor = Relation_opContext;

Relation_opContext.prototype.LESS_THAN = function() {
    return this.getToken(LPMLNParser.LESS_THAN, 0);
};

Relation_opContext.prototype.LEQ = function() {
    return this.getToken(LPMLNParser.LEQ, 0);
};

Relation_opContext.prototype.GREATER_THAN = function() {
    return this.getToken(LPMLNParser.GREATER_THAN, 0);
};

Relation_opContext.prototype.GEQ = function() {
    return this.getToken(LPMLNParser.GEQ, 0);
};

Relation_opContext.prototype.EQUAL = function() {
    return this.getToken(LPMLNParser.EQUAL, 0);
};

Relation_opContext.prototype.DOUBLE_EQUAL = function() {
    return this.getToken(LPMLNParser.DOUBLE_EQUAL, 0);
};

Relation_opContext.prototype.NEQ = function() {
    return this.getToken(LPMLNParser.NEQ, 0);
};

Relation_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterRelation_op(this);
	}
};

Relation_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitRelation_op(this);
	}
};




LPMLNParser.Relation_opContext = Relation_opContext;

LPMLNParser.prototype.relation_op = function() {

    var localctx = new Relation_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LPMLNParser.RULE_relation_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LPMLNParser.LESS_THAN - 26)) | (1 << (LPMLNParser.LEQ - 26)) | (1 << (LPMLNParser.GREATER_THAN - 26)) | (1 << (LPMLNParser.GEQ - 26)) | (1 << (LPMLNParser.EQUAL - 26)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 26)) | (1 << (LPMLNParser.NEQ - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Simple_arithmetic_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_simple_arithmetic_expr;
    return this;
}

Simple_arithmetic_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_arithmetic_exprContext.prototype.constructor = Simple_arithmetic_exprContext;

Simple_arithmetic_exprContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

Simple_arithmetic_exprContext.prototype.VAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.VAR);
    } else {
        return this.getToken(LPMLNParser.VAR, i);
    }
};


Simple_arithmetic_exprContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

Simple_arithmetic_exprContext.prototype.arithmetic_op = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Arithmetic_opContext);
    } else {
        return this.getTypedRuleContext(Arithmetic_opContext,i);
    }
};

Simple_arithmetic_exprContext.prototype.natural_number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Natural_numberContext);
    } else {
        return this.getTypedRuleContext(Natural_numberContext,i);
    }
};

Simple_arithmetic_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterSimple_arithmetic_expr(this);
	}
};

Simple_arithmetic_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitSimple_arithmetic_expr(this);
	}
};




LPMLNParser.Simple_arithmetic_exprContext = Simple_arithmetic_exprContext;

LPMLNParser.prototype.simple_arithmetic_expr = function() {

    var localctx = new Simple_arithmetic_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LPMLNParser.RULE_simple_arithmetic_expr);
    var _la = 0; // Token type
    try {
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.integer();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LPMLNParser.MINUS) {
                this.state = 77;
                this.match(LPMLNParser.MINUS);
            }

            this.state = 80;
            this.match(LPMLNParser.VAR);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 86;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 81;
                this.integer();
                break;

            case 2:
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LPMLNParser.MINUS) {
                    this.state = 82;
                    this.match(LPMLNParser.MINUS);
                }

                this.state = 85;
                this.match(LPMLNParser.VAR);
                break;

            }
            this.state = 95;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 88;
                    this.arithmetic_op();
                    this.state = 91;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LPMLNParser.POSITIVE_INT:
                    case LPMLNParser.ZERO:
                        this.state = 89;
                        this.natural_number();
                        break;
                    case LPMLNParser.VAR:
                        this.state = 90;
                        this.match(LPMLNParser.VAR);
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 97;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Simple_arithmetic_expr2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_simple_arithmetic_expr2;
    return this;
}

Simple_arithmetic_expr2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_arithmetic_expr2Context.prototype.constructor = Simple_arithmetic_expr2Context;

Simple_arithmetic_expr2Context.prototype.simple_arithmetic_expr = function() {
    return this.getTypedRuleContext(Simple_arithmetic_exprContext,0);
};

Simple_arithmetic_expr2Context.prototype.LPAREN = function() {
    return this.getToken(LPMLNParser.LPAREN, 0);
};

Simple_arithmetic_expr2Context.prototype.simple_arithmetic_expr2 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Simple_arithmetic_expr2Context);
    } else {
        return this.getTypedRuleContext(Simple_arithmetic_expr2Context,i);
    }
};

Simple_arithmetic_expr2Context.prototype.RPAREN = function() {
    return this.getToken(LPMLNParser.RPAREN, 0);
};

Simple_arithmetic_expr2Context.prototype.arithmetic_op = function() {
    return this.getTypedRuleContext(Arithmetic_opContext,0);
};

Simple_arithmetic_expr2Context.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterSimple_arithmetic_expr2(this);
	}
};

Simple_arithmetic_expr2Context.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitSimple_arithmetic_expr2(this);
	}
};



LPMLNParser.prototype.simple_arithmetic_expr2 = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Simple_arithmetic_expr2Context(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, LPMLNParser.RULE_simple_arithmetic_expr2, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LPMLNParser.POSITIVE_INT:
        case LPMLNParser.ZERO:
        case LPMLNParser.VAR:
        case LPMLNParser.MINUS:
            this.state = 101;
            this.simple_arithmetic_expr();
            break;
        case LPMLNParser.LPAREN:
            this.state = 102;
            this.match(LPMLNParser.LPAREN);
            this.state = 103;
            this.simple_arithmetic_expr2(0);
            this.state = 104;
            this.match(LPMLNParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Simple_arithmetic_expr2Context(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, LPMLNParser.RULE_simple_arithmetic_expr2);
                this.state = 108;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 109;
                this.arithmetic_op();
                this.state = 110;
                this.simple_arithmetic_expr2(2); 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Arithmethic_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_arithmethic_expr;
    return this;
}

Arithmethic_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmethic_exprContext.prototype.constructor = Arithmethic_exprContext;

Arithmethic_exprContext.prototype.simple_arithmetic_expr2 = function() {
    return this.getTypedRuleContext(Simple_arithmetic_expr2Context,0);
};

Arithmethic_exprContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

Arithmethic_exprContext.prototype.LPAREN = function() {
    return this.getToken(LPMLNParser.LPAREN, 0);
};

Arithmethic_exprContext.prototype.RPAREN = function() {
    return this.getToken(LPMLNParser.RPAREN, 0);
};

Arithmethic_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterArithmethic_expr(this);
	}
};

Arithmethic_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitArithmethic_expr(this);
	}
};




LPMLNParser.Arithmethic_exprContext = Arithmethic_exprContext;

LPMLNParser.prototype.arithmethic_expr = function() {

    var localctx = new Arithmethic_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LPMLNParser.RULE_arithmethic_expr);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 117;
            this.simple_arithmetic_expr2(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this.match(LPMLNParser.MINUS);
            this.state = 119;
            this.match(LPMLNParser.LPAREN);
            this.state = 120;
            this.simple_arithmetic_expr2(0);
            this.state = 121;
            this.match(LPMLNParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_functions;
    return this;
}

FunctionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionsContext.prototype.constructor = FunctionsContext;

FunctionsContext.prototype.CONSTANT = function() {
    return this.getToken(LPMLNParser.CONSTANT, 0);
};

FunctionsContext.prototype.LPAREN = function() {
    return this.getToken(LPMLNParser.LPAREN, 0);
};

FunctionsContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

FunctionsContext.prototype.RPAREN = function() {
    return this.getToken(LPMLNParser.RPAREN, 0);
};

FunctionsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.COMMA);
    } else {
        return this.getToken(LPMLNParser.COMMA, i);
    }
};


FunctionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterFunctions(this);
	}
};

FunctionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitFunctions(this);
	}
};




LPMLNParser.FunctionsContext = FunctionsContext;

LPMLNParser.prototype.functions = function() {

    var localctx = new FunctionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LPMLNParser.RULE_functions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(LPMLNParser.CONSTANT);
        this.state = 126;
        this.match(LPMLNParser.LPAREN);
        this.state = 127;
        this.term();
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.COMMA) {
            this.state = 128;
            this.match(LPMLNParser.COMMA);
            this.state = 129;
            this.term();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 135;
        this.match(LPMLNParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.VAR = function() {
    return this.getToken(LPMLNParser.VAR, 0);
};

TermContext.prototype.CONSTANT = function() {
    return this.getToken(LPMLNParser.CONSTANT, 0);
};

TermContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

TermContext.prototype.arithmethic_expr = function() {
    return this.getTypedRuleContext(Arithmethic_exprContext,0);
};

TermContext.prototype.functions = function() {
    return this.getTypedRuleContext(FunctionsContext,0);
};

TermContext.prototype.STRING = function() {
    return this.getToken(LPMLNParser.STRING, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitTerm(this);
	}
};




LPMLNParser.TermContext = TermContext;

LPMLNParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LPMLNParser.RULE_term);
    try {
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.match(LPMLNParser.VAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(LPMLNParser.CONSTANT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 139;
            this.integer();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 140;
            this.arithmethic_expr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 141;
            this.functions();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 142;
            this.match(LPMLNParser.STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.CONSTANT = function() {
    return this.getToken(LPMLNParser.CONSTANT, 0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(LPMLNParser.LPAREN, 0);
};

AtomContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(LPMLNParser.RPAREN, 0);
};

AtomContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.COMMA);
    } else {
        return this.getToken(LPMLNParser.COMMA, i);
    }
};


AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitAtom(this);
	}
};




LPMLNParser.AtomContext = AtomContext;

LPMLNParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LPMLNParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.match(LPMLNParser.CONSTANT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(LPMLNParser.CONSTANT);
            this.state = 147;
            this.match(LPMLNParser.LPAREN);
            this.state = 148;
            this.term();
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LPMLNParser.COMMA) {
                this.state = 149;
                this.match(LPMLNParser.COMMA);
                this.state = 150;
                this.term();
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 156;
            this.match(LPMLNParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Range_atomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_range_atom;
    return this;
}

Range_atomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_atomContext.prototype.constructor = Range_atomContext;

Range_atomContext.prototype.CONSTANT = function() {
    return this.getToken(LPMLNParser.CONSTANT, 0);
};

Range_atomContext.prototype.LPAREN = function() {
    return this.getToken(LPMLNParser.LPAREN, 0);
};

Range_atomContext.prototype.integer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntegerContext);
    } else {
        return this.getTypedRuleContext(IntegerContext,i);
    }
};

Range_atomContext.prototype.RANGE = function() {
    return this.getToken(LPMLNParser.RANGE, 0);
};

Range_atomContext.prototype.RPAREN = function() {
    return this.getToken(LPMLNParser.RPAREN, 0);
};

Range_atomContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterRange_atom(this);
	}
};

Range_atomContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitRange_atom(this);
	}
};




LPMLNParser.Range_atomContext = Range_atomContext;

LPMLNParser.prototype.range_atom = function() {

    var localctx = new Range_atomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LPMLNParser.RULE_range_atom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(LPMLNParser.CONSTANT);
        this.state = 161;
        this.match(LPMLNParser.LPAREN);
        this.state = 162;
        this.integer();
        this.state = 163;
        this.match(LPMLNParser.RANGE);
        this.state = 164;
        this.integer();
        this.state = 165;
        this.match(LPMLNParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

LiteralContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitLiteral(this);
	}
};




LPMLNParser.LiteralContext = LiteralContext;

LPMLNParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LPMLNParser.RULE_literal);
    try {
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LPMLNParser.CONSTANT:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.atom();
            break;
        case LPMLNParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.match(LPMLNParser.MINUS);
            this.state = 169;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Default_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_default_literal;
    return this;
}

Default_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Default_literalContext.prototype.constructor = Default_literalContext;

Default_literalContext.prototype.NAF_NOT = function() {
    return this.getToken(LPMLNParser.NAF_NOT, 0);
};

Default_literalContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

Default_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterDefault_literal(this);
	}
};

Default_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitDefault_literal(this);
	}
};




LPMLNParser.Default_literalContext = Default_literalContext;

LPMLNParser.prototype.default_literal = function() {

    var localctx = new Default_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LPMLNParser.RULE_default_literal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(LPMLNParser.NAF_NOT);
        this.state = 173;
        this.literal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Extended_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_extended_literal;
    return this;
}

Extended_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Extended_literalContext.prototype.constructor = Extended_literalContext;

Extended_literalContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

Extended_literalContext.prototype.default_literal = function() {
    return this.getTypedRuleContext(Default_literalContext,0);
};

Extended_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterExtended_literal(this);
	}
};

Extended_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitExtended_literal(this);
	}
};




LPMLNParser.Extended_literalContext = Extended_literalContext;

LPMLNParser.prototype.extended_literal = function() {

    var localctx = new Extended_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LPMLNParser.RULE_extended_literal);
    try {
        this.state = 177;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LPMLNParser.CONSTANT:
        case LPMLNParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.literal();
            break;
        case LPMLNParser.NAF_NOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.default_literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Term_tupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_term_tuple;
    return this;
}

Term_tupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Term_tupleContext.prototype.constructor = Term_tupleContext;

Term_tupleContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

Term_tupleContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.COMMA);
    } else {
        return this.getToken(LPMLNParser.COMMA, i);
    }
};


Term_tupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterTerm_tuple(this);
	}
};

Term_tupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitTerm_tuple(this);
	}
};




LPMLNParser.Term_tupleContext = Term_tupleContext;

LPMLNParser.prototype.term_tuple = function() {

    var localctx = new Term_tupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LPMLNParser.RULE_term_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.term();
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.COMMA) {
            this.state = 180;
            this.match(LPMLNParser.COMMA);
            this.state = 181;
            this.term();
            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Literal_tupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_literal_tuple;
    return this;
}

Literal_tupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Literal_tupleContext.prototype.constructor = Literal_tupleContext;

Literal_tupleContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

Literal_tupleContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.COMMA);
    } else {
        return this.getToken(LPMLNParser.COMMA, i);
    }
};


Literal_tupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterLiteral_tuple(this);
	}
};

Literal_tupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitLiteral_tuple(this);
	}
};




LPMLNParser.Literal_tupleContext = Literal_tupleContext;

LPMLNParser.prototype.literal_tuple = function() {

    var localctx = new Literal_tupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LPMLNParser.RULE_literal_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.literal();
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.COMMA) {
            this.state = 188;
            this.match(LPMLNParser.COMMA);
            this.state = 189;
            this.literal();
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Aggregate_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_aggregate_elements;
    return this;
}

Aggregate_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aggregate_elementsContext.prototype.constructor = Aggregate_elementsContext;

Aggregate_elementsContext.prototype.literal_tuple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Literal_tupleContext);
    } else {
        return this.getTypedRuleContext(Literal_tupleContext,i);
    }
};

Aggregate_elementsContext.prototype.term_tuple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Term_tupleContext);
    } else {
        return this.getTypedRuleContext(Term_tupleContext,i);
    }
};

Aggregate_elementsContext.prototype.CONDITION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.CONDITION);
    } else {
        return this.getToken(LPMLNParser.CONDITION, i);
    }
};


Aggregate_elementsContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.SEMICOLON);
    } else {
        return this.getToken(LPMLNParser.SEMICOLON, i);
    }
};


Aggregate_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterAggregate_elements(this);
	}
};

Aggregate_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitAggregate_elements(this);
	}
};




LPMLNParser.Aggregate_elementsContext = Aggregate_elementsContext;

LPMLNParser.prototype.aggregate_elements = function() {

    var localctx = new Aggregate_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LPMLNParser.RULE_aggregate_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 195;
            this.term_tuple();
            this.state = 196;
            this.match(LPMLNParser.CONDITION);

        }
        this.state = 200;
        this.literal_tuple();
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.SEMICOLON) {
            this.state = 201;
            this.match(LPMLNParser.SEMICOLON);
            this.state = 205;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 202;
                this.term_tuple();
                this.state = 203;
                this.match(LPMLNParser.CONDITION);

            }
            this.state = 207;
            this.literal_tuple();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Aggregate_elements_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_aggregate_elements_condition;
    return this;
}

Aggregate_elements_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aggregate_elements_conditionContext.prototype.constructor = Aggregate_elements_conditionContext;

Aggregate_elements_conditionContext.prototype.literal_tuple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Literal_tupleContext);
    } else {
        return this.getTypedRuleContext(Literal_tupleContext,i);
    }
};

Aggregate_elements_conditionContext.prototype.CONDITION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.CONDITION);
    } else {
        return this.getToken(LPMLNParser.CONDITION, i);
    }
};


Aggregate_elements_conditionContext.prototype.term_tuple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Term_tupleContext);
    } else {
        return this.getTypedRuleContext(Term_tupleContext,i);
    }
};

Aggregate_elements_conditionContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.SEMICOLON);
    } else {
        return this.getToken(LPMLNParser.SEMICOLON, i);
    }
};


Aggregate_elements_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterAggregate_elements_condition(this);
	}
};

Aggregate_elements_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitAggregate_elements_condition(this);
	}
};




LPMLNParser.Aggregate_elements_conditionContext = Aggregate_elements_conditionContext;

LPMLNParser.prototype.aggregate_elements_condition = function() {

    var localctx = new Aggregate_elements_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LPMLNParser.RULE_aggregate_elements_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 213;
            this.term_tuple();
            this.state = 214;
            this.match(LPMLNParser.CONDITION);

        }
        this.state = 218;
        this.literal_tuple();
        this.state = 219;
        this.match(LPMLNParser.CONDITION);
        this.state = 220;
        this.literal_tuple();
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.SEMICOLON) {
            this.state = 221;
            this.match(LPMLNParser.SEMICOLON);
            this.state = 225;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 222;
                this.term_tuple();
                this.state = 223;
                this.match(LPMLNParser.CONDITION);

            }
            this.state = 227;
            this.literal_tuple();
            this.state = 228;
            this.match(LPMLNParser.CONDITION);
            this.state = 229;
            this.literal_tuple();
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Body_aggregateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_body_aggregate;
    return this;
}

Body_aggregateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Body_aggregateContext.prototype.constructor = Body_aggregateContext;

Body_aggregateContext.prototype.LCBRACK = function() {
    return this.getToken(LPMLNParser.LCBRACK, 0);
};

Body_aggregateContext.prototype.aggregate_elements = function() {
    return this.getTypedRuleContext(Aggregate_elementsContext,0);
};

Body_aggregateContext.prototype.RCBRACK = function() {
    return this.getToken(LPMLNParser.RCBRACK, 0);
};

Body_aggregateContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

Body_aggregateContext.prototype.AGGREGATE_OP = function() {
    return this.getToken(LPMLNParser.AGGREGATE_OP, 0);
};

Body_aggregateContext.prototype.relation_op = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Relation_opContext);
    } else {
        return this.getTypedRuleContext(Relation_opContext,i);
    }
};

Body_aggregateContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterBody_aggregate(this);
	}
};

Body_aggregateContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitBody_aggregate(this);
	}
};




LPMLNParser.Body_aggregateContext = Body_aggregateContext;

LPMLNParser.prototype.body_aggregate = function() {

    var localctx = new Body_aggregateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LPMLNParser.RULE_body_aggregate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LPMLNParser.STRING) | (1 << LPMLNParser.POSITIVE_INT) | (1 << LPMLNParser.ZERO) | (1 << LPMLNParser.CONSTANT) | (1 << LPMLNParser.VAR) | (1 << LPMLNParser.MINUS) | (1 << LPMLNParser.LPAREN))) !== 0)) {
            this.state = 236;
            this.term();
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LPMLNParser.LESS_THAN - 26)) | (1 << (LPMLNParser.LEQ - 26)) | (1 << (LPMLNParser.GREATER_THAN - 26)) | (1 << (LPMLNParser.GEQ - 26)) | (1 << (LPMLNParser.EQUAL - 26)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 26)) | (1 << (LPMLNParser.NEQ - 26)))) !== 0)) {
                this.state = 237;
                this.relation_op();
            }

        }

        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LPMLNParser.AGGREGATE_OP) {
            this.state = 242;
            this.match(LPMLNParser.AGGREGATE_OP);
        }

        this.state = 245;
        this.match(LPMLNParser.LCBRACK);
        this.state = 246;
        this.aggregate_elements();
        this.state = 247;
        this.match(LPMLNParser.RCBRACK);
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (LPMLNParser.STRING - 2)) | (1 << (LPMLNParser.POSITIVE_INT - 2)) | (1 << (LPMLNParser.ZERO - 2)) | (1 << (LPMLNParser.CONSTANT - 2)) | (1 << (LPMLNParser.VAR - 2)) | (1 << (LPMLNParser.MINUS - 2)) | (1 << (LPMLNParser.LPAREN - 2)) | (1 << (LPMLNParser.LESS_THAN - 2)) | (1 << (LPMLNParser.LEQ - 2)) | (1 << (LPMLNParser.GREATER_THAN - 2)) | (1 << (LPMLNParser.GEQ - 2)) | (1 << (LPMLNParser.EQUAL - 2)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 2)) | (1 << (LPMLNParser.NEQ - 2)))) !== 0)) {
            this.state = 249;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LPMLNParser.LESS_THAN - 26)) | (1 << (LPMLNParser.LEQ - 26)) | (1 << (LPMLNParser.GREATER_THAN - 26)) | (1 << (LPMLNParser.GEQ - 26)) | (1 << (LPMLNParser.EQUAL - 26)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 26)) | (1 << (LPMLNParser.NEQ - 26)))) !== 0)) {
                this.state = 248;
                this.relation_op();
            }

            this.state = 251;
            this.term();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Head_aggregateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_head_aggregate;
    return this;
}

Head_aggregateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Head_aggregateContext.prototype.constructor = Head_aggregateContext;

Head_aggregateContext.prototype.LCBRACK = function() {
    return this.getToken(LPMLNParser.LCBRACK, 0);
};

Head_aggregateContext.prototype.aggregate_elements_condition = function() {
    return this.getTypedRuleContext(Aggregate_elements_conditionContext,0);
};

Head_aggregateContext.prototype.RCBRACK = function() {
    return this.getToken(LPMLNParser.RCBRACK, 0);
};

Head_aggregateContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

Head_aggregateContext.prototype.AGGREGATE_OP = function() {
    return this.getToken(LPMLNParser.AGGREGATE_OP, 0);
};

Head_aggregateContext.prototype.relation_op = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Relation_opContext);
    } else {
        return this.getTypedRuleContext(Relation_opContext,i);
    }
};

Head_aggregateContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterHead_aggregate(this);
	}
};

Head_aggregateContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitHead_aggregate(this);
	}
};




LPMLNParser.Head_aggregateContext = Head_aggregateContext;

LPMLNParser.prototype.head_aggregate = function() {

    var localctx = new Head_aggregateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LPMLNParser.RULE_head_aggregate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LPMLNParser.STRING) | (1 << LPMLNParser.POSITIVE_INT) | (1 << LPMLNParser.ZERO) | (1 << LPMLNParser.CONSTANT) | (1 << LPMLNParser.VAR) | (1 << LPMLNParser.MINUS) | (1 << LPMLNParser.LPAREN))) !== 0)) {
            this.state = 254;
            this.term();
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LPMLNParser.LESS_THAN - 26)) | (1 << (LPMLNParser.LEQ - 26)) | (1 << (LPMLNParser.GREATER_THAN - 26)) | (1 << (LPMLNParser.GEQ - 26)) | (1 << (LPMLNParser.EQUAL - 26)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 26)) | (1 << (LPMLNParser.NEQ - 26)))) !== 0)) {
                this.state = 255;
                this.relation_op();
            }

        }

        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LPMLNParser.AGGREGATE_OP) {
            this.state = 260;
            this.match(LPMLNParser.AGGREGATE_OP);
        }

        this.state = 263;
        this.match(LPMLNParser.LCBRACK);
        this.state = 264;
        this.aggregate_elements_condition();
        this.state = 265;
        this.match(LPMLNParser.RCBRACK);
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (LPMLNParser.STRING - 2)) | (1 << (LPMLNParser.POSITIVE_INT - 2)) | (1 << (LPMLNParser.ZERO - 2)) | (1 << (LPMLNParser.CONSTANT - 2)) | (1 << (LPMLNParser.VAR - 2)) | (1 << (LPMLNParser.MINUS - 2)) | (1 << (LPMLNParser.LPAREN - 2)) | (1 << (LPMLNParser.LESS_THAN - 2)) | (1 << (LPMLNParser.LEQ - 2)) | (1 << (LPMLNParser.GREATER_THAN - 2)) | (1 << (LPMLNParser.GEQ - 2)) | (1 << (LPMLNParser.EQUAL - 2)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 2)) | (1 << (LPMLNParser.NEQ - 2)))) !== 0)) {
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LPMLNParser.LESS_THAN - 26)) | (1 << (LPMLNParser.LEQ - 26)) | (1 << (LPMLNParser.GREATER_THAN - 26)) | (1 << (LPMLNParser.GEQ - 26)) | (1 << (LPMLNParser.EQUAL - 26)) | (1 << (LPMLNParser.DOUBLE_EQUAL - 26)) | (1 << (LPMLNParser.NEQ - 26)))) !== 0)) {
                this.state = 266;
                this.relation_op();
            }

            this.state = 269;
            this.term();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relation_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_relation_expr;
    return this;
}

Relation_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relation_exprContext.prototype.constructor = Relation_exprContext;

Relation_exprContext.prototype.VAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.VAR);
    } else {
        return this.getToken(LPMLNParser.VAR, i);
    }
};


Relation_exprContext.prototype.relation_op = function() {
    return this.getTypedRuleContext(Relation_opContext,0);
};

Relation_exprContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.MINUS);
    } else {
        return this.getToken(LPMLNParser.MINUS, i);
    }
};


Relation_exprContext.prototype.STRING = function() {
    return this.getToken(LPMLNParser.STRING, 0);
};

Relation_exprContext.prototype.arithmethic_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Arithmethic_exprContext);
    } else {
        return this.getTypedRuleContext(Arithmethic_exprContext,i);
    }
};

Relation_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterRelation_expr(this);
	}
};

Relation_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitRelation_expr(this);
	}
};




LPMLNParser.Relation_exprContext = Relation_exprContext;

LPMLNParser.prototype.relation_expr = function() {

    var localctx = new Relation_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LPMLNParser.RULE_relation_expr);
    var _la = 0; // Token type
    try {
        this.state = 301;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LPMLNParser.MINUS) {
                this.state = 272;
                this.match(LPMLNParser.MINUS);
            }

            this.state = 275;
            this.match(LPMLNParser.VAR);
            this.state = 276;
            this.relation_op();
            this.state = 278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LPMLNParser.MINUS) {
                this.state = 277;
                this.match(LPMLNParser.MINUS);
            }

            this.state = 280;
            this.match(LPMLNParser.VAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
            this.match(LPMLNParser.VAR);
            this.state = 283;
            this.relation_op();
            this.state = 284;
            this.match(LPMLNParser.STRING);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 291;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
            switch(la_) {
            case 1:
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LPMLNParser.MINUS) {
                    this.state = 286;
                    this.match(LPMLNParser.MINUS);
                }

                this.state = 289;
                this.match(LPMLNParser.VAR);
                break;

            case 2:
                this.state = 290;
                this.arithmethic_expr();
                break;

            }
            this.state = 293;
            this.relation_op();
            this.state = 299;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
            switch(la_) {
            case 1:
                this.state = 295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LPMLNParser.MINUS) {
                    this.state = 294;
                    this.match(LPMLNParser.MINUS);
                }

                this.state = 297;
                this.match(LPMLNParser.VAR);
                break;

            case 2:
                this.state = 298;
                this.arithmethic_expr();
                break;

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

HeadContext.prototype.DISJUNCTION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.DISJUNCTION);
    } else {
        return this.getToken(LPMLNParser.DISJUNCTION, i);
    }
};


HeadContext.prototype.head_aggregate = function() {
    return this.getTypedRuleContext(Head_aggregateContext,0);
};

HeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitHead(this);
	}
};




LPMLNParser.HeadContext = HeadContext;

LPMLNParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LPMLNParser.RULE_head);
    var _la = 0; // Token type
    try {
        this.state = 312;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 303;
            this.literal();
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LPMLNParser.DISJUNCTION) {
                this.state = 304;
                this.match(LPMLNParser.DISJUNCTION);
                this.state = 305;
                this.literal();
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 311;
            this.head_aggregate();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.extended_literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Extended_literalContext);
    } else {
        return this.getTypedRuleContext(Extended_literalContext,i);
    }
};

BodyContext.prototype.relation_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Relation_exprContext);
    } else {
        return this.getTypedRuleContext(Relation_exprContext,i);
    }
};

BodyContext.prototype.body_aggregate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Body_aggregateContext);
    } else {
        return this.getTypedRuleContext(Body_aggregateContext,i);
    }
};

BodyContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LPMLNParser.COMMA);
    } else {
        return this.getToken(LPMLNParser.COMMA, i);
    }
};


BodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitBody(this);
	}
};




LPMLNParser.BodyContext = BodyContext;

LPMLNParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LPMLNParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.state = 314;
            this.extended_literal();
            break;

        case 2:
            this.state = 315;
            this.relation_expr();
            break;

        case 3:
            this.state = 316;
            this.body_aggregate();
            break;

        }
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LPMLNParser.COMMA) {
            this.state = 319;
            this.match(LPMLNParser.COMMA);
            this.state = 323;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
            switch(la_) {
            case 1:
                this.state = 320;
                this.extended_literal();
                break;

            case 2:
                this.state = 321;
                this.relation_expr();
                break;

            case 3:
                this.state = 322;
                this.body_aggregate();
                break;

            }
            this.state = 329;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_fact;
    return this;
}

FactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactContext.prototype.constructor = FactContext;

FactContext.prototype.FULLSTOP = function() {
    return this.getToken(LPMLNParser.FULLSTOP, 0);
};

FactContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

FactContext.prototype.range_atom = function() {
    return this.getTypedRuleContext(Range_atomContext,0);
};

FactContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterFact(this);
	}
};

FactContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitFact(this);
	}
};




LPMLNParser.FactContext = FactContext;

LPMLNParser.prototype.fact = function() {

    var localctx = new FactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LPMLNParser.RULE_fact);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.state = 330;
            this.head();
            break;

        case 2:
            this.state = 331;
            this.range_atom();
            break;

        }
        this.state = 334;
        this.match(LPMLNParser.FULLSTOP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_constraint;
    return this;
}

ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintContext.prototype.constructor = ConstraintContext;

ConstraintContext.prototype.ASSIGN = function() {
    return this.getToken(LPMLNParser.ASSIGN, 0);
};

ConstraintContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

ConstraintContext.prototype.FULLSTOP = function() {
    return this.getToken(LPMLNParser.FULLSTOP, 0);
};

ConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterConstraint(this);
	}
};

ConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitConstraint(this);
	}
};




LPMLNParser.ConstraintContext = ConstraintContext;

LPMLNParser.prototype.constraint = function() {

    var localctx = new ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LPMLNParser.RULE_constraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(LPMLNParser.ASSIGN);
        this.state = 337;
        this.body();
        this.state = 338;
        this.match(LPMLNParser.FULLSTOP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Full_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_full_rule;
    return this;
}

Full_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Full_ruleContext.prototype.constructor = Full_ruleContext;

Full_ruleContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

Full_ruleContext.prototype.ASSIGN = function() {
    return this.getToken(LPMLNParser.ASSIGN, 0);
};

Full_ruleContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

Full_ruleContext.prototype.FULLSTOP = function() {
    return this.getToken(LPMLNParser.FULLSTOP, 0);
};

Full_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterFull_rule(this);
	}
};

Full_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitFull_rule(this);
	}
};




LPMLNParser.Full_ruleContext = Full_ruleContext;

LPMLNParser.prototype.full_rule = function() {

    var localctx = new Full_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, LPMLNParser.RULE_full_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.head();
        this.state = 341;
        this.match(LPMLNParser.ASSIGN);
        this.state = 342;
        this.body();
        this.state = 343;
        this.match(LPMLNParser.FULLSTOP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Hard_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_hard_rule;
    return this;
}

Hard_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hard_ruleContext.prototype.constructor = Hard_ruleContext;

Hard_ruleContext.prototype.fact = function() {
    return this.getTypedRuleContext(FactContext,0);
};

Hard_ruleContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};

Hard_ruleContext.prototype.full_rule = function() {
    return this.getTypedRuleContext(Full_ruleContext,0);
};

Hard_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterHard_rule(this);
	}
};

Hard_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitHard_rule(this);
	}
};




LPMLNParser.Hard_ruleContext = Hard_ruleContext;

LPMLNParser.prototype.hard_rule = function() {

    var localctx = new Hard_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LPMLNParser.RULE_hard_rule);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 345;
            this.fact();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 346;
            this.constraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 347;
            this.full_rule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Soft_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_soft_rule;
    return this;
}

Soft_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Soft_ruleContext.prototype.constructor = Soft_ruleContext;

Soft_ruleContext.prototype.CONDITION = function() {
    return this.getToken(LPMLNParser.CONDITION, 0);
};

Soft_ruleContext.prototype.hard_rule = function() {
    return this.getTypedRuleContext(Hard_ruleContext,0);
};

Soft_ruleContext.prototype.DECIMAL = function() {
    return this.getToken(LPMLNParser.DECIMAL, 0);
};

Soft_ruleContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

Soft_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterSoft_rule(this);
	}
};

Soft_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitSoft_rule(this);
	}
};




LPMLNParser.Soft_ruleContext = Soft_ruleContext;

LPMLNParser.prototype.soft_rule = function() {

    var localctx = new Soft_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, LPMLNParser.RULE_soft_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LPMLNParser.DECIMAL:
            this.state = 350;
            this.match(LPMLNParser.DECIMAL);
            break;
        case LPMLNParser.POSITIVE_INT:
        case LPMLNParser.ZERO:
        case LPMLNParser.MINUS:
            this.state = 351;
            this.integer();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 354;
        this.match(LPMLNParser.CONDITION);
        this.state = 355;
        this.hard_rule();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Meta_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_meta_rule;
    return this;
}

Meta_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Meta_ruleContext.prototype.constructor = Meta_ruleContext;

Meta_ruleContext.prototype.META_OP = function() {
    return this.getToken(LPMLNParser.META_OP, 0);
};

Meta_ruleContext.prototype.CONSTANT = function() {
    return this.getToken(LPMLNParser.CONSTANT, 0);
};

Meta_ruleContext.prototype.SLASH = function() {
    return this.getToken(LPMLNParser.SLASH, 0);
};

Meta_ruleContext.prototype.natural_number = function() {
    return this.getTypedRuleContext(Natural_numberContext,0);
};

Meta_ruleContext.prototype.FULLSTOP = function() {
    return this.getToken(LPMLNParser.FULLSTOP, 0);
};

Meta_ruleContext.prototype.MINUS = function() {
    return this.getToken(LPMLNParser.MINUS, 0);
};

Meta_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterMeta_rule(this);
	}
};

Meta_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitMeta_rule(this);
	}
};




LPMLNParser.Meta_ruleContext = Meta_ruleContext;

LPMLNParser.prototype.meta_rule = function() {

    var localctx = new Meta_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, LPMLNParser.RULE_meta_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(LPMLNParser.META_OP);
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LPMLNParser.MINUS) {
            this.state = 358;
            this.match(LPMLNParser.MINUS);
        }

        this.state = 361;
        this.match(LPMLNParser.CONSTANT);
        this.state = 362;
        this.match(LPMLNParser.SLASH);
        this.state = 363;
        this.natural_number();
        this.state = 364;
        this.match(LPMLNParser.FULLSTOP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Lpmln_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LPMLNParser.RULE_lpmln_rule;
    return this;
}

Lpmln_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lpmln_ruleContext.prototype.constructor = Lpmln_ruleContext;

Lpmln_ruleContext.prototype.full_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Full_ruleContext);
    } else {
        return this.getTypedRuleContext(Full_ruleContext,i);
    }
};

Lpmln_ruleContext.prototype.hard_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Hard_ruleContext);
    } else {
        return this.getTypedRuleContext(Hard_ruleContext,i);
    }
};

Lpmln_ruleContext.prototype.soft_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Soft_ruleContext);
    } else {
        return this.getTypedRuleContext(Soft_ruleContext,i);
    }
};

Lpmln_ruleContext.prototype.meta_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Meta_ruleContext);
    } else {
        return this.getTypedRuleContext(Meta_ruleContext,i);
    }
};

Lpmln_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.enterLpmln_rule(this);
	}
};

Lpmln_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LPMLNListener ) {
        listener.exitLpmln_rule(this);
	}
};




LPMLNParser.Lpmln_ruleContext = Lpmln_ruleContext;

LPMLNParser.prototype.lpmln_rule = function() {

    var localctx = new Lpmln_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, LPMLNParser.RULE_lpmln_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LPMLNParser.STRING) | (1 << LPMLNParser.POSITIVE_INT) | (1 << LPMLNParser.DECIMAL) | (1 << LPMLNParser.ZERO) | (1 << LPMLNParser.CONSTANT) | (1 << LPMLNParser.VAR) | (1 << LPMLNParser.MINUS) | (1 << LPMLNParser.LPAREN) | (1 << LPMLNParser.LCBRACK) | (1 << LPMLNParser.ASSIGN))) !== 0) || _la===LPMLNParser.AGGREGATE_OP || _la===LPMLNParser.META_OP) {
            this.state = 370;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
            switch(la_) {
            case 1:
                this.state = 366;
                this.full_rule();
                break;

            case 2:
                this.state = 367;
                this.hard_rule();
                break;

            case 3:
                this.state = 368;
                this.soft_rule();
                break;

            case 4:
                this.state = 369;
                this.meta_rule();
                break;

            }
            this.state = 374;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


LPMLNParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.simple_arithmetic_expr2_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LPMLNParser.prototype.simple_arithmetic_expr2_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LPMLNParser = LPMLNParser;
