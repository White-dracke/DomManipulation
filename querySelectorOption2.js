function myQuerySelector2() {
  const result = [];
  const ni = document.createNodeIterator(
    document.documentElement,
    NodeFilter.SHOW_ELEMENT
  );
  while ((node = ni.nextNode()))
    if (node.tagName === SELECTOR) result.push(node);
  return result;
}

console.log(myQuerySelector2());
