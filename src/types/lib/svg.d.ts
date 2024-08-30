declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>
  export default ReactComponent
}

declare module '*.svg?url' {
  const content: any
  export default content
}
