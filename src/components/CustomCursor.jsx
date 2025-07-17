import Reveal from '@/components/Reveal'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />

      <section id="journal" className="min-h-screen  flex items-center justify-center">
        <Reveal>
          <h2 className="text-5xl font-bold">Journal</h2>
        </Reveal>
      </section>

      <section id="about" className="min-h-screen  flex items-center justify-center">
        <Reveal>
          <h2 className="text-5xl font-bold">About</h2>
        </Reveal>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Reveal>
          <h2 className="text-5xl font-bold">Contact</h2>
        </Reveal>
      </section>
    </>
  )
}
