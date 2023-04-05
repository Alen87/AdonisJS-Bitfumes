import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import ArticlesController from 'App/Controllers/Http/ArticlesController'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


// Route.get('/news', async ({view})=>{
//   return view.render("news.view")
// })

Route.get("/news",'ArticlesController.view').as('news_view');


Route.get('/news/create','ArticlesController.create').as('news_create');

Route.post('/news',({request})=>{
  //const {email,password} = request.body()
  return request.body();
  // return response.redirect('/news')
 // return view.render('article.create')
}).as('news.create');


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