function getChildren(nodes, page){
    const dirs = page.url.split('/');
    const levels = dirs.length;
    const parent = page.url;
    return nodes
        .filter(node => node.data.page.url.startsWith(parent) && node.data.page.url.split('/').length === levels + 1)
        .sort((a, b) => a.data.page.order - b.data.page.order)
        .map(node => node.data.page);
}

function getSiblings(nodes, page){
    const dirs = page.filePathStem.split('/');
    const levels = dirs.length;
    dirs.pop();
    const parent = dirs.join('/') + '/';
    return nodes
        .filter(node =>node.data.page.url.startsWith(parent) && node.data.page.url !== page.url && node.data.page.filePathStem.split('/').length === levels)
        .sort((a, b) => a.data.page.order - b.data.page.order)
        .map(node => node.data.page);
}

function getRelated(nodes, page){
    if (!page.related) return [];
   return nodes
       .filter(node => page.related.includes(node.data.page.filePathStem))
       .sort((a, b) => a.data.page.order - b.data.page.order)
       .map(node => node.data.page);
}

function getSimilar(nodes, page){
    return [...getRelated(nodes, page), ...getSiblings(nodes, page)];
}

function getBreadcrumb(nodes, page){
    const breadcrumbs = [];
    let dirs = page.filePathStem.split('/');
    while (dirs.length > 0){
        breadcrumbs.push(dirs.join('/') + '/')
        dirs.pop();
    }
    return nodes
        .filter(node => breadcrumbs.includes(node.data.page.url))
        .sort((a, b) => a.data.page.filePathStem.length - b.data.page.filePathStem.length)
        .map(node => node.data.page);
}

module.exports = {
    children: getChildren,
    siblings: getSiblings,
    related: getRelated,
    similar: getSimilar,
    breadcrumb: getBreadcrumb,
}