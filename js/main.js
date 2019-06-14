function Carousel($ct){
    this.init($ct)
    this.bind()
}
Carousel.prototype={
    init:function($ct){
        this.$ct=$ct
        this.$imgCt=this.$ct.find('.img-ct')
        this.$imgs=this.$ct.find('.img-ct>li')
        this.$preBtn=this.$ct.find('.pre')
        this.$nextBtn=this.$ct.find('.next')
        this.$bullets=this.$ct.find('.bullet li')
        this.imgWidth=this.$imgs.width()
        this.imgCount=this.$imgs.length
        this.index=0

        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        
        this.$imgCt.width(this.imgWidth*(this.imgCount+2))
        this.$imgCt.css({left:-this.imgWidth})
    },
    bind:function(){
        var _this=this
        this.$preBtn.on('click',function(){
            console.log('pre')
            _this.playPre()
        })
        this.$nextBtn.on('click',function(){
            console.log('next');
            _this.playNext()
        })
        this.$bullets.on('click',function(){
            console.log($(this).index());
            
        })
    },
    playNext:function(){
        _this=this
        this.$imgCt.animate({
            left:'-='+this.imgWidth
        },function(){
            _this.index++
            console.log(_this.index)
            if(_this.index===_this.imgCount){
                _this.$imgCt.css({
                    'left':-_this.imgWidth
                })
                _this.index=0
            }
            _this.setBullet()
        })
    },
    playPre:function(){
        _this=this
        this.$imgCt.animate({
            left:'+='+this.imgWidth
        },function(){
            _this.index--
            if(_this.index<0){
                _this.$imgCt.css({left:-_this.imgCount*_this.imgWidth})
                _this.index=_this.imgCount-1
            }
            _this.setBullet()
        })

    },
    setBullet:function(){
        this.$bullets.eq(this.index).addClass('active')
        .siblings().removeClass('active')
    }
}

new Carousel($('.carousel').eq(0))
new Carousel($('.carousel').eq(1))