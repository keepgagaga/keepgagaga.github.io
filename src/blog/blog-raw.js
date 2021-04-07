const blogRaw = new Map();

let firstBlogContent =
 `# 一个尝试
    
既然博客可以用 markdown 写，又有现成的解析库，那不妨就以此来做个静态博客页面，不用使用其他的静态网站模板，只依靠简洁的 markdown 语法和一个解析库，
就可以完成一个博客的生成，更新也相当简单，只需要直接在本地更新后推到 GitHub 上就行，太符合我这个强迫症性格了！
而内容跳转则使用哈希路由来处理，其中要注意从 location.hash 获取的字符串是被编码过的，需要解码后才是正常的字符串。
`


blogRaw.set('一个尝试', firstBlogContent);
blogRaw.set('second_blog', 'second content');