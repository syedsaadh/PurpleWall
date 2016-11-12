"use strict";
var router_1 = require('@angular/router');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/admin',
        //component:LandingComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map