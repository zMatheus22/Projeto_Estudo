import postgres from "postgres";

const USER_DB = "docker";
const PASSWORD_DB = "docker";
const URL_PORT_DB = "localhost:5432";
const NAME_BASE = "shortlinks";

export const sql = postgres(
  `postgresql://${USER_DB}:${PASSWORD_DB}@${URL_PORT_DB}/${NAME_BASE}`
);
