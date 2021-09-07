
import { ServerStyleSheets } from '@material-ui/styles';
import Document, {
    Html,
    Head,
    Main,
    NextScript,

  } from 'next/document';

  
  export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheets();
      const originalRenderPage = ctx.renderPage;
  
    
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => props => sheet.collect(<App {...props} />),
          });
  
        const initialProps = await Document.getInitialProps(ctx);
  
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
     
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
            
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  