//scss处理
//

fis.match('*.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css',
});

