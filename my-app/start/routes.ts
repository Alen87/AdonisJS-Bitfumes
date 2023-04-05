import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


// Route.get('/news', async ({view})=>{
//   return view.render("news.view")
// })

Route.get("/news",async ({view})=>{
const articles= await Database.from('articles').select('*') 
return view.render("news.view",{articles})
}).as('news_view')

Route.post('/news',({response})=>{
  //const {email,password} = request.body()
  return response.redirect('/news')
}).as('news_create')


Route.patch('/news/:id',({params})=>{
  // console.log(params)
  return {params}
}).where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
}).as('news_update')

Route.delete('/news/:id',({params})=>{
  return {params}
}).where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
}).as('news_delete')