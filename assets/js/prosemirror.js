(function (prosemirrorView, prosemirrorState, prosemirrorModel, prosemirrorExampleSetup) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var Aacute = "Á";
	var aacute = "á";
	var Abreve = "Ă";
	var abreve = "ă";
	var ac = "∾";
	var acd = "∿";
	var acE = "∾̳";
	var Acirc = "Â";
	var acirc = "â";
	var acute = "´";
	var Acy = "А";
	var acy = "а";
	var AElig = "Æ";
	var aelig = "æ";
	var af = "⁡";
	var Afr = "𝔄";
	var afr = "𝔞";
	var Agrave = "À";
	var agrave = "à";
	var alefsym = "ℵ";
	var aleph = "ℵ";
	var Alpha = "Α";
	var alpha = "α";
	var Amacr = "Ā";
	var amacr = "ā";
	var amalg = "⨿";
	var amp = "&";
	var AMP = "&";
	var andand = "⩕";
	var And = "⩓";
	var and = "∧";
	var andd = "⩜";
	var andslope = "⩘";
	var andv = "⩚";
	var ang = "∠";
	var ange = "⦤";
	var angle = "∠";
	var angmsdaa = "⦨";
	var angmsdab = "⦩";
	var angmsdac = "⦪";
	var angmsdad = "⦫";
	var angmsdae = "⦬";
	var angmsdaf = "⦭";
	var angmsdag = "⦮";
	var angmsdah = "⦯";
	var angmsd = "∡";
	var angrt = "∟";
	var angrtvb = "⊾";
	var angrtvbd = "⦝";
	var angsph = "∢";
	var angst = "Å";
	var angzarr = "⍼";
	var Aogon = "Ą";
	var aogon = "ą";
	var Aopf = "𝔸";
	var aopf = "𝕒";
	var apacir = "⩯";
	var ap = "≈";
	var apE = "⩰";
	var ape = "≊";
	var apid = "≋";
	var apos = "'";
	var ApplyFunction = "⁡";
	var approx = "≈";
	var approxeq = "≊";
	var Aring = "Å";
	var aring = "å";
	var Ascr = "𝒜";
	var ascr = "𝒶";
	var Assign = "≔";
	var ast = "*";
	var asymp = "≈";
	var asympeq = "≍";
	var Atilde = "Ã";
	var atilde = "ã";
	var Auml = "Ä";
	var auml = "ä";
	var awconint = "∳";
	var awint = "⨑";
	var backcong = "≌";
	var backepsilon = "϶";
	var backprime = "‵";
	var backsim = "∽";
	var backsimeq = "⋍";
	var Backslash = "∖";
	var Barv = "⫧";
	var barvee = "⊽";
	var barwed = "⌅";
	var Barwed = "⌆";
	var barwedge = "⌅";
	var bbrk = "⎵";
	var bbrktbrk = "⎶";
	var bcong = "≌";
	var Bcy = "Б";
	var bcy = "б";
	var bdquo = "„";
	var becaus = "∵";
	var because = "∵";
	var Because = "∵";
	var bemptyv = "⦰";
	var bepsi = "϶";
	var bernou = "ℬ";
	var Bernoullis = "ℬ";
	var Beta = "Β";
	var beta = "β";
	var beth = "ℶ";
	var between = "≬";
	var Bfr = "𝔅";
	var bfr = "𝔟";
	var bigcap = "⋂";
	var bigcirc = "◯";
	var bigcup = "⋃";
	var bigodot = "⨀";
	var bigoplus = "⨁";
	var bigotimes = "⨂";
	var bigsqcup = "⨆";
	var bigstar = "★";
	var bigtriangledown = "▽";
	var bigtriangleup = "△";
	var biguplus = "⨄";
	var bigvee = "⋁";
	var bigwedge = "⋀";
	var bkarow = "⤍";
	var blacklozenge = "⧫";
	var blacksquare = "▪";
	var blacktriangle = "▴";
	var blacktriangledown = "▾";
	var blacktriangleleft = "◂";
	var blacktriangleright = "▸";
	var blank = "␣";
	var blk12 = "▒";
	var blk14 = "░";
	var blk34 = "▓";
	var block$1 = "█";
	var bne = "=⃥";
	var bnequiv = "≡⃥";
	var bNot = "⫭";
	var bnot = "⌐";
	var Bopf = "𝔹";
	var bopf = "𝕓";
	var bot = "⊥";
	var bottom = "⊥";
	var bowtie = "⋈";
	var boxbox = "⧉";
	var boxdl = "┐";
	var boxdL = "╕";
	var boxDl = "╖";
	var boxDL = "╗";
	var boxdr = "┌";
	var boxdR = "╒";
	var boxDr = "╓";
	var boxDR = "╔";
	var boxh = "─";
	var boxH = "═";
	var boxhd = "┬";
	var boxHd = "╤";
	var boxhD = "╥";
	var boxHD = "╦";
	var boxhu = "┴";
	var boxHu = "╧";
	var boxhU = "╨";
	var boxHU = "╩";
	var boxminus = "⊟";
	var boxplus = "⊞";
	var boxtimes = "⊠";
	var boxul = "┘";
	var boxuL = "╛";
	var boxUl = "╜";
	var boxUL = "╝";
	var boxur = "└";
	var boxuR = "╘";
	var boxUr = "╙";
	var boxUR = "╚";
	var boxv = "│";
	var boxV = "║";
	var boxvh = "┼";
	var boxvH = "╪";
	var boxVh = "╫";
	var boxVH = "╬";
	var boxvl = "┤";
	var boxvL = "╡";
	var boxVl = "╢";
	var boxVL = "╣";
	var boxvr = "├";
	var boxvR = "╞";
	var boxVr = "╟";
	var boxVR = "╠";
	var bprime = "‵";
	var breve = "˘";
	var Breve = "˘";
	var brvbar = "¦";
	var bscr = "𝒷";
	var Bscr = "ℬ";
	var bsemi = "⁏";
	var bsim = "∽";
	var bsime = "⋍";
	var bsolb = "⧅";
	var bsol = "\\";
	var bsolhsub = "⟈";
	var bull = "•";
	var bullet = "•";
	var bump = "≎";
	var bumpE = "⪮";
	var bumpe = "≏";
	var Bumpeq = "≎";
	var bumpeq = "≏";
	var Cacute = "Ć";
	var cacute = "ć";
	var capand = "⩄";
	var capbrcup = "⩉";
	var capcap = "⩋";
	var cap = "∩";
	var Cap = "⋒";
	var capcup = "⩇";
	var capdot = "⩀";
	var CapitalDifferentialD = "ⅅ";
	var caps = "∩︀";
	var caret = "⁁";
	var caron = "ˇ";
	var Cayleys = "ℭ";
	var ccaps = "⩍";
	var Ccaron = "Č";
	var ccaron = "č";
	var Ccedil = "Ç";
	var ccedil = "ç";
	var Ccirc = "Ĉ";
	var ccirc = "ĉ";
	var Cconint = "∰";
	var ccups = "⩌";
	var ccupssm = "⩐";
	var Cdot = "Ċ";
	var cdot = "ċ";
	var cedil = "¸";
	var Cedilla = "¸";
	var cemptyv = "⦲";
	var cent = "¢";
	var centerdot = "·";
	var CenterDot = "·";
	var cfr = "𝔠";
	var Cfr = "ℭ";
	var CHcy = "Ч";
	var chcy = "ч";
	var check = "✓";
	var checkmark = "✓";
	var Chi = "Χ";
	var chi = "χ";
	var circ = "ˆ";
	var circeq = "≗";
	var circlearrowleft = "↺";
	var circlearrowright = "↻";
	var circledast = "⊛";
	var circledcirc = "⊚";
	var circleddash = "⊝";
	var CircleDot = "⊙";
	var circledR = "®";
	var circledS = "Ⓢ";
	var CircleMinus = "⊖";
	var CirclePlus = "⊕";
	var CircleTimes = "⊗";
	var cir = "○";
	var cirE = "⧃";
	var cire = "≗";
	var cirfnint = "⨐";
	var cirmid = "⫯";
	var cirscir = "⧂";
	var ClockwiseContourIntegral = "∲";
	var CloseCurlyDoubleQuote = "”";
	var CloseCurlyQuote = "’";
	var clubs = "♣";
	var clubsuit = "♣";
	var colon = ":";
	var Colon = "∷";
	var Colone = "⩴";
	var colone = "≔";
	var coloneq = "≔";
	var comma = ",";
	var commat = "@";
	var comp = "∁";
	var compfn = "∘";
	var complement = "∁";
	var complexes = "ℂ";
	var cong = "≅";
	var congdot = "⩭";
	var Congruent = "≡";
	var conint = "∮";
	var Conint = "∯";
	var ContourIntegral = "∮";
	var copf = "𝕔";
	var Copf = "ℂ";
	var coprod = "∐";
	var Coproduct = "∐";
	var copy = "©";
	var COPY = "©";
	var copysr = "℗";
	var CounterClockwiseContourIntegral = "∳";
	var crarr = "↵";
	var cross = "✗";
	var Cross = "⨯";
	var Cscr = "𝒞";
	var cscr = "𝒸";
	var csub = "⫏";
	var csube = "⫑";
	var csup = "⫐";
	var csupe = "⫒";
	var ctdot = "⋯";
	var cudarrl = "⤸";
	var cudarrr = "⤵";
	var cuepr = "⋞";
	var cuesc = "⋟";
	var cularr = "↶";
	var cularrp = "⤽";
	var cupbrcap = "⩈";
	var cupcap = "⩆";
	var CupCap = "≍";
	var cup = "∪";
	var Cup = "⋓";
	var cupcup = "⩊";
	var cupdot = "⊍";
	var cupor = "⩅";
	var cups = "∪︀";
	var curarr = "↷";
	var curarrm = "⤼";
	var curlyeqprec = "⋞";
	var curlyeqsucc = "⋟";
	var curlyvee = "⋎";
	var curlywedge = "⋏";
	var curren = "¤";
	var curvearrowleft = "↶";
	var curvearrowright = "↷";
	var cuvee = "⋎";
	var cuwed = "⋏";
	var cwconint = "∲";
	var cwint = "∱";
	var cylcty = "⌭";
	var dagger = "†";
	var Dagger = "‡";
	var daleth = "ℸ";
	var darr = "↓";
	var Darr = "↡";
	var dArr = "⇓";
	var dash = "‐";
	var Dashv = "⫤";
	var dashv = "⊣";
	var dbkarow = "⤏";
	var dblac = "˝";
	var Dcaron = "Ď";
	var dcaron = "ď";
	var Dcy = "Д";
	var dcy = "д";
	var ddagger = "‡";
	var ddarr = "⇊";
	var DD = "ⅅ";
	var dd = "ⅆ";
	var DDotrahd = "⤑";
	var ddotseq = "⩷";
	var deg = "°";
	var Del = "∇";
	var Delta = "Δ";
	var delta = "δ";
	var demptyv = "⦱";
	var dfisht = "⥿";
	var Dfr = "𝔇";
	var dfr = "𝔡";
	var dHar = "⥥";
	var dharl = "⇃";
	var dharr = "⇂";
	var DiacriticalAcute = "´";
	var DiacriticalDot = "˙";
	var DiacriticalDoubleAcute = "˝";
	var DiacriticalGrave = "`";
	var DiacriticalTilde = "˜";
	var diam = "⋄";
	var diamond = "⋄";
	var Diamond = "⋄";
	var diamondsuit = "♦";
	var diams = "♦";
	var die = "¨";
	var DifferentialD = "ⅆ";
	var digamma = "ϝ";
	var disin = "⋲";
	var div = "÷";
	var divide = "÷";
	var divideontimes = "⋇";
	var divonx = "⋇";
	var DJcy = "Ђ";
	var djcy = "ђ";
	var dlcorn = "⌞";
	var dlcrop = "⌍";
	var dollar = "$";
	var Dopf = "𝔻";
	var dopf = "𝕕";
	var Dot = "¨";
	var dot = "˙";
	var DotDot = "⃜";
	var doteq = "≐";
	var doteqdot = "≑";
	var DotEqual = "≐";
	var dotminus = "∸";
	var dotplus = "∔";
	var dotsquare = "⊡";
	var doublebarwedge = "⌆";
	var DoubleContourIntegral = "∯";
	var DoubleDot = "¨";
	var DoubleDownArrow = "⇓";
	var DoubleLeftArrow = "⇐";
	var DoubleLeftRightArrow = "⇔";
	var DoubleLeftTee = "⫤";
	var DoubleLongLeftArrow = "⟸";
	var DoubleLongLeftRightArrow = "⟺";
	var DoubleLongRightArrow = "⟹";
	var DoubleRightArrow = "⇒";
	var DoubleRightTee = "⊨";
	var DoubleUpArrow = "⇑";
	var DoubleUpDownArrow = "⇕";
	var DoubleVerticalBar = "∥";
	var DownArrowBar = "⤓";
	var downarrow = "↓";
	var DownArrow = "↓";
	var Downarrow = "⇓";
	var DownArrowUpArrow = "⇵";
	var DownBreve = "̑";
	var downdownarrows = "⇊";
	var downharpoonleft = "⇃";
	var downharpoonright = "⇂";
	var DownLeftRightVector = "⥐";
	var DownLeftTeeVector = "⥞";
	var DownLeftVectorBar = "⥖";
	var DownLeftVector = "↽";
	var DownRightTeeVector = "⥟";
	var DownRightVectorBar = "⥗";
	var DownRightVector = "⇁";
	var DownTeeArrow = "↧";
	var DownTee = "⊤";
	var drbkarow = "⤐";
	var drcorn = "⌟";
	var drcrop = "⌌";
	var Dscr = "𝒟";
	var dscr = "𝒹";
	var DScy = "Ѕ";
	var dscy = "ѕ";
	var dsol = "⧶";
	var Dstrok = "Đ";
	var dstrok = "đ";
	var dtdot = "⋱";
	var dtri = "▿";
	var dtrif = "▾";
	var duarr = "⇵";
	var duhar = "⥯";
	var dwangle = "⦦";
	var DZcy = "Џ";
	var dzcy = "џ";
	var dzigrarr = "⟿";
	var Eacute = "É";
	var eacute = "é";
	var easter = "⩮";
	var Ecaron = "Ě";
	var ecaron = "ě";
	var Ecirc = "Ê";
	var ecirc = "ê";
	var ecir = "≖";
	var ecolon = "≕";
	var Ecy = "Э";
	var ecy = "э";
	var eDDot = "⩷";
	var Edot = "Ė";
	var edot = "ė";
	var eDot = "≑";
	var ee = "ⅇ";
	var efDot = "≒";
	var Efr = "𝔈";
	var efr = "𝔢";
	var eg = "⪚";
	var Egrave = "È";
	var egrave = "è";
	var egs = "⪖";
	var egsdot = "⪘";
	var el = "⪙";
	var Element = "∈";
	var elinters = "⏧";
	var ell = "ℓ";
	var els = "⪕";
	var elsdot = "⪗";
	var Emacr = "Ē";
	var emacr = "ē";
	var empty = "∅";
	var emptyset = "∅";
	var EmptySmallSquare = "◻";
	var emptyv = "∅";
	var EmptyVerySmallSquare = "▫";
	var emsp13 = " ";
	var emsp14 = " ";
	var emsp = " ";
	var ENG = "Ŋ";
	var eng = "ŋ";
	var ensp = " ";
	var Eogon = "Ę";
	var eogon = "ę";
	var Eopf = "𝔼";
	var eopf = "𝕖";
	var epar = "⋕";
	var eparsl = "⧣";
	var eplus = "⩱";
	var epsi = "ε";
	var Epsilon = "Ε";
	var epsilon = "ε";
	var epsiv = "ϵ";
	var eqcirc = "≖";
	var eqcolon = "≕";
	var eqsim = "≂";
	var eqslantgtr = "⪖";
	var eqslantless = "⪕";
	var Equal = "⩵";
	var equals = "=";
	var EqualTilde = "≂";
	var equest = "≟";
	var Equilibrium = "⇌";
	var equiv = "≡";
	var equivDD = "⩸";
	var eqvparsl = "⧥";
	var erarr = "⥱";
	var erDot = "≓";
	var escr = "ℯ";
	var Escr = "ℰ";
	var esdot = "≐";
	var Esim = "⩳";
	var esim = "≂";
	var Eta = "Η";
	var eta = "η";
	var ETH = "Ð";
	var eth = "ð";
	var Euml = "Ë";
	var euml = "ë";
	var euro = "€";
	var excl = "!";
	var exist = "∃";
	var Exists = "∃";
	var expectation = "ℰ";
	var exponentiale = "ⅇ";
	var ExponentialE = "ⅇ";
	var fallingdotseq = "≒";
	var Fcy = "Ф";
	var fcy = "ф";
	var female = "♀";
	var ffilig = "ﬃ";
	var fflig = "ﬀ";
	var ffllig = "ﬄ";
	var Ffr = "𝔉";
	var ffr = "𝔣";
	var filig = "ﬁ";
	var FilledSmallSquare = "◼";
	var FilledVerySmallSquare = "▪";
	var fjlig = "fj";
	var flat = "♭";
	var fllig = "ﬂ";
	var fltns = "▱";
	var fnof = "ƒ";
	var Fopf = "𝔽";
	var fopf = "𝕗";
	var forall = "∀";
	var ForAll = "∀";
	var fork = "⋔";
	var forkv = "⫙";
	var Fouriertrf = "ℱ";
	var fpartint = "⨍";
	var frac12 = "½";
	var frac13 = "⅓";
	var frac14 = "¼";
	var frac15 = "⅕";
	var frac16 = "⅙";
	var frac18 = "⅛";
	var frac23 = "⅔";
	var frac25 = "⅖";
	var frac34 = "¾";
	var frac35 = "⅗";
	var frac38 = "⅜";
	var frac45 = "⅘";
	var frac56 = "⅚";
	var frac58 = "⅝";
	var frac78 = "⅞";
	var frasl = "⁄";
	var frown = "⌢";
	var fscr = "𝒻";
	var Fscr = "ℱ";
	var gacute = "ǵ";
	var Gamma = "Γ";
	var gamma = "γ";
	var Gammad = "Ϝ";
	var gammad = "ϝ";
	var gap = "⪆";
	var Gbreve = "Ğ";
	var gbreve = "ğ";
	var Gcedil = "Ģ";
	var Gcirc = "Ĝ";
	var gcirc = "ĝ";
	var Gcy = "Г";
	var gcy = "г";
	var Gdot = "Ġ";
	var gdot = "ġ";
	var ge = "≥";
	var gE = "≧";
	var gEl = "⪌";
	var gel = "⋛";
	var geq = "≥";
	var geqq = "≧";
	var geqslant = "⩾";
	var gescc = "⪩";
	var ges = "⩾";
	var gesdot = "⪀";
	var gesdoto = "⪂";
	var gesdotol = "⪄";
	var gesl = "⋛︀";
	var gesles = "⪔";
	var Gfr = "𝔊";
	var gfr = "𝔤";
	var gg = "≫";
	var Gg = "⋙";
	var ggg = "⋙";
	var gimel = "ℷ";
	var GJcy = "Ѓ";
	var gjcy = "ѓ";
	var gla = "⪥";
	var gl = "≷";
	var glE = "⪒";
	var glj = "⪤";
	var gnap = "⪊";
	var gnapprox = "⪊";
	var gne = "⪈";
	var gnE = "≩";
	var gneq = "⪈";
	var gneqq = "≩";
	var gnsim = "⋧";
	var Gopf = "𝔾";
	var gopf = "𝕘";
	var grave = "`";
	var GreaterEqual = "≥";
	var GreaterEqualLess = "⋛";
	var GreaterFullEqual = "≧";
	var GreaterGreater = "⪢";
	var GreaterLess = "≷";
	var GreaterSlantEqual = "⩾";
	var GreaterTilde = "≳";
	var Gscr = "𝒢";
	var gscr = "ℊ";
	var gsim = "≳";
	var gsime = "⪎";
	var gsiml = "⪐";
	var gtcc = "⪧";
	var gtcir = "⩺";
	var gt = ">";
	var GT = ">";
	var Gt = "≫";
	var gtdot = "⋗";
	var gtlPar = "⦕";
	var gtquest = "⩼";
	var gtrapprox = "⪆";
	var gtrarr = "⥸";
	var gtrdot = "⋗";
	var gtreqless = "⋛";
	var gtreqqless = "⪌";
	var gtrless = "≷";
	var gtrsim = "≳";
	var gvertneqq = "≩︀";
	var gvnE = "≩︀";
	var Hacek = "ˇ";
	var hairsp = " ";
	var half = "½";
	var hamilt = "ℋ";
	var HARDcy = "Ъ";
	var hardcy = "ъ";
	var harrcir = "⥈";
	var harr = "↔";
	var hArr = "⇔";
	var harrw = "↭";
	var Hat = "^";
	var hbar = "ℏ";
	var Hcirc = "Ĥ";
	var hcirc = "ĥ";
	var hearts = "♥";
	var heartsuit = "♥";
	var hellip = "…";
	var hercon = "⊹";
	var hfr = "𝔥";
	var Hfr = "ℌ";
	var HilbertSpace = "ℋ";
	var hksearow = "⤥";
	var hkswarow = "⤦";
	var hoarr = "⇿";
	var homtht = "∻";
	var hookleftarrow = "↩";
	var hookrightarrow = "↪";
	var hopf = "𝕙";
	var Hopf = "ℍ";
	var horbar = "―";
	var HorizontalLine = "─";
	var hscr = "𝒽";
	var Hscr = "ℋ";
	var hslash = "ℏ";
	var Hstrok = "Ħ";
	var hstrok = "ħ";
	var HumpDownHump = "≎";
	var HumpEqual = "≏";
	var hybull = "⁃";
	var hyphen = "‐";
	var Iacute = "Í";
	var iacute = "í";
	var ic = "⁣";
	var Icirc = "Î";
	var icirc = "î";
	var Icy = "И";
	var icy = "и";
	var Idot = "İ";
	var IEcy = "Е";
	var iecy = "е";
	var iexcl = "¡";
	var iff = "⇔";
	var ifr = "𝔦";
	var Ifr = "ℑ";
	var Igrave = "Ì";
	var igrave = "ì";
	var ii = "ⅈ";
	var iiiint = "⨌";
	var iiint = "∭";
	var iinfin = "⧜";
	var iiota = "℩";
	var IJlig = "Ĳ";
	var ijlig = "ĳ";
	var Imacr = "Ī";
	var imacr = "ī";
	var image$1 = "ℑ";
	var ImaginaryI = "ⅈ";
	var imagline = "ℐ";
	var imagpart = "ℑ";
	var imath = "ı";
	var Im = "ℑ";
	var imof = "⊷";
	var imped = "Ƶ";
	var Implies = "⇒";
	var incare = "℅";
	var infin = "∞";
	var infintie = "⧝";
	var inodot = "ı";
	var intcal = "⊺";
	var int = "∫";
	var Int = "∬";
	var integers = "ℤ";
	var Integral = "∫";
	var intercal = "⊺";
	var Intersection = "⋂";
	var intlarhk = "⨗";
	var intprod = "⨼";
	var InvisibleComma = "⁣";
	var InvisibleTimes = "⁢";
	var IOcy = "Ё";
	var iocy = "ё";
	var Iogon = "Į";
	var iogon = "į";
	var Iopf = "𝕀";
	var iopf = "𝕚";
	var Iota = "Ι";
	var iota = "ι";
	var iprod = "⨼";
	var iquest = "¿";
	var iscr = "𝒾";
	var Iscr = "ℐ";
	var isin = "∈";
	var isindot = "⋵";
	var isinE = "⋹";
	var isins = "⋴";
	var isinsv = "⋳";
	var isinv = "∈";
	var it = "⁢";
	var Itilde = "Ĩ";
	var itilde = "ĩ";
	var Iukcy = "І";
	var iukcy = "і";
	var Iuml = "Ï";
	var iuml = "ï";
	var Jcirc = "Ĵ";
	var jcirc = "ĵ";
	var Jcy = "Й";
	var jcy = "й";
	var Jfr = "𝔍";
	var jfr = "𝔧";
	var jmath = "ȷ";
	var Jopf = "𝕁";
	var jopf = "𝕛";
	var Jscr = "𝒥";
	var jscr = "𝒿";
	var Jsercy = "Ј";
	var jsercy = "ј";
	var Jukcy = "Є";
	var jukcy = "є";
	var Kappa = "Κ";
	var kappa = "κ";
	var kappav = "ϰ";
	var Kcedil = "Ķ";
	var kcedil = "ķ";
	var Kcy = "К";
	var kcy = "к";
	var Kfr = "𝔎";
	var kfr = "𝔨";
	var kgreen = "ĸ";
	var KHcy = "Х";
	var khcy = "х";
	var KJcy = "Ќ";
	var kjcy = "ќ";
	var Kopf = "𝕂";
	var kopf = "𝕜";
	var Kscr = "𝒦";
	var kscr = "𝓀";
	var lAarr = "⇚";
	var Lacute = "Ĺ";
	var lacute = "ĺ";
	var laemptyv = "⦴";
	var lagran = "ℒ";
	var Lambda = "Λ";
	var lambda = "λ";
	var lang = "⟨";
	var Lang = "⟪";
	var langd = "⦑";
	var langle = "⟨";
	var lap = "⪅";
	var Laplacetrf = "ℒ";
	var laquo = "«";
	var larrb = "⇤";
	var larrbfs = "⤟";
	var larr = "←";
	var Larr = "↞";
	var lArr = "⇐";
	var larrfs = "⤝";
	var larrhk = "↩";
	var larrlp = "↫";
	var larrpl = "⤹";
	var larrsim = "⥳";
	var larrtl = "↢";
	var latail = "⤙";
	var lAtail = "⤛";
	var lat = "⪫";
	var late = "⪭";
	var lates = "⪭︀";
	var lbarr = "⤌";
	var lBarr = "⤎";
	var lbbrk = "❲";
	var lbrace = "{";
	var lbrack = "[";
	var lbrke = "⦋";
	var lbrksld = "⦏";
	var lbrkslu = "⦍";
	var Lcaron = "Ľ";
	var lcaron = "ľ";
	var Lcedil = "Ļ";
	var lcedil = "ļ";
	var lceil = "⌈";
	var lcub = "{";
	var Lcy = "Л";
	var lcy = "л";
	var ldca = "⤶";
	var ldquo = "“";
	var ldquor = "„";
	var ldrdhar = "⥧";
	var ldrushar = "⥋";
	var ldsh = "↲";
	var le = "≤";
	var lE = "≦";
	var LeftAngleBracket = "⟨";
	var LeftArrowBar = "⇤";
	var leftarrow = "←";
	var LeftArrow = "←";
	var Leftarrow = "⇐";
	var LeftArrowRightArrow = "⇆";
	var leftarrowtail = "↢";
	var LeftCeiling = "⌈";
	var LeftDoubleBracket = "⟦";
	var LeftDownTeeVector = "⥡";
	var LeftDownVectorBar = "⥙";
	var LeftDownVector = "⇃";
	var LeftFloor = "⌊";
	var leftharpoondown = "↽";
	var leftharpoonup = "↼";
	var leftleftarrows = "⇇";
	var leftrightarrow = "↔";
	var LeftRightArrow = "↔";
	var Leftrightarrow = "⇔";
	var leftrightarrows = "⇆";
	var leftrightharpoons = "⇋";
	var leftrightsquigarrow = "↭";
	var LeftRightVector = "⥎";
	var LeftTeeArrow = "↤";
	var LeftTee = "⊣";
	var LeftTeeVector = "⥚";
	var leftthreetimes = "⋋";
	var LeftTriangleBar = "⧏";
	var LeftTriangle = "⊲";
	var LeftTriangleEqual = "⊴";
	var LeftUpDownVector = "⥑";
	var LeftUpTeeVector = "⥠";
	var LeftUpVectorBar = "⥘";
	var LeftUpVector = "↿";
	var LeftVectorBar = "⥒";
	var LeftVector = "↼";
	var lEg = "⪋";
	var leg = "⋚";
	var leq = "≤";
	var leqq = "≦";
	var leqslant = "⩽";
	var lescc = "⪨";
	var les = "⩽";
	var lesdot = "⩿";
	var lesdoto = "⪁";
	var lesdotor = "⪃";
	var lesg = "⋚︀";
	var lesges = "⪓";
	var lessapprox = "⪅";
	var lessdot = "⋖";
	var lesseqgtr = "⋚";
	var lesseqqgtr = "⪋";
	var LessEqualGreater = "⋚";
	var LessFullEqual = "≦";
	var LessGreater = "≶";
	var lessgtr = "≶";
	var LessLess = "⪡";
	var lesssim = "≲";
	var LessSlantEqual = "⩽";
	var LessTilde = "≲";
	var lfisht = "⥼";
	var lfloor = "⌊";
	var Lfr = "𝔏";
	var lfr = "𝔩";
	var lg = "≶";
	var lgE = "⪑";
	var lHar = "⥢";
	var lhard = "↽";
	var lharu = "↼";
	var lharul = "⥪";
	var lhblk = "▄";
	var LJcy = "Љ";
	var ljcy = "љ";
	var llarr = "⇇";
	var ll = "≪";
	var Ll = "⋘";
	var llcorner = "⌞";
	var Lleftarrow = "⇚";
	var llhard = "⥫";
	var lltri = "◺";
	var Lmidot = "Ŀ";
	var lmidot = "ŀ";
	var lmoustache = "⎰";
	var lmoust = "⎰";
	var lnap = "⪉";
	var lnapprox = "⪉";
	var lne = "⪇";
	var lnE = "≨";
	var lneq = "⪇";
	var lneqq = "≨";
	var lnsim = "⋦";
	var loang = "⟬";
	var loarr = "⇽";
	var lobrk = "⟦";
	var longleftarrow = "⟵";
	var LongLeftArrow = "⟵";
	var Longleftarrow = "⟸";
	var longleftrightarrow = "⟷";
	var LongLeftRightArrow = "⟷";
	var Longleftrightarrow = "⟺";
	var longmapsto = "⟼";
	var longrightarrow = "⟶";
	var LongRightArrow = "⟶";
	var Longrightarrow = "⟹";
	var looparrowleft = "↫";
	var looparrowright = "↬";
	var lopar = "⦅";
	var Lopf = "𝕃";
	var lopf = "𝕝";
	var loplus = "⨭";
	var lotimes = "⨴";
	var lowast = "∗";
	var lowbar = "_";
	var LowerLeftArrow = "↙";
	var LowerRightArrow = "↘";
	var loz = "◊";
	var lozenge = "◊";
	var lozf = "⧫";
	var lpar = "(";
	var lparlt = "⦓";
	var lrarr = "⇆";
	var lrcorner = "⌟";
	var lrhar = "⇋";
	var lrhard = "⥭";
	var lrm = "‎";
	var lrtri = "⊿";
	var lsaquo = "‹";
	var lscr = "𝓁";
	var Lscr = "ℒ";
	var lsh = "↰";
	var Lsh = "↰";
	var lsim = "≲";
	var lsime = "⪍";
	var lsimg = "⪏";
	var lsqb = "[";
	var lsquo = "‘";
	var lsquor = "‚";
	var Lstrok = "Ł";
	var lstrok = "ł";
	var ltcc = "⪦";
	var ltcir = "⩹";
	var lt = "<";
	var LT = "<";
	var Lt = "≪";
	var ltdot = "⋖";
	var lthree = "⋋";
	var ltimes = "⋉";
	var ltlarr = "⥶";
	var ltquest = "⩻";
	var ltri = "◃";
	var ltrie = "⊴";
	var ltrif = "◂";
	var ltrPar = "⦖";
	var lurdshar = "⥊";
	var luruhar = "⥦";
	var lvertneqq = "≨︀";
	var lvnE = "≨︀";
	var macr = "¯";
	var male = "♂";
	var malt = "✠";
	var maltese = "✠";
	var map = "↦";
	var mapsto = "↦";
	var mapstodown = "↧";
	var mapstoleft = "↤";
	var mapstoup = "↥";
	var marker = "▮";
	var mcomma = "⨩";
	var Mcy = "М";
	var mcy = "м";
	var mdash = "—";
	var mDDot = "∺";
	var measuredangle = "∡";
	var MediumSpace = " ";
	var Mellintrf = "ℳ";
	var Mfr = "𝔐";
	var mfr = "𝔪";
	var mho = "℧";
	var micro = "µ";
	var midast = "*";
	var midcir = "⫰";
	var mid = "∣";
	var middot = "·";
	var minusb = "⊟";
	var minus = "−";
	var minusd = "∸";
	var minusdu = "⨪";
	var MinusPlus = "∓";
	var mlcp = "⫛";
	var mldr = "…";
	var mnplus = "∓";
	var models = "⊧";
	var Mopf = "𝕄";
	var mopf = "𝕞";
	var mp = "∓";
	var mscr = "𝓂";
	var Mscr = "ℳ";
	var mstpos = "∾";
	var Mu = "Μ";
	var mu = "μ";
	var multimap = "⊸";
	var mumap = "⊸";
	var nabla = "∇";
	var Nacute = "Ń";
	var nacute = "ń";
	var nang = "∠⃒";
	var nap = "≉";
	var napE = "⩰̸";
	var napid = "≋̸";
	var napos = "ŉ";
	var napprox = "≉";
	var natural = "♮";
	var naturals = "ℕ";
	var natur = "♮";
	var nbsp = " ";
	var nbump = "≎̸";
	var nbumpe = "≏̸";
	var ncap = "⩃";
	var Ncaron = "Ň";
	var ncaron = "ň";
	var Ncedil = "Ņ";
	var ncedil = "ņ";
	var ncong = "≇";
	var ncongdot = "⩭̸";
	var ncup = "⩂";
	var Ncy = "Н";
	var ncy = "н";
	var ndash = "–";
	var nearhk = "⤤";
	var nearr = "↗";
	var neArr = "⇗";
	var nearrow = "↗";
	var ne = "≠";
	var nedot = "≐̸";
	var NegativeMediumSpace = "​";
	var NegativeThickSpace = "​";
	var NegativeThinSpace = "​";
	var NegativeVeryThinSpace = "​";
	var nequiv = "≢";
	var nesear = "⤨";
	var nesim = "≂̸";
	var NestedGreaterGreater = "≫";
	var NestedLessLess = "≪";
	var NewLine = "\n";
	var nexist = "∄";
	var nexists = "∄";
	var Nfr = "𝔑";
	var nfr = "𝔫";
	var ngE = "≧̸";
	var nge = "≱";
	var ngeq = "≱";
	var ngeqq = "≧̸";
	var ngeqslant = "⩾̸";
	var nges = "⩾̸";
	var nGg = "⋙̸";
	var ngsim = "≵";
	var nGt = "≫⃒";
	var ngt = "≯";
	var ngtr = "≯";
	var nGtv = "≫̸";
	var nharr = "↮";
	var nhArr = "⇎";
	var nhpar = "⫲";
	var ni = "∋";
	var nis = "⋼";
	var nisd = "⋺";
	var niv = "∋";
	var NJcy = "Њ";
	var njcy = "њ";
	var nlarr = "↚";
	var nlArr = "⇍";
	var nldr = "‥";
	var nlE = "≦̸";
	var nle = "≰";
	var nleftarrow = "↚";
	var nLeftarrow = "⇍";
	var nleftrightarrow = "↮";
	var nLeftrightarrow = "⇎";
	var nleq = "≰";
	var nleqq = "≦̸";
	var nleqslant = "⩽̸";
	var nles = "⩽̸";
	var nless = "≮";
	var nLl = "⋘̸";
	var nlsim = "≴";
	var nLt = "≪⃒";
	var nlt = "≮";
	var nltri = "⋪";
	var nltrie = "⋬";
	var nLtv = "≪̸";
	var nmid = "∤";
	var NoBreak = "⁠";
	var NonBreakingSpace = " ";
	var nopf = "𝕟";
	var Nopf = "ℕ";
	var Not = "⫬";
	var not = "¬";
	var NotCongruent = "≢";
	var NotCupCap = "≭";
	var NotDoubleVerticalBar = "∦";
	var NotElement = "∉";
	var NotEqual = "≠";
	var NotEqualTilde = "≂̸";
	var NotExists = "∄";
	var NotGreater = "≯";
	var NotGreaterEqual = "≱";
	var NotGreaterFullEqual = "≧̸";
	var NotGreaterGreater = "≫̸";
	var NotGreaterLess = "≹";
	var NotGreaterSlantEqual = "⩾̸";
	var NotGreaterTilde = "≵";
	var NotHumpDownHump = "≎̸";
	var NotHumpEqual = "≏̸";
	var notin = "∉";
	var notindot = "⋵̸";
	var notinE = "⋹̸";
	var notinva = "∉";
	var notinvb = "⋷";
	var notinvc = "⋶";
	var NotLeftTriangleBar = "⧏̸";
	var NotLeftTriangle = "⋪";
	var NotLeftTriangleEqual = "⋬";
	var NotLess = "≮";
	var NotLessEqual = "≰";
	var NotLessGreater = "≸";
	var NotLessLess = "≪̸";
	var NotLessSlantEqual = "⩽̸";
	var NotLessTilde = "≴";
	var NotNestedGreaterGreater = "⪢̸";
	var NotNestedLessLess = "⪡̸";
	var notni = "∌";
	var notniva = "∌";
	var notnivb = "⋾";
	var notnivc = "⋽";
	var NotPrecedes = "⊀";
	var NotPrecedesEqual = "⪯̸";
	var NotPrecedesSlantEqual = "⋠";
	var NotReverseElement = "∌";
	var NotRightTriangleBar = "⧐̸";
	var NotRightTriangle = "⋫";
	var NotRightTriangleEqual = "⋭";
	var NotSquareSubset = "⊏̸";
	var NotSquareSubsetEqual = "⋢";
	var NotSquareSuperset = "⊐̸";
	var NotSquareSupersetEqual = "⋣";
	var NotSubset = "⊂⃒";
	var NotSubsetEqual = "⊈";
	var NotSucceeds = "⊁";
	var NotSucceedsEqual = "⪰̸";
	var NotSucceedsSlantEqual = "⋡";
	var NotSucceedsTilde = "≿̸";
	var NotSuperset = "⊃⃒";
	var NotSupersetEqual = "⊉";
	var NotTilde = "≁";
	var NotTildeEqual = "≄";
	var NotTildeFullEqual = "≇";
	var NotTildeTilde = "≉";
	var NotVerticalBar = "∤";
	var nparallel = "∦";
	var npar = "∦";
	var nparsl = "⫽⃥";
	var npart = "∂̸";
	var npolint = "⨔";
	var npr = "⊀";
	var nprcue = "⋠";
	var nprec = "⊀";
	var npreceq = "⪯̸";
	var npre = "⪯̸";
	var nrarrc = "⤳̸";
	var nrarr = "↛";
	var nrArr = "⇏";
	var nrarrw = "↝̸";
	var nrightarrow = "↛";
	var nRightarrow = "⇏";
	var nrtri = "⋫";
	var nrtrie = "⋭";
	var nsc = "⊁";
	var nsccue = "⋡";
	var nsce = "⪰̸";
	var Nscr = "𝒩";
	var nscr = "𝓃";
	var nshortmid = "∤";
	var nshortparallel = "∦";
	var nsim = "≁";
	var nsime = "≄";
	var nsimeq = "≄";
	var nsmid = "∤";
	var nspar = "∦";
	var nsqsube = "⋢";
	var nsqsupe = "⋣";
	var nsub = "⊄";
	var nsubE = "⫅̸";
	var nsube = "⊈";
	var nsubset = "⊂⃒";
	var nsubseteq = "⊈";
	var nsubseteqq = "⫅̸";
	var nsucc = "⊁";
	var nsucceq = "⪰̸";
	var nsup = "⊅";
	var nsupE = "⫆̸";
	var nsupe = "⊉";
	var nsupset = "⊃⃒";
	var nsupseteq = "⊉";
	var nsupseteqq = "⫆̸";
	var ntgl = "≹";
	var Ntilde = "Ñ";
	var ntilde = "ñ";
	var ntlg = "≸";
	var ntriangleleft = "⋪";
	var ntrianglelefteq = "⋬";
	var ntriangleright = "⋫";
	var ntrianglerighteq = "⋭";
	var Nu = "Ν";
	var nu = "ν";
	var num = "#";
	var numero = "№";
	var numsp = " ";
	var nvap = "≍⃒";
	var nvdash = "⊬";
	var nvDash = "⊭";
	var nVdash = "⊮";
	var nVDash = "⊯";
	var nvge = "≥⃒";
	var nvgt = ">⃒";
	var nvHarr = "⤄";
	var nvinfin = "⧞";
	var nvlArr = "⤂";
	var nvle = "≤⃒";
	var nvlt = "<⃒";
	var nvltrie = "⊴⃒";
	var nvrArr = "⤃";
	var nvrtrie = "⊵⃒";
	var nvsim = "∼⃒";
	var nwarhk = "⤣";
	var nwarr = "↖";
	var nwArr = "⇖";
	var nwarrow = "↖";
	var nwnear = "⤧";
	var Oacute = "Ó";
	var oacute = "ó";
	var oast = "⊛";
	var Ocirc = "Ô";
	var ocirc = "ô";
	var ocir = "⊚";
	var Ocy = "О";
	var ocy = "о";
	var odash = "⊝";
	var Odblac = "Ő";
	var odblac = "ő";
	var odiv = "⨸";
	var odot = "⊙";
	var odsold = "⦼";
	var OElig = "Œ";
	var oelig = "œ";
	var ofcir = "⦿";
	var Ofr = "𝔒";
	var ofr = "𝔬";
	var ogon = "˛";
	var Ograve = "Ò";
	var ograve = "ò";
	var ogt = "⧁";
	var ohbar = "⦵";
	var ohm = "Ω";
	var oint = "∮";
	var olarr = "↺";
	var olcir = "⦾";
	var olcross = "⦻";
	var oline = "‾";
	var olt = "⧀";
	var Omacr = "Ō";
	var omacr = "ō";
	var Omega = "Ω";
	var omega = "ω";
	var Omicron = "Ο";
	var omicron = "ο";
	var omid = "⦶";
	var ominus = "⊖";
	var Oopf = "𝕆";
	var oopf = "𝕠";
	var opar = "⦷";
	var OpenCurlyDoubleQuote = "“";
	var OpenCurlyQuote = "‘";
	var operp = "⦹";
	var oplus = "⊕";
	var orarr = "↻";
	var Or = "⩔";
	var or = "∨";
	var ord = "⩝";
	var order = "ℴ";
	var orderof = "ℴ";
	var ordf = "ª";
	var ordm = "º";
	var origof = "⊶";
	var oror = "⩖";
	var orslope = "⩗";
	var orv = "⩛";
	var oS = "Ⓢ";
	var Oscr = "𝒪";
	var oscr = "ℴ";
	var Oslash = "Ø";
	var oslash = "ø";
	var osol = "⊘";
	var Otilde = "Õ";
	var otilde = "õ";
	var otimesas = "⨶";
	var Otimes = "⨷";
	var otimes = "⊗";
	var Ouml = "Ö";
	var ouml = "ö";
	var ovbar = "⌽";
	var OverBar = "‾";
	var OverBrace = "⏞";
	var OverBracket = "⎴";
	var OverParenthesis = "⏜";
	var para = "¶";
	var parallel = "∥";
	var par = "∥";
	var parsim = "⫳";
	var parsl = "⫽";
	var part = "∂";
	var PartialD = "∂";
	var Pcy = "П";
	var pcy = "п";
	var percnt = "%";
	var period = ".";
	var permil = "‰";
	var perp = "⊥";
	var pertenk = "‱";
	var Pfr = "𝔓";
	var pfr = "𝔭";
	var Phi = "Φ";
	var phi = "φ";
	var phiv = "ϕ";
	var phmmat = "ℳ";
	var phone = "☎";
	var Pi = "Π";
	var pi = "π";
	var pitchfork = "⋔";
	var piv = "ϖ";
	var planck = "ℏ";
	var planckh = "ℎ";
	var plankv = "ℏ";
	var plusacir = "⨣";
	var plusb = "⊞";
	var pluscir = "⨢";
	var plus = "+";
	var plusdo = "∔";
	var plusdu = "⨥";
	var pluse = "⩲";
	var PlusMinus = "±";
	var plusmn = "±";
	var plussim = "⨦";
	var plustwo = "⨧";
	var pm = "±";
	var Poincareplane = "ℌ";
	var pointint = "⨕";
	var popf = "𝕡";
	var Popf = "ℙ";
	var pound = "£";
	var prap = "⪷";
	var Pr = "⪻";
	var pr = "≺";
	var prcue = "≼";
	var precapprox = "⪷";
	var prec = "≺";
	var preccurlyeq = "≼";
	var Precedes = "≺";
	var PrecedesEqual = "⪯";
	var PrecedesSlantEqual = "≼";
	var PrecedesTilde = "≾";
	var preceq = "⪯";
	var precnapprox = "⪹";
	var precneqq = "⪵";
	var precnsim = "⋨";
	var pre = "⪯";
	var prE = "⪳";
	var precsim = "≾";
	var prime = "′";
	var Prime = "″";
	var primes = "ℙ";
	var prnap = "⪹";
	var prnE = "⪵";
	var prnsim = "⋨";
	var prod = "∏";
	var Product = "∏";
	var profalar = "⌮";
	var profline = "⌒";
	var profsurf = "⌓";
	var prop = "∝";
	var Proportional = "∝";
	var Proportion = "∷";
	var propto = "∝";
	var prsim = "≾";
	var prurel = "⊰";
	var Pscr = "𝒫";
	var pscr = "𝓅";
	var Psi = "Ψ";
	var psi = "ψ";
	var puncsp = " ";
	var Qfr = "𝔔";
	var qfr = "𝔮";
	var qint = "⨌";
	var qopf = "𝕢";
	var Qopf = "ℚ";
	var qprime = "⁗";
	var Qscr = "𝒬";
	var qscr = "𝓆";
	var quaternions = "ℍ";
	var quatint = "⨖";
	var quest = "?";
	var questeq = "≟";
	var quot = "\"";
	var QUOT = "\"";
	var rAarr = "⇛";
	var race = "∽̱";
	var Racute = "Ŕ";
	var racute = "ŕ";
	var radic = "√";
	var raemptyv = "⦳";
	var rang = "⟩";
	var Rang = "⟫";
	var rangd = "⦒";
	var range = "⦥";
	var rangle = "⟩";
	var raquo = "»";
	var rarrap = "⥵";
	var rarrb = "⇥";
	var rarrbfs = "⤠";
	var rarrc = "⤳";
	var rarr = "→";
	var Rarr = "↠";
	var rArr = "⇒";
	var rarrfs = "⤞";
	var rarrhk = "↪";
	var rarrlp = "↬";
	var rarrpl = "⥅";
	var rarrsim = "⥴";
	var Rarrtl = "⤖";
	var rarrtl = "↣";
	var rarrw = "↝";
	var ratail = "⤚";
	var rAtail = "⤜";
	var ratio = "∶";
	var rationals = "ℚ";
	var rbarr = "⤍";
	var rBarr = "⤏";
	var RBarr = "⤐";
	var rbbrk = "❳";
	var rbrace = "}";
	var rbrack = "]";
	var rbrke = "⦌";
	var rbrksld = "⦎";
	var rbrkslu = "⦐";
	var Rcaron = "Ř";
	var rcaron = "ř";
	var Rcedil = "Ŗ";
	var rcedil = "ŗ";
	var rceil = "⌉";
	var rcub = "}";
	var Rcy = "Р";
	var rcy = "р";
	var rdca = "⤷";
	var rdldhar = "⥩";
	var rdquo = "”";
	var rdquor = "”";
	var rdsh = "↳";
	var real = "ℜ";
	var realine = "ℛ";
	var realpart = "ℜ";
	var reals = "ℝ";
	var Re = "ℜ";
	var rect = "▭";
	var reg = "®";
	var REG = "®";
	var ReverseElement = "∋";
	var ReverseEquilibrium = "⇋";
	var ReverseUpEquilibrium = "⥯";
	var rfisht = "⥽";
	var rfloor = "⌋";
	var rfr = "𝔯";
	var Rfr = "ℜ";
	var rHar = "⥤";
	var rhard = "⇁";
	var rharu = "⇀";
	var rharul = "⥬";
	var Rho = "Ρ";
	var rho = "ρ";
	var rhov = "ϱ";
	var RightAngleBracket = "⟩";
	var RightArrowBar = "⇥";
	var rightarrow = "→";
	var RightArrow = "→";
	var Rightarrow = "⇒";
	var RightArrowLeftArrow = "⇄";
	var rightarrowtail = "↣";
	var RightCeiling = "⌉";
	var RightDoubleBracket = "⟧";
	var RightDownTeeVector = "⥝";
	var RightDownVectorBar = "⥕";
	var RightDownVector = "⇂";
	var RightFloor = "⌋";
	var rightharpoondown = "⇁";
	var rightharpoonup = "⇀";
	var rightleftarrows = "⇄";
	var rightleftharpoons = "⇌";
	var rightrightarrows = "⇉";
	var rightsquigarrow = "↝";
	var RightTeeArrow = "↦";
	var RightTee = "⊢";
	var RightTeeVector = "⥛";
	var rightthreetimes = "⋌";
	var RightTriangleBar = "⧐";
	var RightTriangle = "⊳";
	var RightTriangleEqual = "⊵";
	var RightUpDownVector = "⥏";
	var RightUpTeeVector = "⥜";
	var RightUpVectorBar = "⥔";
	var RightUpVector = "↾";
	var RightVectorBar = "⥓";
	var RightVector = "⇀";
	var ring = "˚";
	var risingdotseq = "≓";
	var rlarr = "⇄";
	var rlhar = "⇌";
	var rlm = "‏";
	var rmoustache = "⎱";
	var rmoust = "⎱";
	var rnmid = "⫮";
	var roang = "⟭";
	var roarr = "⇾";
	var robrk = "⟧";
	var ropar = "⦆";
	var ropf = "𝕣";
	var Ropf = "ℝ";
	var roplus = "⨮";
	var rotimes = "⨵";
	var RoundImplies = "⥰";
	var rpar = ")";
	var rpargt = "⦔";
	var rppolint = "⨒";
	var rrarr = "⇉";
	var Rrightarrow = "⇛";
	var rsaquo = "›";
	var rscr = "𝓇";
	var Rscr = "ℛ";
	var rsh = "↱";
	var Rsh = "↱";
	var rsqb = "]";
	var rsquo = "’";
	var rsquor = "’";
	var rthree = "⋌";
	var rtimes = "⋊";
	var rtri = "▹";
	var rtrie = "⊵";
	var rtrif = "▸";
	var rtriltri = "⧎";
	var RuleDelayed = "⧴";
	var ruluhar = "⥨";
	var rx = "℞";
	var Sacute = "Ś";
	var sacute = "ś";
	var sbquo = "‚";
	var scap = "⪸";
	var Scaron = "Š";
	var scaron = "š";
	var Sc = "⪼";
	var sc = "≻";
	var sccue = "≽";
	var sce = "⪰";
	var scE = "⪴";
	var Scedil = "Ş";
	var scedil = "ş";
	var Scirc = "Ŝ";
	var scirc = "ŝ";
	var scnap = "⪺";
	var scnE = "⪶";
	var scnsim = "⋩";
	var scpolint = "⨓";
	var scsim = "≿";
	var Scy = "С";
	var scy = "с";
	var sdotb = "⊡";
	var sdot = "⋅";
	var sdote = "⩦";
	var searhk = "⤥";
	var searr = "↘";
	var seArr = "⇘";
	var searrow = "↘";
	var sect = "§";
	var semi = ";";
	var seswar = "⤩";
	var setminus = "∖";
	var setmn = "∖";
	var sext = "✶";
	var Sfr = "𝔖";
	var sfr = "𝔰";
	var sfrown = "⌢";
	var sharp = "♯";
	var SHCHcy = "Щ";
	var shchcy = "щ";
	var SHcy = "Ш";
	var shcy = "ш";
	var ShortDownArrow = "↓";
	var ShortLeftArrow = "←";
	var shortmid = "∣";
	var shortparallel = "∥";
	var ShortRightArrow = "→";
	var ShortUpArrow = "↑";
	var shy = "­";
	var Sigma = "Σ";
	var sigma = "σ";
	var sigmaf = "ς";
	var sigmav = "ς";
	var sim = "∼";
	var simdot = "⩪";
	var sime = "≃";
	var simeq = "≃";
	var simg = "⪞";
	var simgE = "⪠";
	var siml = "⪝";
	var simlE = "⪟";
	var simne = "≆";
	var simplus = "⨤";
	var simrarr = "⥲";
	var slarr = "←";
	var SmallCircle = "∘";
	var smallsetminus = "∖";
	var smashp = "⨳";
	var smeparsl = "⧤";
	var smid = "∣";
	var smile = "⌣";
	var smt = "⪪";
	var smte = "⪬";
	var smtes = "⪬︀";
	var SOFTcy = "Ь";
	var softcy = "ь";
	var solbar = "⌿";
	var solb = "⧄";
	var sol = "/";
	var Sopf = "𝕊";
	var sopf = "𝕤";
	var spades = "♠";
	var spadesuit = "♠";
	var spar = "∥";
	var sqcap = "⊓";
	var sqcaps = "⊓︀";
	var sqcup = "⊔";
	var sqcups = "⊔︀";
	var Sqrt = "√";
	var sqsub = "⊏";
	var sqsube = "⊑";
	var sqsubset = "⊏";
	var sqsubseteq = "⊑";
	var sqsup = "⊐";
	var sqsupe = "⊒";
	var sqsupset = "⊐";
	var sqsupseteq = "⊒";
	var square = "□";
	var Square = "□";
	var SquareIntersection = "⊓";
	var SquareSubset = "⊏";
	var SquareSubsetEqual = "⊑";
	var SquareSuperset = "⊐";
	var SquareSupersetEqual = "⊒";
	var SquareUnion = "⊔";
	var squarf = "▪";
	var squ = "□";
	var squf = "▪";
	var srarr = "→";
	var Sscr = "𝒮";
	var sscr = "𝓈";
	var ssetmn = "∖";
	var ssmile = "⌣";
	var sstarf = "⋆";
	var Star = "⋆";
	var star = "☆";
	var starf = "★";
	var straightepsilon = "ϵ";
	var straightphi = "ϕ";
	var strns = "¯";
	var sub = "⊂";
	var Sub = "⋐";
	var subdot = "⪽";
	var subE = "⫅";
	var sube = "⊆";
	var subedot = "⫃";
	var submult = "⫁";
	var subnE = "⫋";
	var subne = "⊊";
	var subplus = "⪿";
	var subrarr = "⥹";
	var subset = "⊂";
	var Subset = "⋐";
	var subseteq = "⊆";
	var subseteqq = "⫅";
	var SubsetEqual = "⊆";
	var subsetneq = "⊊";
	var subsetneqq = "⫋";
	var subsim = "⫇";
	var subsub = "⫕";
	var subsup = "⫓";
	var succapprox = "⪸";
	var succ = "≻";
	var succcurlyeq = "≽";
	var Succeeds = "≻";
	var SucceedsEqual = "⪰";
	var SucceedsSlantEqual = "≽";
	var SucceedsTilde = "≿";
	var succeq = "⪰";
	var succnapprox = "⪺";
	var succneqq = "⪶";
	var succnsim = "⋩";
	var succsim = "≿";
	var SuchThat = "∋";
	var sum = "∑";
	var Sum = "∑";
	var sung = "♪";
	var sup1 = "¹";
	var sup2 = "²";
	var sup3 = "³";
	var sup = "⊃";
	var Sup = "⋑";
	var supdot = "⪾";
	var supdsub = "⫘";
	var supE = "⫆";
	var supe = "⊇";
	var supedot = "⫄";
	var Superset = "⊃";
	var SupersetEqual = "⊇";
	var suphsol = "⟉";
	var suphsub = "⫗";
	var suplarr = "⥻";
	var supmult = "⫂";
	var supnE = "⫌";
	var supne = "⊋";
	var supplus = "⫀";
	var supset = "⊃";
	var Supset = "⋑";
	var supseteq = "⊇";
	var supseteqq = "⫆";
	var supsetneq = "⊋";
	var supsetneqq = "⫌";
	var supsim = "⫈";
	var supsub = "⫔";
	var supsup = "⫖";
	var swarhk = "⤦";
	var swarr = "↙";
	var swArr = "⇙";
	var swarrow = "↙";
	var swnwar = "⤪";
	var szlig = "ß";
	var Tab = "\t";
	var target = "⌖";
	var Tau = "Τ";
	var tau = "τ";
	var tbrk = "⎴";
	var Tcaron = "Ť";
	var tcaron = "ť";
	var Tcedil = "Ţ";
	var tcedil = "ţ";
	var Tcy = "Т";
	var tcy = "т";
	var tdot = "⃛";
	var telrec = "⌕";
	var Tfr = "𝔗";
	var tfr = "𝔱";
	var there4 = "∴";
	var therefore = "∴";
	var Therefore = "∴";
	var Theta = "Θ";
	var theta = "θ";
	var thetasym = "ϑ";
	var thetav = "ϑ";
	var thickapprox = "≈";
	var thicksim = "∼";
	var ThickSpace = "  ";
	var ThinSpace = " ";
	var thinsp = " ";
	var thkap = "≈";
	var thksim = "∼";
	var THORN = "Þ";
	var thorn = "þ";
	var tilde = "˜";
	var Tilde = "∼";
	var TildeEqual = "≃";
	var TildeFullEqual = "≅";
	var TildeTilde = "≈";
	var timesbar = "⨱";
	var timesb = "⊠";
	var times = "×";
	var timesd = "⨰";
	var tint = "∭";
	var toea = "⤨";
	var topbot = "⌶";
	var topcir = "⫱";
	var top = "⊤";
	var Topf = "𝕋";
	var topf = "𝕥";
	var topfork = "⫚";
	var tosa = "⤩";
	var tprime = "‴";
	var trade = "™";
	var TRADE = "™";
	var triangle = "▵";
	var triangledown = "▿";
	var triangleleft = "◃";
	var trianglelefteq = "⊴";
	var triangleq = "≜";
	var triangleright = "▹";
	var trianglerighteq = "⊵";
	var tridot = "◬";
	var trie = "≜";
	var triminus = "⨺";
	var TripleDot = "⃛";
	var triplus = "⨹";
	var trisb = "⧍";
	var tritime = "⨻";
	var trpezium = "⏢";
	var Tscr = "𝒯";
	var tscr = "𝓉";
	var TScy = "Ц";
	var tscy = "ц";
	var TSHcy = "Ћ";
	var tshcy = "ћ";
	var Tstrok = "Ŧ";
	var tstrok = "ŧ";
	var twixt = "≬";
	var twoheadleftarrow = "↞";
	var twoheadrightarrow = "↠";
	var Uacute = "Ú";
	var uacute = "ú";
	var uarr = "↑";
	var Uarr = "↟";
	var uArr = "⇑";
	var Uarrocir = "⥉";
	var Ubrcy = "Ў";
	var ubrcy = "ў";
	var Ubreve = "Ŭ";
	var ubreve = "ŭ";
	var Ucirc = "Û";
	var ucirc = "û";
	var Ucy = "У";
	var ucy = "у";
	var udarr = "⇅";
	var Udblac = "Ű";
	var udblac = "ű";
	var udhar = "⥮";
	var ufisht = "⥾";
	var Ufr = "𝔘";
	var ufr = "𝔲";
	var Ugrave = "Ù";
	var ugrave = "ù";
	var uHar = "⥣";
	var uharl = "↿";
	var uharr = "↾";
	var uhblk = "▀";
	var ulcorn = "⌜";
	var ulcorner = "⌜";
	var ulcrop = "⌏";
	var ultri = "◸";
	var Umacr = "Ū";
	var umacr = "ū";
	var uml = "¨";
	var UnderBar = "_";
	var UnderBrace = "⏟";
	var UnderBracket = "⎵";
	var UnderParenthesis = "⏝";
	var Union = "⋃";
	var UnionPlus = "⊎";
	var Uogon = "Ų";
	var uogon = "ų";
	var Uopf = "𝕌";
	var uopf = "𝕦";
	var UpArrowBar = "⤒";
	var uparrow = "↑";
	var UpArrow = "↑";
	var Uparrow = "⇑";
	var UpArrowDownArrow = "⇅";
	var updownarrow = "↕";
	var UpDownArrow = "↕";
	var Updownarrow = "⇕";
	var UpEquilibrium = "⥮";
	var upharpoonleft = "↿";
	var upharpoonright = "↾";
	var uplus = "⊎";
	var UpperLeftArrow = "↖";
	var UpperRightArrow = "↗";
	var upsi = "υ";
	var Upsi = "ϒ";
	var upsih = "ϒ";
	var Upsilon = "Υ";
	var upsilon = "υ";
	var UpTeeArrow = "↥";
	var UpTee = "⊥";
	var upuparrows = "⇈";
	var urcorn = "⌝";
	var urcorner = "⌝";
	var urcrop = "⌎";
	var Uring = "Ů";
	var uring = "ů";
	var urtri = "◹";
	var Uscr = "𝒰";
	var uscr = "𝓊";
	var utdot = "⋰";
	var Utilde = "Ũ";
	var utilde = "ũ";
	var utri = "▵";
	var utrif = "▴";
	var uuarr = "⇈";
	var Uuml = "Ü";
	var uuml = "ü";
	var uwangle = "⦧";
	var vangrt = "⦜";
	var varepsilon = "ϵ";
	var varkappa = "ϰ";
	var varnothing = "∅";
	var varphi = "ϕ";
	var varpi = "ϖ";
	var varpropto = "∝";
	var varr = "↕";
	var vArr = "⇕";
	var varrho = "ϱ";
	var varsigma = "ς";
	var varsubsetneq = "⊊︀";
	var varsubsetneqq = "⫋︀";
	var varsupsetneq = "⊋︀";
	var varsupsetneqq = "⫌︀";
	var vartheta = "ϑ";
	var vartriangleleft = "⊲";
	var vartriangleright = "⊳";
	var vBar = "⫨";
	var Vbar = "⫫";
	var vBarv = "⫩";
	var Vcy = "В";
	var vcy = "в";
	var vdash = "⊢";
	var vDash = "⊨";
	var Vdash = "⊩";
	var VDash = "⊫";
	var Vdashl = "⫦";
	var veebar = "⊻";
	var vee = "∨";
	var Vee = "⋁";
	var veeeq = "≚";
	var vellip = "⋮";
	var verbar = "|";
	var Verbar = "‖";
	var vert = "|";
	var Vert = "‖";
	var VerticalBar = "∣";
	var VerticalLine = "|";
	var VerticalSeparator = "❘";
	var VerticalTilde = "≀";
	var VeryThinSpace = " ";
	var Vfr = "𝔙";
	var vfr = "𝔳";
	var vltri = "⊲";
	var vnsub = "⊂⃒";
	var vnsup = "⊃⃒";
	var Vopf = "𝕍";
	var vopf = "𝕧";
	var vprop = "∝";
	var vrtri = "⊳";
	var Vscr = "𝒱";
	var vscr = "𝓋";
	var vsubnE = "⫋︀";
	var vsubne = "⊊︀";
	var vsupnE = "⫌︀";
	var vsupne = "⊋︀";
	var Vvdash = "⊪";
	var vzigzag = "⦚";
	var Wcirc = "Ŵ";
	var wcirc = "ŵ";
	var wedbar = "⩟";
	var wedge = "∧";
	var Wedge = "⋀";
	var wedgeq = "≙";
	var weierp = "℘";
	var Wfr = "𝔚";
	var wfr = "𝔴";
	var Wopf = "𝕎";
	var wopf = "𝕨";
	var wp = "℘";
	var wr = "≀";
	var wreath = "≀";
	var Wscr = "𝒲";
	var wscr = "𝓌";
	var xcap = "⋂";
	var xcirc = "◯";
	var xcup = "⋃";
	var xdtri = "▽";
	var Xfr = "𝔛";
	var xfr = "𝔵";
	var xharr = "⟷";
	var xhArr = "⟺";
	var Xi = "Ξ";
	var xi = "ξ";
	var xlarr = "⟵";
	var xlArr = "⟸";
	var xmap = "⟼";
	var xnis = "⋻";
	var xodot = "⨀";
	var Xopf = "𝕏";
	var xopf = "𝕩";
	var xoplus = "⨁";
	var xotime = "⨂";
	var xrarr = "⟶";
	var xrArr = "⟹";
	var Xscr = "𝒳";
	var xscr = "𝓍";
	var xsqcup = "⨆";
	var xuplus = "⨄";
	var xutri = "△";
	var xvee = "⋁";
	var xwedge = "⋀";
	var Yacute = "Ý";
	var yacute = "ý";
	var YAcy = "Я";
	var yacy = "я";
	var Ycirc = "Ŷ";
	var ycirc = "ŷ";
	var Ycy = "Ы";
	var ycy = "ы";
	var yen = "¥";
	var Yfr = "𝔜";
	var yfr = "𝔶";
	var YIcy = "Ї";
	var yicy = "ї";
	var Yopf = "𝕐";
	var yopf = "𝕪";
	var Yscr = "𝒴";
	var yscr = "𝓎";
	var YUcy = "Ю";
	var yucy = "ю";
	var yuml = "ÿ";
	var Yuml = "Ÿ";
	var Zacute = "Ź";
	var zacute = "ź";
	var Zcaron = "Ž";
	var zcaron = "ž";
	var Zcy = "З";
	var zcy = "з";
	var Zdot = "Ż";
	var zdot = "ż";
	var zeetrf = "ℨ";
	var ZeroWidthSpace = "​";
	var Zeta = "Ζ";
	var zeta = "ζ";
	var zfr = "𝔷";
	var Zfr = "ℨ";
	var ZHcy = "Ж";
	var zhcy = "ж";
	var zigrarr = "⇝";
	var zopf = "𝕫";
	var Zopf = "ℤ";
	var Zscr = "𝒵";
	var zscr = "𝓏";
	var zwj = "‍";
	var zwnj = "‌";
	var require$$0 = {
		Aacute: Aacute,
		aacute: aacute,
		Abreve: Abreve,
		abreve: abreve,
		ac: ac,
		acd: acd,
		acE: acE,
		Acirc: Acirc,
		acirc: acirc,
		acute: acute,
		Acy: Acy,
		acy: acy,
		AElig: AElig,
		aelig: aelig,
		af: af,
		Afr: Afr,
		afr: afr,
		Agrave: Agrave,
		agrave: agrave,
		alefsym: alefsym,
		aleph: aleph,
		Alpha: Alpha,
		alpha: alpha,
		Amacr: Amacr,
		amacr: amacr,
		amalg: amalg,
		amp: amp,
		AMP: AMP,
		andand: andand,
		And: And,
		and: and,
		andd: andd,
		andslope: andslope,
		andv: andv,
		ang: ang,
		ange: ange,
		angle: angle,
		angmsdaa: angmsdaa,
		angmsdab: angmsdab,
		angmsdac: angmsdac,
		angmsdad: angmsdad,
		angmsdae: angmsdae,
		angmsdaf: angmsdaf,
		angmsdag: angmsdag,
		angmsdah: angmsdah,
		angmsd: angmsd,
		angrt: angrt,
		angrtvb: angrtvb,
		angrtvbd: angrtvbd,
		angsph: angsph,
		angst: angst,
		angzarr: angzarr,
		Aogon: Aogon,
		aogon: aogon,
		Aopf: Aopf,
		aopf: aopf,
		apacir: apacir,
		ap: ap,
		apE: apE,
		ape: ape,
		apid: apid,
		apos: apos,
		ApplyFunction: ApplyFunction,
		approx: approx,
		approxeq: approxeq,
		Aring: Aring,
		aring: aring,
		Ascr: Ascr,
		ascr: ascr,
		Assign: Assign,
		ast: ast,
		asymp: asymp,
		asympeq: asympeq,
		Atilde: Atilde,
		atilde: atilde,
		Auml: Auml,
		auml: auml,
		awconint: awconint,
		awint: awint,
		backcong: backcong,
		backepsilon: backepsilon,
		backprime: backprime,
		backsim: backsim,
		backsimeq: backsimeq,
		Backslash: Backslash,
		Barv: Barv,
		barvee: barvee,
		barwed: barwed,
		Barwed: Barwed,
		barwedge: barwedge,
		bbrk: bbrk,
		bbrktbrk: bbrktbrk,
		bcong: bcong,
		Bcy: Bcy,
		bcy: bcy,
		bdquo: bdquo,
		becaus: becaus,
		because: because,
		Because: Because,
		bemptyv: bemptyv,
		bepsi: bepsi,
		bernou: bernou,
		Bernoullis: Bernoullis,
		Beta: Beta,
		beta: beta,
		beth: beth,
		between: between,
		Bfr: Bfr,
		bfr: bfr,
		bigcap: bigcap,
		bigcirc: bigcirc,
		bigcup: bigcup,
		bigodot: bigodot,
		bigoplus: bigoplus,
		bigotimes: bigotimes,
		bigsqcup: bigsqcup,
		bigstar: bigstar,
		bigtriangledown: bigtriangledown,
		bigtriangleup: bigtriangleup,
		biguplus: biguplus,
		bigvee: bigvee,
		bigwedge: bigwedge,
		bkarow: bkarow,
		blacklozenge: blacklozenge,
		blacksquare: blacksquare,
		blacktriangle: blacktriangle,
		blacktriangledown: blacktriangledown,
		blacktriangleleft: blacktriangleleft,
		blacktriangleright: blacktriangleright,
		blank: blank,
		blk12: blk12,
		blk14: blk14,
		blk34: blk34,
		block: block$1,
		bne: bne,
		bnequiv: bnequiv,
		bNot: bNot,
		bnot: bnot,
		Bopf: Bopf,
		bopf: bopf,
		bot: bot,
		bottom: bottom,
		bowtie: bowtie,
		boxbox: boxbox,
		boxdl: boxdl,
		boxdL: boxdL,
		boxDl: boxDl,
		boxDL: boxDL,
		boxdr: boxdr,
		boxdR: boxdR,
		boxDr: boxDr,
		boxDR: boxDR,
		boxh: boxh,
		boxH: boxH,
		boxhd: boxhd,
		boxHd: boxHd,
		boxhD: boxhD,
		boxHD: boxHD,
		boxhu: boxhu,
		boxHu: boxHu,
		boxhU: boxhU,
		boxHU: boxHU,
		boxminus: boxminus,
		boxplus: boxplus,
		boxtimes: boxtimes,
		boxul: boxul,
		boxuL: boxuL,
		boxUl: boxUl,
		boxUL: boxUL,
		boxur: boxur,
		boxuR: boxuR,
		boxUr: boxUr,
		boxUR: boxUR,
		boxv: boxv,
		boxV: boxV,
		boxvh: boxvh,
		boxvH: boxvH,
		boxVh: boxVh,
		boxVH: boxVH,
		boxvl: boxvl,
		boxvL: boxvL,
		boxVl: boxVl,
		boxVL: boxVL,
		boxvr: boxvr,
		boxvR: boxvR,
		boxVr: boxVr,
		boxVR: boxVR,
		bprime: bprime,
		breve: breve,
		Breve: Breve,
		brvbar: brvbar,
		bscr: bscr,
		Bscr: Bscr,
		bsemi: bsemi,
		bsim: bsim,
		bsime: bsime,
		bsolb: bsolb,
		bsol: bsol,
		bsolhsub: bsolhsub,
		bull: bull,
		bullet: bullet,
		bump: bump,
		bumpE: bumpE,
		bumpe: bumpe,
		Bumpeq: Bumpeq,
		bumpeq: bumpeq,
		Cacute: Cacute,
		cacute: cacute,
		capand: capand,
		capbrcup: capbrcup,
		capcap: capcap,
		cap: cap,
		Cap: Cap,
		capcup: capcup,
		capdot: capdot,
		CapitalDifferentialD: CapitalDifferentialD,
		caps: caps,
		caret: caret,
		caron: caron,
		Cayleys: Cayleys,
		ccaps: ccaps,
		Ccaron: Ccaron,
		ccaron: ccaron,
		Ccedil: Ccedil,
		ccedil: ccedil,
		Ccirc: Ccirc,
		ccirc: ccirc,
		Cconint: Cconint,
		ccups: ccups,
		ccupssm: ccupssm,
		Cdot: Cdot,
		cdot: cdot,
		cedil: cedil,
		Cedilla: Cedilla,
		cemptyv: cemptyv,
		cent: cent,
		centerdot: centerdot,
		CenterDot: CenterDot,
		cfr: cfr,
		Cfr: Cfr,
		CHcy: CHcy,
		chcy: chcy,
		check: check,
		checkmark: checkmark,
		Chi: Chi,
		chi: chi,
		circ: circ,
		circeq: circeq,
		circlearrowleft: circlearrowleft,
		circlearrowright: circlearrowright,
		circledast: circledast,
		circledcirc: circledcirc,
		circleddash: circleddash,
		CircleDot: CircleDot,
		circledR: circledR,
		circledS: circledS,
		CircleMinus: CircleMinus,
		CirclePlus: CirclePlus,
		CircleTimes: CircleTimes,
		cir: cir,
		cirE: cirE,
		cire: cire,
		cirfnint: cirfnint,
		cirmid: cirmid,
		cirscir: cirscir,
		ClockwiseContourIntegral: ClockwiseContourIntegral,
		CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
		CloseCurlyQuote: CloseCurlyQuote,
		clubs: clubs,
		clubsuit: clubsuit,
		colon: colon,
		Colon: Colon,
		Colone: Colone,
		colone: colone,
		coloneq: coloneq,
		comma: comma,
		commat: commat,
		comp: comp,
		compfn: compfn,
		complement: complement,
		complexes: complexes,
		cong: cong,
		congdot: congdot,
		Congruent: Congruent,
		conint: conint,
		Conint: Conint,
		ContourIntegral: ContourIntegral,
		copf: copf,
		Copf: Copf,
		coprod: coprod,
		Coproduct: Coproduct,
		copy: copy,
		COPY: COPY,
		copysr: copysr,
		CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
		crarr: crarr,
		cross: cross,
		Cross: Cross,
		Cscr: Cscr,
		cscr: cscr,
		csub: csub,
		csube: csube,
		csup: csup,
		csupe: csupe,
		ctdot: ctdot,
		cudarrl: cudarrl,
		cudarrr: cudarrr,
		cuepr: cuepr,
		cuesc: cuesc,
		cularr: cularr,
		cularrp: cularrp,
		cupbrcap: cupbrcap,
		cupcap: cupcap,
		CupCap: CupCap,
		cup: cup,
		Cup: Cup,
		cupcup: cupcup,
		cupdot: cupdot,
		cupor: cupor,
		cups: cups,
		curarr: curarr,
		curarrm: curarrm,
		curlyeqprec: curlyeqprec,
		curlyeqsucc: curlyeqsucc,
		curlyvee: curlyvee,
		curlywedge: curlywedge,
		curren: curren,
		curvearrowleft: curvearrowleft,
		curvearrowright: curvearrowright,
		cuvee: cuvee,
		cuwed: cuwed,
		cwconint: cwconint,
		cwint: cwint,
		cylcty: cylcty,
		dagger: dagger,
		Dagger: Dagger,
		daleth: daleth,
		darr: darr,
		Darr: Darr,
		dArr: dArr,
		dash: dash,
		Dashv: Dashv,
		dashv: dashv,
		dbkarow: dbkarow,
		dblac: dblac,
		Dcaron: Dcaron,
		dcaron: dcaron,
		Dcy: Dcy,
		dcy: dcy,
		ddagger: ddagger,
		ddarr: ddarr,
		DD: DD,
		dd: dd,
		DDotrahd: DDotrahd,
		ddotseq: ddotseq,
		deg: deg,
		Del: Del,
		Delta: Delta,
		delta: delta,
		demptyv: demptyv,
		dfisht: dfisht,
		Dfr: Dfr,
		dfr: dfr,
		dHar: dHar,
		dharl: dharl,
		dharr: dharr,
		DiacriticalAcute: DiacriticalAcute,
		DiacriticalDot: DiacriticalDot,
		DiacriticalDoubleAcute: DiacriticalDoubleAcute,
		DiacriticalGrave: DiacriticalGrave,
		DiacriticalTilde: DiacriticalTilde,
		diam: diam,
		diamond: diamond,
		Diamond: Diamond,
		diamondsuit: diamondsuit,
		diams: diams,
		die: die,
		DifferentialD: DifferentialD,
		digamma: digamma,
		disin: disin,
		div: div,
		divide: divide,
		divideontimes: divideontimes,
		divonx: divonx,
		DJcy: DJcy,
		djcy: djcy,
		dlcorn: dlcorn,
		dlcrop: dlcrop,
		dollar: dollar,
		Dopf: Dopf,
		dopf: dopf,
		Dot: Dot,
		dot: dot,
		DotDot: DotDot,
		doteq: doteq,
		doteqdot: doteqdot,
		DotEqual: DotEqual,
		dotminus: dotminus,
		dotplus: dotplus,
		dotsquare: dotsquare,
		doublebarwedge: doublebarwedge,
		DoubleContourIntegral: DoubleContourIntegral,
		DoubleDot: DoubleDot,
		DoubleDownArrow: DoubleDownArrow,
		DoubleLeftArrow: DoubleLeftArrow,
		DoubleLeftRightArrow: DoubleLeftRightArrow,
		DoubleLeftTee: DoubleLeftTee,
		DoubleLongLeftArrow: DoubleLongLeftArrow,
		DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
		DoubleLongRightArrow: DoubleLongRightArrow,
		DoubleRightArrow: DoubleRightArrow,
		DoubleRightTee: DoubleRightTee,
		DoubleUpArrow: DoubleUpArrow,
		DoubleUpDownArrow: DoubleUpDownArrow,
		DoubleVerticalBar: DoubleVerticalBar,
		DownArrowBar: DownArrowBar,
		downarrow: downarrow,
		DownArrow: DownArrow,
		Downarrow: Downarrow,
		DownArrowUpArrow: DownArrowUpArrow,
		DownBreve: DownBreve,
		downdownarrows: downdownarrows,
		downharpoonleft: downharpoonleft,
		downharpoonright: downharpoonright,
		DownLeftRightVector: DownLeftRightVector,
		DownLeftTeeVector: DownLeftTeeVector,
		DownLeftVectorBar: DownLeftVectorBar,
		DownLeftVector: DownLeftVector,
		DownRightTeeVector: DownRightTeeVector,
		DownRightVectorBar: DownRightVectorBar,
		DownRightVector: DownRightVector,
		DownTeeArrow: DownTeeArrow,
		DownTee: DownTee,
		drbkarow: drbkarow,
		drcorn: drcorn,
		drcrop: drcrop,
		Dscr: Dscr,
		dscr: dscr,
		DScy: DScy,
		dscy: dscy,
		dsol: dsol,
		Dstrok: Dstrok,
		dstrok: dstrok,
		dtdot: dtdot,
		dtri: dtri,
		dtrif: dtrif,
		duarr: duarr,
		duhar: duhar,
		dwangle: dwangle,
		DZcy: DZcy,
		dzcy: dzcy,
		dzigrarr: dzigrarr,
		Eacute: Eacute,
		eacute: eacute,
		easter: easter,
		Ecaron: Ecaron,
		ecaron: ecaron,
		Ecirc: Ecirc,
		ecirc: ecirc,
		ecir: ecir,
		ecolon: ecolon,
		Ecy: Ecy,
		ecy: ecy,
		eDDot: eDDot,
		Edot: Edot,
		edot: edot,
		eDot: eDot,
		ee: ee,
		efDot: efDot,
		Efr: Efr,
		efr: efr,
		eg: eg,
		Egrave: Egrave,
		egrave: egrave,
		egs: egs,
		egsdot: egsdot,
		el: el,
		Element: Element,
		elinters: elinters,
		ell: ell,
		els: els,
		elsdot: elsdot,
		Emacr: Emacr,
		emacr: emacr,
		empty: empty,
		emptyset: emptyset,
		EmptySmallSquare: EmptySmallSquare,
		emptyv: emptyv,
		EmptyVerySmallSquare: EmptyVerySmallSquare,
		emsp13: emsp13,
		emsp14: emsp14,
		emsp: emsp,
		ENG: ENG,
		eng: eng,
		ensp: ensp,
		Eogon: Eogon,
		eogon: eogon,
		Eopf: Eopf,
		eopf: eopf,
		epar: epar,
		eparsl: eparsl,
		eplus: eplus,
		epsi: epsi,
		Epsilon: Epsilon,
		epsilon: epsilon,
		epsiv: epsiv,
		eqcirc: eqcirc,
		eqcolon: eqcolon,
		eqsim: eqsim,
		eqslantgtr: eqslantgtr,
		eqslantless: eqslantless,
		Equal: Equal,
		equals: equals,
		EqualTilde: EqualTilde,
		equest: equest,
		Equilibrium: Equilibrium,
		equiv: equiv,
		equivDD: equivDD,
		eqvparsl: eqvparsl,
		erarr: erarr,
		erDot: erDot,
		escr: escr,
		Escr: Escr,
		esdot: esdot,
		Esim: Esim,
		esim: esim,
		Eta: Eta,
		eta: eta,
		ETH: ETH,
		eth: eth,
		Euml: Euml,
		euml: euml,
		euro: euro,
		excl: excl,
		exist: exist,
		Exists: Exists,
		expectation: expectation,
		exponentiale: exponentiale,
		ExponentialE: ExponentialE,
		fallingdotseq: fallingdotseq,
		Fcy: Fcy,
		fcy: fcy,
		female: female,
		ffilig: ffilig,
		fflig: fflig,
		ffllig: ffllig,
		Ffr: Ffr,
		ffr: ffr,
		filig: filig,
		FilledSmallSquare: FilledSmallSquare,
		FilledVerySmallSquare: FilledVerySmallSquare,
		fjlig: fjlig,
		flat: flat,
		fllig: fllig,
		fltns: fltns,
		fnof: fnof,
		Fopf: Fopf,
		fopf: fopf,
		forall: forall,
		ForAll: ForAll,
		fork: fork,
		forkv: forkv,
		Fouriertrf: Fouriertrf,
		fpartint: fpartint,
		frac12: frac12,
		frac13: frac13,
		frac14: frac14,
		frac15: frac15,
		frac16: frac16,
		frac18: frac18,
		frac23: frac23,
		frac25: frac25,
		frac34: frac34,
		frac35: frac35,
		frac38: frac38,
		frac45: frac45,
		frac56: frac56,
		frac58: frac58,
		frac78: frac78,
		frasl: frasl,
		frown: frown,
		fscr: fscr,
		Fscr: Fscr,
		gacute: gacute,
		Gamma: Gamma,
		gamma: gamma,
		Gammad: Gammad,
		gammad: gammad,
		gap: gap,
		Gbreve: Gbreve,
		gbreve: gbreve,
		Gcedil: Gcedil,
		Gcirc: Gcirc,
		gcirc: gcirc,
		Gcy: Gcy,
		gcy: gcy,
		Gdot: Gdot,
		gdot: gdot,
		ge: ge,
		gE: gE,
		gEl: gEl,
		gel: gel,
		geq: geq,
		geqq: geqq,
		geqslant: geqslant,
		gescc: gescc,
		ges: ges,
		gesdot: gesdot,
		gesdoto: gesdoto,
		gesdotol: gesdotol,
		gesl: gesl,
		gesles: gesles,
		Gfr: Gfr,
		gfr: gfr,
		gg: gg,
		Gg: Gg,
		ggg: ggg,
		gimel: gimel,
		GJcy: GJcy,
		gjcy: gjcy,
		gla: gla,
		gl: gl,
		glE: glE,
		glj: glj,
		gnap: gnap,
		gnapprox: gnapprox,
		gne: gne,
		gnE: gnE,
		gneq: gneq,
		gneqq: gneqq,
		gnsim: gnsim,
		Gopf: Gopf,
		gopf: gopf,
		grave: grave,
		GreaterEqual: GreaterEqual,
		GreaterEqualLess: GreaterEqualLess,
		GreaterFullEqual: GreaterFullEqual,
		GreaterGreater: GreaterGreater,
		GreaterLess: GreaterLess,
		GreaterSlantEqual: GreaterSlantEqual,
		GreaterTilde: GreaterTilde,
		Gscr: Gscr,
		gscr: gscr,
		gsim: gsim,
		gsime: gsime,
		gsiml: gsiml,
		gtcc: gtcc,
		gtcir: gtcir,
		gt: gt,
		GT: GT,
		Gt: Gt,
		gtdot: gtdot,
		gtlPar: gtlPar,
		gtquest: gtquest,
		gtrapprox: gtrapprox,
		gtrarr: gtrarr,
		gtrdot: gtrdot,
		gtreqless: gtreqless,
		gtreqqless: gtreqqless,
		gtrless: gtrless,
		gtrsim: gtrsim,
		gvertneqq: gvertneqq,
		gvnE: gvnE,
		Hacek: Hacek,
		hairsp: hairsp,
		half: half,
		hamilt: hamilt,
		HARDcy: HARDcy,
		hardcy: hardcy,
		harrcir: harrcir,
		harr: harr,
		hArr: hArr,
		harrw: harrw,
		Hat: Hat,
		hbar: hbar,
		Hcirc: Hcirc,
		hcirc: hcirc,
		hearts: hearts,
		heartsuit: heartsuit,
		hellip: hellip,
		hercon: hercon,
		hfr: hfr,
		Hfr: Hfr,
		HilbertSpace: HilbertSpace,
		hksearow: hksearow,
		hkswarow: hkswarow,
		hoarr: hoarr,
		homtht: homtht,
		hookleftarrow: hookleftarrow,
		hookrightarrow: hookrightarrow,
		hopf: hopf,
		Hopf: Hopf,
		horbar: horbar,
		HorizontalLine: HorizontalLine,
		hscr: hscr,
		Hscr: Hscr,
		hslash: hslash,
		Hstrok: Hstrok,
		hstrok: hstrok,
		HumpDownHump: HumpDownHump,
		HumpEqual: HumpEqual,
		hybull: hybull,
		hyphen: hyphen,
		Iacute: Iacute,
		iacute: iacute,
		ic: ic,
		Icirc: Icirc,
		icirc: icirc,
		Icy: Icy,
		icy: icy,
		Idot: Idot,
		IEcy: IEcy,
		iecy: iecy,
		iexcl: iexcl,
		iff: iff,
		ifr: ifr,
		Ifr: Ifr,
		Igrave: Igrave,
		igrave: igrave,
		ii: ii,
		iiiint: iiiint,
		iiint: iiint,
		iinfin: iinfin,
		iiota: iiota,
		IJlig: IJlig,
		ijlig: ijlig,
		Imacr: Imacr,
		imacr: imacr,
		image: image$1,
		ImaginaryI: ImaginaryI,
		imagline: imagline,
		imagpart: imagpart,
		imath: imath,
		Im: Im,
		imof: imof,
		imped: imped,
		Implies: Implies,
		incare: incare,
		"in": "∈",
		infin: infin,
		infintie: infintie,
		inodot: inodot,
		intcal: intcal,
		int: int,
		Int: Int,
		integers: integers,
		Integral: Integral,
		intercal: intercal,
		Intersection: Intersection,
		intlarhk: intlarhk,
		intprod: intprod,
		InvisibleComma: InvisibleComma,
		InvisibleTimes: InvisibleTimes,
		IOcy: IOcy,
		iocy: iocy,
		Iogon: Iogon,
		iogon: iogon,
		Iopf: Iopf,
		iopf: iopf,
		Iota: Iota,
		iota: iota,
		iprod: iprod,
		iquest: iquest,
		iscr: iscr,
		Iscr: Iscr,
		isin: isin,
		isindot: isindot,
		isinE: isinE,
		isins: isins,
		isinsv: isinsv,
		isinv: isinv,
		it: it,
		Itilde: Itilde,
		itilde: itilde,
		Iukcy: Iukcy,
		iukcy: iukcy,
		Iuml: Iuml,
		iuml: iuml,
		Jcirc: Jcirc,
		jcirc: jcirc,
		Jcy: Jcy,
		jcy: jcy,
		Jfr: Jfr,
		jfr: jfr,
		jmath: jmath,
		Jopf: Jopf,
		jopf: jopf,
		Jscr: Jscr,
		jscr: jscr,
		Jsercy: Jsercy,
		jsercy: jsercy,
		Jukcy: Jukcy,
		jukcy: jukcy,
		Kappa: Kappa,
		kappa: kappa,
		kappav: kappav,
		Kcedil: Kcedil,
		kcedil: kcedil,
		Kcy: Kcy,
		kcy: kcy,
		Kfr: Kfr,
		kfr: kfr,
		kgreen: kgreen,
		KHcy: KHcy,
		khcy: khcy,
		KJcy: KJcy,
		kjcy: kjcy,
		Kopf: Kopf,
		kopf: kopf,
		Kscr: Kscr,
		kscr: kscr,
		lAarr: lAarr,
		Lacute: Lacute,
		lacute: lacute,
		laemptyv: laemptyv,
		lagran: lagran,
		Lambda: Lambda,
		lambda: lambda,
		lang: lang,
		Lang: Lang,
		langd: langd,
		langle: langle,
		lap: lap,
		Laplacetrf: Laplacetrf,
		laquo: laquo,
		larrb: larrb,
		larrbfs: larrbfs,
		larr: larr,
		Larr: Larr,
		lArr: lArr,
		larrfs: larrfs,
		larrhk: larrhk,
		larrlp: larrlp,
		larrpl: larrpl,
		larrsim: larrsim,
		larrtl: larrtl,
		latail: latail,
		lAtail: lAtail,
		lat: lat,
		late: late,
		lates: lates,
		lbarr: lbarr,
		lBarr: lBarr,
		lbbrk: lbbrk,
		lbrace: lbrace,
		lbrack: lbrack,
		lbrke: lbrke,
		lbrksld: lbrksld,
		lbrkslu: lbrkslu,
		Lcaron: Lcaron,
		lcaron: lcaron,
		Lcedil: Lcedil,
		lcedil: lcedil,
		lceil: lceil,
		lcub: lcub,
		Lcy: Lcy,
		lcy: lcy,
		ldca: ldca,
		ldquo: ldquo,
		ldquor: ldquor,
		ldrdhar: ldrdhar,
		ldrushar: ldrushar,
		ldsh: ldsh,
		le: le,
		lE: lE,
		LeftAngleBracket: LeftAngleBracket,
		LeftArrowBar: LeftArrowBar,
		leftarrow: leftarrow,
		LeftArrow: LeftArrow,
		Leftarrow: Leftarrow,
		LeftArrowRightArrow: LeftArrowRightArrow,
		leftarrowtail: leftarrowtail,
		LeftCeiling: LeftCeiling,
		LeftDoubleBracket: LeftDoubleBracket,
		LeftDownTeeVector: LeftDownTeeVector,
		LeftDownVectorBar: LeftDownVectorBar,
		LeftDownVector: LeftDownVector,
		LeftFloor: LeftFloor,
		leftharpoondown: leftharpoondown,
		leftharpoonup: leftharpoonup,
		leftleftarrows: leftleftarrows,
		leftrightarrow: leftrightarrow,
		LeftRightArrow: LeftRightArrow,
		Leftrightarrow: Leftrightarrow,
		leftrightarrows: leftrightarrows,
		leftrightharpoons: leftrightharpoons,
		leftrightsquigarrow: leftrightsquigarrow,
		LeftRightVector: LeftRightVector,
		LeftTeeArrow: LeftTeeArrow,
		LeftTee: LeftTee,
		LeftTeeVector: LeftTeeVector,
		leftthreetimes: leftthreetimes,
		LeftTriangleBar: LeftTriangleBar,
		LeftTriangle: LeftTriangle,
		LeftTriangleEqual: LeftTriangleEqual,
		LeftUpDownVector: LeftUpDownVector,
		LeftUpTeeVector: LeftUpTeeVector,
		LeftUpVectorBar: LeftUpVectorBar,
		LeftUpVector: LeftUpVector,
		LeftVectorBar: LeftVectorBar,
		LeftVector: LeftVector,
		lEg: lEg,
		leg: leg,
		leq: leq,
		leqq: leqq,
		leqslant: leqslant,
		lescc: lescc,
		les: les,
		lesdot: lesdot,
		lesdoto: lesdoto,
		lesdotor: lesdotor,
		lesg: lesg,
		lesges: lesges,
		lessapprox: lessapprox,
		lessdot: lessdot,
		lesseqgtr: lesseqgtr,
		lesseqqgtr: lesseqqgtr,
		LessEqualGreater: LessEqualGreater,
		LessFullEqual: LessFullEqual,
		LessGreater: LessGreater,
		lessgtr: lessgtr,
		LessLess: LessLess,
		lesssim: lesssim,
		LessSlantEqual: LessSlantEqual,
		LessTilde: LessTilde,
		lfisht: lfisht,
		lfloor: lfloor,
		Lfr: Lfr,
		lfr: lfr,
		lg: lg,
		lgE: lgE,
		lHar: lHar,
		lhard: lhard,
		lharu: lharu,
		lharul: lharul,
		lhblk: lhblk,
		LJcy: LJcy,
		ljcy: ljcy,
		llarr: llarr,
		ll: ll,
		Ll: Ll,
		llcorner: llcorner,
		Lleftarrow: Lleftarrow,
		llhard: llhard,
		lltri: lltri,
		Lmidot: Lmidot,
		lmidot: lmidot,
		lmoustache: lmoustache,
		lmoust: lmoust,
		lnap: lnap,
		lnapprox: lnapprox,
		lne: lne,
		lnE: lnE,
		lneq: lneq,
		lneqq: lneqq,
		lnsim: lnsim,
		loang: loang,
		loarr: loarr,
		lobrk: lobrk,
		longleftarrow: longleftarrow,
		LongLeftArrow: LongLeftArrow,
		Longleftarrow: Longleftarrow,
		longleftrightarrow: longleftrightarrow,
		LongLeftRightArrow: LongLeftRightArrow,
		Longleftrightarrow: Longleftrightarrow,
		longmapsto: longmapsto,
		longrightarrow: longrightarrow,
		LongRightArrow: LongRightArrow,
		Longrightarrow: Longrightarrow,
		looparrowleft: looparrowleft,
		looparrowright: looparrowright,
		lopar: lopar,
		Lopf: Lopf,
		lopf: lopf,
		loplus: loplus,
		lotimes: lotimes,
		lowast: lowast,
		lowbar: lowbar,
		LowerLeftArrow: LowerLeftArrow,
		LowerRightArrow: LowerRightArrow,
		loz: loz,
		lozenge: lozenge,
		lozf: lozf,
		lpar: lpar,
		lparlt: lparlt,
		lrarr: lrarr,
		lrcorner: lrcorner,
		lrhar: lrhar,
		lrhard: lrhard,
		lrm: lrm,
		lrtri: lrtri,
		lsaquo: lsaquo,
		lscr: lscr,
		Lscr: Lscr,
		lsh: lsh,
		Lsh: Lsh,
		lsim: lsim,
		lsime: lsime,
		lsimg: lsimg,
		lsqb: lsqb,
		lsquo: lsquo,
		lsquor: lsquor,
		Lstrok: Lstrok,
		lstrok: lstrok,
		ltcc: ltcc,
		ltcir: ltcir,
		lt: lt,
		LT: LT,
		Lt: Lt,
		ltdot: ltdot,
		lthree: lthree,
		ltimes: ltimes,
		ltlarr: ltlarr,
		ltquest: ltquest,
		ltri: ltri,
		ltrie: ltrie,
		ltrif: ltrif,
		ltrPar: ltrPar,
		lurdshar: lurdshar,
		luruhar: luruhar,
		lvertneqq: lvertneqq,
		lvnE: lvnE,
		macr: macr,
		male: male,
		malt: malt,
		maltese: maltese,
		"Map": "⤅",
		map: map,
		mapsto: mapsto,
		mapstodown: mapstodown,
		mapstoleft: mapstoleft,
		mapstoup: mapstoup,
		marker: marker,
		mcomma: mcomma,
		Mcy: Mcy,
		mcy: mcy,
		mdash: mdash,
		mDDot: mDDot,
		measuredangle: measuredangle,
		MediumSpace: MediumSpace,
		Mellintrf: Mellintrf,
		Mfr: Mfr,
		mfr: mfr,
		mho: mho,
		micro: micro,
		midast: midast,
		midcir: midcir,
		mid: mid,
		middot: middot,
		minusb: minusb,
		minus: minus,
		minusd: minusd,
		minusdu: minusdu,
		MinusPlus: MinusPlus,
		mlcp: mlcp,
		mldr: mldr,
		mnplus: mnplus,
		models: models,
		Mopf: Mopf,
		mopf: mopf,
		mp: mp,
		mscr: mscr,
		Mscr: Mscr,
		mstpos: mstpos,
		Mu: Mu,
		mu: mu,
		multimap: multimap,
		mumap: mumap,
		nabla: nabla,
		Nacute: Nacute,
		nacute: nacute,
		nang: nang,
		nap: nap,
		napE: napE,
		napid: napid,
		napos: napos,
		napprox: napprox,
		natural: natural,
		naturals: naturals,
		natur: natur,
		nbsp: nbsp,
		nbump: nbump,
		nbumpe: nbumpe,
		ncap: ncap,
		Ncaron: Ncaron,
		ncaron: ncaron,
		Ncedil: Ncedil,
		ncedil: ncedil,
		ncong: ncong,
		ncongdot: ncongdot,
		ncup: ncup,
		Ncy: Ncy,
		ncy: ncy,
		ndash: ndash,
		nearhk: nearhk,
		nearr: nearr,
		neArr: neArr,
		nearrow: nearrow,
		ne: ne,
		nedot: nedot,
		NegativeMediumSpace: NegativeMediumSpace,
		NegativeThickSpace: NegativeThickSpace,
		NegativeThinSpace: NegativeThinSpace,
		NegativeVeryThinSpace: NegativeVeryThinSpace,
		nequiv: nequiv,
		nesear: nesear,
		nesim: nesim,
		NestedGreaterGreater: NestedGreaterGreater,
		NestedLessLess: NestedLessLess,
		NewLine: NewLine,
		nexist: nexist,
		nexists: nexists,
		Nfr: Nfr,
		nfr: nfr,
		ngE: ngE,
		nge: nge,
		ngeq: ngeq,
		ngeqq: ngeqq,
		ngeqslant: ngeqslant,
		nges: nges,
		nGg: nGg,
		ngsim: ngsim,
		nGt: nGt,
		ngt: ngt,
		ngtr: ngtr,
		nGtv: nGtv,
		nharr: nharr,
		nhArr: nhArr,
		nhpar: nhpar,
		ni: ni,
		nis: nis,
		nisd: nisd,
		niv: niv,
		NJcy: NJcy,
		njcy: njcy,
		nlarr: nlarr,
		nlArr: nlArr,
		nldr: nldr,
		nlE: nlE,
		nle: nle,
		nleftarrow: nleftarrow,
		nLeftarrow: nLeftarrow,
		nleftrightarrow: nleftrightarrow,
		nLeftrightarrow: nLeftrightarrow,
		nleq: nleq,
		nleqq: nleqq,
		nleqslant: nleqslant,
		nles: nles,
		nless: nless,
		nLl: nLl,
		nlsim: nlsim,
		nLt: nLt,
		nlt: nlt,
		nltri: nltri,
		nltrie: nltrie,
		nLtv: nLtv,
		nmid: nmid,
		NoBreak: NoBreak,
		NonBreakingSpace: NonBreakingSpace,
		nopf: nopf,
		Nopf: Nopf,
		Not: Not,
		not: not,
		NotCongruent: NotCongruent,
		NotCupCap: NotCupCap,
		NotDoubleVerticalBar: NotDoubleVerticalBar,
		NotElement: NotElement,
		NotEqual: NotEqual,
		NotEqualTilde: NotEqualTilde,
		NotExists: NotExists,
		NotGreater: NotGreater,
		NotGreaterEqual: NotGreaterEqual,
		NotGreaterFullEqual: NotGreaterFullEqual,
		NotGreaterGreater: NotGreaterGreater,
		NotGreaterLess: NotGreaterLess,
		NotGreaterSlantEqual: NotGreaterSlantEqual,
		NotGreaterTilde: NotGreaterTilde,
		NotHumpDownHump: NotHumpDownHump,
		NotHumpEqual: NotHumpEqual,
		notin: notin,
		notindot: notindot,
		notinE: notinE,
		notinva: notinva,
		notinvb: notinvb,
		notinvc: notinvc,
		NotLeftTriangleBar: NotLeftTriangleBar,
		NotLeftTriangle: NotLeftTriangle,
		NotLeftTriangleEqual: NotLeftTriangleEqual,
		NotLess: NotLess,
		NotLessEqual: NotLessEqual,
		NotLessGreater: NotLessGreater,
		NotLessLess: NotLessLess,
		NotLessSlantEqual: NotLessSlantEqual,
		NotLessTilde: NotLessTilde,
		NotNestedGreaterGreater: NotNestedGreaterGreater,
		NotNestedLessLess: NotNestedLessLess,
		notni: notni,
		notniva: notniva,
		notnivb: notnivb,
		notnivc: notnivc,
		NotPrecedes: NotPrecedes,
		NotPrecedesEqual: NotPrecedesEqual,
		NotPrecedesSlantEqual: NotPrecedesSlantEqual,
		NotReverseElement: NotReverseElement,
		NotRightTriangleBar: NotRightTriangleBar,
		NotRightTriangle: NotRightTriangle,
		NotRightTriangleEqual: NotRightTriangleEqual,
		NotSquareSubset: NotSquareSubset,
		NotSquareSubsetEqual: NotSquareSubsetEqual,
		NotSquareSuperset: NotSquareSuperset,
		NotSquareSupersetEqual: NotSquareSupersetEqual,
		NotSubset: NotSubset,
		NotSubsetEqual: NotSubsetEqual,
		NotSucceeds: NotSucceeds,
		NotSucceedsEqual: NotSucceedsEqual,
		NotSucceedsSlantEqual: NotSucceedsSlantEqual,
		NotSucceedsTilde: NotSucceedsTilde,
		NotSuperset: NotSuperset,
		NotSupersetEqual: NotSupersetEqual,
		NotTilde: NotTilde,
		NotTildeEqual: NotTildeEqual,
		NotTildeFullEqual: NotTildeFullEqual,
		NotTildeTilde: NotTildeTilde,
		NotVerticalBar: NotVerticalBar,
		nparallel: nparallel,
		npar: npar,
		nparsl: nparsl,
		npart: npart,
		npolint: npolint,
		npr: npr,
		nprcue: nprcue,
		nprec: nprec,
		npreceq: npreceq,
		npre: npre,
		nrarrc: nrarrc,
		nrarr: nrarr,
		nrArr: nrArr,
		nrarrw: nrarrw,
		nrightarrow: nrightarrow,
		nRightarrow: nRightarrow,
		nrtri: nrtri,
		nrtrie: nrtrie,
		nsc: nsc,
		nsccue: nsccue,
		nsce: nsce,
		Nscr: Nscr,
		nscr: nscr,
		nshortmid: nshortmid,
		nshortparallel: nshortparallel,
		nsim: nsim,
		nsime: nsime,
		nsimeq: nsimeq,
		nsmid: nsmid,
		nspar: nspar,
		nsqsube: nsqsube,
		nsqsupe: nsqsupe,
		nsub: nsub,
		nsubE: nsubE,
		nsube: nsube,
		nsubset: nsubset,
		nsubseteq: nsubseteq,
		nsubseteqq: nsubseteqq,
		nsucc: nsucc,
		nsucceq: nsucceq,
		nsup: nsup,
		nsupE: nsupE,
		nsupe: nsupe,
		nsupset: nsupset,
		nsupseteq: nsupseteq,
		nsupseteqq: nsupseteqq,
		ntgl: ntgl,
		Ntilde: Ntilde,
		ntilde: ntilde,
		ntlg: ntlg,
		ntriangleleft: ntriangleleft,
		ntrianglelefteq: ntrianglelefteq,
		ntriangleright: ntriangleright,
		ntrianglerighteq: ntrianglerighteq,
		Nu: Nu,
		nu: nu,
		num: num,
		numero: numero,
		numsp: numsp,
		nvap: nvap,
		nvdash: nvdash,
		nvDash: nvDash,
		nVdash: nVdash,
		nVDash: nVDash,
		nvge: nvge,
		nvgt: nvgt,
		nvHarr: nvHarr,
		nvinfin: nvinfin,
		nvlArr: nvlArr,
		nvle: nvle,
		nvlt: nvlt,
		nvltrie: nvltrie,
		nvrArr: nvrArr,
		nvrtrie: nvrtrie,
		nvsim: nvsim,
		nwarhk: nwarhk,
		nwarr: nwarr,
		nwArr: nwArr,
		nwarrow: nwarrow,
		nwnear: nwnear,
		Oacute: Oacute,
		oacute: oacute,
		oast: oast,
		Ocirc: Ocirc,
		ocirc: ocirc,
		ocir: ocir,
		Ocy: Ocy,
		ocy: ocy,
		odash: odash,
		Odblac: Odblac,
		odblac: odblac,
		odiv: odiv,
		odot: odot,
		odsold: odsold,
		OElig: OElig,
		oelig: oelig,
		ofcir: ofcir,
		Ofr: Ofr,
		ofr: ofr,
		ogon: ogon,
		Ograve: Ograve,
		ograve: ograve,
		ogt: ogt,
		ohbar: ohbar,
		ohm: ohm,
		oint: oint,
		olarr: olarr,
		olcir: olcir,
		olcross: olcross,
		oline: oline,
		olt: olt,
		Omacr: Omacr,
		omacr: omacr,
		Omega: Omega,
		omega: omega,
		Omicron: Omicron,
		omicron: omicron,
		omid: omid,
		ominus: ominus,
		Oopf: Oopf,
		oopf: oopf,
		opar: opar,
		OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
		OpenCurlyQuote: OpenCurlyQuote,
		operp: operp,
		oplus: oplus,
		orarr: orarr,
		Or: Or,
		or: or,
		ord: ord,
		order: order,
		orderof: orderof,
		ordf: ordf,
		ordm: ordm,
		origof: origof,
		oror: oror,
		orslope: orslope,
		orv: orv,
		oS: oS,
		Oscr: Oscr,
		oscr: oscr,
		Oslash: Oslash,
		oslash: oslash,
		osol: osol,
		Otilde: Otilde,
		otilde: otilde,
		otimesas: otimesas,
		Otimes: Otimes,
		otimes: otimes,
		Ouml: Ouml,
		ouml: ouml,
		ovbar: ovbar,
		OverBar: OverBar,
		OverBrace: OverBrace,
		OverBracket: OverBracket,
		OverParenthesis: OverParenthesis,
		para: para,
		parallel: parallel,
		par: par,
		parsim: parsim,
		parsl: parsl,
		part: part,
		PartialD: PartialD,
		Pcy: Pcy,
		pcy: pcy,
		percnt: percnt,
		period: period,
		permil: permil,
		perp: perp,
		pertenk: pertenk,
		Pfr: Pfr,
		pfr: pfr,
		Phi: Phi,
		phi: phi,
		phiv: phiv,
		phmmat: phmmat,
		phone: phone,
		Pi: Pi,
		pi: pi,
		pitchfork: pitchfork,
		piv: piv,
		planck: planck,
		planckh: planckh,
		plankv: plankv,
		plusacir: plusacir,
		plusb: plusb,
		pluscir: pluscir,
		plus: plus,
		plusdo: plusdo,
		plusdu: plusdu,
		pluse: pluse,
		PlusMinus: PlusMinus,
		plusmn: plusmn,
		plussim: plussim,
		plustwo: plustwo,
		pm: pm,
		Poincareplane: Poincareplane,
		pointint: pointint,
		popf: popf,
		Popf: Popf,
		pound: pound,
		prap: prap,
		Pr: Pr,
		pr: pr,
		prcue: prcue,
		precapprox: precapprox,
		prec: prec,
		preccurlyeq: preccurlyeq,
		Precedes: Precedes,
		PrecedesEqual: PrecedesEqual,
		PrecedesSlantEqual: PrecedesSlantEqual,
		PrecedesTilde: PrecedesTilde,
		preceq: preceq,
		precnapprox: precnapprox,
		precneqq: precneqq,
		precnsim: precnsim,
		pre: pre,
		prE: prE,
		precsim: precsim,
		prime: prime,
		Prime: Prime,
		primes: primes,
		prnap: prnap,
		prnE: prnE,
		prnsim: prnsim,
		prod: prod,
		Product: Product,
		profalar: profalar,
		profline: profline,
		profsurf: profsurf,
		prop: prop,
		Proportional: Proportional,
		Proportion: Proportion,
		propto: propto,
		prsim: prsim,
		prurel: prurel,
		Pscr: Pscr,
		pscr: pscr,
		Psi: Psi,
		psi: psi,
		puncsp: puncsp,
		Qfr: Qfr,
		qfr: qfr,
		qint: qint,
		qopf: qopf,
		Qopf: Qopf,
		qprime: qprime,
		Qscr: Qscr,
		qscr: qscr,
		quaternions: quaternions,
		quatint: quatint,
		quest: quest,
		questeq: questeq,
		quot: quot,
		QUOT: QUOT,
		rAarr: rAarr,
		race: race,
		Racute: Racute,
		racute: racute,
		radic: radic,
		raemptyv: raemptyv,
		rang: rang,
		Rang: Rang,
		rangd: rangd,
		range: range,
		rangle: rangle,
		raquo: raquo,
		rarrap: rarrap,
		rarrb: rarrb,
		rarrbfs: rarrbfs,
		rarrc: rarrc,
		rarr: rarr,
		Rarr: Rarr,
		rArr: rArr,
		rarrfs: rarrfs,
		rarrhk: rarrhk,
		rarrlp: rarrlp,
		rarrpl: rarrpl,
		rarrsim: rarrsim,
		Rarrtl: Rarrtl,
		rarrtl: rarrtl,
		rarrw: rarrw,
		ratail: ratail,
		rAtail: rAtail,
		ratio: ratio,
		rationals: rationals,
		rbarr: rbarr,
		rBarr: rBarr,
		RBarr: RBarr,
		rbbrk: rbbrk,
		rbrace: rbrace,
		rbrack: rbrack,
		rbrke: rbrke,
		rbrksld: rbrksld,
		rbrkslu: rbrkslu,
		Rcaron: Rcaron,
		rcaron: rcaron,
		Rcedil: Rcedil,
		rcedil: rcedil,
		rceil: rceil,
		rcub: rcub,
		Rcy: Rcy,
		rcy: rcy,
		rdca: rdca,
		rdldhar: rdldhar,
		rdquo: rdquo,
		rdquor: rdquor,
		rdsh: rdsh,
		real: real,
		realine: realine,
		realpart: realpart,
		reals: reals,
		Re: Re,
		rect: rect,
		reg: reg,
		REG: REG,
		ReverseElement: ReverseElement,
		ReverseEquilibrium: ReverseEquilibrium,
		ReverseUpEquilibrium: ReverseUpEquilibrium,
		rfisht: rfisht,
		rfloor: rfloor,
		rfr: rfr,
		Rfr: Rfr,
		rHar: rHar,
		rhard: rhard,
		rharu: rharu,
		rharul: rharul,
		Rho: Rho,
		rho: rho,
		rhov: rhov,
		RightAngleBracket: RightAngleBracket,
		RightArrowBar: RightArrowBar,
		rightarrow: rightarrow,
		RightArrow: RightArrow,
		Rightarrow: Rightarrow,
		RightArrowLeftArrow: RightArrowLeftArrow,
		rightarrowtail: rightarrowtail,
		RightCeiling: RightCeiling,
		RightDoubleBracket: RightDoubleBracket,
		RightDownTeeVector: RightDownTeeVector,
		RightDownVectorBar: RightDownVectorBar,
		RightDownVector: RightDownVector,
		RightFloor: RightFloor,
		rightharpoondown: rightharpoondown,
		rightharpoonup: rightharpoonup,
		rightleftarrows: rightleftarrows,
		rightleftharpoons: rightleftharpoons,
		rightrightarrows: rightrightarrows,
		rightsquigarrow: rightsquigarrow,
		RightTeeArrow: RightTeeArrow,
		RightTee: RightTee,
		RightTeeVector: RightTeeVector,
		rightthreetimes: rightthreetimes,
		RightTriangleBar: RightTriangleBar,
		RightTriangle: RightTriangle,
		RightTriangleEqual: RightTriangleEqual,
		RightUpDownVector: RightUpDownVector,
		RightUpTeeVector: RightUpTeeVector,
		RightUpVectorBar: RightUpVectorBar,
		RightUpVector: RightUpVector,
		RightVectorBar: RightVectorBar,
		RightVector: RightVector,
		ring: ring,
		risingdotseq: risingdotseq,
		rlarr: rlarr,
		rlhar: rlhar,
		rlm: rlm,
		rmoustache: rmoustache,
		rmoust: rmoust,
		rnmid: rnmid,
		roang: roang,
		roarr: roarr,
		robrk: robrk,
		ropar: ropar,
		ropf: ropf,
		Ropf: Ropf,
		roplus: roplus,
		rotimes: rotimes,
		RoundImplies: RoundImplies,
		rpar: rpar,
		rpargt: rpargt,
		rppolint: rppolint,
		rrarr: rrarr,
		Rrightarrow: Rrightarrow,
		rsaquo: rsaquo,
		rscr: rscr,
		Rscr: Rscr,
		rsh: rsh,
		Rsh: Rsh,
		rsqb: rsqb,
		rsquo: rsquo,
		rsquor: rsquor,
		rthree: rthree,
		rtimes: rtimes,
		rtri: rtri,
		rtrie: rtrie,
		rtrif: rtrif,
		rtriltri: rtriltri,
		RuleDelayed: RuleDelayed,
		ruluhar: ruluhar,
		rx: rx,
		Sacute: Sacute,
		sacute: sacute,
		sbquo: sbquo,
		scap: scap,
		Scaron: Scaron,
		scaron: scaron,
		Sc: Sc,
		sc: sc,
		sccue: sccue,
		sce: sce,
		scE: scE,
		Scedil: Scedil,
		scedil: scedil,
		Scirc: Scirc,
		scirc: scirc,
		scnap: scnap,
		scnE: scnE,
		scnsim: scnsim,
		scpolint: scpolint,
		scsim: scsim,
		Scy: Scy,
		scy: scy,
		sdotb: sdotb,
		sdot: sdot,
		sdote: sdote,
		searhk: searhk,
		searr: searr,
		seArr: seArr,
		searrow: searrow,
		sect: sect,
		semi: semi,
		seswar: seswar,
		setminus: setminus,
		setmn: setmn,
		sext: sext,
		Sfr: Sfr,
		sfr: sfr,
		sfrown: sfrown,
		sharp: sharp,
		SHCHcy: SHCHcy,
		shchcy: shchcy,
		SHcy: SHcy,
		shcy: shcy,
		ShortDownArrow: ShortDownArrow,
		ShortLeftArrow: ShortLeftArrow,
		shortmid: shortmid,
		shortparallel: shortparallel,
		ShortRightArrow: ShortRightArrow,
		ShortUpArrow: ShortUpArrow,
		shy: shy,
		Sigma: Sigma,
		sigma: sigma,
		sigmaf: sigmaf,
		sigmav: sigmav,
		sim: sim,
		simdot: simdot,
		sime: sime,
		simeq: simeq,
		simg: simg,
		simgE: simgE,
		siml: siml,
		simlE: simlE,
		simne: simne,
		simplus: simplus,
		simrarr: simrarr,
		slarr: slarr,
		SmallCircle: SmallCircle,
		smallsetminus: smallsetminus,
		smashp: smashp,
		smeparsl: smeparsl,
		smid: smid,
		smile: smile,
		smt: smt,
		smte: smte,
		smtes: smtes,
		SOFTcy: SOFTcy,
		softcy: softcy,
		solbar: solbar,
		solb: solb,
		sol: sol,
		Sopf: Sopf,
		sopf: sopf,
		spades: spades,
		spadesuit: spadesuit,
		spar: spar,
		sqcap: sqcap,
		sqcaps: sqcaps,
		sqcup: sqcup,
		sqcups: sqcups,
		Sqrt: Sqrt,
		sqsub: sqsub,
		sqsube: sqsube,
		sqsubset: sqsubset,
		sqsubseteq: sqsubseteq,
		sqsup: sqsup,
		sqsupe: sqsupe,
		sqsupset: sqsupset,
		sqsupseteq: sqsupseteq,
		square: square,
		Square: Square,
		SquareIntersection: SquareIntersection,
		SquareSubset: SquareSubset,
		SquareSubsetEqual: SquareSubsetEqual,
		SquareSuperset: SquareSuperset,
		SquareSupersetEqual: SquareSupersetEqual,
		SquareUnion: SquareUnion,
		squarf: squarf,
		squ: squ,
		squf: squf,
		srarr: srarr,
		Sscr: Sscr,
		sscr: sscr,
		ssetmn: ssetmn,
		ssmile: ssmile,
		sstarf: sstarf,
		Star: Star,
		star: star,
		starf: starf,
		straightepsilon: straightepsilon,
		straightphi: straightphi,
		strns: strns,
		sub: sub,
		Sub: Sub,
		subdot: subdot,
		subE: subE,
		sube: sube,
		subedot: subedot,
		submult: submult,
		subnE: subnE,
		subne: subne,
		subplus: subplus,
		subrarr: subrarr,
		subset: subset,
		Subset: Subset,
		subseteq: subseteq,
		subseteqq: subseteqq,
		SubsetEqual: SubsetEqual,
		subsetneq: subsetneq,
		subsetneqq: subsetneqq,
		subsim: subsim,
		subsub: subsub,
		subsup: subsup,
		succapprox: succapprox,
		succ: succ,
		succcurlyeq: succcurlyeq,
		Succeeds: Succeeds,
		SucceedsEqual: SucceedsEqual,
		SucceedsSlantEqual: SucceedsSlantEqual,
		SucceedsTilde: SucceedsTilde,
		succeq: succeq,
		succnapprox: succnapprox,
		succneqq: succneqq,
		succnsim: succnsim,
		succsim: succsim,
		SuchThat: SuchThat,
		sum: sum,
		Sum: Sum,
		sung: sung,
		sup1: sup1,
		sup2: sup2,
		sup3: sup3,
		sup: sup,
		Sup: Sup,
		supdot: supdot,
		supdsub: supdsub,
		supE: supE,
		supe: supe,
		supedot: supedot,
		Superset: Superset,
		SupersetEqual: SupersetEqual,
		suphsol: suphsol,
		suphsub: suphsub,
		suplarr: suplarr,
		supmult: supmult,
		supnE: supnE,
		supne: supne,
		supplus: supplus,
		supset: supset,
		Supset: Supset,
		supseteq: supseteq,
		supseteqq: supseteqq,
		supsetneq: supsetneq,
		supsetneqq: supsetneqq,
		supsim: supsim,
		supsub: supsub,
		supsup: supsup,
		swarhk: swarhk,
		swarr: swarr,
		swArr: swArr,
		swarrow: swarrow,
		swnwar: swnwar,
		szlig: szlig,
		Tab: Tab,
		target: target,
		Tau: Tau,
		tau: tau,
		tbrk: tbrk,
		Tcaron: Tcaron,
		tcaron: tcaron,
		Tcedil: Tcedil,
		tcedil: tcedil,
		Tcy: Tcy,
		tcy: tcy,
		tdot: tdot,
		telrec: telrec,
		Tfr: Tfr,
		tfr: tfr,
		there4: there4,
		therefore: therefore,
		Therefore: Therefore,
		Theta: Theta,
		theta: theta,
		thetasym: thetasym,
		thetav: thetav,
		thickapprox: thickapprox,
		thicksim: thicksim,
		ThickSpace: ThickSpace,
		ThinSpace: ThinSpace,
		thinsp: thinsp,
		thkap: thkap,
		thksim: thksim,
		THORN: THORN,
		thorn: thorn,
		tilde: tilde,
		Tilde: Tilde,
		TildeEqual: TildeEqual,
		TildeFullEqual: TildeFullEqual,
		TildeTilde: TildeTilde,
		timesbar: timesbar,
		timesb: timesb,
		times: times,
		timesd: timesd,
		tint: tint,
		toea: toea,
		topbot: topbot,
		topcir: topcir,
		top: top,
		Topf: Topf,
		topf: topf,
		topfork: topfork,
		tosa: tosa,
		tprime: tprime,
		trade: trade,
		TRADE: TRADE,
		triangle: triangle,
		triangledown: triangledown,
		triangleleft: triangleleft,
		trianglelefteq: trianglelefteq,
		triangleq: triangleq,
		triangleright: triangleright,
		trianglerighteq: trianglerighteq,
		tridot: tridot,
		trie: trie,
		triminus: triminus,
		TripleDot: TripleDot,
		triplus: triplus,
		trisb: trisb,
		tritime: tritime,
		trpezium: trpezium,
		Tscr: Tscr,
		tscr: tscr,
		TScy: TScy,
		tscy: tscy,
		TSHcy: TSHcy,
		tshcy: tshcy,
		Tstrok: Tstrok,
		tstrok: tstrok,
		twixt: twixt,
		twoheadleftarrow: twoheadleftarrow,
		twoheadrightarrow: twoheadrightarrow,
		Uacute: Uacute,
		uacute: uacute,
		uarr: uarr,
		Uarr: Uarr,
		uArr: uArr,
		Uarrocir: Uarrocir,
		Ubrcy: Ubrcy,
		ubrcy: ubrcy,
		Ubreve: Ubreve,
		ubreve: ubreve,
		Ucirc: Ucirc,
		ucirc: ucirc,
		Ucy: Ucy,
		ucy: ucy,
		udarr: udarr,
		Udblac: Udblac,
		udblac: udblac,
		udhar: udhar,
		ufisht: ufisht,
		Ufr: Ufr,
		ufr: ufr,
		Ugrave: Ugrave,
		ugrave: ugrave,
		uHar: uHar,
		uharl: uharl,
		uharr: uharr,
		uhblk: uhblk,
		ulcorn: ulcorn,
		ulcorner: ulcorner,
		ulcrop: ulcrop,
		ultri: ultri,
		Umacr: Umacr,
		umacr: umacr,
		uml: uml,
		UnderBar: UnderBar,
		UnderBrace: UnderBrace,
		UnderBracket: UnderBracket,
		UnderParenthesis: UnderParenthesis,
		Union: Union,
		UnionPlus: UnionPlus,
		Uogon: Uogon,
		uogon: uogon,
		Uopf: Uopf,
		uopf: uopf,
		UpArrowBar: UpArrowBar,
		uparrow: uparrow,
		UpArrow: UpArrow,
		Uparrow: Uparrow,
		UpArrowDownArrow: UpArrowDownArrow,
		updownarrow: updownarrow,
		UpDownArrow: UpDownArrow,
		Updownarrow: Updownarrow,
		UpEquilibrium: UpEquilibrium,
		upharpoonleft: upharpoonleft,
		upharpoonright: upharpoonright,
		uplus: uplus,
		UpperLeftArrow: UpperLeftArrow,
		UpperRightArrow: UpperRightArrow,
		upsi: upsi,
		Upsi: Upsi,
		upsih: upsih,
		Upsilon: Upsilon,
		upsilon: upsilon,
		UpTeeArrow: UpTeeArrow,
		UpTee: UpTee,
		upuparrows: upuparrows,
		urcorn: urcorn,
		urcorner: urcorner,
		urcrop: urcrop,
		Uring: Uring,
		uring: uring,
		urtri: urtri,
		Uscr: Uscr,
		uscr: uscr,
		utdot: utdot,
		Utilde: Utilde,
		utilde: utilde,
		utri: utri,
		utrif: utrif,
		uuarr: uuarr,
		Uuml: Uuml,
		uuml: uuml,
		uwangle: uwangle,
		vangrt: vangrt,
		varepsilon: varepsilon,
		varkappa: varkappa,
		varnothing: varnothing,
		varphi: varphi,
		varpi: varpi,
		varpropto: varpropto,
		varr: varr,
		vArr: vArr,
		varrho: varrho,
		varsigma: varsigma,
		varsubsetneq: varsubsetneq,
		varsubsetneqq: varsubsetneqq,
		varsupsetneq: varsupsetneq,
		varsupsetneqq: varsupsetneqq,
		vartheta: vartheta,
		vartriangleleft: vartriangleleft,
		vartriangleright: vartriangleright,
		vBar: vBar,
		Vbar: Vbar,
		vBarv: vBarv,
		Vcy: Vcy,
		vcy: vcy,
		vdash: vdash,
		vDash: vDash,
		Vdash: Vdash,
		VDash: VDash,
		Vdashl: Vdashl,
		veebar: veebar,
		vee: vee,
		Vee: Vee,
		veeeq: veeeq,
		vellip: vellip,
		verbar: verbar,
		Verbar: Verbar,
		vert: vert,
		Vert: Vert,
		VerticalBar: VerticalBar,
		VerticalLine: VerticalLine,
		VerticalSeparator: VerticalSeparator,
		VerticalTilde: VerticalTilde,
		VeryThinSpace: VeryThinSpace,
		Vfr: Vfr,
		vfr: vfr,
		vltri: vltri,
		vnsub: vnsub,
		vnsup: vnsup,
		Vopf: Vopf,
		vopf: vopf,
		vprop: vprop,
		vrtri: vrtri,
		Vscr: Vscr,
		vscr: vscr,
		vsubnE: vsubnE,
		vsubne: vsubne,
		vsupnE: vsupnE,
		vsupne: vsupne,
		Vvdash: Vvdash,
		vzigzag: vzigzag,
		Wcirc: Wcirc,
		wcirc: wcirc,
		wedbar: wedbar,
		wedge: wedge,
		Wedge: Wedge,
		wedgeq: wedgeq,
		weierp: weierp,
		Wfr: Wfr,
		wfr: wfr,
		Wopf: Wopf,
		wopf: wopf,
		wp: wp,
		wr: wr,
		wreath: wreath,
		Wscr: Wscr,
		wscr: wscr,
		xcap: xcap,
		xcirc: xcirc,
		xcup: xcup,
		xdtri: xdtri,
		Xfr: Xfr,
		xfr: xfr,
		xharr: xharr,
		xhArr: xhArr,
		Xi: Xi,
		xi: xi,
		xlarr: xlarr,
		xlArr: xlArr,
		xmap: xmap,
		xnis: xnis,
		xodot: xodot,
		Xopf: Xopf,
		xopf: xopf,
		xoplus: xoplus,
		xotime: xotime,
		xrarr: xrarr,
		xrArr: xrArr,
		Xscr: Xscr,
		xscr: xscr,
		xsqcup: xsqcup,
		xuplus: xuplus,
		xutri: xutri,
		xvee: xvee,
		xwedge: xwedge,
		Yacute: Yacute,
		yacute: yacute,
		YAcy: YAcy,
		yacy: yacy,
		Ycirc: Ycirc,
		ycirc: ycirc,
		Ycy: Ycy,
		ycy: ycy,
		yen: yen,
		Yfr: Yfr,
		yfr: yfr,
		YIcy: YIcy,
		yicy: yicy,
		Yopf: Yopf,
		yopf: yopf,
		Yscr: Yscr,
		yscr: yscr,
		YUcy: YUcy,
		yucy: yucy,
		yuml: yuml,
		Yuml: Yuml,
		Zacute: Zacute,
		zacute: zacute,
		Zcaron: Zcaron,
		zcaron: zcaron,
		Zcy: Zcy,
		zcy: zcy,
		Zdot: Zdot,
		zdot: zdot,
		zeetrf: zeetrf,
		ZeroWidthSpace: ZeroWidthSpace,
		Zeta: Zeta,
		zeta: zeta,
		zfr: zfr,
		Zfr: Zfr,
		ZHcy: ZHcy,
		zhcy: zhcy,
		zigrarr: zigrarr,
		zopf: zopf,
		Zopf: Zopf,
		Zscr: Zscr,
		zscr: zscr,
		zwj: zwj,
		zwnj: zwnj
	};

	/*eslint quotes:0*/
	var entities = require$$0;

	var regex$4=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

	var encodeCache = {};


	// Create a lookup array where anything but characters in `chars` string
	// and alphanumeric chars is percent-encoded.
	//
	function getEncodeCache(exclude) {
	  var i, ch, cache = encodeCache[exclude];
	  if (cache) { return cache; }

	  cache = encodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);

	    if (/^[0-9a-z]$/i.test(ch)) {
	      // always allow unencoded alphanumeric characters
	      cache.push(ch);
	    } else {
	      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
	    }
	  }

	  for (i = 0; i < exclude.length; i++) {
	    cache[exclude.charCodeAt(i)] = exclude[i];
	  }

	  return cache;
	}


	// Encode unsafe characters with percent-encoding, skipping already
	// encoded sequences.
	//
	//  - string       - string to encode
	//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
	//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
	//
	function encode$1(string, exclude, keepEscaped) {
	  var i, l, code, nextCode, cache,
	      result = '';

	  if (typeof exclude !== 'string') {
	    // encode(string, keepEscaped)
	    keepEscaped  = exclude;
	    exclude = encode$1.defaultChars;
	  }

	  if (typeof keepEscaped === 'undefined') {
	    keepEscaped = true;
	  }

	  cache = getEncodeCache(exclude);

	  for (i = 0, l = string.length; i < l; i++) {
	    code = string.charCodeAt(i);

	    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
	      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
	        result += string.slice(i, i + 3);
	        i += 2;
	        continue;
	      }
	    }

	    if (code < 128) {
	      result += cache[code];
	      continue;
	    }

	    if (code >= 0xD800 && code <= 0xDFFF) {
	      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
	        nextCode = string.charCodeAt(i + 1);
	        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
	          result += encodeURIComponent(string[i] + string[i + 1]);
	          i++;
	          continue;
	        }
	      }
	      result += '%EF%BF%BD';
	      continue;
	    }

	    result += encodeURIComponent(string[i]);
	  }

	  return result;
	}

	encode$1.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
	encode$1.componentChars = "-_.!~*'()";


	var encode_1 = encode$1;

	/* eslint-disable no-bitwise */

	var decodeCache = {};

	function getDecodeCache(exclude) {
	  var i, ch, cache = decodeCache[exclude];
	  if (cache) { return cache; }

	  cache = decodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	    cache.push(ch);
	  }

	  for (i = 0; i < exclude.length; i++) {
	    ch = exclude.charCodeAt(i);
	    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
	  }

	  return cache;
	}


	// Decode percent-encoded string.
	//
	function decode$1(string, exclude) {
	  var cache;

	  if (typeof exclude !== 'string') {
	    exclude = decode$1.defaultChars;
	  }

	  cache = getDecodeCache(exclude);

	  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
	    var i, l, b1, b2, b3, b4, chr,
	        result = '';

	    for (i = 0, l = seq.length; i < l; i += 3) {
	      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

	      if (b1 < 0x80) {
	        result += cache[b1];
	        continue;
	      }

	      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
	        // 110xxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

	        if ((b2 & 0xC0) === 0x80) {
	          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

	          if (chr < 0x80) {
	            result += '\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 3;
	          continue;
	        }
	      }

	      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
	          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

	          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
	            result += '\ufffd\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 6;
	          continue;
	        }
	      }

	      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
	          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

	          if (chr < 0x10000 || chr > 0x10FFFF) {
	            result += '\ufffd\ufffd\ufffd\ufffd';
	          } else {
	            chr -= 0x10000;
	            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
	          }

	          i += 9;
	          continue;
	        }
	      }

	      result += '\ufffd';
	    }

	    return result;
	  });
	}


	decode$1.defaultChars   = ';/?:@&=+$,#';
	decode$1.componentChars = '';


	var decode_1 = decode$1;

	var format$1 = function format(url) {
	  var result = '';

	  result += url.protocol || '';
	  result += url.slashes ? '//' : '';
	  result += url.auth ? url.auth + '@' : '';

	  if (url.hostname && url.hostname.indexOf(':') !== -1) {
	    // ipv6 address
	    result += '[' + url.hostname + ']';
	  } else {
	    result += url.hostname || '';
	  }

	  result += url.port ? ':' + url.port : '';
	  result += url.pathname || '';
	  result += url.search || '';
	  result += url.hash || '';

	  return result;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	//
	// Changes from joyent/node:
	//
	// 1. No leading slash in paths,
	//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
	//
	// 2. Backslashes are not replaced with slashes,
	//    so `http:\\example.org\` is treated like a relative path
	//
	// 3. Trailing colon is treated like a part of the path,
	//    i.e. in `http://example.org:foo` pathname is `:foo`
	//
	// 4. Nothing is URL-encoded in the resulting object,
	//    (in joyent/node some chars in auth and paths are encoded)
	//
	// 5. `url.parse()` does not have `parseQueryString` argument
	//
	// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
	//    which can be constructed using other parts of the url.
	//


	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.pathname = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = [ '\'' ].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
	    hostEndingChars = [ '/', '?', '#' ],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    /* eslint-disable no-script-url */
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    };
	    /* eslint-enable no-script-url */

	function urlParse(url, slashesDenoteHost) {
	  if (url && url instanceof Url) { return url; }

	  var u = new Url();
	  u.parse(url, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, slashesDenoteHost) {
	  var i, l, lowerProto, hec, slashes,
	      rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    lowerProto = proto.toLowerCase();
	    this.protocol = proto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (i = 0; i < hostEndingChars.length; i++) {
	      hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
	        hostEnd = hec;
	      }
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = auth;
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (i = 0; i < nonHostChars.length; i++) {
	      hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
	        hostEnd = hec;
	      }
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1) {
	      hostEnd = rest.length;
	    }

	    if (rest[hostEnd - 1] === ':') { hostEnd--; }
	    var host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost(host);

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) { continue; }
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    }

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	    }
	  }

	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    rest = rest.slice(0, qm);
	  }
	  if (rest) { this.pathname = rest; }
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '';
	  }

	  return this;
	};

	Url.prototype.parseHost = function(host) {
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) { this.hostname = host; }
	};

	var parse$1 = urlParse;

	var encode = encode_1;
	var decode = decode_1;
	var format = format$1;
	var parse  = parse$1;

	var mdurl = {
		encode: encode,
		decode: decode,
		format: format,
		parse: parse
	};

	var regex$3=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

	var regex$2=/[\0-\x1F\x7F-\x9F]/;

	var regex$1=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;

	var regex=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

	var Any = regex$3;
	var Cc  = regex$2;
	var Cf  = regex$1;
	var P   = regex$4;
	var Z   = regex;

	var uc_micro = {
		Any: Any,
		Cc: Cc,
		Cf: Cf,
		P: P,
		Z: Z
	};

	var utils = createCommonjsModule(function (module, exports) {


	function _class(obj) { return Object.prototype.toString.call(obj); }

	function isString(obj) { return _class(obj) === '[object String]'; }

	var _hasOwnProperty = Object.prototype.hasOwnProperty;

	function has(object, key) {
	  return _hasOwnProperty.call(object, key);
	}

	// Merge objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	// Remove element from array and put another array at those position.
	// Useful for some operations with tokens
	function arrayReplaceAt(src, pos, newElements) {
	  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
	}

	////////////////////////////////////////////////////////////////////////////////

	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}

	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);

	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}


	var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
	var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
	var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;



	function replaceEntityPattern(match, name) {
	  var code = 0;

	  if (has(entities, name)) {
	    return entities[name];
	  }

	  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }

	  return match;
	}

	/*function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(ENTITY_RE, replaceEntityPattern);
	}*/

	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}

	function unescapeAll(str) {
	  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

	  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
	    if (escaped) { return escaped; }
	    return replaceEntityPattern(match, entity);
	  });
	}

	////////////////////////////////////////////////////////////////////////////////

	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};

	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}

	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}

	////////////////////////////////////////////////////////////////////////////////

	var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

	function escapeRE(str) {
	  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
	}

	////////////////////////////////////////////////////////////////////////////////

	function isSpace(code) {
	  switch (code) {
	    case 0x09:
	    case 0x20:
	      return true;
	  }
	  return false;
	}

	// Zs (unicode class) || [\t\f\v\r\n]
	function isWhiteSpace(code) {
	  if (code >= 0x2000 && code <= 0x200A) { return true; }
	  switch (code) {
	    case 0x09: // \t
	    case 0x0A: // \n
	    case 0x0B: // \v
	    case 0x0C: // \f
	    case 0x0D: // \r
	    case 0x20:
	    case 0xA0:
	    case 0x1680:
	    case 0x202F:
	    case 0x205F:
	    case 0x3000:
	      return true;
	  }
	  return false;
	}

	////////////////////////////////////////////////////////////////////////////////

	/*eslint-disable max-len*/


	// Currently without astral characters support.
	function isPunctChar(ch) {
	  return regex$4.test(ch);
	}


	// Markdown ASCII punctuation characters.
	//
	// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
	// http://spec.commonmark.org/0.15/#ascii-punctuation-character
	//
	// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
	//
	function isMdAsciiPunct(ch) {
	  switch (ch) {
	    case 0x21/* ! */:
	    case 0x22/* " */:
	    case 0x23/* # */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x26/* & */:
	    case 0x27/* ' */:
	    case 0x28/* ( */:
	    case 0x29/* ) */:
	    case 0x2A/* * */:
	    case 0x2B/* + */:
	    case 0x2C/* , */:
	    case 0x2D/* - */:
	    case 0x2E/* . */:
	    case 0x2F/* / */:
	    case 0x3A/* : */:
	    case 0x3B/* ; */:
	    case 0x3C/* < */:
	    case 0x3D/* = */:
	    case 0x3E/* > */:
	    case 0x3F/* ? */:
	    case 0x40/* @ */:
	    case 0x5B/* [ */:
	    case 0x5C/* \ */:
	    case 0x5D/* ] */:
	    case 0x5E/* ^ */:
	    case 0x5F/* _ */:
	    case 0x60/* ` */:
	    case 0x7B/* { */:
	    case 0x7C/* | */:
	    case 0x7D/* } */:
	    case 0x7E/* ~ */:
	      return true;
	    default:
	      return false;
	  }
	}

	// Hepler to unify [reference labels].
	//
	function normalizeReference(str) {
	  // Trim and collapse whitespace
	  //
	  str = str.trim().replace(/\s+/g, ' ');

	  // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
	  // fixed in v12 (couldn't find any details).
	  //
	  // So treat this one as a special case
	  // (remove this when node v10 is no longer supported).
	  //
	  if ('ẞ'.toLowerCase() === 'Ṿ') {
	    str = str.replace(/ẞ/g, 'ß');
	  }

	  // .toLowerCase().toUpperCase() should get rid of all differences
	  // between letter variants.
	  //
	  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
	  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
	  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
	  // uppercased versions).
	  //
	  // Here's an example showing how it happens. Lets take greek letter omega:
	  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
	  //
	  // Unicode entries:
	  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
	  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
	  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
	  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
	  //
	  // Case-insensitive comparison should treat all of them as equivalent.
	  //
	  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
	  // and .toUpperCase() doesn't change ϴ (already uppercase).
	  //
	  // Applying first lower then upper case normalizes any character:
	  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
	  //
	  // Note: this is equivalent to unicode case folding; unicode normalization
	  // is a different step that is not required here.
	  //
	  // Final result should be uppercased, because it's later stored in an object
	  // (this avoid a conflict with Object.prototype members,
	  // most notably, `__proto__`)
	  //
	  return str.toLowerCase().toUpperCase();
	}

	////////////////////////////////////////////////////////////////////////////////

	// Re-export libraries commonly used in both markdown-it and its plugins,
	// so plugins won't have to depend on them explicitly, which reduces their
	// bundled size (e.g. a browser build).
	//
	exports.lib                 = {};
	exports.lib.mdurl           = mdurl;
	exports.lib.ucmicro         = uc_micro;

	exports.assign              = assign;
	exports.isString            = isString;
	exports.has                 = has;
	exports.unescapeMd          = unescapeMd;
	exports.unescapeAll         = unescapeAll;
	exports.isValidEntityCode   = isValidEntityCode;
	exports.fromCodePoint       = fromCodePoint;
	// exports.replaceEntities     = replaceEntities;
	exports.escapeHtml          = escapeHtml;
	exports.arrayReplaceAt      = arrayReplaceAt;
	exports.isSpace             = isSpace;
	exports.isWhiteSpace        = isWhiteSpace;
	exports.isMdAsciiPunct      = isMdAsciiPunct;
	exports.isPunctChar         = isPunctChar;
	exports.escapeRE            = escapeRE;
	exports.normalizeReference  = normalizeReference;
	});

	// Parse link label

	var parse_link_label = function parseLinkLabel(state, start, disableNested) {
	  var level, found, marker, prevPos,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos;

	  state.pos = start + 1;
	  level = 1;

	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }

	    prevPos = state.pos;
	    state.md.inline.skipToken(state);
	    if (marker === 0x5B /* [ */) {
	      if (prevPos === state.pos - 1) {
	        // increase level if we find text `[`, which is not a part of any token
	        level++;
	      } else if (disableNested) {
	        state.pos = oldPos;
	        return -1;
	      }
	    }
	  }

	  if (found) {
	    labelEnd = state.pos;
	  }

	  // restore old state
	  state.pos = oldPos;

	  return labelEnd;
	};

	var unescapeAll$2 = utils.unescapeAll;


	var parse_link_destination = function parseLinkDestination(str, pos, max) {
	  var code, level,
	      lines = 0,
	      start = pos,
	      result = {
	        ok: false,
	        pos: 0,
	        lines: 0,
	        str: ''
	      };

	  if (str.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = str.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return result; }
	      if (code === 0x3C /* < */) { return result; }
	      if (code === 0x3E /* > */) {
	        result.pos = pos + 1;
	        result.str = unescapeAll$2(str.slice(start + 1, pos));
	        result.ok = true;
	        return result;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }

	      pos++;
	    }

	    // no closing '>'
	    return result;
	  }

	  // this should be ... } else { ... branch

	  level = 0;
	  while (pos < max) {
	    code = str.charCodeAt(pos);

	    if (code === 0x20) { break; }

	    // ascii control characters
	    if (code < 0x20 || code === 0x7F) { break; }

	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      if (str.charCodeAt(pos + 1) === 0x20) { break; }
	      pos += 2;
	      continue;
	    }

	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 32) { return result; }
	    }

	    if (code === 0x29 /* ) */) {
	      if (level === 0) { break; }
	      level--;
	    }

	    pos++;
	  }

	  if (start === pos) { return result; }
	  if (level !== 0) { return result; }

	  result.str = unescapeAll$2(str.slice(start, pos));
	  result.lines = lines;
	  result.pos = pos;
	  result.ok = true;
	  return result;
	};

	var unescapeAll$1 = utils.unescapeAll;


	var parse_link_title = function parseLinkTitle(str, pos, max) {
	  var code,
	      marker,
	      lines = 0,
	      start = pos,
	      result = {
	        ok: false,
	        pos: 0,
	        lines: 0,
	        str: ''
	      };

	  if (pos >= max) { return result; }

	  marker = str.charCodeAt(pos);

	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

	  pos++;

	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }

	  while (pos < max) {
	    code = str.charCodeAt(pos);
	    if (code === marker) {
	      result.pos = pos + 1;
	      result.lines = lines;
	      result.str = unescapeAll$1(str.slice(start + 1, pos));
	      result.ok = true;
	      return result;
	    } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
	      return result;
	    } else if (code === 0x0A) {
	      lines++;
	    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos++;
	      if (str.charCodeAt(pos) === 0x0A) {
	        lines++;
	      }
	    }

	    pos++;
	  }

	  return result;
	};

	var parseLinkLabel       = parse_link_label;
	var parseLinkDestination = parse_link_destination;
	var parseLinkTitle       = parse_link_title;

	var helpers = {
		parseLinkLabel: parseLinkLabel,
		parseLinkDestination: parseLinkDestination,
		parseLinkTitle: parseLinkTitle
	};

	var assign$1          = utils.assign;
	var unescapeAll     = utils.unescapeAll;
	var escapeHtml      = utils.escapeHtml;


	////////////////////////////////////////////////////////////////////////////////

	var default_rules = {};


	default_rules.code_inline = function (tokens, idx, options, env, slf) {
	  var token = tokens[idx];

	  return  '<code' + slf.renderAttrs(token) + '>' +
	          escapeHtml(tokens[idx].content) +
	          '</code>';
	};


	default_rules.code_block = function (tokens, idx, options, env, slf) {
	  var token = tokens[idx];

	  return  '<pre' + slf.renderAttrs(token) + '><code>' +
	          escapeHtml(tokens[idx].content) +
	          '</code></pre>\n';
	};


	default_rules.fence = function (tokens, idx, options, env, slf) {
	  var token = tokens[idx],
	      info = token.info ? unescapeAll(token.info).trim() : '',
	      langName = '',
	      langAttrs = '',
	      highlighted, i, arr, tmpAttrs, tmpToken;

	  if (info) {
	    arr = info.split(/(\s+)/g);
	    langName = arr[0];
	    langAttrs = arr.slice(2).join('');
	  }

	  if (options.highlight) {
	    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }

	  if (highlighted.indexOf('<pre') === 0) {
	    return highlighted + '\n';
	  }

	  // If language exists, inject class gently, without modifying original token.
	  // May be, one day we will add .deepClone() for token and simplify this part, but
	  // now we prefer to keep things local.
	  if (info) {
	    i        = token.attrIndex('class');
	    tmpAttrs = token.attrs ? token.attrs.slice() : [];

	    if (i < 0) {
	      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
	    } else {
	      tmpAttrs[i] = tmpAttrs[i].slice();
	      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
	    }

	    // Fake token just to render attributes
	    tmpToken = {
	      attrs: tmpAttrs
	    };

	    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
	          + highlighted
	          + '</code></pre>\n';
	  }


	  return  '<pre><code' + slf.renderAttrs(token) + '>'
	        + highlighted
	        + '</code></pre>\n';
	};


	default_rules.image = function (tokens, idx, options, env, slf) {
	  var token = tokens[idx];

	  // "alt" attr MUST be set, even if empty. Because it's mandatory and
	  // should be placed on proper position for tests.
	  //
	  // Replace content with actual value

	  token.attrs[token.attrIndex('alt')][1] =
	    slf.renderInlineAsText(token.children, options, env);

	  return slf.renderToken(tokens, idx, options);
	};


	default_rules.hardbreak = function (tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	default_rules.softbreak = function (tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};


	default_rules.text = function (tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};


	default_rules.html_block = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	default_rules.html_inline = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};


	/**
	 * new Renderer()
	 *
	 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
	 **/
	function Renderer() {

	  /**
	   * Renderer#rules -> Object
	   *
	   * Contains render rules for tokens. Can be updated and extended.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * md.renderer.rules.strong_open  = function () { return '<b>'; };
	   * md.renderer.rules.strong_close = function () { return '</b>'; };
	   *
	   * var result = md.renderInline(...);
	   * ```
	   *
	   * Each rule is called as independent static function with fixed signature:
	   *
	   * ```javascript
	   * function my_token_render(tokens, idx, options, env, renderer) {
	   *   // ...
	   *   return renderedHTML;
	   * }
	   * ```
	   *
	   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
	   * for more details and examples.
	   **/
	  this.rules = assign$1({}, default_rules);
	}


	/**
	 * Renderer.renderAttrs(token) -> String
	 *
	 * Render token attributes to string.
	 **/
	Renderer.prototype.renderAttrs = function renderAttrs(token) {
	  var i, l, result;

	  if (!token.attrs) { return ''; }

	  result = '';

	  for (i = 0, l = token.attrs.length; i < l; i++) {
	    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
	  }

	  return result;
	};


	/**
	 * Renderer.renderToken(tokens, idx, options) -> String
	 * - tokens (Array): list of tokens
	 * - idx (Numbed): token index to render
	 * - options (Object): params of parser instance
	 *
	 * Default token renderer. Can be overriden by custom function
	 * in [[Renderer#rules]].
	 **/
	Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
	  var nextToken,
	      result = '',
	      needLf = false,
	      token = tokens[idx];

	  // Tight list paragraphs
	  if (token.hidden) {
	    return '';
	  }

	  // Insert a newline between hidden paragraph and subsequent opening
	  // block-level tag.
	  //
	  // For example, here we should insert a newline before blockquote:
	  //  - a
	  //    >
	  //
	  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
	    result += '\n';
	  }

	  // Add token name, e.g. `<img`
	  result += (token.nesting === -1 ? '</' : '<') + token.tag;

	  // Encode attributes, e.g. `<img src="foo"`
	  result += this.renderAttrs(token);

	  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
	  if (token.nesting === 0 && options.xhtmlOut) {
	    result += ' /';
	  }

	  // Check if we need to add a newline after this tag
	  if (token.block) {
	    needLf = true;

	    if (token.nesting === 1) {
	      if (idx + 1 < tokens.length) {
	        nextToken = tokens[idx + 1];

	        if (nextToken.type === 'inline' || nextToken.hidden) {
	          // Block-level tag containing an inline tag.
	          //
	          needLf = false;

	        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
	          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
	          //
	          needLf = false;
	        }
	      }
	    }
	  }

	  result += needLf ? '>\n' : '>';

	  return result;
	};


	/**
	 * Renderer.renderInline(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * The same as [[Renderer.render]], but for single token of `inline` type.
	 **/
	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var type,
	      result = '',
	      rules = this.rules;

	  for (var i = 0, len = tokens.length; i < len; i++) {
	    type = tokens[i].type;

	    if (typeof rules[type] !== 'undefined') {
	      result += rules[type](tokens, i, options, env, this);
	    } else {
	      result += this.renderToken(tokens, i, options);
	    }
	  }

	  return result;
	};


	/** internal
	 * Renderer.renderInlineAsText(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Special kludge for image `alt` attributes to conform CommonMark spec.
	 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
	 * instead of simple escaping.
	 **/
	Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
	  var result = '';

	  for (var i = 0, len = tokens.length; i < len; i++) {
	    if (tokens[i].type === 'text') {
	      result += tokens[i].content;
	    } else if (tokens[i].type === 'image') {
	      result += this.renderInlineAsText(tokens[i].children, options, env);
	    } else if (tokens[i].type === 'softbreak') {
	      result += '\n';
	    }
	  }

	  return result;
	};


	/**
	 * Renderer.render(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Takes token stream and generates HTML. Probably, you will never need to call
	 * this method directly.
	 **/
	Renderer.prototype.render = function (tokens, options, env) {
	  var i, len, type,
	      result = '',
	      rules = this.rules;

	  for (i = 0, len = tokens.length; i < len; i++) {
	    type = tokens[i].type;

	    if (type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else if (typeof rules[type] !== 'undefined') {
	      result += rules[tokens[i].type](tokens, i, options, env, this);
	    } else {
	      result += this.renderToken(tokens, i, options, env);
	    }
	  }

	  return result;
	};

	var renderer = Renderer;

	/**
	 * class Ruler
	 *
	 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
	 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
	 *
	 * - keep rules in defined order
	 * - assign the name to each rule
	 * - enable/disable rules
	 * - add/replace rules
	 * - allow assign rules to additional named chains (in the same)
	 * - cacheing lists of active rules
	 *
	 * You will not need use this class directly until write plugins. For simple
	 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
	 * [[MarkdownIt.use]].
	 **/


	/**
	 * new Ruler()
	 **/
	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // {
	  //   name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ]
	  // }
	  //
	  this.__rules__ = [];

	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - diginal anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}

	////////////////////////////////////////////////////////////////////////////////
	// Helper methods, should not be used directly


	// Find rule index by name
	//
	Ruler.prototype.__find__ = function (name) {
	  for (var i = 0; i < this.__rules__.length; i++) {
	    if (this.__rules__[i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};


	// Build rules lookup cache
	//
	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];

	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) { return; }

	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });

	  self.__cache__ = {};

	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) { return; }

	      if (chain && rule.alt.indexOf(chain) < 0) { return; }

	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};


	/**
	 * Ruler.at(name, fn [, options])
	 * - name (String): rule name to replace.
	 * - fn (Function): new rule function.
	 * - options (Object): new rule options (not mandatory).
	 *
	 * Replace rule by name with new function & options. Throws error if name not
	 * found.
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * Replace existing typographer replacement rule with new one:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.at('replacements', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.at = function (name, fn, options) {
	  var index = this.__find__(name);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

	  this.__rules__[index].fn = fn;
	  this.__rules__[index].alt = opt.alt || [];
	  this.__cache__ = null;
	};


	/**
	 * Ruler.before(beforeName, ruleName, fn [, options])
	 * - beforeName (String): new rule will be added before this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain before one with given name. See also
	 * [[Ruler.after]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var index = this.__find__(beforeName);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

	  this.__rules__.splice(index, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};


	/**
	 * Ruler.after(afterName, ruleName, fn [, options])
	 * - afterName (String): new rule will be added after this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain after one with given name. See also
	 * [[Ruler.before]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var index = this.__find__(afterName);
	  var opt = options || {};

	  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

	  this.__rules__.splice(index + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Ruler.push(ruleName, fn [, options])
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Push new rule to the end of chain. See also
	 * [[Ruler.before]], [[Ruler.after]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.push('my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/
	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};

	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};


	/**
	 * Ruler.enable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to enable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
	 **/
	Ruler.prototype.enable = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  var result = [];

	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);

	    if (idx < 0) {
	      if (ignoreInvalid) { return; }
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	    result.push(name);
	  }, this);

	  this.__cache__ = null;
	  return result;
	};


	/**
	 * Ruler.enableOnly(list [, ignoreInvalid])
	 * - list (String|Array): list of rule names to enable (whitelist).
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names, and disable everything else. If any rule name
	 * not found - throw Error. Errors can be disabled by second param.
	 *
	 * See also [[Ruler.disable]], [[Ruler.enable]].
	 **/
	Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  this.__rules__.forEach(function (rule) { rule.enabled = false; });

	  this.enable(list, ignoreInvalid);
	};


	/**
	 * Ruler.disable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Disable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
	 **/
	Ruler.prototype.disable = function (list, ignoreInvalid) {
	  if (!Array.isArray(list)) { list = [ list ]; }

	  var result = [];

	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);

	    if (idx < 0) {
	      if (ignoreInvalid) { return; }
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	    result.push(name);
	  }, this);

	  this.__cache__ = null;
	  return result;
	};


	/**
	 * Ruler.getRules(chainName) -> Array
	 *
	 * Return array of active functions (rules) for given chain name. It analyzes
	 * rules configuration, compiles caches if not exists and returns result.
	 *
	 * Default chain name is `''` (empty string). It can't be skipped. That's
	 * done intentionally, to keep signature monomorphic for high speed.
	 **/
	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }

	  // Chain can be empty, if rules disabled. But we still have to return Array.
	  return this.__cache__[chainName] || [];
	};

	var ruler = Ruler;

	// Normalize input string


	// https://spec.commonmark.org/0.29/#line-ending
	var NEWLINES_RE  = /\r\n?|\n/g;
	var NULL_RE      = /\0/g;


	var normalize = function normalize(state) {
	  var str;

	  // Normalize newlines
	  str = state.src.replace(NEWLINES_RE, '\n');

	  // Replace NULL characters
	  str = str.replace(NULL_RE, '\uFFFD');

	  state.src = str;
	};

	var block = function block(state) {
	  var token;

	  if (state.inlineMode) {
	    token          = new state.Token('inline', '', 0);
	    token.content  = state.src;
	    token.map      = [ 0, 1 ];
	    token.children = [];
	    state.tokens.push(token);
	  } else {
	    state.md.block.parse(state.src, state.md, state.env, state.tokens);
	  }
	};

	var inline = function inline(state) {
	  var tokens = state.tokens, tok, i, l;

	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
	    }
	  }
	};

	var arrayReplaceAt = utils.arrayReplaceAt;


	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}


	var linkify = function linkify(state) {
	  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
	      level, htmlLinkLevel, url, fullUrl, urlText,
	      blockTokens = state.tokens,
	      links;

	  if (!state.md.options.linkify) { return; }

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline' ||
	        !state.md.linkify.pretest(blockTokens[j].content)) {
	      continue;
	    }

	    tokens = blockTokens[j].children;

	    htmlLinkLevel = 0;

	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      currentToken = tokens[i];

	      // Skip content of markdown links
	      if (currentToken.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }

	      // Skip content of html tag links
	      if (currentToken.type === 'html_inline') {
	        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(currentToken.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }

	      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

	        text = currentToken.content;
	        links = state.md.linkify.match(text);

	        // Now split string to nodes
	        nodes = [];
	        level = currentToken.level;
	        lastPos = 0;

	        for (ln = 0; ln < links.length; ln++) {

	          url = links[ln].url;
	          fullUrl = state.md.normalizeLink(url);
	          if (!state.md.validateLink(fullUrl)) { continue; }

	          urlText = links[ln].text;

	          // Linkifier might send raw hostnames like "example.com", where url
	          // starts with domain name. So we prepend http:// in those cases,
	          // and remove it afterwards.
	          //
	          if (!links[ln].schema) {
	            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
	          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
	            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
	          } else {
	            urlText = state.md.normalizeLinkText(urlText);
	          }

	          pos = links[ln].index;

	          if (pos > lastPos) {
	            token         = new state.Token('text', '', 0);
	            token.content = text.slice(lastPos, pos);
	            token.level   = level;
	            nodes.push(token);
	          }

	          token         = new state.Token('link_open', 'a', 1);
	          token.attrs   = [ [ 'href', fullUrl ] ];
	          token.level   = level++;
	          token.markup  = 'linkify';
	          token.info    = 'auto';
	          nodes.push(token);

	          token         = new state.Token('text', '', 0);
	          token.content = urlText;
	          token.level   = level;
	          nodes.push(token);

	          token         = new state.Token('link_close', 'a', -1);
	          token.level   = --level;
	          token.markup  = 'linkify';
	          token.info    = 'auto';
	          nodes.push(token);

	          lastPos = links[ln].lastIndex;
	        }
	        if (lastPos < text.length) {
	          token         = new state.Token('text', '', 0);
	          token.content = text.slice(lastPos);
	          token.level   = level;
	          nodes.push(token);
	        }

	        // replace current node
	        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
	      }
	    }
	  }
	};

	// Simple typographic replacements

	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4

	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

	// Workaround for phantomjs - need regex without /g flag,
	// or root check will fail every second time
	var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  c: '©',
	  r: '®',
	  p: '§',
	  tm: '™'
	};

	function replaceFn(match, name) {
	  return SCOPED_ABBR[name.toLowerCase()];
	}

	function replace_scoped(inlineTokens) {
	  var i, token, inside_autolink = 0;

	  for (i = inlineTokens.length - 1; i >= 0; i--) {
	    token = inlineTokens[i];

	    if (token.type === 'text' && !inside_autolink) {
	      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
	    }

	    if (token.type === 'link_open' && token.info === 'auto') {
	      inside_autolink--;
	    }

	    if (token.type === 'link_close' && token.info === 'auto') {
	      inside_autolink++;
	    }
	  }
	}

	function replace_rare(inlineTokens) {
	  var i, token, inside_autolink = 0;

	  for (i = inlineTokens.length - 1; i >= 0; i--) {
	    token = inlineTokens[i];

	    if (token.type === 'text' && !inside_autolink) {
	      if (RARE_RE.test(token.content)) {
	        token.content = token.content
	          .replace(/\+-/g, '±')
	          // .., ..., ....... -> …
	          // but ?..... & !..... -> ?.. & !..
	          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	          // em-dash
	          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
	          // en-dash
	          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
	          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
	      }
	    }

	    if (token.type === 'link_open' && token.info === 'auto') {
	      inside_autolink--;
	    }

	    if (token.type === 'link_close' && token.info === 'auto') {
	      inside_autolink++;
	    }
	  }
	}


	var replacements = function replace(state) {
	  var blkIdx;

	  if (!state.md.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
	      replace_scoped(state.tokens[blkIdx].children);
	    }

	    if (RARE_RE.test(state.tokens[blkIdx].content)) {
	      replace_rare(state.tokens[blkIdx].children);
	    }

	  }
	};

	var isWhiteSpace$1   = utils.isWhiteSpace;
	var isPunctChar$1    = utils.isPunctChar;
	var isMdAsciiPunct$1 = utils.isMdAsciiPunct;

	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var APOSTROPHE = '\u2019'; /* ’ */


	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}

	function process_inlines(tokens, state) {
	  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
	      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
	      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

	  stack = [];

	  for (i = 0; i < tokens.length; i++) {
	    token = tokens[i];

	    thisLevel = tokens[i].level;

	    for (j = stack.length - 1; j >= 0; j--) {
	      if (stack[j].level <= thisLevel) { break; }
	    }
	    stack.length = j + 1;

	    if (token.type !== 'text') { continue; }

	    text = token.content;
	    pos = 0;
	    max = text.length;

	    /*eslint no-labels:0,block-scoped-var:0*/
	    OUTER:
	    while (pos < max) {
	      QUOTE_RE.lastIndex = pos;
	      t = QUOTE_RE.exec(text);
	      if (!t) { break; }

	      canOpen = canClose = true;
	      pos = t.index + 1;
	      isSingle = (t[0] === "'");

	      // Find previous character,
	      // default to space if it's the beginning of the line
	      //
	      lastChar = 0x20;

	      if (t.index - 1 >= 0) {
	        lastChar = text.charCodeAt(t.index - 1);
	      } else {
	        for (j = i - 1; j >= 0; j--) {
	          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') { break; } // lastChar defaults to 0x20
	          if (!tokens[j].content) { continue; } // should skip all tokens except 'text', 'html_inline' or 'code_inline'

	          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
	          break;
	        }
	      }

	      // Find next character,
	      // default to space if it's the end of the line
	      //
	      nextChar = 0x20;

	      if (pos < max) {
	        nextChar = text.charCodeAt(pos);
	      } else {
	        for (j = i + 1; j < tokens.length; j++) {
	          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') { break; } // nextChar defaults to 0x20
	          if (!tokens[j].content) { continue; } // should skip all tokens except 'text', 'html_inline' or 'code_inline'

	          nextChar = tokens[j].content.charCodeAt(0);
	          break;
	        }
	      }

	      isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
	      isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));

	      isLastWhiteSpace = isWhiteSpace$1(lastChar);
	      isNextWhiteSpace = isWhiteSpace$1(nextChar);

	      if (isNextWhiteSpace) {
	        canOpen = false;
	      } else if (isNextPunctChar) {
	        if (!(isLastWhiteSpace || isLastPunctChar)) {
	          canOpen = false;
	        }
	      }

	      if (isLastWhiteSpace) {
	        canClose = false;
	      } else if (isLastPunctChar) {
	        if (!(isNextWhiteSpace || isNextPunctChar)) {
	          canClose = false;
	        }
	      }

	      if (nextChar === 0x22 /* " */ && t[0] === '"') {
	        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
	          // special case: 1"" - count first quote as an inch
	          canClose = canOpen = false;
	        }
	      }

	      if (canOpen && canClose) {
	        // Replace quotes in the middle of punctuation sequence, but not
	        // in the middle of the words, i.e.:
	        //
	        // 1. foo " bar " baz - not replaced
	        // 2. foo-"-bar-"-baz - replaced
	        // 3. foo"bar"baz     - not replaced
	        //
	        canOpen = isLastPunctChar;
	        canClose = isNextPunctChar;
	      }

	      if (!canOpen && !canClose) {
	        // middle of word
	        if (isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	        continue;
	      }

	      if (canClose) {
	        // this could be a closing quote, rewind the stack to get a match
	        for (j = stack.length - 1; j >= 0; j--) {
	          item = stack[j];
	          if (stack[j].level < thisLevel) { break; }
	          if (item.single === isSingle && stack[j].level === thisLevel) {
	            item = stack[j];

	            if (isSingle) {
	              openQuote = state.md.options.quotes[2];
	              closeQuote = state.md.options.quotes[3];
	            } else {
	              openQuote = state.md.options.quotes[0];
	              closeQuote = state.md.options.quotes[1];
	            }

	            // replace token.content *before* tokens[item.token].content,
	            // because, if they are pointing at the same token, replaceAt
	            // could mess up indices when quote length != 1
	            token.content = replaceAt(token.content, t.index, closeQuote);
	            tokens[item.token].content = replaceAt(
	              tokens[item.token].content, item.pos, openQuote);

	            pos += closeQuote.length - 1;
	            if (item.token === i) { pos += openQuote.length - 1; }

	            text = token.content;
	            max = text.length;

	            stack.length = j;
	            continue OUTER;
	          }
	        }
	      }

	      if (canOpen) {
	        stack.push({
	          token: i,
	          pos: t.index,
	          single: isSingle,
	          level: thisLevel
	        });
	      } else if (canClose && isSingle) {
	        token.content = replaceAt(token.content, t.index, APOSTROPHE);
	      }
	    }
	  }
	}


	var smartquotes = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var blkIdx;

	  if (!state.md.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline' ||
	        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
	      continue;
	    }

	    process_inlines(state.tokens[blkIdx].children, state);
	  }
	};

	// Token class


	/**
	 * class Token
	 **/

	/**
	 * new Token(type, tag, nesting)
	 *
	 * Create new token and fill passed properties.
	 **/
	function Token(type, tag, nesting) {
	  /**
	   * Token#type -> String
	   *
	   * Type of the token (string, e.g. "paragraph_open")
	   **/
	  this.type     = type;

	  /**
	   * Token#tag -> String
	   *
	   * html tag name, e.g. "p"
	   **/
	  this.tag      = tag;

	  /**
	   * Token#attrs -> Array
	   *
	   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
	   **/
	  this.attrs    = null;

	  /**
	   * Token#map -> Array
	   *
	   * Source map info. Format: `[ line_begin, line_end ]`
	   **/
	  this.map      = null;

	  /**
	   * Token#nesting -> Number
	   *
	   * Level change (number in {-1, 0, 1} set), where:
	   *
	   * -  `1` means the tag is opening
	   * -  `0` means the tag is self-closing
	   * - `-1` means the tag is closing
	   **/
	  this.nesting  = nesting;

	  /**
	   * Token#level -> Number
	   *
	   * nesting level, the same as `state.level`
	   **/
	  this.level    = 0;

	  /**
	   * Token#children -> Array
	   *
	   * An array of child nodes (inline and img tokens)
	   **/
	  this.children = null;

	  /**
	   * Token#content -> String
	   *
	   * In a case of self-closing tag (code, html, fence, etc.),
	   * it has contents of this tag.
	   **/
	  this.content  = '';

	  /**
	   * Token#markup -> String
	   *
	   * '*' or '_' for emphasis, fence string for fence, etc.
	   **/
	  this.markup   = '';

	  /**
	   * Token#info -> String
	   *
	   * Additional information:
	   *
	   * - Info string for "fence" tokens
	   * - The value "auto" for autolink "link_open" and "link_close" tokens
	   * - The string value of the item marker for ordered-list "list_item_open" tokens
	   **/
	  this.info     = '';

	  /**
	   * Token#meta -> Object
	   *
	   * A place for plugins to store an arbitrary data
	   **/
	  this.meta     = null;

	  /**
	   * Token#block -> Boolean
	   *
	   * True for block-level tokens, false for inline tokens.
	   * Used in renderer to calculate line breaks
	   **/
	  this.block    = false;

	  /**
	   * Token#hidden -> Boolean
	   *
	   * If it's true, ignore this element when rendering. Used for tight lists
	   * to hide paragraphs.
	   **/
	  this.hidden   = false;
	}


	/**
	 * Token.attrIndex(name) -> Number
	 *
	 * Search attribute index by name.
	 **/
	Token.prototype.attrIndex = function attrIndex(name) {
	  var attrs, i, len;

	  if (!this.attrs) { return -1; }

	  attrs = this.attrs;

	  for (i = 0, len = attrs.length; i < len; i++) {
	    if (attrs[i][0] === name) { return i; }
	  }
	  return -1;
	};


	/**
	 * Token.attrPush(attrData)
	 *
	 * Add `[ name, value ]` attribute to list. Init attrs if necessary
	 **/
	Token.prototype.attrPush = function attrPush(attrData) {
	  if (this.attrs) {
	    this.attrs.push(attrData);
	  } else {
	    this.attrs = [ attrData ];
	  }
	};


	/**
	 * Token.attrSet(name, value)
	 *
	 * Set `name` attribute to `value`. Override old value if exists.
	 **/
	Token.prototype.attrSet = function attrSet(name, value) {
	  var idx = this.attrIndex(name),
	      attrData = [ name, value ];

	  if (idx < 0) {
	    this.attrPush(attrData);
	  } else {
	    this.attrs[idx] = attrData;
	  }
	};


	/**
	 * Token.attrGet(name)
	 *
	 * Get the value of attribute `name`, or null if it does not exist.
	 **/
	Token.prototype.attrGet = function attrGet(name) {
	  var idx = this.attrIndex(name), value = null;
	  if (idx >= 0) {
	    value = this.attrs[idx][1];
	  }
	  return value;
	};


	/**
	 * Token.attrJoin(name, value)
	 *
	 * Join value to existing attribute via space. Or create new attribute if not
	 * exists. Useful to operate with token classes.
	 **/
	Token.prototype.attrJoin = function attrJoin(name, value) {
	  var idx = this.attrIndex(name);

	  if (idx < 0) {
	    this.attrPush([ name, value ]);
	  } else {
	    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
	  }
	};


	var token = Token;

	function StateCore(src, md, env) {
	  this.src = src;
	  this.env = env;
	  this.tokens = [];
	  this.inlineMode = false;
	  this.md = md; // link to parser instance
	}

	// re-export Token class to use in core rules
	StateCore.prototype.Token = token;


	var state_core = StateCore;

	var _rules$2 = [
	  [ 'normalize',      normalize      ],
	  [ 'block',          block          ],
	  [ 'inline',         inline         ],
	  [ 'linkify',        linkify        ],
	  [ 'replacements',   replacements   ],
	  [ 'smartquotes',    smartquotes    ]
	];


	/**
	 * new Core()
	 **/
	function Core() {
	  /**
	   * Core#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of core rules.
	   **/
	  this.ruler = new ruler();

	  for (var i = 0; i < _rules$2.length; i++) {
	    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
	  }
	}


	/**
	 * Core.process(state)
	 *
	 * Executes core chain rules.
	 **/
	Core.prototype.process = function (state) {
	  var i, l, rules;

	  rules = this.ruler.getRules('');

	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};

	Core.prototype.State = state_core;


	var parser_core = Core;

	var isSpace$a = utils.isSpace;


	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.tShift[line],
	      max = state.eMarks[line];

	  return state.src.substr(pos, max - pos);
	}

	function escapedSplit(str) {
	  var result = [],
	      pos = 0,
	      max = str.length,
	      ch,
	      isEscaped = false,
	      lastPos = 0,
	      current = '';

	  ch  = str.charCodeAt(pos);

	  while (pos < max) {
	    if (ch === 0x7c/* | */) {
	      if (!isEscaped) {
	        // pipe separating cells, '|'
	        result.push(current + str.substring(lastPos, pos));
	        current = '';
	        lastPos = pos + 1;
	      } else {
	        // escaped pipe, '\|'
	        current += str.substring(lastPos, pos - 1);
	        lastPos = pos;
	      }
	    }

	    isEscaped = (ch === 0x5c/* \ */);
	    pos++;

	    ch = str.charCodeAt(pos);
	  }

	  result.push(current + str.substring(lastPos));

	  return result;
	}


	var table = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
	      aligns, t, tableLines, tbodyLines, oldParentType, terminate,
	      terminatorRules, firstCh, secondCh;

	  // should have at least two lines
	  if (startLine + 2 > endLine) { return false; }

	  nextLine = startLine + 1;

	  if (state.sCount[nextLine] < state.blkIndent) { return false; }

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

	  // first character of the second line should be '|', '-', ':',
	  // and no other characters are allowed but spaces;
	  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }

	  firstCh = state.src.charCodeAt(pos++);
	  if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

	  if (pos >= state.eMarks[nextLine]) { return false; }

	  secondCh = state.src.charCodeAt(pos++);
	  if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace$a(secondCh)) {
	    return false;
	  }

	  // if first character is '-', then second character must not be a space
	  // (due to parsing ambiguity with list)
	  if (firstCh === 0x2D/* - */ && isSpace$a(secondCh)) { return false; }

	  while (pos < state.eMarks[nextLine]) {
	    ch = state.src.charCodeAt(pos);

	    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace$a(ch)) { return false; }

	    pos++;
	  }

	  lineText = getLine(state, startLine + 1);

	  columns = lineText.split('|');
	  aligns = [];
	  for (i = 0; i < columns.length; i++) {
	    t = columns[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === columns.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }

	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }

	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
	  columns = escapedSplit(lineText);
	  if (columns.length && columns[0] === '') { columns.shift(); }
	  if (columns.length && columns[columns.length - 1] === '') { columns.pop(); }

	  // header row will define an amount of columns in the entire table,
	  // and align row should be exactly the same (the rest of the rows can differ)
	  columnCount = columns.length;
	  if (columnCount === 0 || columnCount !== aligns.length) { return false; }

	  if (silent) { return true; }

	  oldParentType = state.parentType;
	  state.parentType = 'table';

	  // use 'blockquote' lists for termination because it's
	  // the most similar to tables
	  terminatorRules = state.md.block.ruler.getRules('blockquote');

	  token     = state.push('table_open', 'table', 1);
	  token.map = tableLines = [ startLine, 0 ];

	  token     = state.push('thead_open', 'thead', 1);
	  token.map = [ startLine, startLine + 1 ];

	  token     = state.push('tr_open', 'tr', 1);
	  token.map = [ startLine, startLine + 1 ];

	  for (i = 0; i < columns.length; i++) {
	    token          = state.push('th_open', 'th', 1);
	    if (aligns[i]) {
	      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
	    }

	    token          = state.push('inline', '', 0);
	    token.content  = columns[i].trim();
	    token.children = [];

	    token          = state.push('th_close', 'th', -1);
	  }

	  token     = state.push('tr_close', 'tr', -1);
	  token     = state.push('thead_close', 'thead', -1);

	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.sCount[nextLine] < state.blkIndent) { break; }

	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }

	    if (terminate) { break; }
	    lineText = getLine(state, nextLine).trim();
	    if (!lineText) { break; }
	    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
	    columns = escapedSplit(lineText);
	    if (columns.length && columns[0] === '') { columns.shift(); }
	    if (columns.length && columns[columns.length - 1] === '') { columns.pop(); }

	    if (nextLine === startLine + 2) {
	      token     = state.push('tbody_open', 'tbody', 1);
	      token.map = tbodyLines = [ startLine + 2, 0 ];
	    }

	    token     = state.push('tr_open', 'tr', 1);
	    token.map = [ nextLine, nextLine + 1 ];

	    for (i = 0; i < columnCount; i++) {
	      token          = state.push('td_open', 'td', 1);
	      if (aligns[i]) {
	        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
	      }

	      token          = state.push('inline', '', 0);
	      token.content  = columns[i] ? columns[i].trim() : '';
	      token.children = [];

	      token          = state.push('td_close', 'td', -1);
	    }
	    token = state.push('tr_close', 'tr', -1);
	  }

	  if (tbodyLines) {
	    token = state.push('tbody_close', 'tbody', -1);
	    tbodyLines[1] = nextLine;
	  }

	  token = state.push('table_close', 'table', -1);
	  tableLines[1] = nextLine;

	  state.parentType = oldParentType;
	  state.line = nextLine;
	  return true;
	};

	// Code block (4 spaces padded)


	var code = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last, token;

	  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

	  last = nextLine = startLine + 1;

	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }

	    if (state.sCount[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }

	  state.line = last;

	  token         = state.push('code_block', 'code', 0);
	  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
	  token.map     = [ startLine, state.line ];

	  return true;
	};

	// fences (``` lang, ~~~ lang)


	var fence = function fence(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem, token, markup,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  if (pos + 3 > max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }

	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);

	  len = pos - mem;

	  if (len < 3) { return false; }

	  markup = state.src.slice(mem, pos);
	  params = state.src.slice(pos, max);

	  if (marker === 0x60 /* ` */) {
	    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
	      return false;
	    }
	  }

	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }

	  // search end of block
	  nextLine = startLine;

	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }

	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }

	    if (state.src.charCodeAt(pos) !== marker) { continue; }

	    if (state.sCount[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }

	    pos = state.skipChars(pos, marker);

	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }

	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);

	    if (pos < max) { continue; }

	    haveEndMarker = true;
	    // found!
	    break;
	  }

	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.sCount[startLine];

	  state.line = nextLine + (haveEndMarker ? 1 : 0);

	  token         = state.push('fence', 'code', 0);
	  token.info    = params;
	  token.content = state.getLines(startLine + 1, nextLine, len, true);
	  token.markup  = markup;
	  token.map     = [ startLine, state.line ];

	  return true;
	};

	var isSpace$9 = utils.isSpace;


	var blockquote = function blockquote(state, startLine, endLine, silent) {
	  var adjustTab,
	      ch,
	      i,
	      initial,
	      l,
	      lastLineEmpty,
	      lines,
	      nextLine,
	      offset,
	      oldBMarks,
	      oldBSCount,
	      oldIndent,
	      oldParentType,
	      oldSCount,
	      oldTShift,
	      spaceAfterMarker,
	      terminate,
	      terminatorRules,
	      token,
	      isOutdented,
	      oldLineMax = state.lineMax,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }

	  // set offset past spaces and ">"
	  initial = offset = state.sCount[startLine] + 1;

	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20 /* space */) {
	    // ' >   test '
	    //     ^ -- position start of line here:
	    pos++;
	    initial++;
	    offset++;
	    adjustTab = false;
	    spaceAfterMarker = true;
	  } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
	    spaceAfterMarker = true;

	    if ((state.bsCount[startLine] + offset) % 4 === 3) {
	      // '  >\t  test '
	      //       ^ -- position start of line here (tab has width===1)
	      pos++;
	      initial++;
	      offset++;
	      adjustTab = false;
	    } else {
	      // ' >\t  test '
	      //    ^ -- position start of line here + shift bsCount slightly
	      //         to make extra space appear
	      adjustTab = true;
	    }
	  } else {
	    spaceAfterMarker = false;
	  }

	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;

	  while (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (isSpace$9(ch)) {
	      if (ch === 0x09) {
	        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
	      } else {
	        offset++;
	      }
	    } else {
	      break;
	    }

	    pos++;
	  }

	  oldBSCount = [ state.bsCount[startLine] ];
	  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

	  lastLineEmpty = pos >= max;

	  oldSCount = [ state.sCount[startLine] ];
	  state.sCount[startLine] = offset - initial;

	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];

	  terminatorRules = state.md.block.ruler.getRules('blockquote');

	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';

	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag:
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    // check if it's outdented, i.e. it's inside list item and indented
	    // less than said list item:
	    //
	    // ```
	    // 1. anything
	    //    > current blockquote
	    // 2. checking this line
	    // ```
	    isOutdented = state.sCount[nextLine] < state.blkIndent;

	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }

	    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
	      // This line is inside the blockquote.

	      // set offset past spaces and ">"
	      initial = offset = state.sCount[nextLine] + 1;

	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
	        // ' >   test '
	        //     ^ -- position start of line here:
	        pos++;
	        initial++;
	        offset++;
	        adjustTab = false;
	        spaceAfterMarker = true;
	      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
	        spaceAfterMarker = true;

	        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
	          // '  >\t  test '
	          //       ^ -- position start of line here (tab has width===1)
	          pos++;
	          initial++;
	          offset++;
	          adjustTab = false;
	        } else {
	          // ' >\t  test '
	          //    ^ -- position start of line here + shift bsCount slightly
	          //         to make extra space appear
	          adjustTab = true;
	        }
	      } else {
	        spaceAfterMarker = false;
	      }

	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;

	      while (pos < max) {
	        ch = state.src.charCodeAt(pos);

	        if (isSpace$9(ch)) {
	          if (ch === 0x09) {
	            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
	          } else {
	            offset++;
	          }
	        } else {
	          break;
	        }

	        pos++;
	      }

	      lastLineEmpty = pos >= max;

	      oldBSCount.push(state.bsCount[nextLine]);
	      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

	      oldSCount.push(state.sCount[nextLine]);
	      state.sCount[nextLine] = offset - initial;

	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }

	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }

	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }

	    if (terminate) {
	      // Quirk to enforce "hard termination mode" for paragraphs;
	      // normally if you call `tokenize(state, startLine, nextLine)`,
	      // paragraphs will look below nextLine for paragraph continuation,
	      // but if blockquote is terminated by another tag, they shouldn't
	      state.lineMax = nextLine;

	      if (state.blkIndent !== 0) {
	        // state.blkIndent was non-zero, we now set it to zero,
	        // so we need to re-calculate all offsets to appear as
	        // if indent wasn't changed
	        oldBMarks.push(state.bMarks[nextLine]);
	        oldBSCount.push(state.bsCount[nextLine]);
	        oldTShift.push(state.tShift[nextLine]);
	        oldSCount.push(state.sCount[nextLine]);
	        state.sCount[nextLine] -= state.blkIndent;
	      }

	      break;
	    }

	    oldBMarks.push(state.bMarks[nextLine]);
	    oldBSCount.push(state.bsCount[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);
	    oldSCount.push(state.sCount[nextLine]);

	    // A negative indentation means that this is a paragraph continuation
	    //
	    state.sCount[nextLine] = -1;
	  }

	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;

	  token        = state.push('blockquote_open', 'blockquote', 1);
	  token.markup = '>';
	  token.map    = lines = [ startLine, 0 ];

	  state.md.block.tokenize(state, startLine, nextLine);

	  token        = state.push('blockquote_close', 'blockquote', -1);
	  token.markup = '>';

	  state.lineMax = oldLineMax;
	  state.parentType = oldParentType;
	  lines[1] = state.line;

	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	    state.sCount[i + startLine] = oldSCount[i];
	    state.bsCount[i + startLine] = oldBSCount[i];
	  }
	  state.blkIndent = oldIndent;

	  return true;
	};

	var isSpace$8 = utils.isSpace;


	var hr = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch, token,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  marker = state.src.charCodeAt(pos++);

	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }

	  // markers can be mixed with spaces, but there should be at least 3 of them

	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && !isSpace$8(ch)) { return false; }
	    if (ch === marker) { cnt++; }
	  }

	  if (cnt < 3) { return false; }

	  if (silent) { return true; }

	  state.line = startLine + 1;

	  token        = state.push('hr', 'hr', 0);
	  token.map    = [ startLine, state.line ];
	  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

	  return true;
	};

	var isSpace$7 = utils.isSpace;


	// Search `[-+*][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max, ch;

	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];

	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }

	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (!isSpace$7(ch)) {
	      // " -test " - is not a list item
	      return -1;
	    }
	  }

	  return pos;
	}

	// Search `\d+[.)][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      pos = start,
	      max = state.eMarks[startLine];

	  // List marker should have at least 2 chars (digit + dot)
	  if (pos + 1 >= max) { return -1; }

	  ch = state.src.charCodeAt(pos++);

	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }

	    ch = state.src.charCodeAt(pos++);

	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

	      // List marker should have no more than 9 digits
	      // (prevents integer overflow in browsers)
	      if (pos - start >= 10) { return -1; }

	      continue;
	    }

	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }

	    return -1;
	  }


	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (!isSpace$7(ch)) {
	      // " 1.test " - is not a list item
	      return -1;
	    }
	  }
	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].hidden = true;
	      state.tokens[i].hidden = true;
	      i += 2;
	    }
	  }
	}


	var list = function list(state, startLine, endLine, silent) {
	  var ch,
	      contentStart,
	      i,
	      indent,
	      indentAfterMarker,
	      initial,
	      isOrdered,
	      itemLines,
	      l,
	      listLines,
	      listTokIdx,
	      markerCharCode,
	      markerValue,
	      max,
	      nextLine,
	      offset,
	      oldListIndent,
	      oldParentType,
	      oldSCount,
	      oldTShift,
	      oldTight,
	      pos,
	      posAfterMarker,
	      prevEmptyEnd,
	      start,
	      terminate,
	      terminatorRules,
	      token,
	      isTerminatingParagraph = false,
	      tight = true;

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  // Special case:
	  //  - item 1
	  //   - item 2
	  //    - item 3
	  //     - item 4
	  //      - this one is a paragraph continuation
	  if (state.listIndent >= 0 &&
	      state.sCount[startLine] - state.listIndent >= 4 &&
	      state.sCount[startLine] < state.blkIndent) {
	    return false;
	  }

	  // limit conditions when list can interrupt
	  // a paragraph (validation mode only)
	  if (silent && state.parentType === 'paragraph') {
	    // Next list item should still terminate previous list item;
	    //
	    // This code can fail if plugins use blkIndent as well as lists,
	    // but I hope the spec gets fixed long before that happens.
	    //
	    if (state.sCount[startLine] >= state.blkIndent) {
	      isTerminatingParagraph = true;
	    }
	  }

	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.slice(start, posAfterMarker - 1));

	    // If we're starting a new ordered list right after
	    // a paragraph, it should start with 1.
	    if (isTerminatingParagraph && markerValue !== 1) { return false; }

	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;

	  } else {
	    return false;
	  }

	  // If we're starting a new unordered list right after
	  // a paragraph, first line should not be empty.
	  if (isTerminatingParagraph) {
	    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) { return false; }
	  }

	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

	  // For validation mode we can terminate immediately
	  if (silent) { return true; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  if (isOrdered) {
	    token       = state.push('ordered_list_open', 'ol', 1);
	    if (markerValue !== 1) {
	      token.attrs = [ [ 'start', markerValue ] ];
	    }

	  } else {
	    token       = state.push('bullet_list_open', 'ul', 1);
	  }

	  token.map    = listLines = [ startLine, 0 ];
	  token.markup = String.fromCharCode(markerCharCode);

	  //
	  // Iterate list items
	  //

	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.md.block.ruler.getRules('list');

	  oldParentType = state.parentType;
	  state.parentType = 'list';

	  while (nextLine < endLine) {
	    pos = posAfterMarker;
	    max = state.eMarks[nextLine];

	    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

	    while (pos < max) {
	      ch = state.src.charCodeAt(pos);

	      if (ch === 0x09) {
	        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
	      } else if (ch === 0x20) {
	        offset++;
	      } else {
	        break;
	      }

	      pos++;
	    }

	    contentStart = pos;

	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = offset - initial;
	    }

	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = initial + indentAfterMarker;

	    // Run subparser & write tokens
	    token        = state.push('list_item_open', 'li', 1);
	    token.markup = String.fromCharCode(markerCharCode);
	    token.map    = itemLines = [ startLine, 0 ];
	    if (isOrdered) {
	      token.info = state.src.slice(start, posAfterMarker - 1);
	    }

	    // change current state, then restore it after parser subcall
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldSCount = state.sCount[startLine];

	    //  - example list
	    // ^ listIndent position will be here
	    //   ^ blkIndent position will be here
	    //
	    oldListIndent = state.listIndent;
	    state.listIndent = state.blkIndent;
	    state.blkIndent = indent;

	    state.tight = true;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.sCount[startLine] = offset;

	    if (contentStart >= max && state.isEmpty(startLine + 1)) {
	      // workaround for this case
	      // (list item is empty, list terminates before "foo"):
	      // ~~~~~~~~
	      //   -
	      //
	      //     foo
	      // ~~~~~~~~
	      state.line = Math.min(state.line + 2, endLine);
	    } else {
	      state.md.block.tokenize(state, startLine, endLine, true);
	    }

	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

	    state.blkIndent = state.listIndent;
	    state.listIndent = oldListIndent;
	    state.tShift[startLine] = oldTShift;
	    state.sCount[startLine] = oldSCount;
	    state.tight = oldTight;

	    token        = state.push('list_item_close', 'li', -1);
	    token.markup = String.fromCharCode(markerCharCode);

	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];

	    if (nextLine >= endLine) { break; }

	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.sCount[nextLine] < state.blkIndent) { break; }

	    // if it's indented more than 3 spaces, it should be a code block
	    if (state.sCount[startLine] - state.blkIndent >= 4) { break; }

	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	      start = state.bMarks[nextLine] + state.tShift[nextLine];
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }

	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }

	  // Finalize list
	  if (isOrdered) {
	    token = state.push('ordered_list_close', 'ol', -1);
	  } else {
	    token = state.push('bullet_list_close', 'ul', -1);
	  }
	  token.markup = String.fromCharCode(markerCharCode);

	  listLines[1] = nextLine;
	  state.line = nextLine;

	  state.parentType = oldParentType;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};

	var normalizeReference$2   = utils.normalizeReference;
	var isSpace$6              = utils.isSpace;


	var reference = function reference(state, startLine, _endLine, silent) {
	  var ch,
	      destEndPos,
	      destEndLineNo,
	      endLine,
	      href,
	      i,
	      l,
	      label,
	      labelEnd,
	      oldParentType,
	      res,
	      start,
	      str,
	      terminate,
	      terminatorRules,
	      title,
	      lines = 0,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine],
	      nextLine = startLine + 1;

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

	  // Simple check to quickly interrupt scan on [link](url) at the start of line.
	  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
	  while (++pos < max) {
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
	        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
	      if (pos + 1 === max) { return false; }
	      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
	      break;
	    }
	  }

	  endLine = state.lineMax;

	  // jump line-by-line until empty one or EOF
	  terminatorRules = state.md.block.ruler.getRules('reference');

	  oldParentType = state.parentType;
	  state.parentType = 'reference';

	  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	    // this would be a code block normally, but after paragraph
	    // it's considered a lazy continuation regardless of what's there
	    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

	    // quirk for blockquotes, this line should already be checked by that rule
	    if (state.sCount[nextLine] < 0) { continue; }

	    // Some tags can terminate paragraph without empty line.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	  }

	  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	  max = str.length;

	  for (pos = 1; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x5B /* [ */) {
	      return false;
	    } else if (ch === 0x5D /* ] */) {
	      labelEnd = pos;
	      break;
	    } else if (ch === 0x0A /* \n */) {
	      lines++;
	    } else if (ch === 0x5C /* \ */) {
	      pos++;
	      if (pos < max && str.charCodeAt(pos) === 0x0A) {
	        lines++;
	      }
	    }
	  }

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x0A) {
	      lines++;
	    } else if (isSpace$6(ch)) ; else {
	      break;
	    }
	  }

	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  res = state.md.helpers.parseLinkDestination(str, pos, max);
	  if (!res.ok) { return false; }

	  href = state.md.normalizeLink(res.str);
	  if (!state.md.validateLink(href)) { return false; }

	  pos = res.pos;
	  lines += res.lines;

	  // save cursor state, we could require to rollback later
	  destEndPos = pos;
	  destEndLineNo = lines;

	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (; pos < max; pos++) {
	    ch = str.charCodeAt(pos);
	    if (ch === 0x0A) {
	      lines++;
	    } else if (isSpace$6(ch)) ; else {
	      break;
	    }
	  }

	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  res = state.md.helpers.parseLinkTitle(str, pos, max);
	  if (pos < max && start !== pos && res.ok) {
	    title = res.str;
	    pos = res.pos;
	    lines += res.lines;
	  } else {
	    title = '';
	    pos = destEndPos;
	    lines = destEndLineNo;
	  }

	  // skip trailing spaces until the rest of the line
	  while (pos < max) {
	    ch = str.charCodeAt(pos);
	    if (!isSpace$6(ch)) { break; }
	    pos++;
	  }

	  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
	    if (title) {
	      // garbage at the end of the line after title,
	      // but it could still be a valid reference if we roll back
	      title = '';
	      pos = destEndPos;
	      lines = destEndLineNo;
	      while (pos < max) {
	        ch = str.charCodeAt(pos);
	        if (!isSpace$6(ch)) { break; }
	        pos++;
	      }
	    }
	  }

	  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
	    // garbage at the end of the line
	    return false;
	  }

	  label = normalizeReference$2(str.slice(1, labelEnd));
	  if (!label) {
	    // CommonMark 0.20 disallows empty labels
	    return false;
	  }

	  // Reference can not terminate anything. This check is for safety only.
	  /*istanbul ignore if*/
	  if (silent) { return true; }

	  if (typeof state.env.references === 'undefined') {
	    state.env.references = {};
	  }
	  if (typeof state.env.references[label] === 'undefined') {
	    state.env.references[label] = { title: title, href: href };
	  }

	  state.parentType = oldParentType;

	  state.line = startLine + lines + 1;
	  return true;
	};

	// List of valid html blocks names, accorting to commonmark spec


	var html_blocks = [
	  'address',
	  'article',
	  'aside',
	  'base',
	  'basefont',
	  'blockquote',
	  'body',
	  'caption',
	  'center',
	  'col',
	  'colgroup',
	  'dd',
	  'details',
	  'dialog',
	  'dir',
	  'div',
	  'dl',
	  'dt',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'frame',
	  'frameset',
	  'h1',
	  'h2',
	  'h3',
	  'h4',
	  'h5',
	  'h6',
	  'head',
	  'header',
	  'hr',
	  'html',
	  'iframe',
	  'legend',
	  'li',
	  'link',
	  'main',
	  'menu',
	  'menuitem',
	  'nav',
	  'noframes',
	  'ol',
	  'optgroup',
	  'option',
	  'p',
	  'param',
	  'section',
	  'source',
	  'summary',
	  'table',
	  'tbody',
	  'td',
	  'tfoot',
	  'th',
	  'thead',
	  'title',
	  'tr',
	  'track',
	  'ul'
	];

	// Regexps to match html elements

	var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

	var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
	var single_quoted = "'[^']*'";
	var double_quoted = '"[^"]*"';

	var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

	var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

	var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

	var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
	var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
	var processing  = '<[?][\\s\\S]*?[?]>';
	var declaration = '<![A-Z]+\\s+[^>]*>';
	var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

	var HTML_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
	                        '|' + processing + '|' + declaration + '|' + cdata + ')');
	var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

	var HTML_TAG_RE_1 = HTML_TAG_RE$1;
	var HTML_OPEN_CLOSE_TAG_RE_1 = HTML_OPEN_CLOSE_TAG_RE$1;

	var html_re = {
		HTML_TAG_RE: HTML_TAG_RE_1,
		HTML_OPEN_CLOSE_TAG_RE: HTML_OPEN_CLOSE_TAG_RE_1
	};

	var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;

	// An array of opening and corresponding closing sequences for html tags,
	// last argument defines whether it can terminate a paragraph or not
	//
	var HTML_SEQUENCES = [
	  [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ],
	  [ /^<!--/,        /-->/,   true ],
	  [ /^<\?/,         /\?>/,   true ],
	  [ /^<![A-Z]/,     />/,     true ],
	  [ /^<!\[CDATA\[/, /\]\]>/, true ],
	  [ new RegExp('^</?(' + html_blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
	  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
	];


	var html_block = function html_block(state, startLine, endLine, silent) {
	  var i, nextLine, token, lineText,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  if (!state.md.options.html) { return false; }

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  lineText = state.src.slice(pos, max);

	  for (i = 0; i < HTML_SEQUENCES.length; i++) {
	    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
	  }

	  if (i === HTML_SEQUENCES.length) { return false; }

	  if (silent) {
	    // true if this sequence can be a terminator, false otherwise
	    return HTML_SEQUENCES[i][2];
	  }

	  nextLine = startLine + 1;

	  // If we are here - we detected HTML block.
	  // Let's roll down till block end.
	  if (!HTML_SEQUENCES[i][1].test(lineText)) {
	    for (; nextLine < endLine; nextLine++) {
	      if (state.sCount[nextLine] < state.blkIndent) { break; }

	      pos = state.bMarks[nextLine] + state.tShift[nextLine];
	      max = state.eMarks[nextLine];
	      lineText = state.src.slice(pos, max);

	      if (HTML_SEQUENCES[i][1].test(lineText)) {
	        if (lineText.length !== 0) { nextLine++; }
	        break;
	      }
	    }
	  }

	  state.line = nextLine;

	  token         = state.push('html_block', '', 0);
	  token.map     = [ startLine, nextLine ];
	  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

	  return true;
	};

	var isSpace$5 = utils.isSpace;


	var heading = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp, token,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  ch  = state.src.charCodeAt(pos);

	  if (ch !== 0x23/* # */ || pos >= max) { return false; }

	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }

	  if (level > 6 || (pos < max && !isSpace$5(ch))) { return false; }

	  if (silent) { return true; }

	  // Let's cut tails like '    ###  ' from the end of string

	  max = state.skipSpacesBack(max, pos);
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
	    max = tmp;
	  }

	  state.line = startLine + 1;

	  token        = state.push('heading_open', 'h' + String(level), 1);
	  token.markup = '########'.slice(0, level);
	  token.map    = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = state.src.slice(pos, max).trim();
	  token.map      = [ startLine, state.line ];
	  token.children = [];

	  token        = state.push('heading_close', 'h' + String(level), -1);
	  token.markup = '########'.slice(0, level);

	  return true;
	};

	// lheading (---, ===)


	var lheading = function lheading(state, startLine, endLine/*, silent*/) {
	  var content, terminate, i, l, token, pos, max, level, marker,
	      nextLine = startLine + 1, oldParentType,
	      terminatorRules = state.md.block.ruler.getRules('paragraph');

	  // if it's indented more than 3 spaces, it should be a code block
	  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

	  oldParentType = state.parentType;
	  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

	  // jump line-by-line until empty one or EOF
	  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	    // this would be a code block normally, but after paragraph
	    // it's considered a lazy continuation regardless of what's there
	    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

	    //
	    // Check for underline in setext header
	    //
	    if (state.sCount[nextLine] >= state.blkIndent) {
	      pos = state.bMarks[nextLine] + state.tShift[nextLine];
	      max = state.eMarks[nextLine];

	      if (pos < max) {
	        marker = state.src.charCodeAt(pos);

	        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
	          pos = state.skipChars(pos, marker);
	          pos = state.skipSpaces(pos);

	          if (pos >= max) {
	            level = (marker === 0x3D/* = */ ? 1 : 2);
	            break;
	          }
	        }
	      }
	    }

	    // quirk for blockquotes, this line should already be checked by that rule
	    if (state.sCount[nextLine] < 0) { continue; }

	    // Some tags can terminate paragraph without empty line.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	  }

	  if (!level) {
	    // Didn't find valid underline
	    return false;
	  }

	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

	  state.line = nextLine + 1;

	  token          = state.push('heading_open', 'h' + String(level), 1);
	  token.markup   = String.fromCharCode(marker);
	  token.map      = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = content;
	  token.map      = [ startLine, state.line - 1 ];
	  token.children = [];

	  token          = state.push('heading_close', 'h' + String(level), -1);
	  token.markup   = String.fromCharCode(marker);

	  state.parentType = oldParentType;

	  return true;
	};

	// Paragraph


	var paragraph = function paragraph(state, startLine/*, endLine*/) {
	  var content, terminate, i, l, token, oldParentType,
	      nextLine = startLine + 1,
	      terminatorRules = state.md.block.ruler.getRules('paragraph'),
	      endLine = state.lineMax;

	  oldParentType = state.parentType;
	  state.parentType = 'paragraph';

	  // jump line-by-line until empty one or EOF
	  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	    // this would be a code block normally, but after paragraph
	    // it's considered a lazy continuation regardless of what's there
	    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

	    // quirk for blockquotes, this line should already be checked by that rule
	    if (state.sCount[nextLine] < 0) { continue; }

	    // Some tags can terminate paragraph without empty line.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	  }

	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

	  state.line = nextLine;

	  token          = state.push('paragraph_open', 'p', 1);
	  token.map      = [ startLine, state.line ];

	  token          = state.push('inline', '', 0);
	  token.content  = content;
	  token.map      = [ startLine, state.line ];
	  token.children = [];

	  token          = state.push('paragraph_close', 'p', -1);

	  state.parentType = oldParentType;

	  return true;
	};

	var isSpace$4 = utils.isSpace;


	function StateBlock(src, md, env, tokens) {
	  var ch, s, start, pos, len, indent, offset, indent_found;

	  this.src = src;

	  // link to parser instance
	  this.md     = md;

	  this.env = env;

	  //
	  // Internal state vartiables
	  //

	  this.tokens = tokens;

	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
	  this.sCount = [];  // indents for each line (tabs expanded)

	  // An amount of virtual spaces (tabs expanded) between beginning
	  // of each line (bMarks) and real beginning of that line.
	  //
	  // It exists only as a hack because blockquotes override bMarks
	  // losing information in the process.
	  //
	  // It's used only when expanding tabs, you can think about it as
	  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
	  // means first tab should be expanded to 4-21%4 === 3 spaces.
	  //
	  this.bsCount = [];

	  // block parser variables
	  this.blkIndent  = 0; // required block content indent (for example, if we are
	                       // inside a list, it would be positioned after list marker)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
	  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

	  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
	  // used in lists to determine if they interrupt a paragraph
	  this.parentType = 'root';

	  this.level = 0;

	  // renderer
	  this.result = '';

	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent_found = false;

	  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);

	    if (!indent_found) {
	      if (isSpace$4(ch)) {
	        indent++;

	        if (ch === 0x09) {
	          offset += 4 - offset % 4;
	        } else {
	          offset++;
	        }
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }

	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);
	      this.sCount.push(offset);
	      this.bsCount.push(0);

	      indent_found = false;
	      indent = 0;
	      offset = 0;
	      start = pos + 1;
	    }
	  }

	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);
	  this.sCount.push(0);
	  this.bsCount.push(0);

	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}

	// Push new token to "stream".
	//
	StateBlock.prototype.push = function (type, tag, nesting) {
	  var token$1 = new token(type, tag, nesting);
	  token$1.block = true;

	  if (nesting < 0) { this.level--; } // closing tag
	  token$1.level = this.level;
	  if (nesting > 0) { this.level++; } // opening tag

	  this.tokens.push(token$1);
	  return token$1;
	};

	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};

	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};

	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  var ch;

	  for (var max = this.src.length; pos < max; pos++) {
	    ch = this.src.charCodeAt(pos);
	    if (!isSpace$4(ch)) { break; }
	  }
	  return pos;
	};

	// Skip spaces from given position in reverse.
	StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
	  if (pos <= min) { return pos; }

	  while (pos > min) {
	    if (!isSpace$4(this.src.charCodeAt(--pos))) { return pos + 1; }
	  }
	  return pos;
	};

	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};

	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }

	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};

	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, lineIndent, ch, first, last, queue, lineStart,
	      line = begin;

	  if (begin >= end) {
	    return '';
	  }

	  queue = new Array(end - begin);

	  for (i = 0; line < end; line++, i++) {
	    lineIndent = 0;
	    lineStart = first = this.bMarks[line];

	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }

	    while (first < last && lineIndent < indent) {
	      ch = this.src.charCodeAt(first);

	      if (isSpace$4(ch)) {
	        if (ch === 0x09) {
	          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
	        } else {
	          lineIndent++;
	        }
	      } else if (first - lineStart < this.tShift[line]) {
	        // patched tShift masked characters to look like spaces (blockquotes, list markers)
	        lineIndent++;
	      } else {
	        break;
	      }

	      first++;
	    }

	    if (lineIndent > indent) {
	      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
	      // with indent=2 becomes '  \tfoobar'
	      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
	    } else {
	      queue[i] = this.src.slice(first, last);
	    }
	  }

	  return queue.join('');
	};

	// re-export Token class to use in block rules
	StateBlock.prototype.Token = token;


	var state_block = StateBlock;

	var _rules$1 = [
	  // First 2 params - rule name & source. Secondary array - list of rules,
	  // which can be terminated by this one.
	  [ 'table',      table,      [ 'paragraph', 'reference' ] ],
	  [ 'code',       code ],
	  [ 'fence',      fence,      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
	  [ 'blockquote', blockquote, [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
	  [ 'hr',         hr,         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
	  [ 'list',       list,       [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'reference',  reference ],
	  [ 'html_block', html_block, [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'heading',    heading,    [ 'paragraph', 'reference', 'blockquote' ] ],
	  [ 'lheading',   lheading ],
	  [ 'paragraph',  paragraph ]
	];


	/**
	 * new ParserBlock()
	 **/
	function ParserBlock() {
	  /**
	   * ParserBlock#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of block rules.
	   **/
	  this.ruler = new ruler();

	  for (var i = 0; i < _rules$1.length; i++) {
	    this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
	  }
	}


	// Generate tokens for input range
	//
	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var ok, i,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      line = startLine,
	      hasEmptyLines = false,
	      maxNesting = state.md.options.maxNesting;

	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) { break; }

	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.sCount[line] < state.blkIndent) { break; }

	    // If nesting level exceeded - skip tail to the end. That's not ordinary
	    // situation and we should not care about content.
	    if (state.level >= maxNesting) {
	      state.line = endLine;
	      break;
	    }

	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true

	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) { break; }
	    }

	    // set state.tight if we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;

	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }

	    line = state.line;

	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;
	      state.line = line;
	    }
	  }
	};


	/**
	 * ParserBlock.parse(str, md, env, outTokens)
	 *
	 * Process input string and push block tokens into `outTokens`
	 **/
	ParserBlock.prototype.parse = function (src, md, env, outTokens) {
	  var state;

	  if (!src) { return; }

	  state = new this.State(src, md, env, outTokens);

	  this.tokenize(state, state.line, state.lineMax);
	};


	ParserBlock.prototype.State = state_block;


	var parser_block = ParserBlock;

	// Skip text characters for text token, place those to pending buffer


	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions

	// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

	// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
	// http://spec.commonmark.org/0.15/#ascii-punctuation-character
	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x21/* ! */:
	    case 0x23/* # */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x26/* & */:
	    case 0x2A/* * */:
	    case 0x2B/* + */:
	    case 0x2D/* - */:
	    case 0x3A/* : */:
	    case 0x3C/* < */:
	    case 0x3D/* = */:
	    case 0x3E/* > */:
	    case 0x40/* @ */:
	    case 0x5B/* [ */:
	    case 0x5C/* \ */:
	    case 0x5D/* ] */:
	    case 0x5E/* ^ */:
	    case 0x5F/* _ */:
	    case 0x60/* ` */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x7E/* ~ */:
	      return true;
	    default:
	      return false;
	  }
	}

	var text = function text(state, silent) {
	  var pos = state.pos;

	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }

	  if (pos === state.pos) { return false; }

	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

	  state.pos = pos;

	  return true;
	};

	var isSpace$3 = utils.isSpace;


	var newline = function newline(state, silent) {
	  var pmax, max, ws, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

	  pmax = state.pending.length - 1;
	  max = state.posMax;

	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        // Find whitespaces tail of pending chars.
	        ws = pmax - 1;
	        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) { ws--; }

	        state.pending = state.pending.slice(0, ws);
	        state.push('hardbreak', 'br', 0);
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push('softbreak', 'br', 0);
	      }

	    } else {
	      state.push('softbreak', 'br', 0);
	    }
	  }

	  pos++;

	  // skip heading spaces for next line
	  while (pos < max && isSpace$3(state.src.charCodeAt(pos))) { pos++; }

	  state.pos = pos;
	  return true;
	};

	var isSpace$2 = utils.isSpace;

	var ESCAPED = [];

	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


	var _escape = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

	  pos++;

	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }

	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push('hardbreak', 'br', 0);
	      }

	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max) {
	        ch = state.src.charCodeAt(pos);
	        if (!isSpace$2(ch)) { break; }
	        pos++;
	      }

	      state.pos = pos;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};

	// Parse backticks


	var backticks = function backtick(state, silent) {
	  var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);

	  if (ch !== 0x60/* ` */) { return false; }

	  start = pos;
	  pos++;
	  max = state.posMax;

	  // scan marker length
	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

	  marker = state.src.slice(start, pos);
	  openerLength = marker.length;

	  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
	    if (!silent) { state.pending += marker; }
	    state.pos += openerLength;
	    return true;
	  }

	  matchStart = matchEnd = pos;

	  // Nothing found in the cache, scan until the end of the line (or until marker is found)
	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;

	    // scan marker length
	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

	    closerLength = matchEnd - matchStart;

	    if (closerLength === openerLength) {
	      // Found matching closer length.
	      if (!silent) {
	        token     = state.push('code_inline', 'code', 0);
	        token.markup  = marker;
	        token.content = state.src.slice(pos, matchStart)
	          .replace(/\n/g, ' ')
	          .replace(/^ (.+) $/, '$1');
	      }
	      state.pos = matchEnd;
	      return true;
	    }

	    // Some different length found, put it in cache as upper limit of where closer can be found
	    state.backticks[closerLength] = matchStart;
	  }

	  // Scanned through the end, didn't find anything
	  state.backticksScanned = true;

	  if (!silent) { state.pending += marker; }
	  state.pos += openerLength;
	  return true;
	};

	// ~~strike through~~


	// Insert each marker as a separate text token, and add it to delimiter list
	//
	var tokenize$1 = function strikethrough(state, silent) {
	  var i, scanned, token, len, ch,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (silent) { return false; }

	  if (marker !== 0x7E/* ~ */) { return false; }

	  scanned = state.scanDelims(state.pos, true);
	  len = scanned.length;
	  ch = String.fromCharCode(marker);

	  if (len < 2) { return false; }

	  if (len % 2) {
	    token         = state.push('text', '', 0);
	    token.content = ch;
	    len--;
	  }

	  for (i = 0; i < len; i += 2) {
	    token         = state.push('text', '', 0);
	    token.content = ch + ch;

	    state.delimiters.push({
	      marker: marker,
	      length: 0,     // disable "rule of 3" length checks meant for emphasis
	      token:  state.tokens.length - 1,
	      end:    -1,
	      open:   scanned.can_open,
	      close:  scanned.can_close
	    });
	  }

	  state.pos += scanned.length;

	  return true;
	};


	function postProcess$1(state, delimiters) {
	  var i, j,
	      startDelim,
	      endDelim,
	      token,
	      loneMarkers = [],
	      max = delimiters.length;

	  for (i = 0; i < max; i++) {
	    startDelim = delimiters[i];

	    if (startDelim.marker !== 0x7E/* ~ */) {
	      continue;
	    }

	    if (startDelim.end === -1) {
	      continue;
	    }

	    endDelim = delimiters[startDelim.end];

	    token         = state.tokens[startDelim.token];
	    token.type    = 's_open';
	    token.tag     = 's';
	    token.nesting = 1;
	    token.markup  = '~~';
	    token.content = '';

	    token         = state.tokens[endDelim.token];
	    token.type    = 's_close';
	    token.tag     = 's';
	    token.nesting = -1;
	    token.markup  = '~~';
	    token.content = '';

	    if (state.tokens[endDelim.token - 1].type === 'text' &&
	        state.tokens[endDelim.token - 1].content === '~') {

	      loneMarkers.push(endDelim.token - 1);
	    }
	  }

	  // If a marker sequence has an odd number of characters, it's splitted
	  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
	  // start of the sequence.
	  //
	  // So, we have to move all those markers after subsequent s_close tags.
	  //
	  while (loneMarkers.length) {
	    i = loneMarkers.pop();
	    j = i + 1;

	    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
	      j++;
	    }

	    j--;

	    if (i !== j) {
	      token = state.tokens[j];
	      state.tokens[j] = state.tokens[i];
	      state.tokens[i] = token;
	    }
	  }
	}


	// Walk through delimiter list and replace text tokens with tags
	//
	var postProcess_1$1 = function strikethrough(state) {
	  var curr,
	      tokens_meta = state.tokens_meta,
	      max = state.tokens_meta.length;

	  postProcess$1(state, state.delimiters);

	  for (curr = 0; curr < max; curr++) {
	    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
	      postProcess$1(state, tokens_meta[curr].delimiters);
	    }
	  }
	};

	var strikethrough = {
		tokenize: tokenize$1,
		postProcess: postProcess_1$1
	};

	// Process *this* and _that_


	// Insert each marker as a separate text token, and add it to delimiter list
	//
	var tokenize = function emphasis(state, silent) {
	  var i, scanned, token,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (silent) { return false; }

	  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

	  scanned = state.scanDelims(state.pos, marker === 0x2A);

	  for (i = 0; i < scanned.length; i++) {
	    token         = state.push('text', '', 0);
	    token.content = String.fromCharCode(marker);

	    state.delimiters.push({
	      // Char code of the starting marker (number).
	      //
	      marker: marker,

	      // Total length of these series of delimiters.
	      //
	      length: scanned.length,

	      // A position of the token this delimiter corresponds to.
	      //
	      token:  state.tokens.length - 1,

	      // If this delimiter is matched as a valid opener, `end` will be
	      // equal to its position, otherwise it's `-1`.
	      //
	      end:    -1,

	      // Boolean flags that determine if this delimiter could open or close
	      // an emphasis.
	      //
	      open:   scanned.can_open,
	      close:  scanned.can_close
	    });
	  }

	  state.pos += scanned.length;

	  return true;
	};


	function postProcess(state, delimiters) {
	  var i,
	      startDelim,
	      endDelim,
	      token,
	      ch,
	      isStrong,
	      max = delimiters.length;

	  for (i = max - 1; i >= 0; i--) {
	    startDelim = delimiters[i];

	    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
	      continue;
	    }

	    // Process only opening markers
	    if (startDelim.end === -1) {
	      continue;
	    }

	    endDelim = delimiters[startDelim.end];

	    // If the previous delimiter has the same marker and is adjacent to this one,
	    // merge those into one strong delimiter.
	    //
	    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
	    //
	    isStrong = i > 0 &&
	               delimiters[i - 1].end === startDelim.end + 1 &&
	               // check that first two markers match and adjacent
	               delimiters[i - 1].marker === startDelim.marker &&
	               delimiters[i - 1].token === startDelim.token - 1 &&
	               // check that last two markers are adjacent (we can safely assume they match)
	               delimiters[startDelim.end + 1].token === endDelim.token + 1;

	    ch = String.fromCharCode(startDelim.marker);

	    token         = state.tokens[startDelim.token];
	    token.type    = isStrong ? 'strong_open' : 'em_open';
	    token.tag     = isStrong ? 'strong' : 'em';
	    token.nesting = 1;
	    token.markup  = isStrong ? ch + ch : ch;
	    token.content = '';

	    token         = state.tokens[endDelim.token];
	    token.type    = isStrong ? 'strong_close' : 'em_close';
	    token.tag     = isStrong ? 'strong' : 'em';
	    token.nesting = -1;
	    token.markup  = isStrong ? ch + ch : ch;
	    token.content = '';

	    if (isStrong) {
	      state.tokens[delimiters[i - 1].token].content = '';
	      state.tokens[delimiters[startDelim.end + 1].token].content = '';
	      i--;
	    }
	  }
	}


	// Walk through delimiter list and replace text tokens with tags
	//
	var postProcess_1 = function emphasis(state) {
	  var curr,
	      tokens_meta = state.tokens_meta,
	      max = state.tokens_meta.length;

	  postProcess(state, state.delimiters);

	  for (curr = 0; curr < max; curr++) {
	    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
	      postProcess(state, tokens_meta[curr].delimiters);
	    }
	  }
	};

	var emphasis = {
		tokenize: tokenize,
		postProcess: postProcess_1
	};

	var normalizeReference$1   = utils.normalizeReference;
	var isSpace$1              = utils.isSpace;


	var link = function link(state, silent) {
	  var attrs,
	      code,
	      label,
	      labelEnd,
	      labelStart,
	      pos,
	      res,
	      ref,
	      token,
	      href = '',
	      title = '',
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos,
	      parseReference = true;

	  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

	  labelStart = state.pos + 1;
	  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // might have found a valid shortcut link, disable reference parsing
	    parseReference = false;

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (!isSpace$1(code) && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
	    if (res.ok) {
	      href = state.md.normalizeLink(res.str);
	      if (state.md.validateLink(href)) {
	        pos = res.pos;
	      } else {
	        href = '';
	      }

	      // [link](  <href>  "title"  )
	      //                ^^ skipping these spaces
	      start = pos;
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (!isSpace$1(code) && code !== 0x0A) { break; }
	      }

	      // [link](  <href>  "title"  )
	      //                  ^^^^^^^ parsing link title
	      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
	      if (pos < max && start !== pos && res.ok) {
	        title = res.str;
	        pos = res.pos;

	        // [link](  <href>  "title"  )
	        //                         ^^ skipping these spaces
	        for (; pos < max; pos++) {
	          code = state.src.charCodeAt(pos);
	          if (!isSpace$1(code) && code !== 0x0A) { break; }
	        }
	      }
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      // parsing a valid shortcut link failed, fallback to reference
	      parseReference = true;
	    }
	    pos++;
	  }

	  if (parseReference) {
	    //
	    // Link reference
	    //
	    if (typeof state.env.references === 'undefined') { return false; }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = state.md.helpers.parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = labelEnd + 1;
	      }
	    } else {
	      pos = labelEnd + 1;
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }

	    ref = state.env.references[normalizeReference$1(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    token        = state.push('link_open', 'a', 1);
	    token.attrs  = attrs = [ [ 'href', href ] ];
	    if (title) {
	      attrs.push([ 'title', title ]);
	    }

	    state.md.inline.tokenize(state);

	    token        = state.push('link_close', 'a', -1);
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};

	var normalizeReference   = utils.normalizeReference;
	var isSpace              = utils.isSpace;


	var image = function image(state, silent) {
	  var attrs,
	      code,
	      content,
	      label,
	      labelEnd,
	      labelStart,
	      pos,
	      ref,
	      res,
	      title,
	      token,
	      tokens,
	      start,
	      href = '',
	      oldPos = state.pos,
	      max = state.posMax;

	  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
	  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

	  labelStart = state.pos + 2;
	  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (!isSpace(code) && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
	    if (res.ok) {
	      href = state.md.normalizeLink(res.str);
	      if (state.md.validateLink(href)) {
	        pos = res.pos;
	      } else {
	        href = '';
	      }
	    }

	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (!isSpace(code) && code !== 0x0A) { break; }
	    }

	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
	    if (pos < max && start !== pos && res.ok) {
	      title = res.str;
	      pos = res.pos;

	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (!isSpace(code) && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //
	    if (typeof state.env.references === 'undefined') { return false; }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = state.md.helpers.parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = labelEnd + 1;
	      }
	    } else {
	      pos = labelEnd + 1;
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }

	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    content = state.src.slice(labelStart, labelEnd);

	    state.md.inline.parse(
	      content,
	      state.md,
	      state.env,
	      tokens = []
	    );

	    token          = state.push('image', 'img', 0);
	    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
	    token.children = tokens;
	    token.content  = content;

	    if (title) {
	      attrs.push([ 'title', title ]);
	    }
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};

	// Process autolinks '<protocol:...>'


	/*eslint max-len:0*/
	var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
	var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


	var autolink = function autolink(state, silent) {
	  var url, fullUrl, token, ch, start, max,
	      pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  start = state.pos;
	  max = state.posMax;

	  for (;;) {
	    if (++pos >= max) { return false; }

	    ch = state.src.charCodeAt(pos);

	    if (ch === 0x3C /* < */) { return false; }
	    if (ch === 0x3E /* > */) { break; }
	  }

	  url = state.src.slice(start + 1, pos);

	  if (AUTOLINK_RE.test(url)) {
	    fullUrl = state.md.normalizeLink(url);
	    if (!state.md.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      token         = state.push('link_open', 'a', 1);
	      token.attrs   = [ [ 'href', fullUrl ] ];
	      token.markup  = 'autolink';
	      token.info    = 'auto';

	      token         = state.push('text', '', 0);
	      token.content = state.md.normalizeLinkText(url);

	      token         = state.push('link_close', 'a', -1);
	      token.markup  = 'autolink';
	      token.info    = 'auto';
	    }

	    state.pos += url.length + 2;
	    return true;
	  }

	  if (EMAIL_RE.test(url)) {
	    fullUrl = state.md.normalizeLink('mailto:' + url);
	    if (!state.md.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      token         = state.push('link_open', 'a', 1);
	      token.attrs   = [ [ 'href', fullUrl ] ];
	      token.markup  = 'autolink';
	      token.info    = 'auto';

	      token         = state.push('text', '', 0);
	      token.content = state.md.normalizeLinkText(url);

	      token         = state.push('link_close', 'a', -1);
	      token.markup  = 'autolink';
	      token.info    = 'auto';
	    }

	    state.pos += url.length + 2;
	    return true;
	  }

	  return false;
	};

	var HTML_TAG_RE = html_re.HTML_TAG_RE;


	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}


	var html_inline = function html_inline(state, silent) {
	  var ch, match, max, token,
	      pos = state.pos;

	  if (!state.md.options.html) { return false; }

	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }

	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }

	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }

	  if (!silent) {
	    token         = state.push('html_inline', '', 0);
	    token.content = state.src.slice(pos, pos + match[0].length);
	  }
	  state.pos += match[0].length;
	  return true;
	};

	var has               = utils.has;
	var isValidEntityCode = utils.isValidEntityCode;
	var fromCodePoint     = utils.fromCodePoint;


	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


	var entity = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);

	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }

	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};

	// For each opening emphasis-like marker find a matching closing one


	function processDelimiters(state, delimiters) {
	  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
	      isOddMatch, lastJump,
	      openersBottom = {},
	      max = delimiters.length;

	  if (!max) { return; }

	  // headerIdx is the first delimiter of the current (where closer is) delimiter run
	  var headerIdx = 0;
	  var lastTokenIdx = -2; // needs any value lower than -1
	  var jumps = [];

	  for (closerIdx = 0; closerIdx < max; closerIdx++) {
	    closer = delimiters[closerIdx];

	    jumps.push(0);

	    // markers belong to same delimiter run if:
	    //  - they have adjacent tokens
	    //  - AND markers are the same
	    //
	    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
	      headerIdx = closerIdx;
	    }

	    lastTokenIdx = closer.token;

	    // Length is only used for emphasis-specific "rule of 3",
	    // if it's not defined (in strikethrough or 3rd party plugins),
	    // we can default it to 0 to disable those checks.
	    //
	    closer.length = closer.length || 0;

	    if (!closer.close) { continue; }

	    // Previously calculated lower bounds (previous fails)
	    // for each marker, each delimiter length modulo 3,
	    // and for whether this closer can be an opener;
	    // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
	    if (!openersBottom.hasOwnProperty(closer.marker)) {
	      openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
	    }

	    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];

	    openerIdx = headerIdx - jumps[headerIdx] - 1;

	    newMinOpenerIdx = openerIdx;

	    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
	      opener = delimiters[openerIdx];

	      if (opener.marker !== closer.marker) { continue; }

	      if (opener.open && opener.end < 0) {

	        isOddMatch = false;

	        // from spec:
	        //
	        // If one of the delimiters can both open and close emphasis, then the
	        // sum of the lengths of the delimiter runs containing the opening and
	        // closing delimiters must not be a multiple of 3 unless both lengths
	        // are multiples of 3.
	        //
	        if (opener.close || closer.open) {
	          if ((opener.length + closer.length) % 3 === 0) {
	            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
	              isOddMatch = true;
	            }
	          }
	        }

	        if (!isOddMatch) {
	          // If previous delimiter cannot be an opener, we can safely skip
	          // the entire sequence in future checks. This is required to make
	          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
	          //
	          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
	            jumps[openerIdx - 1] + 1 :
	            0;

	          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
	          jumps[openerIdx] = lastJump;

	          closer.open  = false;
	          opener.end   = closerIdx;
	          opener.close = false;
	          newMinOpenerIdx = -1;
	          // treat next token as start of run,
	          // it optimizes skips in **<...>**a**<...>** pathological case
	          lastTokenIdx = -2;
	          break;
	        }
	      }
	    }

	    if (newMinOpenerIdx !== -1) {
	      // If match for this delimiter run failed, we want to set lower bound for
	      // future lookups. This is required to make sure algorithm has linear
	      // complexity.
	      //
	      // See details here:
	      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
	      //
	      openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
	    }
	  }
	}


	var balance_pairs = function link_pairs(state) {
	  var curr,
	      tokens_meta = state.tokens_meta,
	      max = state.tokens_meta.length;

	  processDelimiters(state, state.delimiters);

	  for (curr = 0; curr < max; curr++) {
	    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
	      processDelimiters(state, tokens_meta[curr].delimiters);
	    }
	  }
	};

	// Clean up tokens after emphasis and strikethrough postprocessing:


	var text_collapse = function text_collapse(state) {
	  var curr, last,
	      level = 0,
	      tokens = state.tokens,
	      max = state.tokens.length;

	  for (curr = last = 0; curr < max; curr++) {
	    // re-calculate levels after emphasis/strikethrough turns some text nodes
	    // into opening/closing tags
	    if (tokens[curr].nesting < 0) { level--; } // closing tag
	    tokens[curr].level = level;
	    if (tokens[curr].nesting > 0) { level++; } // opening tag

	    if (tokens[curr].type === 'text' &&
	        curr + 1 < max &&
	        tokens[curr + 1].type === 'text') {

	      // collapse two adjacent text nodes
	      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
	    } else {
	      if (curr !== last) { tokens[last] = tokens[curr]; }

	      last++;
	    }
	  }

	  if (curr !== last) {
	    tokens.length = last;
	  }
	};

	var isWhiteSpace   = utils.isWhiteSpace;
	var isPunctChar    = utils.isPunctChar;
	var isMdAsciiPunct = utils.isMdAsciiPunct;


	function StateInline(src, md, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.md = md;
	  this.tokens = outTokens;
	  this.tokens_meta = Array(outTokens.length);

	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;

	  // Stores { start: end } pairs. Useful for backtrack
	  // optimization of pairs parse (emphasis, strikes).
	  this.cache = {};

	  // List of emphasis-like delimiters for current tag
	  this.delimiters = [];

	  // Stack of delimiter lists for upper level tags
	  this._prev_delimiters = [];

	  // backtick length => last seen position
	  this.backticks = {};
	  this.backticksScanned = false;
	}


	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  var token$1 = new token('text', '', 0);
	  token$1.content = this.pending;
	  token$1.level = this.pendingLevel;
	  this.tokens.push(token$1);
	  this.pending = '';
	  return token$1;
	};


	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (type, tag, nesting) {
	  if (this.pending) {
	    this.pushPending();
	  }

	  var token$1 = new token(type, tag, nesting);
	  var token_meta = null;

	  if (nesting < 0) {
	    // closing tag
	    this.level--;
	    this.delimiters = this._prev_delimiters.pop();
	  }

	  token$1.level = this.level;

	  if (nesting > 0) {
	    // opening tag
	    this.level++;
	    this._prev_delimiters.push(this.delimiters);
	    this.delimiters = [];
	    token_meta = { delimiters: this.delimiters };
	  }

	  this.pendingLevel = this.level;
	  this.tokens.push(token$1);
	  this.tokens_meta.push(token_meta);
	  return token$1;
	};


	// Scan a sequence of emphasis-like markers, and determine whether
	// it can start an emphasis sequence or end an emphasis sequence.
	//
	//  - start - position to scan from (it should point at a valid marker);
	//  - canSplitWord - determine if these markers can be found inside a word
	//
	StateInline.prototype.scanDelims = function (start, canSplitWord) {
	  var pos = start, lastChar, nextChar, count, can_open, can_close,
	      isLastWhiteSpace, isLastPunctChar,
	      isNextWhiteSpace, isNextPunctChar,
	      left_flanking = true,
	      right_flanking = true,
	      max = this.posMax,
	      marker = this.src.charCodeAt(start);

	  // treat beginning of the line as a whitespace
	  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

	  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

	  count = pos - start;

	  // treat end of the line as a whitespace
	  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

	  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
	  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

	  isLastWhiteSpace = isWhiteSpace(lastChar);
	  isNextWhiteSpace = isWhiteSpace(nextChar);

	  if (isNextWhiteSpace) {
	    left_flanking = false;
	  } else if (isNextPunctChar) {
	    if (!(isLastWhiteSpace || isLastPunctChar)) {
	      left_flanking = false;
	    }
	  }

	  if (isLastWhiteSpace) {
	    right_flanking = false;
	  } else if (isLastPunctChar) {
	    if (!(isNextWhiteSpace || isNextPunctChar)) {
	      right_flanking = false;
	    }
	  }

	  if (!canSplitWord) {
	    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
	    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
	  } else {
	    can_open  = left_flanking;
	    can_close = right_flanking;
	  }

	  return {
	    can_open:  can_open,
	    can_close: can_close,
	    length:    count
	  };
	};


	// re-export Token class to use in block rules
	StateInline.prototype.Token = token;


	var state_inline = StateInline;

	////////////////////////////////////////////////////////////////////////////////
	// Parser rules

	var _rules = [
	  [ 'text',            text ],
	  [ 'newline',         newline ],
	  [ 'escape',          _escape ],
	  [ 'backticks',       backticks ],
	  [ 'strikethrough',   strikethrough.tokenize ],
	  [ 'emphasis',        emphasis.tokenize ],
	  [ 'link',            link ],
	  [ 'image',           image ],
	  [ 'autolink',        autolink ],
	  [ 'html_inline',     html_inline ],
	  [ 'entity',          entity ]
	];

	var _rules2 = [
	  [ 'balance_pairs',   balance_pairs ],
	  [ 'strikethrough',   strikethrough.postProcess ],
	  [ 'emphasis',        emphasis.postProcess ],
	  [ 'text_collapse',   text_collapse ]
	];


	/**
	 * new ParserInline()
	 **/
	function ParserInline() {
	  var i;

	  /**
	   * ParserInline#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of inline rules.
	   **/
	  this.ruler = new ruler();

	  for (i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }

	  /**
	   * ParserInline#ruler2 -> Ruler
	   *
	   * [[Ruler]] instance. Second ruler used for post-processing
	   * (e.g. in emphasis-like rules).
	   **/
	  this.ruler2 = new ruler();

	  for (i = 0; i < _rules2.length; i++) {
	    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
	  }
	}


	// Skip single token by running all rules in validation mode;
	// returns `true` if any rule reported success
	//
	ParserInline.prototype.skipToken = function (state) {
	  var ok, i, pos = state.pos,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      maxNesting = state.md.options.maxNesting,
	      cache = state.cache;


	  if (typeof cache[pos] !== 'undefined') {
	    state.pos = cache[pos];
	    return;
	  }

	  if (state.level < maxNesting) {
	    for (i = 0; i < len; i++) {
	      // Increment state.level and decrement it later to limit recursion.
	      // It's harmless to do here, because no tokens are created. But ideally,
	      // we'd need a separate private state variable for this purpose.
	      //
	      state.level++;
	      ok = rules[i](state, true);
	      state.level--;

	      if (ok) { break; }
	    }
	  } else {
	    // Too much nesting, just skip until the end of the paragraph.
	    //
	    // NOTE: this will cause links to behave incorrectly in the following case,
	    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
	    //
	    //       [[[[[[[[[[[[[[[[[[[[[foo]()
	    //
	    // TODO: remove this workaround when CM standard will allow nested links
	    //       (we can replace it by preventing links from being parsed in
	    //       validation mode)
	    //
	    state.pos = state.posMax;
	  }

	  if (!ok) { state.pos++; }
	  cache[pos] = state.pos;
	};


	// Generate tokens for input range
	//
	ParserInline.prototype.tokenize = function (state) {
	  var ok, i,
	      rules = this.ruler.getRules(''),
	      len = rules.length,
	      end = state.posMax,
	      maxNesting = state.md.options.maxNesting;

	  while (state.pos < end) {
	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true

	    if (state.level < maxNesting) {
	      for (i = 0; i < len; i++) {
	        ok = rules[i](state, false);
	        if (ok) { break; }
	      }
	    }

	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }

	    state.pending += state.src[state.pos++];
	  }

	  if (state.pending) {
	    state.pushPending();
	  }
	};


	/**
	 * ParserInline.parse(str, md, env, outTokens)
	 *
	 * Process input string and push inline tokens into `outTokens`
	 **/
	ParserInline.prototype.parse = function (str, md, env, outTokens) {
	  var i, rules, len;
	  var state = new this.State(str, md, env, outTokens);

	  this.tokenize(state);

	  rules = this.ruler2.getRules('');
	  len = rules.length;

	  for (i = 0; i < len; i++) {
	    rules[i](state);
	  }
	};


	ParserInline.prototype.State = state_inline;


	var parser_inline = ParserInline;

	var re = function (opts) {
	  var re = {};

	  // Use direct extract instead of `regenerate` to reduse browserified size
	  re.src_Any = regex$3.source;
	  re.src_Cc  = regex$2.source;
	  re.src_Z   = regex.source;
	  re.src_P   = regex$4.source;

	  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
	  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

	  // \p{\Z\Cc} (white spaces + control)
	  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

	  // Experimental. List of chars, completely prohibited in links
	  // because can separate it from other part of text
	  var text_separators = '[><\uff5c]';

	  // All possible word characters (everything without punctuation, spaces & controls)
	  // Defined via punctuation & spaces to save space
	  // Should be something like \p{\L\N\S\M} (\w but without `_`)
	  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
	  // The same as abothe but without [0-9]
	  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

	  ////////////////////////////////////////////////////////////////////////////////

	  re.src_ip4 =

	    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

	  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
	  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

	  re.src_port =

	    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

	  re.src_host_terminator =

	    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

	  re.src_path =

	    '(?:' +
	      '[/?#]' +
	        '(?:' +
	          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
	          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
	          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
	          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
	          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
	          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
	          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
	          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
	                                     // github has ... in commit range links,
	                                     // Restrict to
	                                     // - english
	                                     // - percent-encoded
	                                     // - parts of file path
	                                     // - params separator
	                                     // until more examples found.
	          '\\.(?!' + re.src_ZCc + '|[.]).|' +
	          (opts && opts['---'] ?
	            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
	            :
	            '\\-+|'
	          ) +
	          ',(?!' + re.src_ZCc + ').|' +       // allow `,,,` in paths
	          ';(?!' + re.src_ZCc + ').|' +       // allow `;` if not followed by space-like char
	          '\\!+(?!' + re.src_ZCc + '|[!]).|' +  // allow `!!!` in paths, but not at the end
	          '\\?(?!' + re.src_ZCc + '|[?]).' +
	        ')+' +
	      '|\\/' +
	    ')?';

	  // Allow anything in markdown spec, forbid quote (") at the first position
	  // because emails enclosed in quotes are far more common
	  re.src_email_name =

	    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

	  re.src_xn =

	    'xn--[a-z0-9\\-]{1,59}';

	  // More to read about domain names
	  // http://serverfault.com/questions/638260/

	  re.src_domain_root =

	    // Allow letters & digits (http://test1)
	    '(?:' +
	      re.src_xn +
	      '|' +
	      re.src_pseudo_letter + '{1,63}' +
	    ')';

	  re.src_domain =

	    '(?:' +
	      re.src_xn +
	      '|' +
	      '(?:' + re.src_pseudo_letter + ')' +
	      '|' +
	      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
	    ')';

	  re.src_host =

	    '(?:' +
	    // Don't need IP check, because digits are already allowed in normal domain names
	    //   src_ip4 +
	    // '|' +
	      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
	    ')';

	  re.tpl_host_fuzzy =

	    '(?:' +
	      re.src_ip4 +
	    '|' +
	      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
	    ')';

	  re.tpl_host_no_ip_fuzzy =

	    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

	  re.src_host_strict =

	    re.src_host + re.src_host_terminator;

	  re.tpl_host_fuzzy_strict =

	    re.tpl_host_fuzzy + re.src_host_terminator;

	  re.src_host_port_strict =

	    re.src_host + re.src_port + re.src_host_terminator;

	  re.tpl_host_port_fuzzy_strict =

	    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

	  re.tpl_host_port_no_ip_fuzzy_strict =

	    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


	  ////////////////////////////////////////////////////////////////////////////////
	  // Main rules

	  // Rude test fuzzy links by host, for quick deny
	  re.tpl_host_fuzzy_test =

	    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

	  re.tpl_email_fuzzy =

	      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
	      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

	  re.tpl_link_fuzzy =
	      // Fuzzy link can't be prepended with .:/\- and non punctuation.
	      // but can start with > (markdown blockquote)
	      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
	      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

	  re.tpl_link_no_ip_fuzzy =
	      // Fuzzy link can't be prepended with .:/\- and non punctuation.
	      // but can start with > (markdown blockquote)
	      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
	      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

	  return re;
	};

	////////////////////////////////////////////////////////////////////////////////
	// Helpers

	// Merge objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	function _class(obj) { return Object.prototype.toString.call(obj); }
	function isString(obj) { return _class(obj) === '[object String]'; }
	function isObject(obj) { return _class(obj) === '[object Object]'; }
	function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
	function isFunction(obj) { return _class(obj) === '[object Function]'; }


	function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

	////////////////////////////////////////////////////////////////////////////////


	var defaultOptions = {
	  fuzzyLink: true,
	  fuzzyEmail: true,
	  fuzzyIP: false
	};


	function isOptionsObj(obj) {
	  return Object.keys(obj || {}).reduce(function (acc, k) {
	    return acc || defaultOptions.hasOwnProperty(k);
	  }, false);
	}


	var defaultSchemas = {
	  'http:': {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.http) {
	        // compile lazily, because "host"-containing variables can change on tlds update.
	        self.re.http =  new RegExp(
	          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
	        );
	      }
	      if (self.re.http.test(tail)) {
	        return tail.match(self.re.http)[0].length;
	      }
	      return 0;
	    }
	  },
	  'https:':  'http:',
	  'ftp:':    'http:',
	  '//':      {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.no_http) {
	      // compile lazily, because "host"-containing variables can change on tlds update.
	        self.re.no_http =  new RegExp(
	          '^' +
	          self.re.src_auth +
	          // Don't allow single-level domains, because of false positives like '//test'
	          // with code comments
	          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
	          self.re.src_port +
	          self.re.src_host_terminator +
	          self.re.src_path,

	          'i'
	        );
	      }

	      if (self.re.no_http.test(tail)) {
	        // should not be `://` & `///`, that protects from errors in protocol name
	        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
	        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
	        return tail.match(self.re.no_http)[0].length;
	      }
	      return 0;
	    }
	  },
	  'mailto:': {
	    validate: function (text, pos, self) {
	      var tail = text.slice(pos);

	      if (!self.re.mailto) {
	        self.re.mailto =  new RegExp(
	          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
	        );
	      }
	      if (self.re.mailto.test(tail)) {
	        return tail.match(self.re.mailto)[0].length;
	      }
	      return 0;
	    }
	  }
	};

	/*eslint-disable max-len*/

	// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
	var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

	// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
	var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

	/*eslint-enable max-len*/

	////////////////////////////////////////////////////////////////////////////////

	function resetScanCache(self) {
	  self.__index__ = -1;
	  self.__text_cache__   = '';
	}

	function createValidator(re) {
	  return function (text, pos) {
	    var tail = text.slice(pos);

	    if (re.test(tail)) {
	      return tail.match(re)[0].length;
	    }
	    return 0;
	  };
	}

	function createNormalizer() {
	  return function (match, self) {
	    self.normalize(match);
	  };
	}

	// Schemas compiler. Build regexps.
	//
	function compile(self) {

	  // Load & clone RE patterns.
	  var re$1 = self.re = re(self.__opts__);

	  // Define dynamic patterns
	  var tlds = self.__tlds__.slice();

	  self.onCompile();

	  if (!self.__tlds_replaced__) {
	    tlds.push(tlds_2ch_src_re);
	  }
	  tlds.push(re$1.src_xn);

	  re$1.src_tlds = tlds.join('|');

	  function untpl(tpl) { return tpl.replace('%TLDS%', re$1.src_tlds); }

	  re$1.email_fuzzy      = RegExp(untpl(re$1.tpl_email_fuzzy), 'i');
	  re$1.link_fuzzy       = RegExp(untpl(re$1.tpl_link_fuzzy), 'i');
	  re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), 'i');
	  re$1.host_fuzzy_test  = RegExp(untpl(re$1.tpl_host_fuzzy_test), 'i');

	  //
	  // Compile each schema
	  //

	  var aliases = [];

	  self.__compiled__ = {}; // Reset compiled data

	  function schemaError(name, val) {
	    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
	  }

	  Object.keys(self.__schemas__).forEach(function (name) {
	    var val = self.__schemas__[name];

	    // skip disabled methods
	    if (val === null) { return; }

	    var compiled = { validate: null, link: null };

	    self.__compiled__[name] = compiled;

	    if (isObject(val)) {
	      if (isRegExp(val.validate)) {
	        compiled.validate = createValidator(val.validate);
	      } else if (isFunction(val.validate)) {
	        compiled.validate = val.validate;
	      } else {
	        schemaError(name, val);
	      }

	      if (isFunction(val.normalize)) {
	        compiled.normalize = val.normalize;
	      } else if (!val.normalize) {
	        compiled.normalize = createNormalizer();
	      } else {
	        schemaError(name, val);
	      }

	      return;
	    }

	    if (isString(val)) {
	      aliases.push(name);
	      return;
	    }

	    schemaError(name, val);
	  });

	  //
	  // Compile postponed aliases
	  //

	  aliases.forEach(function (alias) {
	    if (!self.__compiled__[self.__schemas__[alias]]) {
	      // Silently fail on missed schemas to avoid errons on disable.
	      // schemaError(alias, self.__schemas__[alias]);
	      return;
	    }

	    self.__compiled__[alias].validate =
	      self.__compiled__[self.__schemas__[alias]].validate;
	    self.__compiled__[alias].normalize =
	      self.__compiled__[self.__schemas__[alias]].normalize;
	  });

	  //
	  // Fake record for guessed links
	  //
	  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

	  //
	  // Build schema condition
	  //
	  var slist = Object.keys(self.__compiled__)
	                      .filter(function (name) {
	                        // Filter disabled & fake schemas
	                        return name.length > 0 && self.__compiled__[name];
	                      })
	                      .map(escapeRE)
	                      .join('|');
	  // (?!_) cause 1.5x slowdown
	  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re$1.src_ZPCc + '))(' + slist + ')', 'i');
	  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re$1.src_ZPCc + '))(' + slist + ')', 'ig');

	  self.re.pretest = RegExp(
	    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
	    'i'
	  );

	  //
	  // Cleanup
	  //

	  resetScanCache(self);
	}

	/**
	 * class Match
	 *
	 * Match result. Single element of array, returned by [[LinkifyIt#match]]
	 **/
	function Match(self, shift) {
	  var start = self.__index__,
	      end   = self.__last_index__,
	      text  = self.__text_cache__.slice(start, end);

	  /**
	   * Match#schema -> String
	   *
	   * Prefix (protocol) for matched string.
	   **/
	  this.schema    = self.__schema__.toLowerCase();
	  /**
	   * Match#index -> Number
	   *
	   * First position of matched string.
	   **/
	  this.index     = start + shift;
	  /**
	   * Match#lastIndex -> Number
	   *
	   * Next position after matched string.
	   **/
	  this.lastIndex = end + shift;
	  /**
	   * Match#raw -> String
	   *
	   * Matched string.
	   **/
	  this.raw       = text;
	  /**
	   * Match#text -> String
	   *
	   * Notmalized text of matched string.
	   **/
	  this.text      = text;
	  /**
	   * Match#url -> String
	   *
	   * Normalized url of matched string.
	   **/
	  this.url       = text;
	}

	function createMatch(self, shift) {
	  var match = new Match(self, shift);

	  self.__compiled__[match.schema].normalize(match, self);

	  return match;
	}


	/**
	 * class LinkifyIt
	 **/

	/**
	 * new LinkifyIt(schemas, options)
	 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Creates new linkifier instance with optional additional schemas.
	 * Can be called without `new` keyword for convenience.
	 *
	 * By default understands:
	 *
	 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
	 * - "fuzzy" links and emails (example.com, foo@bar.com).
	 *
	 * `schemas` is an object, where each key/value describes protocol/rule:
	 *
	 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
	 *   for example). `linkify-it` makes shure that prefix is not preceeded with
	 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
	 * - __value__ - rule to check tail after link prefix
	 *   - _String_ - just alias to existing rule
	 *   - _Object_
	 *     - _validate_ - validator function (should return matched length on success),
	 *       or `RegExp`.
	 *     - _normalize_ - optional function to normalize text & url of matched result
	 *       (for example, for @twitter mentions).
	 *
	 * `options`:
	 *
	 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
	 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
	 *   like version numbers. Default `false`.
	 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
	 *
	 **/
	function LinkifyIt(schemas, options) {
	  if (!(this instanceof LinkifyIt)) {
	    return new LinkifyIt(schemas, options);
	  }

	  if (!options) {
	    if (isOptionsObj(schemas)) {
	      options = schemas;
	      schemas = {};
	    }
	  }

	  this.__opts__           = assign({}, defaultOptions, options);

	  // Cache last tested result. Used to skip repeating steps on next `match` call.
	  this.__index__          = -1;
	  this.__last_index__     = -1; // Next scan position
	  this.__schema__         = '';
	  this.__text_cache__     = '';

	  this.__schemas__        = assign({}, defaultSchemas, schemas);
	  this.__compiled__       = {};

	  this.__tlds__           = tlds_default;
	  this.__tlds_replaced__  = false;

	  this.re = {};

	  compile(this);
	}


	/** chainable
	 * LinkifyIt#add(schema, definition)
	 * - schema (String): rule name (fixed pattern prefix)
	 * - definition (String|RegExp|Object): schema definition
	 *
	 * Add new rule definition. See constructor description for details.
	 **/
	LinkifyIt.prototype.add = function add(schema, definition) {
	  this.__schemas__[schema] = definition;
	  compile(this);
	  return this;
	};


	/** chainable
	 * LinkifyIt#set(options)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Set recognition options for links without schema.
	 **/
	LinkifyIt.prototype.set = function set(options) {
	  this.__opts__ = assign(this.__opts__, options);
	  return this;
	};


	/**
	 * LinkifyIt#test(text) -> Boolean
	 *
	 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
	 **/
	LinkifyIt.prototype.test = function test(text) {
	  // Reset scan cache
	  this.__text_cache__ = text;
	  this.__index__      = -1;

	  if (!text.length) { return false; }

	  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

	  // try to scan for link with schema - that's the most simple rule
	  if (this.re.schema_test.test(text)) {
	    re = this.re.schema_search;
	    re.lastIndex = 0;
	    while ((m = re.exec(text)) !== null) {
	      len = this.testSchemaAt(text, m[2], re.lastIndex);
	      if (len) {
	        this.__schema__     = m[2];
	        this.__index__      = m.index + m[1].length;
	        this.__last_index__ = m.index + m[0].length + len;
	        break;
	      }
	    }
	  }

	  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
	    // guess schemaless links
	    tld_pos = text.search(this.re.host_fuzzy_test);
	    if (tld_pos >= 0) {
	      // if tld is located after found link - no need to check fuzzy pattern
	      if (this.__index__ < 0 || tld_pos < this.__index__) {
	        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

	          shift = ml.index + ml[1].length;

	          if (this.__index__ < 0 || shift < this.__index__) {
	            this.__schema__     = '';
	            this.__index__      = shift;
	            this.__last_index__ = ml.index + ml[0].length;
	          }
	        }
	      }
	    }
	  }

	  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
	    // guess schemaless emails
	    at_pos = text.indexOf('@');
	    if (at_pos >= 0) {
	      // We can't skip this check, because this cases are possible:
	      // 192.168.1.1@gmail.com, my.in@example.com
	      if ((me = text.match(this.re.email_fuzzy)) !== null) {

	        shift = me.index + me[1].length;
	        next  = me.index + me[0].length;

	        if (this.__index__ < 0 || shift < this.__index__ ||
	            (shift === this.__index__ && next > this.__last_index__)) {
	          this.__schema__     = 'mailto:';
	          this.__index__      = shift;
	          this.__last_index__ = next;
	        }
	      }
	    }
	  }

	  return this.__index__ >= 0;
	};


	/**
	 * LinkifyIt#pretest(text) -> Boolean
	 *
	 * Very quick check, that can give false positives. Returns true if link MAY BE
	 * can exists. Can be used for speed optimization, when you need to check that
	 * link NOT exists.
	 **/
	LinkifyIt.prototype.pretest = function pretest(text) {
	  return this.re.pretest.test(text);
	};


	/**
	 * LinkifyIt#testSchemaAt(text, name, position) -> Number
	 * - text (String): text to scan
	 * - name (String): rule (schema) name
	 * - position (Number): text offset to check from
	 *
	 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
	 * at given position. Returns length of found pattern (0 on fail).
	 **/
	LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
	  // If not supported schema check requested - terminate
	  if (!this.__compiled__[schema.toLowerCase()]) {
	    return 0;
	  }
	  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
	};


	/**
	 * LinkifyIt#match(text) -> Array|null
	 *
	 * Returns array of found link descriptions or `null` on fail. We strongly
	 * recommend to use [[LinkifyIt#test]] first, for best speed.
	 *
	 * ##### Result match description
	 *
	 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
	 *   protocol-neutral  links.
	 * - __index__ - offset of matched text
	 * - __lastIndex__ - index of next char after mathch end
	 * - __raw__ - matched text
	 * - __text__ - normalized text
	 * - __url__ - link, generated from matched text
	 **/
	LinkifyIt.prototype.match = function match(text) {
	  var shift = 0, result = [];

	  // Try to take previous element from cache, if .test() called before
	  if (this.__index__ >= 0 && this.__text_cache__ === text) {
	    result.push(createMatch(this, shift));
	    shift = this.__last_index__;
	  }

	  // Cut head if cache was used
	  var tail = shift ? text.slice(shift) : text;

	  // Scan string until end reached
	  while (this.test(tail)) {
	    result.push(createMatch(this, shift));

	    tail = tail.slice(this.__last_index__);
	    shift += this.__last_index__;
	  }

	  if (result.length) {
	    return result;
	  }

	  return null;
	};


	/** chainable
	 * LinkifyIt#tlds(list [, keepOld]) -> this
	 * - list (Array): list of tlds
	 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
	 *
	 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
	 * to avoid false positives. By default this algorythm used:
	 *
	 * - hostname with any 2-letter root zones are ok.
	 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
	 *   are ok.
	 * - encoded (`xn--...`) root zones are ok.
	 *
	 * If list is replaced, then exact match for 2-chars root zones will be checked.
	 **/
	LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
	  list = Array.isArray(list) ? list : [ list ];

	  if (!keepOld) {
	    this.__tlds__ = list.slice();
	    this.__tlds_replaced__ = true;
	    compile(this);
	    return this;
	  }

	  this.__tlds__ = this.__tlds__.concat(list)
	                                  .sort()
	                                  .filter(function (el, idx, arr) {
	                                    return el !== arr[idx - 1];
	                                  })
	                                  .reverse();

	  compile(this);
	  return this;
	};

	/**
	 * LinkifyIt#normalize(match)
	 *
	 * Default normalizer (if schema does not define it's own).
	 **/
	LinkifyIt.prototype.normalize = function normalize(match) {

	  // Do minimal possible changes by default. Need to collect feedback prior
	  // to move forward https://github.com/markdown-it/linkify-it/issues/1

	  if (!match.schema) { match.url = 'http://' + match.url; }

	  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
	    match.url = 'mailto:' + match.url;
	  }
	};


	/**
	 * LinkifyIt#onCompile()
	 *
	 * Override to modify basic RegExp-s.
	 **/
	LinkifyIt.prototype.onCompile = function onCompile() {
	};


	var linkifyIt = LinkifyIt;

	var punycode = createCommonjsModule(function (module, exports) {
	(function(root) {

		/** Detect free variables */
		var freeExports = exports &&
			!exports.nodeType && exports;
		var freeModule = module &&
			!module.nodeType && module;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw new RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * https://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.4.1',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}

	}(commonjsGlobal));
	});

	// markdown-it default options


	var _default = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

	    // Highlighter function. Should return escaped HTML,
	    // or '' if the source string is not changed and should be escaped externaly.
	    // If result starts with <pre... internal wrapper is skipped.
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   100            // Internal protection, recursion limit
	  },

	  components: {

	    core: {},
	    block: {},
	    inline: {}
	  }
	};

	// "Zero" preset, with nothing enabled. Useful for manual configuring of simple


	var zero = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

	    // Highlighter function. Should return escaped HTML,
	    // or '' if the source string is not changed and should be escaped externaly.
	    // If result starts with <pre... internal wrapper is skipped.
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'normalize',
	        'block',
	        'inline'
	      ]
	    },

	    block: {
	      rules: [
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'text'
	      ],
	      rules2: [
	        'balance_pairs',
	        'text_collapse'
	      ]
	    }
	  }
	};

	// Commonmark default options


	var commonmark = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Could be either a String or an Array.
	    //
	    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
	    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
	    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

	    // Highlighter function. Should return escaped HTML,
	    // or '' if the source string is not changed and should be escaped externaly.
	    // If result starts with <pre... internal wrapper is skipped.
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'normalize',
	        'block',
	        'inline'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fence',
	        'heading',
	        'hr',
	        'html_block',
	        'lheading',
	        'list',
	        'reference',
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'html_inline',
	        'image',
	        'link',
	        'newline',
	        'text'
	      ],
	      rules2: [
	        'balance_pairs',
	        'emphasis',
	        'text_collapse'
	      ]
	    }
	  }
	};

	var config = {
	  default: _default,
	  zero: zero,
	  commonmark: commonmark
	};

	////////////////////////////////////////////////////////////////////////////////
	//
	// This validator can prohibit more than really needed to prevent XSS. It's a
	// tradeoff to keep code simple and to be secure by default.
	//
	// If you need different setup - override validator method as you wish. Or
	// replace it with dummy function and use external sanitizer.
	//

	var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
	var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

	function validateLink(url) {
	  // url should be normalized at this point, and existing entities are decoded
	  var str = url.trim().toLowerCase();

	  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
	}

	////////////////////////////////////////////////////////////////////////////////


	var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

	function normalizeLink(url) {
	  var parsed = mdurl.parse(url, true);

	  if (parsed.hostname) {
	    // Encode hostnames in urls like:
	    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
	    //
	    // We don't encode unknown schemas, because it's likely that we encode
	    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
	    //
	    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
	      try {
	        parsed.hostname = punycode.toASCII(parsed.hostname);
	      } catch (er) { /**/ }
	    }
	  }

	  return mdurl.encode(mdurl.format(parsed));
	}

	function normalizeLinkText(url) {
	  var parsed = mdurl.parse(url, true);

	  if (parsed.hostname) {
	    // Encode hostnames in urls like:
	    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
	    //
	    // We don't encode unknown schemas, because it's likely that we encode
	    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
	    //
	    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
	      try {
	        parsed.hostname = punycode.toUnicode(parsed.hostname);
	      } catch (er) { /**/ }
	    }
	  }

	  // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
	  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
	}


	/**
	 * class MarkdownIt
	 *
	 * Main parser/renderer class.
	 *
	 * ##### Usage
	 *
	 * ```javascript
	 * // node.js, "classic" way:
	 * var MarkdownIt = require('markdown-it'),
	 *     md = new MarkdownIt();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // node.js, the same, but with sugar:
	 * var md = require('markdown-it')();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // browser without AMD, added to "window" on script load
	 * // Note, there are no dash.
	 * var md = window.markdownit();
	 * var result = md.render('# markdown-it rulezz!');
	 * ```
	 *
	 * Single line rendering, without paragraph wrap:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 * var result = md.renderInline('__markdown-it__ rulezz!');
	 * ```
	 **/

	/**
	 * new MarkdownIt([presetName, options])
	 * - presetName (String): optional, `commonmark` / `zero`
	 * - options (Object)
	 *
	 * Creates parser instanse with given config. Can be called without `new`.
	 *
	 * ##### presetName
	 *
	 * MarkdownIt provides named presets as a convenience to quickly
	 * enable/disable active syntax rules and options for common use cases.
	 *
	 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
	 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
	 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
	 *   similar to GFM, used when no preset name given. Enables all available rules,
	 *   but still without html, typographer & autolinker.
	 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
	 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
	 *   For example, when you need only `bold` and `italic` markup and nothing else.
	 *
	 * ##### options:
	 *
	 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
	 *   That's not safe! You may need external sanitizer to protect output from XSS.
	 *   It's better to extend features via plugins, instead of enabling HTML.
	 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
	 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
	 *   world you will need HTML output.
	 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
	 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
	 *   Can be useful for external highlighters.
	 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
	 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
	 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
	 *   quotes beautification (smartquotes).
	 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
	 *   pairs, when typographer enabled and smartquotes on. For example, you can
	 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
	 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
	 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
	 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
	 *   return empty string if the source was not changed and should be escaped
	 *   externaly. If result starts with <pre... internal wrapper is skipped.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * // commonmark mode
	 * var md = require('markdown-it')('commonmark');
	 *
	 * // default mode
	 * var md = require('markdown-it')();
	 *
	 * // enable everything
	 * var md = require('markdown-it')({
	 *   html: true,
	 *   linkify: true,
	 *   typographer: true
	 * });
	 * ```
	 *
	 * ##### Syntax highlighting
	 *
	 * ```js
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
	 *       } catch (__) {}
	 *     }
	 *
	 *     return ''; // use external default escaping
	 *   }
	 * });
	 * ```
	 *
	 * Or with full wrapper override (if you need assign class to `<pre>`):
	 *
	 * ```javascript
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * // Actual default values
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return '<pre class="hljs"><code>' +
	 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
	 *                '</code></pre>';
	 *       } catch (__) {}
	 *     }
	 *
	 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	 *   }
	 * });
	 * ```
	 *
	 **/
	function MarkdownIt(presetName, options) {
	  if (!(this instanceof MarkdownIt)) {
	    return new MarkdownIt(presetName, options);
	  }

	  if (!options) {
	    if (!utils.isString(presetName)) {
	      options = presetName || {};
	      presetName = 'default';
	    }
	  }

	  /**
	   * MarkdownIt#inline -> ParserInline
	   *
	   * Instance of [[ParserInline]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.inline = new parser_inline();

	  /**
	   * MarkdownIt#block -> ParserBlock
	   *
	   * Instance of [[ParserBlock]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.block = new parser_block();

	  /**
	   * MarkdownIt#core -> Core
	   *
	   * Instance of [[Core]] chain executor. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/
	  this.core = new parser_core();

	  /**
	   * MarkdownIt#renderer -> Renderer
	   *
	   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
	   * rules for new token types, generated by plugins.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * function myToken(tokens, idx, options, env, self) {
	   *   //...
	   *   return result;
	   * };
	   *
	   * md.renderer.rules['my_token'] = myToken
	   * ```
	   *
	   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
	   **/
	  this.renderer = new renderer();

	  /**
	   * MarkdownIt#linkify -> LinkifyIt
	   *
	   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
	   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
	   * rule.
	   **/
	  this.linkify = new linkifyIt();

	  /**
	   * MarkdownIt#validateLink(url) -> Boolean
	   *
	   * Link validation function. CommonMark allows too much in links. By default
	   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
	   * except some embedded image types.
	   *
	   * You can change this behaviour:
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   * // enable everything
	   * md.validateLink = function () { return true; }
	   * ```
	   **/
	  this.validateLink = validateLink;

	  /**
	   * MarkdownIt#normalizeLink(url) -> String
	   *
	   * Function used to encode link url to a machine-readable format,
	   * which includes url-encoding, punycode, etc.
	   **/
	  this.normalizeLink = normalizeLink;

	  /**
	   * MarkdownIt#normalizeLinkText(url) -> String
	   *
	   * Function used to decode link url to a human-readable format`
	   **/
	  this.normalizeLinkText = normalizeLinkText;


	  // Expose utils & helpers for easy acces from plugins

	  /**
	   * MarkdownIt#utils -> utils
	   *
	   * Assorted utility functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
	   **/
	  this.utils = utils;

	  /**
	   * MarkdownIt#helpers -> helpers
	   *
	   * Link components parser functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
	   **/
	  this.helpers = utils.assign({}, helpers);


	  this.options = {};
	  this.configure(presetName);

	  if (options) { this.set(options); }
	}


	/** chainable
	 * MarkdownIt.set(options)
	 *
	 * Set parser options (in the same format as in constructor). Probably, you
	 * will never need it, but you can change options after constructor call.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .set({ html: true, breaks: true })
	 *             .set({ typographer, true });
	 * ```
	 *
	 * __Note:__ To achieve the best possible performance, don't modify a
	 * `markdown-it` instance options on the fly. If you need multiple configurations
	 * it's best to create multiple instances and initialize each with separate
	 * config.
	 **/
	MarkdownIt.prototype.set = function (options) {
	  utils.assign(this.options, options);
	  return this;
	};


	/** chainable, internal
	 * MarkdownIt.configure(presets)
	 *
	 * Batch load of all options and compenent settings. This is internal method,
	 * and you probably will not need it. But if you will - see available presets
	 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
	 *
	 * We strongly recommend to use presets instead of direct config loads. That
	 * will give better compatibility with next versions.
	 **/
	MarkdownIt.prototype.configure = function (presets) {
	  var self = this, presetName;

	  if (utils.isString(presets)) {
	    presetName = presets;
	    presets = config[presetName];
	    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
	  }

	  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

	  if (presets.options) { self.set(presets.options); }

	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enableOnly(presets.components[name].rules);
	      }
	      if (presets.components[name].rules2) {
	        self[name].ruler2.enableOnly(presets.components[name].rules2);
	      }
	    });
	  }
	  return this;
	};


	/** chainable
	 * MarkdownIt.enable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to enable
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable list or rules. It will automatically find appropriate components,
	 * containing rules with given names. If rule not found, and `ignoreInvalid`
	 * not set - throws exception.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .enable(['sub', 'sup'])
	 *             .disable('smartquotes');
	 * ```
	 **/
	MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
	  var result = [];

	  if (!Array.isArray(list)) { list = [ list ]; }

	  [ 'core', 'block', 'inline' ].forEach(function (chain) {
	    result = result.concat(this[chain].ruler.enable(list, true));
	  }, this);

	  result = result.concat(this.inline.ruler2.enable(list, true));

	  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

	  if (missed.length && !ignoreInvalid) {
	    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
	  }

	  return this;
	};


	/** chainable
	 * MarkdownIt.disable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * The same as [[MarkdownIt.enable]], but turn specified rules off.
	 **/
	MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
	  var result = [];

	  if (!Array.isArray(list)) { list = [ list ]; }

	  [ 'core', 'block', 'inline' ].forEach(function (chain) {
	    result = result.concat(this[chain].ruler.disable(list, true));
	  }, this);

	  result = result.concat(this.inline.ruler2.disable(list, true));

	  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

	  if (missed.length && !ignoreInvalid) {
	    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
	  }
	  return this;
	};


	/** chainable
	 * MarkdownIt.use(plugin, params)
	 *
	 * Load specified plugin with given params into current parser instance.
	 * It's just a sugar to call `plugin(md, params)` with curring.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var iterator = require('markdown-it-for-inline');
	 * var md = require('markdown-it')()
	 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
	 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
	 *             });
	 * ```
	 **/
	MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
	  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
	  plugin.apply(plugin, args);
	  return this;
	};


	/** internal
	 * MarkdownIt.parse(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Parse input string and return list of block tokens (special token type
	 * "inline" will contain list of inline tokens). You should not call this
	 * method directly, until you write custom renderer (for example, to produce
	 * AST).
	 *
	 * `env` is used to pass data between "distributed" rules and return additional
	 * metadata like reference info, needed for the renderer. It also can be used to
	 * inject data in specific cases. Usually, you will be ok to pass `{}`,
	 * and then pass updated object to renderer.
	 **/
	MarkdownIt.prototype.parse = function (src, env) {
	  if (typeof src !== 'string') {
	    throw new Error('Input data should be a String');
	  }

	  var state = new this.core.State(src, this, env);

	  this.core.process(state);

	  return state.tokens;
	};


	/**
	 * MarkdownIt.render(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Render markdown string into html. It does all magic for you :).
	 *
	 * `env` can be used to inject additional metadata (`{}` by default).
	 * But you will not need it with high probability. See also comment
	 * in [[MarkdownIt.parse]].
	 **/
	MarkdownIt.prototype.render = function (src, env) {
	  env = env || {};

	  return this.renderer.render(this.parse(src, env), this.options, env);
	};


	/** internal
	 * MarkdownIt.parseInline(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
	 * block tokens list with the single `inline` element, containing parsed inline
	 * tokens in `children` property. Also updates `env` object.
	 **/
	MarkdownIt.prototype.parseInline = function (src, env) {
	  var state = new this.core.State(src, this, env);

	  state.inlineMode = true;
	  this.core.process(state);

	  return state.tokens;
	};


	/**
	 * MarkdownIt.renderInline(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
	 * will NOT be wrapped into `<p>` tags.
	 **/
	MarkdownIt.prototype.renderInline = function (src, env) {
	  env = env || {};

	  return this.renderer.render(this.parseInline(src, env), this.options, env);
	};


	var lib = MarkdownIt;

	var markdownIt = lib;

	// ::Schema Document schema for the data model used by CommonMark.
	var schema = new prosemirrorModel.Schema({
	  nodes: {
	    doc: {
	      content: "block+"
	    },

	    paragraph: {
	      content: "inline*",
	      group: "block",
	      parseDOM: [{tag: "p"}],
	      toDOM: function toDOM() { return ["p", 0] }
	    },

	    blockquote: {
	      content: "block+",
	      group: "block",
	      parseDOM: [{tag: "blockquote"}],
	      toDOM: function toDOM() { return ["blockquote", 0] }
	    },

	    horizontal_rule: {
	      group: "block",
	      parseDOM: [{tag: "hr"}],
	      toDOM: function toDOM() { return ["div", ["hr"]] }
	    },

	    heading: {
	      attrs: {level: {default: 1}},
	      content: "(text | image)*",
	      group: "block",
	      defining: true,
	      parseDOM: [{tag: "h1", attrs: {level: 1}},
	                 {tag: "h2", attrs: {level: 2}},
	                 {tag: "h3", attrs: {level: 3}},
	                 {tag: "h4", attrs: {level: 4}},
	                 {tag: "h5", attrs: {level: 5}},
	                 {tag: "h6", attrs: {level: 6}}],
	      toDOM: function toDOM(node) { return ["h" + node.attrs.level, 0] }
	    },

	    code_block: {
	      content: "text*",
	      group: "block",
	      code: true,
	      defining: true,
	      marks: "",
	      attrs: {params: {default: ""}},
	      parseDOM: [{tag: "pre", preserveWhitespace: "full", getAttrs: function (node) { return (
	        {params: node.getAttribute("data-params") || ""}
	      ); }}],
	      toDOM: function toDOM(node) { return ["pre", node.attrs.params ? {"data-params": node.attrs.params} : {}, ["code", 0]] }
	    },

	    ordered_list: {
	      content: "list_item+",
	      group: "block",
	      attrs: {order: {default: 1}, tight: {default: false}},
	      parseDOM: [{tag: "ol", getAttrs: function getAttrs(dom) {
	        return {order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1,
	                tight: dom.hasAttribute("data-tight")}
	      }}],
	      toDOM: function toDOM(node) {
	        return ["ol", {start: node.attrs.order == 1 ? null : node.attrs.order,
	                       "data-tight": node.attrs.tight ? "true" : null}, 0]
	      }
	    },

	    bullet_list: {
	      content: "list_item+",
	      group: "block",
	      attrs: {tight: {default: false}},
	      parseDOM: [{tag: "ul", getAttrs: function (dom) { return ({tight: dom.hasAttribute("data-tight")}); }}],
	      toDOM: function toDOM(node) { return ["ul", {"data-tight": node.attrs.tight ? "true" : null}, 0] }
	    },

	    list_item: {
	      content: "paragraph block*",
	      defining: true,
	      parseDOM: [{tag: "li"}],
	      toDOM: function toDOM() { return ["li", 0] }
	    },

	    text: {
	      group: "inline"
	    },

	    image: {
	      inline: true,
	      attrs: {
	        src: {},
	        alt: {default: null},
	        title: {default: null}
	      },
	      group: "inline",
	      draggable: true,
	      parseDOM: [{tag: "img[src]", getAttrs: function getAttrs(dom) {
	        return {
	          src: dom.getAttribute("src"),
	          title: dom.getAttribute("title"),
	          alt: dom.getAttribute("alt")
	        }
	      }}],
	      toDOM: function toDOM(node) { return ["img", node.attrs] }
	    },

	    hard_break: {
	      inline: true,
	      group: "inline",
	      selectable: false,
	      parseDOM: [{tag: "br"}],
	      toDOM: function toDOM() { return ["br"] }
	    }
	  },

	  marks: {
	    em: {
	      parseDOM: [{tag: "i"}, {tag: "em"},
	                 {style: "font-style", getAttrs: function (value) { return value == "italic" && null; }}],
	      toDOM: function toDOM() { return ["em"] }
	    },

	    strong: {
	      parseDOM: [{tag: "b"}, {tag: "strong"},
	                 {style: "font-weight", getAttrs: function (value) { return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null; }}],
	      toDOM: function toDOM() { return ["strong"] }
	    },

	    link: {
	      attrs: {
	        href: {},
	        title: {default: null}
	      },
	      inclusive: false,
	      parseDOM: [{tag: "a[href]", getAttrs: function getAttrs(dom) {
	        return {href: dom.getAttribute("href"), title: dom.getAttribute("title")}
	      }}],
	      toDOM: function toDOM(node) { return ["a", node.attrs] }
	    },

	    code: {
	      parseDOM: [{tag: "code"}],
	      toDOM: function toDOM() { return ["code"] }
	    }
	  }
	});

	function maybeMerge(a, b) {
	  if (a.isText && b.isText && prosemirrorModel.Mark.sameSet(a.marks, b.marks))
	    { return a.withText(a.text + b.text) }
	}

	// Object used to track the context of a running parse.
	var MarkdownParseState = function MarkdownParseState(schema, tokenHandlers) {
	  this.schema = schema;
	  this.stack = [{type: schema.topNodeType, content: []}];
	  this.marks = prosemirrorModel.Mark.none;
	  this.tokenHandlers = tokenHandlers;
	};

	MarkdownParseState.prototype.top = function top () {
	  return this.stack[this.stack.length - 1]
	};

	MarkdownParseState.prototype.push = function push (elt) {
	  if (this.stack.length) { this.top().content.push(elt); }
	};

	// : (string)
	// Adds the given text to the current position in the document,
	// using the current marks as styling.
	MarkdownParseState.prototype.addText = function addText (text) {
	  if (!text) { return }
	  var nodes = this.top().content, last = nodes[nodes.length - 1];
	  var node = this.schema.text(text, this.marks), merged;
	  if (last && (merged = maybeMerge(last, node))) { nodes[nodes.length - 1] = merged; }
	  else { nodes.push(node); }
	};

	// : (Mark)
	// Adds the given mark to the set of active marks.
	MarkdownParseState.prototype.openMark = function openMark (mark) {
	  this.marks = mark.addToSet(this.marks);
	};

	// : (Mark)
	// Removes the given mark from the set of active marks.
	MarkdownParseState.prototype.closeMark = function closeMark (mark) {
	  this.marks = mark.removeFromSet(this.marks);
	};

	MarkdownParseState.prototype.parseTokens = function parseTokens (toks) {
	  for (var i = 0; i < toks.length; i++) {
	    var tok = toks[i];
	    var handler = this.tokenHandlers[tok.type];
	    if (!handler)
	      { throw new Error("Token type `" + tok.type + "` not supported by Markdown parser") }
	    handler(this, tok, toks, i);
	  }
	};

	// : (NodeType, ?Object, ?[Node]) → ?Node
	// Add a node at the current position.
	MarkdownParseState.prototype.addNode = function addNode (type, attrs, content) {
	  var node = type.createAndFill(attrs, content, this.marks);
	  if (!node) { return null }
	  this.push(node);
	  return node
	};

	// : (NodeType, ?Object)
	// Wrap subsequent content in a node of the given type.
	MarkdownParseState.prototype.openNode = function openNode (type, attrs) {
	  this.stack.push({type: type, attrs: attrs, content: []});
	};

	// : () → ?Node
	// Close and return the node that is currently on top of the stack.
	MarkdownParseState.prototype.closeNode = function closeNode () {
	  if (this.marks.length) { this.marks = prosemirrorModel.Mark.none; }
	  var info = this.stack.pop();
	  return this.addNode(info.type, info.attrs, info.content)
	};

	function attrs(spec, token, tokens, i) {
	  if (spec.getAttrs) { return spec.getAttrs(token, tokens, i) }
	  // For backwards compatibility when `attrs` is a Function
	  else if (spec.attrs instanceof Function) { return spec.attrs(token) }
	  else { return spec.attrs }
	}

	// Code content is represented as a single token with a `content`
	// property in Markdown-it.
	function noCloseToken(spec, type) {
	  return spec.noCloseToken || type == "code_inline" || type == "code_block" || type == "fence"
	}

	function withoutTrailingNewline(str) {
	  return str[str.length - 1] == "\n" ? str.slice(0, str.length - 1) : str
	}

	function noOp() {}

	function tokenHandlers(schema, tokens) {
	  var handlers = Object.create(null);
	  var loop = function ( type ) {
	    var spec = tokens[type];
	    if (spec.block) {
	      var nodeType = schema.nodeType(spec.block);
	      if (noCloseToken(spec, type)) {
	        handlers[type] = function (state, tok, tokens, i) {
	          state.openNode(nodeType, attrs(spec, tok, tokens, i));
	          state.addText(withoutTrailingNewline(tok.content));
	          state.closeNode();
	        };
	      } else {
	        handlers[type + "_open"] = function (state, tok, tokens, i) { return state.openNode(nodeType, attrs(spec, tok, tokens, i)); };
	        handlers[type + "_close"] = function (state) { return state.closeNode(); };
	      }
	    } else if (spec.node) {
	      var nodeType$1 = schema.nodeType(spec.node);
	      handlers[type] = function (state, tok, tokens, i) { return state.addNode(nodeType$1, attrs(spec, tok, tokens, i)); };
	    } else if (spec.mark) {
	      var markType = schema.marks[spec.mark];
	      if (noCloseToken(spec, type)) {
	        handlers[type] = function (state, tok, tokens, i) {
	          state.openMark(markType.create(attrs(spec, tok, tokens, i)));
	          state.addText(withoutTrailingNewline(tok.content));
	          state.closeMark(markType);
	        };
	      } else {
	        handlers[type + "_open"] = function (state, tok, tokens, i) { return state.openMark(markType.create(attrs(spec, tok, tokens, i))); };
	        handlers[type + "_close"] = function (state) { return state.closeMark(markType); };
	      }
	    } else if (spec.ignore) {
	      if (noCloseToken(spec, type)) {
	        handlers[type] = noOp;
	      } else {
	        handlers[type + "_open"] = noOp;
	        handlers[type + "_close"] = noOp;
	      }
	    } else {
	      throw new RangeError("Unrecognized parsing spec " + JSON.stringify(spec))
	    }
	  };

	  for (var type in tokens) { loop( type ); }

	  handlers.text = function (state, tok) { return state.addText(tok.content); };
	  handlers.inline = function (state, tok) { return state.parseTokens(tok.children); };
	  handlers.softbreak = handlers.softbreak || (function (state) { return state.addText("\n"); });

	  return handlers
	}

	// ::- A configuration of a Markdown parser. Such a parser uses
	// [markdown-it](https://github.com/markdown-it/markdown-it) to
	// tokenize a file, and then runs the custom rules it is given over
	// the tokens to create a ProseMirror document tree.
	var MarkdownParser = function MarkdownParser(schema, tokenizer, tokens) {
	  // :: Object The value of the `tokens` object used to construct
	  // this parser. Can be useful to copy and modify to base other
	  // parsers on.
	  this.tokens = tokens;
	  this.schema = schema;
	  // :: This parser's markdown-it tokenizer.
	  this.tokenizer = tokenizer;
	  this.tokenHandlers = tokenHandlers(schema, tokens);
	};

	// :: (string) → Node
	// Parse a string as [CommonMark](http://commonmark.org/) markup,
	// and create a ProseMirror document as prescribed by this parser's
	// rules.
	MarkdownParser.prototype.parse = function parse (text) {
	  var state = new MarkdownParseState(this.schema, this.tokenHandlers), doc;
	  state.parseTokens(this.tokenizer.parse(text, {}));
	  do { doc = state.closeNode(); } while (state.stack.length)
	  return doc || this.schema.topNodeType.createAndFill()
	};

	function listIsTight(tokens, i) {
	  while (++i < tokens.length)
	    { if (tokens[i].type != "list_item_open") { return tokens[i].hidden } }
	  return false
	}

	// :: MarkdownParser
	// A parser parsing unextended [CommonMark](http://commonmark.org/),
	// without inline HTML, and producing a document in the basic schema.
	var defaultMarkdownParser = new MarkdownParser(schema, markdownIt("commonmark", {html: false}), {
	  blockquote: {block: "blockquote"},
	  paragraph: {block: "paragraph"},
	  list_item: {block: "list_item"},
	  bullet_list: {block: "bullet_list", getAttrs: function (_, tokens, i) { return ({tight: listIsTight(tokens, i)}); }},
	  ordered_list: {block: "ordered_list", getAttrs: function (tok, tokens, i) { return ({
	    order: +tok.attrGet("start") || 1,
	    tight: listIsTight(tokens, i)
	  }); }},
	  heading: {block: "heading", getAttrs: function (tok) { return ({level: +tok.tag.slice(1)}); }},
	  code_block: {block: "code_block", noCloseToken: true},
	  fence: {block: "code_block", getAttrs: function (tok) { return ({params: tok.info || ""}); }, noCloseToken: true},
	  hr: {node: "horizontal_rule"},
	  image: {node: "image", getAttrs: function (tok) { return ({
	    src: tok.attrGet("src"),
	    title: tok.attrGet("title") || null,
	    alt: tok.children[0] && tok.children[0].content || null
	  }); }},
	  hardbreak: {node: "hard_break"},

	  em: {mark: "em"},
	  strong: {mark: "strong"},
	  link: {mark: "link", getAttrs: function (tok) { return ({
	    href: tok.attrGet("href"),
	    title: tok.attrGet("title") || null
	  }); }},
	  code_inline: {mark: "code", noCloseToken: true}
	});

	// ::- A specification for serializing a ProseMirror document as
	// Markdown/CommonMark text.
	var MarkdownSerializer = function MarkdownSerializer(nodes, marks, options) {
	  // :: Object<(MarkdownSerializerState, Node)> The node serializer
	  // functions for this serializer.
	  this.nodes = nodes;
	  // :: Object The mark serializer info.
	  this.marks = marks;
	  this.options = options || {};
	};

	// :: (Node, ?Object) → string
	// Serialize the content of the given node to
	// [CommonMark](http://commonmark.org/).
	MarkdownSerializer.prototype.serialize = function serialize (content, options) {
	  options = Object.assign(this.options, options);
	  var state = new MarkdownSerializerState(this.nodes, this.marks, options);
	  state.renderContent(content);
	  return state.out
	};

	// :: MarkdownSerializer
	// A serializer for the [basic schema](#schema).
	var defaultMarkdownSerializer = new MarkdownSerializer({
	  blockquote: function blockquote(state, node) {
	    state.wrapBlock("> ", null, node, function () { return state.renderContent(node); });
	  },
	  code_block: function code_block(state, node) {
	    state.write("```" + (node.attrs.params || "") + "\n");
	    state.text(node.textContent, false);
	    state.ensureNewLine();
	    state.write("```");
	    state.closeBlock(node);
	  },
	  heading: function heading(state, node) {
	    state.write(state.repeat("#", node.attrs.level) + " ");
	    state.renderInline(node);
	    state.closeBlock(node);
	  },
	  horizontal_rule: function horizontal_rule(state, node) {
	    state.write(node.attrs.markup || "---");
	    state.closeBlock(node);
	  },
	  bullet_list: function bullet_list(state, node) {
	    state.renderList(node, "  ", function () { return (node.attrs.bullet || "*") + " "; });
	  },
	  ordered_list: function ordered_list(state, node) {
	    var start = node.attrs.order || 1;
	    var maxW = String(start + node.childCount - 1).length;
	    var space = state.repeat(" ", maxW + 2);
	    state.renderList(node, space, function (i) {
	      var nStr = String(start + i);
	      return state.repeat(" ", maxW - nStr.length) + nStr + ". "
	    });
	  },
	  list_item: function list_item(state, node) {
	    state.renderContent(node);
	  },
	  paragraph: function paragraph(state, node) {
	    state.renderInline(node);
	    state.closeBlock(node);
	  },

	  image: function image(state, node) {
	    state.write("![" + state.esc(node.attrs.alt || "") + "](" + node.attrs.src +
	                (node.attrs.title ? ' "' + node.attrs.title.replace(/"/g, '\\"') + '"' : "") + ")");
	  },
	  hard_break: function hard_break(state, node, parent, index) {
	    for (var i = index + 1; i < parent.childCount; i++)
	      { if (parent.child(i).type != node.type) {
	        state.write("\\\n");
	        return
	      } }
	  },
	  text: function text(state, node) {
	    state.text(node.text);
	  }
	}, {
	  em: {open: "*", close: "*", mixable: true, expelEnclosingWhitespace: true},
	  strong: {open: "**", close: "**", mixable: true, expelEnclosingWhitespace: true},
	  link: {
	    open: function open(_state, mark, parent, index) {
	      return isPlainURL(mark, parent, index, 1) ? "<" : "["
	    },
	    close: function close(_state, mark, parent, index) {
	      return isPlainURL(mark, parent, index, -1) ? ">"
	        : "](" + mark.attrs.href + (mark.attrs.title ? ' "' + mark.attrs.title.replace(/"/g, '\\"') + '"' : "") + ")"
	    }
	  },
	  code: {open: function open(_state, _mark, parent, index) { return backticksFor(parent.child(index), -1) },
	         close: function close(_state, _mark, parent, index) { return backticksFor(parent.child(index - 1), 1) },
	         escape: false}
	});

	function backticksFor(node, side) {
	  var ticks = /`+/g, m, len = 0;
	  if (node.isText) { while (m = ticks.exec(node.text)) { len = Math.max(len, m[0].length); } }
	  var result = len > 0 && side > 0 ? " `" : "`";
	  for (var i = 0; i < len; i++) { result += "`"; }
	  if (len > 0 && side < 0) { result += " "; }
	  return result
	}

	function isPlainURL(link, parent, index, side) {
	  if (link.attrs.title || !/^\w+:/.test(link.attrs.href)) { return false }
	  var content = parent.child(index + (side < 0 ? -1 : 0));
	  if (!content.isText || content.text != link.attrs.href || content.marks[content.marks.length - 1] != link) { return false }
	  if (index == (side < 0 ? 1 : parent.childCount - 1)) { return true }
	  var next = parent.child(index + (side < 0 ? -2 : 1));
	  return !link.isInSet(next.marks)
	}

	// ::- This is an object used to track state and expose
	// methods related to markdown serialization. Instances are passed to
	// node and mark serialization methods (see `toMarkdown`).
	var MarkdownSerializerState = function MarkdownSerializerState(nodes, marks, options) {
	  this.nodes = nodes;
	  this.marks = marks;
	  this.delim = this.out = "";
	  this.closed = false;
	  this.inTightList = false;
	  // :: Object
	  // The options passed to the serializer.
	  // tightLists:: ?bool
	  // Whether to render lists in a tight style. This can be overridden
	  // on a node level by specifying a tight attribute on the node.
	  // Defaults to false.
	  this.options = options || {};
	  if (typeof this.options.tightLists == "undefined")
	    { this.options.tightLists = false; }
	};

	MarkdownSerializerState.prototype.flushClose = function flushClose (size) {
	  if (this.closed) {
	    if (!this.atBlank()) { this.out += "\n"; }
	    if (size == null) { size = 2; }
	    if (size > 1) {
	      var delimMin = this.delim;
	      var trim = /\s+$/.exec(delimMin);
	      if (trim) { delimMin = delimMin.slice(0, delimMin.length - trim[0].length); }
	      for (var i = 1; i < size; i++)
	        { this.out += delimMin + "\n"; }
	    }
	    this.closed = false;
	  }
	};

	// :: (string, ?string, Node, ())
	// Render a block, prefixing each line with `delim`, and the first
	// line in `firstDelim`. `node` should be the node that is closed at
	// the end of the block, and `f` is a function that renders the
	// content of the block.
	MarkdownSerializerState.prototype.wrapBlock = function wrapBlock (delim, firstDelim, node, f) {
	  var old = this.delim;
	  this.write(firstDelim || delim);
	  this.delim += delim;
	  f();
	  this.delim = old;
	  this.closeBlock(node);
	};

	MarkdownSerializerState.prototype.atBlank = function atBlank () {
	  return /(^|\n)$/.test(this.out)
	};

	// :: ()
	// Ensure the current content ends with a newline.
	MarkdownSerializerState.prototype.ensureNewLine = function ensureNewLine () {
	  if (!this.atBlank()) { this.out += "\n"; }
	};

	// :: (?string)
	// Prepare the state for writing output (closing closed paragraphs,
	// adding delimiters, and so on), and then optionally add content
	// (unescaped) to the output.
	MarkdownSerializerState.prototype.write = function write (content) {
	  this.flushClose();
	  if (this.delim && this.atBlank())
	    { this.out += this.delim; }
	  if (content) { this.out += content; }
	};

	// :: (Node)
	// Close the block for the given node.
	MarkdownSerializerState.prototype.closeBlock = function closeBlock (node) {
	  this.closed = node;
	};

	// :: (string, ?bool)
	// Add the given text to the document. When escape is not `false`,
	// it will be escaped.
	MarkdownSerializerState.prototype.text = function text (text$1, escape) {
	  var lines = text$1.split("\n");
	  for (var i = 0; i < lines.length; i++) {
	    var startOfLine = this.atBlank() || this.closed;
	    this.write();
	    this.out += escape !== false ? this.esc(lines[i], startOfLine) : lines[i];
	    if (i != lines.length - 1) { this.out += "\n"; }
	  }
	};

	// :: (Node)
	// Render the given node as a block.
	MarkdownSerializerState.prototype.render = function render (node, parent, index) {
	  if (typeof parent == "number") { throw new Error("!") }
	  if (!this.nodes[node.type.name]) { throw new Error("Token type `" + node.type.name + "` not supported by Markdown renderer") }
	  this.nodes[node.type.name](this, node, parent, index);
	};

	// :: (Node)
	// Render the contents of `parent` as block nodes.
	MarkdownSerializerState.prototype.renderContent = function renderContent (parent) {
	    var this$1$1 = this;

	  parent.forEach(function (node, _, i) { return this$1$1.render(node, parent, i); });
	};

	// :: (Node)
	// Render the contents of `parent` as inline content.
	MarkdownSerializerState.prototype.renderInline = function renderInline (parent) {
	    var this$1$1 = this;

	  var active = [], trailing = "";
	  var progress = function (node, _, index) {
	    var marks = node ? node.marks : [];

	    // Remove marks from `hard_break` that are the last node inside
	    // that mark to prevent parser edge cases with new lines just
	    // before closing marks.
	    // (FIXME it'd be nice if we had a schema-agnostic way to
	    // identify nodes that serialize as hard breaks)
	    if (node && node.type.name === "hard_break")
	      { marks = marks.filter(function (m) {
	        if (index + 1 == parent.childCount) { return false }
	        var next = parent.child(index + 1);
	        return m.isInSet(next.marks) && (!next.isText || /\S/.test(next.text))
	      }); }

	    var leading = trailing;
	    trailing = "";
	    // If whitespace has to be expelled from the node, adjust
	    // leading and trailing accordingly.
	    if (node && node.isText && marks.some(function (mark) {
	      var info = this$1$1.marks[mark.type.name];
	      return info && info.expelEnclosingWhitespace
	    })) {
	      var ref = /^(\s*)(.*?)(\s*)$/m.exec(node.text);
	        ref[0];
	        var lead = ref[1];
	        var inner$1 = ref[2];
	        var trail = ref[3];
	      leading += lead;
	      trailing = trail;
	      if (lead || trail) {
	        node = inner$1 ? node.withText(inner$1) : null;
	        if (!node) { marks = active; }
	      }
	    }

	    var inner = marks.length && marks[marks.length - 1], noEsc = inner && this$1$1.marks[inner.type.name].escape === false;
	    var len = marks.length - (noEsc ? 1 : 0);

	    // Try to reorder 'mixable' marks, such as em and strong, which
	    // in Markdown may be opened and closed in different order, so
	    // that order of the marks for the token matches the order in
	    // active.
	    outer: for (var i = 0; i < len; i++) {
	      var mark = marks[i];
	      if (!this$1$1.marks[mark.type.name].mixable) { break }
	      for (var j = 0; j < active.length; j++) {
	        var other = active[j];
	        if (!this$1$1.marks[other.type.name].mixable) { break }
	        if (mark.eq(other)) {
	          if (i > j)
	            { marks = marks.slice(0, j).concat(mark).concat(marks.slice(j, i)).concat(marks.slice(i + 1, len)); }
	          else if (j > i)
	            { marks = marks.slice(0, i).concat(marks.slice(i + 1, j)).concat(mark).concat(marks.slice(j, len)); }
	          continue outer
	        }
	      }
	    }

	    // Find the prefix of the mark set that didn't change
	    var keep = 0;
	    while (keep < Math.min(active.length, len) && marks[keep].eq(active[keep])) { ++keep; }

	    // Close the marks that need to be closed
	    while (keep < active.length)
	      { this$1$1.text(this$1$1.markString(active.pop(), false, parent, index), false); }

	    // Output any previously expelled trailing whitespace outside the marks
	    if (leading) { this$1$1.text(leading); }

	    // Open the marks that need to be opened
	    if (node) {
	      while (active.length < len) {
	        var add = marks[active.length];
	        active.push(add);
	        this$1$1.text(this$1$1.markString(add, true, parent, index), false);
	      }

	      // Render the node. Special case code marks, since their content
	      // may not be escaped.
	      if (noEsc && node.isText)
	        { this$1$1.text(this$1$1.markString(inner, true, parent, index) + node.text +
	                  this$1$1.markString(inner, false, parent, index + 1), false); }
	      else
	        { this$1$1.render(node, parent, index); }
	    }
	  };
	  parent.forEach(progress);
	  progress(null, null, parent.childCount);
	};

	// :: (Node, string, (number) → string)
	// Render a node's content as a list. `delim` should be the extra
	// indentation added to all lines except the first in an item,
	// `firstDelim` is a function going from an item index to a
	// delimiter for the first line of the item.
	MarkdownSerializerState.prototype.renderList = function renderList (node, delim, firstDelim) {
	    var this$1$1 = this;

	  if (this.closed && this.closed.type == node.type)
	    { this.flushClose(3); }
	  else if (this.inTightList)
	    { this.flushClose(1); }

	  var isTight = typeof node.attrs.tight != "undefined" ? node.attrs.tight : this.options.tightLists;
	  var prevTight = this.inTightList;
	  this.inTightList = isTight;
	  node.forEach(function (child, _, i) {
	    if (i && isTight) { this$1$1.flushClose(1); }
	    this$1$1.wrapBlock(delim, firstDelim(i), node, function () { return this$1$1.render(child, node, i); });
	  });
	  this.inTightList = prevTight;
	};

	// :: (string, ?bool) → string
	// Escape the given string so that it can safely appear in Markdown
	// content. If `startOfLine` is true, also escape characters that
	// have special meaning only at the start of the line.
	MarkdownSerializerState.prototype.esc = function esc (str, startOfLine) {
	  str = str.replace(
	    /[`*\\~\[\]_]/g,
	    function (m, i) { return m == "_" && i > 0 && i + 1 < str.length && str[i-1].match(/\w/) && str[i+1].match(/\w/) ?m : "\\" + m; }
	  );
	  if (startOfLine) { str = str.replace(/^[:#\-*+>]/, "\\$&").replace(/^(\s*\d+)\./, "$1\\."); }
	  if (this.options.escapeExtraCharacters) { str = str.replace(this.options.escapeExtraCharacters, "\\$&"); }
	  return str
	};

	MarkdownSerializerState.prototype.quote = function quote (str) {
	  var wrap = str.indexOf('"') == -1 ? '""' : str.indexOf("'") == -1 ? "''" : "()";
	  return wrap[0] + str + wrap[1]
	};

	// :: (string, number) → string
	// Repeat the given string `n` times.
	MarkdownSerializerState.prototype.repeat = function repeat (str, n) {
	  var out = "";
	  for (var i = 0; i < n; i++) { out += str; }
	  return out
	};

	// : (Mark, bool, string?) → string
	// Get the markdown string for a given opening or closing mark.
	MarkdownSerializerState.prototype.markString = function markString (mark, open, parent, index) {
	  var info = this.marks[mark.type.name];
	  var value = open ? info.open : info.close;
	  return typeof value == "string" ? value : value(this, mark, parent, index)
	};

	// :: (string) → { leading: ?string, trailing: ?string }
	// Get leading and trailing whitespace from a string. Values of
	// leading or trailing property of the return object will be undefined
	// if there is no match.
	MarkdownSerializerState.prototype.getEnclosingWhitespace = function getEnclosingWhitespace (text) {
	  return {
	    leading: (text.match(/^(\s+)/) || [])[0],
	    trailing: (text.match(/(\s+)$/) || [])[0]
	  }
	};

	// MarkdownView{
	var MarkdownView = function MarkdownView(target, content) {
	  this.textarea = target.appendChild(document.createElement("textarea"));
	  this.textarea.value = content;
	};

	var prototypeAccessors = { content: { configurable: true } };

	prototypeAccessors.content.get = function () { return this.textarea.value };
	MarkdownView.prototype.focus = function focus () { this.textarea.focus(); };
	MarkdownView.prototype.destroy = function destroy () { this.textarea.remove(); };

	Object.defineProperties( MarkdownView.prototype, prototypeAccessors );

	var ProseMirrorView = function ProseMirrorView(target, content) {
	  this.view = new prosemirrorView.EditorView(target, {
	    state: prosemirrorState.EditorState.create({
	      doc: defaultMarkdownParser.parse(content),
	      plugins: prosemirrorExampleSetup.exampleSetup({schema: schema})
	    })
	  });
	};

	var prototypeAccessors$1 = { content: { configurable: true } };

	prototypeAccessors$1.content.get = function () {
	  return defaultMarkdownSerializer.serialize(this.view.state.doc)
	};
	ProseMirrorView.prototype.focus = function focus () { this.view.focus(); };
	ProseMirrorView.prototype.destroy = function destroy () { this.view.destroy(); };

	Object.defineProperties( ProseMirrorView.prototype, prototypeAccessors$1 );
	// }

	// radio{
	var place = document.querySelector("#editor");
	var view = new MarkdownView(place, document.querySelector("#content").value);

	document.querySelectorAll("input[type=radio]").forEach(function (button) {
	  button.addEventListener("change", function () {
	    if (!button.checked) { return }
	    var View = button.value == "markdown" ? MarkdownView : ProseMirrorView;
	    if (view instanceof View) { return }
	    var content = view.content;
	    view.destroy();
	    view = new View(place, content);
	    view.focus();
	  });
	});
	// }

})(PM.view, PM.state, PM.model, PM.example_setup);


!function(){"use strict";function t(t){this.content=t}function e(t,n,r){for(var o=0;;o++){if(o==t.childCount||o==n.childCount)return t.childCount==n.childCount?null:r;var i=t.child(o),s=n.child(o);if(i!=s){if(!i.sameMarkup(s))return r;if(i.isText&&i.text!=s.text){for(var a=0;i.text[a]==s.text[a];a++)r++;return r}if(i.content.size||s.content.size){var c=e(i.content,s.content,r+1);if(null!=c)return c}r+=i.nodeSize}else r+=i.nodeSize}}function n(t,e,r,o){for(var i=t.childCount,s=e.childCount;;){if(0==i||0==s)return i==s?null:{a:r,b:o};var a=t.child(--i),c=e.child(--s),l=a.nodeSize;if(a!=c){if(!a.sameMarkup(c))return{a:r,b:o};if(a.isText&&a.text!=c.text){for(var p=0,h=Math.min(a.text.length,c.text.length);p<h&&a.text[a.text.length-p-1]==c.text[c.text.length-p-1];)p++,r--,o--;return{a:r,b:o}}if(a.content.size||c.content.size){var u=n(a.content,c.content,r-1,o-1);if(u)return u}r-=l,o-=l}else r-=l,o-=l}}t.prototype={constructor:t,find:function(t){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===t)return e;return-1},get:function(t){var e=this.find(t);return-1==e?void 0:this.content[e+1]},update:function(e,n,r){var o=r&&r!=e?this.remove(r):this,i=o.find(e),s=o.content.slice();return-1==i?s.push(r||e,n):(s[i+1]=n,r&&(s[i]=r)),new t(s)},remove:function(e){var n=this.find(e);if(-1==n)return this;var r=this.content.slice();return r.splice(n,2),new t(r)},addToStart:function(e,n){return new t([e,n].concat(this.remove(e).content))},addToEnd:function(e,n){var r=this.remove(e).content.slice();return r.push(e,n),new t(r)},addBefore:function(e,n,r){var o=this.remove(n),i=o.content.slice(),s=o.find(e);return i.splice(-1==s?i.length:s,0,n,r),new t(i)},forEach:function(t){for(var e=0;e<this.content.length;e+=2)t(this.content[e],this.content[e+1])},prepend:function(e){return(e=t.from(e)).size?new t(e.content.concat(this.subtract(e).content)):this},append:function(e){return(e=t.from(e)).size?new t(this.subtract(e).content.concat(e.content)):this},subtract:function(e){var n=this;e=t.from(e);for(var r=0;r<e.content.length;r+=2)n=n.remove(e.content[r]);return n},get size(){return this.content.length>>1}},t.from=function(e){if(e instanceof t)return e;var n=[];if(e)for(var r in e)n.push(r,e[r]);return new t(n)};var r=function(t,e){if(this.content=t,this.size=e||0,null==e)for(var n=0;n<t.length;n++)this.size+=t[n].nodeSize},o={firstChild:{configurable:!0},lastChild:{configurable:!0},childCount:{configurable:!0}};r.prototype.nodesBetween=function(t,e,n,r,o){void 0===r&&(r=0);for(var i=0,s=0;s<e;i++){var a=this.content[i],c=s+a.nodeSize;if(c>t&&!1!==n(a,r+s,o||null,i)&&a.content.size){var l=s+1;a.nodesBetween(Math.max(0,t-l),Math.min(a.content.size,e-l),n,r+l)}s=c}},r.prototype.descendants=function(t){this.nodesBetween(0,this.size,t)},r.prototype.textBetween=function(t,e,n,r){var o="",i=!0;return this.nodesBetween(t,e,(function(s,a){s.isText?(o+=s.text.slice(Math.max(t,a)-a,e-a),i=!n):s.isLeaf?(r?o+="function"==typeof r?r(s):r:s.type.spec.leafText&&(o+=s.type.spec.leafText(s)),i=!n):!i&&s.isBlock&&(o+=n,i=!0)}),0),o},r.prototype.append=function(t){if(!t.size)return this;if(!this.size)return t;var e=this.lastChild,n=t.firstChild,o=this.content.slice(),i=0;for(e.isText&&e.sameMarkup(n)&&(o[o.length-1]=e.withText(e.text+n.text),i=1);i<t.content.length;i++)o.push(t.content[i]);return new r(o,this.size+t.size)},r.prototype.cut=function(t,e){if(void 0===e&&(e=this.size),0==t&&e==this.size)return this;var n=[],o=0;if(e>t)for(var i=0,s=0;s<e;i++){var a=this.content[i],c=s+a.nodeSize;c>t&&((s<t||c>e)&&(a=a.isText?a.cut(Math.max(0,t-s),Math.min(a.text.length,e-s)):a.cut(Math.max(0,t-s-1),Math.min(a.content.size,e-s-1))),n.push(a),o+=a.nodeSize),s=c}return new r(n,o)},r.prototype.cutByIndex=function(t,e){return t==e?r.empty:0==t&&e==this.content.length?this:new r(this.content.slice(t,e))},r.prototype.replaceChild=function(t,e){var n=this.content[t];if(n==e)return this;var o=this.content.slice(),i=this.size+e.nodeSize-n.nodeSize;return o[t]=e,new r(o,i)},r.prototype.addToStart=function(t){return new r([t].concat(this.content),this.size+t.nodeSize)},r.prototype.addToEnd=function(t){return new r(this.content.concat(t),this.size+t.nodeSize)},r.prototype.eq=function(t){if(this.content.length!=t.content.length)return!1;for(var e=0;e<this.content.length;e++)if(!this.content[e].eq(t.content[e]))return!1;return!0},o.firstChild.get=function(){return this.content.length?this.content[0]:null},o.lastChild.get=function(){return this.content.length?this.content[this.content.length-1]:null},o.childCount.get=function(){return this.content.length},r.prototype.child=function(t){var e=this.content[t];if(!e)throw new RangeError("Index "+t+" out of range for "+this);return e},r.prototype.maybeChild=function(t){return this.content[t]||null},r.prototype.forEach=function(t){for(var e=0,n=0;e<this.content.length;e++){var r=this.content[e];t(r,n,e),n+=r.nodeSize}},r.prototype.findDiffStart=function(t,n){return void 0===n&&(n=0),e(this,t,n)},r.prototype.findDiffEnd=function(t,e,r){return void 0===e&&(e=this.size),void 0===r&&(r=t.size),n(this,t,e,r)},r.prototype.findIndex=function(t,e){if(void 0===e&&(e=-1),0==t)return s(0,t);if(t==this.size)return s(this.content.length,t);if(t>this.size||t<0)throw new RangeError("Position "+t+" outside of fragment ("+this+")");for(var n=0,r=0;;n++){var o=r+this.child(n).nodeSize;if(o>=t)return o==t||e>0?s(n+1,o):s(n,r);r=o}},r.prototype.toString=function(){return"<"+this.toStringInner()+">"},r.prototype.toStringInner=function(){return this.content.join(", ")},r.prototype.toJSON=function(){return this.content.length?this.content.map((function(t){return t.toJSON()})):null},r.fromJSON=function(t,e){if(!e)return r.empty;if(!Array.isArray(e))throw new RangeError("Invalid input for Fragment.fromJSON");return new r(e.map(t.nodeFromJSON))},r.fromArray=function(t){if(!t.length)return r.empty;for(var e,n=0,o=0;o<t.length;o++){var i=t[o];n+=i.nodeSize,o&&i.isText&&t[o-1].sameMarkup(i)?(e||(e=t.slice(0,o)),e[e.length-1]=i.withText(e[e.length-1].text+i.text)):e&&e.push(i)}return new r(e||t,n)},r.from=function(t){if(!t)return r.empty;if(t instanceof r)return t;if(Array.isArray(t))return this.fromArray(t);if(t.attrs)return new r([t],t.nodeSize);throw new RangeError("Can not convert "+t+" to a Fragment"+(t.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))},Object.defineProperties(r.prototype,o),r.empty=new r([],0);var i={index:0,offset:0};function s(t,e){return i.index=t,i.offset=e,i}function a(t,e){if(t===e)return!0;if(!t||"object"!=typeof t||!e||"object"!=typeof e)return!1;var n=Array.isArray(t);if(Array.isArray(e)!=n)return!1;if(n){if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(!a(t[r],e[r]))return!1}else{for(var o in t)if(!(o in e)||!a(t[o],e[o]))return!1;for(var i in e)if(!(i in t))return!1}return!0}var c=function(t,e){this.type=t,this.attrs=e};c.prototype.addToSet=function(t){for(var e,n=!1,r=0;r<t.length;r++){var o=t[r];if(this.eq(o))return t;if(this.type.excludes(o.type))e||(e=t.slice(0,r));else{if(o.type.excludes(this.type))return t;!n&&o.type.rank>this.type.rank&&(e||(e=t.slice(0,r)),e.push(this),n=!0),e&&e.push(o)}}return e||(e=t.slice()),n||e.push(this),e},c.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return t.slice(0,e).concat(t.slice(e+1));return t},c.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return!0;return!1},c.prototype.eq=function(t){return this==t||this.type==t.type&&a(this.attrs,t.attrs)},c.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}return t},c.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Mark.fromJSON");var n=t.marks[e.type];if(!n)throw new RangeError("There is no mark type "+e.type+" in this schema");return n.create(e.attrs)},c.sameSet=function(t,e){if(t==e)return!0;if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].eq(e[n]))return!1;return!0},c.setFrom=function(t){if(!t||Array.isArray(t)&&0==t.length)return c.none;if(t instanceof c)return[t];var e=t.slice();return e.sort((function(t,e){return t.type.rank-e.type.rank})),e},c.none=[];var l=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),p=function(t,e,n){this.content=t,this.openStart=e,this.openEnd=n},h={size:{configurable:!0}};function u(t,e,n){var r=t.findIndex(e),o=r.index,i=r.offset,s=t.maybeChild(o),a=t.findIndex(n),c=a.index,l=a.offset;if(i==e||s.isText){if(l!=n&&!t.child(c).isText)throw new RangeError("Removing non-flat range");return t.cut(0,e).append(t.cut(n))}if(o!=c)throw new RangeError("Removing non-flat range");return t.replaceChild(o,s.copy(u(s.content,e-i-1,n-i-1)))}function f(t,e,n,r){var o=t.findIndex(e),i=o.index,s=o.offset,a=t.maybeChild(i);if(s==e||a.isText)return r&&!r.canReplace(i,i,n)?null:t.cut(0,e).append(n).append(t.cut(e));var c=f(a.content,e-s-1,n);return c&&t.replaceChild(i,a.copy(c))}function d(t,e,n){if(n.openStart>t.depth)throw new l("Inserted content deeper than insertion position");if(t.depth-n.openStart!=e.depth-n.openEnd)throw new l("Inconsistent open depths");return m(t,e,n,0)}function m(t,e,n,o){var i=t.index(o),s=t.node(o);if(i==e.index(o)&&o<t.depth-n.openStart){var a=m(t,e,n,o+1);return s.copy(s.content.replaceChild(i,a))}if(n.content.size){if(n.openStart||n.openEnd||t.depth!=o||e.depth!=o){var c=function(t,e){for(var n=e.depth-t.openStart,o=e.node(n).copy(t.content),i=n-1;i>=0;i--)o=e.node(i).copy(r.from(o));return{start:o.resolveNoCache(t.openStart+n),end:o.resolveNoCache(o.content.size-t.openEnd-n)}}(n,t);return b(s,k(t,c.start,c.end,e,o))}var l=t.parent,p=l.content;return b(l,p.cut(0,t.parentOffset).append(n.content).append(p.cut(e.parentOffset)))}return b(s,x(t,e,o))}function v(t,e){if(!e.type.compatibleContent(t.type))throw new l("Cannot join "+e.type.name+" onto "+t.type.name)}function g(t,e,n){var r=t.node(n);return v(r,e.node(n)),r}function y(t,e){var n=e.length-1;n>=0&&t.isText&&t.sameMarkup(e[n])?e[n]=t.withText(e[n].text+t.text):e.push(t)}function w(t,e,n,r){var o=(e||t).node(n),i=0,s=e?e.index(n):o.childCount;t&&(i=t.index(n),t.depth>n?i++:t.textOffset&&(y(t.nodeAfter,r),i++));for(var a=i;a<s;a++)y(o.child(a),r);e&&e.depth==n&&e.textOffset&&y(e.nodeBefore,r)}function b(t,e){if(!t.type.validContent(e))throw new l("Invalid content for node "+t.type.name);return t.copy(e)}function k(t,e,n,o,i){var s=t.depth>i&&g(t,e,i+1),a=o.depth>i&&g(n,o,i+1),c=[];return w(null,t,i,c),s&&a&&e.index(i)==n.index(i)?(v(s,a),y(b(s,k(t,e,n,o,i+1)),c)):(s&&y(b(s,x(t,e,i+1)),c),w(e,n,i,c),a&&y(b(a,x(n,o,i+1)),c)),w(o,null,i,c),new r(c)}function x(t,e,n){var o=[];(w(null,t,n,o),t.depth>n)&&y(b(g(t,e,n+1),x(t,e,n+1)),o);return w(e,null,n,o),new r(o)}h.size.get=function(){return this.content.size-this.openStart-this.openEnd},p.prototype.insertAt=function(t,e){var n=f(this.content,t+this.openStart,e);return n&&new p(n,this.openStart,this.openEnd)},p.prototype.removeBetween=function(t,e){return new p(u(this.content,t+this.openStart,e+this.openStart),this.openStart,this.openEnd)},p.prototype.eq=function(t){return this.content.eq(t.content)&&this.openStart==t.openStart&&this.openEnd==t.openEnd},p.prototype.toString=function(){return this.content+"("+this.openStart+","+this.openEnd+")"},p.prototype.toJSON=function(){if(!this.content.size)return null;var t={content:this.content.toJSON()};return this.openStart>0&&(t.openStart=this.openStart),this.openEnd>0&&(t.openEnd=this.openEnd),t},p.fromJSON=function(t,e){if(!e)return p.empty;var n=e.openStart||0,o=e.openEnd||0;if("number"!=typeof n||"number"!=typeof o)throw new RangeError("Invalid input for Slice.fromJSON");return new p(r.fromJSON(t,e.content),n,o)},p.maxOpen=function(t,e){void 0===e&&(e=!0);for(var n=0,r=0,o=t.firstChild;o&&!o.isLeaf&&(e||!o.type.spec.isolating);o=o.firstChild)n++;for(var i=t.lastChild;i&&!i.isLeaf&&(e||!i.type.spec.isolating);i=i.lastChild)r++;return new p(t,n,r)},Object.defineProperties(p.prototype,h),p.empty=new p(r.empty,0,0);var S=function(t,e,n){this.pos=t,this.path=e,this.parentOffset=n,this.depth=e.length/3-1},M={parent:{configurable:!0},doc:{configurable:!0},textOffset:{configurable:!0},nodeAfter:{configurable:!0},nodeBefore:{configurable:!0}};S.prototype.resolveDepth=function(t){return null==t?this.depth:t<0?this.depth+t:t},M.parent.get=function(){return this.node(this.depth)},M.doc.get=function(){return this.node(0)},S.prototype.node=function(t){return this.path[3*this.resolveDepth(t)]},S.prototype.index=function(t){return this.path[3*this.resolveDepth(t)+1]},S.prototype.indexAfter=function(t){return t=this.resolveDepth(t),this.index(t)+(t!=this.depth||this.textOffset?1:0)},S.prototype.start=function(t){return 0==(t=this.resolveDepth(t))?0:this.path[3*t-1]+1},S.prototype.end=function(t){return t=this.resolveDepth(t),this.start(t)+this.node(t).content.size},S.prototype.before=function(t){if(!(t=this.resolveDepth(t)))throw new RangeError("There is no position before the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1]},S.prototype.after=function(t){if(!(t=this.resolveDepth(t)))throw new RangeError("There is no position after the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1]+this.path[3*t].nodeSize},M.textOffset.get=function(){return this.pos-this.path[this.path.length-1]},M.nodeAfter.get=function(){var t=this.parent,e=this.index(this.depth);if(e==t.childCount)return null;var n=this.pos-this.path[this.path.length-1],r=t.child(e);return n?t.child(e).cut(n):r},M.nodeBefore.get=function(){var t=this.index(this.depth),e=this.pos-this.path[this.path.length-1];return e?this.parent.child(t).cut(0,e):0==t?null:this.parent.child(t-1)},S.prototype.posAtIndex=function(t,e){e=this.resolveDepth(e);for(var n=this.path[3*e],r=0==e?0:this.path[3*e-1]+1,o=0;o<t;o++)r+=n.child(o).nodeSize;return r},S.prototype.marks=function(){var t=this.parent,e=this.index();if(0==t.content.size)return c.none;if(this.textOffset)return t.child(e).marks;var n=t.maybeChild(e-1),r=t.maybeChild(e);if(!n){var o=n;n=r,r=o}for(var i=n.marks,s=0;s<i.length;s++)!1!==i[s].type.spec.inclusive||r&&i[s].isInSet(r.marks)||(i=i[s--].removeFromSet(i));return i},S.prototype.marksAcross=function(t){var e=this.parent.maybeChild(this.index());if(!e||!e.isInline)return null;for(var n=e.marks,r=t.parent.maybeChild(t.index()),o=0;o<n.length;o++)!1!==n[o].type.spec.inclusive||r&&n[o].isInSet(r.marks)||(n=n[o--].removeFromSet(n));return n},S.prototype.sharedDepth=function(t){for(var e=this.depth;e>0;e--)if(this.start(e)<=t&&this.end(e)>=t)return e;return 0},S.prototype.blockRange=function(t,e){if(void 0===t&&(t=this),t.pos<this.pos)return t.blockRange(this);for(var n=this.depth-(this.parent.inlineContent||this.pos==t.pos?1:0);n>=0;n--)if(t.pos<=this.end(n)&&(!e||e(this.node(n))))return new D(this,t,n);return null},S.prototype.sameParent=function(t){return this.pos-this.parentOffset==t.pos-t.parentOffset},S.prototype.max=function(t){return t.pos>this.pos?t:this},S.prototype.min=function(t){return t.pos<this.pos?t:this},S.prototype.toString=function(){for(var t="",e=1;e<=this.depth;e++)t+=(t?"/":"")+this.node(e).type.name+"_"+this.index(e-1);return t+":"+this.parentOffset},S.resolve=function(t,e){if(!(e>=0&&e<=t.content.size))throw new RangeError("Position "+e+" out of range");for(var n=[],r=0,o=e,i=t;;){var s=i.content.findIndex(o),a=s.index,c=s.offset,l=o-c;if(n.push(i,a,r+c),!l)break;if((i=i.child(a)).isText)break;o=l-1,r+=c+1}return new S(e,n,o)},S.resolveCached=function(t,e){for(var n=0;n<C.length;n++){var r=C[n];if(r.pos==e&&r.doc==t)return r}var o=C[O]=S.resolve(t,e);return O=(O+1)%N,o},Object.defineProperties(S.prototype,M);var C=[],O=0,N=12,D=function(t,e,n){this.$from=t,this.$to=e,this.depth=n},T={start:{configurable:!0},end:{configurable:!0},parent:{configurable:!0},startIndex:{configurable:!0},endIndex:{configurable:!0}};T.start.get=function(){return this.$from.before(this.depth+1)},T.end.get=function(){return this.$to.after(this.depth+1)},T.parent.get=function(){return this.$from.node(this.depth)},T.startIndex.get=function(){return this.$from.index(this.depth)},T.endIndex.get=function(){return this.$to.indexAfter(this.depth)},Object.defineProperties(D.prototype,T);var A=Object.create(null),E=function(t,e,n,o){void 0===o&&(o=c.none),this.type=t,this.attrs=e,this.marks=o,this.content=n||r.empty},I={nodeSize:{configurable:!0},childCount:{configurable:!0},textContent:{configurable:!0},firstChild:{configurable:!0},lastChild:{configurable:!0},isBlock:{configurable:!0},isTextblock:{configurable:!0},inlineContent:{configurable:!0},isInline:{configurable:!0},isText:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0}};I.nodeSize.get=function(){return this.isLeaf?1:2+this.content.size},I.childCount.get=function(){return this.content.childCount},E.prototype.child=function(t){return this.content.child(t)},E.prototype.maybeChild=function(t){return this.content.maybeChild(t)},E.prototype.forEach=function(t){this.content.forEach(t)},E.prototype.nodesBetween=function(t,e,n,r){void 0===r&&(r=0),this.content.nodesBetween(t,e,n,r,this)},E.prototype.descendants=function(t){this.nodesBetween(0,this.content.size,t)},I.textContent.get=function(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,"")},E.prototype.textBetween=function(t,e,n,r){return this.content.textBetween(t,e,n,r)},I.firstChild.get=function(){return this.content.firstChild},I.lastChild.get=function(){return this.content.lastChild},E.prototype.eq=function(t){return this==t||this.sameMarkup(t)&&this.content.eq(t.content)},E.prototype.sameMarkup=function(t){return this.hasMarkup(t.type,t.attrs,t.marks)},E.prototype.hasMarkup=function(t,e,n){return this.type==t&&a(this.attrs,e||t.defaultAttrs||A)&&c.sameSet(this.marks,n||c.none)},E.prototype.copy=function(t){return void 0===t&&(t=null),t==this.content?this:new E(this.type,this.attrs,t,this.marks)},E.prototype.mark=function(t){return t==this.marks?this:new E(this.type,this.attrs,this.content,t)},E.prototype.cut=function(t,e){return void 0===e&&(e=this.content.size),0==t&&e==this.content.size?this:this.copy(this.content.cut(t,e))},E.prototype.slice=function(t,e,n){if(void 0===e&&(e=this.content.size),void 0===n&&(n=!1),t==e)return p.empty;var r=this.resolve(t),o=this.resolve(e),i=n?0:r.sharedDepth(e),s=r.start(i),a=r.node(i).content.cut(r.pos-s,o.pos-s);return new p(a,r.depth-i,o.depth-i)},E.prototype.replace=function(t,e,n){return d(this.resolve(t),this.resolve(e),n)},E.prototype.nodeAt=function(t){for(var e=this;;){var n=e.content.findIndex(t),r=n.index,o=n.offset;if(!(e=e.maybeChild(r)))return null;if(o==t||e.isText)return e;t-=o+1}},E.prototype.childAfter=function(t){var e=this.content.findIndex(t),n=e.index,r=e.offset;return{node:this.content.maybeChild(n),index:n,offset:r}},E.prototype.childBefore=function(t){if(0==t)return{node:null,index:0,offset:0};var e=this.content.findIndex(t),n=e.index,r=e.offset;if(r<t)return{node:this.content.child(n),index:n,offset:r};var o=this.content.child(n-1);return{node:o,index:n-1,offset:r-o.nodeSize}},E.prototype.resolve=function(t){return S.resolveCached(this,t)},E.prototype.resolveNoCache=function(t){return S.resolve(this,t)},E.prototype.rangeHasMark=function(t,e,n){var r=!1;return e>t&&this.nodesBetween(t,e,(function(t){return n.isInSet(t.marks)&&(r=!0),!r})),r},I.isBlock.get=function(){return this.type.isBlock},I.isTextblock.get=function(){return this.type.isTextblock},I.inlineContent.get=function(){return this.type.inlineContent},I.isInline.get=function(){return this.type.isInline},I.isText.get=function(){return this.type.isText},I.isLeaf.get=function(){return this.type.isLeaf},I.isAtom.get=function(){return this.type.isAtom},E.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);var t=this.type.name;return this.content.size&&(t+="("+this.content.toStringInner()+")"),z(this.marks,t)},E.prototype.contentMatchAt=function(t){var e=this.type.contentMatch.matchFragment(this.content,0,t);if(!e)throw new Error("Called contentMatchAt on a node with invalid content");return e},E.prototype.canReplace=function(t,e,n,o,i){void 0===n&&(n=r.empty),void 0===o&&(o=0),void 0===i&&(i=n.childCount);var s=this.contentMatchAt(t).matchFragment(n,o,i),a=s&&s.matchFragment(this.content,e);if(!a||!a.validEnd)return!1;for(var c=o;c<i;c++)if(!this.type.allowsMarks(n.child(c).marks))return!1;return!0},E.prototype.canReplaceWith=function(t,e,n,r){if(r&&!this.type.allowsMarks(r))return!1;var o=this.contentMatchAt(t).matchType(n),i=o&&o.matchFragment(this.content,e);return!!i&&i.validEnd},E.prototype.canAppend=function(t){return t.content.size?this.canReplace(this.childCount,this.childCount,t.content):this.type.compatibleContent(t.type)},E.prototype.check=function(){if(!this.type.validContent(this.content))throw new RangeError("Invalid content for node "+this.type.name+": "+this.content.toString().slice(0,50));for(var t=c.none,e=0;e<this.marks.length;e++)t=this.marks[e].addToSet(t);if(!c.sameSet(t,this.marks))throw new RangeError("Invalid collection of marks for node "+this.type.name+": "+this.marks.map((function(t){return t.type.name})));this.content.forEach((function(t){return t.check()}))},E.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}return this.content.size&&(t.content=this.content.toJSON()),this.marks.length&&(t.marks=this.marks.map((function(t){return t.toJSON()}))),t},E.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Node.fromJSON");var n=null;if(e.marks){if(!Array.isArray(e.marks))throw new RangeError("Invalid mark data for Node.fromJSON");n=e.marks.map(t.markFromJSON)}if("text"==e.type){if("string"!=typeof e.text)throw new RangeError("Invalid text node in JSON");return t.text(e.text,n)}var o=r.fromJSON(t,e.content);return t.nodeType(e.type).create(e.attrs,o,n)},Object.defineProperties(E.prototype,I),E.prototype.text=void 0;var R=function(t){function e(e,n,r,o){if(t.call(this,e,n,null,o),!r)throw new RangeError("Empty text nodes are not allowed");this.text=r}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={textContent:{configurable:!0},nodeSize:{configurable:!0}};return e.prototype.toString=function(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):z(this.marks,JSON.stringify(this.text))},n.textContent.get=function(){return this.text},e.prototype.textBetween=function(t,e){return this.text.slice(t,e)},n.nodeSize.get=function(){return this.text.length},e.prototype.mark=function(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t)},e.prototype.withText=function(t){return t==this.text?this:new e(this.type,this.attrs,t,this.marks)},e.prototype.cut=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.text.length),0==t&&e==this.text.length?this:this.withText(this.text.slice(t,e))},e.prototype.eq=function(t){return this.sameMarkup(t)&&this.text==t.text},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.text=this.text,e},Object.defineProperties(e.prototype,n),e}(E);function z(t,e){for(var n=t.length-1;n>=0;n--)e=t[n].type.name+"("+e+")";return e}var P=function(t){this.validEnd=t,this.next=[],this.wrapCache=[]},B={inlineContent:{configurable:!0},defaultType:{configurable:!0},edgeCount:{configurable:!0}};P.parse=function(t,e){var n=new _(t,e);if(null==n.next)return P.empty;var r=F(n);n.next&&n.err("Unexpected trailing text");var o=function(t){var e=Object.create(null);return n(W(t,0));function n(r){var o=[];r.forEach((function(e){t[e].forEach((function(e){var n=e.term,r=e.to;if(n){for(var i,s=0;s<o.length;s++)o[s][0]==n&&(i=o[s][1]);W(t,r).forEach((function(t){i||o.push([n,i=[]]),-1==i.indexOf(t)&&i.push(t)}))}}))}));for(var i=e[r.join(",")]=new P(r.indexOf(t.length-1)>-1),s=0;s<o.length;s++){var a=o[s][1].sort(J);i.next.push({type:o[s][0],next:e[a.join(",")]||n(a)})}return i}}(function(t){var e=[[]];return o(i(t,0),n()),e;function n(){return e.push([])-1}function r(t,n,r){var o={term:r,to:n};return e[t].push(o),o}function o(t,e){t.forEach((function(t){return t.to=e}))}function i(t,e){if("choice"==t.type)return t.exprs.reduce((function(t,n){return t.concat(i(n,e))}),[]);if("seq"!=t.type){if("star"==t.type){var s=n();return r(e,s),o(i(t.expr,s),s),[r(s)]}if("plus"==t.type){var a=n();return o(i(t.expr,e),a),o(i(t.expr,a),a),[r(a)]}if("opt"==t.type)return[r(e)].concat(i(t.expr,e));if("range"==t.type){for(var c=e,l=0;l<t.min;l++){var p=n();o(i(t.expr,c),p),c=p}if(-1==t.max)o(i(t.expr,c),c);else for(var h=t.min;h<t.max;h++){var u=n();r(c,u),o(i(t.expr,c),u),c=u}return[r(c)]}if("name"==t.type)return[r(e,void 0,t.value)];throw new Error("Unknown expr type")}for(var f=0;;f++){var d=i(t.exprs[f],e);if(f==t.exprs.length-1)return d;o(d,e=n())}}}(r));return function(t,e){for(var n=0,r=[t];n<r.length;n++){for(var o=r[n],i=!o.validEnd,s=[],a=0;a<o.next.length;a++){var c=o.next[a],l=c.type,p=c.next;s.push(l.name),!i||l.isText||l.hasRequiredAttrs()||(i=!1),-1==r.indexOf(p)&&r.push(p)}i&&e.err("Only non-generatable nodes ("+s.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}(o,n),o},P.prototype.matchType=function(t){for(var e=0;e<this.next.length;e++)if(this.next[e].type==t)return this.next[e].next;return null},P.prototype.matchFragment=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.childCount);for(var r=this,o=e;r&&o<n;o++)r=r.matchType(t.child(o).type);return r},B.inlineContent.get=function(){return this.next.length&&this.next[0].type.isInline},B.defaultType.get=function(){for(var t=0;t<this.next.length;t++){var e=this.next[t].type;if(!e.isText&&!e.hasRequiredAttrs())return e}return null},P.prototype.compatible=function(t){for(var e=0;e<this.next.length;e++)for(var n=0;n<t.next.length;n++)if(this.next[e].type==t.next[n].type)return!0;return!1},P.prototype.fillBefore=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=0);var o=[this];return function i(s,a){var c=s.matchFragment(t,n);if(c&&(!e||c.validEnd))return r.from(a.map((function(t){return t.createAndFill()})));for(var l=0;l<s.next.length;l++){var p=s.next[l],h=p.type,u=p.next;if(!h.isText&&!h.hasRequiredAttrs()&&-1==o.indexOf(u)){o.push(u);var f=i(u,a.concat(h));if(f)return f}}return null}(this,[])},P.prototype.findWrapping=function(t){for(var e=0;e<this.wrapCache.length;e+=2)if(this.wrapCache[e]==t)return this.wrapCache[e+1];var n=this.computeWrapping(t);return this.wrapCache.push(t,n),n},P.prototype.computeWrapping=function(t){for(var e=Object.create(null),n=[{match:this,type:null,via:null}];n.length;){var r=n.shift(),o=r.match;if(o.matchType(t)){for(var i=[],s=r;s.type;s=s.via)i.push(s.type);return i.reverse()}for(var a=0;a<o.next.length;a++){var c=o.next[a],l=c.type,p=c.next;l.isLeaf||l.hasRequiredAttrs()||l.name in e||r.type&&!p.validEnd||(n.push({match:l.contentMatch,type:l,via:r}),e[l.name]=!0)}}return null},B.edgeCount.get=function(){return this.next.length},P.prototype.edge=function(t){if(t>=this.next.length)throw new RangeError("There's no "+t+"th edge in this content match");return this.next[t]},P.prototype.toString=function(){var t=[];return function e(n){t.push(n);for(var r=0;r<n.next.length;r++)-1==t.indexOf(n.next[r].next)&&e(n.next[r].next)}(this),t.map((function(e,n){for(var r=n+(e.validEnd?"*":" ")+" ",o=0;o<e.next.length;o++)r+=(o?", ":"")+e.next[o].type.name+"->"+t.indexOf(e.next[o].next);return r})).join("\n")},Object.defineProperties(P.prototype,B),P.empty=new P(!0);var _=function(t,e){this.string=t,this.nodeTypes=e,this.inline=null,this.pos=0,this.tokens=t.split(/\s*(?=\b|\W|$)/),""==this.tokens[this.tokens.length-1]&&this.tokens.pop(),""==this.tokens[0]&&this.tokens.shift()},V={next:{configurable:!0}};function F(t){var e=[];do{e.push($(t))}while(t.eat("|"));return 1==e.length?e[0]:{type:"choice",exprs:e}}function $(t){var e=[];do{e.push(q(t))}while(t.next&&")"!=t.next&&"|"!=t.next);return 1==e.length?e[0]:{type:"seq",exprs:e}}function q(t){for(var e=function(t){if(t.eat("(")){var e=F(t);return t.eat(")")||t.err("Missing closing paren"),e}if(!/\W/.test(t.next)){var n=function(t,e){var n=t.nodeTypes,r=n[e];if(r)return[r];var o=[];for(var i in n){var s=n[i];s.groups.indexOf(e)>-1&&o.push(s)}0==o.length&&t.err("No node type or group '"+e+"' found");return o}(t,t.next).map((function(e){return null==t.inline?t.inline=e.isInline:t.inline!=e.isInline&&t.err("Mixing inline and block content"),{type:"name",value:e}}));return t.pos++,1==n.length?n[0]:{type:"choice",exprs:n}}t.err("Unexpected token '"+t.next+"'")}(t);;)if(t.eat("+"))e={type:"plus",expr:e};else if(t.eat("*"))e={type:"star",expr:e};else if(t.eat("?"))e={type:"opt",expr:e};else{if(!t.eat("{"))break;e=j(t,e)}return e}function L(t){/\D/.test(t.next)&&t.err("Expected number, got '"+t.next+"'");var e=Number(t.next);return t.pos++,e}function j(t,e){var n=L(t),r=n;return t.eat(",")&&(r="}"!=t.next?L(t):-1),t.eat("}")||t.err("Unclosed braced range"),{type:"range",min:n,max:r,expr:e}}function J(t,e){return e-t}function W(t,e){var n=[];return function e(r){var o=t[r];if(1==o.length&&!o[0].term)return e(o[0].to);n.push(r);for(var i=0;i<o.length;i++){var s=o[i],a=s.term,c=s.to;a||-1!=n.indexOf(c)||e(c)}}(e),n.sort(J)}function K(t){var e=Object.create(null);for(var n in t){var r=t[n];if(!r.hasDefault)return null;e[n]=r.default}return e}function H(t,e){var n=Object.create(null);for(var r in t){var o=e&&e[r];if(void 0===o){var i=t[r];if(!i.hasDefault)throw new RangeError("No value supplied for attribute "+r);o=i.default}n[r]=o}return n}function U(t){var e=Object.create(null);if(t)for(var n in t)e[n]=new X(t[n]);return e}V.next.get=function(){return this.tokens[this.pos]},_.prototype.eat=function(t){return this.next==t&&(this.pos++||!0)},_.prototype.err=function(t){throw new SyntaxError(t+" (in content expression '"+this.string+"')")},Object.defineProperties(_.prototype,V);var G=function(t,e,n){this.name=t,this.schema=e,this.spec=n,this.markSet=null,this.groups=n.group?n.group.split(" "):[],this.attrs=U(n.attrs),this.defaultAttrs=K(this.attrs),this.contentMatch=null,this.inlineContent=null,this.isBlock=!(n.inline||"text"==t),this.isText="text"==t},Q={isInline:{configurable:!0},isTextblock:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0},whitespace:{configurable:!0}};Q.isInline.get=function(){return!this.isBlock},Q.isTextblock.get=function(){return this.isBlock&&this.inlineContent},Q.isLeaf.get=function(){return this.contentMatch==P.empty},Q.isAtom.get=function(){return this.isLeaf||!!this.spec.atom},Q.whitespace.get=function(){return this.spec.whitespace||(this.spec.code?"pre":"normal")},G.prototype.hasRequiredAttrs=function(){for(var t in this.attrs)if(this.attrs[t].isRequired)return!0;return!1},G.prototype.compatibleContent=function(t){return this==t||this.contentMatch.compatible(t.contentMatch)},G.prototype.computeAttrs=function(t){return!t&&this.defaultAttrs?this.defaultAttrs:H(this.attrs,t)},G.prototype.create=function(t,e,n){if(void 0===t&&(t=null),this.isText)throw new Error("NodeType.create can't construct text nodes");return new E(this,this.computeAttrs(t),r.from(e),c.setFrom(n))},G.prototype.createChecked=function(t,e,n){if(void 0===t&&(t=null),e=r.from(e),!this.validContent(e))throw new RangeError("Invalid content for node "+this.name);return new E(this,this.computeAttrs(t),e,c.setFrom(n))},G.prototype.createAndFill=function(t,e,n){if(void 0===t&&(t=null),t=this.computeAttrs(t),(e=r.from(e)).size){var o=this.contentMatch.fillBefore(e);if(!o)return null;e=o.append(e)}var i=this.contentMatch.matchFragment(e),s=i&&i.fillBefore(r.empty,!0);return s?new E(this,t,e.append(s),c.setFrom(n)):null},G.prototype.validContent=function(t){var e=this.contentMatch.matchFragment(t);if(!e||!e.validEnd)return!1;for(var n=0;n<t.childCount;n++)if(!this.allowsMarks(t.child(n).marks))return!1;return!0},G.prototype.allowsMarkType=function(t){return null==this.markSet||this.markSet.indexOf(t)>-1},G.prototype.allowsMarks=function(t){if(null==this.markSet)return!0;for(var e=0;e<t.length;e++)if(!this.allowsMarkType(t[e].type))return!1;return!0},G.prototype.allowedMarks=function(t){if(null==this.markSet)return t;for(var e,n=0;n<t.length;n++)this.allowsMarkType(t[n].type)?e&&e.push(t[n]):e||(e=t.slice(0,n));return e?e.length?e:c.none:t},G.compile=function(t,e){var n=Object.create(null);t.forEach((function(t,r){return n[t]=new G(t,e,r)}));var r=e.spec.topNode||"doc";if(!n[r])throw new RangeError("Schema is missing its top node type ('"+r+"')");if(!n.text)throw new RangeError("Every schema needs a 'text' type");for(var o in n.text.attrs)throw new RangeError("The text node type should not have attributes");return n},Object.defineProperties(G.prototype,Q);var X=function(t){this.hasDefault=Object.prototype.hasOwnProperty.call(t,"default"),this.default=t.default},Y={isRequired:{configurable:!0}};Y.isRequired.get=function(){return!this.hasDefault},Object.defineProperties(X.prototype,Y);var Z=function(t,e,n,r){this.name=t,this.rank=e,this.schema=n,this.spec=r,this.attrs=U(r.attrs),this.excluded=null;var o=K(this.attrs);this.instance=o?new c(this,o):null};Z.prototype.create=function(t){return void 0===t&&(t=null),!t&&this.instance?this.instance:new c(this,H(this.attrs,t))},Z.compile=function(t,e){var n=Object.create(null),r=0;return t.forEach((function(t,o){return n[t]=new Z(t,r++,e,o)})),n},Z.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)t[e].type==this&&(t=t.slice(0,e).concat(t.slice(e+1)),e--);return t},Z.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(t[e].type==this)return t[e]},Z.prototype.excludes=function(t){return this.excluded.indexOf(t)>-1};var tt=function(e){this.cached=Object.create(null),this.spec={nodes:t.from(e.nodes),marks:t.from(e.marks||{}),topNode:e.topNode},this.nodes=G.compile(this.spec.nodes,this),this.marks=Z.compile(this.spec.marks,this);var n=Object.create(null);for(var r in this.nodes){if(r in this.marks)throw new RangeError(r+" can not be both a node and a mark");var o=this.nodes[r],i=o.spec.content||"",s=o.spec.marks;o.contentMatch=n[i]||(n[i]=P.parse(i,this.nodes)),o.inlineContent=o.contentMatch.inlineContent,o.markSet="_"==s?null:s?et(this,s.split(" ")):""!=s&&o.inlineContent?null:[]}for(var a in this.marks){var c=this.marks[a],l=c.spec.excludes;c.excluded=null==l?[c]:""==l?[]:et(this,l.split(" "))}this.nodeFromJSON=this.nodeFromJSON.bind(this),this.markFromJSON=this.markFromJSON.bind(this),this.topNodeType=this.nodes[this.spec.topNode||"doc"],this.cached.wrappings=Object.create(null)};function et(t,e){for(var n=[],r=0;r<e.length;r++){var o=e[r],i=t.marks[o],s=i;if(i)n.push(i);else for(var a in t.marks){var c=t.marks[a];("_"==o||c.spec.group&&c.spec.group.split(" ").indexOf(o)>-1)&&n.push(s=c)}if(!s)throw new SyntaxError("Unknown mark type: '"+e[r]+"'")}return n}tt.prototype.node=function(t,e,n,r){if(void 0===e&&(e=null),"string"==typeof t)t=this.nodeType(t);else{if(!(t instanceof G))throw new RangeError("Invalid node type: "+t);if(t.schema!=this)throw new RangeError("Node type from different schema used ("+t.name+")")}return t.createChecked(e,n,r)},tt.prototype.text=function(t,e){var n=this.nodes.text;return new R(n,n.defaultAttrs,t,c.setFrom(e))},tt.prototype.mark=function(t,e){return"string"==typeof t&&(t=this.marks[t]),t.create(e)},tt.prototype.nodeFromJSON=function(t){return E.fromJSON(this,t)},tt.prototype.markFromJSON=function(t){return c.fromJSON(this,t)},tt.prototype.nodeType=function(t){var e=this.nodes[t];if(!e)throw new RangeError("Unknown node type: "+t);return e};var nt=function(t,e){var n=this;this.schema=t,this.rules=e,this.tags=[],this.styles=[],e.forEach((function(t){t.tag?n.tags.push(t):t.style&&n.styles.push(t)})),this.normalizeLists=!this.tags.some((function(e){if(!/^(ul|ol)\b/.test(e.tag)||!e.node)return!1;var n=t.nodes[e.node];return n.contentMatch.matchType(n)}))};nt.prototype.parse=function(t,e){void 0===e&&(e={});var n=new ct(this,e,!1);return n.addAll(t,e.from,e.to),n.finish()},nt.prototype.parseSlice=function(t,e){void 0===e&&(e={});var n=new ct(this,e,!0);return n.addAll(t,e.from,e.to),p.maxOpen(n.finish())},nt.prototype.matchTag=function(t,e,n){for(var r=n?this.tags.indexOf(n)+1:0;r<this.tags.length;r++){var o=this.tags[r];if(pt(t,o.tag)&&(void 0===o.namespace||t.namespaceURI==o.namespace)&&(!o.context||e.matchesContext(o.context))){if(o.getAttrs){var i=o.getAttrs(t);if(!1===i)continue;o.attrs=i||void 0}return o}}},nt.prototype.matchStyle=function(t,e,n,r){for(var o=r?this.styles.indexOf(r)+1:0;o<this.styles.length;o++){var i=this.styles[o],s=i.style;if(!(0!=s.indexOf(t)||i.context&&!n.matchesContext(i.context)||s.length>t.length&&(61!=s.charCodeAt(t.length)||s.slice(t.length+1)!=e))){if(i.getAttrs){var a=i.getAttrs(e);if(!1===a)continue;i.attrs=a||void 0}return i}}},nt.schemaRules=function(t){var e=[];function n(t){for(var n=null==t.priority?50:t.priority,r=0;r<e.length;r++){var o=e[r];if((null==o.priority?50:o.priority)<n)break}e.splice(r,0,t)}var r=function(e){var r=t.marks[e].spec.parseDOM;r&&r.forEach((function(t){n(t=ht(t)),t.mark=e}))};for(var o in t.marks)r(o);var i;for(var s in t.nodes)i=void 0,(i=t.nodes[s].spec.parseDOM)&&i.forEach((function(t){n(t=ht(t)),t.node=s}));return e},nt.fromSchema=function(t){return t.cached.domParser||(t.cached.domParser=new nt(t,nt.schemaRules(t)))};var rt={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},ot={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},it={ol:!0,ul:!0};function st(t,e,n){return null!=e?(e?1:0)|("full"===e?2:0):t&&"pre"==t.whitespace?3:-5&n}var at=function(t,e,n,r,o,i,s){this.type=t,this.attrs=e,this.marks=n,this.pendingMarks=r,this.solid=o,this.options=s,this.content=[],this.activeMarks=c.none,this.stashMarks=[],this.match=i||(4&s?null:t.contentMatch)};at.prototype.findWrapping=function(t){if(!this.match){if(!this.type)return[];var e=this.type.contentMatch.fillBefore(r.from(t));if(!e){var n,o=this.type.contentMatch;return(n=o.findWrapping(t.type))?(this.match=o,n):null}this.match=this.type.contentMatch.matchFragment(e)}return this.match.findWrapping(t.type)},at.prototype.finish=function(t){if(!(1&this.options)){var e,n=this.content[this.content.length-1];if(n&&n.isText&&(e=/[ \t\r\n\u000c]+$/.exec(n.text))){var o=n;n.text.length==e[0].length?this.content.pop():this.content[this.content.length-1]=o.withText(o.text.slice(0,o.text.length-e[0].length))}}var i=r.from(this.content);return!t&&this.match&&(i=i.append(this.match.fillBefore(r.empty,!0))),this.type?this.type.create(this.attrs,i,this.marks):i},at.prototype.popFromStashMark=function(t){for(var e=this.stashMarks.length-1;e>=0;e--)if(t.eq(this.stashMarks[e]))return this.stashMarks.splice(e,1)[0]},at.prototype.applyPending=function(t){for(var e=0,n=this.pendingMarks;e<n.length;e++){var r=n[e];(this.type?this.type.allowsMarkType(r.type):ut(r.type,t))&&!r.isInSet(this.activeMarks)&&(this.activeMarks=r.addToSet(this.activeMarks),this.pendingMarks=r.removeFromSet(this.pendingMarks))}},at.prototype.inlineContext=function(t){return this.type?this.type.inlineContent:this.content.length?this.content[0].isInline:t.parentNode&&!rt.hasOwnProperty(t.parentNode.nodeName.toLowerCase())};var ct=function(t,e,n){this.parser=t,this.options=e,this.isOpen=n,this.open=0;var r,o=e.topNode,i=st(null,e.preserveWhitespace,0)|(n?4:0);r=o?new at(o.type,o.attrs,c.none,c.none,!0,e.topMatch||o.type.contentMatch,i):new at(n?null:t.schema.topNodeType,null,c.none,c.none,!0,null,i),this.nodes=[r],this.find=e.findPositions,this.needsBlock=!1},lt={top:{configurable:!0},currentPos:{configurable:!0}};function pt(t,e){return(t.matches||t.msMatchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector).call(t,e)}function ht(t){var e={};for(var n in t)e[n]=t[n];return e}function ut(t,e){var n=e.schema.nodes,r=function(r){var o=n[r];if(o.allowsMarkType(t)){var i=[],s=function(t){i.push(t);for(var n=0;n<t.edgeCount;n++){var r=t.edge(n),o=r.type,a=r.next;if(o==e)return!0;if(i.indexOf(a)<0&&s(a))return!0}};return s(o.contentMatch)?{v:!0}:void 0}};for(var o in n){var i=r(o);if(i)return i.v}}lt.top.get=function(){return this.nodes[this.open]},ct.prototype.addDOM=function(t){if(3==t.nodeType)this.addTextNode(t);else if(1==t.nodeType){var e=t.getAttribute("style"),n=e?this.readStyles(function(t){var e,n=/\s*([\w-]+)\s*:\s*([^;]+)/g,r=[];for(;e=n.exec(t);)r.push(e[1],e[2].trim());return r}(e)):null,r=this.top;if(null!=n)for(var o=0;o<n.length;o++)this.addPendingMark(n[o]);if(this.addElement(t),null!=n)for(var i=0;i<n.length;i++)this.removePendingMark(n[i],r)}},ct.prototype.addTextNode=function(t){var e=t.nodeValue,n=this.top;if(2&n.options||n.inlineContext(t)||/[^ \t\r\n\u000c]/.test(e)){if(1&n.options)e=2&n.options?e.replace(/\r\n?/g,"\n"):e.replace(/\r?\n|\r/g," ");else if(e=e.replace(/[ \t\r\n\u000c]+/g," "),/^[ \t\r\n\u000c]/.test(e)&&this.open==this.nodes.length-1){var r=n.content[n.content.length-1],o=t.previousSibling;(!r||o&&"BR"==o.nodeName||r.isText&&/[ \t\r\n\u000c]$/.test(r.text))&&(e=e.slice(1))}e&&this.insertNode(this.parser.schema.text(e)),this.findInText(t)}else this.findInside(t)},ct.prototype.addElement=function(t,e){var n,r=t.nodeName.toLowerCase();it.hasOwnProperty(r)&&this.parser.normalizeLists&&function(t){for(var e=t.firstChild,n=null;e;e=e.nextSibling){var r=1==e.nodeType?e.nodeName.toLowerCase():null;r&&it.hasOwnProperty(r)&&n?(n.appendChild(e),e=n):"li"==r?n=e:r&&(n=null)}}(t);var o=this.options.ruleFromNode&&this.options.ruleFromNode(t)||(n=this.parser.matchTag(t,this,e));if(o?o.ignore:ot.hasOwnProperty(r))this.findInside(t),this.ignoreFallback(t);else if(!o||o.skip||o.closeParent){o&&o.closeParent?this.open=Math.max(0,this.open-1):o&&o.skip.nodeType&&(t=o.skip);var i,s=this.top,a=this.needsBlock;if(rt.hasOwnProperty(r))i=!0,s.type||(this.needsBlock=!0);else if(!t.firstChild)return void this.leafFallback(t);this.addAll(t),i&&this.sync(s),this.needsBlock=a}else this.addElementByRule(t,o,!1===o.consuming?n:void 0)},ct.prototype.leafFallback=function(t){"BR"==t.nodeName&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(t.ownerDocument.createTextNode("\n"))},ct.prototype.ignoreFallback=function(t){"BR"!=t.nodeName||this.top.type&&this.top.type.inlineContent||this.findPlace(this.parser.schema.text("-"))},ct.prototype.readStyles=function(t){var e=c.none;t:for(var n=0;n<t.length;n+=2)for(var r=void 0;;){var o=this.parser.matchStyle(t[n],t[n+1],this,r);if(!o)continue t;if(o.ignore)return null;if(e=this.parser.schema.marks[o.mark].create(o.attrs).addToSet(e),!1!==o.consuming)break;r=o}return e},ct.prototype.addElementByRule=function(t,e,n){var r,o,i,s=this;e.node?(o=this.parser.schema.nodes[e.node]).isLeaf?this.insertNode(o.create(e.attrs))||this.leafFallback(t):r=this.enter(o,e.attrs||null,e.preserveWhitespace):(i=this.parser.schema.marks[e.mark].create(e.attrs),this.addPendingMark(i));var a=this.top;if(o&&o.isLeaf)this.findInside(t);else if(n)this.addElement(t,n);else if(e.getContent)this.findInside(t),e.getContent(t,this.parser.schema).forEach((function(t){return s.insertNode(t)}));else{var c=t;"string"==typeof e.contentElement?c=t.querySelector(e.contentElement):"function"==typeof e.contentElement?c=e.contentElement(t):e.contentElement&&(c=e.contentElement),this.findAround(t,c,!0),this.addAll(c)}r&&this.sync(a)&&this.open--,i&&this.removePendingMark(i,a)},ct.prototype.addAll=function(t,e,n){for(var r=e||0,o=e?t.childNodes[e]:t.firstChild,i=null==n?null:t.childNodes[n];o!=i;o=o.nextSibling,++r)this.findAtPoint(t,r),this.addDOM(o);this.findAtPoint(t,r)},ct.prototype.findPlace=function(t){for(var e,n,r=this.open;r>=0;r--){var o=this.nodes[r],i=o.findWrapping(t);if(i&&(!e||e.length>i.length)&&(e=i,n=o,!i.length))break;if(o.solid)break}if(!e)return!1;this.sync(n);for(var s=0;s<e.length;s++)this.enterInner(e[s],null,!1);return!0},ct.prototype.insertNode=function(t){if(t.isInline&&this.needsBlock&&!this.top.type){var e=this.textblockFromContext();e&&this.enterInner(e)}if(this.findPlace(t)){this.closeExtra();var n=this.top;n.applyPending(t.type),n.match&&(n.match=n.match.matchType(t.type));for(var r=n.activeMarks,o=0;o<t.marks.length;o++)n.type&&!n.type.allowsMarkType(t.marks[o].type)||(r=t.marks[o].addToSet(r));return n.content.push(t.mark(r)),!0}return!1},ct.prototype.enter=function(t,e,n){var r=this.findPlace(t.create(e));return r&&this.enterInner(t,e,!0,n),r},ct.prototype.enterInner=function(t,e,n,r){void 0===e&&(e=null),void 0===n&&(n=!1),this.closeExtra();var o=this.top;o.applyPending(t),o.match=o.match&&o.match.matchType(t);var i=st(t,r,o.options);4&o.options&&0==o.content.length&&(i|=4),this.nodes.push(new at(t,e,o.activeMarks,o.pendingMarks,n,null,i)),this.open++},ct.prototype.closeExtra=function(t){void 0===t&&(t=!1);var e=this.nodes.length-1;if(e>this.open){for(;e>this.open;e--)this.nodes[e-1].content.push(this.nodes[e].finish(t));this.nodes.length=this.open+1}},ct.prototype.finish=function(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(this.isOpen||this.options.topOpen)},ct.prototype.sync=function(t){for(var e=this.open;e>=0;e--)if(this.nodes[e]==t)return this.open=e,!0;return!1},lt.currentPos.get=function(){this.closeExtra();for(var t=0,e=this.open;e>=0;e--){for(var n=this.nodes[e].content,r=n.length-1;r>=0;r--)t+=n[r].nodeSize;e&&t++}return t},ct.prototype.findAtPoint=function(t,e){if(this.find)for(var n=0;n<this.find.length;n++)this.find[n].node==t&&this.find[n].offset==e&&(this.find[n].pos=this.currentPos)},ct.prototype.findInside=function(t){if(this.find)for(var e=0;e<this.find.length;e++)null==this.find[e].pos&&1==t.nodeType&&t.contains(this.find[e].node)&&(this.find[e].pos=this.currentPos)},ct.prototype.findAround=function(t,e,n){if(t!=e&&this.find)for(var r=0;r<this.find.length;r++){if(null==this.find[r].pos&&1==t.nodeType&&t.contains(this.find[r].node))e.compareDocumentPosition(this.find[r].node)&(n?2:4)&&(this.find[r].pos=this.currentPos)}},ct.prototype.findInText=function(t){if(this.find)for(var e=0;e<this.find.length;e++)this.find[e].node==t&&(this.find[e].pos=this.currentPos-(t.nodeValue.length-this.find[e].offset))},ct.prototype.matchesContext=function(t){var e=this;if(t.indexOf("|")>-1)return t.split(/\s*\|\s*/).some(this.matchesContext,this);var n=t.split("/"),r=this.options.context,o=!(this.isOpen||r&&r.parent.type!=this.nodes[0].type),i=-(r?r.depth+1:0)+(o?0:1),s=function(t,a){for(;t>=0;t--){var c=n[t];if(""==c){if(t==n.length-1||0==t)continue;for(;a>=i;a--)if(s(t-1,a))return!0;return!1}var l=a>0||0==a&&o?e.nodes[a].type:r&&a>=i?r.node(a-i).type:null;if(!l||l.name!=c&&-1==l.groups.indexOf(c))return!1;a--}return!0};return s(n.length-1,this.open)},ct.prototype.textblockFromContext=function(){var t=this.options.context;if(t)for(var e=t.depth;e>=0;e--){var n=t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(var r in this.parser.schema.nodes){var o=this.parser.schema.nodes[r];if(o.isTextblock&&o.defaultAttrs)return o}},ct.prototype.addPendingMark=function(t){var e=function(t,e){for(var n=0;n<e.length;n++)if(t.eq(e[n]))return e[n]}(t,this.top.pendingMarks);e&&this.top.stashMarks.push(e),this.top.pendingMarks=t.addToSet(this.top.pendingMarks)},ct.prototype.removePendingMark=function(t,e){for(var n=this.open;n>=0;n--){var r=this.nodes[n];if(r.pendingMarks.lastIndexOf(t)>-1)r.pendingMarks=t.removeFromSet(r.pendingMarks);else{r.activeMarks=t.removeFromSet(r.activeMarks);var o=r.popFromStashMark(t);o&&r.type&&r.type.allowsMarkType(o.type)&&(r.activeMarks=o.addToSet(r.activeMarks))}if(r==e)break}},Object.defineProperties(ct.prototype,lt);var ft=function(t,e){this.nodes=t,this.marks=e};function dt(t){var e={};for(var n in t){var r=t[n].spec.toDOM;r&&(e[n]=r)}return e}function mt(t){return t.document||window.document}ft.prototype.serializeFragment=function(t,e,n){var r=this;void 0===e&&(e={}),n||(n=mt(e).createDocumentFragment());var o=n,i=[];return t.forEach((function(t){if(i.length||t.marks.length){for(var n=0,s=0;n<i.length&&s<t.marks.length;){var a=t.marks[s];if(r.marks[a.type.name]){if(!a.eq(i[n][0])||!1===a.type.spec.spanning)break;n++,s++}else s++}for(;n<i.length;)o=i.pop()[1];for(;s<t.marks.length;){var c=t.marks[s++],l=r.serializeMark(c,t.isInline,e);l&&(i.push([c,o]),o.appendChild(l.dom),o=l.contentDOM||l.dom)}}o.appendChild(r.serializeNodeInner(t,e))})),n},ft.prototype.serializeNodeInner=function(t,e){var n=ft.renderSpec(mt(e),this.nodes[t.type.name](t)),r=n.dom,o=n.contentDOM;if(o){if(t.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");this.serializeFragment(t.content,e,o)}return r},ft.prototype.serializeNode=function(t,e){void 0===e&&(e={});for(var n=this.serializeNodeInner(t,e),r=t.marks.length-1;r>=0;r--){var o=this.serializeMark(t.marks[r],t.isInline,e);o&&((o.contentDOM||o.dom).appendChild(n),n=o.dom)}return n},ft.prototype.serializeMark=function(t,e,n){void 0===n&&(n={});var r=this.marks[t.type.name];return r&&ft.renderSpec(mt(n),r(t,e))},ft.renderSpec=function(t,e,n){if(void 0===n&&(n=null),"string"==typeof e)return{dom:t.createTextNode(e)};if(null!=e.nodeType)return{dom:e};if(e.dom&&null!=e.dom.nodeType)return e;var r,o=e[0],i=o.indexOf(" ");i>0&&(n=o.slice(0,i),o=o.slice(i+1));var s=n?t.createElementNS(n,o):t.createElement(o),a=e[1],c=1;if(a&&"object"==typeof a&&null==a.nodeType&&!Array.isArray(a))for(var l in c=2,a)if(null!=a[l]){var p=l.indexOf(" ");p>0?s.setAttributeNS(l.slice(0,p),l.slice(p+1),a[l]):s.setAttribute(l,a[l])}for(var h=c;h<e.length;h++){var u=e[h];if(0===u){if(h<e.length-1||h>c)throw new RangeError("Content hole must be the only child of its parent node");return{dom:s,contentDOM:s}}var f=ft.renderSpec(t,u,n),d=f.dom,m=f.contentDOM;if(s.appendChild(d),m){if(r)throw new RangeError("Multiple content holes");r=m}}return{dom:s,contentDOM:r}},ft.fromSchema=function(t){return t.cached.domSerializer||(t.cached.domSerializer=new ft(this.nodesFromSchema(t),this.marksFromSchema(t)))},ft.nodesFromSchema=function(t){var e=dt(t.nodes);return e.text||(e.text=function(t){return t.text}),e},ft.marksFromSchema=function(t){return dt(t.marks)};var vt=Object.freeze({__proto__:null,ContentMatch:P,DOMParser:nt,DOMSerializer:ft,Fragment:r,Mark:c,MarkType:Z,Node:E,NodeRange:D,NodeType:G,ReplaceError:l,ResolvedPos:S,Schema:tt,Slice:p}),gt=Math.pow(2,16);function yt(t){return 65535&t}var wt=function(t,e,n){this.pos=t,this.delInfo=e,this.recover=n},bt={deleted:{configurable:!0},deletedBefore:{configurable:!0},deletedAfter:{configurable:!0},deletedAcross:{configurable:!0}};bt.deleted.get=function(){return(8&this.delInfo)>0},bt.deletedBefore.get=function(){return(5&this.delInfo)>0},bt.deletedAfter.get=function(){return(6&this.delInfo)>0},bt.deletedAcross.get=function(){return(4&this.delInfo)>0},Object.defineProperties(wt.prototype,bt);var kt=function t(e,n){if(void 0===n&&(n=!1),this.ranges=e,this.inverted=n,!e.length&&t.empty)return t.empty};kt.prototype.recover=function(t){var e=0,n=yt(t);if(!this.inverted)for(var r=0;r<n;r++)e+=this.ranges[3*r+2]-this.ranges[3*r+1];return this.ranges[3*n]+e+function(t){return(t-(65535&t))/gt}(t)},kt.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1)},kt.prototype.map=function(t,e){return void 0===e&&(e=1),this._map(t,e,!0)},kt.prototype._map=function(t,e,n){for(var r=0,o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){var a=this.ranges[s]-(this.inverted?r:0);if(a>t)break;var c=this.ranges[s+o],l=this.ranges[s+i],p=a+c;if(t<=p){var h=a+r+((c?t==a?-1:t==p?1:e:e)<0?0:l);if(n)return h;var u=t==(e<0?a:p)?null:s/3+(t-a)*gt,f=t==a?2:t==p?1:4;return(e<0?t!=a:t!=p)&&(f|=8),new wt(h,f,u)}r+=l-c}return n?t+r:new wt(t+r,0,null)},kt.prototype.touches=function(t,e){for(var n=0,r=yt(e),o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){var a=this.ranges[s]-(this.inverted?n:0);if(a>t)break;var c=this.ranges[s+o];if(t<=a+c&&s==3*r)return!0;n+=this.ranges[s+i]-c}return!1},kt.prototype.forEach=function(t){for(var e=this.inverted?2:1,n=this.inverted?1:2,r=0,o=0;r<this.ranges.length;r+=3){var i=this.ranges[r],s=i-(this.inverted?o:0),a=i+(this.inverted?0:o),c=this.ranges[r+e],l=this.ranges[r+n];t(s,s+c,a,a+l),o+=l-c}},kt.prototype.invert=function(){return new kt(this.ranges,!this.inverted)},kt.prototype.toString=function(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)},kt.offset=function(t){return 0==t?kt.empty:new kt(t<0?[0,-t,0]:[0,0,t])},kt.empty=new kt([]);var xt=function(t,e,n,r){void 0===t&&(t=[]),void 0===n&&(n=0),void 0===r&&(r=t.length),this.maps=t,this.mirror=e,this.from=n,this.to=r};xt.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.maps.length),new xt(this.maps,this.mirror,t,e)},xt.prototype.copy=function(){return new xt(this.maps.slice(),this.mirror&&this.mirror.slice(),this.from,this.to)},xt.prototype.appendMap=function(t,e){this.to=this.maps.push(t),null!=e&&this.setMirror(this.maps.length-1,e)},xt.prototype.appendMapping=function(t){for(var e=0,n=this.maps.length;e<t.maps.length;e++){var r=t.getMirror(e);this.appendMap(t.maps[e],null!=r&&r<e?n+r:void 0)}},xt.prototype.getMirror=function(t){if(this.mirror)for(var e=0;e<this.mirror.length;e++)if(this.mirror[e]==t)return this.mirror[e+(e%2?-1:1)]},xt.prototype.setMirror=function(t,e){this.mirror||(this.mirror=[]),this.mirror.push(t,e)},xt.prototype.appendMappingInverted=function(t){for(var e=t.maps.length-1,n=this.maps.length+t.maps.length;e>=0;e--){var r=t.getMirror(e);this.appendMap(t.maps[e].invert(),null!=r&&r>e?n-r-1:void 0)}},xt.prototype.invert=function(){var t=new xt;return t.appendMappingInverted(this),t},xt.prototype.map=function(t,e){if(void 0===e&&(e=1),this.mirror)return this._map(t,e,!0);for(var n=this.from;n<this.to;n++)t=this.maps[n].map(t,e);return t},xt.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1)},xt.prototype._map=function(t,e,n){for(var r=0,o=this.from;o<this.to;o++){var i=this.maps[o].mapResult(t,e);if(null!=i.recover){var s=this.getMirror(o);if(null!=s&&s>o&&s<this.to){o=s,t=this.maps[s].recover(i.recover);continue}}r|=i.delInfo,t=i.pos}return n?t:new wt(t,r,null)};var St=Object.create(null),Mt=function(){};Mt.prototype.getMap=function(){return kt.empty},Mt.prototype.merge=function(t){return null},Mt.fromJSON=function(t,e){if(!e||!e.stepType)throw new RangeError("Invalid input for Step.fromJSON");var n=St[e.stepType];if(!n)throw new RangeError("No step type "+e.stepType+" defined");return n.fromJSON(t,e)},Mt.jsonID=function(t,e){if(t in St)throw new RangeError("Duplicate use of step JSON ID "+t);return St[t]=e,e.prototype.jsonID=t,e};var Ct=function(t,e){this.doc=t,this.failed=e};function Ot(t,e,n){for(var o=[],i=0;i<t.childCount;i++){var s=t.child(i);s.content.size&&(s=s.copy(Ot(s.content,e,s))),s.isInline&&(s=e(s,n,i)),o.push(s)}return r.fromArray(o)}Ct.ok=function(t){return new Ct(t,null)},Ct.fail=function(t){return new Ct(null,t)},Ct.fromReplace=function(t,e,n,r){try{return Ct.ok(t.replace(e,n,r))}catch(t){if(t instanceof l)return Ct.fail(t.message);throw t}};var Nt=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=t.resolve(this.from),o=r.node(r.sharedDepth(this.to)),i=new p(Ot(n.content,(function(t,n){return t.isAtom&&n.type.allowsMarkType(e.mark.type)?t.mark(e.mark.addToSet(t.marks)):t}),o),n.openStart,n.openEnd);return Ct.fromReplace(t,this.from,this.to,i)},e.prototype.invert=function(){return new Dt(this.from,this.to,this.mark)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)},e.prototype.merge=function(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null},e.prototype.toJSON=function(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark))},e}(Mt);Mt.jsonID("addMark",Nt);var Dt=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=new p(Ot(n.content,(function(t){return t.mark(e.mark.removeFromSet(t.marks))}),t),n.openStart,n.openEnd);return Ct.fromReplace(t,this.from,this.to,r)},e.prototype.invert=function(){return new Nt(this.from,this.to,this.mark)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)},e.prototype.merge=function(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null},e.prototype.toJSON=function(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark))},e}(Mt);Mt.jsonID("removeMark",Dt);var Tt=function(t){function e(e,n){t.call(this),this.pos=e,this.mark=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return Ct.fail("No node at mark step's position");var n=e.type.create(e.attrs,null,this.mark.addToSet(e.marks));return Ct.fromReplace(t,this.pos,this.pos+1,new p(r.from(n),0,e.isLeaf?0:1))},e.prototype.invert=function(t){var n=t.nodeAt(this.pos);if(n){var r=this.mark.addToSet(n.marks);if(r.length==n.marks.length){for(var o=0;o<n.marks.length;o++)if(!n.marks[o].isInSet(r))return new e(this.pos,n.marks[o]);return new e(this.pos,this.mark)}}return new At(this.pos,this.mark)},e.prototype.map=function(t){var n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)},e.prototype.toJSON=function(){return{stepType:"addNodeMark",pos:this.pos,mark:this.mark.toJSON()}},e.fromJSON=function(t,n){if("number"!=typeof n.pos)throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");return new e(n.pos,t.markFromJSON(n.mark))},e}(Mt);Mt.jsonID("addNodeMark",Tt);var At=function(t){function e(e,n){t.call(this),this.pos=e,this.mark=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return Ct.fail("No node at mark step's position");var n=e.type.create(e.attrs,null,this.mark.removeFromSet(e.marks));return Ct.fromReplace(t,this.pos,this.pos+1,new p(r.from(n),0,e.isLeaf?0:1))},e.prototype.invert=function(t){var e=t.nodeAt(this.pos);return e&&this.mark.isInSet(e.marks)?new Tt(this.pos,this.mark):this},e.prototype.map=function(t){var n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)},e.prototype.toJSON=function(){return{stepType:"removeNodeMark",pos:this.pos,mark:this.mark.toJSON()}},e.fromJSON=function(t,n){if("number"!=typeof n.pos)throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");return new e(n.pos,t.markFromJSON(n.mark))},e}(Mt);Mt.jsonID("removeNodeMark",At);var Et=function(t){function e(e,n,r,o){void 0===o&&(o=!1),t.call(this),this.from=e,this.to=n,this.slice=r,this.structure=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){return this.structure&&Rt(t,this.from,this.to)?Ct.fail("Structure replace would overwrite content"):Ct.fromReplace(t,this.from,this.to,this.slice)},e.prototype.getMap=function(){return new kt([this.from,this.to-this.from,this.slice.size])},e.prototype.invert=function(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to))},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deletedAcross&&r.deletedAcross?null:new e(n.pos,Math.max(n.pos,r.pos),this.slice)},e.prototype.merge=function(t){if(!(t instanceof e)||t.structure||this.structure)return null;if(this.from+this.slice.size!=t.from||this.slice.openEnd||t.slice.openStart){if(t.to!=this.from||this.slice.openStart||t.slice.openEnd)return null;var n=this.slice.size+t.slice.size==0?p.empty:new p(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);return new e(t.from,this.to,n,this.structure)}var r=this.slice.size+t.slice.size==0?p.empty:new p(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),r,this.structure)},e.prototype.toJSON=function(){var t={stepType:"replace",from:this.from,to:this.to};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new e(n.from,n.to,p.fromJSON(t,n.slice),!!n.structure)},e}(Mt);Mt.jsonID("replace",Et);var It=function(t){function e(e,n,r,o,i,s,a){void 0===a&&(a=!1),t.call(this),this.from=e,this.to=n,this.gapFrom=r,this.gapTo=o,this.slice=i,this.insert=s,this.structure=a}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){if(this.structure&&(Rt(t,this.from,this.gapFrom)||Rt(t,this.gapTo,this.to)))return Ct.fail("Structure gap-replace would overwrite content");var e=t.slice(this.gapFrom,this.gapTo);if(e.openStart||e.openEnd)return Ct.fail("Gap is not a flat range");var n=this.slice.insertAt(this.insert,e.content);return n?Ct.fromReplace(t,this.from,this.to,n):Ct.fail("Content does not fit in gap")},e.prototype.getMap=function(){return new kt([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])},e.prototype.invert=function(t){var n=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1),o=t.map(this.gapFrom,-1),i=t.map(this.gapTo,1);return n.deletedAcross&&r.deletedAcross||o<n.pos||i>r.pos?null:new e(n.pos,r.pos,o,i,this.slice,this.insert,this.structure)},e.prototype.toJSON=function(){var t={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to||"number"!=typeof n.gapFrom||"number"!=typeof n.gapTo||"number"!=typeof n.insert)throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new e(n.from,n.to,n.gapFrom,n.gapTo,p.fromJSON(t,n.slice),n.insert,!!n.structure)},e}(Mt);function Rt(t,e,n){for(var r=t.resolve(e),o=n-e,i=r.depth;o>0&&i>0&&r.indexAfter(i)==r.node(i).childCount;)i--,o--;if(o>0)for(var s=r.node(i).maybeChild(r.indexAfter(i));o>0;){if(!s||s.isLeaf)return!0;s=s.firstChild,o--}return!1}function zt(t,e,n){return(0==e||t.canReplace(e,t.childCount))&&(n==t.childCount||t.canReplace(0,n))}function Pt(t){for(var e=t.parent.content.cutByIndex(t.startIndex,t.endIndex),n=t.depth;;--n){var r=t.$from.node(n),o=t.$from.index(n),i=t.$to.indexAfter(n);if(n<t.depth&&r.canReplace(o,i,e))return n;if(0==n||r.type.spec.isolating||!zt(r,o,i))break}return null}function Bt(t,e,n,r){void 0===n&&(n=null),void 0===r&&(r=t);var o=function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.contentMatchAt(r).findWrapping(e);if(!i)return null;var s=i.length?i[0]:e;return n.canReplaceWith(r,o,s)?i:null}(t,e),i=o&&function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.child(r),s=e.contentMatch.findWrapping(i.type);if(!s)return null;for(var a=(s.length?s[s.length-1]:e).contentMatch,c=r;a&&c<o;c++)a=a.matchType(n.child(c).type);if(!a||!a.validEnd)return null;return s}(r,e);return i?o.map(_t).concat({type:e,attrs:n}).concat(i.map(_t)):null}function _t(t){return{type:t,attrs:null}}function Vt(t,e,n,r){void 0===n&&(n=1);var o=t.resolve(e),i=o.depth-n,s=r&&r[r.length-1]||o.parent;if(i<0||o.parent.type.spec.isolating||!o.parent.canReplace(o.index(),o.parent.childCount)||!s.type.validContent(o.parent.content.cutByIndex(o.index(),o.parent.childCount)))return!1;for(var a=o.depth-1,c=n-2;a>i;a--,c--){var l=o.node(a),p=o.index(a);if(l.type.spec.isolating)return!1;var h=l.content.cutByIndex(p,l.childCount),u=r&&r[c]||l;if(u!=l&&(h=h.replaceChild(0,u.type.create(u.attrs))),!l.canReplace(p+1,l.childCount)||!u.type.validContent(h))return!1}var f=o.indexAfter(i),d=r&&r[0];return o.node(i).canReplaceWith(f,f,d?d.type:o.node(i+1).type)}function Ft(t,e){var n=t.resolve(e),r=n.index();return $t(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(r,r+1)}function $t(t,e){return!(!t||!e||t.isLeaf||!t.canAppend(e))}function qt(t,e,n){void 0===n&&(n=-1);for(var r=t.resolve(e),o=r.depth;;o--){var i=void 0,s=void 0,a=r.index(o);if(o==r.depth?(i=r.nodeBefore,s=r.nodeAfter):n>0?(i=r.node(o+1),a++,s=r.node(o).maybeChild(a)):(i=r.node(o).maybeChild(a-1),s=r.node(o+1)),i&&!i.isTextblock&&$t(i,s)&&r.node(o).canReplace(a,a+1))return e;if(0==o)break;e=n<0?r.before(o):r.after(o)}}function Lt(t,e,n){var r=t.resolve(e);if(r.parent.canReplaceWith(r.index(),r.index(),n))return e;if(0==r.parentOffset)for(var o=r.depth-1;o>=0;o--){var i=r.index(o);if(r.node(o).canReplaceWith(i,i,n))return r.before(o+1);if(i>0)return null}if(r.parentOffset==r.parent.content.size)for(var s=r.depth-1;s>=0;s--){var a=r.indexAfter(s);if(r.node(s).canReplaceWith(a,a,n))return r.after(s+1);if(a<r.node(s).childCount)return null}return null}function jt(t,e,n){var r=t.resolve(e);if(!n.content.size)return e;for(var o=n.content,i=0;i<n.openStart;i++)o=o.firstChild.content;for(var s=1;s<=(0==n.openStart&&n.size?2:1);s++)for(var a=r.depth;a>=0;a--){var c=a==r.depth?0:r.pos<=(r.start(a+1)+r.end(a+1))/2?-1:1,l=r.index(a)+(c>0?1:0),p=r.node(a),h=!1;if(1==s)h=p.canReplace(l,l,o);else{var u=p.contentMatchAt(l).findWrapping(o.firstChild.type);h=u&&p.canReplaceWith(l,l,u[0])}if(h)return 0==c?r.pos:c<0?r.before(a+1):r.after(a+1)}return null}function Jt(t,e,n,r){if(void 0===n&&(n=e),void 0===r&&(r=p.empty),e==n&&!r.size)return null;var o=t.resolve(e),i=t.resolve(n);return Wt(o,i,r)?new Et(e,n,r):new Kt(o,i,r).fit()}function Wt(t,e,n){return!n.openStart&&!n.openEnd&&t.start()==e.start()&&t.parent.canReplace(t.index(),e.index(),n.content)}Mt.jsonID("replaceAround",It);var Kt=function(t,e,n){this.$from=t,this.$to=e,this.unplaced=n,this.frontier=[],this.placed=r.empty;for(var o=0;o<=t.depth;o++){var i=t.node(o);this.frontier.push({type:i.type,match:i.contentMatchAt(t.indexAfter(o))})}for(var s=t.depth;s>0;s--)this.placed=r.from(t.node(s).copy(this.placed))},Ht={depth:{configurable:!0}};function Ut(t,e,n){return 0==e?t.cutByIndex(n,t.childCount):t.replaceChild(0,t.firstChild.copy(Ut(t.firstChild.content,e-1,n)))}function Gt(t,e,n){return 0==e?t.append(n):t.replaceChild(t.childCount-1,t.lastChild.copy(Gt(t.lastChild.content,e-1,n)))}function Qt(t,e){for(var n=0;n<e;n++)t=t.firstChild.content;return t}function Xt(t,e,n){if(e<=0)return t;var o=t.content;return e>1&&(o=o.replaceChild(0,Xt(o.firstChild,e-1,1==o.childCount?n-1:0))),e>0&&(o=t.type.contentMatch.fillBefore(o).append(o),n<=0&&(o=o.append(t.type.contentMatch.matchFragment(o).fillBefore(r.empty,!0)))),t.copy(o)}function Yt(t,e,n,r,o){var i=t.node(e),s=o?t.indexAfter(e):t.index(e);if(s==i.childCount&&!n.compatibleContent(i.type))return null;var a=r.fillBefore(i.content,!0,s);return a&&!function(t,e,n){for(var r=n;r<e.childCount;r++)if(!t.allowsMarks(e.child(r).marks))return!0;return!1}(n,i.content,s)?a:null}function Zt(t){return t.spec.defining||t.spec.definingForContent}function te(t,e,n,o,i){if(e<n){var s=t.firstChild;t=t.replaceChild(0,s.copy(te(s.content,e+1,n,o,s)))}if(e>o){var a=i.contentMatchAt(0),c=a.fillBefore(t).append(t);t=c.append(a.matchFragment(c).fillBefore(r.empty,!0))}return t}function ee(t,e){for(var n=[],r=Math.min(t.depth,e.depth);r>=0;r--){var o=t.start(r);if(o<t.pos-(t.depth-r)||e.end(r)>e.pos+(e.depth-r)||t.node(r).type.spec.isolating||e.node(r).type.spec.isolating)break;(o==e.start(r)||r==t.depth&&r==e.depth&&t.parent.inlineContent&&e.parent.inlineContent&&r&&e.start(r-1)==o-1)&&n.push(r)}return n}Ht.depth.get=function(){return this.frontier.length-1},Kt.prototype.fit=function(){for(;this.unplaced.size;){var t=this.findFittable();t?this.placeNodes(t):this.openMore()||this.dropNode()}var e=this.mustMoveInline(),n=this.placed.size-this.depth-this.$from.depth,r=this.$from,o=this.close(e<0?this.$to:r.doc.resolve(e));if(!o)return null;for(var i=this.placed,s=r.depth,a=o.depth;s&&a&&1==i.childCount;)i=i.firstChild.content,s--,a--;var c=new p(i,s,a);return e>-1?new It(r.pos,e,this.$to.pos,this.$to.end(),c,n):c.size||r.pos!=this.$to.pos?new Et(r.pos,o.pos,c):null},Kt.prototype.findFittable=function(){for(var t=1;t<=2;t++)for(var e=this.unplaced.openStart;e>=0;e--)for(var n=null,o=(e?(n=Qt(this.unplaced.content,e-1).firstChild).content:this.unplaced.content).firstChild,i=this.depth;i>=0;i--){var s=this.frontier[i],a=s.type,c=s.match,l=void 0,p=null;if(1==t&&(o?c.matchType(o.type)||(p=c.fillBefore(r.from(o),!1)):n&&a.compatibleContent(n.type)))return{sliceDepth:e,frontierDepth:i,parent:n,inject:p};if(2==t&&o&&(l=c.findWrapping(o.type)))return{sliceDepth:e,frontierDepth:i,parent:n,wrap:l};if(n&&c.matchType(n.type))break}},Kt.prototype.openMore=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=Qt(e,n);return!(!o.childCount||o.firstChild.isLeaf)&&(this.unplaced=new p(e,n+1,Math.max(r,o.size+n>=e.size-r?n+1:0)),!0)},Kt.prototype.dropNode=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=Qt(e,n);if(o.childCount<=1&&n>0){var i=e.size-n<=n+o.size;this.unplaced=new p(Ut(e,n-1,1),n-1,i?n-1:r)}else this.unplaced=new p(Ut(e,n,1),n,r)},Kt.prototype.placeNodes=function(t){for(var e=t.sliceDepth,n=t.frontierDepth,o=t.parent,i=t.inject,s=t.wrap;this.depth>n;)this.closeFrontierNode();if(s)for(var a=0;a<s.length;a++)this.openFrontierNode(s[a]);var c=this.unplaced,l=o?o.content:c.content,h=c.openStart-e,u=0,f=[],d=this.frontier[n],m=d.match,v=d.type;if(i){for(var g=0;g<i.childCount;g++)f.push(i.child(g));m=m.matchFragment(i)}for(var y=l.size+e-(c.content.size-c.openEnd);u<l.childCount;){var w=l.child(u),b=m.matchType(w.type);if(!b)break;(++u>1||0==h||w.content.size)&&(m=b,f.push(Xt(w.mark(v.allowedMarks(w.marks)),1==u?h:0,u==l.childCount?y:-1)))}var k=u==l.childCount;k||(y=-1),this.placed=Gt(this.placed,n,r.from(f)),this.frontier[n].match=m,k&&y<0&&o&&o.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(var x=0,S=l;x<y;x++){var M=S.lastChild;this.frontier.push({type:M.type,match:M.contentMatchAt(M.childCount)}),S=M.content}this.unplaced=k?0==e?p.empty:new p(Ut(c.content,e-1,1),e-1,y<0?c.openEnd:e-1):new p(Ut(c.content,e,u),c.openStart,c.openEnd)},Kt.prototype.mustMoveInline=function(){if(!this.$to.parent.isTextblock)return-1;var t,e=this.frontier[this.depth];if(!e.type.isTextblock||!Yt(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;for(var n=this.$to.depth,r=this.$to.after(n);n>1&&r==this.$to.end(--n);)++r;return r},Kt.prototype.findCloseLevel=function(t){t:for(var e=Math.min(this.depth,t.depth);e>=0;e--){var n=this.frontier[e],r=n.match,o=n.type,i=e<t.depth&&t.end(e+1)==t.pos+(t.depth-(e+1)),s=Yt(t,e,o,r,i);if(s){for(var a=e-1;a>=0;a--){var c=this.frontier[a],l=c.match,p=Yt(t,a,c.type,l,!0);if(!p||p.childCount)continue t}return{depth:e,fit:s,move:i?t.doc.resolve(t.after(e+1)):t}}}},Kt.prototype.close=function(t){var e=this.findCloseLevel(t);if(!e)return null;for(;this.depth>e.depth;)this.closeFrontierNode();e.fit.childCount&&(this.placed=Gt(this.placed,e.depth,e.fit)),t=e.move;for(var n=e.depth+1;n<=t.depth;n++){var r=t.node(n),o=r.type.contentMatch.fillBefore(r.content,!0,t.index(n));this.openFrontierNode(r.type,r.attrs,o)}return t},Kt.prototype.openFrontierNode=function(t,e,n){void 0===e&&(e=null);var o=this.frontier[this.depth];o.match=o.match.matchType(t),this.placed=Gt(this.placed,this.depth,r.from(t.create(e,n))),this.frontier.push({type:t,match:t.contentMatch})},Kt.prototype.closeFrontierNode=function(){var t=this.frontier.pop().match.fillBefore(r.empty,!0);t.childCount&&(this.placed=Gt(this.placed,this.frontier.length,t))},Object.defineProperties(Kt.prototype,Ht);var ne=function(t){function e(e,n,r){t.call(this),this.pos=e,this.attr=n,this.value=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return Ct.fail("No node at attribute step's position");var n=Object.create(null);for(var o in e.attrs)n[o]=e.attrs[o];n[this.attr]=this.value;var i=e.type.create(n,null,e.marks);return Ct.fromReplace(t,this.pos,this.pos+1,new p(r.from(i),0,e.isLeaf?0:1))},e.prototype.getMap=function(){return kt.empty},e.prototype.invert=function(t){return new e(this.pos,this.attr,t.nodeAt(this.pos).attrs[this.attr])},e.prototype.map=function(t){var n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.attr,this.value)},e.prototype.toJSON=function(){return{stepType:"attr",pos:this.pos,attr:this.attr,value:this.value}},e.fromJSON=function(t,n){if("number"!=typeof n.pos||"string"!=typeof n.attr)throw new RangeError("Invalid input for AttrStep.fromJSON");return new e(n.pos,n.attr,n.value)},e}(Mt);Mt.jsonID("attr",ne);var re=Error;((re=function t(e){var n=Error.call(this,e);return n.__proto__=t.prototype,n}).prototype=Object.create(Error.prototype)).constructor=re,re.prototype.name="TransformError";var oe=function(t){this.doc=t,this.steps=[],this.docs=[],this.mapping=new xt},ie={before:{configurable:!0},docChanged:{configurable:!0}};ie.before.get=function(){return this.docs.length?this.docs[0]:this.doc},oe.prototype.step=function(t){var e=this.maybeStep(t);if(e.failed)throw new re(e.failed);return this},oe.prototype.maybeStep=function(t){var e=t.apply(this.doc);return e.failed||this.addStep(t,e.doc),e},ie.docChanged.get=function(){return this.steps.length>0},oe.prototype.addStep=function(t,e){this.docs.push(this.doc),this.steps.push(t),this.mapping.appendMap(t.getMap()),this.doc=e},oe.prototype.replace=function(t,e,n){void 0===e&&(e=t),void 0===n&&(n=p.empty);var r=Jt(this.doc,t,e,n);return r&&this.step(r),this},oe.prototype.replaceWith=function(t,e,n){return this.replace(t,e,new p(r.from(n),0,0))},oe.prototype.delete=function(t,e){return this.replace(t,e,p.empty)},oe.prototype.insert=function(t,e){return this.replaceWith(t,t,e)},oe.prototype.replaceRange=function(t,e,n){return function(t,e,n,r){if(!r.size)return t.deleteRange(e,n);var o=t.doc.resolve(e),i=t.doc.resolve(n);if(Wt(o,i,r))return t.step(new Et(e,n,r));var s=ee(o,t.doc.resolve(n));0==s[s.length-1]&&s.pop();var a=-(o.depth+1);s.unshift(a);for(var c=o.depth,l=o.pos-1;c>0;c--,l--){var h=o.node(c).type.spec;if(h.defining||h.definingAsContext||h.isolating)break;s.indexOf(c)>-1?a=c:o.before(c)==l&&s.splice(1,0,-c)}for(var u=s.indexOf(a),f=[],d=r.openStart,m=r.content,v=0;;v++){var g=m.firstChild;if(f.push(g),v==r.openStart)break;m=g.content}for(var y=d-1;y>=0;y--){var w=f[y].type,b=Zt(w);if(b&&o.node(u).type!=w)d=y;else if(b||!w.isTextblock)break}for(var k=r.openStart;k>=0;k--){var x=(k+d+1)%(r.openStart+1),S=f[x];if(S)for(var M=0;M<s.length;M++){var C=s[(M+u)%s.length],O=!0;C<0&&(O=!1,C=-C);var N=o.node(C-1),D=o.index(C-1);if(N.canReplaceWith(D,D,S.type,S.marks))return t.replace(o.before(C),O?i.after(C):n,new p(te(r.content,0,r.openStart,x),x,r.openEnd))}}for(var T=t.steps.length,A=s.length-1;A>=0&&(t.replace(e,n,r),!(t.steps.length>T));A--){var E=s[A];E<0||(e=o.before(E),n=i.after(E))}}(this,t,e,n),this},oe.prototype.replaceRangeWith=function(t,e,n){return function(t,e,n,o){if(!o.isInline&&e==n&&t.doc.resolve(e).parent.content.size){var i=Lt(t.doc,e,o.type);null!=i&&(e=n=i)}t.replaceRange(e,n,new p(r.from(o),0,0))}(this,t,e,n),this},oe.prototype.deleteRange=function(t,e){return function(t,e,n){for(var r=t.doc.resolve(e),o=t.doc.resolve(n),i=ee(r,o),s=0;s<i.length;s++){var a=i[s],c=s==i.length-1;if(c&&0==a||r.node(a).type.contentMatch.validEnd)return t.delete(r.start(a),o.end(a));if(a>0&&(c||r.node(a-1).canReplace(r.index(a-1),o.indexAfter(a-1))))return t.delete(r.before(a),o.after(a))}for(var l=1;l<=r.depth&&l<=o.depth;l++)if(e-r.start(l)==r.depth-l&&n>r.end(l)&&o.end(l)-n!=o.depth-l)return t.delete(r.before(l),n);t.delete(e,n)}(this,t,e),this},oe.prototype.lift=function(t,e){return function(t,e,n){for(var o=e.$from,i=e.$to,s=e.depth,a=o.before(s+1),c=i.after(s+1),l=a,h=c,u=r.empty,f=0,d=s,m=!1;d>n;d--)m||o.index(d)>0?(m=!0,u=r.from(o.node(d).copy(u)),f++):l--;for(var v=r.empty,g=0,y=s,w=!1;y>n;y--)w||i.after(y+1)<i.end(y)?(w=!0,v=r.from(i.node(y).copy(v)),g++):h++;t.step(new It(l,h,a,c,new p(u.append(v),f,g),u.size-f,!0))}(this,t,e),this},oe.prototype.join=function(t,e){return void 0===e&&(e=1),function(t,e,n){var r=new Et(e-n,e+n,p.empty,!0);t.step(r)}(this,t,e),this},oe.prototype.wrap=function(t,e){return function(t,e,n){for(var o=r.empty,i=n.length-1;i>=0;i--){if(o.size){var s=n[i].type.contentMatch.matchFragment(o);if(!s||!s.validEnd)throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")}o=r.from(n[i].type.create(n[i].attrs,o))}var a=e.start,c=e.end;t.step(new It(a,c,a,c,new p(o,0,0),n.length,!0))}(this,t,e),this},oe.prototype.setBlockType=function(t,e,n,o){return void 0===e&&(e=t),void 0===o&&(o=null),function(t,e,n,o,i){if(!o.isTextblock)throw new RangeError("Type given to setBlockType should be a textblock");var s=t.steps.length;t.doc.nodesBetween(e,n,(function(e,n){if(e.isTextblock&&!e.hasMarkup(o,i)&&function(t,e,n){var r=t.resolve(e),o=r.index();return r.parent.canReplaceWith(o,o+1,n)}(t.doc,t.mapping.slice(s).map(n),o)){t.clearIncompatible(t.mapping.slice(s).map(n,1),o);var a=t.mapping.slice(s),c=a.map(n,1),l=a.map(n+e.nodeSize,1);return t.step(new It(c,l,c+1,l-1,new p(r.from(o.create(i,null,e.marks)),0,0),1,!0)),!1}}))}(this,t,e,n,o),this},oe.prototype.setNodeMarkup=function(t,e,n,o){return void 0===n&&(n=null),void 0===o&&(o=[]),function(t,e,n,o,i){var s=t.doc.nodeAt(e);if(!s)throw new RangeError("No node at given position");n||(n=s.type);var a=n.create(o,null,i||s.marks);if(s.isLeaf)return t.replaceWith(e,e+s.nodeSize,a);if(!n.validContent(s.content))throw new RangeError("Invalid content for node type "+n.name);t.step(new It(e,e+s.nodeSize,e+1,e+s.nodeSize-1,new p(r.from(a),0,0),1,!0))}(this,t,e,n,o),this},oe.prototype.setNodeAttribute=function(t,e,n){return this.step(new ne(t,e,n)),this},oe.prototype.addNodeMark=function(t,e){return this.step(new Tt(t,e)),this},oe.prototype.removeNodeMark=function(t,e){if(!(e instanceof c)){var n=this.doc.nodeAt(t);if(!n)throw new RangeError("No node at position "+t);if(!(e=e.isInSet(n.marks)))return this}return this.step(new At(t,e)),this},oe.prototype.split=function(t,e,n){return void 0===e&&(e=1),function(t,e,n,o){void 0===n&&(n=1);for(var i=t.doc.resolve(e),s=r.empty,a=r.empty,c=i.depth,l=i.depth-n,h=n-1;c>l;c--,h--){s=r.from(i.node(c).copy(s));var u=o&&o[h];a=r.from(u?u.type.create(u.attrs,a):i.node(c).copy(a))}t.step(new Et(e,e,new p(s.append(a),n,n),!0))}(this,t,e,n),this},oe.prototype.addMark=function(t,e,n){return function(t,e,n,r){var o,i,s=[],a=[];t.doc.nodesBetween(e,n,(function(t,c,l){if(t.isInline){var p=t.marks;if(!r.isInSet(p)&&l.type.allowsMarkType(r.type)){for(var h=Math.max(c,e),u=Math.min(c+t.nodeSize,n),f=r.addToSet(p),d=0;d<p.length;d++)p[d].isInSet(f)||(o&&o.to==h&&o.mark.eq(p[d])?o.to=u:s.push(o=new Dt(h,u,p[d])));i&&i.to==h?i.to=u:a.push(i=new Nt(h,u,r))}}})),s.forEach((function(e){return t.step(e)})),a.forEach((function(e){return t.step(e)}))}(this,t,e,n),this},oe.prototype.removeMark=function(t,e,n){return function(t,e,n,r){var o=[],i=0;t.doc.nodesBetween(e,n,(function(t,s){if(t.isInline){i++;var a=null;if(r instanceof Z)for(var c,l=t.marks;c=r.isInSet(l);)(a||(a=[])).push(c),l=c.removeFromSet(l);else r?r.isInSet(t.marks)&&(a=[r]):a=t.marks;if(a&&a.length)for(var p=Math.min(s+t.nodeSize,n),h=0;h<a.length;h++){for(var u=a[h],f=void 0,d=0;d<o.length;d++){var m=o[d];m.step==i-1&&u.eq(o[d].style)&&(f=m)}f?(f.to=p,f.step=i):o.push({style:u,from:Math.max(s,e),to:p,step:i})}}})),o.forEach((function(e){return t.step(new Dt(e.from,e.to,e.style))}))}(this,t,e,n),this},oe.prototype.clearIncompatible=function(t,e,n){return function(t,e,n,o){void 0===o&&(o=n.contentMatch);for(var i=t.doc.nodeAt(e),s=[],a=e+1,c=0;c<i.childCount;c++){var l=i.child(c),h=a+l.nodeSize,u=o.matchType(l.type);if(u){o=u;for(var f=0;f<l.marks.length;f++)n.allowsMarkType(l.marks[f].type)||t.step(new Dt(a,h,l.marks[f]))}else s.push(new Et(a,h,p.empty));a=h}if(!o.validEnd){var d=o.fillBefore(r.empty,!0);t.replace(a,a,new p(d,0,0))}for(var m=s.length-1;m>=0;m--)t.step(s[m])}(this,t,e,n),this},Object.defineProperties(oe.prototype,ie);var se=Object.freeze({__proto__:null,AddMarkStep:Nt,AddNodeMarkStep:Tt,AttrStep:ne,MapResult:wt,Mapping:xt,RemoveMarkStep:Dt,RemoveNodeMarkStep:At,ReplaceAroundStep:It,ReplaceStep:Et,Step:Mt,StepMap:kt,StepResult:Ct,Transform:oe,get TransformError(){return re},canJoin:Ft,canSplit:Vt,dropPoint:jt,findWrapping:Bt,insertPoint:Lt,joinPoint:qt,liftTarget:Pt,replaceStep:Jt}),ae=Object.create(null),ce=function(t,e,n){this.$anchor=t,this.$head=e,this.ranges=n||[new pe(t.min(e),t.max(e))]},le={anchor:{configurable:!0},head:{configurable:!0},from:{configurable:!0},to:{configurable:!0},$from:{configurable:!0},$to:{configurable:!0},empty:{configurable:!0}};le.anchor.get=function(){return this.$anchor.pos},le.head.get=function(){return this.$head.pos},le.from.get=function(){return this.$from.pos},le.to.get=function(){return this.$to.pos},le.$from.get=function(){return this.ranges[0].$from},le.$to.get=function(){return this.ranges[0].$to},le.empty.get=function(){for(var t=this.ranges,e=0;e<t.length;e++)if(t[e].$from.pos!=t[e].$to.pos)return!1;return!0},ce.prototype.content=function(){return this.$from.doc.slice(this.from,this.to,!0)},ce.prototype.replace=function(t,e){void 0===e&&(e=p.empty);for(var n=e.content.lastChild,r=null,o=0;o<e.openEnd;o++)r=n,n=n.lastChild;for(var i=t.steps.length,s=this.ranges,a=0;a<s.length;a++){var c=s[a],l=c.$from,h=c.$to,u=t.mapping.slice(i);t.replaceRange(u.map(l.pos),u.map(h.pos),a?p.empty:e),0==a&&be(t,i,(n?n.isInline:r&&r.isTextblock)?-1:1)}},ce.prototype.replaceWith=function(t,e){for(var n=t.steps.length,r=this.ranges,o=0;o<r.length;o++){var i=r[o],s=i.$from,a=i.$to,c=t.mapping.slice(n),l=c.map(s.pos),p=c.map(a.pos);o?t.deleteRange(l,p):(t.replaceRangeWith(l,p,e),be(t,n,e.isInline?-1:1))}},ce.findFrom=function(t,e,n){void 0===n&&(n=!1);var r=t.parent.inlineContent?new fe(t):we(t.node(0),t.parent,t.pos,t.index(),e,n);if(r)return r;for(var o=t.depth-1;o>=0;o--){var i=e<0?we(t.node(0),t.node(o),t.before(o+1),t.index(o),e,n):we(t.node(0),t.node(o),t.after(o+1),t.index(o)+1,e,n);if(i)return i}return null},ce.near=function(t,e){return void 0===e&&(e=1),this.findFrom(t,e)||this.findFrom(t,-e)||new ge(t.node(0))},ce.atStart=function(t){return we(t,t,0,0,1)||new ge(t)},ce.atEnd=function(t){return we(t,t,t.content.size,t.childCount,-1)||new ge(t)},ce.fromJSON=function(t,e){if(!e||!e.type)throw new RangeError("Invalid input for Selection.fromJSON");var n=ae[e.type];if(!n)throw new RangeError("No selection type "+e.type+" defined");return n.fromJSON(t,e)},ce.jsonID=function(t,e){if(t in ae)throw new RangeError("Duplicate use of selection JSON ID "+t);return ae[t]=e,e.prototype.jsonID=t,e},ce.prototype.getBookmark=function(){return fe.between(this.$anchor,this.$head).getBookmark()},Object.defineProperties(ce.prototype,le),ce.prototype.visible=!0;var pe=function(t,e){this.$from=t,this.$to=e},he=!1;function ue(t){he||t.parent.inlineContent||(he=!0,console.warn("TextSelection endpoint not pointing into a node with inline content ("+t.parent.type.name+")"))}var fe=function(t){function e(e,n){void 0===n&&(n=e),ue(e),ue(n),t.call(this,e,n)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={$cursor:{configurable:!0}};return n.$cursor.get=function(){return this.$anchor.pos==this.$head.pos?this.$head:null},e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));if(!o.parent.inlineContent)return t.near(o);var i=n.resolve(r.map(this.anchor));return new e(i.parent.inlineContent?i:o,o)},e.prototype.replace=function(e,n){if(void 0===n&&(n=p.empty),t.prototype.replace.call(this,e,n),n==p.empty){var r=this.$from.marksAcross(this.$to);r&&e.ensureMarks(r)}},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head},e.prototype.getBookmark=function(){return new de(this.anchor,this.head)},e.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}},e.fromJSON=function(t,n){if("number"!=typeof n.anchor||"number"!=typeof n.head)throw new RangeError("Invalid input for TextSelection.fromJSON");return new e(t.resolve(n.anchor),t.resolve(n.head))},e.create=function(t,e,n){void 0===n&&(n=e);var r=t.resolve(e);return new this(r,n==e?r:t.resolve(n))},e.between=function(n,r,o){var i=n.pos-r.pos;if(o&&!i||(o=i>=0?1:-1),!r.parent.inlineContent){var s=t.findFrom(r,o,!0)||t.findFrom(r,-o,!0);if(!s)return t.near(r,o);r=s.$head}return n.parent.inlineContent||(0==i||(n=(t.findFrom(n,-o,!0)||t.findFrom(n,o,!0)).$anchor).pos<r.pos!=i<0)&&(n=r),new e(n,r)},Object.defineProperties(e.prototype,n),e}(ce);ce.jsonID("text",fe);var de=function(t,e){this.anchor=t,this.head=e};de.prototype.map=function(t){return new de(t.map(this.anchor),t.map(this.head))},de.prototype.resolve=function(t){return fe.between(t.resolve(this.anchor),t.resolve(this.head))};var me=function(t){function e(e){var n=e.nodeAfter,r=e.node(0).resolve(e.pos+n.nodeSize);t.call(this,e,r),this.node=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(n,r){var o=r.mapResult(this.anchor),i=o.deleted,s=o.pos,a=n.resolve(s);return i?t.near(a):new e(a)},e.prototype.content=function(){return new p(r.from(this.node),0,0)},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor},e.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}},e.prototype.getBookmark=function(){return new ve(this.anchor)},e.fromJSON=function(t,n){if("number"!=typeof n.anchor)throw new RangeError("Invalid input for NodeSelection.fromJSON");return new e(t.resolve(n.anchor))},e.create=function(t,n){return new e(t.resolve(n))},e.isSelectable=function(t){return!t.isText&&!1!==t.type.spec.selectable},e}(ce);me.prototype.visible=!1,ce.jsonID("node",me);var ve=function(t){this.anchor=t};ve.prototype.map=function(t){var e=t.mapResult(this.anchor),n=e.deleted,r=e.pos;return n?new de(r,r):new ve(r)},ve.prototype.resolve=function(t){var e=t.resolve(this.anchor),n=e.nodeAfter;return n&&me.isSelectable(n)?new me(e):ce.near(e)};var ge=function(t){function e(e){t.call(this,e.resolve(0),e.resolve(e.content.size))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.replace=function(e,n){if(void 0===n&&(n=p.empty),n==p.empty){e.delete(0,e.doc.content.size);var r=t.atStart(e.doc);r.eq(e.selection)||e.setSelection(r)}else t.prototype.replace.call(this,e,n)},e.prototype.toJSON=function(){return{type:"all"}},e.fromJSON=function(t){return new e(t)},e.prototype.map=function(t){return new e(t)},e.prototype.eq=function(t){return t instanceof e},e.prototype.getBookmark=function(){return ye},e}(ce);ce.jsonID("all",ge);var ye={map:function(){return this},resolve:function(t){return new ge(t)}};function we(t,e,n,r,o,i){if(void 0===i&&(i=!1),e.inlineContent)return fe.create(t,n);for(var s=r-(o>0?0:1);o>0?s<e.childCount:s>=0;s+=o){var a=e.child(s);if(a.isAtom){if(!i&&me.isSelectable(a))return me.create(t,n-(o<0?a.nodeSize:0))}else{var c=we(t,a,n+o,o<0?a.childCount:0,o,i);if(c)return c}n+=a.nodeSize*o}return null}function be(t,e,n){var r=t.steps.length-1;if(!(r<e)){var o,i=t.steps[r];if(i instanceof Et||i instanceof It)t.mapping.maps[r].forEach((function(t,e,n,r){null==o&&(o=r)})),t.setSelection(ce.near(t.doc.resolve(o),n))}}var ke=function(t){function e(e){t.call(this,e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={selection:{configurable:!0},selectionSet:{configurable:!0},storedMarksSet:{configurable:!0},isGeneric:{configurable:!0},scrolledIntoView:{configurable:!0}};return n.selection.get=function(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection},e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=t,this.curSelectionFor=this.steps.length,this.updated=-3&(1|this.updated),this.storedMarks=null,this},n.selectionSet.get=function(){return(1&this.updated)>0},e.prototype.setStoredMarks=function(t){return this.storedMarks=t,this.updated|=2,this},e.prototype.ensureMarks=function(t){return c.sameSet(this.storedMarks||this.selection.$from.marks(),t)||this.setStoredMarks(t),this},e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()))},e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()))},n.storedMarksSet.get=function(){return(2&this.updated)>0},e.prototype.addStep=function(e,n){t.prototype.addStep.call(this,e,n),this.updated=-3&this.updated,this.storedMarks=null},e.prototype.setTime=function(t){return this.time=t,this},e.prototype.replaceSelection=function(t){return this.selection.replace(this,t),this},e.prototype.replaceSelectionWith=function(t,e){void 0===e&&(e=!0);var n=this.selection;return e&&(t=t.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||c.none))),n.replaceWith(this,t),this},e.prototype.deleteSelection=function(){return this.selection.replace(this),this},e.prototype.insertText=function(t,e,n){var r=this.doc.type.schema;if(null==e)return t?this.replaceSelectionWith(r.text(t),!0):this.deleteSelection();if(null==n&&(n=e),n=null==n?e:n,!t)return this.deleteRange(e,n);var o=this.storedMarks;if(!o){var i=this.doc.resolve(e);o=n==e?i.marks():i.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(e,n,r.text(t,o)),this.selection.empty||this.setSelection(ce.near(this.selection.$to)),this},e.prototype.setMeta=function(t,e){return this.meta["string"==typeof t?t:t.key]=e,this},e.prototype.getMeta=function(t){return this.meta["string"==typeof t?t:t.key]},n.isGeneric.get=function(){for(var t in this.meta)return!1;return!0},e.prototype.scrollIntoView=function(){return this.updated|=4,this},n.scrolledIntoView.get=function(){return(4&this.updated)>0},Object.defineProperties(e.prototype,n),e}(oe);function xe(t,e){return e&&t?t.bind(e):t}var Se=function(t,e,n){this.name=t,this.init=xe(e.init,n),this.apply=xe(e.apply,n)},Me=[new Se("doc",{init:function(t){return t.doc||t.schema.topNodeType.createAndFill()},apply:function(t){return t.doc}}),new Se("selection",{init:function(t,e){return t.selection||ce.atStart(e.doc)},apply:function(t){return t.selection}}),new Se("storedMarks",{init:function(t){return t.storedMarks||null},apply:function(t,e,n,r){return r.selection.$cursor?t.storedMarks:null}}),new Se("scrollToSelection",{init:function(){return 0},apply:function(t,e){return t.scrolledIntoView?e+1:e}})],Ce=function(t,e){var n=this;this.schema=t,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=Me.slice(),e&&e.forEach((function(t){if(n.pluginsByKey[t.key])throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");n.plugins.push(t),n.pluginsByKey[t.key]=t,t.spec.state&&n.fields.push(new Se(t.key,t.spec.state,t))}))},Oe=function(t){this.config=t},Ne={schema:{configurable:!0},plugins:{configurable:!0},tr:{configurable:!0}};function De(t,e,n){for(var r in t){var o=t[r];o instanceof Function?o=o.bind(e):"handleDOMEvents"==r&&(o=De(o,e,{})),n[r]=o}return n}Ne.schema.get=function(){return this.config.schema},Ne.plugins.get=function(){return this.config.plugins},Oe.prototype.apply=function(t){return this.applyTransaction(t).state},Oe.prototype.filterTransaction=function(t,e){void 0===e&&(e=-1);for(var n=0;n<this.config.plugins.length;n++)if(n!=e){var r=this.config.plugins[n];if(r.spec.filterTransaction&&!r.spec.filterTransaction.call(r,t,this))return!1}return!0},Oe.prototype.applyTransaction=function(t){if(!this.filterTransaction(t))return{state:this,transactions:[]};for(var e=[t],n=this.applyInner(t),r=null;;){for(var o=!1,i=0;i<this.config.plugins.length;i++){var s=this.config.plugins[i];if(s.spec.appendTransaction){var a=r?r[i].n:0,c=r?r[i].state:this,l=a<e.length&&s.spec.appendTransaction.call(s,a?e.slice(a):e,c,n);if(l&&n.filterTransaction(l,i)){if(l.setMeta("appendedTransaction",t),!r){r=[];for(var p=0;p<this.config.plugins.length;p++)r.push(p<i?{state:n,n:e.length}:{state:this,n:0})}e.push(l),n=n.applyInner(l),o=!0}r&&(r[i]={state:n,n:e.length})}}if(!o)return{state:n,transactions:e}}},Oe.prototype.applyInner=function(t){if(!t.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");for(var e=new Oe(this.config),n=this.config.fields,r=0;r<n.length;r++){var o=n[r];e[o.name]=o.apply(t,this[o.name],this,e)}return e},Ne.tr.get=function(){return new ke(this)},Oe.create=function(t){for(var e=new Ce(t.doc?t.doc.type.schema:t.schema,t.plugins),n=new Oe(e),r=0;r<e.fields.length;r++)n[e.fields[r].name]=e.fields[r].init(t,n);return n},Oe.prototype.reconfigure=function(t){for(var e=new Ce(this.schema,t.plugins),n=e.fields,r=new Oe(e),o=0;o<n.length;o++){var i=n[o].name;r[i]=this.hasOwnProperty(i)?this[i]:n[o].init(t,r)}return r},Oe.prototype.toJSON=function(t){var e={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(e.storedMarks=this.storedMarks.map((function(t){return t.toJSON()}))),t&&"object"==typeof t)for(var n in t){if("doc"==n||"selection"==n)throw new RangeError("The JSON fields `doc` and `selection` are reserved");var r=t[n],o=r.spec.state;o&&o.toJSON&&(e[n]=o.toJSON.call(r,this[r.key]))}return e},Oe.fromJSON=function(t,e,n){if(!e)throw new RangeError("Invalid input for EditorState.fromJSON");if(!t.schema)throw new RangeError("Required config field 'schema' missing");var r=new Ce(t.schema,t.plugins),o=new Oe(r);return r.fields.forEach((function(r){if("doc"==r.name)o.doc=E.fromJSON(t.schema,e.doc);else if("selection"==r.name)o.selection=ce.fromJSON(o.doc,e.selection);else if("storedMarks"==r.name)e.storedMarks&&(o.storedMarks=e.storedMarks.map(t.schema.markFromJSON));else{if(n)for(var i in n){var s=n[i],a=s.spec.state;if(s.key==r.name&&a&&a.fromJSON&&Object.prototype.hasOwnProperty.call(e,i))return void(o[r.name]=a.fromJSON.call(s,t,e[i],o))}o[r.name]=r.init(t,o)}})),o},Object.defineProperties(Oe.prototype,Ne);var Te=function(t){this.spec=t,this.props={},t.props&&De(t.props,this,this.props),this.key=t.key?t.key.key:Ee("plugin")};Te.prototype.getState=function(t){return t[this.key]};var Ae=Object.create(null);function Ee(t){return t in Ae?t+"$"+ ++Ae[t]:(Ae[t]=0,t+"$")}var Ie=function(t){void 0===t&&(t="key"),this.key=Ee(t)};Ie.prototype.get=function(t){return t.config.pluginsByKey[this.key]},Ie.prototype.getState=function(t){return t[this.key]};var Re=Object.freeze({__proto__:null,AllSelection:ge,EditorState:Oe,NodeSelection:me,Plugin:Te,PluginKey:Ie,Selection:ce,SelectionRange:pe,TextSelection:fe,Transaction:ke}),ze="undefined"!=typeof navigator?navigator:null,Pe="undefined"!=typeof document?document:null,Be=ze&&ze.userAgent||"",_e=/Edge\/(\d+)/.exec(Be),Ve=/MSIE \d/.exec(Be),Fe=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Be),$e=!!(Ve||Fe||_e),qe=Ve?document.documentMode:Fe?+Fe[1]:_e?+_e[1]:0,Le=!$e&&/gecko\/(\d+)/i.test(Be);Le&&(/Firefox\/(\d+)/.exec(Be)||[0,0])[1];var je=!$e&&/Chrome\/(\d+)/.exec(Be),Je=!!je,We=je?+je[1]:0,Ke=!$e&&!!ze&&/Apple Computer/.test(ze.vendor),He=Ke&&(/Mobile\/\w+/.test(Be)||!!ze&&ze.maxTouchPoints>2),Ue=He||!!ze&&/Mac/.test(ze.platform),Ge=/Android \d/.test(Be),Qe=!!Pe&&"webkitFontSmoothing"in Pe.documentElement.style,Xe=Qe?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,Ye=function(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e},Ze=function(t){var e=t.assignedSlot||t.parentNode;return e&&11==e.nodeType?e.host:e},tn=null,en=function(t,e,n){var r=tn||(tn=document.createRange());return r.setEnd(t,null==n?t.nodeValue.length:n),r.setStart(t,e||0),r},nn=function(t,e,n,r){return n&&(on(t,e,n,r,-1)||on(t,e,n,r,1))},rn=/^(img|br|input|textarea|hr)$/i;function on(t,e,n,r,o){for(;;){if(t==n&&e==r)return!0;if(e==(o<0?0:sn(t))){var i=t.parentNode;if(!i||1!=i.nodeType||an(t)||rn.test(t.nodeName)||"false"==t.contentEditable)return!1;e=Ye(t)+(o<0?0:1),t=i}else{if(1!=t.nodeType)return!1;if("false"==(t=t.childNodes[e+(o<0?-1:0)]).contentEditable)return!1;e=o<0?sn(t):0}}}function sn(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function an(t){for(var e,n=t;n&&!(e=n.pmViewDesc);n=n.parentNode);return e&&e.node&&e.node.isBlock&&(e.dom==t||e.contentDOM==t)}var cn=function(t){var e=t.isCollapsed;return e&&Je&&t.rangeCount&&!t.getRangeAt(0).collapsed&&(e=!1),e};function ln(t,e){var n=document.createEvent("Event");return n.initEvent("keydown",!0,!0),n.keyCode=t,n.key=n.code=e,n}function pn(t){return{left:0,right:t.documentElement.clientWidth,top:0,bottom:t.documentElement.clientHeight}}function hn(t,e){return"number"==typeof t?t:t[e]}function un(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return{left:e.left,right:e.left+t.clientWidth*n,top:e.top,bottom:e.top+t.clientHeight*r}}function fn(t,e,n){for(var r=t.someProp("scrollThreshold")||0,o=t.someProp("scrollMargin")||5,i=t.dom.ownerDocument,s=n||t.dom;s;s=Ze(s))if(1==s.nodeType){var a=s,c=a==i.body,l=c?pn(i):un(a),p=0,h=0;if(e.top<l.top+hn(r,"top")?h=-(l.top-e.top+hn(o,"top")):e.bottom>l.bottom-hn(r,"bottom")&&(h=e.bottom-l.bottom+hn(o,"bottom")),e.left<l.left+hn(r,"left")?p=-(l.left-e.left+hn(o,"left")):e.right>l.right-hn(r,"right")&&(p=e.right-l.right+hn(o,"right")),p||h)if(c)i.defaultView.scrollBy(p,h);else{var u=a.scrollLeft,f=a.scrollTop;h&&(a.scrollTop+=h),p&&(a.scrollLeft+=p);var d=a.scrollLeft-u,m=a.scrollTop-f;e={left:e.left-d,top:e.top-m,right:e.right-d,bottom:e.bottom-m}}if(c)break}}function dn(t){for(var e=[],n=t.ownerDocument,r=t;r&&(e.push({dom:r,top:r.scrollTop,left:r.scrollLeft}),t!=n);r=Ze(r));return e}function mn(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=r.dom,i=r.top,s=r.left;o.scrollTop!=i+e&&(o.scrollTop=i+e),o.scrollLeft!=s&&(o.scrollLeft=s)}}var vn=null;function gn(t,e){for(var n,r,o=2e8,i=0,s=e.top,a=e.top,c=t.firstChild,l=0;c;c=c.nextSibling,l++){var p=void 0;if(1==c.nodeType)p=c.getClientRects();else{if(3!=c.nodeType)continue;p=en(c).getClientRects()}for(var h=0;h<p.length;h++){var u=p[h];if(u.top<=s&&u.bottom>=a){s=Math.max(u.bottom,s),a=Math.min(u.top,a);var f=u.left>e.left?u.left-e.left:u.right<e.left?e.left-u.right:0;if(f<o){n=c,o=f,r=f&&3==n.nodeType?{left:u.right<e.left?u.right:u.left,top:e.top}:e,1==c.nodeType&&f&&(i=l+(e.left>=(u.left+u.right)/2?1:0));continue}}!n&&(e.left>=u.right&&e.top>=u.top||e.left>=u.left&&e.top>=u.bottom)&&(i=l+1)}}return n&&3==n.nodeType?function(t,e){for(var n=t.nodeValue.length,r=document.createRange(),o=0;o<n;o++){r.setEnd(t,o+1),r.setStart(t,o);var i=kn(r,1);if(i.top!=i.bottom&&yn(e,i))return{node:t,offset:o+(e.left>=(i.left+i.right)/2?1:0)}}return{node:t,offset:0}}(n,r):!n||o&&1==n.nodeType?{node:t,offset:i}:gn(n,r)}function yn(t,e){return t.left>=e.left-1&&t.left<=e.right+1&&t.top>=e.top-1&&t.top<=e.bottom+1}function wn(t,e,n){var r=t.childNodes.length;if(r&&n.top<n.bottom)for(var o=Math.max(0,Math.min(r-1,Math.floor(r*(e.top-n.top)/(n.bottom-n.top))-2)),i=o;;){var s=t.childNodes[i];if(1==s.nodeType)for(var a=s.getClientRects(),c=0;c<a.length;c++){var l=a[c];if(yn(e,l))return wn(s,e,l)}if((i=(i+1)%r)==o)break}return t}function bn(t,e){var n,r,o,i=t.dom.ownerDocument,s=0;if(i.caretPositionFromPoint)try{var a=i.caretPositionFromPoint(e.left,e.top);a&&(o=(n=a).offsetNode,s=n.offset)}catch(t){}if(!o&&i.caretRangeFromPoint){var c=i.caretRangeFromPoint(e.left,e.top);c&&(o=(r=c).startContainer,s=r.startOffset)}var l,p=(t.root.elementFromPoint?t.root:i).elementFromPoint(e.left,e.top);if(!p||!t.dom.contains(1!=p.nodeType?p.parentNode:p)){var h=t.dom.getBoundingClientRect();if(!yn(e,h))return null;if(!(p=wn(t.dom,e,h)))return null}if(Ke)for(var u=p;o&&u;u=Ze(u))u.draggable&&(o=void 0);if(p=function(t,e){var n=t.parentNode;return n&&/^li$/i.test(n.nodeName)&&e.left<t.getBoundingClientRect().left?n:t}(p,e),o){if(Le&&1==o.nodeType&&(s=Math.min(s,o.childNodes.length))<o.childNodes.length){var f,d=o.childNodes[s];"IMG"==d.nodeName&&(f=d.getBoundingClientRect()).right<=e.left&&f.bottom>e.top&&s++}o==t.dom&&s==o.childNodes.length-1&&1==o.lastChild.nodeType&&e.top>o.lastChild.getBoundingClientRect().bottom?l=t.state.doc.content.size:0!=s&&1==o.nodeType&&"BR"==o.childNodes[s-1].nodeName||(l=function(t,e,n,r){for(var o=-1,i=e;i!=t.dom;){var s=t.docView.nearestDesc(i,!0);if(!s)return null;if(s.node.isBlock&&s.parent){var a=s.dom.getBoundingClientRect();if(a.left>r.left||a.top>r.top)o=s.posBefore;else{if(!(a.right<r.left||a.bottom<r.top))break;o=s.posAfter}}i=s.dom.parentNode}return o>-1?o:t.docView.posFromDOM(e,n,1)}(t,o,s,e))}null==l&&(l=function(t,e,n){var r=gn(e,n),o=r.node,i=r.offset,s=-1;if(1==o.nodeType&&!o.firstChild){var a=o.getBoundingClientRect();s=a.left!=a.right&&n.left>(a.left+a.right)/2?1:-1}return t.docView.posFromDOM(o,i,s)}(t,p,e));var m=t.docView.nearestDesc(p,!0);return{pos:l,inside:m?m.posAtStart-m.border:-1}}function kn(t,e){var n=t.getClientRects();return n.length?n[e<0?0:n.length-1]:t.getBoundingClientRect()}var xn=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;function Sn(t,e,n){var r=t.docView.domFromPos(e,n<0?-1:1),o=r.node,i=r.offset,s=r.atom,a=Qe||Le;if(3==o.nodeType){if(!a||!xn.test(o.nodeValue)&&(n<0?i:i!=o.nodeValue.length)){var c=i,l=i,p=n<0?1:-1;return n<0&&!i?(l++,p=-1):n>=0&&i==o.nodeValue.length?(c--,p=1):n<0?c--:l++,Mn(kn(en(o,c,l),1),p<0)}var h=kn(en(o,i,i),n);if(Le&&i&&/\s/.test(o.nodeValue[i-1])&&i<o.nodeValue.length){var u=kn(en(o,i-1,i-1),-1);if(u.top==h.top){var f=kn(en(o,i,i+1),-1);if(f.top!=h.top)return Mn(f,f.left<u.left)}}return h}if(!t.state.doc.resolve(e-(s||0)).parent.inlineContent){if(null==s&&i&&(n<0||i==sn(o))){var d=o.childNodes[i-1];if(1==d.nodeType)return Cn(d.getBoundingClientRect(),!1)}if(null==s&&i<sn(o)){var m=o.childNodes[i];if(1==m.nodeType)return Cn(m.getBoundingClientRect(),!0)}return Cn(o.getBoundingClientRect(),n>=0)}if(null==s&&i&&(n<0||i==sn(o))){var v=o.childNodes[i-1],g=3==v.nodeType?en(v,sn(v)-(a?0:1)):1!=v.nodeType||"BR"==v.nodeName&&v.nextSibling?null:v;if(g)return Mn(kn(g,1),!1)}if(null==s&&i<sn(o)){for(var y=o.childNodes[i];y.pmViewDesc&&y.pmViewDesc.ignoreForCoords;)y=y.nextSibling;var w=y?3==y.nodeType?en(y,0,a?0:1):1==y.nodeType?y:null:null;if(w)return Mn(kn(w,-1),!0)}return Mn(kn(3==o.nodeType?en(o):o,-n),n>=0)}function Mn(t,e){if(0==t.width)return t;var n=e?t.left:t.right;return{top:t.top,bottom:t.bottom,left:n,right:n}}function Cn(t,e){if(0==t.height)return t;var n=e?t.top:t.bottom;return{top:n,bottom:n,left:t.left,right:t.right}}function On(t,e,n){var r=t.state,o=t.root.activeElement;r!=e&&t.updateState(e),o!=t.dom&&t.focus();try{return n()}finally{r!=e&&t.updateState(r),o!=t.dom&&o&&o.focus()}}var Nn=/[\u0590-\u08ac]/;var Dn=null,Tn=null,An=!1;function En(t,e,n){return Dn==e&&Tn==n?An:(Dn=e,Tn=n,An="up"==n||"down"==n?function(t,e,n){var r=e.selection,o="up"==n?r.$from:r.$to;return On(t,e,(function(){for(var e=t.docView.domFromPos(o.pos,"up"==n?-1:1).node;;){var r=t.docView.nearestDesc(e,!0);if(!r)break;if(r.node.isBlock){e=r.dom;break}e=r.dom.parentNode}for(var i=Sn(t,o.pos,1),s=e.firstChild;s;s=s.nextSibling){var a=void 0;if(1==s.nodeType)a=s.getClientRects();else{if(3!=s.nodeType)continue;a=en(s,0,s.nodeValue.length).getClientRects()}for(var c=0;c<a.length;c++){var l=a[c];if(l.bottom>l.top+1&&("up"==n?i.top-l.top>2*(l.bottom-i.top):l.bottom-i.bottom>2*(i.bottom-l.top)))return!1}}return!0}))}(t,e,n):function(t,e,n){var r=e.selection.$head;if(!r.parent.isTextblock)return!1;var o=r.parentOffset,i=!o,s=o==r.parent.content.size,a=t.domSelection();return Nn.test(r.parent.textContent)&&a.modify?On(t,e,(function(){var e=a.getRangeAt(0),o=a.focusNode,i=a.focusOffset,s=a.caretBidiLevel;a.modify("move",n,"character");var c=!(r.depth?t.docView.domAfterPos(r.before()):t.dom).contains(1==a.focusNode.nodeType?a.focusNode:a.focusNode.parentNode)||o==a.focusNode&&i==a.focusOffset;return a.removeAllRanges(),a.addRange(e),null!=s&&(a.caretBidiLevel=s),c})):"left"==n||"backward"==n?i:s}(t,e,n))}var In=function(t,e,n,r){this.parent=t,this.children=e,this.dom=n,this.contentDOM=r,this.dirty=0,n.pmViewDesc=this},Rn={size:{configurable:!0},border:{configurable:!0},posBefore:{configurable:!0},posAtStart:{configurable:!0},posAfter:{configurable:!0},posAtEnd:{configurable:!0},contentLost:{configurable:!0},domAtom:{configurable:!0},ignoreForCoords:{configurable:!0}};In.prototype.matchesWidget=function(t){return!1},In.prototype.matchesMark=function(t){return!1},In.prototype.matchesNode=function(t,e,n){return!1},In.prototype.matchesHack=function(t){return!1},In.prototype.parseRule=function(){return null},In.prototype.stopEvent=function(t){return!1},Rn.size.get=function(){for(var t=0,e=0;e<this.children.length;e++)t+=this.children[e].size;return t},Rn.border.get=function(){return 0},In.prototype.destroy=function(){this.parent=void 0,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=void 0);for(var t=0;t<this.children.length;t++)this.children[t].destroy()},In.prototype.posBeforeChild=function(t){for(var e=0,n=this.posAtStart;;e++){var r=this.children[e];if(r==t)return n;n+=r.size}},Rn.posBefore.get=function(){return this.parent.posBeforeChild(this)},Rn.posAtStart.get=function(){return this.parent?this.parent.posBeforeChild(this)+this.border:0},Rn.posAfter.get=function(){return this.posBefore+this.size},Rn.posAtEnd.get=function(){return this.posAtStart+this.size-2*this.border},In.prototype.localPosFromDOM=function(t,e,n){if(this.contentDOM&&this.contentDOM.contains(1==t.nodeType?t:t.parentNode)){if(n<0){var r,o;if(t==this.contentDOM)r=t.childNodes[e-1];else{for(;t.parentNode!=this.contentDOM;)t=t.parentNode;r=t.previousSibling}for(;r&&(!(o=r.pmViewDesc)||o.parent!=this);)r=r.previousSibling;return r?this.posBeforeChild(o)+o.size:this.posAtStart}var i,s;if(t==this.contentDOM)i=t.childNodes[e];else{for(;t.parentNode!=this.contentDOM;)t=t.parentNode;i=t.nextSibling}for(;i&&(!(s=i.pmViewDesc)||s.parent!=this);)i=i.nextSibling;return i?this.posBeforeChild(s):this.posAtEnd}var a;if(t==this.dom&&this.contentDOM)a=e>Ye(this.contentDOM);else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))a=2&t.compareDocumentPosition(this.contentDOM);else if(this.dom.firstChild){if(0==e)for(var c=t;;c=c.parentNode){if(c==this.dom){a=!1;break}if(c.previousSibling)break}if(null==a&&e==t.childNodes.length)for(var l=t;;l=l.parentNode){if(l==this.dom){a=!0;break}if(l.nextSibling)break}}return(null==a?n>0:a)?this.posAtEnd:this.posAtStart},In.prototype.nearestDesc=function(t,e){void 0===e&&(e=!1);for(var n=!0,r=t;r;r=r.parentNode){var o=this.getDesc(r),i=void 0;if(o&&(!e||o.node)){if(!n||!(i=o.nodeDOM)||(1==i.nodeType?i.contains(1==t.nodeType?t:t.parentNode):i==t))return o;n=!1}}},In.prototype.getDesc=function(t){for(var e=t.pmViewDesc,n=e;n;n=n.parent)if(n==this)return e},In.prototype.posFromDOM=function(t,e,n){for(var r=t;r;r=r.parentNode){var o=this.getDesc(r);if(o)return o.localPosFromDOM(t,e,n)}return-1},In.prototype.descAt=function(t){for(var e=0,n=0;e<this.children.length;e++){var r=this.children[e],o=n+r.size;if(n==t&&o!=n){for(;!r.border&&r.children.length;)r=r.children[0];return r}if(t<o)return r.descAt(t-n-r.border);n=o}},In.prototype.domFromPos=function(t,e){if(!this.contentDOM)return{node:this.dom,offset:0,atom:t+1};for(var n=0,r=0,o=0;n<this.children.length;n++){var i=this.children[n],s=o+i.size;if(s>t||i instanceof $n){r=t-o;break}o=s}if(r)return this.children[n].domFromPos(r-this.children[n].border,e);for(var a=void 0;n&&!(a=this.children[n-1]).size&&a instanceof zn&&a.side>=0;n--);if(e<=0){for(var c,l=!0;(c=n?this.children[n-1]:null)&&c.dom.parentNode!=this.contentDOM;n--,l=!1);return c&&e&&l&&!c.border&&!c.domAtom?c.domFromPos(c.size,e):{node:this.contentDOM,offset:c?Ye(c.dom)+1:0}}for(var p,h=!0;(p=n<this.children.length?this.children[n]:null)&&p.dom.parentNode!=this.contentDOM;n++,h=!1);return p&&h&&!p.border&&!p.domAtom?p.domFromPos(0,e):{node:this.contentDOM,offset:p?Ye(p.dom):this.contentDOM.childNodes.length}},In.prototype.parseRange=function(t,e,n){if(void 0===n&&(n=0),0==this.children.length)return{node:this.contentDOM,from:t,to:e,fromOffset:0,toOffset:this.contentDOM.childNodes.length};for(var r=-1,o=-1,i=n,s=0;;s++){var a=this.children[s],c=i+a.size;if(-1==r&&t<=c){var l=i+a.border;if(t>=l&&e<=c-a.border&&a.node&&a.contentDOM&&this.contentDOM.contains(a.contentDOM))return a.parseRange(t,e,l);t=i;for(var p=s;p>0;p--){var h=this.children[p-1];if(h.size&&h.dom.parentNode==this.contentDOM&&!h.emptyChildAt(1)){r=Ye(h.dom)+1;break}t-=h.size}-1==r&&(r=0)}if(r>-1&&(c>e||s==this.children.length-1)){e=c;for(var u=s+1;u<this.children.length;u++){var f=this.children[u];if(f.size&&f.dom.parentNode==this.contentDOM&&!f.emptyChildAt(-1)){o=Ye(f.dom);break}e+=f.size}-1==o&&(o=this.contentDOM.childNodes.length);break}i=c}return{node:this.contentDOM,from:t,to:e,fromOffset:r,toOffset:o}},In.prototype.emptyChildAt=function(t){if(this.border||!this.contentDOM||!this.children.length)return!1;var e=this.children[t<0?0:this.children.length-1];return 0==e.size||e.emptyChildAt(t)},In.prototype.domAfterPos=function(t){var e=this.domFromPos(t,0),n=e.node,r=e.offset;if(1!=n.nodeType||r==n.childNodes.length)throw new RangeError("No node after pos "+t);return n.childNodes[r]},In.prototype.setSelection=function(t,e,n,r){void 0===r&&(r=!1);for(var o=Math.min(t,e),i=Math.max(t,e),s=0,a=0;s<this.children.length;s++){var c=this.children[s],l=a+c.size;if(o>a&&i<l)return c.setSelection(t-a-c.border,e-a-c.border,n,r);a=l}var p=this.domFromPos(t,t?-1:1),h=e==t?p:this.domFromPos(e,e?-1:1),u=n.getSelection(),f=!1;if((Le||Ke)&&t==e){var d=p.node,m=p.offset;if(3==d.nodeType){if((f=!(!m||"\n"!=d.nodeValue[m-1]))&&m==d.nodeValue.length)for(var v=d,g=void 0;v;v=v.parentNode){if(g=v.nextSibling){"BR"==g.nodeName&&(p=h={node:g.parentNode,offset:Ye(g)+1});break}var y=v.pmViewDesc;if(y&&y.node&&y.node.isBlock)break}}else{var w=d.childNodes[m-1];f=w&&("BR"==w.nodeName||"false"==w.contentEditable)}}if(Le&&u.focusNode&&u.focusNode!=h.node&&1==u.focusNode.nodeType){var b=u.focusNode.childNodes[u.focusOffset];b&&"false"==b.contentEditable&&(r=!0)}if(r||f&&Ke||!nn(p.node,p.offset,u.anchorNode,u.anchorOffset)||!nn(h.node,h.offset,u.focusNode,u.focusOffset)){var k=!1;if((u.extend||t==e)&&!f){u.collapse(p.node,p.offset);try{t!=e&&u.extend(h.node,h.offset),k=!0}catch(t){if(!(t instanceof DOMException))throw t}}if(!k){if(t>e){var x=p;p=h,h=x}var S=document.createRange();S.setEnd(h.node,h.offset),S.setStart(p.node,p.offset),u.removeAllRanges(),u.addRange(S)}}},In.prototype.ignoreMutation=function(t){return!this.contentDOM&&"selection"!=t.type},Rn.contentLost.get=function(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)},In.prototype.markDirty=function(t,e){for(var n=0,r=0;r<this.children.length;r++){var o=this.children[r],i=n+o.size;if(n==i?t<=i&&e>=n:t<i&&e>n){var s=n+o.border,a=i-o.border;if(t>=s&&e<=a)return this.dirty=t==n||e==i?2:1,void(t!=s||e!=a||!o.contentLost&&o.dom.parentNode==this.contentDOM?o.markDirty(t-s,e-s):o.dirty=3);o.dirty=o.dom!=o.contentDOM||o.dom.parentNode!=this.contentDOM||o.children.length?3:2}n=i}this.dirty=2},In.prototype.markParentsDirty=function(){for(var t=1,e=this.parent;e;e=e.parent,t++){var n=1==t?2:1;e.dirty<n&&(e.dirty=n)}},Rn.domAtom.get=function(){return!1},Rn.ignoreForCoords.get=function(){return!1},Object.defineProperties(In.prototype,Rn);var zn=function(t){function e(e,n,r,o){var i,s=n.type.toDOM;if("function"==typeof s&&(s=s(r,(function(){return i?i.parent?i.parent.posBeforeChild(i):void 0:o}))),!n.type.spec.raw){if(1!=s.nodeType){var a=document.createElement("span");a.appendChild(s),s=a}s.contentEditable="false",s.classList.add("ProseMirror-widget")}t.call(this,e,[],s,null),this.widget=n,this.widget=n,i=this}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={domAtom:{configurable:!0},side:{configurable:!0}};return e.prototype.matchesWidget=function(t){return 0==this.dirty&&t.type.eq(this.widget.type)},e.prototype.parseRule=function(){return{ignore:!0}},e.prototype.stopEvent=function(t){var e=this.widget.spec.stopEvent;return!!e&&e(t)},e.prototype.ignoreMutation=function(t){return"selection"!=t.type||this.widget.spec.ignoreSelection},e.prototype.destroy=function(){this.widget.type.destroy(this.dom),t.prototype.destroy.call(this)},n.domAtom.get=function(){return!0},n.side.get=function(){return this.widget.type.side},Object.defineProperties(e.prototype,n),e}(In),Pn=function(t){function e(e,n,r,o){t.call(this,e,[],n,null),this.textDOM=r,this.text=o}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0}};return n.size.get=function(){return this.text.length},e.prototype.localPosFromDOM=function(t,e){return t!=this.textDOM?this.posAtStart+(e?this.size:0):this.posAtStart+e},e.prototype.domFromPos=function(t){return{node:this.textDOM,offset:t}},e.prototype.ignoreMutation=function(t){return"characterData"===t.type&&t.target.nodeValue==t.oldValue},Object.defineProperties(e.prototype,n),e}(In),Bn=function(t){function e(e,n,r,o){t.call(this,e,[],r,o),this.mark=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.create=function(t,n,r,o){var i=o.nodeViews[n.type.name],s=i&&i(n,o,r);return s&&s.dom||(s=ft.renderSpec(document,n.type.spec.toDOM(n,r))),new e(t,n,s.dom,s.contentDOM||s.dom)},e.prototype.parseRule=function(){return 3&this.dirty||this.mark.type.spec.reparseInView?null:{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM||void 0}},e.prototype.matchesMark=function(t){return 3!=this.dirty&&this.mark.eq(t)},e.prototype.markDirty=function(e,n){if(t.prototype.markDirty.call(this,e,n),0!=this.dirty){for(var r=this.parent;!r.node;)r=r.parent;r.dirty<this.dirty&&(r.dirty=this.dirty),this.dirty=0}},e.prototype.slice=function(t,n,r){var o=e.create(this.parent,this.mark,!0,r),i=this.children,s=this.size;n<s&&(i=Zn(i,n,s,r)),t>0&&(i=Zn(i,0,t,r));for(var a=0;a<i.length;a++)i[a].parent=o;return o.children=i,o},e}(In),_n=function(t){function e(e,n,r,o,i,s,a,c,l){t.call(this,e,[],i,s),this.node=n,this.outerDeco=r,this.innerDeco=o,this.nodeDOM=a,s&&this.updateChildren(c,l)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0},border:{configurable:!0},domAtom:{configurable:!0}};return e.create=function(t,n,r,o,i,s){var a,c,l=i.nodeViews[n.type.name],p=l&&l(n,i,(function(){return c?c.parent?c.parent.posBeforeChild(c):void 0:s}),r,o),h=p&&p.dom,u=p&&p.contentDOM;if(n.isText)if(h){if(3!=h.nodeType)throw new RangeError("Text must be rendered as a DOM text node")}else h=document.createTextNode(n.text);else h||(h=(a=ft.renderSpec(document,n.type.spec.toDOM(n))).dom,u=a.contentDOM);u||n.isText||"BR"==h.nodeName||(h.hasAttribute("contenteditable")||(h.contentEditable="false"),n.type.spec.draggable&&(h.draggable=!0));var f=h;return h=Un(h,r,n),p?c=new qn(t,n,r,o,h,u||null,f,p,i,s+1):n.isText?new Fn(t,n,r,o,h,f,i):new e(t,n,r,o,h,u||null,f,i,s+1)},e.prototype.parseRule=function(){var t=this;if(this.node.type.spec.reparseInView)return null;var e={node:this.node.type.name,attrs:this.node.attrs};if("pre"==this.node.type.whitespace&&(e.preserveWhitespace="full"),this.contentDOM)if(this.contentLost){for(var n=this.children.length-1;n>=0;n--){var o=this.children[n];if(this.dom.contains(o.dom.parentNode)){e.contentElement=o.dom.parentNode;break}}e.contentElement||(e.getContent=function(){return r.empty})}else e.contentElement=this.contentDOM;else e.getContent=function(){return t.node.content};return e},e.prototype.matchesNode=function(t,e,n){return 0==this.dirty&&t.eq(this.node)&&Gn(e,this.outerDeco)&&n.eq(this.innerDeco)},n.size.get=function(){return this.node.nodeSize},n.border.get=function(){return this.node.isLeaf?0:1},e.prototype.updateChildren=function(t,e){var n=this,r=this.node.inlineContent,o=e,i=t.composing?this.localCompositionInfo(t,e):null,s=i&&i.pos>-1?i:null,a=i&&i.pos<0,l=new Xn(this,s&&s.node,t);!function(t,e,n,r){var o=e.locals(t),i=0;if(0==o.length){for(var s=0;s<t.childCount;s++){var a=t.child(s);r(a,o,e.forChild(i,a),s),i+=a.nodeSize}return}for(var c=0,l=[],p=null,h=0;;){if(c<o.length&&o[c].to==i){for(var u=o[c++],f=void 0;c<o.length&&o[c].to==i;)(f||(f=[u])).push(o[c++]);if(f){f.sort(Yn);for(var d=0;d<f.length;d++)n(f[d],h,!!p)}else n(u,h,!!p)}var m=void 0,v=void 0;if(p)v=-1,m=p,p=null;else{if(!(h<t.childCount))break;v=h,m=t.child(h++)}for(var g=0;g<l.length;g++)l[g].to<=i&&l.splice(g--,1);for(;c<o.length&&o[c].from<=i&&o[c].to>i;)l.push(o[c++]);var y=i+m.nodeSize;if(m.isText){var w=y;c<o.length&&o[c].from<w&&(w=o[c].from);for(var b=0;b<l.length;b++)l[b].to<w&&(w=l[b].to);w<y&&(p=m.cut(w-i),m=m.cut(0,w-i),y=w,v=-1)}r(m,m.isInline&&!m.isLeaf?l.filter((function(t){return!t.inline})):l.slice(),e.forChild(i,m),v),i=y}}(this.node,this.innerDeco,(function(e,i,s){e.spec.marks?l.syncToMarks(e.spec.marks,r,t):e.type.side>=0&&!s&&l.syncToMarks(i==n.node.childCount?c.none:n.node.child(i).marks,r,t),l.placeWidget(e,t,o)}),(function(e,n,s,c){var p;l.syncToMarks(e.marks,r,t),l.findNodeMatch(e,n,s,c)||a&&t.state.selection.from>o&&t.state.selection.to<o+e.nodeSize&&(p=l.findIndexWithChild(i.node))>-1&&l.updateNodeAt(e,n,s,p,t)||l.updateNextNode(e,n,s,t,c)||l.addNode(e,n,s,t,o),o+=e.nodeSize})),l.syncToMarks([],r,t),this.node.isTextblock&&l.addTextblockHacks(),l.destroyRest(),(l.changed||2==this.dirty)&&(s&&this.protectLocalComposition(t,s),Ln(this.contentDOM,this.children,t),He&&function(t){if("UL"==t.nodeName||"OL"==t.nodeName){var e=t.style.cssText;t.style.cssText=e+"; list-style: square !important",window.getComputedStyle(t).listStyle,t.style.cssText=e}}(this.dom))},e.prototype.localCompositionInfo=function(t,e){var n=t.state.selection,r=n.from,o=n.to;if(!(t.state.selection instanceof fe)||r<e||o>e+this.node.content.size)return null;var i=t.domSelection(),s=function(t,e){for(;;){if(3==t.nodeType)return t;if(1==t.nodeType&&e>0){if(t.childNodes.length>e&&3==t.childNodes[e].nodeType)return t.childNodes[e];e=sn(t=t.childNodes[e-1])}else{if(!(1==t.nodeType&&e<t.childNodes.length))return null;t=t.childNodes[e],e=0}}}(i.focusNode,i.focusOffset);if(!s||!this.dom.contains(s.parentNode))return null;if(this.node.inlineContent){var a=s.nodeValue,c=function(t,e,n,r){for(var o=0,i=0;o<t.childCount&&i<=r;){var s=t.child(o++),a=i;if(i+=s.nodeSize,s.isText){for(var c=s.text;o<t.childCount;){var l=t.child(o++);if(i+=l.nodeSize,!l.isText)break;c+=l.text}if(i>=n){var p=a<r?c.lastIndexOf(e,r-a-1):-1;if(p>=0&&p+e.length+a>=n)return a+p;if(n==r&&c.length>=r+e.length-a&&c.slice(r-a,r-a+e.length)==e)return r}}}return-1}(this.node.content,a,r-e,o-e);return c<0?null:{node:s,pos:c,text:a}}return{node:s,pos:-1,text:""}},e.prototype.protectLocalComposition=function(t,e){var n=e.node,r=e.pos,o=e.text;if(!this.getDesc(n)){for(var i=n;i.parentNode!=this.contentDOM;i=i.parentNode){for(;i.previousSibling;)i.parentNode.removeChild(i.previousSibling);for(;i.nextSibling;)i.parentNode.removeChild(i.nextSibling);i.pmViewDesc&&(i.pmViewDesc=void 0)}var s=new Pn(this,i,n,o);t.input.compositionNodes.push(s),this.children=Zn(this.children,r,r+o.length,t,s)}},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||!t.sameMarkup(this.node))&&(this.updateInner(t,e,n,r),!0)},e.prototype.updateInner=function(t,e,n,r){this.updateOuterDeco(e),this.node=t,this.innerDeco=n,this.contentDOM&&this.updateChildren(r,this.posAtStart),this.dirty=0},e.prototype.updateOuterDeco=function(t){if(!Gn(t,this.outerDeco)){var e=1!=this.nodeDOM.nodeType,n=this.dom;this.dom=Kn(this.dom,this.nodeDOM,Wn(this.outerDeco,this.node,e),Wn(t,this.node,e)),this.dom!=n&&(n.pmViewDesc=void 0,this.dom.pmViewDesc=this),this.outerDeco=t}},e.prototype.selectNode=function(){1==this.nodeDOM.nodeType&&this.nodeDOM.classList.add("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||(this.dom.draggable=!0)},e.prototype.deselectNode=function(){1==this.nodeDOM.nodeType&&this.nodeDOM.classList.remove("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||this.dom.removeAttribute("draggable")},n.domAtom.get=function(){return this.node.isAtom},Object.defineProperties(e.prototype,n),e}(In);function Vn(t,e,n,r,o){return Un(r,e,t),new _n(void 0,t,e,n,r,r,r,o,0)}var Fn=function(t){function e(e,n,r,o,i,s,a){t.call(this,e,n,r,o,i,null,s,a,0)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={domAtom:{configurable:!0}};return e.prototype.parseRule=function(){for(var t=this.nodeDOM.parentNode;t&&t!=this.dom&&!t.pmIsDeco;)t=t.parentNode;return{skip:t||!0}},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||0!=this.dirty&&!this.inParent()||!t.sameMarkup(this.node))&&(this.updateOuterDeco(e),0==this.dirty&&t.text==this.node.text||t.text==this.nodeDOM.nodeValue||(this.nodeDOM.nodeValue=t.text,r.trackWrites==this.nodeDOM&&(r.trackWrites=null)),this.node=t,this.dirty=0,!0)},e.prototype.inParent=function(){for(var t=this.parent.contentDOM,e=this.nodeDOM;e;e=e.parentNode)if(e==t)return!0;return!1},e.prototype.domFromPos=function(t){return{node:this.nodeDOM,offset:t}},e.prototype.localPosFromDOM=function(e,n,r){return e==this.nodeDOM?this.posAtStart+Math.min(n,this.node.text.length):t.prototype.localPosFromDOM.call(this,e,n,r)},e.prototype.ignoreMutation=function(t){return"characterData"!=t.type&&"selection"!=t.type},e.prototype.slice=function(t,n,r){var o=this.node.cut(t,n),i=document.createTextNode(o.text);return new e(this.parent,o,this.outerDeco,this.innerDeco,i,i,r)},e.prototype.markDirty=function(e,n){t.prototype.markDirty.call(this,e,n),this.dom==this.nodeDOM||0!=e&&n!=this.nodeDOM.nodeValue.length||(this.dirty=3)},n.domAtom.get=function(){return!1},Object.defineProperties(e.prototype,n),e}(_n),$n=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={domAtom:{configurable:!0},ignoreForCoords:{configurable:!0}};return e.prototype.parseRule=function(){return{ignore:!0}},e.prototype.matchesHack=function(t){return 0==this.dirty&&this.dom.nodeName==t},n.domAtom.get=function(){return!0},n.ignoreForCoords.get=function(){return"IMG"==this.dom.nodeName},Object.defineProperties(e.prototype,n),e}(In),qn=function(t){function e(e,n,r,o,i,s,a,c,l,p){t.call(this,e,n,r,o,i,s,a,l,p),this.spec=c}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.update=function(e,n,r,o){if(3==this.dirty)return!1;if(this.spec.update){var i=this.spec.update(e,n,r);return i&&this.updateInner(e,n,r,o),i}return!(!this.contentDOM&&!e.isLeaf)&&t.prototype.update.call(this,e,n,r,o)},e.prototype.selectNode=function(){this.spec.selectNode?this.spec.selectNode():t.prototype.selectNode.call(this)},e.prototype.deselectNode=function(){this.spec.deselectNode?this.spec.deselectNode():t.prototype.deselectNode.call(this)},e.prototype.setSelection=function(e,n,r,o){this.spec.setSelection?this.spec.setSelection(e,n,r):t.prototype.setSelection.call(this,e,n,r,o)},e.prototype.destroy=function(){this.spec.destroy&&this.spec.destroy(),t.prototype.destroy.call(this)},e.prototype.stopEvent=function(t){return!!this.spec.stopEvent&&this.spec.stopEvent(t)},e.prototype.ignoreMutation=function(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):t.prototype.ignoreMutation.call(this,e)},e}(_n);function Ln(t,e,n){for(var r=t.firstChild,o=!1,i=0;i<e.length;i++){var s=e[i],a=s.dom;if(a.parentNode==t){for(;a!=r;)r=Qn(r),o=!0;r=r.nextSibling}else o=!0,t.insertBefore(a,r);if(s instanceof Bn){var c=r?r.previousSibling:t.lastChild;Ln(s.contentDOM,s.children,n),r=c?c.nextSibling:t.firstChild}}for(;r;)r=Qn(r),o=!0;o&&n.trackWrites==t&&(n.trackWrites=null)}var jn=function(t){t&&(this.nodeName=t)};jn.prototype=Object.create(null);var Jn=[new jn];function Wn(t,e,n){if(0==t.length)return Jn;for(var r=n?Jn[0]:new jn,o=[r],i=0;i<t.length;i++){var s=t[i].type.attrs;if(s)for(var a in s.nodeName&&o.push(r=new jn(s.nodeName)),s){var c=s[a];null!=c&&(n&&1==o.length&&o.push(r=new jn(e.isInline?"span":"div")),"class"==a?r.class=(r.class?r.class+" ":"")+c:"style"==a?r.style=(r.style?r.style+";":"")+c:"nodeName"!=a&&(r[a]=c))}}return o}function Kn(t,e,n,r){if(n==Jn&&r==Jn)return e;for(var o=e,i=0;i<r.length;i++){var s=r[i],a=n[i];if(i){var c=void 0;a&&a.nodeName==s.nodeName&&o!=t&&(c=o.parentNode)&&c.nodeName.toLowerCase()==s.nodeName||((c=document.createElement(s.nodeName)).pmIsDeco=!0,c.appendChild(o),a=Jn[0]),o=c}Hn(o,a||Jn[0],s)}return o}function Hn(t,e,n){for(var r in e)"class"==r||"style"==r||"nodeName"==r||r in n||t.removeAttribute(r);for(var o in n)"class"!=o&&"style"!=o&&"nodeName"!=o&&n[o]!=e[o]&&t.setAttribute(o,n[o]);if(e.class!=n.class){for(var i=e.class?e.class.split(" ").filter(Boolean):[],s=n.class?n.class.split(" ").filter(Boolean):[],a=0;a<i.length;a++)-1==s.indexOf(i[a])&&t.classList.remove(i[a]);for(var c=0;c<s.length;c++)-1==i.indexOf(s[c])&&t.classList.add(s[c]);0==t.classList.length&&t.removeAttribute("class")}if(e.style!=n.style){if(e.style)for(var l,p=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;l=p.exec(e.style);)t.style.removeProperty(l[1]);n.style&&(t.style.cssText+=n.style)}}function Un(t,e,n){return Kn(t,t,Jn,Wn(e,n,1!=t.nodeType))}function Gn(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].type.eq(e[n].type))return!1;return!0}function Qn(t){var e=t.nextSibling;return t.parentNode.removeChild(t),e}var Xn=function(t,e,n){this.lock=e,this.view=n,this.index=0,this.stack=[],this.changed=!1,this.top=t,this.preMatch=function(t,e){var n=e,r=n.children.length,o=t.childCount,i=new Map,s=[];t:for(;o>0;){for(var a=void 0;;)if(r){var c=n.children[r-1];if(!(c instanceof Bn)){a=c,r--;break}n=c,r=c.children.length}else{if(n==e)break t;r=n.parent.children.indexOf(n),n=n.parent}var l=a.node;if(l){if(l!=t.child(o-1))break;--o,i.set(a,o),s.push(a)}}return{index:o,matched:i,matches:s.reverse()}}(t.node.content,t)};function Yn(t,e){return t.type.side-e.type.side}function Zn(t,e,n,r,o){for(var i=[],s=0,a=0;s<t.length;s++){var c=t[s],l=a,p=a+=c.size;l>=n||p<=e?i.push(c):(l<e&&i.push(c.slice(0,e-l,r)),o&&(i.push(o),o=void 0),p>n&&i.push(c.slice(n-l,c.size,r)))}return i}function tr(t,e){void 0===e&&(e=null);var n=t.domSelection(),r=t.state.doc;if(!n.focusNode)return null;var o=t.docView.nearestDesc(n.focusNode),i=o&&0==o.size,s=t.docView.posFromDOM(n.focusNode,n.focusOffset,1);if(s<0)return null;var a,c,l=r.resolve(s);if(cn(n)){for(a=l;o&&!o.node;)o=o.parent;var p=o.node;if(o&&p.isAtom&&me.isSelectable(p)&&o.parent&&(!p.isInline||!function(t,e,n){for(var r=0==e,o=e==sn(t);r||o;){if(t==n)return!0;var i=Ye(t);if(!(t=t.parentNode))return!1;r=r&&0==i,o=o&&i==sn(t)}}(n.focusNode,n.focusOffset,o.dom))){var h=o.posBefore;c=new me(s==h?l:r.resolve(h))}}else{var u=t.docView.posFromDOM(n.anchorNode,n.anchorOffset,1);if(u<0)return null;a=r.resolve(u)}c||(c=lr(t,a,l,"pointer"==e||t.state.selection.head<l.pos&&!i?1:-1));return c}function er(t){return t.editable?t.hasFocus():hr(t)&&document.activeElement&&document.activeElement.contains(t.dom)}function nr(t,e){void 0===e&&(e=!1);var n=t.state.selection;if(ar(t,n),er(t)){if(!e&&t.input.mouseDown&&t.input.mouseDown.allowDefault&&Je){var r=t.domSelection(),o=t.domObserver.currentSelection;if(r.anchorNode&&o.anchorNode&&nn(r.anchorNode,r.anchorOffset,o.anchorNode,o.anchorOffset))return t.input.mouseDown.delayedSelectionSync=!0,void t.domObserver.setCurSelection()}if(t.domObserver.disconnectSelection(),t.cursorWrapper)!function(t){var e=t.domSelection(),n=document.createRange(),r=t.cursorWrapper.dom,o="IMG"==r.nodeName;o?n.setEnd(r.parentNode,Ye(r)+1):n.setEnd(r,0);n.collapse(!1),e.removeAllRanges(),e.addRange(n),!o&&!t.state.selection.visible&&$e&&qe<=11&&(r.disabled=!0,r.disabled=!1)}(t);else{var i,s,a=n.anchor,c=n.head;!rr||n instanceof fe||(n.$from.parent.inlineContent||(i=or(t,n.from)),n.empty||n.$from.parent.inlineContent||(s=or(t,n.to))),t.docView.setSelection(a,c,t.root,e),rr&&(i&&sr(i),s&&sr(s)),n.visible?t.dom.classList.remove("ProseMirror-hideselection"):(t.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&function(t){var e=t.dom.ownerDocument;e.removeEventListener("selectionchange",t.input.hideSelectionGuard);var n=t.domSelection(),r=n.anchorNode,o=n.anchorOffset;e.addEventListener("selectionchange",t.input.hideSelectionGuard=function(){n.anchorNode==r&&n.anchorOffset==o||(e.removeEventListener("selectionchange",t.input.hideSelectionGuard),setTimeout((function(){er(t)&&!t.state.selection.visible||t.dom.classList.remove("ProseMirror-hideselection")}),20))})}(t))}t.domObserver.setCurSelection(),t.domObserver.connectSelection()}}Xn.prototype.destroyBetween=function(t,e){if(t!=e){for(var n=t;n<e;n++)this.top.children[n].destroy();this.top.children.splice(t,e-t),this.changed=!0}},Xn.prototype.destroyRest=function(){this.destroyBetween(this.index,this.top.children.length)},Xn.prototype.syncToMarks=function(t,e,n){for(var r=0,o=this.stack.length>>1,i=Math.min(o,t.length);r<i&&(r==o-1?this.top:this.stack[r+1<<1]).matchesMark(t[r])&&!1!==t[r].type.spec.spanning;)r++;for(;r<o;)this.destroyRest(),this.top.dirty=0,this.index=this.stack.pop(),this.top=this.stack.pop(),o--;for(;o<t.length;){this.stack.push(this.top,this.index+1);for(var s=-1,a=this.index;a<Math.min(this.index+3,this.top.children.length);a++)if(this.top.children[a].matchesMark(t[o])){s=a;break}if(s>-1)s>this.index&&(this.changed=!0,this.destroyBetween(this.index,s)),this.top=this.top.children[this.index];else{var c=Bn.create(this.top,t[o],e,n);this.top.children.splice(this.index,0,c),this.top=c,this.changed=!0}this.index=0,o++}},Xn.prototype.findNodeMatch=function(t,e,n,r){var o,i=-1;if(r>=this.preMatch.index&&(o=this.preMatch.matches[r-this.preMatch.index]).parent==this.top&&o.matchesNode(t,e,n))i=this.top.children.indexOf(o,this.index);else for(var s=this.index,a=Math.min(this.top.children.length,s+5);s<a;s++){var c=this.top.children[s];if(c.matchesNode(t,e,n)&&!this.preMatch.matched.has(c)){i=s;break}}return!(i<0)&&(this.destroyBetween(this.index,i),this.index++,!0)},Xn.prototype.updateNodeAt=function(t,e,n,r,o){var i=this.top.children[r];return 3==i.dirty&&i.dom==i.contentDOM&&(i.dirty=2),!!i.update(t,e,n,o)&&(this.destroyBetween(this.index,r),this.index++,!0)},Xn.prototype.findIndexWithChild=function(t){for(;;){var e=t.parentNode;if(!e)return-1;if(e==this.top.contentDOM){var n=t.pmViewDesc;if(n)for(var r=this.index;r<this.top.children.length;r++)if(this.top.children[r]==n)return r;return-1}t=e}},Xn.prototype.updateNextNode=function(t,e,n,r,o){for(var i=this.index;i<this.top.children.length;i++){var s=this.top.children[i];if(s instanceof _n){var a=this.preMatch.matched.get(s);if(null!=a&&a!=o)return!1;var c=s.dom;if(!(this.lock&&(c==this.lock||1==c.nodeType&&c.contains(this.lock.parentNode))&&!(t.isText&&s.node&&s.node.isText&&s.nodeDOM.nodeValue==t.text&&3!=s.dirty&&Gn(e,s.outerDeco)))&&s.update(t,e,n,r))return this.destroyBetween(this.index,i),s.dom!=c&&(this.changed=!0),this.index++,!0;break}}return!1},Xn.prototype.addNode=function(t,e,n,r,o){this.top.children.splice(this.index++,0,_n.create(this.top,t,e,n,r,o)),this.changed=!0},Xn.prototype.placeWidget=function(t,e,n){var r=this.index<this.top.children.length?this.top.children[this.index]:null;if(!r||!r.matchesWidget(t)||t!=r.widget&&r.widget.type.toDOM.parentNode){var o=new zn(this.top,t,e,n);this.top.children.splice(this.index++,0,o),this.changed=!0}else this.index++},Xn.prototype.addTextblockHacks=function(){for(var t=this.top.children[this.index-1],e=this.top;t instanceof Bn;)t=(e=t).children[e.children.length-1];(!t||!(t instanceof Fn)||/\n$/.test(t.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(t.node.text))&&((Ke||Je)&&t&&"false"==t.dom.contentEditable&&this.addHackNode("IMG",e),this.addHackNode("BR",this.top))},Xn.prototype.addHackNode=function(t,e){if(e==this.top&&this.index<e.children.length&&e.children[this.index].matchesHack(t))this.index++;else{var n=document.createElement(t);"IMG"==t&&(n.className="ProseMirror-separator",n.alt=""),"BR"==t&&(n.className="ProseMirror-trailingBreak");var r=new $n(this.top,[],n,null);e!=this.top?e.children.push(r):e.children.splice(this.index++,0,r),this.changed=!0}};var rr=Ke||Je&&We<63;function or(t,e){var n=t.docView.domFromPos(e,0),r=n.node,o=n.offset,i=o<r.childNodes.length?r.childNodes[o]:null,s=o?r.childNodes[o-1]:null;if(Ke&&i&&"false"==i.contentEditable)return ir(i);if(!(i&&"false"!=i.contentEditable||s&&"false"!=s.contentEditable)){if(i)return ir(i);if(s)return ir(s)}}function ir(t){return t.contentEditable="true",Ke&&t.draggable&&(t.draggable=!1,t.wasDraggable=!0),t}function sr(t){t.contentEditable="false",t.wasDraggable&&(t.draggable=!0,t.wasDraggable=null)}function ar(t,e){if(e instanceof me){var n=t.docView.descAt(e.from);n!=t.lastSelectedViewDesc&&(cr(t),n&&n.selectNode(),t.lastSelectedViewDesc=n)}else cr(t)}function cr(t){t.lastSelectedViewDesc&&(t.lastSelectedViewDesc.parent&&t.lastSelectedViewDesc.deselectNode(),t.lastSelectedViewDesc=void 0)}function lr(t,e,n,r){return t.someProp("createSelectionBetween",(function(r){return r(t,e,n)}))||fe.between(e,n,r)}function pr(t){return(!t.editable||t.root.activeElement==t.dom)&&hr(t)}function hr(t){var e=t.domSelection();if(!e.anchorNode)return!1;try{return t.dom.contains(3==e.anchorNode.nodeType?e.anchorNode.parentNode:e.anchorNode)&&(t.editable||t.dom.contains(3==e.focusNode.nodeType?e.focusNode.parentNode:e.focusNode))}catch(t){return!1}}function ur(t,e){var n=t.selection,r=n.$anchor,o=n.$head,i=e>0?r.max(o):r.min(o),s=i.parent.inlineContent?i.depth?t.doc.resolve(e>0?i.after():i.before()):null:i;return s&&ce.findFrom(s,e)}function fr(t,e){return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()),!0}function dr(t,e,n){var r=t.state.selection;if(!(r instanceof fe)){if(r instanceof me&&r.node.isInline)return fr(t,new fe(e>0?r.$to:r.$from));var o=ur(t.state,e);return!!o&&fr(t,o)}if(!r.empty||n.indexOf("s")>-1)return!1;if(t.endOfTextblock(e>0?"right":"left")){var i=ur(t.state,e);return!!(i&&i instanceof me)&&fr(t,i)}if(!(Ue&&n.indexOf("m")>-1)){var s,a=r.$head,c=a.textOffset?null:e<0?a.nodeBefore:a.nodeAfter;if(!c||c.isText)return!1;var l=e<0?a.pos-c.nodeSize:a.pos;return!!(c.isAtom||(s=t.docView.descAt(l))&&!s.contentDOM)&&(me.isSelectable(c)?fr(t,new me(e<0?t.state.doc.resolve(a.pos-c.nodeSize):a)):!!Qe&&fr(t,new fe(t.state.doc.resolve(e<0?l:l+c.nodeSize))))}}function mr(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function vr(t){var e=t.pmViewDesc;return e&&0==e.size&&(t.nextSibling||"BR"!=t.nodeName)}function gr(t){var e=t.domSelection(),n=e.focusNode,r=e.focusOffset;if(n){var o,i,s=!1;for(Le&&1==n.nodeType&&r<mr(n)&&vr(n.childNodes[r])&&(s=!0);;)if(r>0){if(1!=n.nodeType)break;var a=n.childNodes[r-1];if(vr(a))o=n,i=--r;else{if(3!=a.nodeType)break;r=(n=a).nodeValue.length}}else{if(wr(n))break;for(var c=n.previousSibling;c&&vr(c);)o=n.parentNode,i=Ye(c),c=c.previousSibling;if(c)r=mr(n=c);else{if((n=n.parentNode)==t.dom)break;r=0}}s?br(t,e,n,r):o&&br(t,e,o,i)}}function yr(t){var e=t.domSelection(),n=e.focusNode,r=e.focusOffset;if(n){for(var o,i,s=mr(n);;)if(r<s){if(1!=n.nodeType)break;if(!vr(n.childNodes[r]))break;o=n,i=++r}else{if(wr(n))break;for(var a=n.nextSibling;a&&vr(a);)o=a.parentNode,i=Ye(a)+1,a=a.nextSibling;if(a)r=0,s=mr(n=a);else{if((n=n.parentNode)==t.dom)break;r=s=0}}o&&br(t,e,o,i)}}function wr(t){var e=t.pmViewDesc;return e&&e.node&&e.node.isBlock}function br(t,e,n,r){if(cn(e)){var o=document.createRange();o.setEnd(n,r),o.setStart(n,r),e.removeAllRanges(),e.addRange(o)}else e.extend&&e.extend(n,r);t.domObserver.setCurSelection();var i=t.state;setTimeout((function(){t.state==i&&nr(t)}),50)}function kr(t,e,n){var r=t.state.selection;if(r instanceof fe&&!r.empty||n.indexOf("s")>-1)return!1;if(Ue&&n.indexOf("m")>-1)return!1;var o=r.$from,i=r.$to;if(!o.parent.inlineContent||t.endOfTextblock(e<0?"up":"down")){var s=ur(t.state,e);if(s&&s instanceof me)return fr(t,s)}if(!o.parent.inlineContent){var a=e<0?o:i,c=r instanceof ge?ce.near(a,e):ce.findFrom(a,e);return!!c&&fr(t,c)}return!1}function xr(t,e){if(!(t.state.selection instanceof fe))return!0;var n=t.state.selection,r=n.$head,o=n.$anchor,i=n.empty;if(!r.sameParent(o))return!0;if(!i)return!1;if(t.endOfTextblock(e>0?"forward":"backward"))return!0;var s=!r.textOffset&&(e<0?r.nodeBefore:r.nodeAfter);if(s&&!s.isText){var a=t.state.tr;return e<0?a.delete(r.pos-s.nodeSize,r.pos):a.delete(r.pos,r.pos+s.nodeSize),t.dispatch(a),!0}return!1}function Sr(t,e,n){t.domObserver.stop(),e.contentEditable=n,t.domObserver.start()}function Mr(t,e){var n=e.keyCode,r=function(t){var e="";return t.ctrlKey&&(e+="c"),t.metaKey&&(e+="m"),t.altKey&&(e+="a"),t.shiftKey&&(e+="s"),e}(e);return 8==n||Ue&&72==n&&"c"==r?xr(t,-1)||gr(t):46==n||Ue&&68==n&&"c"==r?xr(t,1)||yr(t):13==n||27==n||(37==n||Ue&&66==n&&"c"==r?dr(t,-1,r)||gr(t):39==n||Ue&&70==n&&"c"==r?dr(t,1,r)||yr(t):38==n||Ue&&80==n&&"c"==r?kr(t,-1,r)||gr(t):40==n||Ue&&78==n&&"c"==r?function(t){if(!Ke||t.state.selection.$head.parentOffset>0)return!1;var e=t.domSelection(),n=e.focusNode,r=e.focusOffset;if(n&&1==n.nodeType&&0==r&&n.firstChild&&"false"==n.firstChild.contentEditable){var o=n.firstChild;Sr(t,o,"true"),setTimeout((function(){return Sr(t,o,"false")}),20)}return!1}(t)||kr(t,1,r)||yr(t):r==(Ue?"m":"c")&&(66==n||73==n||89==n||90==n))}function Cr(t,e){for(var n=[],r=e.content,o=e.openStart,i=e.openEnd;o>1&&i>1&&1==r.childCount&&1==r.firstChild.childCount;){o--,i--;var s=r.firstChild;n.push(s.type.name,s.attrs!=s.type.defaultAttrs?s.attrs:null),r=s.content}var a=t.someProp("clipboardSerializer")||ft.fromSchema(t.state.schema),c=Pr(),l=c.createElement("div");l.appendChild(a.serializeFragment(r,{document:c}));for(var p,h=l.firstChild,u=0;h&&1==h.nodeType&&(p=Rr[h.nodeName.toLowerCase()]);){for(var f=p.length-1;f>=0;f--){for(var d=c.createElement(p[f]);l.firstChild;)d.appendChild(l.firstChild);l.appendChild(d),u++}h=l.firstChild}return h&&1==h.nodeType&&h.setAttribute("data-pm-slice",o+" "+i+(u?" -"+u:"")+" "+JSON.stringify(n)),{dom:l,text:t.someProp("clipboardTextSerializer",(function(t){return t(e)}))||e.content.textBetween(0,e.content.size,"\n\n")}}function Or(t,e,n,o,i){var s,a,c=i.parent.type.spec.code;if(!n&&!e)return null;var l=e&&(o||c||!n);if(l){if(t.someProp("transformPastedText",(function(t){e=t(e,c||o)})),c)return e?new p(r.from(t.state.schema.text(e.replace(/\r\n?/g,"\n"))),0,0):p.empty;var h=t.someProp("clipboardTextParser",(function(t){return t(e,i,o)}));if(h)a=h;else{var u=i.marks(),f=t.state.schema,d=ft.fromSchema(f);s=document.createElement("div"),e.split(/(?:\r\n?|\n)+/).forEach((function(t){var e=s.appendChild(document.createElement("p"));t&&e.appendChild(d.serializeNode(f.text(t,u)))}))}}else t.someProp("transformPastedHTML",(function(t){n=t(n)})),s=function(t){var e=/^(\s*<meta [^>]*>)*/.exec(t);e&&(t=t.slice(e[0].length));var n,r=Pr().createElement("div"),o=/<([a-z][^>\s]+)/i.exec(t);(n=o&&Rr[o[1].toLowerCase()])&&(t=n.map((function(t){return"<"+t+">"})).join("")+t+n.map((function(t){return"</"+t+">"})).reverse().join(""));if(r.innerHTML=t,n)for(var i=0;i<n.length;i++)r=r.querySelector(n[i])||r;return r}(n),Qe&&function(t){for(var e=t.querySelectorAll(Je?"span:not([class]):not([style])":"span.Apple-converted-space"),n=0;n<e.length;n++){var r=e[n];1==r.childNodes.length&&" "==r.textContent&&r.parentNode&&r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "),r)}}(s);var m=s&&s.querySelector("[data-pm-slice]"),v=m&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(m.getAttribute("data-pm-slice")||"");if(v&&v[3])for(var g=+v[3];g>0&&s.firstChild;g--)s=s.firstChild;if(!a){var y=t.someProp("clipboardParser")||t.someProp("domParser")||nt.fromSchema(t.state.schema);a=y.parseSlice(s,{preserveWhitespace:!(!l&&!v),context:i,ruleFromNode:function(t){return"BR"!=t.nodeName||t.nextSibling||!t.parentNode||Nr.test(t.parentNode.nodeName)?null:{ignore:!0}}})}if(v)a=function(t,e){if(!t.size)return t;var n,o=t.content.firstChild.type.schema;try{n=JSON.parse(e)}catch(e){return t}for(var i=t.content,s=t.openStart,a=t.openEnd,c=n.length-2;c>=0;c-=2){var l=o.nodes[n[c]];if(!l||l.hasRequiredAttrs())break;i=r.from(l.create(n[c+1],i)),s++,a++}return new p(i,s,a)}(Ir(a,+v[1],+v[2]),v[4]);else if(a=p.maxOpen(function(t,e){if(t.childCount<2)return t;for(var n=function(n){var o=e.node(n).contentMatchAt(e.index(n)),i=void 0,s=[];if(t.forEach((function(t){if(s){var e,n=o.findWrapping(t.type);if(!n)return s=null;if(e=s.length&&i.length&&Tr(n,i,t,s[s.length-1],0))s[s.length-1]=e;else{s.length&&(s[s.length-1]=Ar(s[s.length-1],i.length));var r=Dr(t,n);s.push(r),o=o.matchType(r.type),i=n}}})),s)return{v:r.from(s)}},o=e.depth;o>=0;o--){var i=n(o);if(i)return i.v}return t}(a.content,i),!0),a.openStart||a.openEnd){for(var w=0,b=0,k=a.content.firstChild;w<a.openStart&&!k.type.spec.isolating;w++,k=k.firstChild);for(var x=a.content.lastChild;b<a.openEnd&&!x.type.spec.isolating;b++,x=x.lastChild);a=Ir(a,w,b)}return t.someProp("transformPasted",(function(t){a=t(a)})),a}var Nr=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function Dr(t,e,n){void 0===n&&(n=0);for(var o=e.length-1;o>=n;o--)t=e[o].create(null,r.from(t));return t}function Tr(t,e,n,o,i){if(i<t.length&&i<e.length&&t[i]==e[i]){var s=Tr(t,e,n,o.lastChild,i+1);if(s)return o.copy(o.content.replaceChild(o.childCount-1,s));if(o.contentMatchAt(o.childCount).matchType(i==t.length-1?n.type:t[i+1]))return o.copy(o.content.append(r.from(Dr(n,t,i+1))))}}function Ar(t,e){if(0==e)return t;var n=t.content.replaceChild(t.childCount-1,Ar(t.lastChild,e-1)),o=t.contentMatchAt(t.childCount).fillBefore(r.empty,!0);return t.copy(n.append(o))}function Er(t,e,n,o,i,s){var a=e<0?t.firstChild:t.lastChild,c=a.content;return i<o-1&&(c=Er(c,e,n,o,i+1,s)),i>=n&&(c=e<0?a.contentMatchAt(0).fillBefore(c,t.childCount>1||s<=i).append(c):c.append(a.contentMatchAt(a.childCount).fillBefore(r.empty,!0))),t.replaceChild(e<0?0:t.childCount-1,a.copy(c))}function Ir(t,e,n){return e<t.openStart&&(t=new p(Er(t.content,-1,e,t.openStart,0,t.openEnd),e,t.openEnd)),n<t.openEnd&&(t=new p(Er(t.content,1,n,t.openEnd,0,0),t.openStart,n)),t}var Rr={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]},zr=null;function Pr(){return zr||(zr=document.implementation.createHTMLDocument("title"))}var Br={},_r={},Vr={touchstart:!0,touchmove:!0},Fr=function(){this.shiftKey=!1,this.mouseDown=null,this.lastKeyCode=null,this.lastKeyCodeTime=0,this.lastClick={time:0,x:0,y:0,type:""},this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastIOSEnter=0,this.lastIOSEnterFallbackTimeout=-1,this.lastFocus=0,this.lastTouch=0,this.lastAndroidDelete=0,this.composing=!1,this.composingTimeout=-1,this.compositionNodes=[],this.compositionEndedAt=-2e8,this.domChangeCount=0,this.eventHandlers=Object.create(null),this.hideSelectionGuard=null};function $r(t,e){t.input.lastSelectionOrigin=e,t.input.lastSelectionTime=Date.now()}function qr(t){t.someProp("handleDOMEvents",(function(e){for(var n in e)t.input.eventHandlers[n]||t.dom.addEventListener(n,t.input.eventHandlers[n]=function(e){return Lr(t,e)})}))}function Lr(t,e){return t.someProp("handleDOMEvents",(function(n){var r=n[e.type];return!!r&&(r(t,e)||e.defaultPrevented)}))}function jr(t){return{left:t.clientX,top:t.clientY}}function Jr(t,e,n,r,o){if(-1==r)return!1;for(var i=t.state.doc.resolve(r),s=function(r){if(t.someProp(e,(function(e){return r>i.depth?e(t,n,i.nodeAfter,i.before(r),o,!0):e(t,n,i.node(r),i.before(r),o,!1)})))return{v:!0}},a=i.depth+1;a>0;a--){var c=s(a);if(c)return c.v}return!1}function Wr(t,e,n){t.focused||t.focus();var r=t.state.tr.setSelection(e);"pointer"==n&&r.setMeta("pointer",!0),t.dispatch(r)}function Kr(t,e,n,r,o){return Jr(t,"handleClickOn",e,n,r)||t.someProp("handleClick",(function(n){return n(t,e,r)}))||(o?function(t,e){if(-1==e)return!1;var n,r,o=t.state.selection;o instanceof me&&(n=o.node);for(var i=t.state.doc.resolve(e),s=i.depth+1;s>0;s--){var a=s>i.depth?i.nodeAfter:i.node(s);if(me.isSelectable(a)){r=n&&o.$from.depth>0&&s>=o.$from.depth&&i.before(o.$from.depth+1)==o.$from.pos?i.before(o.$from.depth):i.before(s);break}}return null!=r&&(Wr(t,me.create(t.state.doc,r),"pointer"),!0)}(t,n):function(t,e){if(-1==e)return!1;var n=t.state.doc.resolve(e),r=n.nodeAfter;return!!(r&&r.isAtom&&me.isSelectable(r))&&(Wr(t,new me(n),"pointer"),!0)}(t,n))}function Hr(t,e,n,r){return Jr(t,"handleDoubleClickOn",e,n,r)||t.someProp("handleDoubleClick",(function(n){return n(t,e,r)}))}function Ur(t,e,n,r){return Jr(t,"handleTripleClickOn",e,n,r)||t.someProp("handleTripleClick",(function(n){return n(t,e,r)}))||function(t,e,n){if(0!=n.button)return!1;var r=t.state.doc;if(-1==e)return!!r.inlineContent&&(Wr(t,fe.create(r,0,r.content.size),"pointer"),!0);for(var o=r.resolve(e),i=o.depth+1;i>0;i--){var s=i>o.depth?o.nodeAfter:o.node(i),a=o.before(i);if(s.inlineContent)Wr(t,fe.create(r,a+1,a+1+s.content.size),"pointer");else{if(!me.isSelectable(s))continue;Wr(t,me.create(r,a),"pointer")}return!0}}(t,n,r)}function Gr(t){return no(t)}_r.keydown=function(t,e){var n=e;if(t.input.shiftKey=16==n.keyCode||n.shiftKey,!Yr(t,n)&&(t.input.lastKeyCode=n.keyCode,t.input.lastKeyCodeTime=Date.now(),!Ge||!Je||13!=n.keyCode))if(229!=n.keyCode&&t.domObserver.forceFlush(),!He||13!=n.keyCode||n.ctrlKey||n.altKey||n.metaKey)t.someProp("handleKeyDown",(function(e){return e(t,n)}))||Mr(t,n)?n.preventDefault():$r(t,"key");else{var r=Date.now();t.input.lastIOSEnter=r,t.input.lastIOSEnterFallbackTimeout=setTimeout((function(){t.input.lastIOSEnter==r&&(t.someProp("handleKeyDown",(function(e){return e(t,ln(13,"Enter"))})),t.input.lastIOSEnter=0)}),200)}},_r.keyup=function(t,e){16==e.keyCode&&(t.input.shiftKey=!1)},_r.keypress=function(t,e){var n=e;if(!(Yr(t,n)||!n.charCode||n.ctrlKey&&!n.altKey||Ue&&n.metaKey))if(t.someProp("handleKeyPress",(function(e){return e(t,n)})))n.preventDefault();else{var r=t.state.selection;if(!(r instanceof fe&&r.$from.sameParent(r.$to))){var o=String.fromCharCode(n.charCode);t.someProp("handleTextInput",(function(e){return e(t,r.$from.pos,r.$to.pos,o)}))||t.dispatch(t.state.tr.insertText(o).scrollIntoView()),n.preventDefault()}}};var Qr=Ue?"metaKey":"ctrlKey";Br.mousedown=function(t,e){var n=e;t.input.shiftKey=n.shiftKey;var r=Gr(t),o=Date.now(),i="singleClick";o-t.input.lastClick.time<500&&function(t,e){var n=e.x-t.clientX,r=e.y-t.clientY;return n*n+r*r<100}(n,t.input.lastClick)&&!n[Qr]&&("singleClick"==t.input.lastClick.type?i="doubleClick":"doubleClick"==t.input.lastClick.type&&(i="tripleClick")),t.input.lastClick={time:o,x:n.clientX,y:n.clientY,type:i};var s=t.posAtCoords(jr(n));s&&("singleClick"==i?(t.input.mouseDown&&t.input.mouseDown.done(),t.input.mouseDown=new Xr(t,s,n,!!r)):("doubleClick"==i?Hr:Ur)(t,s.pos,s.inside,n)?n.preventDefault():$r(t,"pointer"))};var Xr=function(t,e,n,r){var o,i,s=this;if(this.view=t,this.pos=e,this.event=n,this.flushed=r,this.delayedSelectionSync=!1,this.mightDrag=null,this.startDoc=t.state.doc,this.selectNode=!!n[Qr],this.allowDefault=n.shiftKey,e.inside>-1)o=t.state.doc.nodeAt(e.inside),i=e.inside;else{var a=t.state.doc.resolve(e.pos);o=a.parent,i=a.depth?a.before():0}var c=r?null:n.target,l=c?t.docView.nearestDesc(c,!0):null;this.target=l?l.dom:null;var p=t.state.selection;(0==n.button&&o.type.spec.draggable&&!1!==o.type.spec.selectable||p instanceof me&&p.from<=i&&p.to>i)&&(this.mightDrag={node:o,pos:i,addAttr:!(!this.target||this.target.draggable),setUneditable:!(!this.target||!Le||this.target.hasAttribute("contentEditable"))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout((function(){s.view.input.mouseDown==s&&s.target.setAttribute("contentEditable","false")}),20),this.view.domObserver.start()),t.root.addEventListener("mouseup",this.up=this.up.bind(this)),t.root.addEventListener("mousemove",this.move=this.move.bind(this)),$r(t,"pointer")};function Yr(t,e){return!!t.composing||!!(Ke&&Math.abs(e.timeStamp-t.input.compositionEndedAt)<500)&&(t.input.compositionEndedAt=-2e8,!0)}Xr.prototype.done=function(){var t=this;this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout((function(){return nr(t.view)})),this.view.input.mouseDown=null},Xr.prototype.up=function(t){if(this.done(),this.view.dom.contains(t.target)){var e=this.pos;this.view.state.doc!=this.startDoc&&(e=this.view.posAtCoords(jr(t))),this.updateAllowDefault(t),this.allowDefault||!e?$r(this.view,"pointer"):Kr(this.view,e.pos,e.inside,t,this.selectNode)?t.preventDefault():0==t.button&&(this.flushed||Ke&&this.mightDrag&&!this.mightDrag.node.isAtom||Je&&!(this.view.state.selection instanceof fe)&&Math.min(Math.abs(e.pos-this.view.state.selection.from),Math.abs(e.pos-this.view.state.selection.to))<=2)?(Wr(this.view,ce.near(this.view.state.doc.resolve(e.pos)),"pointer"),t.preventDefault()):$r(this.view,"pointer")}},Xr.prototype.move=function(t){this.updateAllowDefault(t),$r(this.view,"pointer"),0==t.buttons&&this.done()},Xr.prototype.updateAllowDefault=function(t){!this.allowDefault&&(Math.abs(this.event.x-t.clientX)>4||Math.abs(this.event.y-t.clientY)>4)&&(this.allowDefault=!0)},Br.touchstart=function(t){t.input.lastTouch=Date.now(),Gr(t),$r(t,"pointer")},Br.touchmove=function(t){t.input.lastTouch=Date.now(),$r(t,"pointer")},Br.contextmenu=function(t){return Gr(t)};var Zr=Ge?5e3:-1;function to(t,e){clearTimeout(t.input.composingTimeout),e>-1&&(t.input.composingTimeout=setTimeout((function(){return no(t)}),e))}function eo(t){var e;for(t.composing&&(t.input.composing=!1,t.input.compositionEndedAt=((e=document.createEvent("Event")).initEvent("event",!0,!0),e.timeStamp));t.input.compositionNodes.length>0;)t.input.compositionNodes.pop().markParentsDirty()}function no(t,e){if(void 0===e&&(e=!1),!(Ge&&t.domObserver.flushingSoon>=0)){if(t.domObserver.forceFlush(),eo(t),e||t.docView&&t.docView.dirty){var n=tr(t);return n&&!n.eq(t.state.selection)?t.dispatch(t.state.tr.setSelection(n)):t.updateState(t.state),!0}return!1}}_r.compositionstart=_r.compositionupdate=function(t){if(!t.composing){t.domObserver.flush();var e=t.state,n=e.selection.$from;if(e.selection.empty&&(e.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some((function(t){return!1===t.type.spec.inclusive}))))t.markCursor=t.state.storedMarks||n.marks(),no(t,!0),t.markCursor=null;else if(no(t),Le&&e.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length)for(var r=t.domSelection(),o=r.focusNode,i=r.focusOffset;o&&1==o.nodeType&&0!=i;){var s=i<0?o.lastChild:o.childNodes[i-1];if(!s)break;if(3==s.nodeType){r.collapse(s,s.nodeValue.length);break}o=s,i=-1}t.input.composing=!0}to(t,Zr)},_r.compositionend=function(t,e){t.composing&&(t.input.composing=!1,t.input.compositionEndedAt=e.timeStamp,to(t,20))};var ro=$e&&qe<15||He&&Xe<604;function oo(t,e,n,r){var o=Or(t,e,n,t.input.shiftKey,t.state.selection.$from);if(t.someProp("handlePaste",(function(e){return e(t,r,o||p.empty)})))return!0;if(!o)return!1;var i=function(t){return 0==t.openStart&&0==t.openEnd&&1==t.content.childCount?t.content.firstChild:null}(o),s=i?t.state.tr.replaceSelectionWith(i,t.input.shiftKey):t.state.tr.replaceSelection(o);return t.dispatch(s.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste")),!0}Br.copy=_r.cut=function(t,e){var n=e,r=t.state.selection,o="cut"==n.type;if(!r.empty){var i=ro?null:n.clipboardData,s=Cr(t,r.content()),a=s.dom,c=s.text;i?(n.preventDefault(),i.clearData(),i.setData("text/html",a.innerHTML),i.setData("text/plain",c)):function(t,e){if(t.dom.parentNode){var n=t.dom.parentNode.appendChild(document.createElement("div"));n.appendChild(e),n.style.cssText="position: fixed; left: -10000px; top: 10px";var r=getSelection(),o=document.createRange();o.selectNodeContents(e),t.dom.blur(),r.removeAllRanges(),r.addRange(o),setTimeout((function(){n.parentNode&&n.parentNode.removeChild(n),t.focus()}),50)}}(t,a),o&&t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))}},_r.paste=function(t,e){var n=e;if(!t.composing||Ge){var r=ro?null:n.clipboardData;r&&oo(t,r.getData("text/plain"),r.getData("text/html"),n)?n.preventDefault():function(t,e){if(t.dom.parentNode){var n=t.input.shiftKey||t.state.selection.$from.parent.type.spec.code,r=t.dom.parentNode.appendChild(document.createElement(n?"textarea":"div"));n||(r.contentEditable="true"),r.style.cssText="position: fixed; left: -10000px; top: 10px",r.focus(),setTimeout((function(){t.focus(),r.parentNode&&r.parentNode.removeChild(r),n?oo(t,r.value,null,e):oo(t,r.textContent,r.innerHTML,e)}),50)}}(t,n)}};var io=function(t,e){this.slice=t,this.move=e},so=Ue?"altKey":"ctrlKey";for(var ao in Br.dragstart=function(t,e){var n=e,r=t.input.mouseDown;if(r&&r.done(),n.dataTransfer){var o=t.state.selection,i=o.empty?null:t.posAtCoords(jr(n));if(i&&i.pos>=o.from&&i.pos<=(o instanceof me?o.to-1:o.to));else if(r&&r.mightDrag)t.dispatch(t.state.tr.setSelection(me.create(t.state.doc,r.mightDrag.pos)));else if(n.target&&1==n.target.nodeType){var s=t.docView.nearestDesc(n.target,!0);s&&s.node.type.spec.draggable&&s!=t.docView&&t.dispatch(t.state.tr.setSelection(me.create(t.state.doc,s.posBefore)))}var a=t.state.selection.content(),c=Cr(t,a),l=c.dom,p=c.text;n.dataTransfer.clearData(),n.dataTransfer.setData(ro?"Text":"text/html",l.innerHTML),n.dataTransfer.effectAllowed="copyMove",ro||n.dataTransfer.setData("text/plain",p),t.dragging=new io(a,!n[so])}},Br.dragend=function(t){var e=t.dragging;window.setTimeout((function(){t.dragging==e&&(t.dragging=null)}),50)},_r.dragover=_r.dragenter=function(t,e){return e.preventDefault()},_r.drop=function(t,e){var n=e,r=t.dragging;if(t.dragging=null,n.dataTransfer){var o=t.posAtCoords(jr(n));if(o){var i=t.state.doc.resolve(o.pos),s=r&&r.slice;s?t.someProp("transformPasted",(function(t){s=t(s)})):s=Or(t,n.dataTransfer.getData(ro?"Text":"text/plain"),ro?null:n.dataTransfer.getData("text/html"),!1,i);var a=!(!r||n[so]);if(t.someProp("handleDrop",(function(e){return e(t,n,s||p.empty,a)})))n.preventDefault();else if(s){n.preventDefault();var c=s?jt(t.state.doc,i.pos,s):i.pos;null==c&&(c=i.pos);var l=t.state.tr;a&&l.deleteSelection();var h=l.mapping.map(c),u=0==s.openStart&&0==s.openEnd&&1==s.content.childCount,f=l.doc;if(u?l.replaceRangeWith(h,h,s.content.firstChild):l.replaceRange(h,h,s),!l.doc.eq(f)){var d=l.doc.resolve(h);if(u&&me.isSelectable(s.content.firstChild)&&d.nodeAfter&&d.nodeAfter.sameMarkup(s.content.firstChild))l.setSelection(new me(d));else{var m=l.mapping.map(c);l.mapping.maps[l.mapping.maps.length-1].forEach((function(t,e,n,r){return m=r})),l.setSelection(lr(t,d,l.doc.resolve(m)))}t.focus(),t.dispatch(l.setMeta("uiEvent","drop"))}}}}},Br.focus=function(t){t.input.lastFocus=Date.now(),t.focused||(t.domObserver.stop(),t.dom.classList.add("ProseMirror-focused"),t.domObserver.start(),t.focused=!0,setTimeout((function(){t.docView&&t.hasFocus()&&!t.domObserver.currentSelection.eq(t.domSelection())&&nr(t)}),20))},Br.blur=function(t,e){var n=e;t.focused&&(t.domObserver.stop(),t.dom.classList.remove("ProseMirror-focused"),t.domObserver.start(),n.relatedTarget&&t.dom.contains(n.relatedTarget)&&t.domObserver.currentSelection.clear(),t.focused=!1)},Br.beforeinput=function(t,e){if(Je&&Ge&&"deleteContentBackward"==e.inputType){t.domObserver.flushSoon();var n=t.input.domChangeCount;setTimeout((function(){if(t.input.domChangeCount==n&&(t.dom.blur(),t.focus(),!t.someProp("handleKeyDown",(function(e){return e(t,ln(8,"Backspace"))})))){var e=t.state.selection.$cursor;e&&e.pos>0&&t.dispatch(t.state.tr.delete(e.pos-1,e.pos).scrollIntoView())}}),50)}},_r)Br[ao]=_r[ao];function co(t,e){if(t==e)return!0;for(var n in t)if(t[n]!==e[n])return!1;for(var r in e)if(!(r in t))return!1;return!0}var lo=function(t,e){this.toDOM=t,this.spec=e||vo,this.side=this.spec.side||0};lo.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,this.side<0?-1:1),i=o.pos;return o.deleted?null:new uo(i-n,i-n,this)},lo.prototype.valid=function(){return!0},lo.prototype.eq=function(t){return this==t||t instanceof lo&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&co(this.spec,t.spec))},lo.prototype.destroy=function(t){this.spec.destroy&&this.spec.destroy(t)};var po=function(t,e){this.attrs=t,this.spec=e||vo};po.prototype.map=function(t,e,n,r){var o=t.map(e.from+r,this.spec.inclusiveStart?-1:1)-n,i=t.map(e.to+r,this.spec.inclusiveEnd?1:-1)-n;return o>=i?null:new uo(o,i,this)},po.prototype.valid=function(t,e){return e.from<e.to},po.prototype.eq=function(t){return this==t||t instanceof po&&co(this.attrs,t.attrs)&&co(this.spec,t.spec)},po.is=function(t){return t.type instanceof po},po.prototype.destroy=function(){};var ho=function(t,e){this.attrs=t,this.spec=e||vo};ho.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,1);if(o.deleted)return null;var i=t.mapResult(e.to+r,-1);return i.deleted||i.pos<=o.pos?null:new uo(o.pos-n,i.pos-n,this)},ho.prototype.valid=function(t,e){var n,r=t.content.findIndex(e.from),o=r.index,i=r.offset;return i==e.from&&!(n=t.child(o)).isText&&i+n.nodeSize==e.to},ho.prototype.eq=function(t){return this==t||t instanceof ho&&co(this.attrs,t.attrs)&&co(this.spec,t.spec)},ho.prototype.destroy=function(){};var uo=function(t,e,n){this.from=t,this.to=e,this.type=n},fo={spec:{configurable:!0},inline:{configurable:!0}};uo.prototype.copy=function(t,e){return new uo(t,e,this.type)},uo.prototype.eq=function(t,e){return void 0===e&&(e=0),this.type.eq(t.type)&&this.from+e==t.from&&this.to+e==t.to},uo.prototype.map=function(t,e,n){return this.type.map(t,this,e,n)},uo.widget=function(t,e,n){return new uo(t,t,new lo(e,n))},uo.inline=function(t,e,n,r){return new uo(t,e,new po(n,r))},uo.node=function(t,e,n,r){return new uo(t,e,new ho(n,r))},fo.spec.get=function(){return this.type.spec},fo.inline.get=function(){return this.type instanceof po},Object.defineProperties(uo.prototype,fo);var mo=[],vo={},go=function(t,e){this.local=t.length?t:mo,this.children=e.length?e:mo};go.create=function(t,e){return e.length?So(e,t,0,vo):yo},go.prototype.find=function(t,e,n){var r=[];return this.findInner(null==t?0:t,null==e?1e9:e,r,0,n),r},go.prototype.findInner=function(t,e,n,r,o){for(var i=0;i<this.local.length;i++){var s=this.local[i];s.from<=e&&s.to>=t&&(!o||o(s.spec))&&n.push(s.copy(s.from+r,s.to+r))}for(var a=0;a<this.children.length;a+=3)if(this.children[a]<e&&this.children[a+1]>t){var c=this.children[a]+1;this.children[a+2].findInner(t-c,e-c,n,r+c,o)}},go.prototype.map=function(t,e,n){return this==yo||0==t.maps.length?this:this.mapInner(t,e,0,0,n||vo)},go.prototype.mapInner=function(t,e,n,r,o){for(var i,s=0;s<this.local.length;s++){var a=this.local[s].map(t,n,r);a&&a.type.valid(e,a)?(i||(i=[])).push(a):o.onRemove&&o.onRemove(this.local[s].spec)}return this.children.length?function(t,e,n,r,o,i,s){for(var a=t.slice(),c=function(t,e){var r=0;n.maps[t].forEach((function(t,n,i,s){for(var c=s-i-(n-t),l=0;l<a.length;l+=3){var p=a[l+1];if(!(p<0||t>p+e-r)){var h=a[l]+e-r;n>=h?a[l+1]=t<=h?-2:-1:i>=o&&c&&(a[l]+=c,a[l+1]+=c)}}r+=c})),e=n.maps[t].map(e,-1),p=e},l=0,p=i;l<n.maps.length;l++)c(l,p);for(var h=!1,u=0;u<a.length;u+=3)if(a[u+1]<0){if(-2==a[u+1]){h=!0,a[u+1]=-1;continue}var f=n.map(t[u]+i),d=f-o;if(d<0||d>=r.content.size){h=!0;continue}var m=n.map(t[u+1]+i,-1)-o,v=r.content.findIndex(d),g=v.index,y=v.offset,w=r.maybeChild(g);if(w&&y==d&&y+w.nodeSize==m){var b=a[u+2].mapInner(n,w,f+1,t[u]+i+1,s);b!=yo?(a[u]=d,a[u+1]=m,a[u+2]=b):(a[u+1]=-2,h=!0)}else h=!0}if(h){var k=function(t,e,n,r,o,i,s){function a(t,e){for(var i=0;i<t.local.length;i++){var c=t.local[i].map(r,o,e);c?n.push(c):s.onRemove&&s.onRemove(t.local[i].spec)}for(var l=0;l<t.children.length;l+=3)a(t.children[l+2],t.children[l]+e+1)}for(var c=0;c<t.length;c+=3)-1==t[c+1]&&a(t[c+2],e[c]+i+1);return n}(a,t,e,n,o,i,s),x=So(k,r,0,s);e=x.local;for(var S=0;S<a.length;S+=3)a[S+1]<0&&(a.splice(S,3),S-=3);for(var M=0,C=0;M<x.children.length;M+=3){for(var O=x.children[M];C<a.length&&a[C]<O;)C+=3;a.splice(C,0,x.children[M],x.children[M+1],x.children[M+2])}}return new go(e.sort(Mo),a)}(this.children,i||[],t,e,n,r,o):i?new go(i.sort(Mo),mo):yo},go.prototype.add=function(t,e){return e.length?this==yo?go.create(t,e):this.addInner(t,e,0):this},go.prototype.addInner=function(t,e,n){var r,o=this,i=0;t.forEach((function(t,s){var a,c=s+n;if(a=ko(e,t,c)){for(r||(r=o.children.slice());i<r.length&&r[i]<s;)i+=3;r[i]==s?r[i+2]=r[i+2].addInner(t,a,c+1):r.splice(i,0,s,s+t.nodeSize,So(a,t,c+1,vo)),i+=3}}));for(var s=bo(i?xo(e):e,-n),a=0;a<s.length;a++)s[a].type.valid(t,s[a])||s.splice(a--,1);return new go(s.length?this.local.concat(s).sort(Mo):this.local,r||this.children)},go.prototype.remove=function(t){return 0==t.length||this==yo?this:this.removeInner(t,0)},go.prototype.removeInner=function(t,e){for(var n=this.children,r=this.local,o=0;o<n.length;o+=3){for(var i=void 0,s=n[o]+e,a=n[o+1]+e,c=0,l=void 0;c<t.length;c++)(l=t[c])&&l.from>s&&l.to<a&&(t[c]=null,(i||(i=[])).push(l));if(i){n==this.children&&(n=this.children.slice());var p=n[o+2].removeInner(i,s+1);p!=yo?n[o+2]=p:(n.splice(o,3),o-=3)}}if(r.length)for(var h=0,u=void 0;h<t.length;h++)if(u=t[h])for(var f=0;f<r.length;f++)r[f].eq(u,e)&&(r==this.local&&(r=this.local.slice()),r.splice(f--,1));return n==this.children&&r==this.local?this:r.length||n.length?new go(r,n):yo},go.prototype.forChild=function(t,e){if(this==yo)return this;if(e.isLeaf)return go.empty;for(var n,r,o=0;o<this.children.length;o+=3)if(this.children[o]>=t){this.children[o]==t&&(n=this.children[o+2]);break}for(var i=t+1,s=i+e.content.size,a=0;a<this.local.length;a++){var c=this.local[a];if(c.from<s&&c.to>i&&c.type instanceof po){var l=Math.max(i,c.from)-i,p=Math.min(s,c.to)-i;l<p&&(r||(r=[])).push(c.copy(l,p))}}if(r){var h=new go(r.sort(Mo),mo);return n?new wo([h,n]):h}return n||yo},go.prototype.eq=function(t){if(this==t)return!0;if(!(t instanceof go)||this.local.length!=t.local.length||this.children.length!=t.children.length)return!1;for(var e=0;e<this.local.length;e++)if(!this.local[e].eq(t.local[e]))return!1;for(var n=0;n<this.children.length;n+=3)if(this.children[n]!=t.children[n]||this.children[n+1]!=t.children[n+1]||!this.children[n+2].eq(t.children[n+2]))return!1;return!0},go.prototype.locals=function(t){return Co(this.localsInner(t))},go.prototype.localsInner=function(t){if(this==yo)return mo;if(t.inlineContent||!this.local.some(po.is))return this.local;for(var e=[],n=0;n<this.local.length;n++)this.local[n].type instanceof po||e.push(this.local[n]);return e},go.empty=new go([],[]),go.removeOverlap=Co;var yo=go.empty,wo=function(t){this.members=t};function bo(t,e){if(!e||!t.length)return t;for(var n=[],r=0;r<t.length;r++){var o=t[r];n.push(new uo(o.from+e,o.to+e,o.type))}return n}function ko(t,e,n){if(e.isLeaf)return null;for(var r=n+e.nodeSize,o=null,i=0,s=void 0;i<t.length;i++)(s=t[i])&&s.from>n&&s.to<r&&((o||(o=[])).push(s),t[i]=null);return o}function xo(t){for(var e=[],n=0;n<t.length;n++)null!=t[n]&&e.push(t[n]);return e}function So(t,e,n,r){var o=[],i=!1;e.forEach((function(e,s){var a=ko(t,e,s+n);if(a){i=!0;var c=So(a,e,n+s+1,r);c!=yo&&o.push(s,s+e.nodeSize,c)}}));for(var s=bo(i?xo(t):t,-n).sort(Mo),a=0;a<s.length;a++)s[a].type.valid(e,s[a])||(r.onRemove&&r.onRemove(s[a].spec),s.splice(a--,1));return s.length||o.length?new go(s,o):yo}function Mo(t,e){return t.from-e.from||t.to-e.to}function Co(t){for(var e=t,n=0;n<e.length-1;n++){var r=e[n];if(r.from!=r.to)for(var o=n+1;o<e.length;o++){var i=e[o];if(i.from!=r.from){i.from<r.to&&(e==t&&(e=t.slice()),e[n]=r.copy(r.from,i.from),Oo(e,o,r.copy(i.from,r.to)));break}i.to!=r.to&&(e==t&&(e=t.slice()),e[o]=i.copy(i.from,r.to),Oo(e,o+1,i.copy(r.to,i.to)))}}return e}function Oo(t,e,n){for(;e<t.length&&Mo(n,t[e])>0;)e++;t.splice(e,0,n)}function No(t){var e=[];return t.someProp("decorations",(function(n){var r=n(t.state);r&&r!=yo&&e.push(r)})),t.cursorWrapper&&e.push(go.create(t.state.doc,[t.cursorWrapper.deco])),wo.from(e)}wo.prototype.map=function(t,e){var n=this.members.map((function(n){return n.map(t,e,vo)}));return wo.from(n)},wo.prototype.forChild=function(t,e){if(e.isLeaf)return go.empty;for(var n=[],r=0;r<this.members.length;r++){var o=this.members[r].forChild(t,e);o!=yo&&(o instanceof wo?n=n.concat(o.members):n.push(o))}return wo.from(n)},wo.prototype.eq=function(t){if(!(t instanceof wo)||t.members.length!=this.members.length)return!1;for(var e=0;e<this.members.length;e++)if(!this.members[e].eq(t.members[e]))return!1;return!0},wo.prototype.locals=function(t){for(var e,n=!0,r=0;r<this.members.length;r++){var o=this.members[r].localsInner(t);if(o.length)if(e){n&&(e=e.slice(),n=!1);for(var i=0;i<o.length;i++)e.push(o[i])}else e=o}return e?Co(n?e:e.sort(Mo)):mo},wo.from=function(t){switch(t.length){case 0:return yo;case 1:return t[0];default:return new wo(t)}};var Do={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},To=$e&&qe<=11,Ao=function(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0};Ao.prototype.set=function(t){this.anchorNode=t.anchorNode,this.anchorOffset=t.anchorOffset,this.focusNode=t.focusNode,this.focusOffset=t.focusOffset},Ao.prototype.clear=function(){this.anchorNode=this.focusNode=null},Ao.prototype.eq=function(t){return t.anchorNode==this.anchorNode&&t.anchorOffset==this.anchorOffset&&t.focusNode==this.focusNode&&t.focusOffset==this.focusOffset};var Eo=function(t,e){var n=this;this.view=t,this.handleDOMChange=e,this.queue=[],this.flushingSoon=-1,this.observer=null,this.currentSelection=new Ao,this.onCharData=null,this.suppressingSelectionUpdates=!1,this.observer=window.MutationObserver&&new window.MutationObserver((function(t){for(var e=0;e<t.length;e++)n.queue.push(t[e]);$e&&qe<=11&&t.some((function(t){return"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length}))?n.flushSoon():n.flush()})),To&&(this.onCharData=function(t){n.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),n.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this)};Eo.prototype.flushSoon=function(){var t=this;this.flushingSoon<0&&(this.flushingSoon=window.setTimeout((function(){t.flushingSoon=-1,t.flush()}),20))},Eo.prototype.forceFlush=function(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush())},Eo.prototype.start=function(){this.observer&&(this.observer.takeRecords(),this.observer.observe(this.view.dom,Do)),this.onCharData&&this.view.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.connectSelection()},Eo.prototype.stop=function(){var t=this;if(this.observer){var e=this.observer.takeRecords();if(e.length){for(var n=0;n<e.length;n++)this.queue.push(e[n]);window.setTimeout((function(){return t.flush()}),20)}this.observer.disconnect()}this.onCharData&&this.view.dom.removeEventListener("DOMCharacterDataModified",this.onCharData),this.disconnectSelection()},Eo.prototype.connectSelection=function(){this.view.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange)},Eo.prototype.disconnectSelection=function(){this.view.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange)},Eo.prototype.suppressSelectionUpdates=function(){var t=this;this.suppressingSelectionUpdates=!0,setTimeout((function(){return t.suppressingSelectionUpdates=!1}),50)},Eo.prototype.onSelectionChange=function(){if(pr(this.view)){if(this.suppressingSelectionUpdates)return nr(this.view);if($e&&qe<=11&&!this.view.state.selection.empty){var t=this.view.domSelection();if(t.focusNode&&nn(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset))return this.flushSoon()}this.flush()}},Eo.prototype.setCurSelection=function(){this.currentSelection.set(this.view.domSelection())},Eo.prototype.ignoreSelectionChange=function(t){if(0==t.rangeCount)return!0;var e=t.getRangeAt(0).commonAncestorContainer,n=this.view.docView.nearestDesc(e);return n&&n.ignoreMutation({type:"selection",target:3==e.nodeType?e.parentNode:e})?(this.setCurSelection(),!0):void 0},Eo.prototype.flush=function(){var t=this.view;if(t.docView&&!(this.flushingSoon>-1)){var e=this.observer?this.observer.takeRecords():[];this.queue.length&&(e=this.queue.concat(e),this.queue.length=0);var n=t.domSelection(),r=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(n)&&pr(t)&&!this.ignoreSelectionChange(n),o=-1,i=-1,s=!1,a=[];if(t.editable)for(var c=0;c<e.length;c++){var l=this.registerMutation(e[c],a);l&&(o=o<0?l.from:Math.min(l.from,o),i=i<0?l.to:Math.max(l.to,i),l.typeOver&&(s=!0))}if(Le&&a.length>1){var p=a.filter((function(t){return"BR"==t.nodeName}));if(2==p.length){var h=p[0],u=p[1];h.parentNode&&h.parentNode.parentNode==u.parentNode?u.remove():h.remove()}}var f=null;o<0&&r&&t.input.lastFocus>Date.now()-200&&t.input.lastTouch<Date.now()-300&&cn(n)&&(f=tr(t))&&f.eq(ce.near(t.state.doc.resolve(0),1))?(t.input.lastFocus=0,nr(t),this.currentSelection.set(n),t.scrollToSelection()):(o>-1||r)&&(o>-1&&(t.docView.markDirty(o,i),function(t){if(Io.has(t))return;if(Io.set(t,null),-1!==["normal","nowrap","pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace)){if(t.requiresGeckoHackNode=Le,Ro)return;console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),Ro=!0}}(t)),this.handleDOMChange(o,i,s,a),t.docView&&t.docView.dirty?t.updateState(t.state):this.currentSelection.eq(n)||nr(t),this.currentSelection.set(n))}},Eo.prototype.registerMutation=function(t,e){if(e.indexOf(t.target)>-1)return null;var n=this.view.docView.nearestDesc(t.target);if("attributes"==t.type&&(n==this.view.docView||"contenteditable"==t.attributeName||"style"==t.attributeName&&!t.oldValue&&!t.target.getAttribute("style")))return null;if(!n||n.ignoreMutation(t))return null;if("childList"==t.type){for(var r=0;r<t.addedNodes.length;r++)e.push(t.addedNodes[r]);if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(t.target))return{from:n.posBefore,to:n.posAfter};var o=t.previousSibling,i=t.nextSibling;if($e&&qe<=11&&t.addedNodes.length)for(var s=0;s<t.addedNodes.length;s++){var a=t.addedNodes[s],c=a.previousSibling,l=a.nextSibling;(!c||Array.prototype.indexOf.call(t.addedNodes,c)<0)&&(o=c),(!l||Array.prototype.indexOf.call(t.addedNodes,l)<0)&&(i=l)}var p=o&&o.parentNode==t.target?Ye(o)+1:0,h=n.localPosFromDOM(t.target,p,-1),u=i&&i.parentNode==t.target?Ye(i):t.target.childNodes.length;return{from:h,to:n.localPosFromDOM(t.target,u,1)}}return"attributes"==t.type?{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}:{from:n.posAtStart,to:n.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}};var Io=new WeakMap,Ro=!1;function zo(t){var e=t.pmViewDesc;if(e)return e.parseRule();if("BR"==t.nodeName&&t.parentNode){if(Ke&&/^(ul|ol)$/i.test(t.parentNode.nodeName)){var n=document.createElement("div");return n.appendChild(document.createElement("li")),{skip:n}}if(t.parentNode.lastChild==t||Ke&&/^(tr|table)$/i.test(t.parentNode.nodeName))return{ignore:!0}}else if("IMG"==t.nodeName&&t.getAttribute("mark-placeholder"))return{ignore:!0};return null}function Po(t,e,n,o,i){if(e<0){var s=t.input.lastSelectionTime>Date.now()-50?t.input.lastSelectionOrigin:null,a=tr(t,s);if(a&&!t.state.selection.eq(a)){var c=t.state.tr.setSelection(a);"pointer"==s?c.setMeta("pointer",!0):"key"==s&&c.scrollIntoView(),t.dispatch(c)}}else{var l=t.state.doc.resolve(e),p=l.sharedDepth(n);e=l.before(p+1),n=t.state.doc.resolve(n).after(p+1);var h,u,f=t.state.selection,d=function(t,e,n){var r,o=t.docView.parseRange(e,n),i=o.node,s=o.fromOffset,a=o.toOffset,c=o.from,l=o.to,p=t.domSelection(),h=p.anchorNode;if(h&&t.dom.contains(1==h.nodeType?h:h.parentNode)&&(r=[{node:h,offset:p.anchorOffset}],cn(p)||r.push({node:p.focusNode,offset:p.focusOffset})),Je&&8===t.input.lastKeyCode)for(var u=a;u>s;u--){var f=i.childNodes[u-1],d=f.pmViewDesc;if("BR"==f.nodeName&&!d){a=u;break}if(!d||d.size)break}var m=t.state.doc,v=t.someProp("domParser")||nt.fromSchema(t.state.schema),g=m.resolve(c),y=null,w=v.parse(i,{topNode:g.parent,topMatch:g.parent.contentMatchAt(g.index()),topOpen:!0,from:s,to:a,preserveWhitespace:"pre"!=g.parent.type.whitespace||"full",findPositions:r,ruleFromNode:zo,context:g});if(r&&null!=r[0].pos){var b=r[0].pos,k=r[1]&&r[1].pos;null==k&&(k=b),y={anchor:b+c,head:k+c}}return{doc:w,sel:y,from:c,to:l}}(t,e,n),m=t.state.doc,v=m.slice(d.from,d.to);8===t.input.lastKeyCode&&Date.now()-100<t.input.lastKeyCodeTime?(h=t.state.selection.to,u="end"):(h=t.state.selection.from,u="start"),t.input.lastKeyCode=null;var g=function(t,e,n,r,o){var i=t.findDiffStart(e,n);if(null==i)return null;var s=t.findDiffEnd(e,n+t.size,n+e.size),a=s.a,c=s.b;if("end"==o){r-=a+Math.max(0,i-Math.min(a,c))-i}if(a<i&&t.size<e.size){c=(i-=r<=i&&r>=a?i-r:0)+(c-a),a=i}else if(c<i){a=(i-=r<=i&&r>=c?i-r:0)+(a-c),c=i}return{start:i,endA:a,endB:c}}(v.content,d.doc.content,d.from,h,u);if((He&&t.input.lastIOSEnter>Date.now()-225||Ge)&&i.some((function(t){return"DIV"==t.nodeName||"P"==t.nodeName}))&&(!g||g.endA>=g.endB)&&t.someProp("handleKeyDown",(function(e){return e(t,ln(13,"Enter"))})))t.input.lastIOSEnter=0;else{if(!g){if(!(o&&f instanceof fe&&!f.empty&&f.$head.sameParent(f.$anchor))||t.composing||d.sel&&d.sel.anchor!=d.sel.head){if(d.sel){var y=Bo(t,t.state.doc,d.sel);y&&!y.eq(t.state.selection)&&t.dispatch(t.state.tr.setSelection(y))}return}g={start:f.from,endA:f.to,endB:f.to}}if(Je&&t.cursorWrapper&&d.sel&&d.sel.anchor==t.cursorWrapper.deco.from&&d.sel.head==d.sel.anchor){var w=g.endB-g.start;d.sel={anchor:d.sel.anchor+w,head:d.sel.anchor+w}}t.input.domChangeCount++,t.state.selection.from<t.state.selection.to&&g.start==g.endB&&t.state.selection instanceof fe&&(g.start>t.state.selection.from&&g.start<=t.state.selection.from+2&&t.state.selection.from>=d.from?g.start=t.state.selection.from:g.endA<t.state.selection.to&&g.endA>=t.state.selection.to-2&&t.state.selection.to<=d.to&&(g.endB+=t.state.selection.to-g.endA,g.endA=t.state.selection.to)),$e&&qe<=11&&g.endB==g.start+1&&g.endA==g.start&&g.start>d.from&&"  "==d.doc.textBetween(g.start-d.from-1,g.start-d.from+1)&&(g.start--,g.endA--,g.endB--);var b,k=d.doc.resolveNoCache(g.start-d.from),x=d.doc.resolveNoCache(g.endB-d.from),S=m.resolve(g.start),M=k.sameParent(x)&&k.parent.inlineContent&&S.end()>=g.endA;if((He&&t.input.lastIOSEnter>Date.now()-225&&(!M||i.some((function(t){return"DIV"==t.nodeName||"P"==t.nodeName})))||!M&&k.pos<d.doc.content.size&&(b=ce.findFrom(d.doc.resolve(k.pos+1),1,!0))&&b.head==x.pos)&&t.someProp("handleKeyDown",(function(e){return e(t,ln(13,"Enter"))})))t.input.lastIOSEnter=0;else if(t.state.selection.anchor>g.start&&function(t,e,n,r,o){if(!r.parent.isTextblock||n-e<=o.pos-r.pos||_o(r,!0,!1)<o.pos)return!1;var i=t.resolve(e);if(i.parentOffset<i.parent.content.size||!i.parent.isTextblock)return!1;var s=t.resolve(_o(i,!0,!0));if(!s.parent.isTextblock||s.pos>n||_o(s,!0,!1)<n)return!1;return r.parent.content.cut(r.parentOffset).eq(s.parent.content)}(m,g.start,g.endA,k,x)&&t.someProp("handleKeyDown",(function(e){return e(t,ln(8,"Backspace"))})))Ge&&Je&&t.domObserver.suppressSelectionUpdates();else{Je&&Ge&&g.endB==g.start&&(t.input.lastAndroidDelete=Date.now()),Ge&&!M&&k.start()!=x.start()&&0==x.parentOffset&&k.depth==x.depth&&d.sel&&d.sel.anchor==d.sel.head&&d.sel.head==g.endA&&(g.endB-=2,x=d.doc.resolveNoCache(g.endB-d.from),setTimeout((function(){t.someProp("handleKeyDown",(function(e){return e(t,ln(13,"Enter"))}))}),20));var C,O,N,D=g.start,T=g.endA;if(M)if(k.pos==x.pos)$e&&qe<=11&&0==k.parentOffset&&(t.domObserver.suppressSelectionUpdates(),setTimeout((function(){return nr(t)}),20)),C=t.state.tr.delete(D,T),O=m.resolve(g.start).marksAcross(m.resolve(g.endA));else if(g.endA==g.endB&&(N=function(t,e){for(var n,o,i,s=t.firstChild.marks,a=e.firstChild.marks,c=s,l=a,p=0;p<a.length;p++)c=a[p].removeFromSet(c);for(var h=0;h<s.length;h++)l=s[h].removeFromSet(l);if(1==c.length&&0==l.length)o=c[0],n="add",i=function(t){return t.mark(o.addToSet(t.marks))};else{if(0!=c.length||1!=l.length)return null;o=l[0],n="remove",i=function(t){return t.mark(o.removeFromSet(t.marks))}}for(var u=[],f=0;f<e.childCount;f++)u.push(i(e.child(f)));if(r.from(u).eq(t))return{mark:o,type:n}}(k.parent.content.cut(k.parentOffset,x.parentOffset),S.parent.content.cut(S.parentOffset,g.endA-S.start()))))C=t.state.tr,"add"==N.type?C.addMark(D,T,N.mark):C.removeMark(D,T,N.mark);else if(k.parent.child(k.index()).isText&&k.index()==x.index()-(x.textOffset?0:1)){var A=k.parent.textBetween(k.parentOffset,x.parentOffset);if(t.someProp("handleTextInput",(function(e){return e(t,D,T,A)})))return;C=t.state.tr.insertText(A,D,T)}if(C||(C=t.state.tr.replace(D,T,d.doc.slice(g.start-d.from,g.endB-d.from))),d.sel){var E=Bo(t,C.doc,d.sel);E&&!(Je&&Ge&&t.composing&&E.empty&&(g.start!=g.endB||t.input.lastAndroidDelete<Date.now()-100)&&(E.head==D||E.head==C.mapping.map(T)-1)||$e&&E.empty&&E.head==D)&&C.setSelection(E)}O&&C.ensureMarks(O),t.dispatch(C.scrollIntoView())}}}}function Bo(t,e,n){return Math.max(n.anchor,n.head)>e.content.size?null:lr(t,e.resolve(n.anchor),e.resolve(n.head))}function _o(t,e,n){for(var r=t.depth,o=e?t.end():t.pos;r>0&&(e||t.indexAfter(r)==t.node(r).childCount);)r--,o++,e=!1;if(n)for(var i=t.node(r).maybeChild(t.indexAfter(r));i&&!i.isLeaf;)i=i.firstChild,o++;return o}var Vo=Cr,Fo=Or,$o=no,qo=function(t,e){var n=this;this._root=null,this.focused=!1,this.trackWrites=null,this.mounted=!1,this.markCursor=null,this.cursorWrapper=null,this.lastSelectedViewDesc=void 0,this.input=new Fr,this.prevDirectPlugins=[],this.pluginViews=[],this.requiresGeckoHackNode=!1,this.dragging=null,this._props=e,this.state=e.state,this.directPlugins=e.plugins||[],this.directPlugins.forEach(Ho),this.dispatch=this.dispatch.bind(this),this.dom=t&&t.mount||document.createElement("div"),t&&(t.appendChild?t.appendChild(this.dom):"function"==typeof t?t(this.dom):t.mount&&(this.mounted=!0)),this.editable=Wo(this),Jo(this),this.nodeViews=Ko(this),this.docView=Vn(this.state.doc,jo(this),No(this),this.dom,this),this.domObserver=new Eo(this,(function(t,e,r,o){return Po(n,t,e,r,o)})),this.domObserver.start(),function(t){var e=function(e){var n=Br[e];t.dom.addEventListener(e,t.input.eventHandlers[e]=function(e){!function(t,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(var n=e.target;n!=t.dom;n=n.parentNode)if(!n||11==n.nodeType||n.pmViewDesc&&n.pmViewDesc.stopEvent(e))return!1;return!0}(t,e)||Lr(t,e)||!t.editable&&e.type in _r||n(t,e)},Vr[e]?{passive:!0}:void 0)};for(var n in Br)e(n);Ke&&t.dom.addEventListener("input",(function(){return null})),qr(t)}(this),this.updatePluginViews()},Lo={composing:{configurable:!0},props:{configurable:!0},root:{configurable:!0},isDestroyed:{configurable:!0}};function jo(t){var e=Object.create(null);return e.class="ProseMirror",e.contenteditable=String(t.editable),e.translate="no",t.someProp("attributes",(function(n){if("function"==typeof n&&(n=n(t.state)),n)for(var r in n)"class"==r&&(e.class+=" "+n[r]),"style"==r?e.style=(e.style?e.style+";":"")+n[r]:e[r]||"contenteditable"==r||"nodeName"==r||(e[r]=String(n[r]))})),[uo.node(0,t.state.doc.content.size,e)]}function Jo(t){if(t.markCursor){var e=document.createElement("img");e.className="ProseMirror-separator",e.setAttribute("mark-placeholder","true"),e.setAttribute("alt",""),t.cursorWrapper={dom:e,deco:uo.widget(t.state.selection.head,e,{raw:!0,marks:t.markCursor})}}else t.cursorWrapper=null}function Wo(t){return!t.someProp("editable",(function(e){return!1===e(t.state)}))}function Ko(t){var e=Object.create(null);function n(t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n])}return t.someProp("nodeViews",n),t.someProp("markViews",n),e}function Ho(t){if(t.spec.state||t.spec.filterTransaction||t.spec.appendTransaction)throw new RangeError("Plugins passed directly to the view must not have a state component")}Lo.composing.get=function(){return this.input.composing},Lo.props.get=function(){if(this._props.state!=this.state){var t=this._props;for(var e in this._props={},t)this._props[e]=t[e];this._props.state=this.state}return this._props},qo.prototype.update=function(t){t.handleDOMEvents!=this._props.handleDOMEvents&&qr(this),this._props=t,t.plugins&&(t.plugins.forEach(Ho),this.directPlugins=t.plugins),this.updateStateInner(t.state,!0)},qo.prototype.setProps=function(t){var e={};for(var n in this._props)e[n]=this._props[n];for(var r in e.state=this.state,t)e[r]=t[r];this.update(e)},qo.prototype.updateState=function(t){this.updateStateInner(t,this.state.plugins!=t.plugins)},qo.prototype.updateStateInner=function(t,e){var n=this.state,r=!1,o=!1;if(t.storedMarks&&this.composing&&(eo(this),o=!0),this.state=t,e){var i=Ko(this);(function(t,e){var n=0,r=0;for(var o in t){if(t[o]!=e[o])return!0;n++}for(var i in e)r++;return n!=r})(i,this.nodeViews)&&(this.nodeViews=i,r=!0),qr(this)}this.editable=Wo(this),Jo(this);var s=No(this),a=jo(this),c=e?"reset":t.scrollToSelection>n.scrollToSelection?"to selection":"preserve",l=r||!this.docView.matchesNode(t.doc,a,s);!l&&t.selection.eq(n.selection)||(o=!0);var p,h,u,f,d,m,v,g,y="preserve"==c&&o&&null==this.dom.style.overflowAnchor&&function(t){for(var e,n,r=t.dom.getBoundingClientRect(),o=Math.max(0,r.top),i=(r.left+r.right)/2,s=o+1;s<Math.min(innerHeight,r.bottom);s+=5){var a=t.root.elementFromPoint(i,s);if(a&&a!=t.dom&&t.dom.contains(a)){var c=a.getBoundingClientRect();if(c.top>=o-20){e=a,n=c.top;break}}}return{refDOM:e,refTop:n,stack:dn(t.dom)}}(this);if(o){this.domObserver.stop();var w=l&&($e||Je)&&!this.composing&&!n.selection.empty&&!t.selection.empty&&(p=n.selection,h=t.selection,u=Math.min(p.$anchor.sharedDepth(p.head),h.$anchor.sharedDepth(h.head)),p.$anchor.start(u)!=h.$anchor.start(u));if(l){var b=Je?this.trackWrites=this.domSelection().focusNode:null;!r&&this.docView.update(t.doc,a,s,this)||(this.docView.updateOuterDeco([]),this.docView.destroy(),this.docView=Vn(t.doc,a,s,this.dom,this)),b&&!this.trackWrites&&(w=!0)}w||!(this.input.mouseDown&&this.domObserver.currentSelection.eq(this.domSelection())&&function(t){var e=t.docView.domFromPos(t.state.selection.anchor,0),n=t.domSelection();return nn(e.node,e.offset,n.anchorNode,n.anchorOffset)}(this))?nr(this,w):(ar(this,t.selection),this.domObserver.setCurSelection()),this.domObserver.start()}this.updatePluginViews(n),"reset"==c?this.dom.scrollTop=0:"to selection"==c?this.scrollToSelection():y&&(d=(f=y).refDOM,m=f.refTop,v=f.stack,g=d?d.getBoundingClientRect().top:0,mn(v,0==g?0:g-m))},qo.prototype.scrollToSelection=function(){var t=this,e=this.domSelection().focusNode;if(this.someProp("handleScrollToSelection",(function(e){return e(t)})));else if(this.state.selection instanceof me){var n=this.docView.domAfterPos(this.state.selection.from);1==n.nodeType&&fn(this,n.getBoundingClientRect(),e)}else fn(this,this.coordsAtPos(this.state.selection.head,1),e)},qo.prototype.destroyPluginViews=function(){for(var t;t=this.pluginViews.pop();)t.destroy&&t.destroy()},qo.prototype.updatePluginViews=function(t){if(t&&t.plugins==this.state.plugins&&this.directPlugins==this.prevDirectPlugins)for(var e=0;e<this.pluginViews.length;e++){var n=this.pluginViews[e];n.update&&n.update(this,t)}else{this.prevDirectPlugins=this.directPlugins,this.destroyPluginViews();for(var r=0;r<this.directPlugins.length;r++){var o=this.directPlugins[r];o.spec.view&&this.pluginViews.push(o.spec.view(this))}for(var i=0;i<this.state.plugins.length;i++){var s=this.state.plugins[i];s.spec.view&&this.pluginViews.push(s.spec.view(this))}}},qo.prototype.someProp=function(t,e){var n,r=this._props&&this._props[t];if(null!=r&&(n=e?e(r):r))return n;for(var o=0;o<this.directPlugins.length;o++){var i=this.directPlugins[o].props[t];if(null!=i&&(n=e?e(i):i))return n}var s=this.state.plugins;if(s)for(var a=0;a<s.length;a++){var c=s[a].props[t];if(null!=c&&(n=e?e(c):c))return n}},qo.prototype.hasFocus=function(){return this.root.activeElement==this.dom},qo.prototype.focus=function(){this.domObserver.stop(),this.editable&&function(t){if(t.setActive)return t.setActive();if(vn)return t.focus(vn);var e=dn(t);t.focus(null==vn?{get preventScroll(){return vn={preventScroll:!0},!0}}:void 0),vn||(vn=!1,mn(e,0))}(this.dom),nr(this),this.domObserver.start()},Lo.root.get=function(){var t=this,e=this._root;if(null==e)for(var n=function(e){if(9==e.nodeType||11==e.nodeType&&e.host)return e.getSelection||(Object.getPrototypeOf(e).getSelection=function(){return e.ownerDocument.getSelection()}),{v:t._root=e}},r=t.dom.parentNode;r;r=r.parentNode){var o=n(r);if(o)return o.v}return e||document},qo.prototype.posAtCoords=function(t){return bn(this,t)},qo.prototype.coordsAtPos=function(t,e){return void 0===e&&(e=1),Sn(this,t,e)},qo.prototype.domAtPos=function(t,e){return void 0===e&&(e=0),this.docView.domFromPos(t,e)},qo.prototype.nodeDOM=function(t){var e=this.docView.descAt(t);return e?e.nodeDOM:null},qo.prototype.posAtDOM=function(t,e,n){void 0===n&&(n=-1);var r=this.docView.posFromDOM(t,e,n);if(null==r)throw new RangeError("DOM position not inside the editor");return r},qo.prototype.endOfTextblock=function(t,e){return En(this,e||this.state,t)},qo.prototype.destroy=function(){this.docView&&(!function(t){for(var e in t.domObserver.stop(),t.input.eventHandlers)t.dom.removeEventListener(e,t.input.eventHandlers[e]);clearTimeout(t.input.composingTimeout),clearTimeout(t.input.lastIOSEnterFallbackTimeout)}(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],No(this),this),this.dom.textContent=""):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null)},Lo.isDestroyed.get=function(){return null==this.docView},qo.prototype.dispatchEvent=function(t){return function(t,e){Lr(t,e)||!Br[e.type]||!t.editable&&e.type in _r||Br[e.type](t,e)}(this,t)},qo.prototype.dispatch=function(t){var e=this._props.dispatchTransaction;e?e.call(this,t):this.updateState(this.state.apply(t))},qo.prototype.domSelection=function(){return this.root.getSelection()},Object.defineProperties(qo.prototype,Lo);var Uo=Object.freeze({__proto__:null,Decoration:uo,DecorationSet:go,EditorView:qo,__endComposition:$o,__parseFromClipboard:Fo,__serializeForClipboard:Vo}),Go={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Qo={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Xo="undefined"!=typeof navigator&&/Chrome\/(\d+)/.exec(navigator.userAgent);"undefined"!=typeof navigator&&/Gecko\/\d+/.test(navigator.userAgent);for(var Yo="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),Zo="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),ti=Yo||Xo&&+Xo[1]<57,ei=0;ei<10;ei++)Go[48+ei]=Go[96+ei]=String(ei);for(ei=1;ei<=24;ei++)Go[ei+111]="F"+ei;for(ei=65;ei<=90;ei++)Go[ei]=String.fromCharCode(ei+32),Qo[ei]=String.fromCharCode(ei);for(var ni in Go)Qo.hasOwnProperty(ni)||(Qo[ni]=Go[ni]);var ri="undefined"!=typeof navigator&&/Mac|iP(hone|[oa]d)/.test(navigator.platform);function oi(t){var e,n,r,o,i=t.split(/-(?!$)/),s=i[i.length-1];"Space"==s&&(s=" ");for(var a=0;a<i.length-1;a++){var c=i[a];if(/^(cmd|meta|m)$/i.test(c))o=!0;else if(/^a(lt)?$/i.test(c))e=!0;else if(/^(c|ctrl|control)$/i.test(c))n=!0;else if(/^s(hift)?$/i.test(c))r=!0;else{if(!/^mod$/i.test(c))throw new Error("Unrecognized modifier name: "+c);ri?o=!0:n=!0}}return e&&(s="Alt-"+s),n&&(s="Ctrl-"+s),o&&(s="Meta-"+s),r&&(s="Shift-"+s),s}function ii(t,e,n){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==n&&e.shiftKey&&(t="Shift-"+t),t}function si(t){return new Te({props:{handleKeyDown:ai(t)}})}function ai(t){var e=function(t){var e=Object.create(null);for(var n in t)e[oi(n)]=t[n];return e}(t);return function(t,n){var r,o=function(t){var e=!(ti&&(t.ctrlKey||t.altKey||t.metaKey)||Zo&&t.shiftKey&&t.key&&1==t.key.length||"Unidentified"==t.key)&&t.key||(t.shiftKey?Qo:Go)[t.keyCode]||t.key||"Unidentified";return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(n),i=1==o.length&&" "!=o,s=e[ii(o,n,!i)];if(s&&s(t.state,t.dispatch,t))return!0;if(i&&(n.shiftKey||n.altKey||n.metaKey||o.charCodeAt(0)>127)&&(r=Go[n.keyCode])&&r!=o){var a=e[ii(r,n,!0)];if(a&&a(t.state,t.dispatch,t))return!0}else if(i&&n.shiftKey){var c=e[ii(o,n,!0)];if(c&&c(t.state,t.dispatch,t))return!0}return!1}}var ci=Object.freeze({__proto__:null,keydownHandler:ai,keymap:si}),li=function(t,e){var n;this.match=t,this.match=t,this.handler="string"==typeof e?(n=e,function(t,e,r,o){var i=n;if(e[1]){var s=e[0].lastIndexOf(e[1]);i+=e[0].slice(s+e[1].length);var a=(r+=s)-o;a>0&&(i=e[0].slice(s-a,s)+i,r=o)}return t.tr.insertText(i,r,o)}):e};function pi(t){var e=t.rules,n=new Te({state:{init:function(){return null},apply:function(t,e){var n=t.getMeta(this);return n||(t.selectionSet||t.docChanged?null:e)}},props:{handleTextInput:function(t,r,o,i){return hi(t,r,o,i,e,n)},handleDOMEvents:{compositionend:function(t){setTimeout((function(){var r=t.state.selection.$cursor;r&&hi(t,r.pos,r.pos,"",e,n)}))}}},isInputRules:!0});return n}function hi(t,e,n,r,o,i){if(t.composing)return!1;var s=t.state,a=s.doc.resolve(e);if(a.parent.type.spec.code)return!1;for(var c=a.parent.textBetween(Math.max(0,a.parentOffset-500),a.parentOffset,null,"￼")+r,l=0;l<o.length;l++){var p=o[l].match.exec(c),h=p&&o[l].handler(s,p,e-(p[0].length-r.length),n);if(h)return t.dispatch(h.setMeta(i,{transform:h,from:e,to:n,text:r})),!0}return!1}var ui=function(t,e){for(var n=t.plugins,r=0;r<n.length;r++){var o=n[r],i=void 0;if(o.spec.isInputRules&&(i=o.getState(t))){if(e){for(var s=t.tr,a=i.transform,c=a.steps.length-1;c>=0;c--)s.step(a.steps[c].invert(a.docs[c]));if(i.text){var l=s.doc.resolve(i.from).marks();s.replaceWith(i.from,i.to,t.schema.text(i.text,l))}else s.delete(i.from,i.to);e(s)}return!0}}return!1},fi=new li(/--$/,"—"),di=new li(/\.\.\.$/,"…"),mi=new li(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"“"),vi=new li(/"$/,"”"),gi=new li(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"‘"),yi=new li(/'$/,"’"),wi=[mi,vi,gi,yi];function bi(t,e,n,r){return void 0===n&&(n=null),new li(t,(function(t,o,i,s){var a=n instanceof Function?n(o):n,c=t.tr.delete(i,s),l=c.doc.resolve(i).blockRange(),p=l&&Bt(l,e,a);if(!p)return null;c.wrap(l,p);var h=c.doc.resolve(i-1).nodeBefore;return h&&h.type==e&&Ft(c.doc,i-1)&&(!r||r(o,h))&&c.join(i-1),c}))}function ki(t,e,n){return void 0===n&&(n=null),new li(t,(function(t,r,o,i){var s=t.doc.resolve(o),a=n instanceof Function?n(r):n;return s.node(-1).canReplaceWith(s.index(-1),s.indexAfter(-1),e)?t.tr.delete(o,i).setBlockType(o,o,e,a):null}))}var xi=Object.freeze({__proto__:null,InputRule:li,closeDoubleQuote:vi,closeSingleQuote:yi,ellipsis:di,emDash:fi,inputRules:pi,openDoubleQuote:mi,openSingleQuote:gi,smartQuotes:wi,textblockTypeInputRule:ki,undoInputRule:ui,wrappingInputRule:bi}),Si=200,Mi=function(){};Mi.prototype.append=function(t){return t.length?(t=Mi.from(t),!this.length&&t||t.length<Si&&this.leafAppend(t)||this.length<Si&&t.leafPrepend(this)||this.appendInner(t)):this},Mi.prototype.prepend=function(t){return t.length?Mi.from(t).append(this):this},Mi.prototype.appendInner=function(t){return new Oi(this,t)},Mi.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?Mi.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))},Mi.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},Mi.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},Mi.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},Mi.from=function(t){return t instanceof Mi?t:t&&t.length?new Ci(t):Mi.empty};var Ci=function(t){function e(e){t.call(this),this.values=e}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n))},e.prototype.getInner=function(t){return this.values[t]},e.prototype.forEachInner=function(t,e,n,r){for(var o=e;o<n;o++)if(!1===t(this.values[o],r+o))return!1},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var o=e-1;o>=n;o--)if(!1===t(this.values[o],r+o))return!1},e.prototype.leafAppend=function(t){if(this.length+t.length<=Si)return new e(this.values.concat(t.flatten()))},e.prototype.leafPrepend=function(t){if(this.length+t.length<=Si)return new e(t.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(e.prototype,n),e}(Mi);Mi.empty=new Ci([]);var Oi=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var o=this.left.length;return!(e<o&&!1===this.left.forEachInner(t,e,Math.min(n,o),r))&&(!(n>o&&!1===this.right.forEachInner(t,Math.max(e-o,0),Math.min(this.length,n)-o,r+o))&&void 0)},e.prototype.forEachInvertedInner=function(t,e,n,r){var o=this.left.length;return!(e>o&&!1===this.right.forEachInvertedInner(t,e-o,Math.max(n,o)-o,r+o))&&(!(n<o&&!1===this.left.forEachInvertedInner(t,Math.min(e,o),n,r))&&void 0)},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(Mi),Ni=Mi,Di=function(t,e){this.items=t,this.eventCount=e};Di.prototype.popEvent=function(t,e){var n=this;if(0==this.eventCount)return null;for(var r,o,i=this.items.length;;i--){if(this.items.get(i-1).selection){--i;break}}e&&(r=this.remapping(i,this.items.length),o=r.maps.length);var s,a,c=t.tr,l=[],p=[];return this.items.forEach((function(t,e){if(!t.step)return r||(r=n.remapping(i,e+1),o=r.maps.length),o--,void p.push(t);if(r){p.push(new Ti(t.map));var h,u=t.step.map(r.slice(o));u&&c.maybeStep(u).doc&&(h=c.mapping.maps[c.mapping.maps.length-1],l.push(new Ti(h,void 0,void 0,l.length+p.length))),o--,h&&r.appendMap(h,o)}else c.maybeStep(t.step);return t.selection?(s=r?t.selection.map(r.slice(o)):t.selection,a=new Di(n.items.slice(0,i).append(p.reverse().concat(l)),n.eventCount-1),!1):void 0}),this.items.length,0),{remaining:a,transform:c,selection:s}},Di.prototype.addTransform=function(t,e,n,r){for(var o=[],i=this.eventCount,s=this.items,a=!r&&s.length?s.get(s.length-1):null,c=0;c<t.steps.length;c++){var l,p=t.steps[c].invert(t.docs[c]),h=new Ti(t.mapping.maps[c],p,e);(l=a&&a.merge(h))&&(h=l,c?o.pop():s=s.slice(0,s.length-1)),o.push(h),e&&(i++,e=void 0),r||(a=h)}var u,f,d,m=i-n.depth;return m>Ei&&(f=m,(u=s).forEach((function(t,e){if(t.selection&&0==f--)return d=e,!1})),s=u.slice(d),i-=m),new Di(s.append(o),i)},Di.prototype.remapping=function(t,e){var n=new xt;return this.items.forEach((function(e,r){var o=null!=e.mirrorOffset&&r-e.mirrorOffset>=t?n.maps.length-e.mirrorOffset:void 0;n.appendMap(e.map,o)}),t,e),n},Di.prototype.addMaps=function(t){return 0==this.eventCount?this:new Di(this.items.append(t.map((function(t){return new Ti(t)}))),this.eventCount)},Di.prototype.rebased=function(t,e){if(!this.eventCount)return this;var n=[],r=Math.max(0,this.items.length-e),o=t.mapping,i=t.steps.length,s=this.eventCount;this.items.forEach((function(t){t.selection&&s--}),r);var a=e;this.items.forEach((function(e){var r=o.getMirror(--a);if(null!=r){i=Math.min(i,r);var c=o.maps[r];if(e.step){var l=t.steps[r].invert(t.docs[r]),p=e.selection&&e.selection.map(o.slice(a+1,r));p&&s++,n.push(new Ti(c,l,p))}else n.push(new Ti(c))}}),r);for(var c=[],l=e;l<i;l++)c.push(new Ti(o.maps[l]));var p=this.items.slice(0,r).append(c).append(n),h=new Di(p,s);return h.emptyItemCount()>500&&(h=h.compress(this.items.length-n.length)),h},Di.prototype.emptyItemCount=function(){var t=0;return this.items.forEach((function(e){e.step||t++})),t},Di.prototype.compress=function(t){void 0===t&&(t=this.items.length);var e=this.remapping(0,t),n=e.maps.length,r=[],o=0;return this.items.forEach((function(i,s){if(s>=t)r.push(i),i.selection&&o++;else if(i.step){var a=i.step.map(e.slice(n)),c=a&&a.getMap();if(n--,c&&e.appendMap(c,n),a){var l=i.selection&&i.selection.map(e.slice(n));l&&o++;var p,h=new Ti(c.invert(),a,l),u=r.length-1;(p=r.length&&r[u].merge(h))?r[u]=p:r.push(h)}}else i.map&&n--}),this.items.length,0),new Di(Ni.from(r.reverse()),o)},Di.empty=new Di(Ni.empty,0);var Ti=function(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r};Ti.prototype.merge=function(t){if(this.step&&t.step&&!t.selection){var e=t.step.merge(this.step);if(e)return new Ti(e.getMap().invert(),e,this.selection)}};var Ai=function(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r},Ei=20;function Ii(t){var e=[];return t.forEach((function(t,n,r,o){return e.push(r,o)})),e}function Ri(t,e){if(!t)return null;for(var n=[],r=0;r<t.length;r+=2){var o=e.map(t[r],1),i=e.map(t[r+1],-1);o<=i&&n.push(o,i)}return n}function zi(t,e,n,r){var o=_i(e),i=Vi.get(e).spec.config,s=(r?t.undone:t.done).popEvent(e,o);if(s){var a=s.selection.resolve(s.transform.doc),c=(r?t.done:t.undone).addTransform(s.transform,e.selection.getBookmark(),i,o),l=new Ai(r?c:s.remaining,r?s.remaining:c,null,0);n(s.transform.setSelection(a).setMeta(Vi,{redo:r,historyState:l}).scrollIntoView())}}var Pi=!1,Bi=null;function _i(t){var e=t.plugins;if(Bi!=e){Pi=!1,Bi=e;for(var n=0;n<e.length;n++)if(e[n].spec.historyPreserveItems){Pi=!0;break}}return Pi}var Vi=new Ie("history"),Fi=new Ie("closeHistory");function $i(t){return void 0===t&&(t={}),t={depth:t.depth||100,newGroupDelay:t.newGroupDelay||500},new Te({key:Vi,state:{init:function(){return new Ai(Di.empty,Di.empty,null,0)},apply:function(e,n,r){return function(t,e,n,r){var o,i=n.getMeta(Vi);if(i)return i.historyState;n.getMeta(Fi)&&(t=new Ai(t.done,t.undone,null,0));var s=n.getMeta("appendedTransaction");if(0==n.steps.length)return t;if(s&&s.getMeta(Vi))return s.getMeta(Vi).redo?new Ai(t.done.addTransform(n,void 0,r,_i(e)),t.undone,Ii(n.mapping.maps[n.steps.length-1]),t.prevTime):new Ai(t.done,t.undone.addTransform(n,void 0,r,_i(e)),null,t.prevTime);if(!1===n.getMeta("addToHistory")||s&&!1===s.getMeta("addToHistory"))return(o=n.getMeta("rebased"))?new Ai(t.done.rebased(n,o),t.undone.rebased(n,o),Ri(t.prevRanges,n.mapping),t.prevTime):new Ai(t.done.addMaps(n.mapping.maps),t.undone.addMaps(n.mapping.maps),Ri(t.prevRanges,n.mapping),t.prevTime);var a=0==t.prevTime||!s&&(t.prevTime<(n.time||0)-r.newGroupDelay||!function(t,e){if(!e)return!1;if(!t.docChanged)return!0;var n=!1;return t.mapping.maps[0].forEach((function(t,r){for(var o=0;o<e.length;o+=2)t<=e[o+1]&&r>=e[o]&&(n=!0)})),n}(n,t.prevRanges)),c=s?Ri(t.prevRanges,n.mapping):Ii(n.mapping.maps[n.steps.length-1]);return new Ai(t.done.addTransform(n,a?e.selection.getBookmark():void 0,r,_i(e)),Di.empty,c,n.time)}(n,r,e,t)}},config:t,props:{handleDOMEvents:{beforeinput:function(t,e){var n=e.inputType,r="historyUndo"==n?qi:"historyRedo"==n?Li:null;return!!r&&(e.preventDefault(),r(t.state,t.dispatch))}}}})}var qi=function(t,e){var n=Vi.getState(t);return!(!n||0==n.done.eventCount)&&(e&&zi(n,t,e,!1),!0)},Li=function(t,e){var n=Vi.getState(t);return!(!n||0==n.undone.eventCount)&&(e&&zi(n,t,e,!0),!0)};var ji=Object.freeze({__proto__:null,closeHistory:function(t){return t.setMeta(Fi,!0)},history:$i,redo:Li,redoDepth:function(t){var e=Vi.getState(t);return e?e.undone.eventCount:0},undo:qi,undoDepth:function(t){var e=Vi.getState(t);return e?e.done.eventCount:0}}),Ji=function(t,e){return!t.selection.empty&&(e&&e(t.tr.deleteSelection().scrollIntoView()),!0)},Wi=function(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("backward",t):r.parentOffset>0))return!1;var o=Ui(r);if(!o){var i=r.blockRange(),s=i&&Pt(i);return null!=s&&(e&&e(t.tr.lift(i,s).scrollIntoView()),!0)}var a=o.nodeBefore;if(!a.type.spec.isolating&&ps(t,o,e))return!0;if(0==r.parent.content.size&&(Ki(a,"end")||me.isSelectable(a))){var c=Jt(t.doc,r.before(),r.after(),p.empty);if(c&&c.slice.size<c.to-c.from){if(e){var l=t.tr.step(c);l.setSelection(Ki(a,"end")?ce.findFrom(l.doc.resolve(l.mapping.map(o.pos,-1)),-1):me.create(l.doc,o.pos-a.nodeSize)),e(l.scrollIntoView())}return!0}}return!(!a.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos-a.nodeSize,o.pos).scrollIntoView()),!0)};function Ki(t,e,n){void 0===n&&(n=!1);for(var r=t;r;r="start"==e?r.firstChild:r.lastChild){if(r.isTextblock)return!0;if(n&&1!=r.childCount)return!1}return!1}var Hi=function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("backward",t):o.parentOffset>0)return!1;i=Ui(o)}var s=i&&i.nodeBefore;return!(!s||!me.isSelectable(s))&&(e&&e(t.tr.setSelection(me.create(t.doc,i.pos-s.nodeSize)).scrollIntoView()),!0)};function Ui(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){if(t.index(e)>0)return t.doc.resolve(t.before(e+1));if(t.node(e).type.spec.isolating)break}return null}var Gi=function(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("forward",t):r.parentOffset<r.parent.content.size))return!1;var o=Xi(r);if(!o)return!1;var i=o.nodeAfter;if(ps(t,o,e))return!0;if(0==r.parent.content.size&&(Ki(i,"start")||me.isSelectable(i))){var s=Jt(t.doc,r.before(),r.after(),p.empty);if(s&&s.slice.size<s.to-s.from){if(e){var a=t.tr.step(s);a.setSelection(Ki(i,"start")?ce.findFrom(a.doc.resolve(a.mapping.map(o.pos)),1):me.create(a.doc,a.mapping.map(o.pos))),e(a.scrollIntoView())}return!0}}return!(!i.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos,o.pos+i.nodeSize).scrollIntoView()),!0)},Qi=function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("forward",t):o.parentOffset<o.parent.content.size)return!1;i=Xi(o)}var s=i&&i.nodeAfter;return!(!s||!me.isSelectable(s))&&(e&&e(t.tr.setSelection(me.create(t.doc,i.pos)).scrollIntoView()),!0)};function Xi(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){var n=t.node(e);if(t.index(e)+1<n.childCount)return t.doc.resolve(t.after(e+1));if(n.type.spec.isolating)break}return null}var Yi=function(t,e){var n,r=t.selection,o=r instanceof me;if(o){if(r.node.isTextblock||!Ft(t.doc,r.from))return!1;n=r.from}else if(null==(n=qt(t.doc,r.from,-1)))return!1;if(e){var i=t.tr.join(n);o&&i.setSelection(me.create(i.doc,n-t.doc.resolve(n).nodeBefore.nodeSize)),e(i.scrollIntoView())}return!0},Zi=function(t,e){var n,r=t.selection;if(r instanceof me){if(r.node.isTextblock||!Ft(t.doc,r.to))return!1;n=r.to}else if(null==(n=qt(t.doc,r.to,1)))return!1;return e&&e(t.tr.join(n).scrollIntoView()),!0},ts=function(t,e){var n=t.selection,r=n.$from,o=n.$to,i=r.blockRange(o),s=i&&Pt(i);return null!=s&&(e&&e(t.tr.lift(i,s).scrollIntoView()),!0)},es=function(t,e){var n=t.selection,r=n.$head,o=n.$anchor;return!(!r.parent.type.spec.code||!r.sameParent(o))&&(e&&e(t.tr.insertText("\n").scrollIntoView()),!0)};function ns(t){for(var e=0;e<t.edgeCount;e++){var n=t.edge(e).type;if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}var rs=function(t,e){var n=t.selection,r=n.$head,o=n.$anchor;if(!r.parent.type.spec.code||!r.sameParent(o))return!1;var i=r.node(-1),s=r.indexAfter(-1),a=ns(i.contentMatchAt(s));if(!a||!i.canReplaceWith(s,s,a))return!1;if(e){var c=r.after(),l=t.tr.replaceWith(c,c,a.createAndFill());l.setSelection(ce.near(l.doc.resolve(c),1)),e(l.scrollIntoView())}return!0},is=function(t,e){var n=t.selection,r=n.$from,o=n.$to;if(n instanceof ge||r.parent.inlineContent||o.parent.inlineContent)return!1;var i=ns(o.parent.contentMatchAt(o.indexAfter()));if(!i||!i.isTextblock)return!1;if(e){var s=(!r.parentOffset&&o.index()<o.parent.childCount?r:o).pos,a=t.tr.insert(s,i.createAndFill());a.setSelection(fe.create(a.doc,s+1)),e(a.scrollIntoView())}return!0},ss=function(t,e){var n=t.selection.$cursor;if(!n||n.parent.content.size)return!1;if(n.depth>1&&n.after()!=n.end(-1)){var r=n.before();if(Vt(t.doc,r))return e&&e(t.tr.split(r).scrollIntoView()),!0}var o=n.blockRange(),i=o&&Pt(o);return null!=i&&(e&&e(t.tr.lift(o,i).scrollIntoView()),!0)},as=function(t,e){var n=t.selection,r=n.$from,o=n.$to;if(t.selection instanceof me&&t.selection.node.isBlock)return!(!r.parentOffset||!Vt(t.doc,r.pos))&&(e&&e(t.tr.split(r.pos).scrollIntoView()),!0);if(!r.parent.isBlock)return!1;if(e){var i=o.parentOffset==o.parent.content.size,s=t.tr;(t.selection instanceof fe||t.selection instanceof ge)&&s.deleteSelection();var a=0==r.depth?null:ns(r.node(-1).contentMatchAt(r.indexAfter(-1))),c=i&&a?[{type:a}]:void 0,l=Vt(s.doc,s.mapping.map(r.pos),1,c);if(c||l||!Vt(s.doc,s.mapping.map(r.pos),1,a?[{type:a}]:void 0)||(a&&(c=[{type:a}]),l=!0),l&&(s.split(s.mapping.map(r.pos),1,c),!i&&!r.parentOffset&&r.parent.type!=a)){var p=s.mapping.map(r.before()),h=s.doc.resolve(p);a&&r.node(-1).canReplaceWith(h.index(),h.index()+1,a)&&s.setNodeMarkup(s.mapping.map(r.before()),a)}e(s.scrollIntoView())}return!0},cs=function(t,e){var n,r=t.selection,o=r.$from,i=r.to,s=o.sharedDepth(i);return 0!=s&&(n=o.before(s),e&&e(t.tr.setSelection(me.create(t.doc,n))),!0)},ls=function(t,e){return e&&e(t.tr.setSelection(new ge(t.doc))),!0};function ps(t,e,n){var o,i,s=e.nodeBefore,a=e.nodeAfter;if(s.type.spec.isolating||a.type.spec.isolating)return!1;if(function(t,e,n){var r=e.nodeBefore,o=e.nodeAfter,i=e.index();return!(!(r&&o&&r.type.compatibleContent(o.type))||(!r.content.size&&e.parent.canReplace(i-1,i)?(n&&n(t.tr.delete(e.pos-r.nodeSize,e.pos).scrollIntoView()),0):!e.parent.canReplace(i,i+1)||!o.isTextblock&&!Ft(t.doc,e.pos)||(n&&n(t.tr.clearIncompatible(e.pos,r.type,r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()),0)))}(t,e,n))return!0;var c=e.parent.canReplace(e.index(),e.index()+1);if(c&&(o=(i=s.contentMatchAt(s.childCount)).findWrapping(a.type))&&i.matchType(o[0]||a.type).validEnd){if(n){for(var l=e.pos+a.nodeSize,h=r.empty,u=o.length-1;u>=0;u--)h=r.from(o[u].create(null,h));h=r.from(s.copy(h));var f=t.tr.step(new It(e.pos-1,l,e.pos,l,new p(h,1,0),o.length,!0)),d=l+2*o.length;Ft(f.doc,d)&&f.join(d),n(f.scrollIntoView())}return!0}var m=ce.findFrom(e,1),v=m&&m.$from.blockRange(m.$to),g=v&&Pt(v);if(null!=g&&g>=e.depth)return n&&n(t.tr.lift(v,g).scrollIntoView()),!0;if(c&&Ki(a,"start",!0)&&Ki(s,"end")){for(var y=s,w=[];w.push(y),!y.isTextblock;)y=y.lastChild;for(var b=a,k=1;!b.isTextblock;b=b.firstChild)k++;if(y.canReplace(y.childCount,y.childCount,b.content)){if(n){for(var x=r.empty,S=w.length-1;S>=0;S--)x=r.from(w[S].copy(x));n(t.tr.step(new It(e.pos-w.length,e.pos+a.nodeSize,e.pos+k,e.pos+a.nodeSize-k,new p(x,w.length,0),0,!0)).scrollIntoView())}return!0}}return!1}function hs(t){return function(e,n){for(var r=e.selection,o=t<0?r.$from:r.$to,i=o.depth;o.node(i).isInline;){if(!i)return!1;i--}return!!o.node(i).isTextblock&&(n&&n(e.tr.setSelection(fe.create(e.doc,t<0?o.start(i):o.end(i)))),!0)}}var us=hs(-1),fs=hs(1);function ds(t,e){return void 0===e&&(e=null),function(n,r){var o=n.selection,i=o.$from,s=o.$to,a=i.blockRange(s),c=a&&Bt(a,t,e);return!!c&&(r&&r(n.tr.wrap(a,c).scrollIntoView()),!0)}}function ms(t,e){return void 0===e&&(e=null),function(n,r){var o=n.selection,i=o.from,s=o.to,a=!1;return n.doc.nodesBetween(i,s,(function(r,o){if(a)return!1;if(r.isTextblock&&!r.hasMarkup(t,e))if(r.type==t)a=!0;else{var i=n.doc.resolve(o),s=i.index();a=i.parent.canReplaceWith(s,s+1,t)}})),!!a&&(r&&r(n.tr.setBlockType(i,s,t,e).scrollIntoView()),!0)}}function vs(t,e){return void 0===e&&(e=null),function(n,r){var o=n.selection,i=o.empty,s=o.$cursor,a=o.ranges;if(i&&!s||!function(t,e,n){for(var r=function(r){var o=e[r],i=o.$from,s=o.$to,a=0==i.depth&&t.type.allowsMarkType(n);if(t.nodesBetween(i.pos,s.pos,(function(t){if(a)return!1;a=t.inlineContent&&t.type.allowsMarkType(n)})),a)return{v:!0}},o=0;o<e.length;o++){var i=r(o);if(i)return i.v}return!1}(n.doc,a,t))return!1;if(r)if(s)t.isInSet(n.storedMarks||s.marks())?r(n.tr.removeStoredMark(t)):r(n.tr.addStoredMark(t.create(e)));else{for(var c=!1,l=n.tr,p=0;!c&&p<a.length;p++){var h=a[p],u=h.$from,f=h.$to;c=n.doc.rangeHasMark(u.pos,f.pos,t)}for(var d=0;d<a.length;d++){var m=a[d],v=m.$from,g=m.$to;if(c)l.removeMark(v.pos,g.pos,t);else{var y=v.pos,w=g.pos,b=v.nodeAfter,k=g.nodeBefore,x=b&&b.isText?/^\s*/.exec(b.text)[0].length:0,S=k&&k.isText?/\s*$/.exec(k.text)[0].length:0;y+x<w&&(y+=x,w-=S),l.addMark(y,w,t.create(e))}}r(l.scrollIntoView())}return!0}}function gs(t,e){return function(n){if(!n.isGeneric)return t(n);for(var r=[],o=0;o<n.mapping.maps.length;o++){for(var i=n.mapping.maps[o],s=0;s<r.length;s++)r[s]=i.map(r[s]);i.forEach((function(t,e,n,o){return r.push(n,o)}))}for(var a=[],c=0;c<r.length;c+=2)for(var l=r[c],p=r[c+1],h=n.doc.resolve(l),u=h.sharedDepth(p),f=h.node(u),d=h.indexAfter(u),m=h.after(u+1);m<=p;++d){var v=f.maybeChild(d);if(!v)break;if(d&&-1==a.indexOf(m)){var g=f.child(d-1);g.type==v.type&&e(g,v)&&a.push(m)}m+=v.nodeSize}a.sort((function(t,e){return t-e}));for(var y=a.length-1;y>=0;y--)Ft(n.doc,a[y])&&n.join(a[y]);t(n)}}function ys(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return function(e,n,r){for(var o=0;o<t.length;o++)if(t[o](e,n,r))return!0;return!1}}var ws=ys(Ji,Wi,Hi),bs=ys(Ji,Gi,Qi),ks={Enter:ys(es,is,ss,as),"Mod-Enter":rs,Backspace:ws,"Mod-Backspace":ws,"Shift-Backspace":ws,Delete:bs,"Mod-Delete":bs,"Mod-a":ls},xs={"Ctrl-h":ks.Backspace,"Alt-Backspace":ks["Mod-Backspace"],"Ctrl-d":ks.Delete,"Ctrl-Alt-Backspace":ks["Mod-Delete"],"Alt-Delete":ks["Mod-Delete"],"Alt-d":ks["Mod-Delete"],"Ctrl-a":us,"Ctrl-e":fs};for(var Ss in ks)xs[Ss]=ks[Ss];var Ms=("undefined"!=typeof navigator?/Mac|iP(hone|[oa]d)/.test(navigator.platform):!("undefined"==typeof os||!os.platform)&&"darwin"==os.platform())?xs:ks,Cs=Object.freeze({__proto__:null,autoJoin:function(t,e){var n=Array.isArray(e)?function(t){return e.indexOf(t.type.name)>-1}:e;return function(e,r,o){return t(e,r&&gs(r,n),o)}},baseKeymap:Ms,chainCommands:ys,createParagraphNear:is,deleteSelection:Ji,exitCode:rs,joinBackward:Wi,joinDown:Zi,joinForward:Gi,joinUp:Yi,lift:ts,liftEmptyBlock:ss,macBaseKeymap:xs,newlineInCode:es,pcBaseKeymap:ks,selectAll:ls,selectNodeBackward:Hi,selectNodeForward:Qi,selectParentNode:cs,selectTextblockEnd:fs,selectTextblockStart:us,setBlockType:ms,splitBlock:as,splitBlockKeepMarks:function(t,e){return as(t,e&&function(n){var r=t.storedMarks||t.selection.$to.parentOffset&&t.selection.$from.marks();r&&n.ensureMarks(r),e(n)})},toggleMark:vs,wrapIn:ds}),Os=["p",0],Ns=["blockquote",0],Ds=["hr"],Ts=["pre",["code",0]],As=["br"],Es={doc:{content:"block+"},paragraph:{content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:function(){return Os}},blockquote:{content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:function(){return Ns}},horizontal_rule:{group:"block",parseDOM:[{tag:"hr"}],toDOM:function(){return Ds}},heading:{attrs:{level:{default:1}},content:"inline*",group:"block",defining:!0,parseDOM:[{tag:"h1",attrs:{level:1}},{tag:"h2",attrs:{level:2}},{tag:"h3",attrs:{level:3}},{tag:"h4",attrs:{level:4}},{tag:"h5",attrs:{level:5}},{tag:"h6",attrs:{level:6}}],toDOM:function(t){return["h"+t.attrs.level,0]}},code_block:{content:"text*",marks:"",group:"block",code:!0,defining:!0,parseDOM:[{tag:"pre",preserveWhitespace:"full"}],toDOM:function(){return Ts}},text:{group:"inline"},image:{inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(t){return{src:t.getAttribute("src"),title:t.getAttribute("title"),alt:t.getAttribute("alt")}}}],toDOM:function(t){var e=t.attrs;return["img",{src:e.src,alt:e.alt,title:e.title}]}},hard_break:{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:function(){return As}}},Is=["em",0],Rs=["strong",0],zs=["code",0],Ps={link:{attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(t){return{href:t.getAttribute("href"),title:t.getAttribute("title")}}}],toDOM:function(t){var e=t.attrs;return["a",{href:e.href,title:e.title},0]}},em:{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style=italic"}],toDOM:function(){return Is}},strong:{parseDOM:[{tag:"strong"},{tag:"b",getAttrs:function(t){return"normal"!=t.style.fontWeight&&null}},{style:"font-weight",getAttrs:function(t){return/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}}],toDOM:function(){return Rs}},code:{parseDOM:[{tag:"code"}],toDOM:function(){return zs}}},Bs=new tt({nodes:Es,marks:Ps}),_s=Object.freeze({__proto__:null,marks:Ps,nodes:Es,schema:Bs}),Vs=["ol",0],Fs=["ul",0],$s=["li",0],qs={attrs:{order:{default:1}},parseDOM:[{tag:"ol",getAttrs:function(t){return{order:t.hasAttribute("start")?+t.getAttribute("start"):1}}}],toDOM:function(t){return 1==t.attrs.order?Vs:["ol",{start:t.attrs.order},0]}},Ls={parseDOM:[{tag:"ul"}],toDOM:function(){return Fs}},js={parseDOM:[{tag:"li"}],toDOM:function(){return $s},defining:!0};function Js(t,e){var n={};for(var r in t)n[r]=t[r];for(var o in e)n[o]=e[o];return n}function Ws(t,e){return void 0===e&&(e=null),function(n,o){var i=n.selection,s=i.$from,a=i.$to,c=s.blockRange(a),l=!1,h=c;if(!c)return!1;if(c.depth>=2&&s.node(c.depth-1).type.compatibleContent(t)&&0==c.startIndex){if(0==s.index(c.depth-1))return!1;var u=n.doc.resolve(c.start-2);h=new D(u,u,c.depth),c.endIndex<c.parent.childCount&&(c=new D(s,n.doc.resolve(a.end(c.depth)),c.depth)),l=!0}var f=Bt(h,t,e,c);return!!f&&(o&&o(function(t,e,n,o,i){for(var s=r.empty,a=n.length-1;a>=0;a--)s=r.from(n[a].type.create(n[a].attrs,s));t.step(new It(e.start-(o?2:0),e.end,e.start,e.end,new p(s,0,0),n.length,!0));for(var c=0,l=0;l<n.length;l++)n[l].type==i&&(c=l+1);for(var h=n.length-c,u=e.start+n.length-(o?2:0),f=e.parent,d=e.startIndex,m=e.endIndex,v=!0;d<m;d++,v=!1)!v&&Vt(t.doc,u,h)&&(t.split(u,h),u+=2*h),u+=f.child(d).nodeSize;return t}(n.tr,c,f,l,t).scrollIntoView()),!0)}}function Ks(t){return function(e,n){var o=e.selection,i=o.$from,s=o.$to,a=o.node;if(a&&a.isBlock||i.depth<2||!i.sameParent(s))return!1;var c=i.node(-1);if(c.type!=t)return!1;if(0==i.parent.content.size&&i.node(-1).childCount==i.indexAfter(-1)){if(3==i.depth||i.node(-3).type!=t||i.index(-2)!=i.node(-2).childCount-1)return!1;if(n){for(var l=r.empty,h=i.index(-1)?1:i.index(-2)?2:3,u=i.depth-h;u>=i.depth-3;u--)l=r.from(i.node(u).copy(l));var f=i.indexAfter(-1)<i.node(-2).childCount?1:i.indexAfter(-2)<i.node(-3).childCount?2:3;l=l.append(r.from(t.createAndFill()));var d=i.before(i.depth-(h-1)),m=e.tr.replace(d,i.after(-f),new p(l,4-h,0)),v=-1;m.doc.nodesBetween(d,m.doc.content.size,(function(t,e){if(v>-1)return!1;t.isTextblock&&0==t.content.size&&(v=e+1)})),v>-1&&m.setSelection(ce.near(m.doc.resolve(v))),n(m.scrollIntoView())}return!0}var g=s.pos==i.end()?c.contentMatchAt(0).defaultType:null,y=e.tr.delete(i.pos,s.pos),w=g?[null,{type:g}]:void 0;return!!Vt(y.doc,i.pos,2,w)&&(n&&n(y.split(i.pos,2,w).scrollIntoView()),!0)}}function Hs(t){return function(e,n){var o=e.selection,i=o.$from,s=o.$to,a=i.blockRange(s,(function(e){return e.childCount>0&&e.firstChild.type==t}));return!!a&&(!n||(i.node(a.depth-1).type==t?function(t,e,n,o){var i=t.tr,s=o.end,a=o.$to.end(o.depth);s<a&&(i.step(new It(s-1,a,s,a,new p(r.from(n.create(null,o.parent.copy())),1,0),1,!0)),o=new D(i.doc.resolve(o.$from.pos),i.doc.resolve(a),o.depth));var c=Pt(o);if(null==c)return!1;return e(i.lift(o,c).scrollIntoView()),!0}(e,n,t,a):function(t,e,n){for(var o=t.tr,i=n.parent,s=n.end,a=n.endIndex-1,c=n.startIndex;a>c;a--)s-=i.child(a).nodeSize,o.delete(s-1,s+1);var l=o.doc.resolve(n.start),h=l.nodeAfter;if(o.mapping.map(n.end)!=n.start+l.nodeAfter.nodeSize)return!1;var u=0==n.startIndex,f=n.endIndex==i.childCount,d=l.node(-1),m=l.index(-1);if(!d.canReplace(m+(u?0:1),m+1,h.content.append(f?r.empty:r.from(i))))return!1;var v=l.pos,g=v+h.nodeSize;return o.step(new It(v-(u?1:0),g+(f?1:0),v+1,g-1,new p((u?r.empty:r.from(i.copy(r.empty))).append(f?r.empty:r.from(i.copy(r.empty))),u?0:1,f?0:1),u?0:1)),e(o.scrollIntoView()),!0}(e,n,a)))}}function Us(t){return function(e,n){var o=e.selection,i=o.$from,s=o.$to,a=i.blockRange(s,(function(e){return e.childCount>0&&e.firstChild.type==t}));if(!a)return!1;var c=a.startIndex;if(0==c)return!1;var l=a.parent,h=l.child(c-1);if(h.type!=t)return!1;if(n){var u=h.lastChild&&h.lastChild.type==l.type,f=r.from(u?t.create():null),d=new p(r.from(t.create(null,r.from(l.type.create(null,f)))),u?3:1,0),m=a.start,v=a.end;n(e.tr.step(new It(m-(u?3:1),v,m,v,d,1,!0)).scrollIntoView())}return!0}}var Gs=Object.freeze({__proto__:null,addListNodes:function(t,e,n){return t.append({ordered_list:Js(qs,{content:"list_item+",group:n}),bullet_list:Js(Ls,{content:"list_item+",group:n}),list_item:Js(js,{content:e})})},bulletList:Ls,liftListItem:Hs,listItem:js,orderedList:qs,sinkListItem:Us,splitListItem:Ks,wrapInList:Ws});function Qs(t){return void 0===t&&(t={}),new Te({view:function(e){return new Xs(e,t)}})}var Xs=function(t,e){var n=this;this.editorView=t,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.handlers=["dragover","dragend","drop","dragleave"].map((function(e){var r=function(t){n[e](t)};return t.dom.addEventListener(e,r),{name:e,handler:r}}))};Xs.prototype.destroy=function(){var t=this;this.handlers.forEach((function(e){var n=e.name,r=e.handler;return t.editorView.dom.removeEventListener(n,r)}))},Xs.prototype.update=function(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())},Xs.prototype.setCursor=function(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())},Xs.prototype.updateOverlay=function(){var t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){var n=e.nodeBefore,r=e.nodeAfter;if(n||r){var o=this.editorView.nodeDOM(this.cursorPos-(n?n.nodeSize:0)).getBoundingClientRect(),i=n?o.bottom:o.top;n&&r&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:o.left,right:o.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){var s=this.editorView.coordsAtPos(this.cursorPos);t={left:s.left-this.width/2,right:s.left+this.width/2,top:s.top,bottom:s.bottom}}var a,c,l=this.editorView.dom.offsetParent;if(this.element||(this.element=l.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!l||l==document.body&&"static"==getComputedStyle(l).position)a=-pageXOffset,c=-pageYOffset;else{var p=l.getBoundingClientRect();a=p.left-l.scrollLeft,c=p.top-l.scrollTop}this.element.style.left=t.left-a+"px",this.element.style.top=t.top-c+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"},Xs.prototype.scheduleRemoval=function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.setCursor(null)}),t)},Xs.prototype.dragover=function(t){if(this.editorView.editable){var e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY}),n=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside),r=n&&n.type.spec.disableDropCursor,o="function"==typeof r?r(this.editorView,e,t):r;if(e&&!o){var i=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&null==(i=jt(this.editorView.state.doc,i,this.editorView.dragging.slice)))return this.setCursor(null);this.setCursor(i),this.scheduleRemoval(5e3)}}},Xs.prototype.dragend=function(){this.scheduleRemoval(20)},Xs.prototype.drop=function(){this.scheduleRemoval(20)},Xs.prototype.dragleave=function(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)};var Ys=Object.freeze({__proto__:null,dropCursor:Qs}),Zs=function(t){function e(e){t.call(this,e,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));return e.valid(o)?new e(o):t.near(o)},e.prototype.content=function(){return p.empty},e.prototype.eq=function(t){return t instanceof e&&t.head==this.head},e.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}},e.fromJSON=function(t,n){if("number"!=typeof n.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new e(t.resolve(n.pos))},e.prototype.getBookmark=function(){return new ta(this.anchor)},e.valid=function(t){var e=t.parent;if(e.isTextblock||!function(t){for(var e=t.depth;e>=0;e--){var n=t.index(e),r=t.node(e);if(0!=n)for(var o=r.child(n-1);;o=o.lastChild){if(0==o.childCount&&!o.inlineContent||o.isAtom||o.type.spec.isolating)return!0;if(o.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}(t)||!function(t){for(var e=t.depth;e>=0;e--){var n=t.indexAfter(e),r=t.node(e);if(n!=r.childCount)for(var o=r.child(n);;o=o.firstChild){if(0==o.childCount&&!o.inlineContent||o.isAtom||o.type.spec.isolating)return!0;if(o.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}(t))return!1;var n=e.type.spec.allowGapCursor;if(null!=n)return n;var r=e.contentMatchAt(t.index()).defaultType;return r&&r.isTextblock},e.findGapCursorFrom=function(t,n,r){void 0===r&&(r=!1);t:for(;;){if(!r&&e.valid(t))return t;for(var o=t.pos,i=null,s=t.depth;;s--){var a=t.node(s);if(n>0?t.indexAfter(s)<a.childCount:t.index(s)>0){i=a.child(n>0?t.indexAfter(s):t.index(s)-1);break}if(0==s)return null;o+=n;var c=t.doc.resolve(o);if(e.valid(c))return c}for(;;){var l=n>0?i.firstChild:i.lastChild;if(!l){if(i.isAtom&&!i.isText&&!me.isSelectable(i)){t=t.doc.resolve(o+i.nodeSize*n),r=!1;continue t}break}i=l,o+=n;var p=t.doc.resolve(o);if(e.valid(p))return p}return null}},e}(ce);Zs.prototype.visible=!1,Zs.findFrom=Zs.findGapCursorFrom,ce.jsonID("gapcursor",Zs);var ta=function(t){this.pos=t};function ea(){return new Te({props:{decorations:sa,createSelectionBetween:function(t,e,n){return e.pos==n.pos&&Zs.valid(n)?new Zs(n):null},handleClick:oa,handleKeyDown:na,handleDOMEvents:{beforeinput:ia}}})}ta.prototype.map=function(t){return new ta(t.map(this.pos))},ta.prototype.resolve=function(t){var e=t.resolve(this.pos);return Zs.valid(e)?new Zs(e):ce.near(e)};var na=ai({ArrowLeft:ra("horiz",-1),ArrowRight:ra("horiz",1),ArrowUp:ra("vert",-1),ArrowDown:ra("vert",1)});function ra(t,e){var n="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,r,o){var i=t.selection,s=e>0?i.$to:i.$from,a=i.empty;if(i instanceof fe){if(!o.endOfTextblock(n)||0==s.depth)return!1;a=!1,s=t.doc.resolve(e>0?s.after():s.before())}var c=Zs.findGapCursorFrom(s,e,a);return!!c&&(r&&r(t.tr.setSelection(new Zs(c))),!0)}}function oa(t,e,n){if(!t||!t.editable)return!1;var r=t.state.doc.resolve(e);if(!Zs.valid(r))return!1;var o=t.posAtCoords({left:n.clientX,top:n.clientY});return!(o&&o.inside>-1&&me.isSelectable(t.state.doc.nodeAt(o.inside)))&&(t.dispatch(t.state.tr.setSelection(new Zs(r))),!0)}function ia(t,e){if("insertCompositionText"!=e.inputType||!(t.state.selection instanceof Zs))return!1;var n=t.state.selection.$from,o=n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);if(!o)return!1;for(var i=r.empty,s=o.length-1;s>=0;s--)i=r.from(o[s].createAndFill(null,i));var a=t.state.tr.replace(n.pos,n.pos,new p(i,0,0));return a.setSelection(fe.near(a.doc.resolve(n.pos+1))),t.dispatch(a),!1}function sa(t){if(!(t.selection instanceof Zs))return null;var e=document.createElement("div");return e.className="ProseMirror-gapcursor",go.create(t.doc,[uo.widget(t.selection.head,e,{key:"gapcursor"})])}var aa=Object.freeze({__proto__:null,GapCursor:Zs,gapCursor:ea});function ca(){var t=arguments,e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var n=1,r=arguments[1];if(r&&"object"==typeof r&&null==r.nodeType&&!Array.isArray(r)){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=r[o];"string"==typeof i?e.setAttribute(o,i):null!=i&&(e[o]=i)}n++}for(;n<arguments.length;n++)la(e,t[n]);return e}function la(t,e){if("string"==typeof e)t.appendChild(document.createTextNode(e));else if(null==e);else if(null!=e.nodeType)t.appendChild(e);else{if(!Array.isArray(e))throw new RangeError("Unsupported child node: "+e);for(var n=0;n<e.length;n++)la(t,e[n])}}var pa="http://www.w3.org/2000/svg",ha="ProseMirror-icon";function ua(t){var e=document.createElement("div");if(e.className=ha,t.path){var n=t.path,r=t.width,o=t.height,i="pm-icon-"+function(t){for(var e=0,n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n)|0;return e}(n).toString(16);document.getElementById(i)||function(t,e){var n=document.getElementById(ha+"-collection");n||((n=document.createElementNS(pa,"svg")).id=ha+"-collection",n.style.display="none",document.body.insertBefore(n,document.body.firstChild));var r=document.createElementNS(pa,"symbol");r.id=t,r.setAttribute("viewBox","0 0 "+e.width+" "+e.height),r.appendChild(document.createElementNS(pa,"path")).setAttribute("d",e.path),n.appendChild(r)}(i,t);var s=e.appendChild(document.createElementNS(pa,"svg"));s.style.width=r/o+"em",s.appendChild(document.createElementNS(pa,"use")).setAttributeNS("http://www.w3.org/1999/xlink","href",/([^#]*)/.exec(document.location.toString())[1]+"#"+i)}else if(t.dom)e.appendChild(t.dom.cloneNode(!0));else{var a=t.text,c=t.css;e.appendChild(document.createElement("span")).textContent=a||"",c&&(e.firstChild.style.cssText=c)}return e}var fa="ProseMirror-menu",da=function(t){this.spec=t};function ma(t,e){return t._props.translate?t._props.translate(e):e}da.prototype.render=function(t){var e=this.spec,n=e.render?e.render(t):e.icon?ua(e.icon):e.label?ca("div",null,ma(t,e.label)):null;if(!n)throw new RangeError("MenuItem without icon or label property");if(e.title){var r="function"==typeof e.title?e.title(t.state):e.title;n.setAttribute("title",ma(t,r))}return e.class&&n.classList.add(e.class),e.css&&(n.style.cssText+=e.css),n.addEventListener("mousedown",(function(r){r.preventDefault(),n.classList.contains(fa+"-disabled")||e.run(t.state,t.dispatch,t,r)})),{dom:n,update:function(t){if(e.select){var r=e.select(t);if(n.style.display=r?"":"none",!r)return!1}var o=!0;if(e.enable&&(o=e.enable(t)||!1,Ia(n,fa+"-disabled",!o)),e.active){var i=o&&e.active(t)||!1;Ia(n,fa+"-active",i)}return!0}}};var va={time:0,node:null};function ga(t){va.time=Date.now(),va.node=t.target}function ya(t){return Date.now()-100<va.time&&va.node&&t.contains(va.node)}var wa=function(t,e){void 0===e&&(e={}),this.options=e,this.options=e||{},this.content=Array.isArray(t)?t:[t]};function ba(t,e){for(var n=[],r=[],o=0;o<t.length;o++){var i=t[o].render(e),s=i.dom,a=i.update;n.push(ca("div",{class:fa+"-dropdown-item"},s)),r.push(a)}return{dom:n,update:ka(r,n)}}function ka(t,e){return function(n){for(var r=!1,o=0;o<t.length;o++){var i=t[o](n);e[o].style.display=i?"":"none",i&&(r=!0)}return r}}wa.prototype.render=function(t){var e=this,n=ba(this.content,t),r=ca("div",{class:fa+"-dropdown "+(this.options.class||""),style:this.options.css},ma(t,this.options.label||""));this.options.title&&r.setAttribute("title",ma(t,this.options.title));var o=ca("div",{class:fa+"-dropdown-wrap"},r),i=null,s=null,a=function(){i&&i.close()&&(i=null,window.removeEventListener("mousedown",s))};return r.addEventListener("mousedown",(function(t){t.preventDefault(),ga(t),i?a():(i=e.expand(o,n.dom),window.addEventListener("mousedown",s=function(){ya(o)||a()}))})),{dom:o,update:function(t){var e=n.update(t);return o.style.display=e?"":"none",e}}},wa.prototype.expand=function(t,e){var n=ca("div",{class:fa+"-dropdown-menu "+(this.options.class||"")},e),r=!1;return t.appendChild(n),{close:function(){if(!r)return r=!0,t.removeChild(n),!0},node:n}};var xa=function(t,e){void 0===e&&(e={}),this.options=e,this.content=Array.isArray(t)?t:[t]};function Sa(t,e){for(var n=document.createDocumentFragment(),r=[],o=[],i=0;i<e.length;i++){for(var s=e[i],a=[],c=[],l=0;l<s.length;l++){var p=s[l].render(t),h=p.dom,u=p.update,f=ca("span",{class:fa+"item"},h);n.appendChild(f),c.push(f),a.push(u)}a.length&&(r.push(ka(a,c)),i<e.length-1&&o.push(n.appendChild(ca("span",{class:fa+"separator"}))))}return{dom:n,update:function(t){for(var e=!1,n=!1,i=0;i<r.length;i++){var s=r[i](t);i&&(o[i-1].style.display=n&&s?"":"none"),n=s,s&&(e=!0)}return e}}}xa.prototype.render=function(t){var e=ba(this.content,t),n=ca("div",{class:fa+"-submenu-label"},ma(t,this.options.label||"")),r=ca("div",{class:fa+"-submenu-wrap"},n,ca("div",{class:fa+"-submenu"},e.dom)),o=null;return n.addEventListener("mousedown",(function(t){t.preventDefault(),ga(t),Ia(r,fa+"-submenu-wrap-active",!1),o||window.addEventListener("mousedown",o=function(){ya(r)||(r.classList.remove(fa+"-submenu-wrap-active"),window.removeEventListener("mousedown",o),o=null)})})),{dom:r,update:function(t){var n=e.update(t);return r.style.display=n?"":"none",n}}};var Ma={join:{width:800,height:900,path:"M0 75h800v125h-800z M0 825h800v-125h-800z M250 400h100v-100h100v100h100v100h-100v100h-100v-100h-100z"},lift:{width:1024,height:1024,path:"M219 310v329q0 7-5 12t-12 5q-8 0-13-5l-164-164q-5-5-5-13t5-13l164-164q5-5 13-5 7 0 12 5t5 12zM1024 749v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12zM1024 530v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 310v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 91v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12z"},selectParentNode:{text:"⬚",css:"font-weight: bold"},undo:{width:1024,height:1024,path:"M761 1024c113-206 132-520-313-509v253l-384-384 384-384v248c534-13 594 472 313 775z"},redo:{width:1024,height:1024,path:"M576 248v-248l384 384-384 384v-253c-446-10-427 303-313 509-280-303-221-789 313-775z"},strong:{width:805,height:1024,path:"M317 869q42 18 80 18 214 0 214-191 0-65-23-102-15-25-35-42t-38-26-46-14-48-6-54-1q-41 0-57 5 0 30-0 90t-0 90q0 4-0 38t-0 55 2 47 6 38zM309 442q24 4 62 4 46 0 81-7t62-25 42-51 14-81q0-40-16-70t-45-46-61-24-70-8q-28 0-74 7 0 28 2 86t2 86q0 15-0 45t-0 45q0 26 0 39zM0 950l1-53q8-2 48-9t60-15q4-6 7-15t4-19 3-18 1-21 0-19v-37q0-561-12-585-2-4-12-8t-25-6-28-4-27-2-17-1l-2-47q56-1 194-6t213-5q13 0 39 0t38 0q40 0 78 7t73 24 61 40 42 59 16 78q0 29-9 54t-22 41-36 32-41 25-48 22q88 20 146 76t58 141q0 57-20 102t-53 74-78 48-93 27-100 8q-25 0-75-1t-75-1q-60 0-175 6t-132 6z"},em:{width:585,height:1024,path:"M0 949l9-48q3-1 46-12t63-21q16-20 23-57 0-4 35-165t65-310 29-169v-14q-13-7-31-10t-39-4-33-3l10-58q18 1 68 3t85 4 68 1q27 0 56-1t69-4 56-3q-2 22-10 50-17 5-58 16t-62 19q-4 10-8 24t-5 22-4 26-3 24q-15 84-50 239t-44 203q-1 5-7 33t-11 51-9 47-3 32l0 10q9 2 105 17-1 25-9 56-6 0-18 0t-18 0q-16 0-49-5t-49-5q-78-1-117-1-29 0-81 5t-69 6z"},code:{width:896,height:1024,path:"M608 192l-96 96 224 224-224 224 96 96 288-320-288-320zM288 192l-288 320 288 320 96-96-224-224 224-224-96-96z"},link:{width:951,height:1024,path:"M832 694q0-22-16-38l-118-118q-16-16-38-16-24 0-41 18 1 1 10 10t12 12 8 10 7 14 2 15q0 22-16 38t-38 16q-8 0-15-2t-14-7-10-8-12-12-10-10q-18 17-18 41 0 22 16 38l117 118q15 15 38 15 22 0 38-14l84-83q16-16 16-38zM430 292q0-22-16-38l-117-118q-16-16-38-16-22 0-38 15l-84 83q-16 16-16 38 0 22 16 38l118 118q15 15 38 15 24 0 41-17-1-1-10-10t-12-12-8-10-7-14-2-15q0-22 16-38t38-16q8 0 15 2t14 7 10 8 12 12 10 10q18-17 18-41zM941 694q0 68-48 116l-84 83q-47 47-116 47-69 0-116-48l-117-118q-47-47-47-116 0-70 50-119l-50-50q-49 50-118 50-68 0-116-48l-118-118q-48-48-48-116t48-116l84-83q47-47 116-47 69 0 116 48l117 118q47 47 47 116 0 70-50 119l50 50q49-50 118-50 68 0 116 48l118 118q48 48 48 116z"},bulletList:{width:768,height:896,path:"M0 512h128v-128h-128v128zM0 256h128v-128h-128v128zM0 768h128v-128h-128v128zM256 512h512v-128h-512v128zM256 256h512v-128h-512v128zM256 768h512v-128h-512v128z"},orderedList:{width:768,height:896,path:"M320 512h448v-128h-448v128zM320 768h448v-128h-448v128zM320 128v128h448v-128h-448zM79 384h78v-256h-36l-85 23v50l43-2v185zM189 590c0-36-12-78-96-78-33 0-64 6-83 16l1 66c21-10 42-15 67-15s32 11 32 28c0 26-30 58-110 112v50h192v-67l-91 2c49-30 87-66 87-113l1-1z"},blockquote:{width:640,height:896,path:"M0 448v256h256v-256h-128c0 0 0-128 128-128v-128c0 0-256 0-256 256zM640 320v-128c0 0-256 0-256 256v256h256v-256h-128c0 0 0-128 128-128z"}},Ca=new da({title:"Join with above block",run:Yi,select:function(t){return Yi(t)},icon:Ma.join}),Oa=new da({title:"Lift out of enclosing block",run:ts,select:function(t){return ts(t)},icon:Ma.lift}),Na=new da({title:"Select parent node",run:cs,select:function(t){return cs(t)},icon:Ma.selectParentNode}),Da=new da({title:"Undo last change",run:qi,enable:function(t){return qi(t)},icon:Ma.undo}),Ta=new da({title:"Redo last undone change",run:Li,enable:function(t){return Li(t)},icon:Ma.redo});function Aa(t,e){var n={run:function(n,r){return ds(t,e.attrs)(n,r)},select:function(n){return ds(t,e.attrs)(n)}};for(var r in e)n[r]=e[r];return new da(n)}function Ea(t,e){var n=ms(t,e.attrs),r={run:n,enable:function(t){return n(t)},active:function(n){var r=n.selection,o=r.$from,i=r.to,s=r.node;return s?s.hasMarkup(t,e.attrs):i<=o.end()&&o.parent.hasMarkup(t,e.attrs)}};for(var o in e)r[o]=e[o];return new da(r)}function Ia(t,e,n){n?t.classList.add(e):t.classList.remove(e)}var Ra="ProseMirror-menubar";function za(t){return new Te({view:function(e){return new Pa(e,t)}})}var Pa=function(t,e){var n=this;this.editorView=t,this.options=e,this.spacer=null,this.maxHeight=0,this.widthForMaxHeight=0,this.floating=!1,this.scrollHandler=null,this.wrapper=ca("div",{class:Ra+"-wrapper"}),this.menu=this.wrapper.appendChild(ca("div",{class:Ra})),this.menu.className=Ra,t.dom.parentNode&&t.dom.parentNode.replaceChild(this.wrapper,t.dom),this.wrapper.appendChild(t.dom);var r=Sa(this.editorView,this.options.content),o=r.dom,i=r.update;if(this.contentUpdate=i,this.menu.appendChild(o),this.update(),e.floating&&!function(){if("undefined"==typeof navigator)return!1;var t=navigator.userAgent;return!/Edge\/\d/.test(t)&&/AppleWebKit/.test(t)&&/Mobile\/\w+/.test(t)}()){this.updateFloat();var s=function(t){for(var e=[window],n=t.parentNode;n;n=n.parentNode)e.push(n);return e}(this.wrapper);this.scrollHandler=function(t){var e=n.editorView.root;(e.body||e).contains(n.wrapper)?n.updateFloat(t.target.getBoundingClientRect?t.target:void 0):s.forEach((function(t){return t.removeEventListener("scroll",n.scrollHandler)}))},s.forEach((function(t){return t.addEventListener("scroll",n.scrollHandler)}))}};Pa.prototype.update=function(){this.contentUpdate(this.editorView.state),this.floating?this.updateScrollCursor():(this.menu.offsetWidth!=this.widthForMaxHeight&&(this.widthForMaxHeight=this.menu.offsetWidth,this.maxHeight=0),this.menu.offsetHeight>this.maxHeight&&(this.maxHeight=this.menu.offsetHeight,this.menu.style.minHeight=this.maxHeight+"px"))},Pa.prototype.updateScrollCursor=function(){var t=this.editorView.root.getSelection();if(t.focusNode){var e=t.getRangeAt(0).getClientRects(),n=e[function(t){if(t.anchorNode==t.focusNode)return t.anchorOffset>t.focusOffset;return t.anchorNode.compareDocumentPosition(t.focusNode)==Node.DOCUMENT_POSITION_FOLLOWING}(t)?0:e.length-1];if(n){var r=this.menu.getBoundingClientRect();if(n.top<r.bottom&&n.bottom>r.top){var o=function(t){for(var e=t.parentNode;e;e=e.parentNode)if(e.scrollHeight>e.clientHeight)return e}(this.wrapper);o&&(o.scrollTop-=r.bottom-n.top)}}}},Pa.prototype.updateFloat=function(t){var e=this.wrapper,n=e.getBoundingClientRect(),r=t?Math.max(0,t.getBoundingClientRect().top):0;if(this.floating)if(n.top>=r||n.bottom<this.menu.offsetHeight+10)this.floating=!1,this.menu.style.position=this.menu.style.left=this.menu.style.top=this.menu.style.width="",this.menu.style.display="",this.spacer.parentNode.removeChild(this.spacer),this.spacer=null;else{var o=(e.offsetWidth-e.clientWidth)/2;this.menu.style.left=n.left+o+"px",this.menu.style.display=n.top>window.innerHeight?"none":"",t&&(this.menu.style.top=r+"px")}else if(n.top<r&&n.bottom>=this.menu.offsetHeight+10){this.floating=!0;var i=this.menu.getBoundingClientRect();this.menu.style.left=i.left+"px",this.menu.style.width=i.width+"px",t&&(this.menu.style.top=r+"px"),this.menu.style.position="fixed",this.spacer=ca("div",{class:Ra+"-spacer",style:"height: "+i.height+"px"}),e.insertBefore(this.spacer,this.menu)}},Pa.prototype.destroy=function(){this.wrapper.parentNode&&this.wrapper.parentNode.replaceChild(this.editorView.dom,this.wrapper)};var Ba=Object.freeze({__proto__:null,Dropdown:wa,DropdownSubmenu:xa,MenuItem:da,blockTypeItem:Ea,icons:Ma,joinUpItem:Ca,liftItem:Oa,menuBar:za,redoItem:Ta,renderGrouped:Sa,selectParentNodeItem:Na,undoItem:Da,wrapItem:Aa}),_a="ProseMirror-prompt";function Va(t){var e=document.body.appendChild(document.createElement("div"));e.className=_a;var n=function(t){e.contains(t.target)||r()};setTimeout((function(){return window.addEventListener("mousedown",n)}),50);var r=function(){window.removeEventListener("mousedown",n),e.parentNode&&e.parentNode.removeChild(e)},o=[];for(var i in t.fields)o.push(t.fields[i].render());var s=document.createElement("button");s.type="submit",s.className=_a+"-submit",s.textContent="OK";var a=document.createElement("button");a.type="button",a.className=_a+"-cancel",a.textContent="Cancel",a.addEventListener("click",r);var c=e.appendChild(document.createElement("form"));t.title&&(c.appendChild(document.createElement("h5")).textContent=t.title),o.forEach((function(t){c.appendChild(document.createElement("div")).appendChild(t)}));var l=c.appendChild(document.createElement("div"));l.className=_a+"-buttons",l.appendChild(s),l.appendChild(document.createTextNode(" ")),l.appendChild(a);var p=e.getBoundingClientRect();e.style.top=(window.innerHeight-p.height)/2+"px",e.style.left=(window.innerWidth-p.width)/2+"px";var h=function(){var e=function(t,e){var n=Object.create(null),r=0;for(var o in t){var i=t[o],s=e[r++],a=i.read(s),c=i.validate(a);if(c)return Fa(s,c),null;n[o]=i.clean(a)}return n}(t.fields,o);e&&(r(),t.callback(e))};c.addEventListener("submit",(function(t){t.preventDefault(),h()})),c.addEventListener("keydown",(function(t){27==t.keyCode?(t.preventDefault(),r()):13!=t.keyCode||t.ctrlKey||t.metaKey||t.shiftKey?9==t.keyCode&&window.setTimeout((function(){e.contains(document.activeElement)||r()}),500):(t.preventDefault(),h())}));var u=c.elements[0];u&&u.focus()}function Fa(t,e){var n=t.parentNode,r=n.appendChild(document.createElement("div"));r.style.left=t.offsetLeft+t.offsetWidth+2+"px",r.style.top=t.offsetTop-5+"px",r.className="ProseMirror-invalid",r.textContent=e,setTimeout((function(){return n.removeChild(r)}),1500)}var $a=function(t){this.options=t};$a.prototype.read=function(t){return t.value},$a.prototype.validateType=function(t){return null},$a.prototype.validate=function(t){return!t&&this.options.required?"Required field":this.validateType(t)||(this.options.validate?this.options.validate(t):null)},$a.prototype.clean=function(t){return this.options.clean?this.options.clean(t):t};var qa=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=document.createElement("input");return t.type="text",t.placeholder=this.options.label,t.value=this.options.value||"",t.autocomplete="off",t},e}($a);function La(t,e){for(var n=t.selection.$from,r=n.depth;r>=0;r--){var o=n.index(r);if(n.node(r).canReplaceWith(o,o,e))return!0}return!1}function ja(t,e){var n={label:e.title,run:t};for(var r in e)n[r]=e[r];return e.enable||e.select||(n[e.enable?"enable":"select"]=function(e){return t(e)}),new da(n)}function Ja(t,e){var n=t.selection,r=n.from,o=n.$from,i=n.to;return n.empty?!!e.isInSet(t.storedMarks||o.marks()):t.doc.rangeHasMark(r,i,e)}function Wa(t,e){var n={active:function(e){return Ja(e,t)}};for(var r in e)n[r]=e[r];return ja(vs(t),n)}function Ka(t,e){return ja(Ws(t,e.attrs),e)}function Ha(t){var e,n,r,o,i={};if((e=t.marks.strong)&&(i.toggleStrong=Wa(e,{title:"Toggle strong style",icon:Ma.strong})),(e=t.marks.em)&&(i.toggleEm=Wa(e,{title:"Toggle emphasis",icon:Ma.em})),(e=t.marks.code)&&(i.toggleCode=Wa(e,{title:"Toggle code font",icon:Ma.code})),(e=t.marks.link)&&(i.toggleLink=(n=e,new da({title:"Add or remove link",icon:Ma.link,active:function(t){return Ja(t,n)},enable:function(t){return!t.selection.empty},run:function(t,e,r){if(Ja(t,n))return vs(n)(t,e),!0;Va({title:"Create a link",fields:{href:new qa({label:"Link target",required:!0}),title:new qa({label:"Title"})},callback:function(t){vs(n,t)(r.state,r.dispatch),r.focus()}})}}))),(r=t.nodes.image)&&(i.insertImage=(o=r,new da({title:"Insert image",label:"Image",enable:function(t){return La(t,o)},run:function(t,e,n){var r=t.selection,i=r.from,s=r.to,a=null;t.selection instanceof me&&t.selection.node.type==o&&(a=t.selection.node.attrs),Va({title:"Insert image",fields:{src:new qa({label:"Location",required:!0,value:a&&a.src}),title:new qa({label:"Title",value:a&&a.title}),alt:new qa({label:"Description",value:a?a.alt:t.doc.textBetween(i,s," ")})},callback:function(t){n.dispatch(n.state.tr.replaceSelectionWith(o.createAndFill(t))),n.focus()}})}}))),(r=t.nodes.bullet_list)&&(i.wrapBulletList=Ka(r,{title:"Wrap in bullet list",icon:Ma.bulletList})),(r=t.nodes.ordered_list)&&(i.wrapOrderedList=Ka(r,{title:"Wrap in ordered list",icon:Ma.orderedList})),(r=t.nodes.blockquote)&&(i.wrapBlockQuote=Aa(r,{title:"Wrap in block quote",icon:Ma.blockquote})),(r=t.nodes.paragraph)&&(i.makeParagraph=Ea(r,{title:"Change to paragraph",label:"Plain"})),(r=t.nodes.code_block)&&(i.makeCodeBlock=Ea(r,{title:"Change to code block",label:"Code"})),r=t.nodes.heading)for(var s=1;s<=10;s++)i["makeHead"+s]=Ea(r,{title:"Change to heading "+s,label:"Level "+s,attrs:{level:s}});if(r=t.nodes.horizontal_rule){var a=r;i.insertHorizontalRule=new da({title:"Insert horizontal rule",label:"Horizontal rule",enable:function(t){return La(t,a)},run:function(t,e){e(t.tr.replaceSelectionWith(a.create()))}})}var c=function(t){return t.filter((function(t){return t}))};return i.insertMenu=new wa(c([i.insertImage,i.insertHorizontalRule]),{label:"Insert"}),i.typeMenu=new wa(c([i.makeParagraph,i.makeCodeBlock,i.makeHead1&&new xa(c([i.makeHead1,i.makeHead2,i.makeHead3,i.makeHead4,i.makeHead5,i.makeHead6]),{label:"Heading"})]),{label:"Type..."}),i.inlineMenu=[c([i.toggleStrong,i.toggleEm,i.toggleCode,i.toggleLink])],i.blockMenu=[c([i.wrapBulletList,i.wrapOrderedList,i.wrapBlockQuote,Ca,Oa,Na])],i.fullMenu=i.inlineMenu.concat([[i.insertMenu,i.typeMenu]],[[Da,Ta]],i.blockMenu),i}var Ua="undefined"!=typeof navigator&&/Mac|iP(hone|[oa]d)/.test(navigator.platform);function Ga(t,e){var n,r={};function o(t,n){if(e){var o=e[t];if(!1===o)return;o&&(t=o)}r[t]=n}if(o("Mod-z",qi),o("Shift-Mod-z",Li),o("Backspace",ui),Ua||o("Mod-y",Li),o("Alt-ArrowUp",Yi),o("Alt-ArrowDown",Zi),o("Mod-BracketLeft",ts),o("Escape",cs),(n=t.marks.strong)&&(o("Mod-b",vs(n)),o("Mod-B",vs(n))),(n=t.marks.em)&&(o("Mod-i",vs(n)),o("Mod-I",vs(n))),(n=t.marks.code)&&o("Mod-`",vs(n)),(n=t.nodes.bullet_list)&&o("Shift-Ctrl-8",Ws(n)),(n=t.nodes.ordered_list)&&o("Shift-Ctrl-9",Ws(n)),(n=t.nodes.blockquote)&&o("Ctrl->",ds(n)),n=t.nodes.hard_break){var i=n,s=ys(rs,(function(t,e){return e&&e(t.tr.replaceSelectionWith(i.create()).scrollIntoView()),!0}));o("Mod-Enter",s),o("Shift-Enter",s),Ua&&o("Ctrl-Enter",s)}if((n=t.nodes.list_item)&&(o("Enter",Ks(n)),o("Mod-[",Hs(n)),o("Mod-]",Us(n))),(n=t.nodes.paragraph)&&o("Shift-Ctrl-0",ms(n)),(n=t.nodes.code_block)&&o("Shift-Ctrl-\\",ms(n)),n=t.nodes.heading)for(var a=1;a<=6;a++)o("Shift-Ctrl-"+a,ms(n,{level:a}));if(n=t.nodes.horizontal_rule){var c=n;o("Mod-_",(function(t,e){return e&&e(t.tr.replaceSelectionWith(c.create()).scrollIntoView()),!0}))}return r}function Qa(t){var e,n=wi.concat(di,fi);return(e=t.nodes.blockquote)&&n.push(bi(/^\s*>\s$/,e)),(e=t.nodes.ordered_list)&&n.push(function(t){return bi(/^(\d+)\.\s$/,t,(function(t){return{order:+t[1]}}),(function(t,e){return e.childCount+e.attrs.order==+t[1]}))}(e)),(e=t.nodes.bullet_list)&&n.push(function(t){return bi(/^\s*([-+*])\s$/,t)}(e)),(e=t.nodes.code_block)&&n.push(function(t){return ki(/^```$/,t)}(e)),(e=t.nodes.heading)&&n.push(function(t,e){return ki(new RegExp("^(#{1,"+e+"})\\s$"),t,(function(t){return{level:t[1].length}}))}(e,6)),pi({rules:n})}var Xa=Object.freeze({__proto__:null,buildInputRules:Qa,buildKeymap:Ga,buildMenuItems:Ha,exampleSetup:function(t){var e=[Qa(t.schema),si(Ga(t.schema,t.mapKeys)),si(Ms),Qs(),ea()];return!1!==t.menuBar&&e.push(za({floating:!1!==t.floatingMenu,content:t.menuContent||Ha(t.schema).fullMenu})),!1!==t.history&&e.push($i()),e.concat(new Te({props:{attributes:{class:"ProseMirror-example-setup-style"}}}))}});window.PM={model:vt,transform:se,state:Re,view:Uo,keymap:ci,inputrules:xi,history:ji,commands:Cs,schema_basic:_s,schema_list:Gs,dropcursor:Ys,menu:Ba,example_setup:Xa,gapcursor:aa}}();

