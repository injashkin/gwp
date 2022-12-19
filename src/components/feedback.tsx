import * as React from "react"
import { Box, NavLink, Text } from "./ui"

export default function Feedback() {
  return (
    <Box>
      <Text as="p">
        Оставьте заявку и наши менеджеры свяжутся с вами в течении 15 минут
      </Text>
      <Box as="form">
        <Box>
          <input type="text" placeholder="* Имя:"></input>
        </Box>
        <Box>
          <input type="text" placeholder="* Телефон:"></input>
        </Box>
      </Box>
      <Text as="small">
        Отправляя данную форму, вы соглашаетесь c{" "}
        {<NavLink target="_blank" to="http://2166.wp.shabloner.ru/politika-konfidencialnosti?no_bottom=1">Политикой конфиденциальности</NavLink>}
      </Text>
    </Box>
  )
}
