import StyledComponentsRegistry from '@/lib/registry'

import { Providers } from '@/lib/providers'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
        <html lang="en">
          <body>
            <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
          </body>
        </html>
    </Providers>
  )
}
