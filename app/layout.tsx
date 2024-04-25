import Navbar from "./component/Navbar"
import Footer
 from "./component/Footer"
 import './styles/globals.css'
  
export const metadata = {
  title: 'Law Blog',
  description: 'Lawyers New and Update Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en"><body>
      <Navbar />
        {children}
      <Footer />
</body></html> 
   
     
   
  )
}
