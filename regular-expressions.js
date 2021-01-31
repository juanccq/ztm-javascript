const text = '<p>asdfasdfas</p> one two <div><i>adsfasdfa</i></div> another text <i>cursiva</i>'
const pattern = /<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/g;
const onlyI = /<i\s*.*>\s*.*<\/i>/g; // This not work well
const found = text.match( pattern );

console.log('only i tag ', text.match(onlyI));
console.log( pattern.test( text ) );

console.log(found);

