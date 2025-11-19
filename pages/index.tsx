import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding:20,fontFamily:'Arial, sans-serif'}}>
      <h1>Stimulsoft Example</h1>
      <ul>
        <li><Link href="/report">Ver reporte (stimulsoft-reports-js)</Link></li>
        <li><Link href="/dashboard">Ver dashboard (stimulsoft-dashboards-js)</Link></li>
      </ul>
      <p>Instala dependencias con <code>npm install</code> o los comandos específicos indicados en el README.</p>
    </main>
  )
}
