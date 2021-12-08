import { Fragment, ReactNode } from 'react'
import MainNavigation from './main-navigation'

type TProps = {
  children?: ReactNode
}

export default function Layout({ children }: TProps) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  )
}
