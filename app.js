var Chablau = Vue.extend({
    template: '<p>Chablau</p>'
});

var Tananina = Vue.extend({
    template: '<p>Tananina</p>'
});

App = Vue.extend({});

var router = new VueRouter({
    'hashbang': false,
    'history': true
});

router.map({
    '/chablau': {
        component: Chablau,
        name: 'chablau'
    },
    '/tananina' :{ 
        component: Tananina,
        name: 'tananina'
    }

});

router.start(App, '#app');