"use strict";
var router_1 = require('@angular/router');
var register_form_component_1 = require('./components/forms/register-form.component');
var sign_in_form_component_1 = require('./components/forms/sign-in-form.component');
var landing_component_1 = require('./components/landing.component');
// Route Configuration
exports.routes = [
    {
        path: '',
        //redirectTo: '/',
        component: landing_component_1.LandingComponent,
        pathMatch: 'full'
    },
    { path: 'signup', component: register_form_component_1.RegisterFormComponent },
    { path: 'signin', component: sign_in_form_component_1.SignInFormComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map