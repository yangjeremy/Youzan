webpackJsonp([5],{0:function(e,t,i){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartReduce:"/cart/reduce",cartLists:"/cart/list",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in n)n.hasOwnProperty(o)&&(n[o]="http://rapapi.org/mockjsdata/24170"+n[o]);t.a=n},110:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(79),o=(i.n(n),i(80)),s=(i.n(o),i(78)),r=(i.n(s),i(1)),c=i(6),d=i(3),a=i.n(d),u=i(0),h=i(25),f=i.n(h),l=i(74),g=i(18);new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;a.a.post(u.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=i})},selectGood:function(e,t){var i=this.editingShop?"removeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(i,n){t!==n&&(i.editing=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&l.a.reduce(e.id).then(function(t){e.number--})},add:function(e){l.a.add(e.id).then(function(t){e.number++})},remove:function(e,t,i,n){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选 "+this.removeLists.length+" 个商品删除？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,n=t.shop,o=t.shopIndex,s=t.good,r=t.goodIndex;i.i(g.a)(u.a.cartRemove,{id:s.id}).then(function(t){n.goodsList.splice(r,1),n.goodsList.length||(e.lists.splice(o,1),e.removeShop()),e.removePopup=!1})}else{var c=[];this.removeLists.forEach(function(e){c.push(e.id)}),a.a.post(u.a.cartMremove,{ids:c}).then(function(t){var i=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&i.push(t)}),i.length?e.editingShop.goodsList=i:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,i,n){console.log(e.target);var o=e.changedTouches[0].clientX,s="0";i.startX-o>100&&(s="-60px"),o-i.startX>100&&(s="0px"),f()(this.$refs["goods-"+t+"-"+n],{left:s})}},mixins:[c.a]})},18:function(e,t,i){"use strict";function n(e,t){return new s.a(function(i,n){c.a.post(e,t).then(function(e){e.data.status;i(e)}).catch(function(e){n(e)})})}var o=i(49),s=i.n(o),r=i(3),c=i.n(r);t.a=n},6:function(e,t,i){"use strict";var n={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var i=t.split(".");return i[0]+"."+(i[1]+"0").substr(0,2)}return t+".00"}}};t.a=n},74:function(e,t,i){"use strict";var n=i(50),o=i.n(n),s=i(51),r=i.n(s),c=i(18),d=i(0),a=function(){function e(){o()(this,e)}return r()(e,null,[{key:"add",value:function(e){return i.i(c.a)(d.a.cartAdd,{id:e,number:1})}},{key:"reduce",value:function(e){return i.i(c.a)(d.a.cartReduce,{id:e,number:1})}},{key:"remove",value:function(e){var t=[];e.forEach(function(e){t.push(e.id)})}}]),e}();t.a=a},78:function(e,t){},79:function(e,t){},80:function(e,t){}},[110]);
//# sourceMappingURL=cart.51c9eee798a60a6c2522.js.map