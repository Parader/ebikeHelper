(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(134),c=n(29),l=n.n(c),u=n(138),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).content=i.a.createRef(),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.replaceLinks()},n.replaceLinks=function(){var e=this.content.current.getElementsByTagName("a");if(e.length>0)for(var t=0;t<e.length;t++){var n=document.createElement("span"),a=e[t];a.parentElement.insertBefore(n,a),a.remove(),console.log(),a.attributes.target||this.renderLink(n,a.attributes.href.value,a.text)}},n.renderLink=function(e,t,n){l.a.render(i.a.createElement(s.Link,{to:t},n),e)},n.render=function(){this.props.data.site.siteMetadata;var e=this.props.data.wordpressPage;return i.a.createElement(u.a,null,i.a.createElement("div",{className:"page "+e.slug},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),i.a.createElement("div",{ref:this.content,dangerouslySetInnerHTML:{__html:e.content}}))))},t}(i.a.Component);t.default=p;var d="2363114528"}}]);
//# sourceMappingURL=component---src-templates-page-js-2916b37fcb462e8e45fd.js.map