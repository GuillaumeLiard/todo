(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,o,e){var n=e(159);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(26).default)("6e5124fa",n,!0,{})},157:function(t,o,e){var n=e(161);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(26).default)("3fd77012",n,!0,{})},158:function(t,o,e){"use strict";var n=e(156);e.n(n).a},159:function(t,o,e){(t.exports=e(25)(!1)).push([t.i,"\n.v-list__tile__action[data-v-06eceb5f]{cursor:pointer;cursor:-webkit-grab;cursor:grab\n}",""])},160:function(t,o,e){"use strict";var n=e(157);e.n(n).a},161:function(t,o,e){(t.exports=e(25)(!1)).push([t.i,"\n.list-enter-active[data-v-bd55cd28],.list-leave-active[data-v-bd55cd28]{transition:all .4s\n}\n.list-enter[data-v-bd55cd28],.list-leave-to[data-v-bd55cd28]{opacity:0;-webkit-transform:translateX(30px);transform:translateX(30px)\n}\n.ghost[data-v-bd55cd28]{opacity:0\n}",""])},162:function(t,o,e){"use strict";var n=e(4),i=e.n(n),s=e(11),a=e(163),d=e.n(a),l=(e(164),{props:{title:{type:String,default:""},content:{type:String,default:""},done:{type:Boolean,default:!1},id:{type:Number,default:0}},computed:{doneModel:{set:function(t){var o=this;setTimeout(function(){o.setTodoStatus({id:o.id,done:t})},150)},get:function(){return this.done}}},methods:i()({},Object(s.c)({setTodoStatus:"todos/setTodoStatus"}))}),r=(e(158),e(9)),c=Object(r.a)(l,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-layout",[e("v-flex",[e("v-card",[e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{color:"info"}},[t._v("drag_indicator")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(t.title))])],1),t._v(" "),e("v-list-tile-avatar",[e("v-switch",{model:{value:t.doneModel,callback:function(o){t.doneModel=o},expression:"doneModel"}})],1)],1)],1)],1)],1)],1)},[],!1,null,"06eceb5f",null);c.options.__file="Todo.vue";var u={components:{Todo:c.exports,draggable:d.a},props:{filter:{type:String,default:"todos"}},data:function(){return{draggableOptions:{handle:".v-list__tile__action",animation:150,ghostClass:"ghost"}}},computed:i()({},Object(s.b)({todos:"todos/get",ongoing:"todos/getOngoing",done:"todos/getDone"}),{todos:{get:function(){return this.todosDisplay},set:function(t){this.$store.commit("todos/updateOrder",{todosOrderUpdated:t})}},todosDisplay:function(){switch(this.filter){case"ongoing":return this.ongoing;case"done":return this.done;default:return this.todos}}})},f=(e(160),Object(r.a)(u,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("draggable",{attrs:{options:t.draggableOptions},model:{value:t.todos,callback:function(o){t.todos=o},expression:"todos"}},[e("transition-group",{attrs:{name:"list",tag:"div",mode:"out-in"}},t._l(t.todos,function(t){return e("Todo",{key:t.id,attrs:{title:t.title,content:t.content,done:t.done,id:t.id}})}))],1)},[],!1,null,"bd55cd28",null));f.options.__file="Todos.vue";o.a=f.exports},168:function(t,o,e){"use strict";e.r(o);var n={components:{Todos:e(162).a}},i=e(9),s=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("Todos",{attrs:{filter:"ongoing"}})},[],!1,null,null,null);s.options.__file="index.vue";o.default=s.exports}}]);