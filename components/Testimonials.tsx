import Image from "next/image";

const testimonials = [
  [
    {
      content:
        "Acabo de tener acceso anticipado a esto y es *ridículo*. Desarrollado por @vercel x @replicatehq, también muy rápido.",
      link: "https://twitter.com/rauchg/status/1612233034622984192",
      author: {
        name: "Guillermo Rauch",
        role: "CEO de Vercel",
        image: "/g.jpg",
      },
    },
    {
      content:
        "¡Esto es increíble! Y en el 🧵 puede ver toda la pila de código abierto que se puede implementar instantáneamente en Vercel",
      link: "https://twitter.com/cramforce/status/1612496954218672128",
      author: {
        name: "Malte Ubl",
        role: "CTO en Vercel",
        image: "/malte.jpg",
      },
    },
  ],
  [
    {
      content:
        "Lo acabo de usar y estoy muy impresionado con el sitio web y quería expresar mi agradecimiento por el excelente diseño y funcionalidad. ¡Seguíd con el buen trabajo!",
      link: "https://twitter.com/phar_whaz/status/1612498030627852309",
      author: {
        name: "Fawaz Adeniji",
        role: "Ingeniero de Software",
        image: "/fawaz.jpg",
      },
    },
    {
      content:
        "Convertir fotos borrosas en fotos perfectamente nítidas. Funciona como magia",
      link: "https://twitter.com/sergvind/status/1612610058369515521",
      author: {
        name: "Sergei Vinderskikh",
        role: "CPO en Treeum",
        image: "/sergei.jpg",
      },
    },
  ],
  [
    {
      content:
        "¡Lo acabo de usar y maldita sea, seguiré usándolo! Esto es tan bueno. ¡Buen trabajo!",
      link: "https://twitter.com/Himanil_Gole/status/1612510385504157697",
      author: {
        name: "Himanil Gole",
        role: "Diseñador & Fundador de CBREX",
        image: "/himanil.jpg",
      },
    },
    {
      content:
        "¡Wow gracias! ¡Probé algunos y me encanta! Mi pequeño ejemplo (foto del padre del original de los 70 a la derecha), ¡realmente lo limpió!",
      link: "https://twitter.com/rod_ellison/status/1612513333302775809",
      author: {
        name: "Rod Ellison",
        role: "Ingeniero de Software",
        image: "/rod.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Lo que dicen nuestros clientes"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Querido por miles alrededor del 🌎
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            Mira lo que dicen nuestros 80,000+ usuarios de este producto.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="foto del autor del testimonio"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
