import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className='mt-12 mb-6 text-xl font-semibold tracking-tighter'>
          soumya mukherjee
        </h1>

        <div>
          {/* <p className='mb-6'>
            building solid and scalable products with delightful user experience
            boosts me up to learn more new technologies.
          </p> */}
          <ul>
            <li>
              &#x2022; frontend dev{' '}
              <Link
                href='https://routerprotocol.com'
                className='hover:underline underline-offset-2'
              >
                @routerprotocol
              </Link>
            </li>
            <li>&#x2022; exploring fullstack dev.</li>
            <li>&#x2022; trying to fix things.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
