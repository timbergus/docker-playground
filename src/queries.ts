// PostgreSQL.

export const GET_USERS = 'SELECT * FROM public.users ORDER BY email ASC'
export const POST_USER =
  'INSERT INTO public.users (name, surname, email, age) VALUES ($1, $2, $3, $4) returning email;'

// MySQL.

export const GET_RECIPES = 'SELECT * FROM test.recipes ORDER BY name ASC'
export const POST_RECIPE =
  'INSERT INTO `test`.`recipes` (`name`, `ingredient`, `time`) VALUES (?, ?, ?);'
