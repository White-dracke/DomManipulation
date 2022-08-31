function traverse(node, result) {
  if (node === null) return;
  if (node.tagName === SELECTOR) result.push(node);
  for (var child of node.children) traverse(child, result);
}

function myQuerySelector1() {
  const result = [];
  traverse(document.documentElement, result);
  return result;
}

console.log(myQuerySelector1());
