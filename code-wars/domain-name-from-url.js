//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
    return url.replace(/((http){1}(s)?(:\/\/){1})?(www.)?/g, "").replace(/(\.)[A-Za-z\/-\d]*/g, "")
}


console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");