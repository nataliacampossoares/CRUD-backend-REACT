import { sql } from "./db.js"


sql`
  DROP TABLE IF EXISTS videos;
`.then(()=>{
  console.log("Tabela apagada")
}).catch(error => {
  console.log(error)
})


sql`
  CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    TEXT
  );
`.then(()=>{
  console.log("Tabela criada")
}).catch(error => {
  console.log(error)
})