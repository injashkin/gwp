import * as React from "react"
import { formControl, button } from "./feedback.css"
import { Box, NavLink, Text } from "./ui"

export default function Feedback() {
  return (
    <Box>
      <Text as="p">
        Оставьте заявку и наши менеджеры свяжутся с вами в течении 15 минут
      </Text>
      <Box as="form">
        <Box paddingY={2}>
          <input
            type="text"
            placeholder="* Имя:"
            className={formControl}
          ></input>
        </Box>
        <Box paddingY={2}>
          <input
            type="text"
            placeholder="* Телефон:"
            className={formControl}
          ></input>
        </Box>
      </Box>
      <Box paddingY={3}>
        <Text as="small">
          Отправляя данную форму, вы соглашаетесь c{" "}
          {
            <NavLink
              target="_blank"
              to="http://2166.wp.shabloner.ru/politika-konfidencialnosti?no_bottom=1"
            >
              Политикой конфиденциальности
            </NavLink>
          }
        </Text>
      </Box>
      <button type="submit" className={button}>Отправить</button>
    </Box>
  )
}
