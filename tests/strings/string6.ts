var matched = 0;
var count = 0;
function print(text, pos, expect) {
    count++;
    if (pos != expect)
        console.log(text, " -> FAIL, returned ", pos, ", expected ", expect);
    else
        matched++;
    //     console.log(text, " -> PASS, returned ", pos);
}

print("\"nnda\".search(/n*.a/)", "nnda".search(/n*.a/),0);
print("\"nna\".search(/n*a/)", "nna".search(/n*a/),0);
print("\"a\".search(/n*a/)", "a".search(/n*a/),0);
print("\"a\".search(/n.*a/)", "a".search(/n.*a/),-1);
print("\"nda\".search(/n.*a/)", "nda".search(/n.*a/),0);
print("\"naa\".search(/n.*a/)", "naa".search(/n.*a/),0);
print("\"ana\".search(/n.*a/)", "ana".search(/n.*a/),1);
print("\"nddna\".search(/n.a/)", "nddna".search(/n.a/),-1);
print("\"nnada\".search(/n*a*d/)", "nnada".search(/n*a*d/),0);
print("\"naaada\".search(/n*a*d/)", "naaada".search(/n*a*d/),0);
print("\"d\".search(/n*a*d/)", "d".search(/n*a*d/),0);
print("\"x\".search(/n*a*d/)", "x".search(/n*a*d/),-1);
print("\"nnaed\".search(/nn*a*d/)", "nnaed".search(/nn*a*d/),-1);
print("\"abcdefff23334\".search(/.*a.*ff*23335*4/)", "abcdefff23334".search(/.*a.*ff*23335*4/),0);
print("\"abcdefff23334\".search(/ff*23335*/)", "abcdefff23334".search(/ff*23335*/),5);
print("\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxy\".search(/(x+x+)+y/)", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxy".search(/(x+x+)+y/),0);
print("\"acb\".search(/a.b/)", "acb".search(/a.b/),0);
print("\"abc\".search(/abc/)", "abc".search(/abc/),0);
print("\"xbc\".search(/abc/)", "xbc".search(/abc/),-1);
print("\"axc\".search(/abc/)", "axc".search(/abc/),-1);
print("\"abx\".search(/abc/)", "abx".search(/abc/),-1);
print("\"xabcy\".search(/abc/)", "xabcy".search(/abc/),1);
print("\"ababc\".search(/abc/)", "ababc".search(/abc/),2);
print("\"abc\".search(/ab*c/)", "abc".search(/ab*c/),0);
print("\"abc\".search(/ab*bc/)", "abc".search(/ab*bc/),0);
print("\"abbc\".search(/ab*bc/)", "abbc".search(/ab*bc/),0);
print("\"abbbbc\".search(/ab*bc/)", "abbbbc".search(/ab*bc/),0);
print("\"abbc\".search(/ab+bc/)", "abbc".search(/ab+bc/),0);
print("\"abc\".search(/ab+bc/)", "abc".search(/ab+bc/),-1);
print("\"abq\".search(/ab+bc/)", "abq".search(/ab+bc/),-1);
print("\"abbbbc\".search(/ab+bc/)", "abbbbc".search(/ab+bc/),0);
print("\"abbc\".search(/ab?bc/)", "abbc".search(/ab?bc/),0);
print("\"abc\".search(/ab?bc/)", "abc".search(/ab?bc/),0);
print("\"abbbbc\".search(/ab?bc/)", "abbbbc".search(/ab?bc/),-1);
print("\"abc\".search(/ab?c/)", "abc".search(/ab?c/),0);
print("\"abc\".search(/^abc$/)", "abc".search(/^abc$/),0);
print("\"abcc\".search(/^abc$/)", "abcc".search(/^abc$/),-1);
print("\"abcc\".search(/^abc/)", "abcc".search(/^abc/),0);
print("\"aabc\".search(/^abc$/)", "aabc".search(/^abc$/),-1);
print("\"aabc\".search(/abc$/)", "aabc".search(/abc$/),1);
print("\"ababcabc\".search(/abc$/)", "ababcabc".search(/abc$/),5);
print("\"abc\".search(/^/)", "abc".search(/^/),0);
print("\"abc\".search(/$/)", "abc".search(/$/),3);
print("\"abc\".search(/a.c/)", "abc".search(/a.c/),0);
print("\"axc\".search(/a.c/)", "axc".search(/a.c/),0);
print("\"axyzc\".search(/a.*c/)", "axyzc".search(/a.*c/),0);
print("\"axyzd\".search(/a.*c/)", "axyzd".search(/a.*c/),-1);
print("\"abc\".search(/a[bc]d/)", "abc".search(/a[bc]d/),-1);
print("\"abd\".search(/a[bc]d/)", "abd".search(/a[bc]d/),0);
print("\"abd\".search(/a[b-d]e/)", "abd".search(/a[b-d]e/),-1);
print("\"ace\".search(/a[b-d]e/)", "ace".search(/a[b-d]e/),0);
print("\"aac\".search(/a[b-d]/)", "aac".search(/a[b-d]/),1);
print("\"a-\".search(/a[-b]/)", "a-".search(/a[-b]/),0);
print("\"a-\".search(/a[\\-b]/)", "a-".search(/a[\-b]/),0);
print("\"a]\".search(/a]/)", "a]".search(/a]/),0);
// print("\"a]b\".search(/a[]]b/)", "a]b".search(/a[]]b/),-1);
print("\"aed\".search(/a[^bc]d/)", "aed".search(/a[^bc]d/),0);
print("\"abd\".search(/a[^bc]d/)", "abd".search(/a[^bc]d/),-1);
print("\"adc\".search(/a[^-b]c/)", "adc".search(/a[^-b]c/),0);
print("\"a-c\".search(/a[^-b]c/)", "a-c".search(/a[^-b]c/),-1);
print("\"a]c\".search(/a[^]b]c/)", "a]c".search(/a[^]b]c/),-1);
print("\"adc\".search(/a[^]b]c/)", "adc".search(/a[^]b]c/),-1);
print("\"abc\".search(/ab|cd/)", "abc".search(/ab|cd/),0);
print("\"abcd\".search(/ab|cd/)", "abcd".search(/ab|cd/),0);
print("\"def\".search(/()ef/)", "def".search(/()ef/),1);
print("\"b\".search(/$b/)", "b".search(/$b/),-1);
print("\"a(b\".search(/a\\(b/)", "a(b".search(/a\(b/),0);
print("\"ab\".search(/a\\(*b/)", "ab".search(/a\(*b/),0);
print("\"a((b\".search(/a\\(*b/)", "a((b".search(/a\(*b/),0);
print("\"a\\b\".search(/a\\\\b/)", "a\\b".search(/a\\b/),0);
print("\"abc\".search(/((a))/)", "abc".search(/((a))/),0);
print("\"abc\".search(/(a)b(c)/)", "abc".search(/(a)b(c)/),0);
print("\"aabbabc\".search(/a+b+c/)", "aabbabc".search(/a+b+c/),4);
print("\"ab\".search(/(a+|b)*/)", "ab".search(/(a+|b)*/),0);
print("\"ab\".search(/(a+|b)+/)", "ab".search(/(a+|b)+/),0);
print("\"ab\".search(/(a+|b)?/)", "ab".search(/(a+|b)?/),0);
print("\"cde\".search(/[^ab]*/)", "cde".search(/[^ab]*/),0);
print("\"\".search(/abc/)", "".search(/abc/),-1);
print("\"\".search(/a*/)", "".search(/a*/),0);
print("\"e\".search(/a|b|c|d|e/)", "e".search(/a|b|c|d|e/),0);
print("\"ef\".search(/(a|b|c|d|e)f/)", "ef".search(/(a|b|c|d|e)f/),0);
print("\"abcdefg\".search(/abcd*efg/)", "abcdefg".search(/abcd*efg/),0);
print("\"xabyabbbz\".search(/ab*/)", "xabyabbbz".search(/ab*/),1);
print("\"xayabbbz\".search(/ab*/)", "xayabbbz".search(/ab*/),1);
print("\"abcde\".search(/(ab|cd)e/)", "abcde".search(/(ab|cd)e/),2);
print("\"hij\".search(/[abhgefdc]ij/)", "hij".search(/[abhgefdc]ij/),0);
print("\"abcde\".search(/^(ab|cd)e/)", "abcde".search(/^(ab|cd)e/),-1);
print("\"abcdef\".search(/(abc|)ef/)", "abcdef".search(/(abc|)ef/),4);
print("\"abcd\".search(/(a|b)c*d/)", "abcd".search(/(a|b)c*d/),1);
print("\"abc\".search(/(ab|ab*)bc/)", "abc".search(/(ab|ab*)bc/),0);
print("\"abc\".search(/a([bc]*)c*/)", "abc".search(/a([bc]*)c*/),0);
print("\"abcd\".search(/a([bc]*)(c*d)/)", "abcd".search(/a([bc]*)(c*d)/),0);
print("\"abcd\".search(/a([bc]+)(c*d)/)", "abcd".search(/a([bc]+)(c*d)/),0);
print("\"abcd\".search(/a([bc]*)(c+d)/)", "abcd".search(/a([bc]*)(c+d)/),0);
print("\"adcdcde\".search(/a[bcd]*dcdcde/)", "adcdcde".search(/a[bcd]*dcdcde/),0);
print("\"adcdcde\".search(/a[bcd]+dcdcde/)", "adcdcde".search(/a[bcd]+dcdcde/),-1);
print("\"abc\".search(/(ab|a)b*c/)", "abc".search(/(ab|a)b*c/),0);
print("\"abcd\".search(/((a)(b)c)(d)/)", "abcd".search(/((a)(b)c)(d)/),0);
print("\"alpha\".search(/[a-zA-Z_][a-zA-Z0-9_]*/)", "alpha".search(/[a-zA-Z_][a-zA-Z0-9_]*/),0);
print("\"abh\".search(/^a(bc+|b[eh])g|.h$/)", "abh".search(/^a(bc+|b[eh])g|.h$/),1);
print("\"effgz\".search(/(bc+d$|ef*g.|h?i(j|k))/)", "effgz".search(/(bc+d$|ef*g.|h?i(j|k))/),0);
print("\"ij\".search(/(bc+d$|ef*g.|h?i(j|k))/)", "ij".search(/(bc+d$|ef*g.|h?i(j|k))/),0);
print("\"effg\".search(/(bc+d$|ef*g.|h?i(j|k))/)", "effg".search(/(bc+d$|ef*g.|h?i(j|k))/),-1);
print("\"bcdd\".search(/(bc+d$|ef*g.|h?i(j|k))/)", "bcdd".search(/(bc+d$|ef*g.|h?i(j|k))/),-1);
print("\"reffgz\".search(/(bc+d$|ef*g.|h?i(j|k))/)", "reffgz".search(/(bc+d$|ef*g.|h?i(j|k))/),1);
print("\"a\".search(/(((((((((a)))))))))/)", "a".search(/(((((((((a)))))))))/),0);
print("\"uh-uh\".search(/multiple words of text/)", "uh-uh".search(/multiple words of text/),-1);
print("\"multiple words, yeah\".search(/multiple words/)", "multiple words, yeah".search(/multiple words/),0);
print("\"abcde\".search(/(.*)c(.*)/)", "abcde".search(/(.*)c(.*)/),0);
print("\"(a, b)\".search(/\\((.*); (.*)\\)/)", "(a, b)".search(/\((.*); (.*)\)/),-1);
print("\"ab\".search(/[k]/)", "ab".search(/[k]/),-1);
print("\"ac\".search(/a[-]?c/)", "ac".search(/a[-]?c/),0);
print("\"ab\".search(/(a)(b)c|ab/)", "ab".search(/(a)(b)c|ab/),0);
print("\"aaax\".search(/(a)+x/)", "aaax".search(/(a)+x/),0);
print("\"aacx\".search(/([ac])+x/)", "aacx".search(/([ac])+x/),0);
print("\"d:msgs/tdir/sub1/trial/away.cpp\".search(/([^/]*/)*sub1//)", "d:msgs/tdir/sub1/trial/away.cpp".search(/([^\/]*\/)*sub1\//),0);
print("\"track1.title:TBlah blah blah\".search(/([^.]*)\\.([^:]*):[T ]+(.*)/)", "track1.title:TBlah blah blah".search(/([^.]*)\.([^:]*):[T ]+(.*)/),0);
print("\"abNNxyzN\".search(/([^N]*N)+/)", "abNNxyzN".search(/([^N]*N)+/),0);
print("\"abNNxyz\".search(/([^N]*N)+/)", "abNNxyz".search(/([^N]*N)+/),0);
print("\"abcx\".search(/([abc]*)x/)", "abcx".search(/([abc]*)x/),0);
print("\"abc\".search(/([abc]*)x/)", "abc".search(/([abc]*)x/),-1);
print("\"abcx\".search(/([xyz]*)x/)", "abcx".search(/([xyz]*)x/),3);
print("\"aac\".search(/(a)+b|aac/)", "aac".search(/(a)+b|aac/),0);

console.log("Passed: ", matched, "/", count);