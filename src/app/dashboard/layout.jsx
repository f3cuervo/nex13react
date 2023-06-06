import React from 'react'
//En el layout se cargan los componentes shared 
//si se necesita que el layout se recargue usaremos un archivo llmado template
function DashboardLayout({children}) {
  return (
    <div style={{color:"red"}}>
        <h3>Navbar</h3>
      {children}
    </div>
  )
}

export default DashboardLayout
