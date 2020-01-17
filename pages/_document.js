import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import GlobalStyles from 'common/GlobalStyles'

export default class FSDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    const description = `We forecast which stocks will go up, before they go up. Get yourself an edge and win. AI, fundamental, quantitative analysis maps the probable future. Intelligent portfolio management buys low, sells high, wins systematically. Indispensable investment system for smart growth and value investors.`
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="apple-mobile-web-app-title" content="Formula Stocks" />
          <meta name="application-name" content="Formula Stocks" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:title" content="Formula Stocks - algorithmic trading" />
          <meta property="og:site_name" content="Formula Stocks - algorithmic trading" />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_us" />
          <meta property="og:url" content="https://formulastocks.com" />
          <meta
            property="og:image"
            content="https://formulastocks.com/static/images/marketing/shareImage1200x627.jpg"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#4ea4f2" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <link rel="manifest" href="/static/manifest.json" />

          <link rel="preconnect" href="https://vars.hotjar.com" />
          <link rel="preconnect" href="https://js.intercomcdn.com" />
          <link rel="preconnect" href="https://api.ipapi.com" />

          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />

          {/* antD minified CSS */}
          <link rel="stylesheet" href="https://unpkg.com/antd@3.24.1/dist/antd.min.css" />

          <GlobalStyles />

          {/* Mixpanel*/}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
              0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
              for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
              MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
              mixpanel.init("cabc139e61d2d91b69843733a0cb45ef");
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* webfont loader */}
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              WebFont.load({
                google: {
                  families: ['Rubik:300,400,500,700'],
                  text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,. $@*"!?/~+-%()'
                }
              });
             `,
            }}
          />

          {/* Google Analytics */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-68151102-1', 'auto');
            ga('send', 'pageview');`,
            }}
          />

          {/* Facebook Pixel */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '467969993709783');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=467969993709783&ev=PageView&noscript=1"
            />
          </noscript>

          {/* Intercom */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            (function() {var w=window;var ic=w.Intercom;
            if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{
            var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};
            w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
            s.src='https://widget.intercom.io/widget/i194mpvo';var x=d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{
            w.addEventListener('load',l,false);}}})()`,
            }}
          />

          {/* Hotjar */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:399997,hjsv:5};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        </body>
      </html>
    )
  }
}
