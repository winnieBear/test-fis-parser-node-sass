# test-fis-parser-node-sass

目前fis-parser-node-sass在处理sass文件时，如果一个sass文件被@import多次时，编译的css文件里会被复制多次。
参考了node-sass-import-once的代码，修复重复import的bug。

## 使用方法
## 安装方法
```bash
#首先安装fis3
npm install fis3 -g 
```


## fis-parser-node-sass目前的编译结果

```bash
# bulid old
cd old;
#因为国情，npm安装不上node-sass模块，用cnpm安装
cnpm install;
# 运行fis3 release命令 进行处理
npm run build;
```

build 结果

```css
/*a.scss*/
/*a.scss*/
/*b.scss*/
/*c.scss*/
```

## 修改后fis-parser-node-sass目前的编译结果

```bash
# bulid new
cd ../new;
#因为国情，npm安装不上node-sass模块，用cnpm安装
cnpm install;
# 运行fis3 release命令 进行处理
npm run build;

```

build 结果,a.scss只包含一次

```css
/*a.scss*/
/*b.scss*/
/*c.scss*/
```




