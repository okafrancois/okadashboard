"use strict";(self.webpackChunkokadashboard=self.webpackChunkokadashboard||[]).push([[3677],{26122:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(23724),n=a(68547),u=a(50613),r=function(e){var t=(0,n.useNotification)();return(0,l.useQuery)("list-installed-plugins",(function(){return(0,u.fetchInstalledPlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=r},50613:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchInstalledPlugins=void 0;var n=l(a(87757)),u=l(a(48926)),r=a(53777),d=function(){var e=(0,u.default)(n.default.mark((function e(){var t,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.axiosInstance.get("/admin/plugins");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchInstalledPlugins=d},44226:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(97132),r=a(68547),d=a(84686),s=a(78862),i=a(62031),o=a(49425),f=a(41798),c=l(a(26122)),g=function(){var e=(0,u.useIntl)().formatMessage,t=(0,d.useNotifyAT)().notifyStatus;(0,r.useFocusWhenNavigate)();var a=e({id:"global.plugins",defaultMessage:"Plugins"}),l=(0,c.default)((function(){t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:a}))})),g=l.status,p=l.data;return"success"!==g&&"error"!==g?n.default.createElement(s.Layout,null,n.default.createElement(i.Main,{"aria-busy":!0},n.default.createElement(r.LoadingIndicatorPage,null))):n.default.createElement(s.Layout,null,n.default.createElement(i.Main,null,n.default.createElement(s.HeaderLayout,{title:a,subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),n.default.createElement(s.ContentLayout,null,n.default.createElement(f.Table,{colCount:2,rowCount:(null===p||void 0===p?void 0:p.plugins.length)+1},n.default.createElement(f.Thead,null,n.default.createElement(f.Tr,null,n.default.createElement(f.Th,null,n.default.createElement(o.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.name",defaultMessage:"Name"}))),n.default.createElement(f.Th,null,n.default.createElement(o.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.description",defaultMessage:"description"}))))),n.default.createElement(f.Tbody,null,p.plugins.map((function(e){var t=e.name,a=e.displayName,l=e.description;return n.default.createElement(f.Tr,{key:t},n.default.createElement(f.Td,null,n.default.createElement(o.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),n.default.createElement(f.Td,null,n.default.createElement(o.Typography,{textColor:"neutral800"},l)))})))))))};t.default=g},3505:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(68547),r=a(15482),d=a(97132),s=l(a(13240)),i=l(a(44226)),o=function(){var e=(0,(0,d.useIntl)().formatMessage)({id:"global.plugins",defaultMessage:"Plugins"});return n.default.createElement(u.CheckPagePermissions,{permissions:s.default.marketplace.main},n.default.createElement(r.Helmet,{title:e}),n.default.createElement(i.default,null))};t.default=o}}]);