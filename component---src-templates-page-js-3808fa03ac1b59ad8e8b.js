(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(29),a(144);var r=a(6),i=a.n(r),s=a(0),n=a.n(s),l=a(134),o=a(30),d=a.n(o),c=a(146),u=a.n(c),f=a(138),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).content=n.a.createRef(),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.replaceLinks(),this.replaceImages()},a.replaceLinks=function(){var e=this.content.current.getElementsByTagName("a");if(e.length>0)for(var t=0;t<e.length;t++){var a=document.createElement("span"),r=e[t];r.parentElement.insertBefore(a,r),r.remove(),r.attributes.target||this.renderLink(a,r.attributes.href.value,r.text)}},a.replaceImages=function(){var e=this,t=this.props.data.wordpressPage.acf.images,a=this.content.current.getElementsByTagName("figure");if(a.length>0)for(var r=function(r){var i=a[r],s=i.attributes[0].value,n=s.substring(s.lastIndexOf("/")+1,s.lastIndexOf("-")),l=t.filter(function(e){return e.localFile.name==n})[0].localFile.childImageSharp.fluid,o=document.createElement("span");i.parentElement.insertBefore(o,i),e.renderImage(o,l)},i=0;i<a.length;i++)r(i)},a.renderLink=function(e,t,a){d.a.render(n.a.createElement(l.Link,{to:t},a),e)},a.renderImage=function(e,t,a){void 0===a&&(a=""),d.a.render(n.a.createElement(u.a,{fluid:t,alt:a}),e)},a.swapFigures=function(){return this.props.data.wordpressPage.content.replace(/<figure[^>]*><img[^>]*src="([^"]*)".*?<\/figure>/g,'<figure data-src="$1"></figure>')},a.render=function(){this.props.data.site.siteMetadata;var e=this.props.data.wordpressPage,t=this.props.data.wordpressPage.acf.banner,a=this.props.data.wordpressPage.acf.bannerContent,r=this.swapFigures();return n.a.createElement(f.a,null,n.a.createElement("div",{className:"page "+e.slug},t&&n.a.createElement("div",{className:"page-cover"},n.a.createElement(u.a,{fluid:this.props.data.wordpressPage.acf.cover.localFile.childImageSharp.fluid}),n.a.createElement("div",{className:"content"},a&&n.a.createElement("div",{className:"content",dangerouslySetInnerHTML:this.props.data.wordpressPage.acf.bannerContent}))),n.a.createElement("div",{className:"page-content"},n.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),n.a.createElement("div",{ref:this.content,dangerouslySetInnerHTML:{__html:r}}))))},t}(n.a.Component);t.default=p;var h="2565898333"},144:function(e,t,a){var r=a(21).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||a(14)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},146:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(6)),n=r(a(46)),l=r(a(140)),o=r(a(141)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,s=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},s,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,s=!1,l=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,s=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,s=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:s,fadeIn:l,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,w="boolean"==typeof y?"lightgray":y,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),I={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var L=h;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(b,(0,o.default)({src:L.base64},I)),L.tracedSVG&&d.default.createElement(b,(0,o.default)({src:L.tracedSVG},I)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(b,{alt:a,title:t,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t},L))}}))}if(g){var R=g,N=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},s);return"inherit"===s.display&&delete N.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,o.default)({src:R.base64},I)),R.tracedSVG&&d.default.createElement(b,(0,o.default)({src:R.tracedSVG},I)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-templates-page-js-3808fa03ac1b59ad8e8b.js.map