export const groups={vowels:'അ ആ ഇ ഈ ഉ ഊ ഋ ൠ ഌ ൡ എ ഏ ഐ ഒ ഓ ഔ',consonants:'ക ഖ ഗ ഘ ങ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന പ ഫ ബ ഭ മ യ ര ല വ ശ ഷ സ ഹ ള ഴ റ',signs:'ാ ി ീ ു ൂ ൃ ൄ ൢ ൣ െ േ ൈ ൊ ോ ൌ ്',chillu:'ൺ ൻ ർ ൽ ൾ ൿ',other:'ം ഃ',conjuncts:'ക്ക ങ്ങ ച്ച ഞ്ഞ ട്ട ണ്ണ ത്ത ന്ത ന്ന പ്പ മ്മ യ്യ ല്ല വ്വ ശ്ശ സ്സ ള്ള റ്റ ങ്ക ഞ്ച ണ്ട ന്ദ മ്പ ക്ഷ ജ്ഞ ശ്ര ത്ര ക്ര പ്ര ഗ്ര' };
export const validLetters=new Set(Object.values(groups).join(' ').split(' '));
export const isSign=letter=>(groups.signs+' '+groups.other).split(' ').includes(letter);
export function composedWord(tokens){const signs=new Set(groups.signs.split(' ').filter(s=>s!=='്'));let pending='',word='';for(const token of tokens){if(!word&&signs.has(token)){pending+=token;continue}word+=token;if(pending){word+=pending;pending=''}}return (word+pending).normalize('NFC')}
export function moveTile(letters,index,target){const result=[...letters];const [letter]=result.splice(index,1);result.splice(target>index?target-1:target,0,letter);return result}
