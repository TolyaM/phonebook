var triggerFactory = function ($http, $httpParamSerializer) {
    return {
        menutrigger: function() {
                let aside = angular.element( document.querySelector( '#aside' ) );
                let pageoverlay = angular.element( document.querySelector( '#pageoverlay' ) );
                aside.addClass('open');
                pageoverlay.addClass('visible');
        },
        pageoverlay: function() {
            let aside = angular.element( document.querySelector( '#aside' ) );
            let pageoverlay = angular.element( document.querySelector('#pageoverlay'));

            pageoverlay.removeClass('visible');
            if(aside.hasClass('open')){ 
                aside.removeClass('open')
            }  
        }
    };
}
triggerFactory.$inject = ['$http', '$httpParamSerializer'];

export default triggerFactory