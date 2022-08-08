"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[8610],{42568:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(97325),l=a(23672);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},88389:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(79107),l=a(22884);function i(e){var t=e.items,a=e.component,i=void 0===a?l.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(i,null,n.createElement(t,null)))})))}},74883:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),r=a(86010),l=a(97325),i=a(23777),o=a(35463),s=a(23702),c=a(83699),m=a(92506),u=a(42568),p=a(33647),g=a(88389);function d(e){var t,a=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function E(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:t}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,r=e.sidebar,i=e.listMetadata,o=d(t);return n.createElement(m.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(g.Z,{items:a}),n.createElement(u.Z,{metadata:i}))}function h(e){return n.createElement(o.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},n.createElement(E,e),n.createElement(b,e))}},38973:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(87365),r="newsletterSignup_R97Y",l="hidden_MOSg",i="formContainer_hsPX",o="privacyPolicyLink_Ajza",s="onBlog_JIS6",c="onBlogContainer_NO9N",m=a(83699),u=a(31514),p=a(67294),g=function(e){var t=e.onBlogPost,a=void 0!==t&&t,g=e.hidden;return void 0!==g&&g?a?null:p.createElement("div",{className:r+" "+l}):p.createElement("div",{className:(!a&&n.Z.section)+" "+r+" "+(a&&s)},p.createElement("div",{className:n.Z.container+" "+(a&&c)},p.createElement(u.Z,null,p.createElement("script",{type:"text/javascript",src:"https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"})),p.createElement("div",{className:n.Z.centeredText},p.createElement("h2",null,"Stay updated"),p.createElement("p",null,"Get the latest from Working Group Two. We'll send you news and updates from time to time."," "),p.createElement("form",{className:"js-cm-form "+i,id:"subForm",action:"https://www.createsend.com/t/subscribeerror?description=",method:"post","data-id":"191722FC90141D02184CB1B62AB3DC26955E76E0D27B7A1AB8E959FCE242FF63E7D5C217A62680441C6357AC1AAA7146FDBB1C4EB96CCAB4391278030E63DF48"},p.createElement("input",{type:"email",className:"js-cm-email-input qa-input-email",id:"fieldEmail",name:"cm-jrduthd-jrduthd",autoComplete:"Email","aria-label":"Email",placeholder:"Email",maxLength:200,required:!0}),p.createElement("button",{className:n.Z.button+" "+n.Z.buttonPrimary,type:"submit"},"Subscribe")),p.createElement("p",null,p.createElement(m.Z,{to:"/privacy",className:o},"Privacy notice")))))}},22884:function(e,t,a){var n=a(67294),r=a(51116),l=a(38973),i=a(39962);t.Z=function(e){return"en"!==(0,i.Z)().i18n.currentLocale?n.createElement(r.Z,e):n.createElement(n.Fragment,null,n.createElement(r.Z,e),e.isBlogPostPage&&n.createElement(l.Z,{onBlogPost:!0}))}},87365:function(e,t){t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp"}}}]);