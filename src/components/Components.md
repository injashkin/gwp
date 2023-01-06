## Box

Создает блок <div></div>

<Box center paddingY={5}></Box>

С помощью свойства `as` можно создать любой другой блок:

<Box as="p"></Box>

- as - Устанавливает тег элемента.

- width - Задает ширину блока. По умолчанию `"full"`. Принимает значения
  `"full" | "half" | "quarter" | "third" | "twothirds" | "fitContent"`,
  что соответствует  
   100% | 50% | 25% | 33.3333% | 33.3333% | fit-content.

- background - Устанавливает в блоке цвет фона и контрасный этому фону цвет текста. Принимает значения `primary | muted`. Если не указано, то наследует значение родителя (значения цветов смотри в файле colors.css.ts) Если цвет фона установлен primary | muted, то автоматически цвет текста будет соответственно background | primary. Если цвет фона родителя - background, то цвет текста - text.

- padding - Устанавливает внутренние отступы со всех сторон. Принимает значения `0 | 1 | 2 | 3 | 4 | 5 | 6`, что соответствует `0 | 4px | 8px | 16px | 32px | 64px | 128px`.

- paddingY - Устанавливает внутренние отступы сверху и снизу. Принимает те же значения, что и `padding`.

- radius - Закругляет углы блока. Принимает значения `"button" | "large" | "circle"`, что соответствует `10px | 24px | 99999px`.

- center - Центрирует содержимое в блоке

- border - Создает вокруг блока сплошную рамку толщиной 1px и цветом, который задан в переменной `muted` в файле colors.css.ts

- order - 0 | 1 | 2 | 3

---

## Section

Создает блок <section></section>, который по умолчанию имеет следующие CSS свойства:

```css
margin-top: 64px;
margin-bottom: 64px;
width: 100%;
```

```jsx
<Section padding={5} radius="large" background="primary"></Section>
<Section center paddingY={3}></Section>
```

Свойства для компонента <Section> те же, что и для компонента <Box>. Объясняется это тем, что компонент <Section> вызывает внутри себя компонент <Box> со свойством `as="section"`.

---

## Space

```jsx
<Space />
<Space size={5} />
```

- size - Устанавливает пустой блок, у которого задан margin. По умолчанию auto
  Принимает значения
  "auto" | 0 | 1 | 2 | 3 | 4 | 5 | 6,
  что соответствует
  "auto" | 0 | 4px | 8px |16px | 32px | 64px | 128px

---

## Container

Создает блок div с указанной шириной и отцентрованный по горизонтали

<Container width="fullbleed"></Container>
<Container className={desktopHeaderNavWrapper}></Container>

wide - максимальная ширина 1440px без падингов
normal - максимальная ширина 1280px с падингами (по умолчанию)
narrow - максимальная ширина 1024px с падингами
tight - максимальная ширина 848px с падингами
fullbleed - то же, что и normal плюс удвоенные падинги сверху и снизу

---

## Flex

Создает флекс контейнер с тегом <div>.

<Flex gap={4} variant="spaceBetween"></Flex>
<Flex responsive variant="end"></Flex>

Свойства для компонента Flex:

- `as` - Можно указать любой тег.

- `variant` - Можно задавать следующие значения (через дефис указано, чему соответствует в CSS):

  - если `variant` не указан, то align-items: "center"
  - `"stretch"` - alignItems: "stretch",
  - `"center"` - width: "100%", flexWrap: "wrap", justifyContent: "center"
  - `"centerNoWrap"` - width: "100%", justifyContent: "center"
  - `"end"` - alignItems: "flex-end"
  - `"start"` - alignItems: "flex-start"
  - `"baseline"` - align-items: "flex-start"
  - `"column"` - flexDirection: "column"
  - `"wrap"` - flex-wrap: "wrap"
  - `"columnStart"` - flexDirection: "column", alignItems: "flex-start",
  - `"spaceBetween"` - width: "100%", flexWrap: "wrap", justifyContent: "space-between",
  - `"responsive"` - для мобильных flexDirection: "column", для десктопов flexDirection: "row"
  -  `"stretchCenter"` - flexWrap: "wrap", alignItems: "normal", alignContent: "stretch", justifyContent: "center"

- `gap` - Аналогично column-gap для flex в css. Принимает значения `0 | 1 | 2 | 3 | 4 | 5 | 6`, что соответствует `0 | 4px | 8px | 16px | 32px | 64px | 128px`. По умолчанию 16px

- `gutter` - Пока не понял. Принимает те же значения, что и свойство gap. Влияет на margin-left и margin-right.

- `wrap` - Разрешает перенос дочерних элементов на новую строку.

- `responsive` -

- `marginY` -

- `alignItems` - принимает все свойства, что и variant.

---

## FlexList

Создает флекс контейнер с тегом <ul>.

<FlexList wrap gap={4}></FlexList>

Для компонента <FlexList> применяются те же параметры, что и для <Flex>.

Чтобы создать обычный контейнер (не флекс) с тегом <ul>, существует компонент <>.
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

---

## NavLink

Превращает дочерний компонент в ссылку. В качестве свойства для задания URL можно использовать `to` или `href`.

```jsx
<NavLink to={link.href}>
  <Text variant="small">{link.text}</Text>
</NavLink>
```

```jsx
<NavLink href={link.href}>{link.text}</NavLink>
```

---

## NavButtonLink

---

## FixedBGI

Создает блок с фиксированным фоновым изображением

<FixedBGI url={props.image.url} background="primary">...</FixedBGI>

По умолчанию будет создан блок <div></div>, но с помощью свойства `as` можно указать иное, например: 

<FixedBGI as="section">...</FixedBGI>

- url - ссылка на изображение

- `as` - Задает тег элементу. По умолчанию `as="div"`

Можно задавать те же свойста, что и компоненту `Box`