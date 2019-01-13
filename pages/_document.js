import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

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
          <meta name="description" content="Beat the stock market using quantitative analysis & algo trading." />
          <meta property="og:description" content="Beat the stock market using quantitative analysis & algo trading." />
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
