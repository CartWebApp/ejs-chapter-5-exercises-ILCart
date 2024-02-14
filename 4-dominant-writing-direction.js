require('./includes/scripts.js') // include the scripts used by the chapter

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scriptCount = countBy(text, char => {
    return characterScript(char.codePointAt(0));
  }).filter(curscript => curscript != null);
  if (scriptCount.length <= 0) return "ltr";
  scriptCount.sort((a, b) => { return b.count - a.count });
  return scriptCount[0].name.direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl