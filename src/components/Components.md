## Container

<Container width="fullbleed"></Container>
<Container className={desktopHeaderNavWrapper}></Container>

wide - максимальная ширина 1440px без падингов
normal - максимальная ширина 1280px с падингами (по умолчанию)
narrow - максимальная ширина 1024px с падингами
tight - максимальная ширина 848px с падингами
fullbleed - то же, что и normal плюс удвоенные падинги сверху и снизу

---

## Section

<Section padding={5} radius="large" background="primary"></Section>

Свойства для компонента Section:

- radius - Закругляет углы для секции. Принимает значения `"button" | "large" | "circle"`, что соответствует `10px | 24px | 99999px`.

---

## Flex и FlexList

<Flex gap={4} variant="spaceBetween"></Flex>
<FlexList wrap gap={4}></FlexList>
<Flex responsive variant="end"></Flex>

Свойства для компонента Flex:

- `variant` - Можно задавать следующие значения (через дефис указано, чему соответствует в CSS):

  - `"stretch"` - alignItems: "stretch"
  - `"center"` - width: "100%", flexWrap: "wrap", justifyContent: "center",
  - `"end"` - alignItems: "flex-end"
  - `"start"` - alignItems: "flex-start"
  - `"baseline"` - align-items: "flex-start"
  - `"column"` - flexDirection: "column"
  - `"wrap"` - flex-wrap: "wrap"
  - `"columnStart"` - flexDirection: "column", alignItems: "flex-start",
  - `"spaceBetween"` - width: "100%", flexWrap: "wrap", justifyContent: "space-between",
  - `"responsive"` - для мобильных flexDirection: "column", для десктопов flexDirection: "row",1

- `gap` - Аналогично column-gap для flex в css. Принимает значения `0 | 1 | 2 | 3 | 4 | 5 | 6`, что соответствует `0 | 4px | 8px | 16px | 32px | 64px | 128px`.

- `gutter` - Пока не понял. Принимает те же значения, что и свойство gap. Влияет на margin-left и margin-right.

- `wrap` - Все дочерние элементы начинаются с новой строки.

- `responsive` -
- `marginY` -
- `alignItems` -

---

## Text

<Text as="h1" center></Text>
<Text variant="lead" bold></Text>

Свойства для компонента Text:

- `as` - Задает тег текстовому элементу. По умолчанию `as="div"`. Значение должно быть для текстовых тегов: `h1-h6`, `p`, `cite` и др. [Смотри](https://html5book.ru/html-text/).

- `variant` - Задает свойства шрифта. По умолчанию `variant="body"`. Значения могут быть следующими:

  - "body" - размер 16px
  - "small" - размер 14px
  - "center" - по центру
  - "bold" - жирный
  - "lead" - размер 18px, с увеличенным межстрочным интервалом
  - "superHeading" - обычно для стилизации h1, размер 48px, нижний отступ 128px
  - "heading" - обычно для стилизации h2, размер 48px
  - "subhead" - обычно для стилизации h3, размер 32px
  - "subheadSmall" - обычно для подзаголовков h2, h3, размер 24px
  - "kicker" - размер 14px, все буквы заглавные
  - "caps" - размер 14px, все буквы заглавные, жирный
  - "stat" - размер 48px, полужирный
  - "statLabel" - размер 24px, жирный
  - "medium" - размер 18px
  - "mega" - размер 180px

- `center` - Центрирует текст. Если указан, то `true`, если не указан, то `false`. Применяет css свойство `text-align: "center"`

- `bold` - Делает текст жирным. Если указан, то `true`, если не указан, то `false`. Применяет css свойство `font-weight: "700"`

Свойство `variant` для компонента Text - это комбинации таких css свойств, как font-size, fon-family, font-weight, line-height, letter-spacing, margin-bottom.

---

## SuperHeading, Heading, Subhead и Kicker

<Heading center></Heading>

Компоненты используются для создания заголовков. Любой из этих компонентов вызывает компонент <Text> с заданными свойствами `as` и `variant`.

<SuperHeading> - Создает заголовок первого уровня. Вызывает <Text as="h1" variant="superHeading" />
<Heading> - Создает заголовок второго уровня. Вызывает <Text as="h2" variant="heading" />
<Subhead> - Создает заголовок третьего уровня. Вызывает <Text as="h3" variant="subhead" />
<Kicker> - Устанавливает для текста все буквы заглавными. Вызывает <Text variant="kicker" />

Если мы хотим, чтобы заголовок имел тег <h1>, а стили имел как у <Heading>, то пишем так:

<Heading as="h1"></Heading>

Компонентам <SuperHeading>, <Heading>, <Subhead> и <Kicker> можно задавать те же свойства что и компоненту <Text>.

---

## GatsbyImage

Является компонентом плагина [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/).

<GatsbyImage alt={props.image.alt} image={getImage(props.image.gatsbyImageData)} className={desktopHeroBottomLayer} />

## Avatar, Logo, Icon

<Icon alt={props.image.alt} image={props.image.gatsbyImageData} size="large" />

С помощью этих компонентов можно создавать аватары, логотипы, иконки. Компоненты используют компонент GatsbyImage плагина gatsby-plugin-image.

- alt -
- image -
- size - можно задать "small" | "medium" | "large", что соответствует "24px" | "32px" | "64px"
