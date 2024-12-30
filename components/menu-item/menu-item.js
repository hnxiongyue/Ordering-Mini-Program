Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  data: {
    count: 0,
    // 临时使用的图片链接
    starIcon: 'https://img.icons8.com/material-rounded/24/6b4ee6/star.png',
    addIcon: 'https://img.icons8.com/material-rounded/24/ffffff/plus.png',
    minusIcon: 'https://img.icons8.com/material-rounded/24/6b4ee6/minus.png'
  },
  methods: {
    handleAdd() {
      const newCount = this.data.count + 1;
      this.setData({
        count: newCount
      });
      this.triggerEvent('addtocart', {
        ...this.data.item,
        count: newCount
      });
    },
    handleMinus() {
      if (this.data.count <= 0) return;
      const newCount = this.data.count - 1;
      this.setData({
        count: newCount
      });
      this.triggerEvent('addtocart', {
        ...this.data.item,
        count: newCount
      });
    }
  }
}); 