import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Tsuen Wan" invert={invert}>
          Flat K, 8/F, 2-6 Fui Yiu Kok Street
          <br />
          N.T., Hong Kong SAR
        </Office>
      </li>
      <li>
        <Office name="Lai Chi Kok" invert={invert}>
          Room C, 7/F, 82 Broadway Street
          <br />
          Kowloon, Hong Kong SAR
        </Office>
      </li>
    </ul>
  )
}
