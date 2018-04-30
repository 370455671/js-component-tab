function Tab (node){
    this.node = node
    this.init()
  }
  
  Tab.prototype = {
      constructor: Tab,
      init: function(){
        this.bind()
      },
      bind: function(){
       $(this.node).find(".tab").on("click",function(){
            $(this).addClass("active")
                   .siblings().removeClass("active")
                   .parents(".bigtab").find(".panel").eq($(this).index()).addClass("active").siblings().removeClass("active")
  })
        
      }
  }
  
  var tab1 = new Tab(document.querySelectorAll('.bigtab')[0]);
  var tab2 = new Tab(document.querySelectorAll('.bigtab')[1]);