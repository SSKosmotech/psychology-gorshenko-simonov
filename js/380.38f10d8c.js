"use strict";(self["webpackChunkpsychology_gorshenko_simonov"]=self["webpackChunkpsychology_gorshenko_simonov"]||[]).push([[380],{8380:function(s,n,e){e.r(n),e.d(n,{default:function(){return L}});var t=e(3396);function o(s,n,e,o,a,i){const r=(0,t.up)("SeminarsList");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(r)])}var a=e(7139),i=e(9242);const r={key:0,id:"seminars"},l={class:"container"},m={class:"wrap_content"},c={class:"price_seminars_wrap"},_={class:"wrap_img"},u=["src","alt"],d=(0,t._)("div",null,null,-1);function w(s,n,o,w,h,p){const v=(0,t.up)("FeedbackForm"),k=(0,t.up)("modal-window");return null!==h.seminarsListInfoData?((0,t.wg)(),(0,t.iD)("section",r,[(0,t._)("div",l,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.seminarsListInfoData.seminars,((s,o)=>((0,t.wg)(),(0,t.iD)("div",{key:o,class:(0,a.C_)(["seminars",{seminars_reverse:o%2!==0}])},[(0,t._)("div",m,[(0,t._)("p",null,(0,a.zw)(s.seminars_theme),1),(0,t._)("h2",null,(0,a.zw)(s.seminars_title),1),(0,t._)("p",null,(0,a.zw)(s.seminars_text),1),(0,t._)("div",c,[(0,t._)("p",null,(0,a.zw)(s.seminars_text_price),1),(0,t._)("p",null,(0,a.zw)(s.seminars_price),1)]),(0,t._)("button",{type:"button",class:"btn btn_red",onClick:n[0]||(n[0]=(0,i.iM)(((...s)=>p.showForm&&p.showForm(...s)),["prevent"]))},(0,a.zw)(s.button),1)]),(0,t._)("div",_,[(0,t._)("img",{src:e(990)("./"+s.img),alt:"Семінари — "+s.seminars_title},null,8,u)])],2)))),128))]),h.showModal?((0,t.wg)(),(0,t.j4)(k,{key:0,onClose:n[2]||(n[2]=s=>h.showModal=!1)},{header:(0,t.w5)((()=>[(0,t._)("button",{type:"button",class:"close_modal_btn",onClick:n[1]||(n[1]=s=>h.showModal=!1)})])),body:(0,t.w5)((()=>[(0,t.Wm)(v)])),footer:(0,t.w5)((()=>[d])),_:1})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)}var h=e(6265),p=e.n(h),v=e(493),k=e(2169),b={name:"SeminarsList",components:{ModalWindow:v.Z,FeedbackForm:k.Z},data(){return{seminarsListInfoData:null,showModal:!1}},created(){p().get("data/seminarsInfo.json").then((s=>{this.seminarsListInfoData=s.data})).catch((s=>{this.$toast.error(s)}))},methods:{showForm(){this.showModal=!0}}},f=e(89);const g=(0,f.Z)(b,[["render",w]]);var y=g,D={name:"SiteSeminars",components:{SeminarsList:y}};const F=(0,f.Z)(D,[["render",o]]);var L=F}}]);
//# sourceMappingURL=380.38f10d8c.js.map