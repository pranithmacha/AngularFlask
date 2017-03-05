(function(){

    var news = angular.module('newsApp', []);

    news.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('//');
        $interpolateProvider.endSymbol('//');
    });


    news.controller('NewsController', function(){
        this.products = news_data;
    });

    news.controller('blah', function(){
        this.ping = "pranith macha";
    });

    var news_data = {
        "tv9_news": [
            {
                "img_url": "https://i.ytimg.com/vi/Eb67pvFFQK8/mqdefault.jpg",
                "title": "News Watch  24-02-2016 - TV9",
                "url": "https://www.youtube.com/watch?v=Eb67pvFFQK8"
            },
            {
                "img_url": "https://i.ytimg.com/vi/CUfQMU52G-U/mqdefault.jpg",
                "title": "Business Prime Time 24-02-2016 - TV9",
                "url": "https://www.youtube.com/watch?v=CUfQMU52G-U"
            },
            {
                "img_url": "https://i.ytimg.com/vi/_BVEdX-gibc/mqdefault.jpg",
                "title": "Celebrities and politicians at Film Nagar for inauguration of new temples - TV9",
                "url": "https://www.youtube.com/watch?v=_BVEdX-gibc"
            },
            {
                "img_url": "https://i.ytimg.com/vi/4VsRr2TbqGc/mqdefault.jpg",
                "title": "TRS Releases candidates list for Khammam corporate election - TV9",
                "url": "https://www.youtube.com/watch?v=4VsRr2TbqGc"
            },
            {
                "img_url": "https://i.ytimg.com/vi/iiqyVVGTsXw/mqdefault.jpg",
                "title": "CM Chandrababu serious over Agri Gold case - TV9",
                "url": "https://www.youtube.com/watch?v=iiqyVVGTsXw"
            },
            {
                "img_url": "https://i.ytimg.com/vi/PiRx_pRzEcc/mqdefault.jpg",
                "title": "Magician Samala Venu with NRIs - Varadhi - TV9",
                "url": "https://www.youtube.com/watch?v=PiRx_pRzEcc"
            },
            {
                "img_url": "https://i.ytimg.com/vi/2w1_52iSzF8/mqdefault.jpg",
                "title": "Krishna Vamsi to direct Balakrishna's 100th film ? - TV9",
                "url": "https://www.youtube.com/watch?v=2w1_52iSzF8"
            },
            {
                "img_url": "https://i.ytimg.com/vi/bmEDGm7nwFU/mqdefault.jpg",
                "title": "NRIs celebrates CM KCR birthday in Dallas - USA - TV9",
                "url": "https://www.youtube.com/watch?v=bmEDGm7nwFU"
            },
            {
                "img_url": "https://i.ytimg.com/vi/xqbAxcggzbI/mqdefault.jpg",
                "title": "Telugu man Subbarao Kolla selected as Republican party national delegate - Virginia - USA - TV9",
                "url": "https://www.youtube.com/watch?v=xqbAxcggzbI"
            },
            {
                "img_url": "https://i.ytimg.com/vi/KO4ECG26WAk/mqdefault.jpg",
                "title": "Bharat Gaurav Award for Ravi Jayanthi in Muscat - TV9",
                "url": "https://www.youtube.com/watch?v=KO4ECG26WAk"
            },
            {
                "img_url": "https://i.ytimg.com/vi/aFUProTsKTE/mqdefault.jpg",
                "title": "Missing Telugu man in America, died - TV9",
                "url": "https://www.youtube.com/watch?v=aFUProTsKTE"
            },
            {
                "img_url": "https://i.ytimg.com/vi/dwm7d1FrBvs/mqdefault.jpg",
                "title": "Chandrababu discuss Agri Gold issue with collectors - TV9",
                "url": "https://www.youtube.com/watch?v=dwm7d1FrBvs"
            },
            {
                "img_url": "https://i.ytimg.com/vi/bk4H7LAfl-0/mqdefault.jpg",
                "title": "Sampoornesh Babu 'Bhadram be Careful Brother' movie audio released - TV9",
                "url": "https://www.youtube.com/watch?v=bk4H7LAfl-0"
            },
            {
                "img_url": "https://i.ytimg.com/vi/XM_BXJVfMYc/mqdefault.jpg",
                "title": "Prabhas Rebel hindi version crossed one crore views on Youtube - TV9",
                "url": "https://www.youtube.com/watch?v=XM_BXJVfMYc"
            },
            {
                "img_url": "https://i.ytimg.com/vi/c9HGVzYpXrw/mqdefault.jpg",
                "title": "100 Horses fight scene in Sardar Gabbar Singh ! - TV9",
                "url": "https://www.youtube.com/watch?v=c9HGVzYpXrw"
            },
            {
                "img_url": "https://i.ytimg.com/vi/RMCBoq_Dkkc/mqdefault.jpg",
                "title": "Hyderabad is best city to live in India - Mercer survey - TV9",
                "url": "https://www.youtube.com/watch?v=RMCBoq_Dkkc"
            },
            {
                "img_url": "https://i.ytimg.com/vi/QW7VyaIFNz8/mqdefault.jpg",
                "title": "JNU - Umar Khalid,Anirban surrender to police - TV9",
                "url": "https://www.youtube.com/watch?v=QW7VyaIFNz8"
            },
            {
                "img_url": "https://i.ytimg.com/vi/vMWrgh0AoZ4/mqdefault.jpg",
                "title": "Corporate Elections - Special story - TV9",
                "url": "https://www.youtube.com/watch?v=vMWrgh0AoZ4"
            },
            {
                "img_url": "https://i.ytimg.com/vi/gpr28TiPZro/mqdefault.jpg",
                "title": "Nothing new in president's speech - Opposition - TV9",
                "url": "https://www.youtube.com/watch?v=gpr28TiPZro"
            },
            {
                "img_url": "https://i.ytimg.com/vi/8KvvVvezZLk/mqdefault.jpg",
                "title": "30 News in 30 Minutes   24-02-2016 - TV9",
                "url": "https://www.youtube.com/watch?v=8KvvVvezZLk"
            },
            {
                "img_url": "https://i.ytimg.com/vi/d2b3DTaLJsA/mqdefault.jpg",
                "title": "JNU, HCU issue will be discussed in Lok Sabha - TV9",
                "url": "https://www.youtube.com/watch?v=d2b3DTaLJsA"
            },
            {
                "img_url": "https://i.ytimg.com/vi/744vu2jN1Rs/mqdefault.jpg",
                "title": "Journalist Diary 24-02-2016 - TV9",
                "url": "https://www.youtube.com/watch?v=744vu2jN1Rs"
            },
            {
                "img_url": "https://i.ytimg.com/vi/2xKbI1YkJ-w/mqdefault.jpg",
                "title": "Talasani Vs Somireddy Chandramohan Reddy on party defections - TV9",
                "url": "https://www.youtube.com/watch?v=2xKbI1YkJ-w"
            },
            {
                "img_url": "https://i.ytimg.com/vi/LcMI0EPz6jw/mqdefault.jpg",
                "title": "Jayalalithaa turns 68 Special focus on her film and political career - 30 Minutes - TV9",
                "url": "https://www.youtube.com/watch?v=LcMI0EPz6jw"
            },
            {
                "img_url": "https://i.ytimg.com/vi/P1SLQ3c2Hag/mqdefault.jpg",
                "title": "TDP Vs YCP over defections in AP - TV9",
                "url": "https://www.youtube.com/watch?v=P1SLQ3c2Hag"
            },
            {
                "img_url": "https://i.ytimg.com/vi/olDbltLC6hY/mqdefault.jpg",
                "title": "Allahabad officer caught urinating at 'Triveni Sangam' - TV9",
                "url": "https://www.youtube.com/watch?v=olDbltLC6hY"
            },
            {
                "img_url": "https://i.ytimg.com/vi/WH4cjcjgq7o/mqdefault.jpg",
                "title": "Chandrababu will pay for stealing YCP MLAs - YS Jagan - TV9",
                "url": "https://www.youtube.com/watch?v=WH4cjcjgq7o"
            },
            {
                "img_url": "https://i.ytimg.com/vi/9aThCYR9v0U/mqdefault.jpg",
                "title": "Season of defections in AP, TS - TV9",
                "url": "https://www.youtube.com/watch?v=9aThCYR9v0U"
            },
            {
                "img_url": "https://i.ytimg.com/vi/GngnMk0wL-g/mqdefault.jpg",
                "title": "Will agitate against rising prices -  BJP MLC Somu Veerraju - TV9",
                "url": "https://www.youtube.com/watch?v=GngnMk0wL-g"
            },
            {
                "img_url": "https://i.ytimg.com/vi/b3DIjn39tDU/mqdefault.jpg",
                "title": "No mention of domestic issues in President's address - MP Kavita - TV9",
                "url": "https://www.youtube.com/watch?v=b3DIjn39tDU"
            }
        ]};


})();


