Component({
  data: {
    percent: 0,
    // dotLeft: 190,
    // dotTop: -10
  },


  attached() {

    setInterval(() => {
      let percent = this.data.percent > 96 ? 0 : this.data.percent + 1
      this.setData({
        percent: percent
      }, () => {
        console.log("new percent", this.data.percent)
        // if(this.data.percent <= 25) {
        //   let dotLeft = this.data.dotLeft + 1
        //   let dotTop = this.data.dotTop + 1
        //   this.setData({
        //     dotLeft: dotLeft,  //190 ~ 380
        //     dotTop: dotTop          //0 ~ 90
        //   }, () => {
        //     console.log("new percent", this.data.dotLeft)
        //   })
        // } 
      })
    }, 1000)
  },

  methods() {

  }
})
