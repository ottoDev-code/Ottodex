import StyledComponentsRegistry from '@/lib/registry'

import { Providers } from '@/lib/providers'
import './styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
        <html lang="en">
          <body>
            <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
            <ToastContainer style={{ zIndex: "99999999"}}/>
          </body>
        </html>
    </Providers>
  )
}
