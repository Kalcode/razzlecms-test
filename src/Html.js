import React from 'react';

export const Html = ({
  content,
  helmet,
  state,
  linkTags,
  scriptTags,
  styleTags
}) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {linkTags}
        {styleTags}
      </head>
      <body {...bodyAttrs}>
        <div
          id="root"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              '\\u003c'
            )};`
          }}
        />
        {scriptTags}
      </body>
    </html>
  );
};
