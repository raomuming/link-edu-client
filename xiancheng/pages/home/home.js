// now, this list is for testing only
var list = [{
  id: 1,
  name: 'Test for list',
  avatar: 'https://wx1.sinaimg.cn/crop.0.32.827.465/90eb2137ly1fq8jp6r8pcj20mz0dwq4q.jpg'
},
{
  id: 2,
  name: 'Test for list 2',
  avatar: 'https://wx1.sinaimg.cn/crop.0.32.827.465/90eb2137ly1fq8jp6r8pcj20mz0dwq4q.jpg'
},
{
  id: 3,
  name: 'Test for list 3',
  avatar: 'https://wx1.sinaimg.cn/crop.0.32.827.465/90eb2137ly1fq8jp6r8pcj20mz0dwq4q.jpg'
},
{
  id: 4,
  name: 'Test for list 4',
  avatar: 'https://wx1.sinaimg.cn/crop.0.32.827.465/90eb2137ly1fq8jp6r8pcj20mz0dwq4q.jpg'
}];
Page({
  data:{},
  onLoad:function(options){
    this.setData({
      list: list
    })
  }
});

// refer to: https://blog.csdn.net/YanzYan/article/details/54345828