export default function PastorChaplainUSAWebsite() {
  const sections = [
    {
      title: "Formación y desarrollo",
      text: "Preparamos pastores y líderes cristianos con un enfoque bíblico, ético y compasivo para el servicio de capellanía en distintos contextos de necesidad.",
    },
    {
      title: "Credenciales y respaldo",
      text: "Ofrecemos procesos ministeriales ordenados, acompañamiento espiritual y documentación institucional para fortalecer la identidad y presentación del capellán.",
    },
    {
      title: "Red y misión",
      text: "Promovemos una comunidad de capellanes comprometidos con servir, consolar, orientar y representar a Cristo con excelencia, orden y respeto.",
    },
  ];

  const services = [
    "Orientación para el proceso de capellanía",
    "Formación espiritual y ministerial",
    "Acompañamiento para líderes cristianos",
    "Red de apoyo y desarrollo para capellanes",
    "Recursos y materiales para el servicio",
    "Procesos institucionales para credenciales y documentación",
  ];

  const audience = [
    "Pastores con llamado a servir como capellanes",
    "Líderes cristianos que desean prepararse para contextos de necesidad",
    "Ministros que buscan respaldo espiritual e institucional",
    "Siervos comprometidos con un ministerio compasivo, ordenado y bíblico",
  ];

  const values = [
    "Fundamento bíblico",
    "Ética ministerial",
    "Servicio compasivo",
    "Orden y excelencia",
    "Respeto institucional",
    "Acompañamiento espiritual",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-amber-700">Pastor Chaplain USA™</div>
            <div className="text-xs text-stone-500">A ministry of Iglesia Nueva Vida en Jesucristo</div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-700 md:flex">
            <a href="#inicio" className="hover:text-amber-700">Inicio</a>
            <a href="#mision" className="hover:text-amber-700">Misión</a>
            <a href="#servicios" className="hover:text-amber-700">Servicios</a>
            <a href="#proceso" className="hover:text-amber-700">Proceso</a>
            <a href="#contacto" className="hover:text-amber-700">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="rounded-2xl bg-amber-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-800"
          >
            Solicitar información
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-stone-100" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-amber-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-700">
                Capellanía con propósito
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl">
                Presentamos una capellanía seria, bíblica y preparada para servir.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Pastor Chaplain USA™ es una iniciativa enfocada en el desarrollo, formación y respaldo espiritual de líderes cristianos llamados al servicio de capellanía. Nuestro propósito es preparar siervos con orden, compasión y excelencia para ministrar en distintos contextos de necesidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#proceso"
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-stone-800"
                >
                  Ver proceso
                </a>
                <a
                  href="#servicios"
                  className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400"
                >
                  Explorar servicios
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {sections.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-stone-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/60">
                <div className="rounded-[1.5rem] bg-gradient-to-b from-stone-900 to-stone-700 p-8 text-white">
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Presentación institucional</div>
                  <div className="mt-3 text-3xl font-semibold">Pastor Chaplain USA™</div>
                  <div className="mt-4 h-px bg-white/20" />
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="text-sm font-medium text-amber-200">Enfoque</div>
                      <div className="mt-1 text-sm text-stone-100">Capellanía cristiana con fundamento bíblico, ética ministerial y servicio compasivo.</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="text-sm font-medium text-amber-200">Propósito</div>
                      <div className="mt-1 text-sm text-stone-100">Preparar, respaldar y fortalecer líderes llamados a servir en contextos de necesidad.</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="text-sm font-medium text-amber-200">Cobertura</div>
                      <div className="mt-1 text-sm text-stone-100">Comunidades, hospitales, instituciones, acompañamiento pastoral y espacios donde se requiera presencia espiritual.</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-stone-50 p-5">
                  <div className="text-sm font-semibold text-stone-800">Ejemplo de identificación institucional</div>
                  <div className="mt-2 text-sm leading-6 text-stone-600">
                    Credenciales, placas y documentación ministerial se presentan como parte del respaldo institucional del programa y del desarrollo ordenado del servicio de capellanía.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mision" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Misión</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Una plataforma de apoyo, desarrollo y orden ministerial</h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                A través de este programa se ofrecen procesos de entrenamiento, acompañamiento ministerial y preparación espiritual para pastores y líderes que desean servir en diferentes contextos. Nuestro enfoque está basado en principios bíblicos, ética ministerial y servicio compasivo, promoviendo el crecimiento espiritual, la responsabilidad y el compromiso con la fe.
              </p>
              <p className="mt-5 text-base leading-8 text-stone-600">
                Pastor Chaplain USA™ funciona como una plataforma de apoyo y desarrollo ministerial, facilitando herramientas, recursos y orientación para aquellos que desean ejercer su llamado con excelencia y orden.
              </p>
            </div>
            <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Valores</div>
              <div className="mt-5 grid gap-3">
                {values.map((value) => (
                  <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white py-20 ring-1 ring-stone-200/70">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Servicios</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Lo que ofrecemos dentro de la capellanía</h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Hemos diseñado una presentación seria y clara para mostrar el alcance del programa sin hacer afirmaciones innecesarias. Todo está enfocado en el desarrollo del capellán y su preparación para servir con orden, respeto y compasión.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <div className="text-base font-semibold text-stone-900">{service}</div>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Presentado dentro de un marco cristiano, institucional y ministerial para apoyar el llamado del capellán con claridad y excelencia.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">¿A quién está dirigido?</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Una vía de preparación para líderes con llamado al servicio</h2>
              <div className="mt-6 grid gap-3">
                {audience.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700 ring-1 ring-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div id="proceso" className="rounded-[2rem] bg-amber-700 p-8 text-white shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-100">Proceso</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Un camino claro y ordenado</h2>
              <div className="mt-8 space-y-5">
                {[
                  "Solicitud inicial y contacto institucional",
                  "Orientación sobre el enfoque y propósito del programa",
                  "Proceso de acompañamiento y preparación ministerial",
                  "Desarrollo de recursos, documentación y pasos siguientes",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-sm leading-7 text-amber-50">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Presentación institucional</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Una capellanía preparada para crecer con claridad, respeto y propósito.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
                Desde la página principal hasta cada elemento visual y ministerial, Pastor Chaplain USA™ puede presentarse con una identidad sólida, sobria y confiable, orientada al desarrollo de capellanes y al respaldo de su servicio.
              </p>
            </div>
            <a
              href="#contacto"
              className="rounded-2xl bg-amber-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-600"
            >
              Aplicar como capellán
            </a>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Contacto</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Solicitar información</h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Si desea conocer más sobre el programa, el proceso o la presentación institucional de Pastor Chaplain USA™, puede comunicarse con nosotros para recibir orientación inicial.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Correo</div>
                  <div className="mt-2 text-sm font-medium text-stone-900">pastor@creele.org</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Sitio</div>
                  <div className="mt-2 text-sm font-medium text-stone-900">creele.org</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-stone-50 p-8 ring-1 ring-stone-200">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Formulario sugerido</div>
              <div className="mt-4 space-y-4">
                {[
                  "Nombre completo",
                  "Correo electrónico",
                  "Teléfono",
                  "Ciudad / Estado",
                  "Iglesia o ministerio",
                  "Mensaje o interés principal",
                ].map((field) => (
                  <div key={field} className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-500">
                    {field}
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800">
                Enviar solicitud
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
