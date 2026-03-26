export default function PastorChaplainUSAWebsite() {
  return (
    <div className="bg-stone-50 text-gray-800 min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
          Pastor Chaplain USA™
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Presentamos una capellanía seria, bíblica y preparada para servir.
        </p>

        <a
          href="#contacto"
          className="inline-block bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-700 transition"
        >
          Solicitar Información
        </a>
      </section>

      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO */}
        <section className="mb-16 text-center">
          <p className="max-w-4xl mx-auto text-lg">
            Pastor Chaplain USA™ es una iniciativa enfocada en el desarrollo,
            formación y respaldo espiritual de líderes cristianos llamados al
            servicio de capellanía. Nuestro propósito es preparar siervos con
            orden, compasión y excelencia para ministrar en distintos contextos
            de necesidad.
          </p>
        </section>

        {/* TARJETAS */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Formación y desarrollo
            </h3>
            <p>
              Preparamos pastores y líderes cristianos con un enfoque bíblico,
              ético y compasivo para el servicio de capellanía.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Credenciales y respaldo
            </h3>
            <p>
              Procesos institucionales organizados con acompañamiento espiritual
              y documentación formal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">
              Red y misión
            </h3>
            <p>
              Comunidad de capellanes comprometidos con servir, consolar y
              representar a Cristo con excelencia.
            </p>
          </div>

        </section>

        {/* PROCESO */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-10">
            Un camino claro y ordenado
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">1. Solicitud inicial</h4>
              <p>Contacto institucional para iniciar el proceso.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">2. Orientación</h4>
              <p>Introducción al enfoque y propósito del programa.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">3. Preparación</h4>
              <p>Acompañamiento y formación ministerial.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">4. Desarrollo</h4>
              <p>Documentación, recursos y pasos siguientes.</p>
            </div>

          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="text-center bg-white p-10 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            Solicitar información
          </h2>

          <p className="mb-6">
            Si desea conocer más sobre el programa, puede comunicarse con nosotros.
          </p>

          <a
            href="mailto:pastor@creele.org"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Enviar correo
          </a>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-500 mt-20">
          © {new Date().getFullYear()} Pastor Chaplain USA™
        </footer>

      </div>
    </div>
  );
}
