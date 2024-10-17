import { 
  Hero,
  PopularProducts,
  SpecialOffer,
} from './sections'


const App = () => (
  <main className='relative'>
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
  </section>
  <section className="padding">
    <PopularProducts />
  </section>
  <section className="padding">
    <SpecialOffer />
  </section>
</main>
)

export default App
