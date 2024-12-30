Page({
  data: {
    categories: [
      { id: 1, name: '无肉不欢', icon: 'hot', color: '#ff4d4f' },
      { id: 2, name: '菜菜健康', icon: 'like', color: '#52c41a' },
      { id: 3, name: '来点主食', icon: 'shop', color: '#faad14' },
      { id: 4, name: '小食茶饮', icon: 'gift', color: '#1890ff' },
      { id: 5, name: '特殊服务', icon: 'star', color: '#722ed1' }
    ],
    menuItems: [
      { 
        id: 1, 
        name: '牛排', 
        image: 'https://fuss10.elemecdn.com/e/a9/0012de59cf31e16a992d5c79fe8afjpeg.jpeg',
        price: 88,
        rating: 5,
        category: 1,
        desc: '精选澳洲进口牛排，搭配时令蔬菜'
      },
      { 
        id: 2, 
        name: '蜜汁烤鸡', 
        image: 'https://fuss10.elemecdn.com/7/4a/f307f56216b03f067155aec8b124ejpeg.jpeg',
        price: 68,
        rating: 5,
        category: 1,
        desc: '整只烤鸡，外酥里嫩，配以特制蜜汁酱料'
      },
      { 
        id: 3, 
        name: '麻辣小龙虾', 
        image: 'https://fuss10.elemecdn.com/4/37/79289f2f5fd0ae3e5c409f504353djpeg.jpeg',
        price: 98,
        rating: 5,
        category: 1,
        desc: '新鲜活虾，秘制配方，麻辣鲜香'
      },
      { 
        id: 4, 
        name: '椰子鸡', 
        image: 'https://fuss10.elemecdn.com/e/f9/c93c90351a69893c5b1e2f8b0934fjpeg.jpeg',
        price: 128,
        rating: 5,
        category: 1,
        desc: '文昌鸡配以新鲜椰子汤底，清甜可口'
      }
    ],
    headerImage: 'https://fuss10.elemecdn.com/7/85/e7f3c8fcd7e5cf2b7662a1c3419efjpeg.jpeg',
    avatarImage: 'https://fuss10.elemecdn.com/0/cf/e16c1687a4ea84674d48920968b5fjpeg.jpeg',
    qrcodeImage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example',
    cartIcon: 'https://img.icons8.com/material-rounded/24/666666/shopping-cart.png',
    searchIcon: 'https://img.icons8.com/material-rounded/24/666666/search.png',
    cart: [],
    selectedCategory: 1,
    totalPrice: 0
  },

  onCategoryChange(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({
      selectedCategory: categoryId
    });
    this.filterMenuItems(categoryId);
  },

  filterMenuItems(categoryId) {
    const allItems = this.data.menuItems;
    const filteredItems = allItems.filter(item => item.category === categoryId);
    this.setData({
      displayMenuItems: filteredItems
    });
  },

  onSearch(e) {
    const keyword = e.detail.value.toLowerCase();
    const allItems = this.data.menuItems;
    const searchResult = allItems.filter(item => 
      item.name.toLowerCase().includes(keyword) || 
      item.desc.toLowerCase().includes(keyword)
    );
    this.setData({
      displayMenuItems: searchResult
    });
  },

  onAddToCart(e) {
    const item = e.detail;
    const cart = [...this.data.cart];
    const index = cart.findIndex(i => i.id === item.id);
    
    if (index > -1) {
      cart[index].count = item.count;
    } else {
      cart.push(item);
    }
    
    this.setData({ cart });
  }
}); 