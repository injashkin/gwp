# Добавление блога на домашнюю страницу стартера

Стартер Gatsby Homepage включает компоненты для создания домашней страницы и страницы _About_, а также шаблоны для простых страниц, таких как страница _Privacy Policy_.

По умолчанию стартер не имеет блога, но можно установить дополнительную тему и тогда можно получать контент блога из CMS.

## Get started

Контент для страниц блога создается с помощью [Gatsby Theme][], которую вам нужно будет установить на свой сайт.

[gatsby theme]: https://www.gatsbyjs.com/docs/themes/

Эта начальная страница использует WordPress для своего контента, но вы можете выбрать другую CMS для своего блога.
Например, если вы решили перейти на WordPress, но у вас есть существующий блог на другой CMS и вы хотите сохранить контент отдельно, вы можете установить тему блога для этой CMS.

В настоящее время для работы с этим стартером доступны следующие темы блога "из коробки":

- [gatsby-theme-contentful-blog][]
- [gatsby-theme-datocms-blog][]
- [gatsby-theme-wordpress-blog][]

Выберите одну из этих тем блога и установите ее:

```sh name
npm i gatsby-theme-wordpress-blog
```

Затем, добавьте тему в файл `gatsby-config.js`.

```js name
// gatsby-config.js
module.exports = {
  plugins: [
    // ...
    // Добавьте тему в массив плагинов
    "gatsby-theme-wordpress-blog",
  ],
}
```

### Добавление контента в WordPress

В админ панели WordPress создайте и опубликуйте записи в блоге, затем перейдите по адресу `https://Ваш_сайт/blog`, где будет список статей блога.

### Environment Variables

If you're using a different CMS in your blog than the one used for the homepage content, be sure to add the required environment variables to your `.env.development` and `.end.production` files.

- WordPress requires:
  - `WPGRAPHQL_URL`
- Contentful requires:
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ACCESS_TOKEN`
- DatoCMS requires:
  - `DATOCMS_API_TOKEN`
  - `DATOCMS_ENVIRONMENT`

## Добавление шаблонов

Эти темы блога по умолчанию не отображают страницы. Как только тема блога будет добавлена на ваш сайт и настроена, создайте на своем сайте два шаблона для отображения страницы индекса блога и страниц записей в блоге. Вам нужно будет добавить файлы `src/templates/blog-index.js` и `src/templates/blog-post.js`.

```js
// example src/templates/blog-index.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Heading, Box, Link } from "../components/ui"

export default function BlogIndex(props) {
  const posts = props.data.allBlogPost.nodes

  return (
    <Layout title="Blog">
      <Container>
        <Box paddingY={4}>
          <Heading as="h1">Blog</Heading>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.image && (
                  <Link to={`/blog/${post.slug}`}>
                    <GatsbyImage
                      alt={post.image.alt}
                      image={getImage(post.image)}
                    />
                  </Link>
                )}
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlogPost {
      nodes {
        id
        slug
        title
        excerpt
        image {
          id
          alt
          gatsbyImageData
        }
      }
    }
  }
`
```

```js
// example src/templates/blog-post.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Heading, Box } from "../components/ui"

export default function BlogPost(props) {
  const post = props.data.blogPost

  return (
    <Layout {...post} description={post.excerpt}>
      <Container>
        <Box paddingY={4}>
          {post.image && (
            <GatsbyImage alt={post.image.alt} image={getImage(post.image)} />
          )}
          <Heading as="h1">{post.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    blogPost(id: { eq: $id }) {
      id
      slug
      title
      html
      excerpt
      date
      image {
        id
        url
        gatsbyImageData
        alt
      }
    }
  }
`
```

## Using another CMS or data source

If the CMS that you'd like to use for your blog hasn't been built as a theme yet, you can use [gatsby-theme-abstract-blog][] to pull your blog content for other sources.

<!-- TODO: check links after publishing -->

[gatsby-theme-abstract-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-abstract-blog
[gatsby-theme-contentful-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-contentful-blog
[gatsby-theme-datocms-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-datocms-blog
[gatsby-theme-wordpress-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-wordpress-blog
