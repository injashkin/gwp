<a href="https://www.gatsbyjs.com">
  <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
</a>

# Gatsby Starter WordPress Homepage

Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a homepage and can be customized to match your own visual branding.

[View the Demo](https://gatsbywordpresshomepagets.gatsbyjs.io/)

**Note:**
This version of the WordPress homepage starter is written in TypeScript. If you want to use WordPress but JavaScript is more your style, there is also a JavaScript version maintained on [GitHub](https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage).

## Quick start

You will need a new or existing WordPress instance to use this starter.
This starter requires the following plugins to be installed in your WordPress instance:

- [WPGatsby][]
- [WPGraphQL][]
- [Advanced Custom Fields][]
- [WPGraphQL for Advanced Custom Fields][]

Once these plugins are installed, you'll need the URL of the GraphQL endpoint for configuration.

[wpgatsby]: https://wordpress.org/plugins/wp-gatsby/
[wpgraphql]: https://wordpress.org/plugins/wp-graphql/
[advanced custom fields]: https://wordpress.org/plugins/advanced-custom-fields/
[wpgraphql for advanced custom fields]: https://github.com/wp-graphql/wp-graphql-acf

1. **Create a Gatsby site**

   Use the Gatsby CLI to get started locally:

   ```sh repo
   npx gatsby new my-homepage https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage-ts
   ```

1. **Import content to your WordPress instance**

   - In your WordPress Admin, navigate to _Custom Fields_ > _Tools_ and upload the `data/acf-field-groups.json` file in the _Import Field Groups_ form and click _Import File_.
   - Under _Pages_, create a new page called "Homepage."
   - Ensure that the Homepage imported into WordPress is set to be your site's "Homepage" by going to _Settings_ > _Reading_ and setting the _Your homepage displays_ field to _A static page_ and select _Homepage_ from the dropdown.
   - Navigate back to the Homepage, where you should see the custom field groups for the homepage and you can add your own content.
   - Finally, go to _GraphQL_ > _Settings_ and copy the endpoint for the GraphQL API (e.g. https://example.com/graphql) and create a `.env` file with `WPGRAPHQL_URL="<your-graphql-endpoint-url>"`.

1. **Start developing**

   In your site directory, start the development server:

   ```sh
   yarn start
   ```

   Your site should now be running at <http://localhost:8000>

1. **Open the source code and start editing**

## Deploy your site

Once your content is available in WordPress, deploy your site to [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

1. Push your local site to a new repo in either GitHub, GitLab, or Bitbucket
1. Log into your [Gatsby Cloud Dashboard][] and click on **Add a site**
1. Use the **Import from a Git repository** option to find your site
1. Add the environment variables from your `.env.production` file to Gatsby Cloud during setup
1. Click **Build site** and your site should start building

For a more detailed walkthrough, see the tutorial on how to [build your site with Gatsby Cloud][tutorial].

[gatsby cloud dashboard]: https://gatsbyjs.com/dashboard
[tutorial]: https://www.gatsbyjs.com/docs/tutorial/part-1/#build-your-site-with-gatsby-cloud

### Deploy without using the CLI

Alternatively, you can deploy this starter directly to Gatsby Cloud.

Note that you will need to set up your content in WordPress manually.

[![Deploy to Gatsby](https://www.gatsbyjs.com/deploynow.svg "Deploy to Gatsby")](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage-ts)

## Setting up Gatsby Cloud Preview

To use Gatsby Cloud Preview with this site, see the documentation for
[Setting up Preview with WPGatsby][].

[setting up preview with wpgatsby]: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/configuring-wp-gatsby.md#setting-up-preview

## What's included?

```sh
├── README.md
├── gatsby-config.js
├── gatsby-node.js
├── src
│   ├── components
│   ├── pages
│   ├── colors.css.ts
│   ├── styles.css.ts
│   └── theme.css.ts
└── .env.EXAMPLE
```

1. **`gatsby-config.js`**: [Gatsby config][] file that includes plugins required for this starter.
1. **`gatsby-node.js`**: [Gatsby Node][] config file that creates an abstract data model for the homepage content.
1. **`src/`**: The source directory for the starter, including pages, components, and [Vanilla Extract][] files for styling.

[gatsby config]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[gatsby node]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
[vanilla extract]: https://vanilla-extract.style/

## How to

### Update the color theme

To update the colors used in this starter, edit the `src/colors.css.ts` file.

```.ts
// src/colors.css.ts
export const colors = {
  background: "#fff",
  text: "#004ca3",
  primary: "#004ca3",
  muted: "#f5fcff",
  active: "#001d3d",
  black: "#000",
}

```

If you'd like to add additional colors, add additional keys to this object.
This file is imported into `src/theme.css.ts` and creates CSS custom properties, that can be imported and used in other `.css.ts` files.

The UI components file `src/components/ui.tsx` imports styles from `src/components/ui.css.ts`. You can see how the theme and color values are being used in this file.

### Add your logo

![Logo](./docs/images/logo.png)

Replace the `src/components/brand-logo.tsx` component with your own brand logo.
If you have an SVG version, it can be rendered inline as a React component, following the example in this file. Note that SVG attributes will need to be camel cased for JSX.

Using an inline SVG for the logo allows it to pick up the colors used in CSS, which is how the logo colors are inverted for the mobile menu.

If you prefer to use an image, use the [`StaticImage`](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#staticimage) component from `gatsby-plugin-image` in place of the SVG in this file.

### Customize headings, buttons, and other styles

![Headings & Buttons](./docs/images/headings-buttons.png)

Чтобы дополнительно настроить внешний вид домашней страницы, отредактируйте UI компоненты в `src/components/ui.tsx` и стили в `src/components/ui.css.ts`.

### Настройка компонентов раздела

Чтобы настроить любой раздел домашней страницы, отредактируйте соответствующий компонент в `src/components`. Большинство стилей для этих компонентов обрабатываются с помощью общих UI компонентов в `src/components/ui.tsx`.

### Создание пользовательских компонентов раздела

Чтобы создать новый тип раздела на домашней странице, вам потребуется создать новый компонент раздела, используя существующие компоненты в качестве примера. Для этого примера мы создадим новый компонент "About".

1. Сначала, для поддержки нового компонента создайте свои пользовательские поля в WordPress, для этого сделайте следующее:

На вкладке _Группы полей_ выберите страницу Homepage и создайте новую группу полей с помощью кнопки _+ Add Field_
В поле _Тип поля_ выберите _Группа_
В поле _Ярлык поля_ введите _About_
В поле _Имя поля_ введите _about_
В секции _Вложенные поля_ нажмите кнопку _+ Add Field_
В поле _Тип поля_ выберите _Текст_
В поле _Ярлык поля_ введите _Heading_
В поле _Имя поля_ введите _heading_
Добавьте еще одно поле с помощью кнопки _+ Add Field_ секции _Вложенные поля_
В поле _Тип поля_ выберите _Текст_
В поле _Ярлык поля_ введите _Text_
В поле _Имя поля_ введите _text_
Во вкладке _Location Rules_ секции Настройки для _Тип записи_ обязательно укажите _Страница_.
Также убедитесь, что для этой группы включена опция _Show in GraphQL_.
В правом верхнем углу нажмите кнопку _Save Changes_.

Перейдите на вкладку _Страницы_, выберите страницу _Homepage_. В самом низу в секции _About_ отредактируйте два поля _Heading_ и _Text_.

В правом верхнем углу нажмите кнопку _Обновить_

2. Отредактируйте `gatsby-node.js`

Отредактируйте файл `gatsby-node.js` сайта, добавив тип `HomepageAbout`, который соответствует вашим пользовательским полям в WordPress. Это позволяет домашней странице запрашивать абстрактный тип `HomepageAbout`.

```js
// in gatsby-node.js
exports.createSchemaCustomization = async ({ actions }) => {
// blocks
// ...
actions.createTypes(/* GraphQL */`
  type HomepageAbout implements Node & HomepageBlock {
    id: ID!
    blocktype: String
    heading: String
    text: String
  }
`)
// ...
}
// ...
exports.onCreateNode = ({ actions, node, createNodeId, createContentDigest }) => {
}
  // ...
  switch (node.internal.type) {
    case "WpPage":
      if (node.slug !== "homepage") return
      const {
        homepageHero,
        homepageCta,
        statList,
        testimonialList,
        productList,
        logoList,
        featureList,
        benefitList,
        // добавьте новую пользовательскую группу полей здесь
        about,
      } = node

      // create a new node for this field group
      about: {
        id: createNodeId(`${node.id} >>> HomepageAbout`),
        ...about,
      },

      actions.createNode({
        ...blocks.about,
        blocktype: "HomepageAbout",
        internal: {
          type: "HomepageAbout",
          contentDigest: node.internal.contentDigest,
        },
      })

      /*
      actions.createNode({
        id: bannerID,
        internal: {
          type: "HomepageBanner",
          contentDigest: createContentDigest(JSON.stringify(homepageBanner)),
        },
        parent: node.id,
        blocktype: "HomepageBanner",
        heading: homepageBanner.bannerHeading,
        text: homepageBanner.bannerText,
      })
      */

      // ...
      actions.createNode({
        ...node.homepage,
        id: createNodeId(`${node.id} >>> Homepage`),
        internal: {
          type: "Homepage",
          contentDigest: node.internal.contentDigest,
        },
        parent: node.id,
        blocktype: "Homepage",
        image: node.featuredImageId,
        // Массив content влияет на порядок расположения блоков на странице
        content: [
          heroID,
          logosID,
          // добавьте содержимое вашего баннера в том месте, в котором вы хотели бы, чтобы оно отображалось на странице
          aboutID,
          productsID,
          featuresID,
          benefitsID,
          statsID,
          testimonialsID,
          ctaID,
        ],
      })
      // ...
  }
}
```

3. Затем, создайте компонент About:

```jsx fileExt
// src/components/banner.tsx
import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"



export default function About(props) {
  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    text
  }
`
```

4. Экспортируйте компонент из `src/components/sections.tsx`

   ```js fileExt
   // src/components/sections.tsx
   export { default as HomepageHero } from "./hero"
   export { default as HomepageFeature } from "./feature"
   export { default as HomepageFeatureList } from "./feature-list"
   export { default as HomepageLogoList } from "./logo-list"
   export { default as HomepageBenefitList } from "./benefit-list"
   export { default as HomepageTestimonialList } from "./testimonial-list"
   export { default as HomepageStatList } from "./stat-list"
   export { default as HomepageCta } from "./cta"
   export { default as HomepageProductList } from "./product-list"

   // add export for new component
   export { default as HomepageAbout } from "./about"
   ```

5. Add the GraphQL query fragment to the query in `src/pages/index.tsx`

   ```js fileExt
   // in src/pages/index.tsx
   export const query = graphql`
     {
       homepage {
         id
         title
         description
         image {
           id
           url
         }
         blocks: content {
           id
           blocktype
           ...HomepageHeroContent
           ...HomepageFeatureContent
           ...HomepageFeatureListContent
           ...HomepageCtaContent
           ...HomepageLogoListContent
           ...HomepageTestimonialListContent
           ...HomepageBenefitListContent
           ...HomepageStatListContent
           ...HomepageProductListContent
           # New component fragment
           ...HomepageAboutContent
         }
       }
     }
   `
   ```

## Устранение неполадок

### Ошибки после внесения изменений в схему

Если вы внесли изменения в файл `gatsby-node.js` или внесли изменения в модель данных WordPress, то очистите кэш Gatsby перед запуском сервера разработки:

```sh
yarn clean && yarn start
```

---

## Иконки

В этом проекте применяются SVG иконки из пакета [react-feather](https://www.npmjs.com/package/react-feather). Иконки и их названия можно посмотреть [здесь](https://feathericons.com/)

## Используемые пакеты

- `gatsby-source-filesystem` плагин создаёт узлы (nodes) из файлов. Эти файлы будут доступны через запросы graphql.
- `gatsby-plugin-image` плагин создаёт изображения в различных размерах и форматах
- `gatsby-plugin-sharp` поддерживает соединения между плагинами [Sharp](https://github.com/lovell/sharp) и Gatsby
- `gatsby-transformer-sharp` позволяет более просто создавать несколько изображений нужных размеров и разрешений с помощью одного запроса

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).**

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.
