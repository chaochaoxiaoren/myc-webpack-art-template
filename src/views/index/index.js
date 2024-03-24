import template from 'art-template/lib/template-web.js'

// art-template-loader 解析不了文件，所以使用art文件的方式有问题，以后有时间再看

// const html = template('/banner/index.art', {
//   data: 1
// });

// 下方两种方式是没问题的。
// const fn = template.compile('<div>{{data}}<div>');
// const html = fn({data:2})

const html = template.render('<div>{{data}}<div>', {data:3});

document.getElementById('container').innerHTML = html;
