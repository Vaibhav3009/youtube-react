(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{26:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i(17),s=i.n(c),a=i(8),o=i.n(a),r=i(18),d=i(3),l=i(4),u=i(6),h=i(5),j=i(0),v=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={text:""},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.state.text)},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{style:{background:"#080808"},className:"search-bar ui segment",children:Object(j.jsx)("form",{className:"ui form",onSubmit:function(t){return e.handleSubmit(t)},children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{style:{color:"whitesmoke",fontSize:"1.2em"},children:"Search Video"}),Object(j.jsx)("input",{style:{background:"#0f0f0f",color:"white"},type:"text",placeholder:"Search",value:this.state.text,onChange:function(t){return e.handleChange(t)}})]})})})}}]),i}(n.Component),b=(i(26),function(e){return Object(j.jsxs)("div",{onClick:function(){e.onVideo(e.video)},className:"video-item item",children:[Object(j.jsx)("img",{className:"ui image",src:e.video.snippet.thumbnails.medium.url,alt:"video here"}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{style:{color:"whitesmoke"},className:"header",children:e.video.snippet.title})})]})}),m=function(e){var t=e.videolist.map((function(t){return Object(j.jsx)(b,{onVideo:e.onVideoSelect,video:t},t.id.videoId)}));return Object(j.jsx)("div",{className:"ui relaxed divided list",children:t})},p=i(19),f=i.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyCkXlTxYQ6iOuVaduxfPCczcgmZndrHqT8"}}),x=function(e){if(console.log(e),!e.video)return Object(j.jsx)("div",{children:"Loading"});var t="https://www.youtube.com/embed/".concat(e.video.id.videoId);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"ui embed",children:Object(j.jsx)("iframe",{title:"video-player",src:t})}),Object(j.jsxs)("div",{style:{background:"currentColor"},className:"ui segment",children:[Object(j.jsx)("h2",{style:{color:"white"},className:"ui header",children:e.video.snippet.title}),Object(j.jsx)("p",{style:{color:"whitesmoke"},children:e.video.snippet.description})]})]})},O=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onSearch=function(){var t=Object(r.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){console.log(t),e.setState({selectedVideo:t})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.onSearch("Football")}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"ui container",children:[Object(j.jsx)(v,{onSearch:this.onSearch}),Object(j.jsx)("div",{className:"ui grid",children:Object(j.jsxs)("div",{className:"ui row",children:[Object(j.jsx)("div",{className:"eleven wide column",children:Object(j.jsx)(x,{video:this.state.selectedVideo})}),Object(j.jsx)("div",{className:"five wide column",children:Object(j.jsx)(m,{onVideoSelect:this.onVideoSelect,videolist:this.state.videos})})]})})]})}}]),i}(n.Component);s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.55a4d734.chunk.js.map