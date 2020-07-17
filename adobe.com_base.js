
            if (window.location.search && window.location.search.indexOf("mboxDisable=1")>0) {
                var atBodyStyle = document.getElementById('at-body-style');
                if (atBodyStyle && atBodyStyle.parentNode) {
                    atBodyStyle.parentNode.removeChild(atBodyStyle);
                }
            }
        
        window.dexter = window.dexter || {};
        window.dexter.Analytics = window.dexter.Analytics || {};
        window.dexter.Analytics.language = "en_us";
        window.dexter.Analytics.geoRegion = "us";
    
            window.dexter.Analytics.launchLoaded = true;
            window.dexter.Analytics.audienceManagerEnabled = '' !== 'disabled';
        
                window.dexter.Analytics.environment = 'production';
                window.marketingtech = window.marketingtech || {};
                window.marketingtech.adobe = {
                    target: true,
                    audienceManager: window.dexter.Analytics.audienceManagerEnabled,
                    launch: {
                        property: 'global',
                        environment: window.dexter.Analytics.environment,
                        controlPageLoad: true
                    },
                    analytics: {
                        additionalAccounts: ''
                    }
                };
            
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.adobe.com",
    "name": "Adobe",
    "legalName": "Adobe Systems Incorporated",
    "alternateName": "Adobe.com",
    "logo": "https://www.adobe.com/favicon.ico",
    "sameAs": [
        "https://www.facebook.com/Adobe/",
"https://twitter.com/Adobe/",
"https://www.linkedin.com/company/adobe/",
"https://www.instagram.com/adobe/"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+1-800-833-6687",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "US",
            "availableLanguage": "US"
        }
    ]
}

{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://www.adobe.com/",
    "potentialAction": {
        "@type":"SearchAction",
        "target":"https://www.adobe.com/search.html?term={search_term}",
        "query-input":"required name=search_term"
    }
}

        window.dexter.jarvis = {
            isDesktop: (window.dexter.personalization && window.dexter.personalization.technology && window.dexter.personalization.technology.platform && window.dexter.personalization.technology.platform.type) ? window.dexter.personalization.technology.platform.type === 'desktop' : false,
        };
        window.dexter.jarvis.desktopEnabled = window.dexter.jarvis.isDesktop && true,
        window.dexter.jarvis.mobileEnabled = !window.dexter.jarvis.isDesktop && true,
        window.dexter.jarvis.lazyLoadEnabled = (!window.dexter.jarvis.isDesktop)
            ? true
            : true;
        window.fedsConfig = {
            locale: 'en',
            disableSticky: false,
            content: {
                experience: 'acom',
            },
            breadcrumbs: {
                showLogo: false,
                links: []
            },
            subnav: {},
            footer: {
                regionModal: function () { window.location.hash = 'languageNavigation'; }
            },
            privacy: {
                otDomainId: '7a5eb705\u002D95ed\u002D4cc4\u002Da11d\u002D0cc5760e93db\u002Dtest' || '7a5eb705-95ed-4cc4-a11d-0cc5760e93db-test',
                footerLinkSelector: '[data\u002Dfeds\u002Daction=\x22open\u002Dadchoices\u002Dmodal\x22]',
            },
        };

        if (window.dexter.jarvis.desktopEnabled || window.dexter.jarvis.mobileEnabled) {
            var mSurface = "";
            window.fedsConfig.jarvis = {
                surfaceName: !window.dexter.jarvis.isDesktop && mSurface ? mSurface : "homepage_loggedout_default",
                surfaceVersion: "1.83",
                getContext: (window.dexter && window.dexter.callbacks) ? window.dexter.callbacks.getContext : null,
                directConfig:  {
                    lazyLoad: window.dexter.jarvis.lazyLoadEnabled,
                },
                onDemand: true
            }
        }
        bazadebezolkohpepadr="109797311"
    var pagePath = '\/content\/offers\u002Dhomepage\/us\/en\/index\/loggedout\/default\u002Dredesign\u002D7\u002D15\u002Ddotcom\u002D21289\/jcr:content';
    var loggedinExperience = pagePath.indexOf('loggedin') > 0;
    var localeRoot = dexter.geoRouting.localeMap.locales[dexter.geoRouting.localeMap.currentLocale].root || '/';
    var cookieBasedRedirect = 'true' === 'true';
    var redirectTargetUrl = cookieBasedRedirect ? localeRoot : localeRoot + 'index2.html';
    var ACOM_SIGNED_IN_STATUS = 'acomsis';
    var acomsisCookie = document.cookie.match(new RegExp(ACOM_SIGNED_IN_STATUS));
    var skipRedirection = window.location.pathname.indexOf("/content/offers-homepage") != -1 ||
        window.location.pathname.indexOf("index.loggedin.html") != -1 ||
        window.location.pathname.indexOf("index.loggedout.html") != -1;

    if (loggedinExperience && !acomsisCookie) {
        addCookieAndReload();
    }
    else if(!loggedinExperience && acomsisCookie) {
        removeCookieAndReload();
    }
    window.removeBodyHiding = true;

    var adobeid = {
        env: '//ims-na1.adobelogin.com',
        jumpToken: {
            api: '/ims/jumptoken/v1',
        },
        client_id: 'adobedotcom2',
        scope: 'creative_cloud,AdobeID,openid,gnav,read_organizations,additional_info.projectedProductContext,sao.ACOM_CLOUD_STORAGE,sao.stock,sao.cce_private,additional_info.roles',
        uses_redirect_mode: true,
        locale : 'en_US',
        uses_modal_mode: false,
        api_parameters: {
            authorize: {
                state: {
                    ac: '',
                }
            }
        },
        optimizations: {
            fastEvents: true
        },
        onAccessToken: function (accessToken, info) {
            // cancel redirection to logged-in homepage
            if (document.location.hash === "#noredirect" || typeof CQ !== "undefined") {
                return;
            }
            var validSession = info && (info.expiresAtMilliseconds > 0) && (Date.now() < info.expiresAtMilliseconds);
            if (validSession && cookieBasedRedirect && !acomsisCookie) {
                window.removeBodyHiding = false;
                addCookieAndReload();
            }
            else if (validSession && !cookieBasedRedirect && window.location.pathname != redirectTargetUrl) {
                window.removeBodyHiding = false;
                window.location.assign(adobeid.redirect_uri);
            }
        },
        onReady: function () {
            if (window.adobeIMS && !window.adobeIMS.isSignedInUser() && cookieBasedRedirect && acomsisCookie) {
                removeCookieAndReload();
            }
            else if (window.adobeIMS && !window.adobeIMS.isSignedInUser() && !cookieBasedRedirect && window.location.pathname == redirectTargetUrl) {
                window.location.assign(localeRoot);
            }
            else {
                window.dispatchEvent(new Event('dexter:IMSReady'));
                var imsBodyStyle = document.getElementById('ims-body-style');
                if (window.removeBodyHiding && imsBodyStyle && imsBodyStyle.parentNode) {
                    imsBodyStyle.parentNode.removeChild(imsBodyStyle);
                }
            }
        }
    };

    function removeCookieAndReload() {
        document.cookie = ACOM_SIGNED_IN_STATUS + '=;path=/;expires=' + new Date(0).toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    function addCookieAndReload() {
        var date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000));
        document.cookie = ACOM_SIGNED_IN_STATUS + '=1;path=/;expires='+ date.toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    if (false) {
        adobeid.redirect_uri = window.location.href;
    } else {
        adobeid.redirect_uri = window.location.origin + redirectTargetUrl;
    }

    window.dexter.Anyware = window.dexter.Anyware || {};
    window.dexter.Anyware.ims = {
        clientId: 'unified_checkout_client_app',
        targetScope: 'AdobeID,openid,sao.stock,additional_info.roles,additional_info.vat_id,additional_info.dob,update_profile.countryCode',
    }
    window.dexter.Ims = {
        imsTimeout: '3000',
    }

    window.dexter.config = window.dexter.config || {};
    window.dexter.config.lazyThreshold = '1500px 0px';

            if (window.location.search && window.location.search.indexOf("mboxDisable=1")>0) {
                var atBodyStyle = document.getElementById('at-body-style');
                if (atBodyStyle && atBodyStyle.parentNode) {
                    atBodyStyle.parentNode.removeChild(atBodyStyle);
                }
            }
        
        window.dexter = window.dexter || {};
        window.dexter.Analytics = window.dexter.Analytics || {};
        window.dexter.Analytics.language = "en_us";
        window.dexter.Analytics.geoRegion = "us";
    
            window.dexter.Analytics.launchLoaded = true;
            window.dexter.Analytics.audienceManagerEnabled = '' !== 'disabled';
        
                window.dexter.Analytics.environment = 'production';
                window.marketingtech = window.marketingtech || {};
                window.marketingtech.adobe = {
                    target: true,
                    audienceManager: window.dexter.Analytics.audienceManagerEnabled,
                    launch: {
                        property: 'global',
                        environment: window.dexter.Analytics.environment,
                        controlPageLoad: true
                    },
                    analytics: {
                        additionalAccounts: ''
                    }
                };
            
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.adobe.com",
    "name": "Adobe",
    "legalName": "Adobe Systems Incorporated",
    "alternateName": "Adobe.com",
    "logo": "https://www.adobe.com/favicon.ico",
    "sameAs": [
        "https://www.facebook.com/Adobe/",
"https://twitter.com/Adobe/",
"https://www.linkedin.com/company/adobe/",
"https://www.instagram.com/adobe/"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+1-800-833-6687",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "US",
            "availableLanguage": "US"
        }
    ]
}

{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://www.adobe.com/",
    "potentialAction": {
        "@type":"SearchAction",
        "target":"https://www.adobe.com/search.html?term={search_term}",
        "query-input":"required name=search_term"
    }
}

        window.dexter.jarvis = {
            isDesktop: (window.dexter.personalization && window.dexter.personalization.technology && window.dexter.personalization.technology.platform && window.dexter.personalization.technology.platform.type) ? window.dexter.personalization.technology.platform.type === 'desktop' : false,
        };
        window.dexter.jarvis.desktopEnabled = window.dexter.jarvis.isDesktop && true,
        window.dexter.jarvis.mobileEnabled = !window.dexter.jarvis.isDesktop && true,
        window.dexter.jarvis.lazyLoadEnabled = (!window.dexter.jarvis.isDesktop)
            ? true
            : true;
        window.fedsConfig = {
            locale: 'en',
            disableSticky: false,
            content: {
                experience: 'acom',
            },
            breadcrumbs: {
                showLogo: false,
                links: []
            },
            subnav: {},
            footer: {
                regionModal: function () { window.location.hash = 'languageNavigation'; }
            },
            privacy: {
                otDomainId: '7a5eb705\u002D95ed\u002D4cc4\u002Da11d\u002D0cc5760e93db\u002Dtest' || '7a5eb705-95ed-4cc4-a11d-0cc5760e93db-test',
                footerLinkSelector: '[data\u002Dfeds\u002Daction=\x22open\u002Dadchoices\u002Dmodal\x22]',
            },
        };

        if (window.dexter.jarvis.desktopEnabled || window.dexter.jarvis.mobileEnabled) {
            var mSurface = "";
            window.fedsConfig.jarvis = {
                surfaceName: !window.dexter.jarvis.isDesktop && mSurface ? mSurface : "homepage_loggedout_default",
                surfaceVersion: "1.83",
                getContext: (window.dexter && window.dexter.callbacks) ? window.dexter.callbacks.getContext : null,
                directConfig:  {
                    lazyLoad: window.dexter.jarvis.lazyLoadEnabled,
                },
                onDemand: true
            }
        }
        bazadebezolkohpepadr="109797311"
    var pagePath = '\/content\/offers\u002Dhomepage\/us\/en\/index\/loggedout\/default\u002Dredesign\u002D7\u002D15\u002Ddotcom\u002D21289\/jcr:content';
    var loggedinExperience = pagePath.indexOf('loggedin') > 0;
    var localeRoot = dexter.geoRouting.localeMap.locales[dexter.geoRouting.localeMap.currentLocale].root || '/';
    var cookieBasedRedirect = 'true' === 'true';
    var redirectTargetUrl = cookieBasedRedirect ? localeRoot : localeRoot + 'index2.html';
    var ACOM_SIGNED_IN_STATUS = 'acomsis';
    var acomsisCookie = document.cookie.match(new RegExp(ACOM_SIGNED_IN_STATUS));
    var skipRedirection = window.location.pathname.indexOf("/content/offers-homepage") != -1 ||
        window.location.pathname.indexOf("index.loggedin.html") != -1 ||
        window.location.pathname.indexOf("index.loggedout.html") != -1;

    if (loggedinExperience && !acomsisCookie) {
        addCookieAndReload();
    }
    else if(!loggedinExperience && acomsisCookie) {
        removeCookieAndReload();
    }
    window.removeBodyHiding = true;

    var adobeid = {
        env: '//ims-na1.adobelogin.com',
        jumpToken: {
            api: '/ims/jumptoken/v1',
        },
        client_id: 'adobedotcom2',
        scope: 'creative_cloud,AdobeID,openid,gnav,read_organizations,additional_info.projectedProductContext,sao.ACOM_CLOUD_STORAGE,sao.stock,sao.cce_private,additional_info.roles',
        uses_redirect_mode: true,
        locale : 'en_US',
        uses_modal_mode: false,
        api_parameters: {
            authorize: {
                state: {
                    ac: '',
                }
            }
        },
        optimizations: {
            fastEvents: true
        },
        onAccessToken: function (accessToken, info) {
            // cancel redirection to logged-in homepage
            if (document.location.hash === "#noredirect" || typeof CQ !== "undefined") {
                return;
            }
            var validSession = info && (info.expiresAtMilliseconds > 0) && (Date.now() < info.expiresAtMilliseconds);
            if (validSession && cookieBasedRedirect && !acomsisCookie) {
                window.removeBodyHiding = false;
                addCookieAndReload();
            }
            else if (validSession && !cookieBasedRedirect && window.location.pathname != redirectTargetUrl) {
                window.removeBodyHiding = false;
                window.location.assign(adobeid.redirect_uri);
            }
        },
        onReady: function () {
            if (window.adobeIMS && !window.adobeIMS.isSignedInUser() && cookieBasedRedirect && acomsisCookie) {
                removeCookieAndReload();
            }
            else if (window.adobeIMS && !window.adobeIMS.isSignedInUser() && !cookieBasedRedirect && window.location.pathname == redirectTargetUrl) {
                window.location.assign(localeRoot);
            }
            else {
                window.dispatchEvent(new Event('dexter:IMSReady'));
                var imsBodyStyle = document.getElementById('ims-body-style');
                if (window.removeBodyHiding && imsBodyStyle && imsBodyStyle.parentNode) {
                    imsBodyStyle.parentNode.removeChild(imsBodyStyle);
                }
            }
        }
    };

    function removeCookieAndReload() {
        document.cookie = ACOM_SIGNED_IN_STATUS + '=;path=/;expires=' + new Date(0).toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    function addCookieAndReload() {
        var date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000));
        document.cookie = ACOM_SIGNED_IN_STATUS + '=1;path=/;expires='+ date.toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    if (false) {
        adobeid.redirect_uri = window.location.href;
    } else {
        adobeid.redirect_uri = window.location.origin + redirectTargetUrl;
    }

    window.dexter.Anyware = window.dexter.Anyware || {};
    window.dexter.Anyware.ims = {
        clientId: 'unified_checkout_client_app',
        targetScope: 'AdobeID,openid,sao.stock,additional_info.roles,additional_info.vat_id,additional_info.dob,update_profile.countryCode',
    }
    window.dexter.Ims = {
        imsTimeout: '3000',
    }

    window.dexter.config = window.dexter.config || {};
    window.dexter.config.lazyThreshold = '1500px 0px';
