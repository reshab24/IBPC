$(window).load(){
    /*** Funtion Paginador ****/
    $('#pagination-demo').twbsPagination({
        totalPages: 2,
        // the current page that show on start
        startPage: 1,
        
        // maximum visible pages
        visiblePages: 2,
        
        initiateStartPageClick: true,
        
        // template for pagination links
        href: false,
        
        // variable name in href template for page number
        hrefVariable: '{{number}}',
        
        // Text labels
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last',
        
        // carousel-style pagination
        //loop: false,
        
        // callback function
        onPageClick: function (event, page) {
            $('.page-active').removeClass('page-active');
          $('#page'+page).addClass('page-active');
        },
        
        // pagination Classes
        paginationClass: 'pagination',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first',
        pageClass: 'page',
        activeClass: 'active'
        
    });
}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-10146041-21', 'auto');
ga('send', 'pageview');