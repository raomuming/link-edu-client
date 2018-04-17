const count = 3;
Page({
  data:{
    hasMore: true,
    courses: [],
    olderThan: Date.now()
  },
  onLoad:function(options){
    let self = this;
    let fetch_options = {
      older_than: Date.now(),
      count: count
    };
    self.fetchCourses(fetch_options, (res) => {
      self.handleFetchedResult(res);
    });
  },
  onReachBottom: function() {
    let self = this;
    console.log("onReachBottom => ");
    let fetch_options = {
      older_than: self.data.olderThan,
      count: count
    };
    
    self.fetchCourses(fetch_options, (res) => {
      self.handleFetchedResult(res);
    });
  },
  fetchCourses:function(options, callback) {
    let self = this;
    console.log("older_than0 =>", options.older_than);
    let older_than = options.older_than || Date.now();
    console.log("older_than1 => ", older_than);
    let count = options.count || 5;
    let url = "https://www.link-edu.net/courses?older_than=" + older_than + "&count=" + count;
    console.log("url => ", url);
    wx.request({
      url: url,
      data: {},
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function(res){
        console.log("fetch courses => ", res);
        callback(res);
      }
    });
  },
  handleFetchedResult: function(res) {
    let self = this;
    let hasMore = res.data.has_more;
    let courses = self.data.courses.concat(res.data.courses);
    
    let olderThan = Date.now();
    if (courses.length > 0) {
      let course = courses[courses.length - 1];
      olderThan = course.created_at;
    }
    console.log("all courses => ", courses);
    self.setData({
      hasMore: hasMore,
      courses: courses,
      olderThan: olderThan
    });
  }
});