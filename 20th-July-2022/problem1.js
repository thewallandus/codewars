/*

FIRST 5kyu:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// P: URL as a string
// R: just the domain name before .com and after // and returns as a string
// E: url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// P: pseudo-code

function domainName(url){
    
    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];	
    let domain = sourceString.split(".")[0];
    return domain;

}