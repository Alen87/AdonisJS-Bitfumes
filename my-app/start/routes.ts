import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


// Route.get('/news', async ({view})=>{
//   return view.render("news.view")
// })

Route.on("/news").render("news.view")